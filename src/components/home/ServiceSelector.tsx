'use client';

import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/booking';

type Svc = { id: string; n: string; short: string; title: string; body: string; href: string; cta: string; external?: boolean; tag?: string };

const SVCS: Svc[] = [
  { id: 'strategy', n: '01', short: 'AI strategy', title: 'AI strategy and consulting', body: 'Find where AI pays off, and what to skip. We start with your workflow, not the hype.', href: BOOKING_URL, cta: 'Talk it through on a call', external: true },
  { id: 'automation', n: '02', short: 'Automation & agents', title: 'AI automation', body: 'Agents and automations added inside the workflow, so the work happens where your team already does it.', href: '/ai-automation/', cta: 'See AI automation' },
  { id: 'systems', n: '03', short: 'Business systems', title: 'Business systems', body: 'CRM, billing, inventory, reporting. One custom system that fits how you actually run.', href: '/business-systems/', cta: 'See business systems' },
  { id: 'apps', n: '04', short: 'Web & mobile apps', title: 'Web and mobile apps', body: 'Built on the same system as your back office, so the app and the back office stay in step.', href: '/web-and-mobile-apps/', cta: 'See web and mobile apps' },
  { id: 'audit', n: '05', short: 'AI-code security audit', title: 'Security audit for AI-built apps', body: 'A senior engineer reviews your AI-generated code, tests it the way an attacker would, and fixes what is broken before real users and real data arrive.', href: '/ai-code-security-audit/', cta: 'See the security audit', tag: 'New' },
];

export default function ServiceSelector() {
  const [a, setA] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let next = a;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (a + 1) % SVCS.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (a - 1 + SVCS.length) % SVCS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = SVCS.length - 1;
    else return;
    e.preventDefault();
    setA(next);
    document.getElementById(`hm-tab-${SVCS[next].id}`)?.focus();
  };

  return (
    <div className="hm-sel">
      <div className="hm-sel__tabs" role="tablist" aria-label="Services" aria-orientation="vertical">
        {SVCS.map((s, i) => (
          <button
            key={s.id}
            id={`hm-tab-${s.id}`}
            role="tab"
            type="button"
            aria-selected={i === a}
            aria-controls={`hm-panel-${s.id}`}
            tabIndex={i === a ? 0 : -1}
            className={`hm-tab${i === a ? ' is-active' : ''}`}
            onClick={() => setA(i)}
            onKeyDown={onKey}
          >
            <span className="hm-tab__n">{s.n}</span>
            <span className="hm-tab__t">{s.short}</span>
            {s.tag ? <span className="acs-chip acs-chip--ok">{s.tag}</span> : null}
          </button>
        ))}
      </div>
      <div className="hm-sel__panels">
        {SVCS.map((s, i) => (
          <div
            key={s.id}
            id={`hm-panel-${s.id}`}
            role="tabpanel"
            aria-labelledby={`hm-tab-${s.id}`}
            className={`hm-panel acs-card acs-card--lg${i === a ? ' is-active' : ''}`}
          >
            <span className="hm-panel__mark" aria-hidden="true">{s.n}</span>
            <span className="acs-eyebrow">Service {s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {s.external ? (
              <a className="acs-btn acs-btn--primary acs-btn--md" href={s.href} target="_blank" rel="noopener">
                <span>{s.cta}</span>
                <Arrow />
              </a>
            ) : (
              <Link className="acs-btn acs-btn--primary acs-btn--md" href={s.href}>
                <span>{s.cta}</span>
                <Arrow />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="acs-btn__arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
