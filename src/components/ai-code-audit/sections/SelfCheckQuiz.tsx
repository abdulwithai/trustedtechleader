'use client';

import { useEffect, useRef, useState } from 'react';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';

type Q = { q: string; hint: string; area: string; why: string };

const QUESTIONS: Q[] = [
  { q: 'Are all secret keys kept on the server only, with none in your frontend code?', hint: 'env vars / service keys', area: 'Exposed secrets', why: 'Keys in frontend code can be read by anyone, then used to run up bills or read your data.' },
  { q: "Does your database block users from reading or editing other users' data?", hint: 'RLS / access rules', area: 'Database access rules', why: 'Without row-level rules, one logged-in user can often read everyone else’s records.' },
  { q: "Does every API route check both who the user is and what they're allowed to touch?", hint: 'authn vs authz', area: 'Broken authorization', why: 'Logged in does not mean allowed. Missing checks let users open each other’s data by changing an ID.' },
  { q: 'Are payment and other webhooks verified before you trust them?', hint: 'signature verification', area: 'Unverified webhooks', why: 'Anyone can fake a webhook call and mark an order as paid.' },
  { q: 'Are login, signup and password reset rate-limited?', hint: 'brute force', area: 'No rate limiting', why: 'Without limits, attackers can guess passwords or flood your email sending.' },
  { q: 'Do you have backups, and have you actually tried restoring one?', hint: 'recovery', area: 'Backups and recovery', why: 'An untested backup is a hope, not a plan. One bad migration can end the product.' },
  { q: 'Would you find out if the app started throwing errors in production?', hint: 'monitoring / logging', area: 'Monitoring and logging', why: 'If you only hear about failures from users, you also hear about breaches late.' },
  { q: 'Has anyone other than the AI (and you) reviewed the code?', hint: 'independent review', area: 'No independent review', why: 'The model that wrote the code will rarely spot its own blind spots.' },
];

const OPTIONS = [
  { label: 'Yes', risk: 0 },
  { label: 'Not sure', risk: 1 },
  { label: 'No', risk: 2 },
] as const;

type Verdict = { tone: 'ok' | 'warn' | 'risk'; text: string; pose: 'thumbs' | 'present' | 'alert' };

function verdictFor(score: number): Verdict {
  if (score >= 85) return { tone: 'ok', text: 'Solid foundations. Get it verified before you scale.', pose: 'thumbs' };
  if (score >= 55) return { tone: 'warn', text: 'Real gaps to close before launch.', pose: 'present' };
  return { tone: 'risk', text: "Don't launch this yet. You're exposed.", pose: 'alert' };
}

const R = 54;
const CIRC = 2 * Math.PI * R;

export default function SelfCheckQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => QUESTIONS.map(() => null));
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacted = useRef(false);
  const pillsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const done = step >= QUESTIONS.length;
  const total = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const score = Math.round(100 - (total / (QUESTIONS.length * 2)) * 100);
  const verdict = verdictFor(score);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  useEffect(() => {
    if (!done) { setDrawn(false); return; }
    const t = setTimeout(() => setDrawn(true), 80);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    if (!interacted.current) return;
    if (done) headingRef.current?.focus();
    else pillsRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
  }, [step, done]);

  function pick(risk: number) {
    if (pending) return;
    interacted.current = true;
    setAnswers((prev) => prev.map((a, i) => (i === step ? risk : a)));
    setPending(true);
    timer.current = setTimeout(() => {
      setPending(false);
      setStep((s) => s + 1);
    }, 650);
  }

  function back() {
    interacted.current = true;
    if (timer.current) clearTimeout(timer.current);
    setPending(false);
    setStep((s) => Math.max(0, s - 1));
  }

  function retake() {
    interacted.current = true;
    if (timer.current) clearTimeout(timer.current);
    setPending(false);
    setAnswers(QUESTIONS.map(() => null));
    setStep(0);
  }

  const flagged = QUESTIONS.map((q, i) => ({ ...q, risk: answers[i] ?? 0 })).filter((f) => f.risk > 0);
  const current = QUESTIONS[Math.min(step, QUESTIONS.length - 1)];
  const picked = answers[step] ?? null;
  const pose = done ? verdict.pose : 'think';

  return (
    <div className="acs-selfcheck__grid">
      <div className="acs-selfcheck__card acs-card acs-card--lg">
        {!done ? (
          <>
            <div className="acs-selfcheck__top">
              <span className="acs-selfcheck__count" aria-hidden="true">{step + 1} / {QUESTIONS.length}</span>
              <div className="acs-selfcheck__bar" role="progressbar" aria-label="Progress" aria-valuemin={0} aria-valuemax={QUESTIONS.length} aria-valuenow={step}>
                {QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`acs-selfcheck__seg${i < step ? ' is-done' : ''}${i === step ? ' is-now' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="acs-selfcheck__chat" aria-live="polite" aria-atomic="true">
              <span className="acs-sr">Question {step + 1} of {QUESTIONS.length}</span>
              <div className="acs-selfcheck__row" key={`q${step}`}>
                <span className="acs-selfcheck__orb" aria-hidden="true" />
                <div className="acs-selfcheck__bubble">
                  <p className="acs-selfcheck__q">{current.q}</p>
                  <span className="acs-selfcheck__hint">{current.hint}</span>
                </div>
              </div>
              {pending && picked !== null && (
                <div className="acs-selfcheck__row acs-selfcheck__row--me" key={`a${step}`}>
                  <div className="acs-selfcheck__bubble acs-selfcheck__bubble--me">{OPTIONS[picked].label}</div>
                </div>
              )}
            </div>

            <div className="acs-selfcheck__pills" role="group" aria-label={current.q} ref={pillsRef}>
              {OPTIONS.map((o) => (
                <button
                  key={o.label}
                  type="button"
                  aria-pressed={picked === o.risk}
                  className={`acs-selfcheck__pill${picked === o.risk ? ' is-on' : ''}`}
                  onClick={() => pick(o.risk)}
                >
                  {o.label}
                </button>
              ))}
            </div>

            <button type="button" className="acs-selfcheck__back" onClick={back} disabled={step === 0}>
              &larr; Back
            </button>
          </>
        ) : (
          <div className="acs-selfcheck__result" aria-live="polite">
            <div className="acs-selfcheck__score">
              <div className={`acs-selfcheck__gauge acs-selfcheck__gauge--${verdict.tone}`}>
                <svg viewBox="0 0 128 128" aria-hidden="true">
                  <circle cx="64" cy="64" r={R} className="acs-selfcheck__track" />
                  <circle
                    cx="64"
                    cy="64"
                    r={R}
                    className="acs-selfcheck__arc"
                    strokeDasharray={CIRC}
                    strokeDashoffset={drawn ? CIRC * (1 - score / 100) : CIRC}
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="acs-selfcheck__num">
                  <strong>{score}</strong>
                  <span>/ 100 readiness</span>
                </div>
              </div>
              <div>
                <span className={`acs-chip acs-chip--${verdict.tone}`}>
                  {flagged.length === 0 ? 'No gaps flagged' : `${flagged.length} area${flagged.length === 1 ? '' : 's'} flagged`}
                </span>
                <h3 className="acs-selfcheck__verdict" tabIndex={-1} ref={headingRef}>{verdict.text}</h3>
              </div>
            </div>

            {flagged.length > 0 && (
              <ul className="acs-selfcheck__flags">
                {flagged.map((f) => (
                  <li key={f.area} className="acs-selfcheck__flag">
                    <span className={`acs-chip ${f.risk === 2 ? 'acs-chip--risk' : 'acs-chip--warn'}`}>
                      {f.area}{f.risk === 1 ? ' (unsure)' : ''}
                    </span>
                    <span>{f.why}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="acs-selfcheck__note">A quick self-assessment, not an audit. It shows where to look first.</p>
            <div className="acs-selfcheck__actions">
              <Cta size="lg">Talk through my results</Cta>
              <button type="button" className="acs-selfcheck__retake" onClick={retake}>Retake</button>
            </div>
          </div>
        )}
      </div>

      <div className="acs-selfcheck__char" aria-hidden="true">
        <Auditor pose={pose} facing="left" className="acs-selfcheck__auditor" />
      </div>
    </div>
  );
}
