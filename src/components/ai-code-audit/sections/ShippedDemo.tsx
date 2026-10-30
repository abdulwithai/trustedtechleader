'use client';

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import Auditor from '@/components/brand/Auditor';

type Mode = 'said' | 'shipped';

const TABS: { id: Mode; label: string }[] = [
  { id: 'said', label: 'What it said' },
  { id: 'shipped', label: 'What it shipped' },
];

const RISKS = [
  { tone: 'risk', eyebrow: 'Broken access', title: 'Login is only checked in the browser', code: 'if (user) showDashboard()' },
  { tone: 'risk', eyebrow: 'Exposed secret', title: 'Secret key hard-coded', code: 'const STRIPE_SECRET = "sk_live_..."' },
  { tone: 'warn', eyebrow: 'Unverified input', title: 'Payment webhook trusts anyone', code: '// TODO: verify signature' },
  { tone: 'risk', eyebrow: 'Data leak', title: 'Any user can open any invoice', code: 'GET /api/invoices/:id' },
] as const;

export default function ShippedDemo() {
  const [mode, setMode] = useState<Mode>('said');
  const [mounted, setMounted] = useState(false);
  const [hot, setHot] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const tabRefs = useRef<Record<Mode, HTMLButtonElement | null>>({ said: null, shipped: null });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          if (!touched.current) setMode('shipped');
        }, 1200);
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const choose = (m: Mode, focus = false) => {
    touched.current = true;
    setMode(m);
    if (focus) tabRefs.current[m]?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    const i = TABS.findIndex((t) => t.id === mode);
    let n = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % TABS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i + TABS.length - 1) % TABS.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = TABS.length - 1;
    if (n < 0) return;
    e.preventDefault();
    choose(TABS[n].id, true);
  };

  const shipped = mode === 'shipped';
  const hideRisk = mounted && !shipped;
  const line = (i: number) => (shipped && hot === i ? 'is-hot' : '');

  return (
    <div className="acs-shipped__demo" ref={root} data-mode={mode}>
      <div className="acs-shipped__switch" role="tablist" aria-label="Compare the reply with the code" onKeyDown={onKey}>
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => { tabRefs.current[t.id] = el; }}
            type="button"
            role="tab"
            id={`acs-shipped-tab-${t.id}`}
            aria-selected={mode === t.id}
            aria-controls="acs-shipped-panel"
            tabIndex={mode === t.id ? 0 : -1}
            className="acs-shipped__tab"
            onClick={() => choose(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="acs-shipped__grid">
        <div className="acs-shipped__guide" aria-hidden="true">
          <Auditor pose="think" facing="right" className="acs-shipped__auditor" />
        </div>

        <div className="acs-card acs-card--lg acs-shipped__chat">
          <div className="acs-shipped__chat-head">
            <span className="acs-shipped__orb" aria-hidden="true" />
            <span>AI assistant</span>
            <span className="acs-shipped__online">Example chat</span>
          </div>
          <div className="acs-shipped__msgs">
            <p className="acs-shipped__bubble acs-shipped__bubble--user">Add login, a dashboard and Stripe payments</p>
            <div className="acs-shipped__bubble acs-shipped__bubble--ai">
              <p>Done! Login, dashboard and checkout are all working ✨</p>
              <pre className="acs-shipped__code" aria-label="Generated code excerpt">
                <code>
                  <span className={line(0)}>{'if (user) showDashboard()'}</span>
                  {'\n'}
                  <span className={line(1)}>{'const STRIPE_SECRET = "sk_live_..."'}</span>
                  {'\n'}
                  <span className={line(2)}>{'// TODO: verify signature'}</span>
                  {'\n'}
                  <span className={line(3)}>{'GET /api/invoices/:id'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div id="acs-shipped-panel" role="tabpanel" tabIndex={0} aria-labelledby={`acs-shipped-tab-${mode}`} className="acs-shipped__cards">
          <span className="acs-eyebrow acs-eyebrow--plain acs-shipped__cards-label">
            {shipped ? 'Found in the code (example)' : 'Nothing flagged yet'}
          </span>
          <ul className="acs-shipped__list">
            {RISKS.map((r, i) => (
              <li
                key={r.title}
                className="acs-slot acs-shipped__slot"
                style={{ '--i': i } as CSSProperties}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot(null)}
              >
                <div className="acs-shipped__ghost" aria-hidden={mounted ? shipped : undefined}>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#3FA34D" />
                    <path d="m5.8 10.3 2.7 2.7 5.4-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Looks fine
                </div>
                <div className={`acs-shipped__risk acs-shipped__risk--${r.tone}`} inert={hideRisk} aria-hidden={hideRisk || undefined}>
                  <span className={`acs-eyebrow acs-eyebrow--plain acs-shipped__tone`}>{r.eyebrow}</span>
                  <strong>{r.title}</strong>
                  <code>{r.code}</code>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
