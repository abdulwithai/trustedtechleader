import type { FunnelContent } from '@/lib/funnel-content/types';
import Hl from './Hl';

export default function Faq({ faq }: { faq: FunnelContent['faq'] }) {
  return (
    <section className="acs-section faq-section" id="questions" aria-labelledby="faq-title">
      <div className="acs-wrap faq-section__grid">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">{faq.eyebrow}</span>
          <h2 id="faq-title"><Hl text={faq.title} hl={faq.highlight} /></h2>
        </div>
        <div className="faq">
          {faq.items.map((it, i) => {
            const n = i + 1;
            const open = i === 0;
            return (
              <div className={open ? 'faq__item acs-card is-open' : 'faq__item acs-card'} key={n} data-reveal>
                <h3 className="faq__q"><button type="button" id={`faq-q${n}`} aria-expanded={open ? 'true' : 'false'} aria-controls={`faq-a${n}`}><span>{it.q}</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
                <div className="faq__a" id={`faq-a${n}`} role="region" aria-labelledby={`faq-q${n}`} hidden={open ? undefined : true}><p>{it.a}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
