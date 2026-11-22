import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms that apply when you use ${SITE.name} services, our website, and our content.`,
  alternates: { canonical: '/terms' },
};

const LAST_UPDATED = '2026-11-23';

type Block = { p: string } | { ul: string[] };
type LegalBlockGroup = { heading: string; blocks: Block[] };

const sections: LegalBlockGroup[] = [
  {
    heading: 'Agreement',
    blocks: [
      {
        p: `These Terms of Service ("Terms") are an agreement between you and ${SITE.name} LLC, a US company registered in Wyoming ("we", "us"). By using ${SITE.url}, booking a call, or signing up for any of our services, you agree to these Terms. If you do not agree, please do not use the site or our services.`,
      },
    ],
  },
  {
    heading: 'Our services',
    blocks: [
      {
        p: 'We provide social media management and content production for businesses, including short-form video (Reels), on-location photography, posting and reporting. The current plans and add-ons, with their published prices and what each includes, are listed on our Services page. Where this page and a signed order differ, the signed order controls.',
      },
      {
        p: 'We perform the services with reasonable care and skill. We do not guarantee specific business results, such as sales, follower counts, reach or engagement. Social platforms change their rules and algorithms without notice, and those changes are outside our control.',
      },
    ],
  },
  {
    heading: 'Fees and billing',
    blocks: [
      {
        p: 'Our plans are billed monthly on a month-to-month basis. There is no long-term contract. Fees for each month are charged in advance on the billing date you agree to, and are non-refundable except where required by law or where we have made an error.',
      },
      {
        p: 'You may cancel at any time by emailing us. Cancellation takes effect at the end of the billing month you have already paid for, and we will not charge you for later months. [TODO: confirm cancellation notice period and any refund policy with counsel]',
      },
      {
        p: 'If a payment fails, we may pause work until it is resolved. Prices may change, but any change will apply only to future billing months and we will give you advance notice.',
      },
    ],
  },
  {
    heading: 'Your responsibilities',
    blocks: [
      {
        ul: [
          'Give us accurate information about your business, brand and goals.',
          'Provide timely feedback and approvals. Delays in approval can delay publishing.',
          'Make sure you have the rights to any photos, logos, music, footage or other material you give us.',
          'Keep your login details for your social accounts secure, and tell us promptly if you think they have been compromised.',
        ],
      },
    ],
  },
  {
    heading: 'Content ownership',
    blocks: [
      {
        p: 'You own your brand assets, including your logo, business name and any materials you supply. Once you have paid for a piece of content, you own the finished content we create for your business, and you may use it for your own marketing. We keep ownership of our templates, tools, processes and general know-how.',
      },
      {
        p: 'Unless you tell us otherwise in writing, we may show published work for your business in our portfolio, case studies and social media, and may mention your business name. We will not share confidential business information without your permission.',
      },
    ],
  },
  {
    heading: 'Website and booking',
    blocks: [
      {
        p: 'The content on our website is for general information. You may view and share it for personal and business reference, but you may not copy, resell or modify it without our written permission. Booking a call through our calendar is subject to that provider’s own terms as well.',
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
        p: 'Either party may end an engagement by written notice, as described in the billing section above. We may suspend or end access to the site if you misuse it or violate these Terms. Sections on content ownership, fees already owed, disclaimers and liability survive termination.',
      },
    ],
  },
  {
    heading: 'Governing law',
    blocks: [
      {
        p: 'These Terms are governed by the laws of [TODO: state] (without regard to its conflict-of-law rules). Any dispute will be resolved in the state or federal courts located in [TODO: county, state].',
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
