import { SITE } from '@/lib/site';

export type Tier = {
  id: string;
  name: string;
  price: string; // founding client price, shown large
  regular: string; // regular price, shown small
  period: string; // '/month' or 'one-off'
  flag?: string;
  bestFor?: string;
  includesHeading: string;
  includes: string[];
  note?: string;
  cta: string;
  href: string;
};

export type Starter = Tier & { summary: string };

export const PILLARS = [
  {
    id: 'content',
    title: 'Social media content',
    bullets: [
      'Posts and carousels with captions; Reels, TikToks and Shorts edited from your phone clips or made with stock and AI',
      'Scheduled and posted to Instagram, Facebook and TikTok',
      'You approve the content calendar before anything goes out',
    ],
  },
  {
    id: 'ads',
    title: 'Paid ads',
    bullets: [
      'Meta (Facebook and Instagram) and Google Search campaigns',
      'Audience and keyword research, ad copy and creative',
      'Monthly tuning and a plain-English report (ad spend paid by you)',
    ],
  },
  {
    id: 'crm',
    title: 'CRM setup and management',
    bullets: [
      'GoHighLevel or HubSpot, set up around how you sell',
      'Pipelines, lead sources and routing',
      'Kept clean and up to date every month',
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    bullets: [
      'Lead capture and instant replies',
      'Email and text follow-up, review requests, reminders',
      'Workflows in n8n, Make or Zapier, with AI where it helps',
    ],
  },
];

export const TIERS: Tier[] = [
  {
    id: 'social',
    name: 'Social',
    price: '$550',
    regular: '$750',
    period: '/month',
    bestFor: 'Businesses that need to show up on social consistently.',
    includesHeading: 'Includes',
    includes: [
      '12 posts or carousels a month with captions',
      '8 short videos a month (Reels, TikToks, Shorts)',
      'Monthly content calendar you approve',
      'Scheduling and posting to Instagram, Facebook and TikTok',
      'Monthly report',
    ],
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,000',
    regular: '$1,400',
    period: '/month',
    flag: 'Most complete start',
    bestFor: 'Businesses ready to turn attention into leads.',
    includesHeading: 'Everything in Social, plus',
    includes: [
      'Ads on one platform (Meta or Google Search), managed monthly',
      'CRM pipeline upkeep',
      'Up to 2 new or changed automations a month',
      'Monthly report and 30-minute review call',
    ],
    note: 'Ad spend is paid by you to the platform.',
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'full-stack',
    name: 'Full-Stack',
    price: '$1,600',
    regular: '$2,200',
    period: '/month',
    bestFor: 'Businesses that want content, ads, CRM and automation fully handled.',
    includesHeading: 'Includes',
    includes: [
      '16 posts or carousels and 12 short videos a month',
      'Ads on Meta and Google Search',
      'CRM management (pipelines, lead routing, clean-up)',
      'Up to 4 new or changed automations a month',
      'Twice-monthly check-in call',
    ],
    note: 'Ad spend is paid by you to the platforms.',
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
];

export const STARTERS: Starter[] = [
  {
    id: 'content-starter',
    name: 'Content Starter Pack',
    summary: 'A month of content planned and ready to post.',
    price: '$350',
    regular: '$450',
    period: 'one-off',
    includesHeading: 'Includes',
    includes: ['30-day content calendar', '12 posts with captions', '4 short videos, ready to post'],
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'ads-launch',
    name: 'Ads Launch',
    summary: 'One ad campaign, set up and tuned for two weeks.',
    price: '$350',
    regular: '$500',
    period: 'one-off',
    includesHeading: 'Includes',
    includes: [
      'Account check and research',
      'One Meta or Google Search campaign',
      '3 ad variations',
      'Landing-page notes',
      '14 days of tuning',
    ],
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'crm-automation',
    name: 'CRM & Automation Setup',
    summary: 'Your leads in one pipeline, with instant replies and follow-up.',
    price: '$400',
    regular: '$600',
    period: 'one-off',
    includesHeading: 'Includes',
    includes: [
      'CRM pipeline',
      'Lead capture form',
      'Instant reply',
      '3-step follow-up',
      'Review request',
      'Walkthrough and how-to',
    ],
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
];

export const NOT_INCLUDED = [
  'Website builds',
  'On-location filming or photo shoots',
  'TikTok ads',
  'PR or influencer campaigns',
  'Custom software',
];

export const TERMS = [
  { t: 'Fixed monthly price', d: 'Each monthly plan is a flat price. Starter projects are one fixed price. Ad spend is paid by you directly to the platform.' },
  { t: 'Month to month', d: 'Monthly plans run month to month. Cancel with 30 days’ notice.' },
  { t: 'You own your accounts', d: 'Your social, ad, CRM and email accounts stay in your name. Software fees are paid by you directly to each provider.' },
  { t: 'First deliverables in 7 days', d: 'First deliverables within 7 days of kickoff. You approve everything before it goes live.' },
];

export const FAQS = [
  {
    q: 'Who films the videos?',
    a: 'You don’t need a film crew. You send short phone clips (I give you a simple shot list), or I create videos from stock footage, AI tools, motion graphics and voiceover. I don’t do on-location shoots.',
  },
  {
    q: 'Do you post for us?',
    a: 'Yes. I schedule and post to Instagram, Facebook and TikTok, and you approve the content calendar first.',
  },
  {
    q: 'Which ad platforms?',
    a: 'Meta (Facebook and Instagram) and Google Search. Ad spend is paid by you directly to the platform. I don’t promise a number of leads or sales; results depend on your market, budget and offer.',
  },
  {
    q: 'Which CRM do you use?',
    a: 'GoHighLevel or HubSpot, or the CRM you already have if it can do the job. Software fees are paid by you, so you own the accounts.',
  },
  {
    q: 'How fast do we start?',
    a: 'First deliverables within 7 days of kickoff. Business texting in the US needs carrier registration, which can add days.',
  },
  {
    q: 'Is there a contract?',
    a: 'No long-term contract. You get a short written proposal. Monthly plans are month to month with 30 days’ notice.',
  },
  {
    q: 'Where are you based?',
    a: 'I work remotely and keep US Eastern mornings and early afternoons open for calls.',
  },
  {
    q: 'How do I pay?',
    a: 'By invoice. Starter projects: 50% to start, 50% on delivery. Monthly plans: billed monthly in advance.',
  },
];
