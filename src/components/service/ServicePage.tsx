import type { CSSProperties } from 'react';
import Link from 'next/link';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import type { ServiceContent } from '@/lib/service-content/types';
import HeroVisual from './HeroVisual';
import { CheckIcon, STEP_ICONS } from './icons';
import '@/styles/pages/service.css';

const STARS: [number, number, number][] = [
  [8, 18, 3], [22, 70, 2], [38, 12, 2], [55, 82, 3], [68, 20, 2], [78, 64, 2], [90, 30, 3], [94, 78, 2], [46, 46, 2], [14, 48, 2],
];

/** Shared service-page template (hero, what's included, pipeline, related case studies, closing CTA). */
export default function ServicePage({ c }: { c: ServiceContent }) {
  return (
    <main id="main" className="svc">
      <section className="acs-section svc-hero" aria-labelledby="hero-title">
        <div className="acs-glow" aria-hidden="true" />
        <div className="acs-wrap svc-hero__grid">
          <div className="svc-hero__copy">
            <span className="acs-eyebrow">{c.eyebrow}</span>
            <h1 id="hero-title">
              {c.title.before}<span className="acs-hl">{c.title.hl}</span>
            </h1>
            <p className="acs-lead">{c.lead}</p>
            <div className="svc-hero__ctas">
              <Cta size="lg">Book a call</Cta>
              <Cta variant="ghost" size="lg" href="#related">See related case studies</Cta>
            </div>
          </div>
          <HeroVisual kind={c.visual} label={c.heroLabel} />
        </div>
      </section>

      <section className="acs-section svc-included" aria-labelledby="included-title">
        <div className="acs-wrap">
          <div className="acs-head" data-reveal>
            <span className="acs-eyebrow">Scope</span>
            <h2 id="included-title">{c.included.title.before}<span className="acs-hl">{c.included.title.hl}</span></h2>
          </div>
          <ul className="svc-included__grid">
            {c.included.items.map((t, i) => (
              <li key={t} className="acs-card svc-included__item" data-reveal style={{ '--d': i % 3 } as CSSProperties}>
                <span className="svc-included__tick"><CheckIcon /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="acs-section svc-process" id="process" aria-labelledby="how-title">
        <div className="acs-wrap">
          <div className="acs-head" data-reveal>
            <span className="acs-eyebrow">How we work</span>
            <h2 id="how-title">{c.process.title.before}<span className="acs-hl">{c.process.title.hl}</span></h2>
            <p className="acs-lead">{c.process.lead}</p>
          </div>
          <div className="acs-card acs-card--lg svc-process__frame" data-reveal>
            <span className="svc-process__pill">{c.process.pill}</span>
            <div className="svc-process__line" aria-hidden="true">
              <span className="svc-process__track" />
              <span className="svc-process__fill" />
              <span className="svc-process__dot" />
            </div>
            <ol className="svc-process__steps">
              {c.process.steps.map((s, i) => (
                <li key={s.title} className="svc-process__step">
                  <div className="svc-process__node">
                    <span className="svc-process__num">{i + 1}</span>
                    <span className="svc-process__tile">{STEP_ICONS[s.icon]}</span>
                  </div>
                  <div className="svc-process__copy">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="acs-section svc-related" id="related" aria-labelledby="related-title">
        <div className="acs-glow" aria-hidden="true" />
        <div className="acs-wrap">
          <div className="acs-head" data-reveal>
            <span className="acs-eyebrow">Case studies</span>
            <h2 id="related-title">{c.related.title.before}<span className="acs-hl">{c.related.title.hl}</span></h2>
            <p className="acs-lead">{c.related.lead}</p>
          </div>
          <div className="svc-related__grid">
            {c.related.cases.map((r, i) => (
              <article key={r.href} className="acs-card svc-case" data-reveal style={{ '--d': i % 2 } as CSSProperties}>
                <h3><Link href={r.href}>{r.title}</Link></h3>
                <p>{r.text}</p>
                <svg className="svc-case__arrow" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="acs-section svc-cta" aria-labelledby="cta-title">
        <div className="acs-wrap">
          <div className="svc-cta__panel" data-reveal="pop">
            <div className="svc-cta__stars" aria-hidden="true">
              {STARS.map(([x, y, s], i) => (
                <span key={i} style={{ left: `${x}%`, top: `${y}%`, '--s': `${s}px`, '--i': i } as CSSProperties} />
              ))}
            </div>
            <div className="svc-cta__char">
              <Auditor pose="thumbs" facing="left" className="svc-cta__auditor" />
            </div>
            <div className="svc-cta__body">
              <h2 id="cta-title">{c.cta.title.before}<span className="svc-cta__hl">{c.cta.title.hl}</span></h2>
              <p className="svc-cta__lead">{c.cta.lead}</p>
              <div className="svc-cta__actions">
                <Cta variant="light" size="lg">Book a call</Cta>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
