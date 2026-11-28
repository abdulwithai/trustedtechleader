import type { FAQItem } from '@/components/FAQ';
import {
  PILLARS as SERVICE_PILLARS,
  TIERS as SERVICE_TIERS,
  FAQS as SERVICE_FAQS,
} from '@/components/services/data';

// Pricing and FAQ copy live in services/data.ts so the home page and services page never drift apart.
export const TIERS = SERVICE_TIERS;
export const FAQS: FAQItem[] = SERVICE_FAQS;

export const PILLARS = SERVICE_PILLARS.map((p, i) => ({ n: `0${i + 1}`, title: p.title, body: p.summary }));

export const STEPS = [
  { title: '20-minute call.', body: 'We look at how leads reach you today and where they leak.' },
  { title: '7-day setup.', body: 'I build and test the system in your tools. You approve every message before it goes live.' },
  { title: 'Monthly care (optional).', body: 'I monitor, tweak and report each month so it keeps working.' },
] as const;

export const WHY = [
  { title: 'Missed calls.', body: 'When you’re on a job or it’s after hours, callers often try the next company on Google. A missed call should get a text back within a minute, not a callback tomorrow.' },
  { title: 'Quiet estimates.', body: 'Most shops send a quote and wait. A short, polite follow-up sequence wins back work you’ve already priced.' },
  { title: 'Few reviews.', body: 'Happy customers rarely leave a review unless you ask at the right moment. An automatic request after each job fixes that.' },
] as const;
