import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import TierCard from '@/components/services/TierCard';
import { PILLARS, TIERS, STARTERS, NOT_INCLUDED, TERMS, FAQS } from '@/components/services/data';
import { SITE } from '@/lib/site';
import '@/styles/services.css';

const title = 'Services and Pricing: Social Content, Ads, CRM and Automation';
const description =
  'Fixed monthly plans and one-off starter projects for social content, Meta and Google Search ads, CRM setup and automation. Founder-led. Month to month.';

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
        <h1>Content, ads, CRM and automation. Fixed prices.</h1>
        <p className="lead">Pick a monthly plan, or start with a one-off project to see how I work.</p>
        <nav aria-label="On this page">
          <ul className="services-nav">
            <li><a href="#pillars">What I do</a></li>
            <li><a href="#plans">Monthly plans</a></li>
            <li><a href="#starters">Starter projects</a></li>
            <li><a href="#not-included">Not included</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </Section>

      <Section id="pillars" aria-labelledby="pillars-heading">
        <div className="services-head">
          <h2 id="pillars-heading">What I do</h2>
          <p className="lead">Four pillars, one partner. You approve the content and every campaign before it goes live.</p>
        </div>
        <ul className="pillars">
          {PILLARS.map((p) => (
            <li key={p.id}>
              <article className="card card--lift pillar">
                <h3 className="pillar__title">{p.title}</h3>
                <ul className="tier__list tier__list--check">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="plans" aria-labelledby="plans-heading" className="services-tiers">
        <div className="services-head">
          <h2 id="plans-heading">Monthly plans</h2>
          <p className="lead">Month to month. Billed monthly in advance. Cancel with 30 days&rsquo; notice.</p>
        </div>
        <div className="tiers">
          {TIERS.map((t) => <TierCard key={t.id} tier={t} />)}
        </div>
      </Section>

      <Section id="starters" tone="tint" aria-labelledby="starters-heading" className="services-tiers">
        <div className="services-head">
          <h2 id="starters-heading">Starter projects</h2>
          <p className="lead">One-off projects. 50% to start, 50% on delivery.</p>
        </div>
        <div className="tiers">
          {STARTERS.map((t) => <TierCard key={t.id} tier={t} />)}
        </div>
      </Section>

      <Section id="not-included" aria-labelledby="not-included-heading">
        <div className="services-head">
          <h2 id="not-included-heading">Not included</h2>
        </div>
        <ul className="tier__list tier__list--check">
          {NOT_INCLUDED.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </Section>

      <Section id="terms" tone="tint" aria-labelledby="terms-heading">
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

      <Section id="faq" aria-labelledby="faq-heading">
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
