import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How TrustedTechLeader collects, uses and protects information when you visit our site, email us, or book a call.`,
  alternates: { canonical: '/privacy' },
};

const LAST_UPDATED = 'November 28, 2026';

type Block = { p: string } | { ul: string[] };
type LegalBlockGroup = { heading: string; blocks: Block[] };

const sections: LegalBlockGroup[] = [
  {
    heading: 'Who we are',
    blocks: [
      {
        p: `TrustedTechLeader is a founder-led business run by Abdul Rahman. We create social media content, run paid ads and set up CRM and automations for US small businesses. This policy explains what information we collect through ${SITE.url} and how we use it.`,
      },
      { p: `Questions about this policy? Email us at ${SITE.email}.` },
    ],
  },
  {
    heading: 'Information you give us',
    blocks: [
      { p: 'We collect only what we need to reply to you and to run our services.' },
      {
        ul: [
          'Email. If you email us, we receive your email address, your name if you include it, and whatever you write. We use it to reply and to talk about your business.',
          'Booking a call. When you book a 20-minute call through Calendly, Calendly collects your name, email address, the time you choose and any notes you add. We see those details so we can prepare for the call. Calendly’s privacy policy applies to how it handles that data.',
        ],
      },
    ],
  },
  {
    heading: 'Information collected automatically',
    blocks: [
      {
        p: 'This website does not currently use analytics tools. Our web server may keep basic access logs, such as the IP address, pages requested and browser type, which help us keep the site secure and working.',
      },
    ],
  },
  {
    heading: 'How we use information',
    blocks: [
      {
        p: 'We use the information you give us to reply to your messages, schedule and prepare calls, begin and run the services you agree to, and keep this website working. We do not sell your personal information.',
      },
    ],
  },
  {
    heading: 'Cookies',
    blocks: [
      {
        p: 'This website does not set cookies of its own. If you open the Calendly booking page, Calendly may set cookies under its own cookie policy. You can block or delete cookies in your browser settings.',
      },
    ],
  },
  {
    heading: 'Third parties we work with',
    blocks: [
      {
        p: 'We share information only with the service providers needed to run this website and our services. Each one handles data under its own terms:',
      },
      {
        ul: [
          'Contabo: hosts this website on a server we run, in an EU data center.',
          'Calendly: call booking and calendar scheduling.',
          'Email: messages sent to us are handled by our own mail server.',
        ],
      },
      { p: 'We do not control these providers. Please read their policies for details on how they handle data.' },
    ],
  },
  {
    heading: 'How long we keep information',
    blocks: [
      {
        p: 'We keep emails and call notes only as long as needed to reply to you, prepare for calls and run any services you agree to, unless the law requires us to keep them longer.',
      },
    ],
  },
  {
    heading: 'Your choices',
    blocks: [
      {
        p: `You can ask us to see, correct or delete the personal information we hold about you by emailing ${SITE.email}. We will respond within a reasonable time.`,
      },
    ],
  },
  {
    heading: 'Children',
    blocks: [
      {
        p: 'Our services are for businesses and adults. We do not knowingly collect personal information from children under 13. If you believe a child has sent us information, email us and we will delete it.',
      },
    ],
  },
  {
    heading: 'Security',
    blocks: [
      {
        p: 'We use reasonable safeguards, including HTTPS and limited access to our inboxes and tools. No internet transmission or storage is completely secure, so we cannot guarantee absolute security.',
      },
    ],
  },
  {
    heading: 'Changes to this policy',
    blocks: [
      {
        p: 'We may update this policy from time to time. When we do, we will change the “last updated” date below.',
      },
    ],
  },
];

function slug(s: string) {
  return `legal-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <Section narrow>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="muted small">Last updated: {LAST_UPDATED}</p>

        {sections.map((s) => (
          <section key={s.heading} aria-labelledby={slug(s.heading)} style={{ marginTop: 32 }}>
            <h2 id={slug(s.heading)}>{s.heading}</h2>
            {s.blocks.map((b, i) =>
              'p' in b ? (
                <p key={i}>{b.p}</p>
              ) : (
                <ul key={i}>
                  {b.ul.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </Section>
    </PageShell>
  );
}
