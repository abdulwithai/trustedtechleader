import { BOOKING_URL } from '@/lib/booking';
import type { FunnelContent } from '@/lib/funnel-content/types';

export default function FunnelHero({ content }: { content: FunnelContent }) {
  const { hero, demo } = content;
  const first = demo.records[0];
  return (
    <div className="dark-top">
      <section className="law-hero container" aria-labelledby="hero-title">
        <div className="law-hero__copy">
          <p className="law-hero__practices">{hero.kicker}</p>
          <h1 id="hero-title" className="h1-md">{hero.h1}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{hero.primaryCta}</a>
            <a className="btn btn-outline-dark" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>
        <div className="demo" id="demo">
          <div className="demo__bar">
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
            <span className="demo__badge">{demo.badge}</span>
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
      </section>
    </div>
  );
}
