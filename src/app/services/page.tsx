import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import TierCard from '@/components/services/TierCard';
import { PILLARS, TIERS, NOT_INCLUDED, TERMS, FAQS } from '@/components/services/data';
import { SITE } from '@/lib/site';
import '@/styles/services.css';

const title = 'Services and Pricing: Missed-Call and Estimate Follow-Up for HVAC and Plumbing';
const description =
  'Fixed-price missed-call text-back, estimate follow-up and review requests for US HVAC and plumbing companies. Founder-led. Month to month.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: { title: `${title} | TrustedTechLeader`, description, url: '/services' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Section className="services-hero">
        <p className="eyebrow">Services</p>
        <h1>Fixed prices. One person accountable.</h1>
        <p className="lead">Three ways to work together. Start with the setup, add monthly care if you want it kept sharp.</p>
        <nav aria-label="On this page">
          <ul className="services-nav">
            <li><a href="#pillars">What&rsquo;s included</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#not-included">Not included</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </Section>

      <Section id="pillars" aria-labelledby="pillars-heading">
        <div className="services-head">
          <h2 id="pillars-heading">What&rsquo;s included</h2>
          <p className="lead">Four pieces, one simple system. You approve every message before it goes live.</p>
        </div>
        <ul className="pillars">
          {PILLARS.map((p) => (
            <li key={p.id}>
              <article className="card card--lift pillar">
                <h3 className="pillar__title">{p.title}</h3>
                <p>{p.summary}</p>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="plans" aria-labelledby="tiers-heading" className="services-tiers">
        <h2 id="tiers-heading" className="visually-hidden">Plans</h2>
        <div className="tiers">
          {TIERS.map((t) => <TierCard key={t.id} tier={t} />)}
        </div>
      </Section>

      <Section id="not-included" tone="tint" aria-labelledby="not-included-heading">
        <div className="services-head">
          <h2 id="not-included-heading">Not included</h2>
        </div>
        <ul className="tier__list tier__list--check">
          {NOT_INCLUDED.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </Section>

      <Section id="terms" aria-labelledby="terms-heading">
        <div className="services-head">
          <h2 id="terms-heading">Terms</h2>
        </div>
        <ul className="guarantees">
          {TERMS.map((g) => (
            <li key={g.t}>
              <div className="card guarantee">
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" tone="tint" aria-labelledby="faq-heading">
        <div className="services-head">
          <h2 id="faq-heading">Questions about services</h2>
        </div>
        <FAQ items={FAQS} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
        />
      </Section>

      <CTABand
        title="Ready when you are."
        primaryHref={SITE.bookHref}
        primaryLabel={SITE.bookLabel}
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel={`Or email ${SITE.email}`}
      />
    </PageShell>
  );
}
