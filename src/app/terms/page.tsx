import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms that apply when you use TrustedTechLeader services and our website.`,
  alternates: { canonical: '/terms' },
};

const LAST_UPDATED = 'November 28, 2026';

type Block = { p: string } | { ul: string[] };
type LegalBlockGroup = { heading: string; blocks: Block[] };

const sections: LegalBlockGroup[] = [
  {
    heading: 'Agreement',
    blocks: [
      {
        p: `These Terms of Service ("Terms") are an agreement between you and TrustedTechLeader ("we", "us"). By using ${SITE.url}, booking a call, or signing up for any of our services, you agree to these Terms. If you do not agree, please do not use the site or our services.`,
      },
    ],
  },
  {
    heading: 'Our services',
    blocks: [
      {
        p: 'We create social media posts and short videos, run Meta and Google Search ads, set up and manage CRM pipelines, and build lead follow-up automations for businesses. The current plans and what each includes are listed on our Services page. The scope, prices and payment terms for each engagement are set out in the written proposal or agreement for that engagement. Where this page and a signed proposal differ, the signed proposal controls.',
      },
      {
        p: 'We perform the services with reasonable care and skill. We do not guarantee specific business results, such as booked jobs, revenue, reviews or number of leads. Platforms such as Google, Meta and mobile carriers change their rules without notice, and those changes are outside our control.',
      },
    ],
  },
  {
    heading: 'Fees and billing',
    blocks: [
      {
        p: 'Payments. Starter projects: 50% to start, 50% on delivery. Monthly plans: billed monthly in advance, cancel with 30 days’ notice. Details in your proposal.',
      },
      {
        p: 'Software, texting and ad spend are paid by you directly to the providers. If a payment fails, we may pause work until it is resolved. Monthly prices may change for future months with at least 30 days’ written notice.',
      },
    ],
  },
  {
    heading: 'Your responsibilities',
    blocks: [
      {
        ul: [
          'Give us accurate information about your business, customers, brand and goals.',
          'Review and approve messages before they go live, and tell us promptly if something should change.',
          'Make sure the messages you send to customers follow the rules that apply to your business, including opt-out requests and carrier registration for business texting.',
          'Make sure you have the rights to any logos, photos or other material you give us.',
          'Keep the logins to your accounts secure, and tell us promptly if you think they have been compromised.',
        ],
      },
    ],
  },
  {
    heading: 'Your accounts and data',
    blocks: [
      {
        p: 'The accounts we set up for you, such as your CRM, texting, email and forms, are opened in your name and you own them, along with your customer data. We keep ownership of our templates, tools and processes. You receive a written how-to for the systems we set up.',
      },
    ],
  },
  {
    heading: 'Website and booking',
    blocks: [
      {
        p: 'The content on our website is for general information. You may view and share it for personal and business reference, but you may not copy, resell or modify it without our written permission. Booking a call through Calendly is also subject to Calendly’s own terms.',
      },
    ],
  },
  {
    heading: 'Disclaimers',
    blocks: [
      {
        p: 'Our website and services are provided “as is” and “as available.” To the fullest extent the law allows, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement.',
      },
    ],
  },
  {
    heading: 'Limitation of liability',
    blocks: [
      {
        p: 'To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data, arising from your use of the site or our services.',
      },
      {
        p: 'Our total liability for any claim relating to these Terms or our services will not exceed the fees you paid us for the services in the three months before the claim arose.',
      },
    ],
  },
  {
    heading: 'Indemnity',
    blocks: [
      {
        p: 'You agree to defend and reimburse us for claims that arise from material you supply to us, or from your breach of these Terms, to the extent those claims are not caused by our own negligence or misconduct.',
      },
    ],
  },
  {
    heading: 'Termination',
    blocks: [
      {
        p: 'Either party may end an engagement by written notice, as described under Fees and billing above. We may suspend or end access to the site if you misuse it or violate these Terms. Sections on account ownership, fees already owed, disclaimers and liability survive termination.',
      },
    ],
  },
  {
    heading: 'Governing law and refunds',
    blocks: [
      {
        p: 'Governing law, jurisdiction and refund terms are set out in the written proposal or agreement for each engagement.',
      },
    ],
  },
  {
    heading: 'Changes to these Terms',
    blocks: [
      {
        p: 'We may update these Terms from time to time. When we do, we will change the “last updated” date below. Continued use of the site or our services after a change means you accept the updated Terms.',
      },
    ],
  },
  {
    heading: 'Contact',
    blocks: [{ p: `Questions about these Terms? Email us at ${SITE.email}.` }],
  },
];

function slug(s: string) {
  return `legal-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

export default function TermsPage() {
  return (
    <PageShell>
      <Section narrow>
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
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
