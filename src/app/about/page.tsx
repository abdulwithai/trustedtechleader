import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import Button from '@/components/Button';
import CTABand from '@/components/CTABand';
import { SITE } from '@/lib/site';
import PhotoPlaceholder from '@/components/about/PhotoPlaceholder';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'A small team in Karachi and a camera crew in Charlotte. Here is why that works for Charlotte independent businesses.',
  alternates: { canonical: '/about' },
};

const steps = [
  ['Kickoff call (Day 0).', '45 min via Zoom. We learn your brand voice, your 3 content pillars, your approval preferences.'],
  ['Content calendar (Day 3).', 'You get a 4-week content plan in a shared Google Doc. You approve or redline.'],
  ['First shoot (Day 7).', 'Charlotte stringer comes on-location. We art-direct remotely via WhatsApp during the shoot.'],
  ['First post (Day 10).', 'First Reel goes live. From there, it’s weekly cadence.'],
  ['Monthly strategy call (recurring).', '45 min, same time each month. Review observed results. Adjust direction.'],
];

const beliefs = [
  ['Human-made beats algorithm-made.', 'Every Reel is edited by a person who watched your footage. No AI slop.'],
  ['One city. Deep roots.', 'We work with Charlotte businesses only. Our stringer knows the venues, the seasons, the owners’ networks.'],
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
            <h1>A small team in Karachi. A camera in Charlotte.</h1>
            <p className="lead">Here&rsquo;s why that works better than you&rsquo;d think.</p>
            <div className="about-hero__actions">
              <Button href={SITE.bookHref}>{SITE.bookLabel} &rarr;</Button>
            </div>
          </div>
          <PhotoPlaceholder label="Founder and Charlotte production partner" note="Replace with a real photo" ratio="4 / 3" />
        </div>
      </Section>

      <Section tone="tint" narrow aria-labelledby="why">
        <h2 id="why">Why we started this</h2>
        <p>We kept seeing Charlotte independent businesses with gorgeous products, under 2,000 Instagram followers, and prices from local agencies that felt out of reach. Meanwhile, the biggest brands in Charlotte were running content machines on $10K+ monthly budgets.</p>
        <p>So we built something smaller and sharper. A tight team in Karachi &mdash; editors, strategists, designers who&rsquo;d spent years on client work. A trusted camera crew in Charlotte. One Slack channel per client. No handoffs between agencies.</p>
        <p>Boutique pricing. Agency craft. Zero AI filler. Charlotte-native shoots. Content that sounds like your business because a human watched your footage, read your reviews, and wrote the caption.</p>
      </Section>

      <Section aria-labelledby="team">
        <h2 id="team">The team</h2>
        <p className="lead">Real people, real photos. Bios are being finalized and will appear here.</p>
        <div className="team-grid">
          <article className="team-card">
            <PhotoPlaceholder label="Founder photo" note="Smiling, natural light. Not a corporate headshot." />
            <h3>Founder</h3>
            <p className="muted">Name and bio coming soon.</p>
          </article>
          <article className="team-card">
            <PhotoPlaceholder label="Charlotte production partner photo" note="On location, camera visible." />
            <h3>Charlotte production partner</h3>
            <p className="muted">Name and bio coming soon.</p>
          </article>
          <article className="team-card">
            <PhotoPlaceholder label="Karachi editors and designers photo" note="At their desk or in a Karachi studio." />
            <h3>Editors and designers, Karachi</h3>
            <p className="muted">Team introductions coming soon.</p>
          </article>
        </div>
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

      <Section tone="forest" narrow aria-labelledby="karachi">
        <h2 id="karachi">The Karachi question</h2>
        <p>Our strategy, editing, writing, and design team is in Karachi, Pakistan. Our production partner is in Charlotte. Three reasons this works:</p>
        <ul className="karachi-list">
          <li><strong>Cost structure.</strong> We can charge Charlotte boutique prices (not Charlotte agency prices) while giving you agency-grade craft.</li>
          <li><strong>Timezone math.</strong> Our editors have 10 hours overnight to turn your approvals into posts. You wake up to content ready for your morning review.</li>
          <li><strong>Local eyes on location.</strong> Our Charlotte stringer handles every on-location shoot. We never pretend to be there &mdash; we are, through them.</li>
        </ul>
        <p>If you&rsquo;d rather work with an entirely local Charlotte agency, we&rsquo;ll happily refer you to one we trust. No hard sell.</p>
      </Section>

      <CTABand
        title="Ready to talk?"
        secondaryHref={`mailto:${SITE.email}`}
        secondaryLabel="Prefer email first?"
        body={<>Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Based in Charlotte via Karachi &middot; US LLC &middot; Wyoming registered.</>}
      />
    </PageShell>
  );
}
