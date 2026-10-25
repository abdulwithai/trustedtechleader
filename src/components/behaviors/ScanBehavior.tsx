'use client';

import { useEffect } from 'react';

const QUESTIONS: Record<string, string> = {
  estate: 'Who can help my blended family create an estate plan in Dallas?',
  pi: "Who's a good car accident lawyer near me with strong reviews?",
  family: 'Who can help me modify a custody order in Houston?',
};

const TO = 'hello@trustedtechleader.com'; // TODO: contact email. Can be swapped for a form service such as Formspree.
const FIELDS: Array<[string, string]> = [
  ['name', 'Your name'], ['firm', 'Firm name'], ['website', 'Firm website'],
  ['city', 'City and state'], ['practice', 'Main practice area'], ['email', 'Work email'],
];

function buildMailto(data: Record<string, string>): string {
  const body = FIELDS.map((f) => f[1] + ': ' + (data[f[0]] || '')).join('\n');
  return 'mailto:' + TO + '?subject=' + encodeURIComponent('Free AI visibility scan request') +
    '&body=' + encodeURIComponent(body);
}

type ScanWindow = Window & { ttlBuildScanMailto?: typeof buildMailto };

export default function ScanBehavior() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const listen = (t: EventTarget, type: string, fn: (e: never) => void) => {
      t.addEventListener(type, fn as EventListener);
      cleanups.push(() => t.removeEventListener(type, fn as EventListener));
    };

    /* ---------- Walkthrough ---------- */
    const walk = document.getElementById('walk');
    const panel = document.getElementById('walk-panel');
    const qEl = document.getElementById('walk-q');
    const node = walk?.querySelector('.walk__node');
    if (walk && panel && qEl && node) {
      const tabs = Array.from(walk.querySelectorAll<HTMLElement>('[role="tab"]'));
      const tiles = Array.from(walk.querySelectorAll('.walk__tile'));
      const paths = Array.from(walk.querySelectorAll('.walk__lines path'));
      const rows = Array.from(walk.querySelectorAll('.walk__row'));
      const replay = document.getElementById('walk-replay');
      const reduce = !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let timers: Array<ReturnType<typeof setTimeout>> = [];

      const clear = () => { timers.forEach(clearTimeout); timers = []; };
      const at = (ms: number, fn: () => void) => { timers.push(setTimeout(fn, ms)); };

      const showFinal = () => {
        walk.classList.remove('is-anim');
        walk.classList.add('q-on');
      };

      const play = () => {
        clear();
        if (reduce) { showFinal(); return; }
        walk.classList.remove('q-on');
        walk.classList.add('is-anim');
        tiles.forEach((t) => t.classList.remove('is-on'));
        paths.forEach((p) => p.classList.remove('is-on'));
        rows.forEach((r) => r.classList.remove('is-on'));
        node.classList.remove('is-on');
        at(80, () => walk.classList.add('q-on'));
        tiles.forEach((t, i) => {
          at(900 + i * 450, () => { t.classList.add('is-on'); if (paths[i]) paths[i].classList.add('is-on'); });
        });
        at(900 + tiles.length * 450, () => node.classList.add('is-on'));
        rows.forEach((r, i) => {
          at(900 + tiles.length * 450 + 350 + i * 550, () => r.classList.add('is-on'));
        });
      };

      const select = (tab: HTMLElement, focus: boolean) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
        });
        panel.setAttribute('aria-labelledby', tab.id);
        qEl.textContent = '“' + QUESTIONS[tab.getAttribute('data-q') || ''] + '”';
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
      play();
      cleanups.push(clear);
    }

    /* ---------- Request form ---------- */
    (window as ScanWindow).ttlBuildScanMailto = buildMailto;
    cleanups.push(() => { delete (window as ScanWindow).ttlBuildScanMailto; });

    const form = document.getElementById('scan-request') as HTMLFormElement | null;
    const ok = document.getElementById('scan-ok');
    if (form) {
      listen(form, 'submit', (e: Event) => {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        const data: Record<string, string> = {};
        FIELDS.forEach((f) => {
          const field = form.elements.namedItem(f[0]) as HTMLInputElement | null;
          data[f[0]] = ((field && field.value) || '').trim();
        });
        window.location.href = buildMailto(data);
        if (ok) ok.hidden = false;
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
