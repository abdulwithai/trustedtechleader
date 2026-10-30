import Cta from '@/components/brand/Cta';
import type { FunnelContent } from '@/lib/funnel-content/types';

export default function ProofBand({ proof }: { proof?: FunnelContent['proof'] }) {
  if (!proof) return null;
  return (
    <section className="acs-section proof" id="proof" aria-labelledby="proof-title">
      <div className="acs-wrap">
        <div className="acs-card acs-card--lg proof__card" data-reveal>
          <div className="proof__copy">
            <span className="acs-eyebrow">{proof.eyebrow}</span>
            <h2 id="proof-title" className="h3">{proof.title}</h2>
            {proof.body ? <p className="proof__body">{proof.body}</p> : null}
          </div>
          <Cta variant="ghost" href={proof.href}>{proof.linkLabel}</Cta>
        </div>
      </div>
    </section>
  );
}
