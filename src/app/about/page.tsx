import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import { SITE } from '@/lib/site';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Abdul Rahman, founder of TrustedTechLeader. I set up missed-call text-back, estimate follow-up and review requests for US HVAC and plumbing companies.',
  alternates: { canonical: '/about' },
};

const values = [
  ['Honest', 'No invented results, no long contracts.'],
  ['Simple', 'A few messages that work beat a complicated system nobody uses.'],
  ['Yours', 'Your accounts, your data, and a written how-to so you are never stuck.'],
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
              I started TrustedTechLeader to do one thing well for home-service companies: make sure no lead goes unanswered.
            </p>
          </div>
        </div>
      </Section>

      <Section narrow aria-labelledby="how-i-work">
        <h2 id="how-i-work">How I work</h2>
        <p>
          I build the automations, CRM pipelines and ads myself, so when you have a question you talk to the person who made it.
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
        body="Pick a time that suits you. I will look at how leads reach you today and where they slip through. No pitch deck, no pressure."
        primaryHref={SITE.bookHref}
        primaryLabel="Book a 20-min call"
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel={`Prefer email? ${SITE.email}`}
      />
    </PageShell>
  );
}
