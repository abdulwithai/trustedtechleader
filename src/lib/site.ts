/* Single source of truth for site-wide constants. Empty strings hide the matching links. */
export const SITE = {
  name: 'TrustedTechLeader',
  url: 'https://trustedtechleader.com',
  tagline: 'Follow-up systems for HVAC and plumbing companies.',
  email: 'abdul@trustedtechleader.com',
  phone: '', // No phone number yet. Phone links stay hidden while empty.
  phoneDisplay: '',
  instagram: '', // Footer hides social links while empty.
  linkedin: '',
  bookHref: 'https://calendly.com/meet_to_abdulrahman/ai-discovery-call',
  bookLabel: 'Book a 20-min call',
  defaultTitle: 'Missed-Call & Estimate Follow-Up for HVAC and Plumbing Companies | TrustedTechLeader',
  defaultDescription:
    'TrustedTechLeader sets up missed-call text-back, estimate follow-up and review requests for US HVAC and plumbing companies. Founder-led, fixed prices, email and web replies usually live within 7 days.',
} as const;

export const NAV = [
  { href: '/work', label: 'Sample build' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
] as const;
