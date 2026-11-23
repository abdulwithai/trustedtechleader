import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Hero from '@/components/home/Hero';
import { TIERS, CONCEPTS, STEPS, PILLARS, WHY, FAQS } from '@/components/home/data';
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
  knowsAbout: ['Lead generation', 'Content', 'CRM', 'AI automation'],
};

const FOR = ['Coffee shops', 'Studios & gyms', 'Salons', 'Restaurants', 'Home-service pros', 'Clinics'];

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
            <h2 id="problem-title">Leads slip through the cracks when you&rsquo;re busy.</h2>
            <p>Missed calls. Slow replies. A quiet feed. No follow-up after the first message. Between customers, staff and invoices, good leads go cold before anyone answers.</p>
          </div>
          <div className="split__col split__col--solve">
            <p className="eyebrow">What we do</p>
            <h2>One team runs the whole pipeline.</h2>
            <p>We bring in the leads, make the content, run your CRM and automate the follow-up. You see every lead in one place and approve what goes out.</p>
          </div>
        </div>
      </Section>

      <Section tone="tint" id="run" aria-labelledby="run-title">
        <p className="eyebrow">What we run for you</p>
        <h2 id="run-title">Four pillars. One pipeline.</h2>
        <ol className="run">
          {PILLARS.map((p) => (
            <li key={p.title}>
              <span className="run__n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="offer" aria-labelledby="offer-title">
        <p className="eyebrow">Pricing</p>
        <h2 id="offer-title">Pick a monthly plan. That&rsquo;s the whole decision.</h2>
        <div className="tiers">
          {TIERS.map((t) => (
            <article key={t.name} className={`tier${t.popular ? ' tier--popular' : ''}`}>
              {t.popular ? <span className="tier__flag">Most popular</span> : null}
              <h3>{t.name}</h3>
              <p className="tier__price">{t.price}<span>/month</span></p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <Link className={`btn ${t.popular ? 'btn--primary' : 'btn--secondary'}`} href={SITE.bookHref}>{SITE.bookLabel}</Link>
            </article>
          ))}
        </div>
        <p className="note">Month-to-month. Cancel anytime. Ad spend is paid to Meta and Google separately. CRM and lead capture live in 14 days, first post in 10. <Link href="/services">Full breakdown and add-ons &rarr;</Link></p>
      </Section>

      <Section id="process" aria-labelledby="process-title">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Three steps from first call to leads on autopilot.</h2>
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
          {WHY.map((p) => (
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
          <h2 id="about-title">A remote-first team. A camera crew in Charlotte.</h2>
          <div>
            <p>Our strategists, editors, designers and automation builders work remotely and run your full pipeline: leads, content, CRM and AI follow-up. Our Charlotte production partner shoots on location. One Slack channel per client. No handoffs between agencies.</p>
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
        title="Ready to stop losing leads?"
        primaryHref={SITE.bookHref}
        primaryLabel="Book a 20-min call"
        body={<>Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a></>}
      />
    </PageShell>
  );
}
