import type { CSSProperties } from 'react';
import Link from 'next/link';
import '@/styles/pages/ai-code-audit/trust.css';

const TERMS = [
  { t: 'A person reads your code line by line.', d: 'Tools are the backup, not the other way round.' },
  { t: 'NDA on request. Read-only access.', d: 'Access is removed when we are done.' },
  { t: 'Every finding comes with proof and a concrete fix.', d: 'Ranked by real-world risk, not by scanner score.' },
  { t: 'Plain English for founders.', d: 'Code-level detail for your developers.' },
  { t: 'Checked against recognised standards.', d: 'OWASP Top 10, OWASP ASVS and CWE.' },
  { t: 'The engineer who finds the issues can fix them.', d: 'No hand-off, no lost context.' },
];

export default function Trust() {
  return (
    <section className="acs-section acs-trust" aria-labelledby="trust-title">
      <div className="acs-glow" aria-hidden />
      <div className="acs-wrap acs-trust__layout">
        <div className="acs-trust__intro" data-reveal>
          <span className="acs-eyebrow">How we work</span>
          <h2 id="trust-title">
            A senior engineer, <span className="acs-hl">not just a scanner</span>.
          </h2>
          <p className="acs-lead">
            Automated scanners are fast and noisy. Real risk hides in how your app fits together, and that takes someone who reads it.
          </p>
          <Link href="/case-studies/" className="acs-trust__link">
            See real projects we&apos;ve built <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="acs-trust__sheet-wrap" data-reveal="pop" style={{ '--d': 1 } as CSSProperties}>
          <div className="acs-trust__sheet-back" aria-hidden="true" />
          <article className="acs-trust__sheet acs-card acs-card--lg" aria-label="Terms of engagement">
            <header className="acs-trust__sheet-head">
              <span className="acs-eyebrow acs-eyebrow--plain">Terms of engagement</span>
              
            </header>
            <ol className="acs-trust__list">
              {TERMS.map((x, i) => (
                <li key={x.t} className="acs-trust__item" style={{ '--i': i } as CSSProperties}>
                  <span className="acs-trust__tick" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <strong>{x.t}</strong>
                    <span>{x.d}</span>
                  </div>
                </li>
              ))}
            </ol>
            <footer className="acs-trust__sign">
              <span className="acs-trust__sig">Trusted Tech Leader</span>
              <span className="acs-trust__sig-label">How every audit runs</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
