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

export const PILLARS = [
  {
    id: 'missed-call',
    title: 'Missed-call text-back',
    summary: 'An instant, friendly text with a booking link when you can’t pick up, so the caller gets a reply while you’re on the job.',
  },
  {
    id: 'web-form',
    title: 'Web form and after-hours replies',
    summary: 'Every inquiry gets an automatic reply in seconds, day or night.',
  },
  {
    id: 'estimate',
    title: 'Estimate follow-up',
    summary: 'A 3-4 message email/text sequence over two weeks for open quotes.',
  },
  {
    id: 'reviews',
    title: 'Review requests and one pipeline',
    summary: 'A review ask after each completed job, and every lead in one simple board so nothing slips.',
  },
];

export const TIERS: Tier[] = [
  {
    id: 'setup',
    name: 'Follow-Up Setup',
    price: '$450',
    regular: '$750',
    period: 'one-off',
    flag: 'Start here',
    bestFor: 'Shops that want the leaks fixed once.',
    includesHeading: 'Includes',
    includes: [
      'Missed-call text-back',
      'Web form and after-hours instant reply',
      '3-4 step estimate follow-up',
      'Review request after each job',
      'One simple lead pipeline',
      '30-minute walkthrough and a written how-to',
      '14 days of fixes after launch',
    ],
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'care',
    name: 'Follow-Up Care',
    price: '$400',
    regular: '$450',
    period: '/month',
    bestFor: 'Shops that want the system watched and tuned every month.',
    includesHeading: 'Includes',
    includes: [
      'Monitoring and fixes',
      'Monthly report: leads, replies and reviews requested',
      'Up to 2 message or workflow changes a month',
      'One seasonal reactivation campaign per quarter (for example, tune-up reminders) to past customers',
    ],
    note: 'Requires the Follow-Up Setup first, or an existing system I can work with.',
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
  {
    id: 'growth',
    name: 'Growth Retainer',
    price: '$900',
    regular: '$1,200',
    period: '/month',
    bestFor: 'Shops that want paid search ads and social posts added on top of follow-up.',
    includesHeading: 'Everything in Care, plus',
    includes: [
      'Google Search ads setup and management (ad spend paid by you to Google)',
      'Monthly ad report',
      '8 social posts a month (graphics and captions from your job photos) for Facebook and Instagram',
      'Landing-page copy for ads, for your existing site or page builder',
    ],
    note: 'Ad results depend on your market, budget and offer. I don’t promise a number of leads.',
    cta: SITE.bookLabel,
    href: SITE.bookHref,
  },
];

export const NOT_INCLUDED = ['Website builds', 'Filming or photo shoots', 'TikTok ads', 'PR'];

export const TERMS = [
  { t: 'Fixed price', d: 'Setup is one fixed price. Monthly plans are flat monthly prices. Ad spend is paid by you directly to Google.' },
  { t: 'Month to month', d: 'Monthly plans run month to month. Cancel with 30 days’ notice.' },
  { t: 'You own your accounts', d: 'Your phone number, texting, CRM and ad accounts stay in your name. Software and texting fees are paid by you directly to each provider.' },
  { t: '14 days of fixes after launch', d: 'After go-live, I fix problems with the setup for 14 days at no extra charge.' },
];

export const FAQS = [
  {
    q: 'Do I need new software?',
    a: 'Not always. If you already use a CRM or field-service tool, I work inside it where possible. If you have nothing, I’ll recommend a low-cost option. Software and texting fees are paid by you directly to the provider, so you own the accounts.',
  },
  {
    q: 'How fast is it live?',
    a: 'Email and web-form replies are usually live within 7 days of kickoff. Business texting in the US needs carrier registration (A2P 10DLC), which can take extra days; I handle the paperwork with you.',
  },
  {
    q: 'Is texting customers legal?',
    a: 'Replying to someone who just called or messaged you is generally treated differently from marketing texts, but rules vary. I build in opt-out handling and only send texts to people who contacted you or agreed to hear from you. This isn’t legal advice.',
  },
  {
    q: 'Where are you based?',
    a: 'I work remotely and am available for calls on US Eastern mornings and early afternoons.',
  },
  {
    q: 'Is there a contract?',
    a: 'No long-term contract. You get a short written proposal for the setup, and monthly care is month to month with 30 days’ notice.',
  },
  {
    q: 'How do I pay?',
    a: 'By invoice. Setup is 50% to start and 50% when it’s live.',
  },
];
