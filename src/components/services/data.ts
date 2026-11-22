import { SITE } from '@/lib/site';

export type Tier = {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  who: string[];
  getHeading: string;
  gets: string[];
  giveHeading: string;
  gives: string[];
  timeline?: string;
  cta: string;
  href: string;
};

export const TIERS: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$1,497',
    who: [
      '2–10 person businesses with content ideas but no time or skill to produce',
      'Owners who film on their phone but can’t edit or schedule',
      'Businesses posting under 2 times/week today',
    ],
    getHeading: 'What you get every month',
    gets: [
      '8 Reels (hooks, captions, trending-compliant audio, scheduling)',
      '12 feed posts (image + copy, grid-aware design)',
      '4 story series (multi-part, interactive stickers, polls)',
      'Monthly 45-min content-strategy call',
      'Shared approval portal — no password sharing',
    ],
    giveHeading: 'What you give us',
    gives: [
      'Weekly 15-min clip drop via WhatsApp or Dropbox (phone video is fine)',
      '2 brand details (voice, 3 content pillars) via a 30-min kickoff call',
    ],
    timeline: 'First post live within 10 days of signing.',
    cta: 'Start with a 2-week paid pilot at $748 →',
    href: SITE.bookHref,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2,497',
    popular: true,
    who: [
      'Businesses that want a done-for-you content engine',
      'Owners who don’t want to film anymore',
      'Brands ready to be consistent, not just present',
    ],
    getHeading: 'Everything in Starter, plus',
    gets: [
      '1 on-location shoot/month in Charlotte (4-hour half-day with our stringer + director)',
      'Google Business Profile weekly posts (SEO signal + local discovery)',
      'Monthly performance report (saves, shares, DMs, inquiries)',
      'Priority reply on approval portal (same-business-day response)',
    ],
    giveHeading: 'What you give us',
    gives: ['Nothing extra. We bring the camera.'],
    timeline: 'First shoot scheduled within 7 days. First post live within 10.',
    cta: 'Book a 20-min call →',
    href: SITE.bookHref,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '$3,997',
    who: [
      'Ambitious local brands ready to own their category in Charlotte',
      'Multi-location businesses or those with 2+ brand pillars',
      'Owners who want press, newsletter, and web working together',
    ],
    getHeading: 'Everything in Growth, plus',
    gets: [
      '2 on-location shoots/month (8 hours total)',
      'Monthly email newsletter (copy, design, send via your tool)',
      'Review generation system (post-service SMS, email, GBP link routing)',
      'Landing page updates (2/month for promotions, new services, events)',
      '24-hour turnaround on all approvals',
    ],
    giveHeading: '',
    gives: [],
    cta: 'Book a 20-min call →',
    href: SITE.bookHref,
  },
];

export const ADDONS = [
  { name: 'Extra on-location shoot', price: '$400', details: '3-hour half-day' },
  { name: 'Full-day shoot', price: '$850', details: '8 hours, 2 crew' },
  { name: 'Meta/Google ads management', price: '$599/mo', details: 'Requires existing ad account' },
  { name: 'Landing page', price: '$599', details: 'Single page, 7-day turnaround' },
  { name: 'Website refresh', price: 'from $1,497', details: 'Full discovery → design → build' },
  { name: 'Email newsletter design', price: '$199/issue', details: 'Copy + design, you send' },
  { name: 'Press pitch (per publication)', price: '$149', details: 'Pitch + 1 revision' },
  { name: 'Brand voice playbook', price: '$499', details: 'One-time deliverable' },
];

export const GUARANTEES = [
  { t: 'Month-to-month.', d: 'Cancel anytime. We refund the unused portion of your month if you cancel after day 15.' },
  { t: '10-day first-post guarantee.', d: 'First piece of content live within 10 days of signing or we refund the first month.' },
  { t: '100% content ownership.', d: 'You own all photos, Reels, and files forever. Delivered monthly to a shared Google Drive you control.' },
  { t: 'No password sharing.', d: 'You approve content in our portal; we never touch your accounts outside scheduled posting.' },
];

export const FAQS = [
  { q: 'Can I switch tiers month to month?', a: 'Yes. Upgrade mid-month takes effect on the 1st. Downgrade effective next billing cycle.' },
  { q: 'What if I need more Reels than Starter includes?', a: 'À la carte at $125/Reel for Starter clients. Growth and Signature include flex.' },
  { q: 'Do you take clients outside Charlotte?', a: 'No. The entire operation is built around Charlotte-native content. We refer out-of-market businesses to agencies we trust.' },
  { q: 'How do shoots work if you’re in Pakistan?', a: 'Our Charlotte stringer handles on-location. We art-direct remotely via a shot list and WhatsApp group during the shoot.' },
];
