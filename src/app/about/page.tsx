import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import Button from '@/components/Button';
import CTABand from '@/components/CTABand';
import { SITE } from '@/lib/site';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'A remote-first team running lead generation, content, CRM and AI automation for Charlotte local businesses.',
  alternates: { canonical: '/about' },
};

const steps = [
  ['Kickoff call (Day 0).', '45 min via Zoom. We learn your brand voice, your 3 content pillars, your approval preferences.'],
  ['Growth plan (Day 3).', 'You get a plan covering your lead sources, content calendar and follow-up flows in a shared Google Doc. You approve or redline.'],
  ['First shoot (Day 7).', 'Our Charlotte production partner shoots on location. We art-direct remotely via WhatsApp during the shoot.'],
  ['Systems live (Day 14).', 'Your CRM pipeline, lead capture and automations are running.'],
  ['Monthly strategy call (recurring).', '45 min, same time each month. Review observed results. Adjust direction.'],
];

const beliefs = [
  ['AI for speed, humans for craft.', 'AI answers leads and handles the busywork in seconds. A person still edits every Reel, writes every caption and sets the strategy.'],
  ['One city. Deep roots.', 'We work with Charlotte businesses only. Our production partner knows the venues, the seasons, the owners’ networks.'],
  ['Transparent prices.', 'Three published tiers. No “custom quotes” for standard work.'],
  ['Month-to-month trust.', 'You can fire us on the first of any month. We earn each month by what we delivered in the last one.'],
  ['Never promise what we can’t measure.', 'We promise cadence, craft, and process. You measure the business outcomes.'],
];

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="about-hero">
        <div className="about-hero__grid">
          <div>
            <p className="eyebrow">About</p>
            <h1>One team for your leads, content, CRM and automation.</h1>
            <p className="lead">Here&rsquo;s why that works better than you&rsquo;d think.</p>
            <div className="about-hero__actions">
              <Button href={SITE.bookHref}>{SITE.bookLabel} &rarr;</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint" narrow aria-labelledby="why">
        <h2 id="why">Why we started this</h2>
        <p>We kept seeing Charlotte independent businesses with gorgeous products, under 2,000 Instagram followers, and prices from local agencies that felt out of reach. Meanwhile, the biggest brands in Charlotte were running content machines on $10K+ monthly budgets.</p>
        <p>So we built something smaller and sharper. A tight remote team &mdash; editors, strategists, designers, marketers, CRM and automation specialists who&rsquo;d spent years on client work. A trusted camera crew in Charlotte. One Slack channel per client. No handoffs between agencies.</p>
        <p>Boutique pricing. Agency craft. AI for speed, humans for craft. Charlotte-native shoots. Content that sounds like your business because a human watched your footage, read your reviews, and wrote the caption.</p>
      </Section>

      <Section tone="tint" aria-labelledby="how">
        <h2 id="how">How we work with Charlotte clients</h2>
        <ol className="steps">
          {steps.map(([t, d]) => (
            <li key={t}><strong>{t}</strong> {d}</li>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="believe">
        <h2 id="believe">What we believe</h2>
        <ol className="beliefs">
          {beliefs.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </Section>

      <Section tone="forest" narrow aria-labelledby="remote">
        <h2 id="remote">How a remote-first team works</h2>
        <p>Our strategy, editing, writing, and design team works remotely. Our production partner is in Charlotte. Three reasons this works:</p>
        <ul className="remote-list">
          <li><strong>One team, whole pipeline.</strong> The same team runs your leads, content, CRM and automation. No handoffs between vendors.</li>
          <li><strong>Overnight turnaround.</strong> Our editors turn your approvals into posts overnight. You wake up to content ready for your morning review.</li>
          <li><strong>Local production partner.</strong> Our Charlotte production partner handles every on-location shoot, so someone who knows the venues is always there.</li>
        </ul>
        <p>If you&rsquo;d rather work with an entirely local Charlotte agency, we&rsquo;ll happily refer you to one we trust. No hard sell.</p>
      </Section>

      <CTABand
        title="Ready to talk?"
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel="Prefer email first?"
        body={<>Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Serving Charlotte &middot; US LLC &middot; Wyoming registered.</>}
      />
    </PageShell>
  );
}
