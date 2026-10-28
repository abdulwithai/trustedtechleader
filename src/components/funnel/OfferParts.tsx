import { BOOKING_URL } from '@/lib/booking';
import type { FunnelContent } from '@/lib/funnel-content/types';

export default function OfferParts({ parts, fee }: { parts: FunnelContent['parts']; fee: FunnelContent['fee'] }) {
  return (
    <section className="container parts" id="what-you-get" aria-label="What you get">
      {parts.items.map((p) => (
        <article className="card part" key={p.title}>
          <p className="part__label">{p.label}</p>
          <h3>{p.title}</h3>
          <p className="part__lead">{p.lead}</p>
          <ul className="part__list">
            {p.list.map((li) => <li key={li}>{li}</li>)}
          </ul>
        </article>
      ))}
      <div className="fee-bar">
        <div>
          <p className="fee-bar__title">{fee.title}</p>
          <p className="fee-bar__sub">{fee.sub}</p>
        </div>
        <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{fee.cta}</a>
      </div>
    </section>
  );
}
