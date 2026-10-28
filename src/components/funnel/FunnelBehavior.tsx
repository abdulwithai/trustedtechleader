'use client';

import { useEffect } from 'react';
import type { DemoRecord } from '@/lib/funnel-content/types';

type FieldKey = 'name' | 'matter' | 'source' | 'team';

function el(tag: string, cls?: string, text?: string): HTMLElement {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

/** Demo tab switching + FAQ accordion. Renders nothing. */
export default function FunnelBehavior({ records }: { records: DemoRecord[] }) {
  useEffect(() => {
    const L: Record<string, DemoRecord> = {};
    records.forEach((r) => { L[r.key] = r; });

    const cleanups: Array<() => void> = [];
    const on = <K extends keyof HTMLElementEventMap>(
      t: HTMLElement,
      type: K,
      h: (e: HTMLElementEventMap[K]) => void
    ) => {
      t.addEventListener(type, h);
      cleanups.push(() => t.removeEventListener(type, h));
    };

    const demo = document.getElementById('demo');
    const panel = document.getElementById('demo-panel');
    if (demo && panel) {
      const tabs = Array.from(demo.querySelectorAll<HTMLElement>('[role="tab"]'));
      const field = (k: string) => demo.querySelector<HTMLElement>('[data-f="' + k + '"]');

      const show = (key: string | null, focus?: boolean) => {
        const d = key ? L[key] : undefined;
        if (!key || !d) return;
        tabs.forEach((t) => {
          const sel = t.getAttribute('data-practice') === key;
          t.setAttribute('aria-selected', sel ? 'true' : 'false');
          t.tabIndex = sel ? 0 : -1;
          if (sel) { panel.setAttribute('aria-labelledby', t.id); if (focus) t.focus(); }
        });
        (['name', 'matter', 'source', 'team'] as FieldKey[]).forEach((k) => {
          const f = field(k);
          if (f) f.textContent = d[k];
        });
        const ol = field('steps');
        if (!ol) return;
        ol.textContent = '';
        d.steps.forEach((s, i) => {
          const li = el('li');
          li.appendChild(el('span', i === d.steps.length - 1 ? 'dot dot--last' : 'dot'));
          li.appendChild(el('span', 't', s[0]));
          const box = el('div');
          box.appendChild(el('div', 'l', s[1]));
          box.appendChild(el('div', 'd', s[2]));
          li.appendChild(box);
          ol.appendChild(li);
        });
      };

      tabs.forEach((t, i) => {
        on(t, 'click', () => show(t.getAttribute('data-practice')));
        on(t, 'keydown', (e) => {
          let j = -1;
          if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
          else if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
          else if (e.key === 'Home') j = 0;
          else if (e.key === 'End') j = tabs.length - 1;
          if (j < 0) return;
          e.preventDefault();
          show(tabs[j].getAttribute('data-practice'), true);
        });
      });
    }

    /* FAQ accordion: one open at a time */
    const items = Array.from(document.querySelectorAll<HTMLElement>('.faq__item'));
    const setOpen = (item: HTMLElement, open: boolean) => {
      const b = item.querySelector<HTMLElement>('button');
      const a = item.querySelector<HTMLElement>('.faq__a');
      if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (a) a.hidden = !open;
      item.classList.toggle('is-open', open);
    };
    items.forEach((item) => {
      const b = item.querySelector<HTMLElement>('button');
      if (!b) return;
      on(b, 'click', () => {
        const wasOpen = item.classList.contains('is-open');
        items.forEach((o) => setOpen(o, false));
        if (!wasOpen) setOpen(item, true);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [records]);

  return null;
}
