'use client';

import { useEffect } from 'react';

type Cleanup = () => void;

/* Shared play/pause plumbing: paused off-screen, in background tabs and with reduced motion. */
function observe(target: Element, onView: (v: boolean) => void, onChange: () => void, onMotion: () => void): Cleanup {
  const mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((e) => {
      onView(e[e.length - 1].isIntersecting);
      onChange();
    }, { threshold: 0.2 });
    io.observe(target);
  }
  document.addEventListener('visibilitychange', onChange);
  if (mq) {
    if (mq.addEventListener) mq.addEventListener('change', onMotion);
    else if (mq.addListener) mq.addListener(onMotion);
  }
  return () => {
    if (io) io.disconnect();
    document.removeEventListener('visibilitychange', onChange);
    if (mq) {
      if (mq.removeEventListener) mq.removeEventListener('change', onMotion);
      else if (mq.removeListener) mq.removeListener(onMotion);
    }
  };
}

function reducedMotion(): boolean {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

type Icon = 'New' | 'Signed' | 'Paid' | 'Done';
type Kpi = 'rev' | 'deals' | 'due' | 'week' | 'bar';

/* Hero operations dashboard. Static markup is a complete state; this cycles events through it. */
function initDash(): Cleanup | undefined {
  const dash = document.querySelector<HTMLElement>('.dash');
  const feed = dash && dash.querySelector<HTMLElement>('[data-feed]');
  if (!dash || !feed) return;
  const ICON: Record<Icon, string> = {
    New: '<svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 13.5c.8-2.6 2.8-3.8 5-3.8s4.2 1.2 5 3.8"/></svg>',
    Signed: '<svg viewBox="0 0 16 16"><path d="M4 2.5h5.5L12 5v8.5H4z"/><path d="M6 8h4M6 10.5h3"/></svg>',
    Paid: '<svg viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="8.5" rx="1.5"/><path d="M2 7h12"/></svg>',
    Done: '<svg viewBox="0 0 16 16"><path d="M4 12L12 4"/><circle cx="5" cy="5" r="1.6"/><circle cx="11" cy="11" r="1.6"/></svg>'
  };
  // [client, invoice number, amount]. Each client moves lead -> contract -> payment -> commission.
  const CLIENTS: Array<[string, number, number]> = [['Bright Studio', 1042, 4800], ['Harbor Logistics', 1043, 6500], ['Northwind Supply', 1044, 2750]];
  const BASE: Record<Kpi, number> = { rev: 48250, deals: 23, due: 7, week: 9600, bar: 0.66 };
  const TICK = 3000, FIRST = 1600;
  const el: Record<string, HTMLElement> = {};
  dash.querySelectorAll<HTMLElement>('[data-kpi]').forEach((n) => { el[n.getAttribute('data-kpi') as string] = n; });
  const bar = dash.querySelector<HTMLElement>('[data-bar]');
  const toast = dash.querySelector<HTMLElement>('[data-toast]');
  if (!bar || !toast) return;
  const feed0 = feed.innerHTML;
  const toast0 = toast.textContent || '';
  const v: Record<Kpi, number> = { ...BASE };
  let n = 0, gen = 0, left = FIRST, due = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let enabled = false, inView = true, running = false;
  const pending = new Set<ReturnType<typeof setTimeout>>();

  const money = (x: number) => '$' + String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const fmt = (k: Kpi) => (k === 'rev' || k === 'week' ? money(v[k]) : String(v[k]));
  const reset = () => { (Object.keys(BASE) as Kpi[]).forEach((k) => { v[k] = BASE[k]; }); };

  // Fade the old value up and out, then the new one in. Ignored if the animation was reset meanwhile.
  const swap = (node: HTMLElement, fn: () => void) => {
    const g = gen;
    node.classList.add('is-out');
    const id = setTimeout(() => {
      pending.delete(id);
      if (g !== gen) return;
      fn();
      node.classList.remove('is-out');
    }, 200);
    pending.add(id);
  };
  const set = (k: Kpi, d: number) => {
    v[k] += d;
    const t = fmt(k);
    const node = el[k];
    if (node) swap(node, () => { node.textContent = t; });
  };
  const setBar = (h: number) => { bar.style.setProperty('--h', String(h)); };

  // New row slides in at the top with an outline pill, which turns solid shortly after; the bottom row falls off.
  const land = (name: string, text: string, st: Icon) => {
    const g = gen;
    const li = document.createElement('li');
    li.className = 'feed__row is-new';
    li.innerHTML = '<span class="feed__ic">' + ICON[st] + '</span><span class="feed__tx"><b></b><span></span></span><span class="feed__st"></span>';
    li.querySelector<HTMLElement>('b')!.textContent = name;
    li.querySelector<HTMLElement>('.feed__tx span')!.textContent = text;
    li.querySelector<HTMLElement>('.feed__st')!.textContent = st;
    feed.insertBefore(li, feed.firstChild);
    feed.classList.remove('is-push');
    void feed.offsetWidth;
    feed.classList.add('is-push');
    const rows = feed.children;
    if (rows.length > 4) rows[rows.length - 1].classList.add('is-gone');
    const id = setTimeout(() => {
      pending.delete(id);
      if (g !== gen) return;
      li.querySelector<HTMLElement>('.feed__st')!.classList.add('is-ok');
      while (feed.children.length > 4) feed.removeChild(feed.lastChild as ChildNode);
    }, 900);
    pending.add(id);
  };

  const step = () => {
    const c = CLIENTS[Math.floor(n / 4) % CLIENTS.length];
    const s = n % 4;
    if (n % (CLIENTS.length * 4) === 0 && v.rev !== BASE.rev) {
      // Start of a new cycle: settle the numbers back so nothing grows forever.
      reset();
      for (const k in el) set(k as Kpi, 0);
      setBar(BASE.bar);
    }
    if (s === 0) { land(c[0], 'Lead captured', 'New'); set('deals', 1); }
    else if (s === 1) { land(c[0], 'Contract signed', 'Signed'); }
    else if (s === 2) {
      land(c[0], 'Invoice #' + c[1] + ' paid · ' + money(c[2]), 'Paid');
      set('rev', c[2]); set('week', c[2]); set('due', -1);
      v.bar = Math.min(0.98, v.bar + 0.1); setBar(v.bar);
      const t = money(c[2]) + ' · ' + c[0];
      swap(toast, () => { toast.textContent = t; });
    } else { land(c[0], 'Commission ' + money(Math.round(c[2] / 10)) + ' calculated', 'Done'); }
    n = (n + 1) % (CLIENTS.length * 4);
  };

  const go = (d: number) => { due = Date.now() + d; timer = setTimeout(tick, d); };
  function tick() { timer = null; step(); go(TICK); }
  const update = () => {
    const want = enabled && inView && !document.hidden;
    dash.classList.toggle('is-paused', !want);
    if (want && !running) {
      running = true;
      go(left);
    } else if (!want && running) {
      running = false;
      if (timer) { clearTimeout(timer); timer = null; left = Math.max(0, due - Date.now()); }
    }
  };
  const enable = () => {
    if (enabled) return;
    enabled = true;
    dash.classList.add('is-live');
    update();
  };
  const disable = () => {
    enabled = false;
    update();
    gen++; n = 0; left = FIRST;
    reset();
    feed.innerHTML = feed0;
    feed.classList.remove('is-push');
    toast.textContent = toast0;
    toast.classList.remove('is-out');
    for (const k in el) { el[k].textContent = fmt(k as Kpi); el[k].classList.remove('is-out'); }
    setBar(BASE.bar);
    dash.classList.remove('is-live');
  };
  const onMotion = () => { if (reducedMotion()) disable(); else enable(); };

  reset();
  const stop = observe(dash, (vis) => { inView = vis; }, update, onMotion);
  onMotion();

  return () => {
    stop();
    disable();
    if (timer) { clearTimeout(timer); timer = null; }
    pending.forEach(clearTimeout);
    pending.clear();
    dash.classList.remove('is-paused');
  };
}

export default function HomeBehavior() {
  useEffect(() => {
    const cleanups = [initDash()];
    return () => cleanups.forEach((fn) => fn && fn());
  }, []);

  return null;
}
