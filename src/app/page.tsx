import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import Button from '@/components/Button';
import { Section } from '@/components/Container';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Hero from '@/components/home/Hero';
import { StarterCompact } from '@/components/services/TierCard';
import { TIERS, STARTERS, STEPS, PILLARS, WHY, FAQS } from '@/components/home/data';
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
  knowsAbout: ['Social media content', 'Meta and Google Search ads', 'CRM setup', 'Marketing automation'],
};

export default function Home() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <Section tone="tint" id="run" aria-labelledby="run-title">
        <p className="eyebrow">What I do</p>
        <h2 id="run-title">Four pillars. One partner.</h2>
        <ol className="run">
          {PILLARS.map((p) => (
            <li key={p.title}>
              <span className="run__n">{p.n}</span>
              <h3>{p.title}</h3>
              <ul className="run__list">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="forest" id="why" aria-labelledby="why-title">
        <p className="eyebrow eyebrow--light">Why one partner</p>
        <h2 id="why-title">Your marketing, handled in one place.</h2>
        <ul className="why">
          {WHY.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="process" aria-labelledby="process-title">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Three steps from first call to live.</h2>
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

      <Section id="pricing" tone="tint" aria-labelledby="pricing-title">
        <p className="eyebrow">Pricing</p>
        <h2 id="pricing-title">Fixed monthly prices.</h2>
        <div className="tiers">
          {TIERS.map((t) => (
            <article key={t.id} className={`tier${t.flag ? ' tier--popular' : ''}`}>
              {t.flag ? <span className="tier__flag">{t.flag}</span> : null}
              <h3>{t.name}</h3>
              <p className="tier__price">{t.price}<span>{t.period}</span></p>
              <p className="tier__note">Founding client price (first 2 clients). Regular price {t.regular}{t.period}.</p>
              {t.bestFor ? <p className="tier__best">{t.bestFor}</p> : null}
              {t.includesHeading !== 'Includes' ? <p className="tier__best"><strong>{t.includesHeading}</strong></p> : null}
              <ul>{t.includes.map((b) => <li key={b}>{b}</li>)}</ul>
              {t.note ? <p className="tier__note">{t.note}</p> : null}
              <Button href={t.href} variant={t.flag ? 'primary' : 'secondary'}>{t.cta}</Button>
            </article>
          ))}
        </div>

        <h3 className="starters__title">Starter projects (one-off)</h3>
        <div className="starters">
          {STARTERS.map((s) => <StarterCompact key={s.id} tier={s} />)}
        </div>

        <p className="note">Monthly plans are month to month with 30 days&rsquo; notice. Ad spend is paid by you directly to the platform. Starter projects: 50% to start, 50% on delivery. <Link href="/services">Full details and what&rsquo;s not included &rarr;</Link></p>
      </Section>

      <Section id="honest" aria-labelledby="honest-title">
        <p className="eyebrow">Honest note</p>
        <h2 id="honest-title">New agency, real work.</h2>
        <p>
          TrustedTechLeader is new, so there are no client case studies here yet, and I won&rsquo;t invent any.
          Instead, you can look at two sample projects, and my first two clients get founding pricing in exchange for honest feedback and permission to share results.
        </p>
        <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button href="/work" variant="secondary">See the samples</Button>
          <Button href={SITE.bookHref}>{SITE.bookLabel}</Button>
        </div>
      </Section>

      <Section tone="tint" id="about" aria-labelledby="about-title">
        <div className="about">
          <h2 id="about-title">Hi, I&rsquo;m Abdul.</h2>
          <div>
            <p>I started TrustedTechLeader to be the marketing partner small businesses actually need: someone who creates the content, runs the ads, and builds the CRM and automations that turn attention into customers. I do the work myself, so when you have a question you talk to the person who made it.</p>
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
        primaryHref={SITE.bookHref}
        primaryLabel={SITE.bookLabel}
        body={<>Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a></>}
      />
    </PageShell>
  );
}
