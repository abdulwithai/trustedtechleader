'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

type Layer = {
  title: string;
  short: string;
  plain: string;
  checks: string[];
  get: string;
  art: ReactNode;
  status: 'risk' | 'warn' | 'ok';
};

const S = { strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const V = '#6B3BEA';
const V2 = '#8B5CF6';
const RED = '#E5484D';
const GREEN = '#3FA34D';
const TINT = '#EDE6FE';

const art = (children: ReactNode) => (
  <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

const LAYERS: Layer[] = [
  {
    title: 'Security audit of AI-generated code',
    short: 'Security audit',
    plain:
      'AI tools write code that works, not always code that is safe. We read what they produced, line by line, and flag what an attacker could use.',
    checks: ['Injection and unsafe input handling', 'Hard-coded keys and leaked secrets', 'Outdated or risky dependencies', 'Insecure defaults left by the generator'],
    get: 'A prioritised list of security findings, each with a plain-English explanation and a fix.',
    status: 'risk',
    art: art(
      <>
        <rect x="30" y="52" width="60" height="48" rx="10" fill={TINT} stroke={V} {...S} />
        <path d="M42 52V40a18 18 0 0 1 36 0v12" stroke={V} {...S} />
        <circle cx="60" cy="74" r="5" fill={V2} />
        <path d="M60 79v8" stroke={V2} {...S} />
        <path d="M72 52l-6 12 8 6-7 14" stroke={RED} {...S} />
      </>,
    ),
  },
  {
    title: 'Vulnerability & penetration testing',
    short: 'Penetration testing',
    plain: 'We try to break your app the way a real attacker would, safely, before someone else does.',
    checks: ['Cross-site scripting (XSS) and CSRF', 'Broken access to other users’ data', 'Exposed admin and debug routes', 'Abusable forms, uploads and rate limits'],
    get: 'Proof of what can be exploited, with steps to reproduce so your team can verify each fix.',
    status: 'risk',
    art: art(
      <>
        <circle cx="52" cy="52" r="28" fill="#fff" stroke={V} {...S} />
        <path d="M73 73l26 26" stroke={V} strokeWidth={5} strokeLinecap="round" />
        <ellipse cx="52" cy="56" rx="9" ry="11" fill={RED} />
        <circle cx="52" cy="42" r="5" fill={RED} />
        <path d="M43 50l-8-4M43 58h-9M44 65l-7 5M61 50l8-4M61 58h9M60 65l7 5" stroke={RED} {...S} strokeWidth={2} />
      </>,
    ),
  },
  {
    title: 'Code quality & architecture review',
    short: 'Code & architecture',
    plain: 'Generated code often piles up fast. We check that the structure will survive new features and a second developer.',
    checks: ['Duplicated and dead code', 'Tangled components and no clear boundaries', 'Missing error handling and tests', 'Fragile data flow between modules'],
    get: 'A clear picture of how maintainable your codebase is, and what to refactor first.',
    status: 'warn',
    art: art(
      <>
        <path d="M60 22l36 16-36 16-36-16z" fill={TINT} stroke={V} {...S} />
        <path d="M24 56l36 16 36-16" stroke={V2} {...S} />
        <path d="M24 74l36 16 36-16" stroke={V} {...S} />
        <circle cx="60" cy="38" r="4" fill={GREEN} />
      </>,
    ),
  },
  {
    title: 'Authentication & authorization checks',
    short: 'Auth & access',
    plain: 'Who can sign in, and what each person is allowed to see. This is where many AI-built apps leak data.',
    checks: ['Session and token handling', 'Role and permission checks on the server', 'Password reset and social login flows', 'Users reaching each other’s records (IDOR)'],
    get: 'A map of who can do what in your app, plus the gaps that need closing.',
    status: 'risk',
    art: art(
      <>
        <circle cx="38" cy="50" r="14" fill={TINT} stroke={V} {...S} />
        <circle cx="38" cy="50" r="4" fill={V2} />
        <path d="M50 58l30 30M70 78l8-8M78 86l8-8" stroke={V} {...S} />
        <path d="M90 20l20 8v16c0 14-9 24-20 28-11-4-20-14-20-28V28z" fill="#fff" stroke={GREEN} {...S} />
        <path d="M82 46l6 6 11-12" stroke={GREEN} {...S} />
      </>,
    ),
  },
  {
    title: 'Database, API & infrastructure security',
    short: 'Data, API & infra',
    plain: 'Your data lives behind your database, APIs and hosting settings. One wrong switch there can expose everything.',
    checks: ['Row-level security and open tables', 'Unauthenticated or over-permissive API routes', 'Public buckets and exposed env files', 'CORS, headers and secrets management'],
    get: 'A configuration review of your backend with the exact settings to change.',
    status: 'warn',
    art: art(
      <>
        <ellipse cx="48" cy="34" rx="26" ry="9" fill={TINT} stroke={V} {...S} />
        <path d="M22 34v38c0 5 12 9 26 9s26-4 26-9V34" stroke={V} {...S} />
        <path d="M22 53c0 5 12 9 26 9s26-4 26-9" stroke={V2} {...S} />
        <path d="M82 80h10m6 0h8M92 72v16M98 72v16M92 80h-8m22 0h-8" stroke={GREEN} {...S} strokeWidth={2.2} />
      </>,
    ),
  },
  {
    title: 'Performance & scalability review',
    short: 'Performance',
    plain: 'An app that is fine with ten users can fall over with a thousand. We find the slow spots before launch day does.',
    checks: ['Slow or repeated database queries', 'Heavy bundles and render-blocking assets', 'Missing caching and pagination', 'Limits that break under real traffic'],
    get: 'The bottlenecks ranked by impact, with the changes that give the biggest speed-up first.',
    status: 'warn',
    art: art(
      <>
        <path d="M20 84a40 40 0 1 1 80 0" fill={TINT} stroke={V} {...S} />
        <path d="M32 84a28 28 0 0 1 8-20" stroke={GREEN} {...S} strokeWidth={4} />
        <path d="M60 84L82 54" stroke={RED} strokeWidth={3.5} strokeLinecap="round" />
        <circle cx="60" cy="84" r="6" fill={V} />
        <path d="M60 50v6M36 60l4 4M84 60l-4 4" stroke={V2} {...S} strokeWidth={2} />
      </>,
    ),
  },
  {
    title: 'Production-readiness assessment',
    short: 'Production readiness',
    plain: 'Running is not the same as ready. We check the unglamorous things that keep a live app up and recoverable.',
    checks: ['Logging, monitoring and error alerts', 'Backups and a tested restore', 'Separate staging and production settings', 'Deploy, rollback and domain/SSL setup'],
    get: 'A go / no-go checklist for launch, with every open item named and owned.',
    status: 'warn',
    art: art(
      <>
        <rect x="28" y="20" width="64" height="82" rx="10" fill="#fff" stroke={V} {...S} />
        <rect x="46" y="14" width="28" height="12" rx="5" fill={TINT} stroke={V} {...S} />
        <path d="M40 48l5 5 9-10" stroke={GREEN} {...S} />
        <path d="M40 68l5 5 9-10" stroke={GREEN} {...S} />
        <path d="M62 49h18M62 69h18" stroke={V2} {...S} />
        <circle cx="45" cy="90" r="5" fill="none" stroke={RED} strokeWidth={2.2} />
        <path d="M62 90h18" stroke={V2} {...S} />
      </>,
    ),
  },
  {
    title: 'Fixes & launch preparation',
    short: 'Fixes & launch',
    plain: 'A list of problems is only half the job. We can fix the critical ones with you and get you over the line to launch.',
    checks: ['Patches for high-severity findings', 'Re-test to confirm each issue is closed', 'Hardened config and secrets rotation', 'Handover notes your team can follow'],
    get: 'Fixed critical issues, a re-tested app, and a clear launch plan.',
    status: 'ok',
    art: art(
      <>
        <path d="M78 18c14 4 22 14 24 28-14 2-24 12-30 24L50 48c8-16 16-26 28-30z" fill={TINT} stroke={V} {...S} />
        <circle cx="80" cy="42" r="6" fill="#fff" stroke={V2} {...S} />
        <path d="M50 48l-14 3-8 12 18 2M72 70l-3 14-12 8-2-18" stroke={V} {...S} />
        <path d="M30 96l8-8" stroke={GREEN} {...S} />
        <path d="M18 60a12 12 0 0 0 14 14l-4-10z" stroke={GREEN} {...S} strokeWidth={2} />
      </>,
    ),
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const [vertical, setVertical] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const on = () => setVertical(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const select = (i: number, focus = false) => {
    const n = (i + LAYERS.length) % LAYERS.length;
    setActive(n);
    const el = tabRefs.current[n];
    if (focus) el?.focus();
    // keep the active pill visible inside the scroll row only (no page scroll)
    const list = listRef.current;
    if (el && list && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = LAYERS.length - 1;
    let next = -1;
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = active === last ? 0 : active + 1;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        next = active === 0 ? last : active - 1;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = last;
        break;
      default:
        return;
    }
    e.preventDefault();
    select(next, true);
  };

  return (
    <div className="acs-services__explorer">
      <div
        ref={listRef}
        className="acs-services__tabs"
        role="tablist"
        aria-label="Audit layers"
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        onKeyDown={onKey}
      >
        {LAYERS.map((l, i) => (
          <button
            key={l.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`acs-svc-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`acs-svc-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className="acs-services__tab"
            onClick={() => select(i)}
          >
            <span className="acs-services__tabnum">{pad(i + 1)}</span>
            <span className="acs-services__tabtitle">{l.short}</span>
            <span className={`acs-services__dot acs-services__dot--${l.status}`} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="acs-card acs-card--lg acs-services__panelwrap">
        {LAYERS.map((l, i) => (
          <div
            key={l.title}
            role="tabpanel"
            id={`acs-svc-panel-${i}`}
            aria-labelledby={`acs-svc-tab-${i}`}
            hidden={i !== active}
            tabIndex={0}
            className="acs-services__panel"
          >
            <div className="acs-services__art" aria-hidden="true">
              {l.art}
            </div>
            <span className="acs-eyebrow">Layer {pad(i + 1)}</span>
            <h3 className="acs-services__title">{l.title}</h3>
            <p className="acs-services__plain">{l.plain}</p>
            <p className="acs-services__lookfor">We look for</p>
            <ul className="acs-services__checks">
              {l.checks.map((c, k) => (
                <li key={c} style={{ '--k': k } as React.CSSProperties}>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
                    <circle cx="10" cy="10" r="8.5" fill="var(--acs-violet-tint)" />
                    <path d="M6 10.4l2.8 2.8L14 7.6" fill="none" stroke="var(--acs-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="acs-services__get">
              <span className="acs-eyebrow acs-eyebrow--plain">You get</span>
              <p>{l.get}</p>
            </div>
          </div>
        ))}
        <div className="acs-services__foot">
          <span className="acs-services__progress" aria-live="polite">
            {pad(active + 1)} / {pad(LAYERS.length)}
          </span>
          <span className="acs-services__bar" aria-hidden="true">
            <i style={{ width: `${((active + 1) / LAYERS.length) * 100}%` }} />
          </span>
          <div className="acs-services__nav">
            <button type="button" className="acs-services__navbtn" onClick={() => select(active - 1)} aria-label="Previous layer">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Prev
            </button>
            <button type="button" className="acs-services__navbtn" onClick={() => select(active + 1)} aria-label="Next layer">
              Next
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
