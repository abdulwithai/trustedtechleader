'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

type Seg = { key: string; label: string; w: number; finding?: string };

const SEGS: Seg[] = [
  { key: 'auth', label: 'AUTH', w: 11, finding: 'Role check missing' },
  { key: 'api', label: 'API', w: 12 },
  { key: 'db', label: 'DATABASE', w: 15, finding: 'Open read access' },
  { key: 'storage', label: 'STORAGE', w: 11 },
  { key: 'pay', label: 'PAYMENTS', w: 14, finding: 'Unsigned webhook' },
  { key: 'secrets', label: 'SECRETS', w: 13, finding: 'Key in client code' },
  { key: 'infra', label: 'INFRA', w: 12 },
  { key: 'deploy', label: 'DEPLOY', w: 12 },
];
const SWEEP = 5; // seconds, must match the playhead animation in deepscan.css
const START = 0.5;

/** Deterministic pseudo-random bar heights (integers, so server and client always match). */
function bars(seed: number, count: number): number[] {
  const out: number[] = [];
  let s = seed * 9301 + 49297;
  for (let i = 0; i < count; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    const env = 0.55 + 0.45 * Math.sin(((i + 1) / (count + 1)) * Math.PI);
    out.push(Math.round(18 + r * 70 * env));
  }
  return out;
}

const total = SEGS.reduce((a, s) => a + s.w, 0);
let acc = 0;
const LAID = SEGS.map((s, i) => {
  const center = (acc + s.w / 2) / total;
  acc += s.w;
  return { ...s, delay: Math.round((START + center * SWEEP) * 100) / 100, bars: bars(i + 3, Math.max(8, Math.round(s.w * 1.6))) };
});
const FINDINGS = LAID.filter((s) => s.finding);

function Check({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 12 12" width={size} height={size}>
      <path d="m2.5 6.2 2.4 2.4 4.6-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DeepScanTimeline() {
  const [after, setAfter] = useState(false);
  const mode = after ? 'after' : 'before';

  return (
    <div className="acs-deepscan__scan" data-mode={mode}>
      <div className="acs-deepscan__bar">
        <span className="acs-deepscan__file">your-app · full-stack scan</span>
        <button type="button" className="acs-deepscan__toggle" aria-pressed={after} onClick={() => setAfter((v) => !v)}>
          <span className="acs-deepscan__toggle-dot" aria-hidden="true" />
          After audit
        </button>
      </div>

      <div className="acs-deepscan__scroller" tabIndex={0} role="region" aria-label="Codebase scan timeline">
        <div className="acs-deepscan__inner">
          <div className="acs-deepscan__track" data-reveal>
            <div className="acs-deepscan__segs">
              {LAID.map((s) => (
                <div
                  key={s.key}
                  className={`acs-deepscan__seg${s.finding ? ' is-risk' : ''}`}
                  style={{ flexGrow: s.w, '--at': `${s.delay}s` } as CSSProperties}
                >
                  <span className="acs-deepscan__seglabel">{s.label}</span>
                  <div className="acs-deepscan__box">
                    <div className="acs-deepscan__wave" aria-hidden="true">
                      {s.bars.map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    {s.finding && (
                      <span className="acs-deepscan__pin" aria-hidden="true">
                        {after ? <Check size={11} /> : '!'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="acs-deepscan__playhead" aria-hidden="true" />
          </div>
          <div className="acs-deepscan__ticks" aria-hidden="true">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100% scanned</span>
          </div>
        </div>
      </div>

      <ul className="acs-deepscan__findings" aria-live="polite">
        {FINDINGS.map((s) => (
          <li key={s.key} className="acs-deepscan__finding" style={{ '--at': `${s.delay + 0.3}s` } as CSSProperties}>
            <span className="acs-deepscan__fstate" aria-hidden="true">
              {after ? <Check size={12} /> : '!'}
            </span>
            <span className="acs-deepscan__fbody">
              <span className="acs-deepscan__fkey">{s.label}</span>
              <span className="acs-deepscan__ftext">{after ? 'Fixed + retested' : s.finding}</span>
              {after && <span className="acs-deepscan__fwas">Was: {s.finding}</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className="acs-deepscan__note">Illustrative scan of an example app. Four of eight areas flagged, to show how a review reads.</p>
    </div>
  );
}
