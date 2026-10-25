'use client';

import { useEffect } from 'react';

type Step = [string, string, string];
interface Demo {
  name: string;
  matter: string;
  source: string;
  team: string;
  steps: Step[];
}
type FieldKey = 'name' | 'matter' | 'source' | 'team';

/* Demo-record card */
const L: Record<string, Demo> = {
  imm: { name: 'M. Alvarez', matter: 'Family-based green card', source: 'website form', team: 'Immigration',
    steps: [['9:01 am','Captured','Website form added to the CRM'],['9:01 am','Read','I-130 receipt notice: receipt date and priority date added'],['9:03 am','Replied','First reply sent with consult times'],['9:20 am','Booked','Thu 2:00 pm with the immigration attorney'],['Thu 2:15','Recovered','Consult missed: call placed, SMS rebooking link sent']] },
  pi: { name: 'J. Okafor', matter: 'Rear-end collision', source: 'Facebook ad', team: 'Personal injury',
    steps: [['7:42 pm','Captured','Ad lead added to the CRM'],['7:42 pm','Read','Police report: date, location and insurer added'],['7:44 pm','Replied','After-hours reply with next-morning slots'],['8:05 am','Booked','Fri 10:30 am intake call'],['Fri 10:45','Recovered','No answer: call agent retried, SMS sent']] },
  fam: { name: 'R. Chen', matter: 'Custody modification', source: 'WhatsApp', team: 'Family law',
    steps: [['12:10 pm','Captured','WhatsApp message added to the CRM'],['12:10 pm','Read','Current custody order: county and case type added'],['12:12 pm','Replied','Reply on WhatsApp with booking link'],['12:31 pm','Booked','Mon 4:00 pm consultation'],['Mon 4:15','Recovered','Consult missed: SMS sent, call scheduled']] }
};

function el(tag: string, cls?: string, text?: string): HTMLElement {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

export default function LawBehavior() {
  useEffect(() => {
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
          li.appendChild(el('span', i === 4 ? 'dot dot--last' : 'dot'));
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
  }, []);

  return null;
}
