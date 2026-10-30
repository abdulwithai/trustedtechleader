import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import HeroStack from '@/components/home/HeroStack';
import ServiceSelector from '@/components/home/ServiceSelector';
import '@/styles/pages/home.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Trusted Tech Leader | AI consulting and automation"
  },
  "description": "AI consulting for businesses that want results. We plan, build and ship AI automation, custom business systems, and web and mobile apps.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Trusted Tech Leader | AI consulting and automation",
    "description": "AI consulting for businesses that want results. We plan, build and ship AI automation, custom business systems, and web and mobile apps.",
    "url": "https://trustedtechleader.com/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: AI consulting, automation and custom software"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Trusted Tech Leader | AI consulting and automation",
    "description": "AI consulting for businesses that want results. We plan, build and ship AI automation, custom business systems, and web and mobile apps.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: AI consulting, automation and custom software"
      }
    ]
  }
};

const CASES = [
  { href: '/case-studies/ai-textbook-study-reader/', tag: 'AI', t: 'AI textbook ingestion and study reader' },
  { href: '/case-studies/ai-social-carousel-content-pipeline/', tag: 'AI', t: 'AI social carousel pipeline with approval dashboard' },
  { href: '/case-studies/membership-sales-crm-and-billing/', tag: 'Business system', t: 'Membership sales CRM, contracts and billing platform' },
  { href: '/case-studies/multi-tenant-pharmacy-erp-pos/', tag: 'Business system', t: 'Multi-tenant pharmacy ERP and POS' },
  { href: '/case-studies/aghaz-halal-investing-mobile-app/', tag: 'Mobile app', t: 'Aghaz: halal goal-based investing mobile app for US investors' },
  { href: '/case-studies/supplier-catalog-sync-platform/', tag: 'AI', t: 'AI-assisted supplier catalog sync platform' },
];

const STEPS = [
  { t: 'Tell us', d: "Tell us what runs your business today, and what eats your team's time." },
  { t: 'Pick one step', d: 'We map the process and start with one step, not everything at once.' },
  { t: 'Build with review', d: 'We build in phases, and you review each one before we move on.' },
  { t: 'Hand over', d: 'We hand it over, and we can extend it from there.' },
];

const TRUST = ['AI automation', 'Business systems', 'Web & mobile apps'];

const STARS: [number, number, number][] = [
  [8, 18, 3], [22, 70, 2], [38, 12, 2], [55, 82, 3], [68, 20, 2], [78, 64, 2], [90, 30, 3], [94, 78, 2], [46, 46, 2], [14, 48, 2],
];

export default function Page() {
  return (
    <PageShell pageClass="page-home" home>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\",\"description\":\"AI consulting for businesses that want results. We plan, build and ship AI automation, custom business systems, and web and mobile apps.\"},{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"url\":\"https://trustedtechleader.com/\",\"name\":\"Trusted Tech Leader\",\"publisher\":{\"@id\":\"https://trustedtechleader.com/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/#webpage\",\"url\":\"https://trustedtechleader.com/\",\"name\":\"Trusted Tech Leader | AI consulting and automation\",\"description\":\"AI consulting for businesses that want results. We plan, build and ship AI automation, custom business systems, and web and mobile apps.\",\"isPartOf\":{\"@id\":\"https://trustedtechleader.com/#website\"},\"about\":{\"@id\":\"https://trustedtechleader.com/#organization\"}}]}" }} />
      <main id="main">
        <section className="acs-section hm-hero" aria-labelledby="hm-hero-title">
          <div className="hm-hero__dots" aria-hidden="true" />
          <div className="acs-glow" aria-hidden="true" />
          <div className="acs-wrap hm-hero__grid">
            <div className="hm-hero__copy">
              <span className="acs-eyebrow">AI consultant</span>
              <h1 id="hm-hero-title">
                AI that does real work <span className="acs-hl">inside your business.</span>
              </h1>
              <p className="acs-lead">
                We build AI strategy, automation and agents into the workflows you already have, plus the custom systems and apps they run on.
              </p>
              <div className="hm-hero__ctas">
                <Cta size="lg">Book a call</Cta>
                <Cta variant="ghost" size="lg" href="/case-studies/">See our work</Cta>
              </div>
              <ul className="hm-trust" aria-label="26 builds shipped across three areas">
                <li className="hm-trust__lead"><strong>26</strong><span>builds shipped</span></li>
                {TRUST.map((t) => (
                  <li key={t} className="hm-trust__item"><i aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="hm-hero__stage">
              <div className="hm-hero__platform" aria-hidden="true">
                <span className="hm-hero__ring hm-hero__ring--a" />
                <span className="hm-hero__ring hm-hero__ring--b" />
              </div>
              <Auditor pose="present" facing="right" className="hm-hero__auditor" />
              <svg className="hm-hero__connector" viewBox="0 0 120 70" preserveAspectRatio="none" aria-hidden="true">
                <circle cx="3" cy="62" r="3.5" fill="#6B3BEA" />
                <path d="M3 62 C 40 66, 60 10, 118 14" fill="none" stroke="#6B3BEA" strokeWidth="1.6" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
              </svg>
              <HeroStack />
            </div>
          </div>
        </section>

        <section className="acs-section hm-services" id="services" aria-labelledby="hm-services-title">
          <div className="acs-wrap">
            <div className="acs-head" data-reveal>
              <span className="acs-eyebrow">Services</span>
              <h2 id="hm-services-title">Five ways we can <span className="acs-hl">help.</span></h2>
              <p className="acs-lead">Pick the one closest to your problem. Each one leads to the full detail.</p>
            </div>
            <div data-reveal="pop">
              <ServiceSelector />
            </div>
          </div>
        </section>

        <section className="acs-section acs-night hm-proof" aria-labelledby="hm-proof-title" style={{ overflow: 'hidden' }}>
          <div className="acs-glow" aria-hidden="true" />
          <div className="acs-stars" aria-hidden="true" />
          <div className="acs-wrap">
            <div className="hm-proof__top">
              <div className="acs-head" data-reveal>
                <span className="acs-eyebrow">Our work</span>
                <h2 id="hm-proof-title"><span className="acs-hl">26 builds shipped.</span> See the work.</h2>
                <p className="acs-lead">AI automation, business systems and apps, each described from the evidence. No invented numbers.</p>
              </div>
              <Cta variant="light" href="/case-studies/">See case studies</Cta>
            </div>
            <ul className="hm-proof__grid">
              {CASES.map((c, i) => (
                <li key={c.href} data-reveal style={{ '--d': i } as CSSProperties}>
                  <Link className="acs-card hm-case" href={c.href}>
                    <span className="acs-chip">{c.tag}</span>
                    <span className="hm-case__t">{c.t}</span>
                    <span className="hm-case__go" aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="acs-section hm-process" aria-labelledby="hm-process-title">
          <div className="acs-glow" aria-hidden="true" />
          <div className="acs-wrap">
            <div className="acs-head acs-head--center" data-reveal>
              <span className="acs-eyebrow">How we work</span>
              <h2 id="hm-process-title">One step at a time, <span className="acs-hl">reviewed as we go.</span></h2>
            </div>
            <ol className="hm-steps" data-reveal>
              {STEPS.map((s, i) => (
                <li key={s.t} className="hm-step" data-reveal style={{ '--d': i } as CSSProperties}>
                  <span className="hm-step__n">{String(i + 1).padStart(2, '0')}</span>
                  <div className="hm-step__card">
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="acs-section hm-cta" aria-labelledby="hm-cta-title">
          <div className="acs-wrap">
            <div className="hm-cta__panel" data-reveal="pop">
              <div className="hm-cta__dots" aria-hidden="true" />
              <div className="hm-cta__stars" aria-hidden="true">
                {STARS.map(([x, y, s], i) => (
                  <span key={i} style={{ left: `${x}%`, top: `${y}%`, '--s': `${s}px`, '--i': i } as CSSProperties} />
                ))}
              </div>
              <div className="hm-cta__char">
                <Auditor pose="thumbs" facing="left" className="hm-cta__auditor" />
              </div>
              <div className="hm-cta__body">
                <h2 id="hm-cta-title">Have a process <span className="hm-cta__hl">AI could take off your plate?</span></h2>
                <p>Book a call and tell us about it.</p>
                <Cta variant="light" size="lg">Book a call</Cta>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
