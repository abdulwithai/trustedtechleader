import type { FAQItem } from '@/components/FAQ';

export const TIERS = [
  {
    name: 'Starter',
    price: '$1,497',
    popular: false,
    bullets: [
      'Google Business Profile optimization and weekly posts',
      '8 short videos and 12 posts a month, from your phone clips',
      'CRM setup with one lead pipeline, lead capture form and missed-call text-back',
    ],
  },
  {
    name: 'Growth',
    price: '$2,497',
    popular: true,
    bullets: [
      'Everything in Starter, plus 1 on-location shoot a month in Charlotte',
      'Meta or Google ads management and 1 landing page a month',
      'Follow-up sequences, review requests and an AI assistant that books calls 24/7',
    ],
  },
  {
    name: 'Signature',
    price: '$3,997',
    popular: false,
    bullets: [
      'Everything in Growth, plus 2 on-location shoots a month',
      'Ads on both Meta and Google, with a weekly reporting dashboard',
      'Full pipeline automation and 2 custom automations built per month',
    ],
  },
] as const;

export const PILLARS = [
  { n: '01', title: 'Lead generation', body: 'Google Business Profile, local SEO basics, Meta and Google ads, landing pages and review generation.' },
  { n: '02', title: 'Content', body: 'Reels, TikTok, Shorts, photos and posts. On-location shoots by our Charlotte production partner. Humans edit and write everything.' },
  { n: '03', title: 'CRM', body: 'One pipeline for every call, form, DM and ad lead. Missed-call text-back, follow-up sequences and online booking.' },
  { n: '04', title: 'AI automation', body: 'An assistant that replies to new leads 24/7, plus review requests, reminders, reactivation campaigns and monthly reports.' },
] as const;

export const CONCEPTS = [
  { slug: 'noda-coffee-roaster-queen-city-roasters', name: 'Queen City Roasters', hood: 'NoDa', kind: 'Coffee roaster', line: 'Reels, Google profile and a loyalty text list that brings regulars back.' },
  { slug: 'south-end-pilates-studio-southend-pilates', name: 'Southend Pilates', hood: 'South End', kind: 'Pilates studio', line: 'Intro-offer funnel: ads, landing page and AI booking for first classes.' },
  { slug: 'ballantyne-home-services-ballantyne-lawn-co', name: 'Ballantyne Lawn Co.', hood: 'Ballantyne', kind: 'Home services', line: 'Quote requests answered in minutes, reviews requested automatically.' },
] as const;

export const STEPS = [
  { title: 'Free audit call (15 min).', body: 'We map where your leads come from and where they leak.' },
  { title: 'Build (first 14 days).', body: 'We set up your CRM, lead capture and automations, and run the first shoot.' },
  { title: 'Run and report.', body: 'Weekly content, follow-up on autopilot and a monthly report on what worked.' },
] as const;

export const WHY = [
  { title: 'One team, not four vendors.', body: 'Leads, content, CRM and automation are planned together, so nothing falls between agencies.' },
  { title: 'AI for speed, humans for craft.', body: 'AI handles the busywork and the fast replies. People write, edit and make the strategy calls.' },
  { title: 'Charlotte, not everywhere.', body: 'We work with Charlotte businesses only. Our production partner knows the neighborhoods, the venues and the seasons.' },
  { title: 'Published prices, no games.', body: 'Three tiers. No “contact us” for pricing. You own your content and your CRM data, and you cancel anytime.' },
] as const;

export const FAQS: FAQItem[] = [
  {
    q: 'Is your team remote, and does that actually work?',
    a: 'Yes. Our strategy, editing, writing, design and automation team works remotely, and our production partner is in Charlotte. Everything runs through one Slack channel, and our Charlotte partner handles every on-location shoot.',
  },
  {
    q: 'Who shoots the content?',
    a: 'Our Charlotte production partner handles on-location shoots on Growth and Signature, and we art-direct remotely during the shoot. On Starter, you send a short weekly phone-clip drop and we edit it.',
  },
  {
    q: 'Do you work with businesses outside Charlotte?',
    a: 'No. We work with Charlotte businesses only, so we know the venues, the seasons and the neighborhoods your customers live in.',
  },
  {
    q: 'Month-to-month, really? What’s the catch?',
    a: 'No catch. Cancel anytime, and we refund the unused portion of your month if you cancel after day 15. You keep 100% of your content and your CRM data.',
  },
  {
    q: 'Do I need all four services?',
    a: 'No. The tiers bundle them, and Starter covers the basics: Google profile, content and a CRM with lead capture. Growth and Signature add ads, shoots and deeper automation as you need them.',
  },
  {
    q: 'Will AI replace my team or talk to my customers?',
    a: 'AI replies fast to new leads and DMs and books appointments, then hands off to you. It does not replace your team. People still write, edit and make the creative and strategy calls.',
  },
  {
    q: 'How fast can we start?',
    a: 'Your CRM and lead capture go live within 14 days, and your first post within 10 days of signing. Book a 20-minute call and we’ll work out the details.',
  },
];
