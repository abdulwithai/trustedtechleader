'use client';

import { useEffect } from 'react';

// /ai-visibility/ question grid: practice tabs rebuild the table rows and the summary.
type Key = 'est' | 'pi' | 'imm';
const V: Record<Key, { label: string; qs: string[] }> = {
  est: { label: 'Estate planning', qs: ['Best estate planning lawyer near me for a blended family', 'Who can set up a living trust in Austin?', 'Affordable will and power of attorney attorney', 'Estate lawyer who speaks Spanish in Houston', 'Do I need a lawyer for probate in Texas?'] },
  pi: { label: 'Personal injury', qs: ['Car accident lawyer near me with good reviews', 'Who handles truck accident cases in Dallas?', 'Personal injury lawyer who works on contingency', 'Slip and fall attorney open on weekends', 'Should I talk to a lawyer after a minor crash?'] },
  imm: { label: 'Immigration', qs: ['Immigration lawyer for a spouse green card', 'Who can help with an asylum case in Houston?', 'Affordable immigration attorney that speaks Urdu', 'Lawyer for H-1B to green card transfer', 'Best place to get help with a work permit renewal'] },
};
const PAT: Record<Key, string[]> = {
  est: ['nnwx', 'xnnx', 'wxxn', 'xxxx', 'nxnw'],
  pi: ['xnxx', 'nnxw', 'xxxx', 'wnxn', 'xxnx'],
  imm: ['nxwn', 'xxnx', 'nnnw', 'xwxx', 'xxxn'],
};
const CELL: Record<string, [string, string]> = { n: ['n', 'Named'], w: ['w', 'Wrong details'], x: ['x', 'Not named'] };

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

export default function VisibilityBehavior() {
  useEffect(() => {
    const body = document.getElementById('grid-body');
    const panel = document.getElementById('grid-panel');
    const summary = document.getElementById('grid-summary');
    const caption = document.querySelector('.vgrid-table caption');
    const tabs = Array.from(document.querySelectorAll<HTMLElement>('.vgrid-tabs [role="tab"]'));
    if (!body || !panel || !summary || !tabs.length) return;

    const cleanups: Array<() => void> = [];
    const listen = (t: EventTarget, type: string, fn: (e: never) => void, opts?: AddEventListenerOptions) => {
      t.addEventListener(type, fn as EventListener, opts);
      cleanups.push(() => t.removeEventListener(type, fn as EventListener, opts));
    };

    const render = (key: Key) => {
      const rows = V[key].qs;
      let named = 0;
      body.textContent = '';
      rows.forEach((q, i) => {
        const tr = el('tr');
        const th = el('th', '', '“' + q + '”');
        th.setAttribute('scope', 'row');
        tr.appendChild(th);
        PAT[key][i].split('').forEach((ch) => {
          if (ch !== 'x') named++;
          const c = CELL[ch];
          const td = el('td');
          const span = el('span', 'cell cell--' + c[0]);
          const sw = el('i', 'sw');
          sw.setAttribute('aria-hidden', 'true');
          span.appendChild(sw);
          span.appendChild(document.createTextNode(c[1]));
          td.appendChild(span);
          tr.appendChild(td);
        });
        body.appendChild(tr);
      });
      summary.textContent = 'Example: named in ' + named + ' of 20 answers';
      if (caption) caption.textContent = 'Question grid: ' + V[key].label + '. Whether each assistant names the firm for each buying question.';
    };

    const select = (tab: HTMLElement, focus: boolean) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      render((tab.getAttribute('data-practice') || 'est') as Key);
      if (focus) tab.focus();
    };

    const wrap = document.getElementById('grid-wrap');
    const hint = () => {
      if (!wrap) return;
      const over = panel.scrollWidth > panel.clientWidth + 1;
      wrap.classList.toggle('is-overflowing', over);
      wrap.classList.toggle('at-end', panel.scrollLeft + panel.clientWidth >= panel.scrollWidth - 2);
    };
    listen(panel, 'scroll', hint, { passive: true });
    listen(window, 'resize', hint);
    listen(window, 'load', hint);
    hint();

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

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
