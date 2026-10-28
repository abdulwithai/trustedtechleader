import { BOOKING_URL } from '@/lib/booking';
import type { FunnelContent } from '@/lib/funnel-content/types';

export default function CtaBand({ cta }: { cta: FunnelContent['cta'] }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <h2 id="cta-title" className="h2-lg">{cta.title}</h2>
      <a className="btn btn-dark btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{cta.button}</a>
    </section>
  );
}
