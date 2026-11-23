import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name} collects, uses and protects information when you visit our site, book a call, or sign up for our newsletter.`,
  alternates: { canonical: '/privacy' },
};

const LAST_UPDATED = '2026-11-23';

type Block = { p: string } | { ul: string[] };
type LegalBlockGroup = { heading: string; blocks: Block[] };

const sections: LegalBlockGroup[] = [
  {
    heading: 'Who we are',
    blocks: [
      {
        p: `${SITE.name} is a growth agency providing lead generation, content, CRM and AI automation services to businesses in Charlotte, North Carolina. We are a US company registered in Wyoming. This policy explains what information we collect through ${SITE.url} and how we use it.`,
      },
      { p: `Questions about this policy? Email us at ${SITE.email}.` },
    ],
  },
  {
    heading: 'Information you give us',
    blocks: [
      { p: 'We collect only what we need to respond to you and to run our services.' },
      {
        ul: [
          'Contact form. If you send us a message, we collect your name, email address, business name (if you give it), and the message itself. We use this to reply to you.',
          'Booking a call. When you book a 20-minute call through our Cal.com calendar, Cal.com collects your name, email address, the time you choose, and any notes you add. We see those details so we can prepare for the call.',
          'Newsletter. If you subscribe, we collect your email address and any name you enter. We send subscriber details to ConvertKit, our email service provider, which delivers our newsletter and welcome emails.',
        ],
      },
    ],
  },
  {
    heading: 'Information collected automatically',
    blocks: [
      {
        p: 'When you visit our site, our analytics tools collect information about your visit. This includes the pages you view, how long you stay, the device, browser and screen size you use, the site that referred you, and an approximate location based on your IP address.',
      },
      {
        ul: [
          'Google Analytics 4 (GA4) measures traffic and events, such as clicks on booking, newsletter and contact buttons.',
          'Microsoft Clarity records how visitors use pages, such as clicks, scrolling and session recordings, so we can improve the site. Please do not enter sensitive information into forms on this site.',
        ],
      },
    ],
  },
  {
    heading: 'How we use information',
    blocks: [
      {
        p: 'We use this information to reply to your messages, schedule and run calls, send the newsletter you asked for, understand which pages help visitors most, and fix problems on the site. We do not sell your personal information.',
      },
    ],
  },
  {
    heading: 'Cookies',
    blocks: [
      {
        p: 'Cookies are small files a website stores in your browser. GA4 and Microsoft Clarity set cookies to recognize repeat visits and measure sessions. Cal.com and ConvertKit may set cookies when you use their embedded tools. You can block or delete cookies in your browser settings. The site still works if you do, but analytics and booking features may be less accurate.',
      },
    ],
  },
  {
    heading: 'Third parties we work with',
    blocks: [
      {
        p: 'We share information only with the service providers needed to run the site and our services. Each one handles data under its own privacy policy:',
      },
      {
        ul: [
          'Google (Google Analytics 4): website analytics.',
          'Microsoft (Microsoft Clarity): session recordings and heatmaps.',
          'ConvertKit: newsletter delivery and subscriber management.',
          'Cal.com: booking and calendar scheduling.',
          'Formspree: delivery of contact form messages to our inbox.',
          'Vercel: website hosting.',
        ],
      },
      { p: 'We do not control these providers. Please read their policies for details on how they handle data.' },
    ],
  },
  {
    heading: 'How long we keep information',
    blocks: [
      {
        p: 'We keep contact messages and booking details for as long as needed to serve you and meet our record-keeping obligations. Newsletter subscribers stay on our list until they unsubscribe. Analytics data is kept according to each provider’s retention settings.',
      },
    ],
  },
  {
    heading: 'Your choices',
    blocks: [
      {
        p: 'You can unsubscribe from our newsletter at any time using the link in any email we send. You can ask us to see, correct or delete the personal information we hold about you by emailing us, and we will respond within a reasonable time. You can also opt out of Google Analytics with Google’s browser opt-out add-on.',
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
        p: 'We may update this policy from time to time. When we do, we will change the “last updated” date below. Material changes will be announced on this page or by email to newsletter subscribers.',
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
        <p
          className="small"
          role="note"
          style={{
            background: 'var(--ttl-tint)',
            border: '1px solid var(--ttl-border)',
            borderRadius: 'var(--radius)',
            padding: '12px 16px',
            maxWidth: '60ch',
          }}
        >
          <strong>Draft — to be reviewed by counsel before launch.</strong>
        </p>
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
