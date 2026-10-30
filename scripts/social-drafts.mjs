// Weekly social-media draft generator. Runs the Claude Code CLI headless with social/prompt.md
// and saves the result to social/drafts/<monday>.md.
// Usage: node scripts/social-drafts.mjs [--force]
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const FORCE = process.argv.includes('--force');
const TIMEOUT_MS = 15 * 60 * 1000;
const pad = (n) => String(n).padStart(2, '0');
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const now = new Date();
const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// Mon–Fri -> this week's Monday; Sat/Sun -> the coming Monday (a weekend run plans next week).
const day = monday.getDay();
monday.setDate(monday.getDate() + (day === 0 ? 1 : day === 6 ? 2 : 1 - day));
const WEEK_OF = ymd(monday);
const stamp = `${ymd(now)}T${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

const draftPath = path.join('social', 'drafts', `${WEEK_OF}.md`);
const logsDir = path.join('social', 'logs');
const runsLog = path.join(logsDir, 'runs.log');

function logRun(status, p) {
  fs.mkdirSync(logsDir, { recursive: true });
  fs.appendFileSync(runsLog, `${now.toISOString()} | ${status} | ${p}\n`);
}

function fail(msg, raw) {
  fs.mkdirSync(logsDir, { recursive: true });
  const failed = path.join(logsDir, `${stamp}-failed.md`);
  fs.writeFileSync(failed, raw || '');
  console.error(`Error: ${msg}\nRaw output saved to ${failed}`);
  logRun('failed', failed);
  process.exit(1);
}

if (fs.existsSync(draftPath) && !FORCE) {
  console.log(`Drafts for week of ${WEEK_OF} already exist: ${draftPath}`);
  process.exit(0);
}

const promptFile = path.join('social', 'prompt.md');
if (!fs.existsSync(promptFile)) {
  console.error(`Missing ${promptFile}`);
  logRun('failed', promptFile);
  process.exit(1);
}
const prompt = fs.readFileSync(promptFile, 'utf8').replaceAll('{{WEEK_OF}}', WEEK_OF);

fs.mkdirSync(logsDir, { recursive: true });
const stderrLog = fs.createWriteStream(path.join(logsDir, `${stamp}-stderr.log`));

function runClaude(input) {
  return new Promise((resolve) => {
    const args = ['-p', '--model', 'sonnet', '--allowedTools', 'Read', 'Glob', 'Grep', '--output-format', 'text'];
    // On Windows claude is a .cmd/.exe shim, so it needs a shell to resolve.
    // Args are fixed literals, so joining them into one command string is safe (and avoids DEP0190).
    const child = process.platform === 'win32'
      ? spawn(['claude', ...args].join(' '), { cwd: ROOT, shell: true, windowsHide: true })
      : spawn('claude', args, { cwd: ROOT });
    let out = '';
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      if (process.platform === 'win32') spawn('taskkill', ['/pid', String(child.pid), '/t', '/f']);
      else child.kill('SIGKILL');
    }, TIMEOUT_MS);
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { stderrLog.write(d); });
    child.on('error', (e) => { clearTimeout(timer); resolve({ code: -1, out, err: e.message }); });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ code: timedOut ? -2 : code, out, err: timedOut ? 'timed out after 15 minutes' : '' });
    });
    child.stdin.on('error', () => {});
    child.stdin.end(input);
  });
}

console.log(`Generating drafts for week of ${WEEK_OF}...`);
const res = await runClaude(prompt);
stderrLog.end();

const raw = res.out.trim();
if (res.code !== 0) fail(`claude exited with code ${res.code}${res.err ? ` (${res.err})` : ''}`, res.out);
if (!raw) fail('claude returned empty output', res.out);
if (!raw.startsWith('# Social drafts')) fail('output does not start with "# Social drafts"', res.out);

// Extract the LAST ```used-topics fenced block.
const re = /```used-topics[^\S\r\n]*\r?\n([\s\S]*?)```/g;
let last = null;
for (const m of raw.matchAll(re)) last = m;
let draft = raw;
let topics = [];
if (last) {
  topics = last[1].split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  draft = raw.slice(0, last.index) + raw.slice(last.index + last[0].length);
} else {
  console.warn('Warning: no used-topics block found; social/used-topics.md not updated.');
}
draft = draft.trim() + '\n';

fs.mkdirSync(path.dirname(draftPath), { recursive: true });
fs.writeFileSync(draftPath, draft);

if (topics.length) {
  const usedFile = path.join('social', 'used-topics.md');
  let prefix = '';
  if (fs.existsSync(usedFile)) {
    const cur = fs.readFileSync(usedFile, 'utf8');
    if (cur && !cur.endsWith('\n')) prefix = '\n';
  }
  fs.appendFileSync(usedFile, prefix + topics.map((t) => `${WEEK_OF} | ${t}`).join('\n') + '\n');
}

console.log(draftPath);

// Render branded images for the new draft. A failure here keeps the draft.
const imgRes = spawnSync(process.execPath, [path.join('scripts', 'social-images.mjs'), '--week', WEEK_OF], { cwd: ROOT, stdio: 'inherit' });
if (imgRes.status === 0) {
  logRun(last ? 'ok' : 'ok-no-topics', draftPath);
} else {
  console.warn(`Warning: image rendering failed (exit ${imgRes.status}); the draft was kept. Retry with: npm run social:images -- --week ${WEEK_OF}`);
  logRun('ok-no-images', draftPath);
}
