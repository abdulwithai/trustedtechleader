import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import TierCard from '@/components/services/TierCard';
import { PILLARS, TIERS, ADDONS, GUARANTEES, FAQS } from '@/components/services/data';
import { SITE } from '@/lib/site';
import '@/styles/services.css';

const title = 'Services & Pricing: Lead Gen, Content, CRM & AI Automation in Charlotte';
const description =
  'Published prices for done-for-you lead generation, content, CRM and AI automation in Charlotte: Starter $1,497, Growth $2,497, Signature $3,997 per month. Ad spend separate. Month-to-month.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: { title: `${title} | Trusted Tech Leader`, description, url: '/services' },
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
        <h1>Lead gen, content, CRM and AI automation. One team, published prices.</h1>
        <p className="lead">We bring you leads, make the content, run your CRM and automate the follow-up. Pick one of three monthly tiers, no contracts. Ad spend is paid separately.</p>
        <nav aria-label="On this page">
          <ul className="services-nav">
            <li><a href="#pillars">What we run</a></li>
            <li><a href="#starter">Starter</a></li>
            <li><a href="#growth">Growth</a></li>
            <li><a href="#signature">Signature</a></li>
            <li><a href="#addons">Add-ons</a></li>
            <li><a href="#guarantees">Guarantees</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </Section>

      <Section id="pillars" aria-labelledby="pillars-heading">
        <div className="services-head">
          <h2 id="pillars-heading">What we run for you</h2>
          <p className="lead">Four pillars, one team. AI for speed, humans for craft.</p>
        </div>
        <ul className="pillars">
          {PILLARS.map((p) => (
            <li key={p.id}>
              <article className="card card--lift pillar">
                <h3 className="pillar__title">{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="tier__list tier__list--check">
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="tiers-heading" className="services-tiers">
        <h2 id="tiers-heading" className="visually-hidden">Monthly plans</h2>
        <div className="tiers">
          {TIERS.map((t) => <TierCard key={t.id} tier={t} />)}
        </div>
      </Section>

      <Section id="addons" tone="tint" aria-labelledby="addons-heading">
        <div className="services-head">
          <h2 id="addons-heading">À la carte add-ons</h2>
        </div>
        <table className="addons">
          <thead>
            <tr><th scope="col">Add-on</th><th scope="col">Price</th><th scope="col">Details</th></tr>
          </thead>
          <tbody>
            {ADDONS.map((a) => (
              <tr key={a.name}>
                <th scope="row">{a.name}</th>
                <td className="addons__price">{a.price}</td>
                <td>{a.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="guarantees" aria-labelledby="guarantees-heading">
        <div className="services-head">
          <h2 id="guarantees-heading">Guarantees</h2>
        </div>
        <ul className="guarantees">
          {GUARANTEES.map((g) => (
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
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel={`Or email ${SITE.email}`}
      />
    </PageShell>
  );
}
