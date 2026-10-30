// Local helper HTTP server for the social-drafts admin UI (http://localhost:9100/admin/ -> Social tab).
// Listens on 127.0.0.1 only. Usage: node scripts/social-server.mjs   (env SOCIAL_PORT overrides the port)
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn, execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const PORT = Number(process.env.SOCIAL_PORT) || 9201;
const HOST = '127.0.0.1';
const ALLOWED_ORIGINS = new Set(['http://localhost:9100', 'http://127.0.0.1:9100']);
const MAX_BODY = 1024 * 1024;
const WEEK_RE = /^\d{4}-\d{2}-\d{2}$/;
const TASK_NAME = 'TTL Social Drafts';

const draftsDir = path.join(ROOT, 'social', 'drafts');
const imagesDir = path.join(ROOT, 'social', 'images');
const ideasFile = path.join(ROOT, 'social', 'ideas.md');
const topicsFile = path.join(ROOT, 'social', 'used-topics.md');
const runsLog = path.join(ROOT, 'social', 'logs', 'runs.log');

const state = { running: false, job: null, startedAt: null, lastResult: null };
let scheduleCache = { at: 0, value: null };

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const readText = (f) => {
  try {
    return fs.readFileSync(f, 'utf8');
  } catch {
    return '';
  }
};

function send(res, status, body, origin) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', Vary: 'Origin' };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  res.writeHead(status, headers);
  res.end(body === undefined ? '' : JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let tooBig = false;
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) tooBig = true;
      else chunks.push(c);
    });
    req.on('end', () => {
      if (tooBig) return reject(new HttpError(413, 'Body too large (max 1 MB)'));
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw.trim()) return resolve({});
      try {
        const parsed = JSON.parse(raw);
        if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('bad');
        resolve(parsed);
      } catch {
        reject(new HttpError(400, 'Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function lastRun() {
  const lines = readText(runsLog).split(/\r?\n/).filter((l) => l.trim());
  if (!lines.length) return null;
  const parts = lines[lines.length - 1].split(' | ');
  if (parts.length < 3) return null;
  return { at: parts[0].trim(), status: parts[1].trim(), path: parts.slice(2).join(' | ').trim() };
}

function getSchedule() {
  if (scheduleCache.value && Date.now() - scheduleCache.at < 30000) return Promise.resolve(scheduleCache.value);
  return new Promise((resolve) => {
    execFile('schtasks', ['/query', '/tn', TASK_NAME, '/fo', 'LIST'], { windowsHide: true, timeout: 15000 }, (err, stdout) => {
      let value = { registered: false, nextRun: null };
      if (!err) {
        const prefix = 'Next Run Time:';
        const line = String(stdout).split(/\r?\n/).find((l) => l.startsWith(prefix));
        value = { registered: true, nextRun: line ? line.slice(prefix.length).trim() || null : null };
      }
      scheduleCache = { at: Date.now(), value };
      resolve(value);
    });
  });
}

function startJob(kind, args) {
  const child = spawn(process.execPath, args, {
    cwd: ROOT,
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  state.running = true;
  state.job = kind;
  state.startedAt = new Date().toISOString();
  let output = '';
  const collect = (d) => {
    output += d.toString();
    if (output.length > 16000) output = output.slice(-16000);
  };
  child.stdout.on('data', collect);
  child.stderr.on('data', collect);
  const finish = (code, extra = '') => {
    if (!state.running) return;
    state.running = false;
    state.job = null;
    state.startedAt = null;
    state.lastResult = { job: kind, at: new Date().toISOString(), code: typeof code === 'number' ? code : 1, output: (output + extra).slice(-4000) };
  };
  child.on('error', (e) => finish(1, `\n${e.message}`));
  child.on('close', (code) => finish(code));
}

function insertIdea(md, idea) {
  const eol = md.includes('\r\n') ? '\r\n' : '\n';
  const lines = md.split(/\r?\n/);
  const line = `- ${idea}`;
  const idx = lines.findIndex((l) => l.startsWith('## Voice & audience'));
  if (idx === -1) {
    while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
    lines.push(line, '');
    return lines.join(eol);
  }
  let end = idx;
  while (end > 0 && lines[end - 1].trim() === '') end--;
  lines.splice(end, idx - end, line, '');
  return lines.join(eol);
}

async function route(req, res, url, origin) {
  const { pathname } = url;
  const m = req.method;
  const ok = (body, status = 200) => send(res, status, body, origin);

  if (pathname === '/api/status' && m === 'GET') {
    return ok({
      running: state.running,
      job: state.running ? state.job : null,
      startedAt: state.startedAt,
      lastResult: state.lastResult,
      lastRun: lastRun(),
      schedule: await getSchedule(),
    });
  }
  if (pathname === '/api/generate' && m === 'POST') {
    const body = await readBody(req);
    if (state.running) return ok({ error: 'Already running' }, 409);
    startJob('drafts', ['scripts/social-drafts.mjs', ...(body.force === true ? ['--force'] : [])]);
    return ok({ started: true }, 202);
  }
  if (pathname === '/api/images' && m === 'POST') {
    const body = await readBody(req);
    if (typeof body.week !== 'string' || !WEEK_RE.test(body.week)) return ok({ error: 'week must be YYYY-MM-DD' }, 400);
    if (state.running) return ok({ error: 'Already running' }, 409);
    startJob('images', ['scripts/social-images.mjs', '--week', body.week]);
    return ok({ started: true }, 202);
  }
  const im = pathname.match(/^\/api\/images\/([^/]+)(?:\/([^/]+)\/([^/]+))?$/);
  if (im && m === 'GET') {
    let week = '', day = '', file = '';
    try {
      week = decodeURIComponent(im[1]);
      day = im[2] === undefined ? '' : decodeURIComponent(im[2]);
      file = im[3] === undefined ? '' : decodeURIComponent(im[3]);
    } catch {
      return ok({ error: 'Not found' }, 404);
    }
    if (!WEEK_RE.test(week)) return ok({ error: 'Not found' }, 404);
    const weekDir = path.join(imagesDir, week);
    if (im[2] === undefined) {
      try {
        return ok(JSON.parse(fs.readFileSync(path.join(weekDir, 'manifest.json'), 'utf8')));
      } catch {
        return ok({ error: 'Not found' }, 404);
      }
    }
    if (!/^[a-z0-9-]{1,32}$/.test(day) || !/^[a-z0-9-]{1,64}\.png$/.test(file)) return ok({ error: 'Not found' }, 404);
    const full = path.resolve(weekDir, day, file);
    if (!full.startsWith(path.resolve(weekDir) + path.sep)) return ok({ error: 'Not found' }, 404);
    let data;
    try {
      data = fs.readFileSync(full);
    } catch {
      return ok({ error: 'Not found' }, 404);
    }
    const headers = { 'Content-Type': 'image/png', 'Cache-Control': 'no-cache', 'Content-Length': data.length, Vary: 'Origin' };
    if (origin) headers['Access-Control-Allow-Origin'] = origin;
    if (url.searchParams.get('download') === '1') headers['Content-Disposition'] = `attachment; filename="${week}-${day}-${file}"`;
    res.writeHead(200, headers);
    return res.end(data);
  }
  if (pathname === '/api/drafts' && m === 'GET') {
    let weeks = [];
    try {
      weeks = fs
        .readdirSync(draftsDir)
        .filter((f) => f.endsWith('.md') && WEEK_RE.test(f.slice(0, -3)))
        .map((f) => f.slice(0, -3))
        .sort()
        .reverse();
    } catch {
      weeks = [];
    }
    return ok({ drafts: weeks.map((week) => ({ week })) });
  }
  const dm = pathname.match(/^\/api\/drafts\/([^/]+)$/);
  if (dm && m === 'GET') {
    let week = '';
    try {
      week = decodeURIComponent(dm[1]);
    } catch {
      week = '';
    }
    if (!WEEK_RE.test(week)) return ok({ error: 'Not found' }, 404);
    const file = path.join(draftsDir, `${week}.md`);
    if (!fs.existsSync(file)) return ok({ error: 'Not found' }, 404);
    return ok({ week, markdown: fs.readFileSync(file, 'utf8') });
  }
  if (pathname === '/api/ideas' && m === 'GET') return ok({ markdown: readText(ideasFile) });
  if (pathname === '/api/ideas' && m === 'PUT') {
    const body = await readBody(req);
    if (typeof body.markdown !== 'string') return ok({ error: 'markdown must be a string' }, 400);
    fs.writeFileSync(ideasFile, body.markdown);
    return ok({ ok: true });
  }
  if (pathname === '/api/ideas' && m === 'POST') {
    const body = await readBody(req);
    if (typeof body.idea !== 'string') return ok({ error: 'idea must be a string' }, 400);
    const idea = body.idea.replace(/\s*[\r\n]+\s*/g, ' ').trim();
    if (!idea) return ok({ error: 'idea is empty' }, 400);
    if (idea.length > 500) return ok({ error: 'idea too long (max 500 chars)' }, 400);
    const markdown = insertIdea(readText(ideasFile), idea);
    fs.mkdirSync(path.dirname(ideasFile), { recursive: true });
    fs.writeFileSync(ideasFile, markdown);
    return ok({ ok: true, markdown });
  }
  if (pathname === '/api/topics' && m === 'GET') return ok({ markdown: readText(topicsFile) });
  if (pathname === '/api/schedule' && m === 'POST') {
    const body = await readBody(req);
    if (typeof body.enabled !== 'boolean') return ok({ error: 'enabled must be a boolean' }, 400);
    const args = ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts\\social-schedule.ps1', ...(body.enabled ? [] : ['-Remove'])];
    const result = await new Promise((resolve) => {
      execFile('powershell', args, { cwd: ROOT, windowsHide: true, timeout: 60000 }, (err, stdout, stderr) => {
        const code = err ? (typeof err.code === 'number' ? err.code : 1) : 0;
        resolve({ code, output: `${stdout || ''}${stderr || ''}`.slice(-4000) });
      });
    });
    scheduleCache = { at: 0, value: null };
    return ok({ ok: result.code === 0, output: result.output }, result.code === 0 ? 200 : 500);
  }
  return ok({ error: 'Not found' }, 404);
}

const server = http.createServer(async (req, res) => {
  const started = Date.now();
  const origin = req.headers.origin;
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : null;
  let url;
  try {
    url = new URL(req.url, `http://${HOST}:${PORT}`);
  } catch {
    send(res, 400, { error: 'Bad URL' });
    return;
  }
  res.on('finish', () => console.log(`${new Date().toISOString()} ${req.method} ${url.pathname} ${res.statusCode} ${Date.now() - started}ms`));

  try {
    if (!url.pathname.startsWith('/api/')) return send(res, 404, { error: 'Not found' });
    if (origin !== undefined && !allowed) return send(res, 403, { error: 'Origin not allowed' });
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        ...(allowed ? { 'Access-Control-Allow-Origin': allowed } : {}),
        Vary: 'Origin',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '600',
      });
      return res.end();
    }
    if ((req.method === 'POST' || req.method === 'PUT') && !allowed) {
      return send(res, 403, { error: 'Allowed Origin header required' });
    }
    await route(req, res, url, allowed);
  } catch (e) {
    if (res.headersSent) return res.end();
    if (e instanceof HttpError) return send(res, e.status, { error: e.message }, allowed);
    console.error(e);
    send(res, 500, { error: 'Internal error' }, allowed);
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Social helper already running on http://${HOST}:${PORT}`);
    process.exit(0);
  }
  throw e;
});

server.listen(PORT, HOST, () => {
  console.log(`Social helper running at http://${HOST}:${PORT} (open http://localhost:9100/admin/ → Social tab)`);
});
