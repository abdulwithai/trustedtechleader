import type { ServiceContent } from './types';

export const webAndMobileApps: ServiceContent = {
  visual: 'apps',
  heroLabel: 'Example: one backend',
  eyebrow: 'Web and mobile apps',
  title: { before: 'Apps your customers use, ', hl: 'on the system your team runs.' },
  lead: 'We build web and mobile apps that share one API and admin dashboard with your back office. Orders and members show up in an admin your team uses.',
  included: {
    title: { before: 'What’s ', hl: 'included' },
    items: [
      'Native or cross-platform mobile apps for iOS and Android',
      'Web apps and customer portals',
      'An admin dashboard or CMS for your team',
      'One API behind the apps and the back office',
      'Accounts, bookings, ordering and payments where needed',
      'Build and testing on iOS and Android',
    ],
  },
  process: {
    title: { before: 'App and admin, ', hl: 'built together.' },
    lead: 'Both sides run on the same data from the start.',
    pill: 'Step by step',
    steps: [
      { title: 'Define the journey', text: 'We agree the key screens and what the back office needs to see.', icon: 'phone' },
      { title: 'Build app and admin together', text: 'The app, API and admin dashboard are built against the same data from the start.', icon: 'link' },
      { title: 'Build and test on iOS and Android', text: 'We build and test the app on both platforms.', icon: 'devices' },
    ],
  },
  related: {
    title: { before: 'See it in ', hl: 'real projects' },
    lead: 'Each one is described from the codebase. No metrics are claimed.',
    cases: [
      { href: '/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/', title: 'Cafe ordering and loyalty app', text: 'A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.' },
      { href: '/case-studies/wellness-training-platform-apps-cms-ai/', title: 'Wellness platform with AI coach', text: 'A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.' },
      { href: '/case-studies/innercise-breathwork-studio-booking-app/', title: 'Innercise: breathwork studio app', text: 'A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.' },
      { href: '/case-studies/trading-card-tv-live-auction-marketplace-app/', title: 'Trading Card TV live auction app', text: 'A live-stream shopping, auction, marketplace and card-for-card trading app for trading-card collectors on iOS and Android.' },
    ],
  },
  cta: {
    title: { before: 'Tell us what your customers ', hl: 'should be able to do.' },
    lead: 'Book a call and describe the journey.',
  },
};
