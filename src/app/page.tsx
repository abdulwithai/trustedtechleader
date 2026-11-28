import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import Button from '@/components/Button';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Hero from '@/components/home/Hero';
import { TIERS, STEPS, PILLARS, WHY, FAQS } from '@/components/home/data';
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
  areaServed: 'US',
  knowsAbout: ['Missed-call text-back', 'Estimate follow-up', 'Review requests', 'CRM setup', 'HVAC', 'Plumbing'],
};

export default function Home() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <Section tone="forest" id="problem" aria-labelledby="problem-title">
        <p className="eyebrow eyebrow--light">The problem</p>
        <h2 id="problem-title">Where jobs leak.</h2>
        <ul className="why">
          {WHY.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint" id="run" aria-labelledby="run-title">
        <p className="eyebrow">What I set up</p>
        <h2 id="run-title">Four pieces. One simple system.</h2>
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

      <Section id="process" aria-labelledby="process-title">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Three steps from first call to a working system.</h2>
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

      <Section id="pricing" aria-labelledby="pricing-title">
        <p className="eyebrow">Pricing</p>
        <h2 id="pricing-title">Fixed prices. Setup once, care monthly if you want it.</h2>
        <div className="tiers">
          {TIERS.map((t) => (
            <article key={t.id} className={`tier${t.flag ? ' tier--popular' : ''}`}>
              {t.flag ? <span className="tier__flag">{t.flag}</span> : null}
              <h3>{t.name}</h3>
              <p className="tier__price">{t.price}<span>{t.period === 'one-off' ? ' one-off' : t.period}</span></p>
              <p className="tier__timeline">Founding client price (first 2 clients). Regular price {t.regular}{t.period === 'one-off' ? ' one-off' : t.period}.</p>
              <ul>{t.includes.map((b) => <li key={b}>{b}</li>)}</ul>
              <Button href={t.href} variant={t.flag ? 'primary' : 'secondary'}>{t.cta}</Button>
            </article>
          ))}
        </div>
        <p className="note">Monthly plans run month to month, cancel with 30 days&rsquo; notice. Ad spend is paid by you to Google. <Link href="/services">Full details and what&rsquo;s not included &rarr;</Link></p>
      </Section>

      <Section tone="tint" id="honest" aria-labelledby="honest-title">
        <p className="eyebrow">Honest note</p>
        <h2 id="honest-title">New agency, real work.</h2>
        <p>
          TrustedTechLeader is new, so there are no client case studies here yet, and I won&rsquo;t invent any.
          Instead, you can inspect a sample build, and my first two clients get founding pricing in exchange for honest feedback and permission to share results.
        </p>
        <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button href="/work" variant="secondary">See the sample build</Button>
          <Button href={SITE.bookHref}>{SITE.bookLabel}</Button>
        </div>
      </Section>

      <Section id="about" aria-labelledby="about-title">
        <div className="about">
          <h2 id="about-title">Hi, I&rsquo;m Abdul.</h2>
          <div>
            <p>I started TrustedTechLeader to make sure no home-service lead goes unanswered. I build the automations myself, so when you have a question you talk to the person who made it.</p>
            <p><Link href="/about">Read more about me &rarr;</Link></p>
          </div>
        </div>
      </Section>

      <Section id="faq" aria-labelledby="faq-title">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title">Questions, answered.</h2>
        <FAQ items={FAQS} />
      </Section>

      <CTABand
        title="Ready to stop losing jobs to missed calls?"
        primaryHref={SITE.bookHref}
        primaryLabel={SITE.bookLabel}
        body={<>Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a></>}
      />
    </PageShell>
  );
}
