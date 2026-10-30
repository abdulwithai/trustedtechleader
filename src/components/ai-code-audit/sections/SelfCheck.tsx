import type { CSSProperties } from 'react';
import '@/styles/pages/ai-code-audit/selfcheck.css';
import SelfCheckQuiz from './SelfCheckQuiz';

export default function SelfCheck() {
  return (
    <section className="acs-section acs-selfcheck" id="self-check" aria-labelledby="selfcheck-title">
      <div className="acs-glow" aria-hidden />
      <div className="acs-wrap">
        <div className="acs-head acs-head--center" data-reveal>
          <span className="acs-eyebrow">Quick self-check</span>
          <h2 id="selfcheck-title">
            Is your app <span className="acs-hl">ready for real users?</span>
          </h2>
          <p className="acs-lead">
            Eight quick questions. Nothing is sent anywhere: it all runs in your browser.
          </p>
        </div>
        <div data-reveal style={{ '--d': 1 } as CSSProperties}>
          <SelfCheckQuiz />
        </div>
      </div>
    </section>
  );
}
