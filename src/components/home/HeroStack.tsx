'use client';

import { useEffect, useState } from 'react';

const ITEMS = [
  { manual: 'Chasing leads by hand', done: 'Leads followed up for you' },
  { manual: 'Copying data between tools', done: 'Tools synced automatically' },
  { manual: 'Building the weekly report', done: 'Report ready every Monday' },
  { manual: 'Chasing unpaid invoices', done: 'Reminders sent on their own' },
];

/* Illustrative only: manual tasks (dashed slots) turn into automated ones, one by one, on a loop. */
export default function HeroStack() {
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(ITEMS.length); return; }
    let i = 0;
    const id = window.setInterval(() => {
      i = i > ITEMS.length + 1 ? 0 : i + 1;
      setN(Math.min(i, ITEMS.length));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hm-stack acs-card acs-card--lg" role="group" aria-label="Example: manual work turning into automated work">
      <div className="hm-stack__bar">
        <span className="acs-eyebrow acs-eyebrow--plain">Your business · example</span>
        <span className="hm-stack__count" aria-hidden="true">{n}/{ITEMS.length} automated</span>
      </div>
      <div className="hm-stack__progress" aria-hidden="true">
        <span style={{ width: `${(n / ITEMS.length) * 100}%` }} />
      </div>
      <ul className="hm-stack__list">
        {ITEMS.map((it, i) => {
          const done = i < n;
          return (
            <li key={it.manual} className={`hm-task${done ? ' is-done' : ''}`}>
              <span className={`acs-chip acs-chip--${done ? 'ok' : 'warn'}`}>{done ? 'Automated' : 'By hand'}</span>
              <span className="hm-task__t">{done ? it.done : it.manual}</span>
              <svg className="hm-task__ck" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="#3FA34D" />
                <path d="m5.8 10.3 2.7 2.7 5.4-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
