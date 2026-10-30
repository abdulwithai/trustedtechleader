import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import type { FunnelContent } from '@/lib/funnel-content/types';
import Hl from './Hl';

export default function CtaBand({ cta }: { cta: FunnelContent['cta'] }) {
  return (
    <section className="acs-section acs-night cta-band" aria-labelledby="cta-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-stars" aria-hidden="true" />
      <div className="acs-wrap cta-band__inner">
        <Auditor pose="thumbs" facing="right" className="cta-band__auditor" />
        <div className="cta-band__body" data-reveal>
          <h2 id="cta-title" className="h2-lg"><Hl text={cta.title} hl={cta.highlight} /></h2>
          {cta.lead ? <p className="acs-lead">{cta.lead}</p> : null}
          <div><Cta variant="light" size="lg">{cta.button}</Cta></div>
        </div>
      </div>
    </section>
  );
}
