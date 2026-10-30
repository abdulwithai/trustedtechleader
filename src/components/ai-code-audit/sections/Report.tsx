import type { CSSProperties } from 'react';
import Cta from '@/components/brand/Cta';
import ReportDemo from './ReportDemo';
import '@/styles/pages/ai-code-audit/report.css';

const INCLUDES = [
  'Plain-English executive summary',
  'Severity-ranked findings with proof',
  'Code-level fix for each finding',
  'A walkthrough call',
  'Retest after fixes',
  'Production launch checklist',
];

export default function Report() {
  return (
    <section className="acs-section acs-report" id="report" aria-labelledby="report-title">
      <div className="acs-glow" aria-hidden />
      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">Sample report</span>
          <h2 id="report-title">
            Not a scary PDF. <span className="acs-hl">A plan you can act on.</span>
          </h2>
          <p className="acs-lead">Click a finding to see the proof and the fix. Then apply them and watch launch readiness climb.</p>
        </div>

        <div className="acs-report__grid">
          <div data-reveal>
            <ReportDemo />
          </div>
          <aside className="acs-report__side">
            <h3 className="acs-report__side-h">Every audit includes</h3>
            <ul className="acs-report__list">
              {INCLUDES.map((t, i) => (
                <li key={t} className="acs-card acs-report__item" data-reveal="pop" style={{ '--d': i } as CSSProperties}>
                  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Cta>Book your audit call</Cta>
          </aside>
        </div>
      </div>
    </section>
  );
}
