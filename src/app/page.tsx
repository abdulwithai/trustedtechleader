import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Hero from '@/components/home/Hero';
import { TIERS, CONCEPTS, STEPS, PILLARS, FAQS } from '@/components/home/data';
import { SITE } from '@/lib/site';
import '@/styles/home.css';

export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle },
  description: SITE.defaultDescription,
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  slogan: SITE.tagline,
  description: SITE.defaultDescription,
  areaServed: { '@type': 'City', name: 'Charlotte, NC' },
};

export default function Home() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <section id="trust" className="home-trust" aria-labelledby="trust-label">
        <div className="container">
          <p id="trust-label" className="home-trust__label">Local businesses we create for &darr;</p>
          <ul className="home-trust__list">
            {CONCEPTS.map((c) => (
              <li key={c.slug}>
                <span className="home-trust__name">{c.name}</span>
                <span className="home-trust__tag">concept piece</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="tint" id="offer" aria-labelledby="offer-title">
        <h2 id="offer-title">What we make, every month.</h2>
        <div className="cards-3 home-tiers">
          {TIERS.map((t) => (
            <article key={t.name} className={`card home-tier${t.popular ? ' home-tier--popular' : ''}`}>
              {t.popular ? <span className="pill home-tier__pill">&#11088; Most popular</span> : null}
              <h3>{t.name}</h3>
              <p className="home-tier__price">{t.price}<span>/month</span></p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <Link className="home-tier__link" href="/services">See full breakdown &rarr;</Link>
            </article>
          ))}
        </div>
        <p className="home-note">All tiers month-to-month. Cancel anytime. First post live within 10 days.</p>
      </Section>

      <Section id="work" aria-labelledby="work-title">
        <h2 id="work-title">Our work, across Charlotte.</h2>
        <div className="cards-3">
          {CONCEPTS.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="card card--lift home-work">
              <div className="home-work__thumb" role="img" aria-label={`Placeholder cover for ${c.name}, a concept ${c.kind.toLowerCase()} in ${c.hood}`}>
                <span className="badge">Concept piece</span>
              </div>
              <p className="home-work__hood">{c.hood} &middot; {c.kind}</p>
              <h3>{c.name}</h3>
              <p>{c.line}</p>
            </Link>
          ))}
        </div>
        <p className="home-note">Concept pieces: fictional Charlotte businesses, created as portfolio samples. Not real clients.</p>
        <p><Link href="/work">See all work &rarr;</Link></p>
      </Section>

      <Section tone="tint" id="process" aria-labelledby="process-title">
        <h2 id="process-title">The process.</h2>
        <ol className="cards-3 home-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card">
              <span className="home-steps__n" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="different" aria-labelledby="different-title">
        <h2 id="different-title">What makes us different.</h2>
        <div className="cards-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="home-pillar">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="tint" id="about" aria-labelledby="about-title">
        <div className="home-about">
          <div className="home-about__media" role="img" aria-label="Placeholder for a photo of our founder and Charlotte production partner">
            <span>Photo coming soon</span>
          </div>
          <div>
            <h2 id="about-title">Who makes this.</h2>
            <p>A tight team in Karachi &mdash; editors, strategists and designers who&rsquo;ve spent years on client work &mdash; and a trusted camera crew in Charlotte. One Slack channel per client. No handoffs between agencies.</p>
            <p>Boutique pricing. Agency craft. Zero AI filler. Content that sounds like your business because a human watched your footage, read your reviews, and wrote the caption.</p>
            <p><Link href="/about">Read our story &rarr;</Link></p>
          </div>
        </div>
      </Section>

      <Section id="services-link" aria-labelledby="services-title">
        <h2 id="services-title">Pricing, included deliverables, add-ons.</h2>
        <Button href="/services" variant="secondary">See the full breakdown &rarr;</Button>
      </Section>

      <Section tone="tint" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions, answered.</h2>
        <FAQ items={FAQS} />
      </Section>

      <CTABand
        title="Let’s see if we’re a fit."
        primaryHref={SITE.bookHref}
        primaryLabel="Book a 20-min call"
        body={<>Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a></>}
      />
    </PageShell>
  );
}
