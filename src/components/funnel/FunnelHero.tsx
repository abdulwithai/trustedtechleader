import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import type { FunnelContent } from '@/lib/funnel-content/types';
import Hl from './Hl';

export default function FunnelHero({ content }: { content: FunnelContent }) {
  const { hero, demo } = content;
  const first = demo.records[0];
  return (
    <section className="acs-section fh" aria-labelledby="hero-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-wrap fh__grid">
        <div className="fh__copy">
          <span className="fh__kicker">{hero.kicker}</span>
          <h1 id="hero-title"><Hl text={hero.h1} hl={hero.highlight} /></h1>
          <p className="acs-lead">{hero.lead}</p>
          <div className="fh__ctas">
            <Cta size="lg">{hero.primaryCta}</Cta>
            <Cta variant="ghost" size="lg" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Cta>
          </div>
        </div>
        <div className="fh__stage">
          <Auditor pose="present" facing="right" className="fh__auditor" />
          <div className="demo acs-card acs-card--lg" id="demo">
            <div className="demo__bar">
              <span className="demo__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="demo__badge">{demo.badge}</span>
            </div>
            <div className="demo__tabs" role="tablist" aria-label={demo.tablistLabel}>
              {demo.records.map((r, i) => (
                <button
                  key={r.key}
                  className="demo__tab"
                  type="button"
                  role="tab"
                  id={`tab-${r.key}`}
                  data-practice={r.key}
                  aria-selected={i === 0 ? 'true' : 'false'}
                  aria-controls="demo-panel"
                  tabIndex={i === 0 ? undefined : -1}
                >{r.tabLabel}</button>
              ))}
            </div>
            <div id="demo-panel" role="tabpanel" aria-labelledby={`tab-${first.key}`} tabIndex={0}>
              <div className="demo__head">
                <div>
                  <div className="demo__name" data-f="name">{first.name}</div>
                  <div className="demo__matter" data-f="matter">{first.matter}</div>
                </div>
                <div className="demo__meta">{`${demo.viaLabel} `}<span data-f="source">{first.source}</span><br />{`${demo.routedLabel} `}<span data-f="team">{first.team}</span></div>
              </div>
              <ol className="demo__steps" data-f="steps">
                {first.steps.map(([time, label, detail], i) => (
                  <li key={i}><span className={i === first.steps.length - 1 ? 'dot dot--last' : 'dot'}></span><span className="t">{time}</span><div><div className="l">{label}</div><div className="d">{detail}</div></div></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
