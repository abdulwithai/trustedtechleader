// One-off migration: converts the legacy static HTML pages (git history, pre-migration) into App Router TSX pages.
// Usage: node scripts/convert.mjs <legacy-dir>
import fs from 'node:fs';
import path from 'node:path';
import { parse, NodeType } from 'node-html-parser';

const src = path.resolve(process.argv[2]);
const out = path.resolve('src/app');
const SITE = 'https://trustedtechleader.com';

const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', colspan: 'colSpan', rowspan: 'rowSpan',
  datetime: 'dateTime', readonly: 'readOnly', maxlength: 'maxLength', minlength: 'minLength',
  autocomplete: 'autoComplete', autofocus: 'autoFocus', novalidate: 'noValidate', srcset: 'srcSet',
  crossorigin: 'crossOrigin', enctype: 'encType', inputmode: 'inputMode', fetchpriority: 'fetchPriority',
  'accept-charset': 'acceptCharset', contenteditable: 'contentEditable', spellcheck: 'spellCheck',
  viewbox: 'viewBox', preserveaspectratio: 'preserveAspectRatio', refx: 'refX', refy: 'refY',
  markerwidth: 'markerWidth', markerheight: 'markerHeight',
};
const BOOL = new Set(['hidden', 'disabled', 'checked', 'required', 'selected', 'multiple', 'open', 'autofocus', 'readonly', 'novalidate', 'controls', 'loop', 'muted', 'autoplay']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const jsxAttrName = (n) => {
  if (ATTR[n]) return ATTR[n];
  if (n.startsWith('data-') || n.startsWith('aria-')) return n;
  if (n.includes(':')) return camel(n.replace(':', '-'));
  if (n.includes('-')) return camel(n);
  return n;
};
const jsStr = (s) => JSON.stringify(s);

function styleObj(s) {
  const parts = s.split(';').map((p) => p.trim()).filter(Boolean).map((p) => {
    const i = p.indexOf(':');
    const k = p.slice(0, i).trim();
    const v = p.slice(i + 1).trim();
    const key = k.startsWith('--') ? jsStr(k) : camel(k);
    return `${key}: ${jsStr(v)}`;
  });
  return `{{ ${parts.join(', ')} } as React.CSSProperties}`;
}

// Resolve a legacy relative URL to a root-absolute one. `pageDir` is the page's URL dir, e.g. "/case-studies/x/".
function resolveUrl(u, pageDir) {
  if (u === '' || /^(https?:|mailto:|tel:|data:|#|\/\/)/.test(u)) return { url: u, internal: false };
  const m = u.match(/^([^#?]*)([?#].*)?$/);
  let p = m[1];
  const rest = m[2] || '';
  if (!p.startsWith('/')) p = path.posix.normalize(path.posix.join(pageDir, p));
  const isPage = /(^|\/)index\.html$/.test(p) || p.endsWith('/');
  if (/(^|\/)index\.html$/.test(p)) p = p.replace(/index\.html$/, '');
  return { url: p + rest, internal: isPage };
}

function convertNode(node, ctx) {
  if (node.nodeType === NodeType.COMMENT_NODE) return '';
  if (node.nodeType === NodeType.TEXT_NODE) {
    const raw = node.rawText;
    if (!raw.trim()) return raw.includes('\n') ? '\n' : raw ? ' ' : '';
    return raw.replace(/[{}]/g, (c) => `{'${c}'}`);
  }
  const tag = node.rawTagName;
  if (!tag) return node.childNodes.map((c) => convertNode(c, ctx)).join('');
  if (tag === 'script') {
    ctx.warn.push('dropped <script> in body');
    return '';
  }
  const outAttrs = [];
  let isInternalLink = false;
  for (const [name, val] of Object.entries(node.attributes)) {
    const n = name.toLowerCase();
    if (n === 'style') {
      outAttrs.push(`style=${styleObj(val)}`);
      continue;
    }
    if (n === 'tabindex' && /^-?\d+$/.test(val)) {
      outAttrs.push(`tabIndex={${val}}`);
      continue;
    }
    if (BOOL.has(n) && (val === '' || val === n)) {
      outAttrs.push(jsxAttrName(n));
      continue;
    }
    let v = val;
    if (n === 'href' || n === 'src') {
      const r = resolveUrl(val, ctx.pageDir);
      v = r.url;
      if (tag === 'a' && n === 'href' && r.internal) isInternalLink = true;
    }
    outAttrs.push(`${jsxAttrName(n)}=${/["{}\\\n&]/.test(v) ? `{${jsStr(v)}}` : `"${v}"`}`);
  }
  let name = tag;
  if (isInternalLink) {
    name = 'Link';
    ctx.usesLink = true;
  }
  const open = `<${name}${outAttrs.length ? ' ' + outAttrs.join(' ') : ''}`;
  if (VOID.has(tag)) return `${open} />`;
  const inner = node.childNodes.map((c) => convertNode(c, ctx)).join('');
  return `${open}>${inner}</${name}>`;
}

const meta = (root, sel, attr = 'content') => root.querySelector(sel)?.getAttribute(attr);

function convertPage(file) {
  const rel = path.relative(src, file).replace(/\\/g, '/');
  const root = parse(fs.readFileSync(file, 'utf8'), { comment: false });
  const is404 = rel === '404.html';
  const route = is404 ? '/' : '/' + rel.replace(/index\.html$/, '');
  const ctx = { warn: [], pageDir: route, usesLink: false };

  const bodyEl = root.querySelector('body');
  const pageClass = bodyEl.getAttribute('class');
  const header = bodyEl.querySelector('header.site-header');
  const footer = bodyEl.querySelector('footer.site-footer');
  const crumbEl = header.querySelector('.brand-crumb');
  const crumb = crumbEl ? crumbEl.text.replace(/^\/\s*/, '').trim() : undefined;
  const curEl = header.querySelector('a[aria-current]');
  const current = curEl ? resolveUrl(curEl.getAttribute('href'), route).url : undefined;
  const firstNav = header.querySelector('.site-nav a')?.getAttribute('href');
  const home = firstNav === '#services';
  const landing = /^(\.\.\/)+case-studies\/index\.html$/.test(firstNav) &&!header.querySelector('.site-nav a[href$="ai-audit/index.html"]');
  const linkedin = !!footer.querySelector('[data-todo="linkedin"]');
  const noteEl = footer.querySelector('.footer-note');
  const footerNote = noteEl ? noteEl.childNodes.map((c) => convertNode(c, ctx)).join('').trim() : undefined;

  // Page content = every body child except skip-link, header, footer and scripts.
  const keep = bodyEl.childNodes.filter((n) => {
    if (n.nodeType !== NodeType.ELEMENT_NODE) return false;
    if (n === header || n === footer) return false;
    if (n.rawTagName === 'script') return false;
    if (n.rawTagName === 'a' && n.getAttribute('class') === 'skip-link') return false;
    return true;
  });
  const main = keep.map((n) => convertNode(n, ctx)).join('\n').trim();

  const head = root.querySelector('head');
  const title = head.querySelector('title').text;
  const jsonld = head.querySelectorAll('script[type="application/ld+json"]').map((s) => JSON.stringify(JSON.parse(s.text)));
  const cssPages = head.querySelectorAll('link[rel="stylesheet"]').map((l) => l.getAttribute('href')).filter((h) => h.includes('/pages/')).map((h) => path.posix.basename(h));
  const scripts = head.querySelectorAll('script[src]').map((s) => path.posix.basename(s.getAttribute('src'), '.js')).filter((s) => s !== 'nav' && s !== 'tracking');

  const robots = meta(root, 'meta[name="robots"]');
  const canonical = meta(root, 'link[rel="canonical"]', 'href');
  const og = (p) => meta(root, `meta[property="${p}"]`);
  const tw = (p) => meta(root, `meta[name="${p}"]`);
  const metadata = {
    title: { absolute: title },
    description: meta(root, 'meta[name="description"]'),
    ...(robots ? { robots: Object.fromEntries(robots.split(',').map((t) => t.trim()).map((t) => (t.startsWith('no') ? [t.slice(2), false] : [t, true]))) } : {}),
    ...(canonical ? { alternates: { canonical: canonical.replace(SITE, '') || '/' } } : {}),
    openGraph: {
      type: og('og:type'), siteName: og('og:site_name'), title: og('og:title'), description: og('og:description'),
      ...(og('og:url') ? { url: og('og:url') } : {}), locale: og('og:locale'),
      ...(og('og:image') ? { images: [{ url: og('og:image'), width: Number(og('og:image:width')), height: Number(og('og:image:height')), alt: og('og:image:alt') }] } : {}),
    },
    twitter: {
      card: tw('twitter:card'), title: tw('twitter:title'), description: tw('twitter:description'),
      ...(tw('twitter:image') ? { images: [{ url: tw('twitter:image'), alt: tw('twitter:image:alt') }] } : {}),
    },
  };

  const comps = scripts.map((s) => ({ file: s, comp: s.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase()) + 'Behavior' }));
  const lines = [];
  if (ctx.usesLink) lines.push(`import Link from 'next/link';`);
  lines.push(`import type { Metadata } from 'next';`);
  lines.push(`import PageShell from '@/components/PageShell';`);
  for (const c of comps) lines.push(`import ${c.comp} from '@/components/behaviors/${c.comp}';`);
  for (const c of cssPages) lines.push(`import '@/styles/pages/${c}';`);
  lines.push('', `export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};`, '');
  lines.push('export default function Page() {', '  return (');
  const shellProps = [`pageClass=${jsStr(pageClass)}`];
  if (current) shellProps.push(`current=${jsStr(current)}`);
  if (crumb) shellProps.push(`crumb=${jsStr(crumb)}`);
  if (home) shellProps.push('home');
  if (landing) shellProps.push('landing');
  if (!linkedin) shellProps.push('linkedin={false}');
  if (footerNote) shellProps.push(`footerNote={<>${footerNote}</>}`);
  lines.push(`    <PageShell ${shellProps.join(' ')}>`);
  jsonld.forEach((j) => lines.push(`      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${jsStr(j)} }} />`));
  lines.push(main.split('\n').map((l) => '      ' + l).join('\n'));
  comps.forEach((c) => lines.push(`      <${c.comp} />`));
  lines.push('    </PageShell>', '  );', '}', '');

  const dest = is404 ? path.join(out, 'not-found.tsx') : path.join(out, rel.replace(/index\.html$/, 'page.tsx'));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, lines.join('\n'));
  return { rel, dest: path.relative('.', dest), warn: ctx.warn, scripts: comps.map((c) => c.comp) };
}

function walk(d) {
  const skip = ['node_modules', '.git', 'public', 'src', '_partials', 'tracking', '.next', 'out', 'scripts'];
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) return skip.includes(e.name) ? [] : walk(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

const res = walk(src).map(convertPage);
res.forEach((r) => console.log(r.rel, '->', r.dest, r.scripts.join(','), r.warn.join(';')));
console.log(res.length, 'pages');
