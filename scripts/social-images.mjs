// Renders branded PNG graphics for each post in a week's social draft.
// Usage: node scripts/social-images.mjs [--week YYYY-MM-DD]
// Output: social/images/<week>/<day>/{square,wide,story,slide-NN}.png + social/images/<week>/manifest.json
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const LOGO = '<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#6B3BEA"/><path fill="#FFFFFF" d="M8 12h40v9H8z"/><path fill="#FFFFFF" d="M13 21h9v31h-9z"/><path fill="#FFFFFF" d="M33 21h9v31h-9z"/><path fill="#8BD46A" d="M33 43h23v9H33z"/></svg>';
const FONTS = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Geist:wght@400;500;600&display=swap';

function die(msg) {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

// ---------- browser ----------
function findBrowser() {
  const cands = [
    process.env.SOCIAL_BROWSER,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].filter(Boolean);
  const found = cands.find((p) => fs.existsSync(p));
  if (!found) throw new Error(`No browser found. Install Edge or Chrome, or set SOCIAL_BROWSER to an executable path. Looked in:\n  ${cands.join('\n  ')}`);
  return found;
}

// ---------- parsing ----------
const strip = (s) => s.replace(/\*\*/g, '').replace(/__/g, '').trim();

export function parseDraft(md) {
  const posts = [];
  const parts = md.split(/^## /m).slice(1);
  parts.forEach((block, i) => {
    const nl = block.indexOf('\n');
    const heading = strip(nl < 0 ? block : block.slice(0, nl)).replace(/\r$/, '');
    const body = nl < 0 ? '' : block.slice(nl + 1);
    const m = heading.match(/^(.*?)\s*[—–-]+\s*(.*)$/);
    const first = (m ? m[1] : heading).split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const day = first || `post-${i + 1}`;
    const topic = strip(m ? m[2] : heading);
    const sections = {};
    let cur = null;
    for (const line of body.split(/\r?\n/)) {
      const h = line.match(/^###\s+(.*)$/);
      if (h) { cur = strip(h[1]).toLowerCase(); sections[cur] = []; } else if (cur) sections[cur].push(line);
    }
    const li = sections.linkedin || [];
    const hook = strip(li.find((l) => l.trim()) || '') || topic;
    const urlM = li.join('\n').match(/https:\/\/trustedtechleader\.com[^\s)]*/);
    const url = urlM ? urlM[0].replace(/^https?:\/\//, '') : 'trustedtechleader.com';
    const ig = sections.instagram || [];
    const ci = ig.findIndex((l) => /carousel/i.test(l));
    const slides = [];
    if (ci >= 0) {
      for (const l of ig.slice(ci + 1)) {
        const n = l.match(/^\s*\d+[.)]\s+(.*\S)\s*$/);
        if (n) slides.push(strip(n[1]));
        else if (slides.length) break;
      }
    }
    posts.push({ day, heading, topic, hook, url, slides });
  });
  return posts;
}

// ---------- HTML ----------
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

const CSS = `
:root{--violet:#6B3BEA;--violet2:#8B5CF6;--deep:#4A22B8;--tint:#EDE6FE;--bg:#F6F4FB;--ink:#17112B;--ink2:#463F5E;--night:#130A2A;--night2:#1D1140;--onnight:#F3EFFF;--onnight2:#BDB3DA;--green:#8BD46A}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:var(--w);height:var(--h);overflow:hidden}
body{font-family:'Geist',system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased}
.canvas{position:relative;width:var(--w);height:var(--h);overflow:hidden;display:flex;flex-direction:column}
.dark{background:radial-gradient(ellipse 80% 60% at 85% 0%,rgba(139,92,246,.45),transparent 60%),linear-gradient(160deg,var(--night) 0%,var(--night2) 100%);color:var(--onnight)}
.light{background:radial-gradient(ellipse 70% 50% at 100% 0%,rgba(139,92,246,.16),transparent 60%),var(--bg);color:var(--ink)}
.brand{display:flex;align-items:center;gap:16px;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:800;letter-spacing:-.01em}
.brand svg{width:var(--logo);height:var(--logo);flex:none}
.brand span{font-size:calc(var(--logo)*.5)}
.label{font:600 var(--lab)/1.2 'Geist',system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;display:flex;align-items:center;gap:12px}
.label::before{content:"";width:.6em;height:.6em;border-radius:50%;background:var(--green);flex:none}
.dark .label{color:var(--green)}.light .label{color:var(--violet)}
.box{overflow:hidden;min-width:0}
.fit{font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:800;line-height:1.08;letter-spacing:0;font-optical-sizing:none;font-variation-settings:"opsz" 40;overflow-wrap:anywhere}
.fit.body{font-weight:600;line-height:1.16;letter-spacing:0}
.cta{display:flex;font:600 var(--cta)/1.2 'Geist',system-ui,sans-serif}
.pill{background:var(--violet);color:#fff;border-radius:999px;padding:.6em 1.15em;overflow-wrap:anywhere}
.dark .pill{background:var(--green);color:var(--night)}
.url{font:500 var(--cta)/1.3 'Geist',system-ui,sans-serif;opacity:.85;overflow-wrap:anywhere}
.count{font:600 28px/1 'Geist',system-ui,sans-serif;letter-spacing:.06em;opacity:.7}
.bar{position:absolute;left:0;bottom:0;height:12px;background:linear-gradient(90deg,var(--violet),var(--green))}
.spacer{flex:1}
`;

const FIT_JS = `
(async()=>{
  try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,8000))]);}catch(e){}
  document.querySelectorAll('.box').forEach(box=>{
    const el=box.querySelector('.fit'); if(!el) return;
    const max=+box.dataset.max, min=+box.dataset.min||18; let s=max;
    el.style.fontSize=s+'px';
    const over=()=>el.scrollHeight>box.clientHeight+1||el.scrollWidth>box.clientWidth+1;
    while(over()&&s>min){s-=2;el.style.fontSize=s+'px';}
    if(box.dataset.shrink) box.style.height=Math.ceil(el.getBoundingClientRect().height)+'px';
    box.dataset.final=s;
  });
  window.__ready=true;
})();`;

function page(w, h, bodyHtml) {
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${FONTS}"><style>:root{--w:${w}px;--h:${h}px}${CSS}</style></head><body>${bodyHtml}<script>${FIT_JS}</script></body></html>`;
}

const brand = () => `<div class="brand">${LOGO}<span>Trusted Tech Leader</span></div>`;
const headline = (text, { w, h, max, min = 28, body = false, shrink = false }) =>
  `<div class="box"${shrink ? ' data-shrink="1"' : ''} data-max="${max}" data-min="${min}" style="width:${w}px;max-width:100%;height:${h}px"><div class="fit${body ? ' body' : ''}">${esc(text)}</div></div>`;

function square(p) {
  return page(1080, 1080, `<div class="canvas dark" style="padding:84px;--logo:64px;--lab:22px;--cta:30px">
    ${brand()}
    <div class="spacer"></div>
    <div class="label">${esc(clip(p.topic, 70))}</div>
    <div style="height:34px"></div>
    ${headline(p.hook, { w: 912, h: 460, max: 100 })}
    <div class="spacer"></div>
    <div class="cta"><span class="pill">${esc(p.url)}</span></div>
    <div class="bar" style="width:100%"></div></div>`);
}

function wide(p) {
  return page(1600, 900, `<div class="canvas light" style="padding:80px 96px;--logo:64px;--lab:22px;--cta:30px;flex-direction:row;gap:64px">
    <div style="width:12px;border-radius:6px;background:linear-gradient(180deg,var(--violet),var(--green));flex:none"></div>
    <div style="flex:1;display:flex;flex-direction:column;min-width:0">
      ${brand()}
      <div class="spacer"></div>
      <div class="label">${esc(clip(p.topic, 80))}</div>
      <div style="height:30px"></div>
      ${headline(p.hook, { w: 1300, h: 340, max: 92 })}
      <div class="spacer"></div>
      <div class="cta"><span class="pill">${esc(p.url)}</span></div>
    </div></div>`);
}

function story(p) {
  return page(1080, 1920, `<div class="canvas dark" style="--logo:60px;--lab:26px;--cta:32px">
    <div style="position:absolute;top:96px;left:84px">${brand()}</div>
    <div style="position:absolute;top:240px;bottom:420px;left:84px;right:84px;display:flex;flex-direction:column;justify-content:center;gap:44px">
      <div class="label">${esc(clip(p.topic, 60))}</div>
      ${headline(p.hook, { w: 912, h: 820, max: 124, min: 40, shrink: true })}
      <div class="url" style="font-size:32px">${esc(p.url)}</div>
    </div>
    <div class="bar" style="width:100%"></div></div>`);
}

function slide(p, i, n) {
  const text = p.slides[i];
  const num = `<div class="count">${i + 1} / ${n}</div>`;
  const common = 'padding:84px;--logo:56px;--lab:22px;--cta:32px';
  const top = `<div style="display:flex;justify-content:space-between;align-items:center">${brand()}${num}</div>`;
  if (i === 0) {
    return page(1080, 1350, `<div class="canvas dark" style="${common}">
      ${top}<div class="spacer"></div>
      <div class="label">${esc(clip(p.topic, 60))}</div><div style="height:34px"></div>
      ${headline(text, { w: 912, h: 620, max: 108 })}
      <div class="spacer"></div>
      <div class="label" style="color:var(--onnight2);letter-spacing:.1em">Swipe &rarr;</div>
      <div class="bar" style="width:${Math.round(100 / n)}%"></div></div>`);
  }
  if (i === n - 1) {
    return page(1080, 1350, `<div class="canvas dark" style="${common}">
      ${top}<div class="spacer"></div>
      ${headline(text, { w: 912, h: 560, max: 80, body: true })}
      <div style="height:48px"></div>
      <div class="cta"><span class="pill">${esc(p.url)}</span></div>
      <div class="spacer"></div>
      <div class="bar" style="width:100%"></div></div>`);
  }
  return page(1080, 1350, `<div class="canvas light" style="${common}">
    ${top}<div class="spacer"></div>
    <div style="font:800 120px/1 'Bricolage Grotesque',system-ui,sans-serif;color:var(--violet);margin-bottom:28px">${String(i).padStart(2, '0')}</div>
    ${headline(text.replace(/^\s*(?:step\s+)?\d+\s*[:.)\-]\s*/i, ''), { w: 912, h: 600, max: 82, body: true, shrink: true })}
    <div class="spacer"></div>
    <div class="bar" style="width:${Math.round(((i + 1) / n) * 100)}%"></div></div>`);
}

// ---------- main ----------
export async function renderWeek(week) {
  const draftPath = path.join('social', 'drafts', `${week}.md`);
  if (!fs.existsSync(draftPath)) throw new Error(`Draft not found: ${draftPath}`);
  const posts = parseDraft(fs.readFileSync(draftPath, 'utf8'));
  if (!posts.length) throw new Error(`No "## " posts found in ${draftPath}`);
  const executablePath = findBrowser();

  const outRoot = path.join('social', 'images', week);
  fs.rmSync(outRoot, { recursive: true, force: true });
  fs.mkdirSync(outRoot, { recursive: true });

  const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
  const manifest = { week, generatedAt: new Date().toISOString(), posts: [] };
  let count = 0;
  try {
    const pg = await browser.newPage();
    const used = new Set();
    for (const p of posts) {
      let day = p.day; let k = 2;
      while (used.has(day)) day = `${p.day}-${k++}`;
      used.add(day);
      const jobs = [
        ['square', 1080, 1080, 'LinkedIn, Facebook', square(p), 'square'],
        ['wide', 1600, 900, 'X', wide(p), 'wide'],
        ['story', 1080, 1920, 'TikTok cover', story(p), 'story'],
        ...p.slides.map((_, i) => [`slide-${String(i + 1).padStart(2, '0')}`, 1080, 1350, `Instagram carousel ${i + 1}/${p.slides.length}`, slide(p, i, p.slides.length), 'slide']),
      ];
      const entry = { day, heading: p.heading, images: [] };
      fs.mkdirSync(path.join(outRoot, day), { recursive: true });
      for (const [name, w, h, use, html, kind] of jobs) {
        await pg.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
        try { await pg.setContent(html, { waitUntil: 'load', timeout: 20000 }); } catch { /* offline: fonts fall back */ }
        await pg.waitForFunction('window.__ready===true', { timeout: 30000 });
        const file = path.join(outRoot, day, `${name}.png`);
        await pg.screenshot({ path: file, clip: { x: 0, y: 0, width: w, height: h } });
        entry.images.push({ file: `${day}/${name}.png`, kind, width: w, height: h, use });
        console.log(file);
        count++;
      }
      manifest.posts.push(entry);
    }
  } finally {
    await browser.close();
  }
  fs.writeFileSync(path.join(outRoot, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(path.join(outRoot, 'manifest.json'));
  console.log(`Done: ${count} images for ${manifest.posts.length} posts (week of ${week}).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const i = process.argv.indexOf('--week');
  let week = i >= 0 ? process.argv[i + 1] : null;
  if (i >= 0 && !/^\d{4}-\d{2}-\d{2}$/.test(week || '')) die('--week must be YYYY-MM-DD');
  if (!week) {
    const dir = path.join('social', 'drafts');
    const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f)).sort() : [];
    if (!files.length) die(`No drafts found in ${dir}`);
    week = files[files.length - 1].replace(/\.md$/, '');
  }
  try {
    await renderWeek(week);
  } catch (e) {
    die(e && e.message ? e.message : String(e));
  }
}
