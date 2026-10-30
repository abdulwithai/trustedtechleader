'use client';

import { useEffect, useRef, useState } from 'react';

type Finding = { sev: 'Critical' | 'High' | 'Medium' | 'Low'; tone: 'risk' | 'warn' | 'plain'; title: string; loc: string; proof: string; fix: string };

const FINDINGS: Finding[] = [
  { sev: 'Critical', tone: 'risk', title: 'Service-role key shipped to the browser', loc: 'lib/supabase.ts', proof: 'Key found in the public JS bundle; it bypasses every row-level rule.', fix: 'Move to a server-only env var; rotate the key; use the anon key client-side.' },
  { sev: 'High', tone: 'risk', title: 'Users can read other users’ invoices (IDOR)', loc: 'api/invoices/[id]', proof: 'Changing the id in the request returns another account’s invoice.', fix: 'Check invoice.userId === session.user.id before returning the row.' },
  { sev: 'High', tone: 'risk', title: 'Payment webhook signature not verified', loc: 'api/stripe/webhook', proof: 'A forged POST marks an order as paid without any payment.', fix: 'Verify the signature header against the raw body and reject on mismatch.' },
  { sev: 'Medium', tone: 'warn', title: 'No rate limiting on login & signup', loc: 'api/auth', proof: 'Hundreds of password guesses per minute were accepted.', fix: 'Add per-IP and per-account limits with backoff on repeated failures.' },
  { sev: 'Medium', tone: 'warn', title: 'Admin route protected only in the UI', loc: 'app/admin', proof: 'The admin API answers a normal user when called directly.', fix: 'Enforce the admin role on the server for every admin endpoint.' },
  { sev: 'Low', tone: 'plain', title: 'Dashboard runs 140 queries per page load', loc: 'dashboard/page.tsx', proof: 'N+1 pattern: one query per row inside a render loop.', fix: 'Fetch in one joined query and cache the result.' },
];

const START = 38;
const END = 96;
const N = FINDINGS.length;

function tier(score: number) {
  return score >= 80 ? 'ok' : score >= 55 ? 'warn' : 'risk';
}

export default function ReportDemo() {
  const [fixed, setFixed] = useState(0);
  const [running, setRunning] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const timers = useRef<number[]>([]);

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  useEffect(() => clear, []);

  const apply = () => {
    if (running || fixed === N) return;
    clear();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFixed(N);
      return;
    }
    setRunning(true);
    for (let i = 1; i <= N; i++) {
      timers.current.push(
        window.setTimeout(() => {
          setFixed(i);
          if (i === N) setRunning(false);
        }, i * 350),
      );
    }
  };
  const reset = () => {
    clear();
    setRunning(false);
    setFixed(0);
  };

  const score = Math.round(START + ((END - START) * fixed) / N);
  const done = fixed === N;
  const t = tier(score);

  return (
    <div className="acs-report__card acs-card acs-card--lg">
      <p className="acs-report__badge">Example report · illustrative findings</p>
      <div className="acs-report__head">
        <span className="acs-report__orb" aria-hidden />
        <div className="acs-report__title">
          <strong>Audit report · your-app</strong>
          <span>{N} findings, ranked by severity</span>
        </div>
        <div className={`acs-report__meter acs-report__meter--${t}`}>
          <div className="acs-report__meter-top">
            <span>Launch readiness</span>
            <b>{score}<small>/100</small></b>
          </div>
          <div className="acs-report__bar" role="progressbar" aria-label="Launch readiness" aria-valuemin={0} aria-valuemax={100} aria-valuenow={score}>
            <span style={{ width: `${score}%` }} />
          </div>
        </div>
      </div>

      <ul className="acs-report__rows">
        {FINDINGS.map((f, i) => {
          const isFixed = i < fixed;
          const isOpen = open === i;
          return (
            <li key={f.title} className={`acs-report__row${isFixed ? ' is-fixed' : ''}${isOpen ? ' is-open' : ''}`}>
              <button type="button" className="acs-report__rowbtn" aria-expanded={isOpen} aria-controls={`acs-report-p${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span className={`acs-chip ${f.tone === 'plain' ? '' : `acs-chip--${f.tone}`}`}>{f.sev}</span>
                <span className="acs-report__what">
                  <span className="acs-report__ttl">{f.title}</span>
                  <code>{f.loc}</code>
                </span>
                <span className="acs-report__status">
                  <span className={`acs-chip ${isFixed ? 'acs-chip--ok' : 'acs-chip--warn'}`}>{isFixed ? '✓ Fixed · retested' : 'Open'}</span>
                  <svg className="acs-report__chev" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </button>
              <div className="acs-report__panel" id={`acs-report-p${i}`} role="region" aria-label={`${f.title} details`} hidden={!isOpen}>
                <p><span>Proof</span>{f.proof}</p>
                <p><span>Fix</span><code>{f.fix}</code></p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="acs-report__foot">
        <button type="button" className={`acs-report__apply${done ? ' is-done' : ''}`} onClick={apply} disabled={running || done}>
          {done ? '✓ Launch-ready' : running ? 'Applying fixes…' : 'Apply fixes'}
        </button>
        {fixed > 0 && (
          <button type="button" className="acs-report__replay" onClick={reset}>Replay</button>
        )}
      </div>
      <p className="acs-sr" aria-live="polite">
        {done ? `All ${N} findings fixed and retested. Launch readiness ${score} out of 100.` : ''}
      </p>
    </div>
  );
}
