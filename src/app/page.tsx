import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
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

const FOR = ['Coffee shops', 'Studios & gyms', 'Salons', 'Restaurants', 'Home-service pros'];

export default function Home() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <section className="for" aria-label="Who we work with">
        <div className="container for__inner">
          <p className="for__label">Built for Charlotte independents</p>
          <ul className="for__list">{FOR.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </section>

      <Section id="problem" aria-labelledby="problem-title" className="split">
        <div className="split__grid">
          <div className="split__col">
            <p className="eyebrow">The problem</p>
            <h2 id="problem-title">Posting is the first thing to slip when you&rsquo;re busy.</h2>
            <p>You know your business needs fresh content. But between customers, staff and invoices, the Reels never get made, and the feed goes quiet.</p>
          </div>
          <div className="split__col split__col--solve">
            <p className="eyebrow">What we do</p>
            <h2>We plan, shoot, edit, write and post it for you.</h2>
            <p>A Charlotte camera operator comes to your location. Our editors and writers turn it into a month of content. You approve everything in one portal.</p>
          </div>
        </div>
      </Section>

      <Section tone="tint" id="offer" aria-labelledby="offer-title">
        <p className="eyebrow">Pricing</p>
        <h2 id="offer-title">Pick a monthly plan. That&rsquo;s the whole decision.</h2>
        <div className="tiers">
          {TIERS.map((t) => (
            <article key={t.name} className={`tier${t.popular ? ' tier--popular' : ''}`}>
              {t.popular ? <span className="tier__flag">Most popular</span> : null}
              <h3>{t.name}</h3>
              <p className="tier__price">{t.price}<span>/month</span></p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <Link className={`btn ${t.popular ? 'btn--primary' : 'btn--secondary'}`} href="/contact#book">Book a call</Link>
            </article>
          ))}
        </div>
        <p className="note">Month-to-month. Cancel anytime. First post live within 10 days. <Link href="/services">Full breakdown and add-ons &rarr;</Link></p>
      </Section>

      <Section id="process" aria-labelledby="process-title">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Three steps to a feed that stays active.</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="steps__n" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="forest" id="different" aria-labelledby="different-title">
        <p className="eyebrow eyebrow--light">Why us</p>
        <h2 id="different-title">Why Charlotte businesses pick us.</h2>
        <ul className="why">
          {PILLARS.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="work" aria-labelledby="work-title">
        <p className="eyebrow">Work</p>
        <h2 id="work-title">What it looks like for a Charlotte business.</h2>
        <div className="cards-3">
          {CONCEPTS.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="card card--lift work">
              <div className="work__thumb" role="img" aria-label={`Placeholder cover for ${c.name}, a concept ${c.kind.toLowerCase()} in ${c.hood}`}>
                <span className="badge">Concept piece</span>
              </div>
              <p className="work__hood">{c.hood} &middot; {c.kind}</p>
              <h3>{c.name}</h3>
              <p>{c.line}</p>
            </Link>
          ))}
        </div>
        <p className="note">Concept pieces: fictional Charlotte businesses, created as portfolio samples. Not real clients. <Link href="/work">See all work &rarr;</Link></p>
      </Section>

      <Section tone="tint" id="about" aria-labelledby="about-title">
        <div className="about">
          <h2 id="about-title">A small team in Karachi. A camera in Charlotte.</h2>
          <div>
            <p>Our editors, strategists and designers have spent years on client work, and our trusted camera crew shoots on location in Charlotte. One Slack channel per client. No handoffs between agencies.</p>
            <p><Link href="/about">Read our story &rarr;</Link></p>
          </div>
        </div>
      </Section>

      <Section id="faq" aria-labelledby="faq-title">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title">Questions, answered.</h2>
        <FAQ items={FAQS} />
      </Section>

      <CTABand
        title="Ready to stop worrying about what to post?"
        primaryHref={SITE.bookHref}
        primaryLabel="Book a 20-min call"
        body={<>Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a></>}
      />
    </PageShell>
  );
}
