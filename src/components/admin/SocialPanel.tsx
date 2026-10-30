'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import '@/styles/pages/admin-social.css';
import { copyText } from './copyText';

// Local helper started with `npm run social:server`. 127.0.0.1, not localhost: the helper binds IPv4 only.
const HELPER = 'http://127.0.0.1:9201';

type Status = {
  running: boolean;
  job: 'drafts' | 'images' | null;
  startedAt: string | null;
  lastResult: { job?: 'drafts' | 'images'; at: string; code: number; output: string } | null;
  lastRun: { at: string; status: string; path: string } | null;
  schedule: { registered: boolean; nextRun: string | null };
};
type Section = { name: string; text: string };
type Post = { heading: string; source: string; sections: Section[] };
type ImageKind = 'square' | 'wide' | 'story' | 'slide';
type ManifestImage = { file: string; kind: ImageKind; width: number; height: number; use: string };
type ManifestPost = { day: string; heading: string; images: ManifestImage[] };
type Manifest = { week: string; generatedAt: string; posts: ManifestPost[] };

const KIND_ORDER: ImageKind[] = ['square', 'wide', 'story', 'slide'];

// Which image kind suits the active platform tab.
function preferredKind(platform: string): ImageKind | null {
  const p = platform.toLowerCase();
  if (p.includes('instagram')) return 'slide';
  if (p.includes('linkedin') || p.includes('facebook')) return 'square';
  if (/^x\b|twitter/.test(p)) return 'wide';
  if (p.includes('tiktok')) return 'story';
  return null;
}

function matchManifestPost(manifest: Manifest | null, post: Post, index: number): ManifestPost | null {
  if (!manifest || !Array.isArray(manifest.posts)) return null;
  const day = post.heading.trim().split(/[\s—–-]+/)[0].toLowerCase();
  const same = manifest.posts[index];
  if (same && same.day === day) return same;
  return manifest.posts.find((mp) => mp.day === day) || null;
}

async function api<T>(path: string, method = 'GET', body?: unknown): Promise<T> {
  const res = await fetch(HELPER + path, {
    method,
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  let data: unknown = null;
  try { data = await res.json(); } catch { /* non-JSON */ }
  if (!res.ok) {
    const msg = (data as { error?: string } | null)?.error;
    throw new Error(msg || `Request failed (${res.status})`);
  }
  return data as T;
}

function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : 'Something went wrong.';
}

function parsePosts(md: string): Post[] {
  const posts: Post[] = [];
  let post: Post | null = null;
  let sec: Section | null = null;
  for (const line of md.split(/\r?\n/)) {
    if (/^##(?!#)\s/.test(line)) {
      post = { heading: line.replace(/^##\s+/, '').trim(), source: '', sections: [] };
      posts.push(post);
      sec = null;
    } else if (post && /^###\s/.test(line)) {
      sec = { name: line.replace(/^###\s+/, '').trim(), text: '' };
      post.sections.push(sec);
    } else if (post && sec) {
      sec.text += line + '\n';
    } else if (post && /^\s*\**Source:?\**/i.test(line)) {
      post.source = line.trim();
    }
  }
  return posts;
}

function weekLabel(week: string): string {
  const d = new Date(week + 'T00:00:00');
  if (isNaN(d.getTime())) return `Week of ${week}`;
  return 'Week of ' + d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).replace(/,/g, '');
}

function PostImages({ images, heading, base, version, platform }: { images: ManifestImage[]; heading: string; base: string; version: string; platform: string }) {
  const sorted = [...images].sort((a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind));
  const pref = preferredKind(platform);
  const q = version ? `v=${encodeURIComponent(version)}` : '';
  const src = (f: string) => base + f + (q ? `?${q}` : '');
  const dl = (f: string) => base + f + `?download=1${q ? `&${q}` : ''}`;
  return (
    <div className="adm-social-images">
      <h4>Images</h4>
      <ul className="adm-social-imggrid" style={{ listStyle: 'none', padding: 0 }}>
        {sorted.map((im) => (
          <li key={im.file} className={'adm-social-img' + (pref === im.kind ? ' adm-social-img--match' : '')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src(im.file)} width={im.width} height={im.height} loading="lazy" alt={`${im.use} image for ${heading}`} />
            <span className="adm-social-imguse">{im.use}</span>
            <a className="adm-social-dl" href={dl(im.file)} download>Download<span className="adm-sr"> {im.use} image</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostCard({ post, onCopy, mpost, week, version }: { post: Post; onCopy: (ok: boolean, name: string) => void; mpost: ManifestPost | null; week: string; version: string }) {
  const [active, setActive] = useState(0);
  const sec = post.sections[active];
  return (
    <li className="adm-social-post">
      <h3>{post.heading}</h3>
      {post.source && <p className="adm-muted">{post.source}</p>}
      {!sec ? (
        <p className="adm-muted">No platform sections in this post.</p>
      ) : (
        <>
          <div className="adm-social-tabs" role="group" aria-label={`Platform for ${post.heading}`}>
            {post.sections.map((s, i) => (
              <button key={i} type="button" className="adm-social-tab" aria-pressed={i === active} onClick={() => setActive(i)}>
                {s.name}
              </button>
            ))}
          </div>
          <div className="adm-social-text">{sec.text.trim()}</div>
          <div className="adm-actions">
            <button
              type="button"
              className="adm-btn adm-btn--primary"
              onClick={async () => onCopy(await copyText(sec.text.trim()), sec.name)}
            >
              Copy
            </button>
          </div>
        </>
      )}
      {mpost && mpost.images.length > 0 && (
        <PostImages
          images={mpost.images}
          heading={post.heading}
          base={`${HELPER}/api/images/${encodeURIComponent(week)}/`}
          version={version}
          platform={sec ? sec.name : ''}
        />
      )}
    </li>
  );
}

export default function SocialPanel() {
  const [blocked, setBlocked] = useState<boolean | null>(null);
  const [offline, setOffline] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [weeks, setWeeks] = useState<string[]>([]);
  const [week, setWeek] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [genError, setGenError] = useState('');
  const [genOk, setGenOk] = useState('');
  const [starting, setStarting] = useState(false);
  const [ideaText, setIdeaText] = useState('');
  const [ideaErr, setIdeaErr] = useState('');
  const [ideaBusy, setIdeaBusy] = useState(false);
  const [ideasMd, setIdeasMd] = useState('');
  const [ideasMsg, setIdeasMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [topics, setTopics] = useState('');
  const [schedBusy, setSchedBusy] = useState(false);
  const [schedErr, setSchedErr] = useState('');
  const [copyLive, setCopyLive] = useState('');
  const wasRunning = useRef(false);
  const weekRef = useRef('');
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadDrafts = useCallback(async (select?: boolean) => {
    const { drafts } = await api<{ drafts: { week: string }[] }>('/api/drafts');
    const list = drafts.map((d) => d.week);
    setWeeks(list);
    setWeek((cur) => (select || !cur || !list.includes(cur) ? list[0] || '' : cur));
  }, []);

  const loadAll = useCallback(async () => {
    try {
      const st = await api<Status>('/api/status');
      setStatus(st);
      setOffline(false);
      wasRunning.current = st.running;
    } catch {
      setOffline(true);
      return;
    }
    try {
      await loadDrafts(true);
      setIdeasMd((await api<{ markdown: string }>('/api/ideas')).markdown);
      setTopics((await api<{ markdown: string }>('/api/topics')).markdown);
    } catch (e) {
      setGenError(errMsg(e));
    }
  }, [loadDrafts]);

  useEffect(() => {
    const h = window.location.hostname;
    const local = h === 'localhost' || h === '127.0.0.1';
    setBlocked(!local);
    if (local) void loadAll();
    return () => { if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, [loadAll]);

  useEffect(() => { weekRef.current = week; }, [week]);

  // Load the selected week's markdown.
  useEffect(() => {
    if (!week) { setMarkdown(''); return; }
    let cancelled = false;
    api<{ markdown: string }>('/api/drafts/' + encodeURIComponent(week))
      .then((r) => { if (!cancelled) setMarkdown(r.markdown); })
      .catch((e) => { if (!cancelled) { setMarkdown(''); setGenError(errMsg(e)); } });
    return () => { cancelled = true; };
  }, [week]);

  const loadManifest = useCallback(async (w: string) => {
    if (!w) { setManifest(null); return; }
    try {
      const m = await api<Manifest>('/api/images/' + encodeURIComponent(w));
      setManifest(m && Array.isArray(m.posts) ? m : null);
    } catch {
      setManifest(null);
    }
  }, []);

  useEffect(() => { void loadManifest(week); }, [week, loadManifest]);

  // Poll while a run is in progress.
  const running = !!status?.running;
  useEffect(() => {
    if (!running) return;
    const id = setInterval(async () => {
      try {
        const st = await api<Status>('/api/status');
        setStatus(st);
        if (!st.running && wasRunning.current) {
          wasRunning.current = false;
          const wasImages = st.lastResult?.job === 'images';
          if (st.lastResult && st.lastResult.code !== 0) {
            setGenError(st.lastResult.output.split(/\r?\n/).slice(-30).join('\n'));
            setGenOk('');
          } else {
            setGenError('');
            setGenOk(wasImages ? 'Images ready.' : 'Drafts generated.');
          }
          if (!wasImages) {
            try { await loadDrafts(true); } catch (e) { setGenError(errMsg(e)); }
          }
          await loadManifest(weekRef.current);
          try { setTopics((await api<{ markdown: string }>('/api/topics')).markdown); } catch { /* ignore */ }
        }
      } catch { /* keep polling */ }
    }, 3000);
    return () => clearInterval(id);
  }, [running, loadDrafts, loadManifest]);

  async function generate(force: boolean) {
    if (force && !window.confirm("Regenerate and overwrite this week's drafts?")) return;
    setGenError(''); setGenOk(''); setStarting(true);
    try {
      await api('/api/generate', 'POST', force ? { force: true } : {});
      wasRunning.current = true;
      setStatus((s) => (s ? { ...s, running: true } : s));
    } catch (e) {
      setGenError(errMsg(e));
    } finally {
      setStarting(false);
    }
  }

  async function makeImages() {
    if (!week) return;
    setGenError(''); setGenOk(''); setStarting(true);
    try {
      await api('/api/images', 'POST', { week });
      wasRunning.current = true;
      setStatus((s) => (s ? { ...s, running: true, job: 'images' } : s));
    } catch (e) {
      setGenError(errMsg(e));
    } finally {
      setStarting(false);
    }
  }

  async function addIdea() {
    const idea = ideaText.trim();
    if (!idea) return;
    setIdeaBusy(true); setIdeaErr('');
    try {
      const r = await api<{ markdown: string }>('/api/ideas', 'POST', { idea });
      setIdeasMd(r.markdown);
      setIdeaText('');
    } catch (e) {
      setIdeaErr(errMsg(e));
    } finally {
      setIdeaBusy(false);
    }
  }

  async function saveIdeas() {
    setIdeasMsg(null);
    try {
      await api('/api/ideas', 'PUT', { markdown: ideasMd });
      setIdeasMsg({ ok: true, text: 'Saved.' });
    } catch (e) {
      setIdeasMsg({ ok: false, text: errMsg(e) });
    }
  }

  async function toggleSchedule() {
    if (!status) return;
    setSchedBusy(true); setSchedErr('');
    try {
      const r = await api<{ ok: boolean; output: string }>('/api/schedule', 'POST', { enabled: !status.schedule.registered });
      if (!r.ok) setSchedErr(r.output || 'Could not change the schedule.');
      setStatus(await api<Status>('/api/status'));
    } catch (e) {
      setSchedErr(errMsg(e));
    } finally {
      setSchedBusy(false);
    }
  }

  function onCopy(ok: boolean, name: string) {
    setCopyLive(ok ? `${name} text copied to clipboard.` : 'Copy failed.');
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyLive(''), 2500);
  }

  if (blocked === null) return null;
  if (blocked) {
    return (
      <div className="adm-card adm-social">
        <h2>Social tools only work on your computer</h2>
        <p>Open <strong>http://localhost:9100/admin/</strong> on your computer to use the Social tools.</p>
      </div>
    );
  }
  if (offline) {
    return (
      <div className="adm-card adm-social">
        <h2>Social helper isn&apos;t running</h2>
        <p>This only works on your computer. In the project folder run <code className="adm-social-mono">npm run social:server</code>, then reload.</p>
        <div className="adm-actions">
          <button type="button" className="adm-btn adm-btn--primary" onClick={() => void loadAll()}>Retry</button>
        </div>
      </div>
    );
  }
  if (!status) return <p className="adm-muted" role="status">Loading</p>;

  const posts = parsePosts(markdown);
  const sched = status.schedule;

  return (
    <div className="adm-social">
      <section className="adm-card" aria-labelledby="soc-gen">
        <h2 id="soc-gen">Generate</h2>
        <div className="adm-actions">
          <button type="button" className="adm-btn adm-btn--primary" disabled={running || starting} onClick={() => void generate(false)}>
            Generate this week&apos;s drafts
          </button>
          <button type="button" className="adm-btn" disabled={running || starting} onClick={() => void generate(true)}>
            Regenerate (overwrite)
          </button>
        </div>
        {running && <p role="status">{status.job === 'images' ? 'Making images…' : 'Generating… this takes a few minutes'}</p>}
        {genOk && !running && <p className="adm-ok" role="status">{genOk}</p>}
        {genError && !running && (
          <div role="alert">
            <p className="adm-error">Something went wrong.</p>
            <pre className="adm-social-pre">{genError}</pre>
          </div>
        )}
        {status.lastRun && (
          <p className="adm-muted">Last run: {new Date(status.lastRun.at).toLocaleString()} — {status.lastRun.status}</p>
        )}
      </section>

      <section className="adm-card" aria-labelledby="soc-drafts">
        <h2 id="soc-drafts">Drafts</h2>
        {weeks.length === 0 ? (
          <p className="adm-muted">No drafts yet — generate this week&apos;s drafts above.</p>
        ) : (
          <>
            <div className="adm-field">
              <label htmlFor="soc-week">Week</label>
              <select id="soc-week" value={week} onChange={(e) => setWeek(e.target.value)}>
                {weeks.map((w) => <option key={w} value={w}>{weekLabel(w)}</option>)}
              </select>
            </div>
            <div className="adm-actions">
              {manifest ? (
                <button type="button" className="adm-btn" disabled={running || starting} onClick={() => void makeImages()}>Rebuild images</button>
              ) : (
                <>
                  <span className="adm-muted">No images yet</span>
                  <button type="button" className="adm-btn adm-btn--primary" disabled={running || starting} onClick={() => void makeImages()}>Make images for this week</button>
                </>
              )}
            </div>
            {posts.length === 0 ? (
              <p className="adm-muted">This week&apos;s file has no posts.</p>
            ) : (
              <ul className="adm-social-posts" style={{ listStyle: 'none', padding: 0 }}>
                {posts.map((p, i) => <PostCard key={week + i} post={p} onCopy={onCopy} mpost={matchManifestPost(manifest, p, i)} week={week} version={manifest?.generatedAt || ''} />)}
              </ul>
            )}
          </>
        )}
        <p className="adm-sr" role="status" aria-live="polite">{copyLive}</p>
        {copyLive && <p className="adm-muted" aria-hidden="true">{copyLive}</p>}
      </section>

      <section className="adm-card" aria-labelledby="soc-ideas">
        <h2 id="soc-ideas">Ideas</h2>
        <form className="adm-social-add" onSubmit={(e) => { e.preventDefault(); void addIdea(); }}>
          <div className="adm-field">
            <label htmlFor="soc-idea">New idea</label>
            <input id="soc-idea" type="text" value={ideaText} onChange={(e) => setIdeaText(e.target.value)} />
          </div>
          <button type="submit" className="adm-btn adm-btn--primary" disabled={ideaBusy || !ideaText.trim()}>Add idea</button>
        </form>
        {ideaErr && <p className="adm-error" role="alert">{ideaErr}</p>}
        <details>
          <summary>Edit ideas file</summary>
          <div className="adm-field">
            <label htmlFor="soc-ideas-md">Ideas (markdown)</label>
            <textarea id="soc-ideas-md" className="adm-social-mono" rows={16} value={ideasMd} onChange={(e) => { setIdeasMd(e.target.value); setIdeasMsg(null); }} />
          </div>
          <div className="adm-actions">
            <button type="button" className="adm-btn" onClick={() => void saveIdeas()}>Save</button>
            {ideasMsg && <span className={ideasMsg.ok ? 'adm-ok' : 'adm-error'} role={ideasMsg.ok ? 'status' : 'alert'}>{ideasMsg.text}</span>}
          </div>
        </details>
      </section>

      <section className="adm-card" aria-labelledby="soc-topics">
        <h2 id="soc-topics">Used topics</h2>
        <details>
          <summary>Show used topics</summary>
          <pre className="adm-social-pre">{topics || 'None yet.'}</pre>
        </details>
      </section>

      <section className="adm-card" aria-labelledby="soc-sched">
        <h2 id="soc-sched">Weekly schedule</h2>
        <p>{sched.registered ? `On — next run: ${sched.nextRun ?? 'unknown'}` : 'Off'}</p>
        <div className="adm-actions">
          <button type="button" className="adm-btn adm-btn--primary" disabled={schedBusy} onClick={() => void toggleSchedule()}>
            {schedBusy ? 'Working…' : sched.registered ? 'Turn off' : 'Turn on weekly drafts'}
          </button>
        </div>
        {schedErr && <div role="alert"><pre className="adm-social-pre">{schedErr}</pre></div>}
        <p className="adm-muted">Runs Mondays 7pm Pakistan time (8–9am US Central) while you&apos;re logged in to this PC.</p>
      </section>
    </div>
  );
}
