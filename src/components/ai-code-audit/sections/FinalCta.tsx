import type { CSSProperties } from 'react';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import '@/styles/pages/ai-code-audit/finalcta.css';

const STARS: [number, number, number][] = [
  [8, 18, 3], [22, 70, 2], [38, 12, 2], [55, 82, 3], [68, 20, 2], [78, 64, 2], [90, 30, 3], [94, 78, 2], [46, 46, 2], [14, 48, 2],
];

export default function FinalCta() {
  return (
    <section className="acs-section acs-finalcta" aria-labelledby="finalcta-title">
      <div className="acs-wrap">
        <div className="acs-finalcta__panel" data-reveal="pop">
          <div className="acs-finalcta__stars" aria-hidden="true">
            {STARS.map(([x, y, s], i) => (
              <span key={i} style={{ left: `${x}%`, top: `${y}%`, '--s': `${s}px`, '--i': i } as CSSProperties} />
            ))}
          </div>
          <div className="acs-finalcta__char">
            <Auditor pose="thumbs" facing="left" className="acs-finalcta__auditor" />
          </div>
          <div className="acs-finalcta__body">
            <h2 id="finalcta-title">
              Launch with confidence, <span className="acs-finalcta__hl">not crossed fingers.</span>
            </h2>
            <p className="acs-finalcta__lead">
              One call to find out what your app needs before your users find out the hard way.
            </p>
            <div className="acs-finalcta__actions">
              <Cta variant="light" size="lg">Book a free discovery call</Cta>
              <span className="acs-finalcta__note">Free call &middot; No obligation &middot; NDA on request</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
