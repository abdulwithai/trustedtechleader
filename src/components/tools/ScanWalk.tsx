'use client';

import { useEffect } from 'react';

// /free-scan/ illustrative walkthrough: practice tabs swap the example question, "Replay" re-runs the
// question -> assistants -> shortlist animation. Content is fully visible without JS (is-anim is added here).
const Q: Record<string, string> = {
  estate: 'Who can help my blended family create an estate plan in Dallas?',
  pi: 'Who handles truck accident cases in Dallas?',
  family: 'Who can help me with a custody agreement in Dallas?',
};

export default function ScanWalk() {
  useEffect(() => {
    const walk = document.getElementById('walk');
    const qEl = document.getElementById('walk-q');
    const panel = document.getElementById('walk-panel');
    const replay = document.getElementById('walk-replay');
    if (!walk || !qEl || !panel) return;
    const tabs = Array.from(walk.querySelectorAll<HTMLElement>('.walk__tab'));
    const tiles = Array.from(walk.querySelectorAll<HTMLElement>('.walk__tile'));
    const paths = Array.from(walk.querySelectorAll<SVGPathElement>('.walk__lines path'));
    const node = walk.querySelector<HTMLElement>('.walk__node');
    const rows = Array.from(walk.querySelectorAll<HTMLElement>('.walk__row'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const cleanups: Array<() => void> = [];
    const listen = (t: EventTarget, type: string, fn: (e: never) => void) => {
      t.addEventListener(type, fn as EventListener);
      cleanups.push(() => t.removeEventListener(type, fn as EventListener));
    };
    const later = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const clear = () => { while (timers.length) clearTimeout(timers.pop()); };

    const reset = () => {
      walk.classList.remove('q-on');
      [...tiles, ...paths, ...rows].forEach((n) => n.classList.remove('is-on'));
      node?.classList.remove('is-on');
    };
    const play = () => {
      clear();
      if (reduce) return;
      walk.classList.add('is-anim');
      reset();
      later(200, () => walk.classList.add('q-on'));
      tiles.forEach((t, i) => later(800 + i * 260, () => t.classList.add('is-on')));
      paths.forEach((p, i) => later(900 + i * 260, () => p.classList.add('is-on')));
      later(2000, () => node?.classList.add('is-on'));
      rows.forEach((r, i) => later(2300 + i * 380, () => r.classList.add('is-on')));
    };

    const select = (tab: HTMLElement, focus: boolean) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      qEl.textContent = '“' + (Q[tab.getAttribute('data-q') || 'estate'] || Q.estate) + '”';
      if (focus) tab.focus();
      play();
    };

    tabs.forEach((tab, i) => {
      listen(tab, 'click', () => select(tab, false));
      listen(tab, 'keydown', (e: KeyboardEvent) => {
        let n: HTMLElement | null = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') n = tabs[0];
        else if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
    if (replay) listen(replay, 'click', play);

    if (reduce) replay?.setAttribute('hidden', '');
    else { walk.classList.add('is-anim'); reset(); } // start hidden before the first paint, then animate in

    // Start when the walkthrough scrolls into view.
    let io: IntersectionObserver | undefined;
    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) { io?.disconnect(); play(); }
      }, { threshold: 0.3 });
      io.observe(walk);
    }

    if (!reduce && !('IntersectionObserver' in window)) play();

    return () => { clear(); io?.disconnect(); cleanups.forEach((fn) => fn()); };
  }, []);

  return null;
}
