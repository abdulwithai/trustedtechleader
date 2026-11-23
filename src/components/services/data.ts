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

export const PILLARS = [
  {
    id: 'lead-generation',
    title: 'Lead generation',
    summary: 'We get you found and bring in new inquiries. Ad spend is paid by you, separately.',
    items: [
      'Google Business Profile optimization + weekly posts',
      'Local SEO basics',
      'Meta/Google ads management (ad spend paid separately)',
      'Landing pages for your offers',
      'Review generation',
    ],
  },
  {
    id: 'content',
    title: 'Content',
    summary: 'Short-form video and posts across every platform. Humans edit and write everything.',
    items: [
      'Reels, TikTok and Shorts',
      'Photos and posts for Instagram, Facebook, TikTok, LinkedIn and Google',
      'On-location shoots by our Charlotte production partner',
    ],
  },
  {
    id: 'crm',
    title: 'CRM',
    summary: 'We set up and run your CRM so no lead slips through. Already have one? We work inside it.',
    items: [
      'One pipeline for every lead: calls, forms, DMs and ads',
      'Lead capture forms',
      'Missed-call text-back',
      'Follow-up sequences',
      'Online booking',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI automation',
    summary: 'AI handles the busywork and speed. Humans handle the creative and the strategy.',
    items: [
      'AI assistant that replies to new leads and DMs 24/7 and books appointments',
      'Automated review requests and reminders',
      'Reactivation campaigns to past customers',
      'Automated monthly reporting',
    ],
  },
];

export const TIERS: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$1,497',
    who: [
      'Owners who need to get found and stop losing leads',
      'Businesses with no CRM or follow-up process today',
      'Owners who can film on a phone but not edit or schedule',
    ],
    getHeading: 'What you get every month',
    gets: [
      'Google Business Profile optimization + weekly posts',
      '8 short videos + 12 posts a month (from your phone clips)',
      'CRM setup with one lead pipeline, a lead capture form and missed-call text-back',
      'Monthly strategy call + monthly report',
      'Shared approval portal, no password sharing',
    ],
    giveHeading: 'What you give us',
    gives: [
      'Weekly 15-min phone-clip drop',
      '30-min kickoff call',
    ],
    timeline: 'CRM and lead capture live within 14 days. First post within 10 days.',
    cta: 'Start with a 2-week paid pilot at $748 →',
    href: SITE.bookHref,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2,497',
    popular: true,
    who: [
      'Businesses that want a done-for-you lead engine',
      'Owners who want paid ads running without managing them',
      'Brands ready to answer every lead fast, day or night',
    ],
    getHeading: 'Everything in Starter, plus',
    gets: [
      '1 on-location shoot/month in Charlotte (with our production partner)',
      'Meta or Google ads management (ad spend is separate, paid by you)',
      '1 landing page/month for offers',
      'Automated follow-up sequences (SMS + email) and review requests',
      'AI assistant that answers new leads and DMs 24/7 and books calls',
    ],
    giveHeading: 'What you give us',
    gives: ['Your ad account access (you keep full control) and offers to promote. We bring the camera.'],
    timeline: 'First shoot scheduled within 7 days. Ads live once your account is connected.',
    cta: 'Book a 20-min call →',
    href: SITE.bookHref,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '$3,997',
    who: [
      'Ambitious local brands ready to own their category in Charlotte',
      'Multi-location businesses or those running several offers at once',
      'Owners who want the whole pipeline automated end to end',
    ],
    getHeading: 'Everything in Growth, plus',
    gets: [
      '2 on-location shoots/month',
      'Ads on both Meta and Google (ad spend is separate, paid by you)',
      'Full pipeline automation: booking, reminders, no-show follow-up and past-customer reactivation',
      'Monthly email newsletter',
      '2 custom automations built per month',
      'Weekly reporting dashboard',
      '24-hour turnaround',
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
  { name: 'Meta/Google ads management', price: '$599/mo', details: 'For Starter clients (included in Growth and Signature). Requires existing ad account; ad spend paid separately' },
  { name: 'Landing page', price: '$599', details: 'Single page, 7-day turnaround' },
  { name: 'Website refresh', price: 'from $1,497', details: 'Full discovery → design → build' },
  { name: 'Email newsletter design', price: '$199/issue', details: 'Copy + design, you send' },
  { name: 'Press pitch (per publication)', price: '$149', details: 'Pitch + 1 revision' },
  { name: 'Brand voice playbook', price: '$499', details: 'One-time deliverable' },
];

export const GUARANTEES = [
  { t: 'Month-to-month.', d: 'Cancel anytime. We refund the unused portion of your month if you cancel after day 15.' },
  { t: '10-day first-post guarantee.', d: 'First piece of content live within 10 days of signing or we refund the first month.' },
  { t: '100% ownership.', d: 'You own all content and all CRM and lead data forever. Content is delivered monthly to a shared Google Drive you control, and your lead data can be exported any time.' },
  { t: 'No password sharing.', d: 'You approve content in our portal; we never touch your accounts outside scheduled posting.' },
];

export const FAQS = [
  { q: 'Can I switch tiers month to month?', a: 'Yes. Upgrade mid-month takes effect on the 1st. Downgrade effective next billing cycle.' },
  { q: 'Is ad spend included?', a: 'No. Ad spend is paid directly to Meta or Google, and you keep full control of the ad account. Our price covers managing the ads, not the spend.' },
  { q: 'Which CRM do you use?', a: 'We set up and run one for you. If you already have one, we work inside it. Your data is yours either way.' },
  { q: 'Is the AI talking to my customers?', a: 'It answers fast and books appointments. For anything it can’t handle, it hands off to you or us, and you approve its scripts before it goes live.' },
  { q: 'Do you take clients outside Charlotte?', a: 'No. The entire operation is built around Charlotte businesses. We refer out-of-market businesses to agencies we trust.' },
  { q: 'How do shoots work with a remote team?', a: 'Our Charlotte production partner handles on-location. We art-direct remotely via a shot list and a group chat during the shoot.' },
];
