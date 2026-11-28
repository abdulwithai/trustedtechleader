import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import { SITE } from '@/lib/site';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Abdul Rahman, founder of TrustedTechLeader. I create social posts and short videos, run Meta and Google ads, and set up CRM and automations for US small businesses.',
  alternates: { canonical: '/about' },
};

const values = [
  ['Honest', 'No invented results, no long contracts.'],
  ['Simple', 'A few things done consistently beat a complicated plan nobody follows.'],
  ['Yours', 'Your accounts, your content, your data.'],
];

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="about-hero">
        <div className="about-hero__grid">
          <div>
            <p className="eyebrow">About</p>
            <h1>Hi, I&rsquo;m Abdul.</h1>
            <p className="lead">
              I started TrustedTechLeader to be the marketing partner small businesses actually need: someone who creates the content, runs
              the ads, and builds the CRM and automations that turn attention into customers.
            </p>
          </div>
        </div>
      </Section>

      <Section narrow aria-labelledby="how-i-work">
        <h2 id="how-i-work">How I work</h2>
        <p>
          I do the work myself, so when you have a question you talk to the person who made it. That is true for the posts, the videos, the
          ad campaigns and the automations that follow up with your leads.
        </p>
        <p>
          I work remotely and keep US Eastern mornings and early afternoons open for calls. Everything I build runs in accounts you own.
        </p>
      </Section>

      <Section tone="tint" aria-labelledby="values">
        <h2 id="values">What I stand for</h2>
        <ol className="beliefs">
          {values.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </Section>

      <CTABand
        title="Book a 20-minute call"
        body="Pick a time that suits you. I will look at your current marketing and what to fix first. No pitch deck, no pressure."
        primaryHref={SITE.bookHref}
        primaryLabel="Book a 20-min call"
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel={`Prefer email? ${SITE.email}`}
      />
    </PageShell>
  );
}
