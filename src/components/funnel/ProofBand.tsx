import type { FunnelContent } from '@/lib/funnel-content/types';

export default function ProofBand({ proof }: { proof?: FunnelContent['proof'] }) {
  if (!proof) return null;
  return (
    <section className="container proof" id="proof" aria-labelledby="proof-title">
      <div className="card proof__card">
        <div className="proof__copy">
          <p className="eyebrow">{proof.eyebrow}</p>
          <h2 id="proof-title">{proof.title}</h2>
          {proof.body ? <p className="proof__body">{proof.body}</p> : null}
        </div>
        <a className="btn btn-primary" href={proof.href}>{proof.linkLabel}</a>
      </div>
    </section>
  );
}
