import type { FunnelContent } from '@/lib/funnel-content/types';

export default function Faq({ faq }: { faq: FunnelContent['faq'] }) {
  return (
    <section className="container faq-section" id="questions" aria-labelledby="faq-title">
      <div>
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2 id="faq-title">{faq.title}</h2>
      </div>
      <div className="faq">
        {faq.items.map((it, i) => {
          const n = i + 1;
          const open = i === 0;
          return (
            <div className={open ? 'faq__item is-open' : 'faq__item'} key={n}>
              <h3 className="faq__q"><button type="button" id={`faq-q${n}`} aria-expanded={open ? 'true' : 'false'} aria-controls={`faq-a${n}`}><span>{it.q}</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
              <div className="faq__a" id={`faq-a${n}`} role="region" aria-labelledby={`faq-q${n}`} hidden={open ? undefined : true}><p>{it.a}</p></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
