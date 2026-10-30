import Cta from '@/components/brand/Cta';
import type { FunnelContent } from '@/lib/funnel-content/types';
import Hl from './Hl';

export default function OfferParts({ parts, fee }: { parts: FunnelContent['parts']; fee: FunnelContent['fee'] }) {
  return (
    <section className="acs-section fp" id="what-you-get" aria-labelledby="parts-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">{parts.eyebrow ?? 'What you get'}</span>
          <h2 id="parts-title"><Hl text={parts.title ?? 'What you get'} hl={parts.highlight} /></h2>
        </div>
        <div className="fp__grid">
          {parts.items.map((p, i) => (
            <div className={i > 0 ? 'fp__col fp__col--b' : 'fp__col'} key={p.title}>
              {i > 0 ? (
                <div className="fp__join" aria-hidden="true">
                  <span className="fp__plus">+</span>
                </div>
              ) : null}
              <article className="acs-card acs-card--lg part" data-reveal={i === 0 ? 'left' : 'right'}>
                <span className="part__num" aria-hidden="true">{i + 1}</span>
                <p className="part__label"><span className="acs-chip">{p.label}</span></p>
                <h3>{p.title}</h3>
                <p className="part__lead">{p.lead}</p>
                <ul className="part__list">
                  {p.list.map((li) => (
                    <li key={li}>
                      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#3FA34D" /><path d="m5.8 10.3 2.7 2.7 5.4-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
        <div className="acs-slot fee-bar" data-reveal="pop">
          <div>
            <p className="fee-bar__title">{fee.title}</p>
            <p className="fee-bar__sub">{fee.sub}</p>
          </div>
          <Cta>{fee.cta}</Cta>
        </div>
      </div>
    </section>
  );
}
