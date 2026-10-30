import type { CSSProperties } from 'react';
import type { FunnelContent } from '@/lib/funnel-content/types';
import Hl from './Hl';

export default function StageStrip({ stages }: { stages: FunnelContent['stages'] }) {
  return (
    <section className="acs-section fs" id="stages" aria-labelledby="stages-title">
      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">{stages.eyebrow ?? 'How it works'}</span>
          <h2 id="stages-title"><Hl text={stages.title} hl={stages.highlight} /></h2>
          <p className="acs-lead">{stages.sub}</p>
        </div>
        <div className="acs-card acs-card--lg fs__frame" data-reveal>
          <div className="fs__line" aria-hidden="true"><span className="fs__track" /><span className="fs__fill" /><span className="fs__dot" /></div>
          <ol className="fs__steps">
            {stages.items.map((s, i) => {
              const [num, tag] = s.n.split(' · ');
              return (
                <li key={s.n} className={s.next ? 'fs__step is-next' : 'fs__step'} style={{ '--d': i } as CSSProperties}>
                  <div className="fs__node">
                    <span className="fs__tile">{num}</span>
                  </div>
                  <div className="fs__copy">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    {tag ? <span className="acs-chip fs__tag">{tag}</span> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
