import type { FAQItem } from '@/components/FAQ';
import {
  PILLARS as SERVICE_PILLARS,
  TIERS as SERVICE_TIERS,
  STARTERS as SERVICE_STARTERS,
  FAQS as SERVICE_FAQS,
} from '@/components/services/data';

// Pricing and FAQ copy live in services/data.ts so the home page and services page never drift apart.
export const TIERS = SERVICE_TIERS;
export const STARTERS = SERVICE_STARTERS;
export const FAQS: FAQItem[] = SERVICE_FAQS;

export const PILLARS = SERVICE_PILLARS.map((p, i) => ({ n: `0${i + 1}`, title: p.title, bullets: p.bullets }));

export const STEPS = [
  { title: '20-minute call.', body: 'We look at your business, your current marketing and what to fix first.' },
  { title: 'Plan and first deliverables in 7 days.', body: 'I set up a content plan, ad plan or CRM build, and you approve everything before it goes live.' },
  { title: 'Monthly delivery.', body: 'Content, ads and automations keep running, with a short report each month.' },
] as const;

export const WHY = [
  { title: 'Nothing falls between the cracks.', body: 'The person making your ads also builds the follow-up, so leads from content and ads land in your CRM and get a reply.' },
  { title: 'One plan, one invoice.', body: 'No juggling a content freelancer, an ads person and a tech person.' },
  { title: 'You own everything.', body: 'Your accounts, your content, your data. Written how-tos for anything I build.' },
] as const;
