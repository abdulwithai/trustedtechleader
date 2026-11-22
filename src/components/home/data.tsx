import type { FAQItem } from '@/components/FAQ';

export const TIERS = [
  {
    name: 'Starter',
    price: '$1,497',
    popular: false,
    bullets: ['8 Reels, 12 feed posts and 4 story series', 'Monthly 45-min content-strategy call', 'Shared approval portal, no password sharing'],
  },
  {
    name: 'Growth',
    price: '$2,497',
    popular: true,
    bullets: ['Everything in Starter', '1 on-location shoot a month in Charlotte', 'Weekly Google Business Profile posts and a monthly report'],
  },
  {
    name: 'Signature',
    price: '$3,997',
    popular: false,
    bullets: ['Everything in Growth', '2 on-location shoots a month (8 hours total)', 'Monthly newsletter, review system, 24-hour approvals'],
  },
] as const;

export const CONCEPTS = [
  { slug: 'noda-coffee-roaster-queen-city-roasters', name: 'Queen City Roasters', hood: 'NoDa', kind: 'Coffee roaster', line: 'Six Reels, 10 feed posts, warm indie-roaster voice.' },
  { slug: 'south-end-pilates-studio-southend-pilates', name: 'Southend Pilates', hood: 'South End', kind: 'Pilates studio', line: 'Six Reels on instructor personality and class flow.' },
  { slug: 'ballantyne-home-services-ballantyne-lawn-co', name: 'Ballantyne Lawn Co.', hood: 'Ballantyne', kind: 'Home services', line: 'Six Reels of before/after and the craft of the work.' },
] as const;

export const STEPS = [
  { title: 'Discovery call (15 min).', body: 'You tell us what’s working and what isn’t.' },
  { title: 'Strategy + first shoot.', body: 'We lay out 4 weeks of content; the Charlotte stringer goes on-location.' },
  { title: 'Weekly delivery.', body: 'Reels, posts, and story series land in your approval portal.' },
] as const;

export const PILLARS = [
  { title: 'Humans, not algorithms.', body: 'No AI slop. Every Reel edited by a person who watched your footage.' },
  { title: 'Charlotte, not everywhere.', body: 'We work with Charlotte businesses only. Our stringer knows the neighborhoods, the venues, the seasons.' },
  { title: 'Published prices, no games.', body: 'Three tiers. No “contact us” for pricing. You know what you’re buying before the call.' },
] as const;

export const FAQS: FAQItem[] = [
  {
    q: 'You’re based in Pakistan — does that actually work?',
    a: 'Yes. Our strategy, editing, writing and design team is in Karachi. Our production partner is in Charlotte. Our editors have about 10 hours overnight to turn your approvals into posts, so you wake up to content ready for review. We never pretend to be on location; our Charlotte stringer is.',
  },
  {
    q: 'Who shoots the content?',
    a: 'Our Charlotte stringer handles every on-location shoot, and we art-direct remotely during the shoot. On Starter, you send a short weekly clip drop and phone video is fine.',
  },
  {
    q: 'Do you work with businesses outside Charlotte?',
    a: 'No. We work with Charlotte businesses only, so our stringer knows the venues, the seasons and the neighborhoods.',
  },
  {
    q: 'Month-to-month, really? What’s the catch?',
    a: 'No catch. Cancel anytime, and we refund the unused portion of your month if you cancel after day 15. We earn each month by what we delivered in the last one.',
  },
  {
    q: 'What if I don’t have content ideas?',
    a: 'That’s our job. After a short kickoff call about your voice and content pillars, we lay out 4 weeks of content for you to approve or redline.',
  },
  {
    q: 'How fast can we start?',
    a: 'First post goes live within 10 days of signing. Book a 20-minute call and we’ll work out the details.',
  },
];
