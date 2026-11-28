/* Single source of truth for site-wide constants. Empty strings hide the matching links. */
export const SITE = {
  name: 'TrustedTechLeader',
  url: 'https://trustedtechleader.com',
  tagline: 'Content, ads, CRM and automation. Done for you.',
  email: 'abdul@trustedtechleader.com',
  phone: '', // No phone number yet. Phone links stay hidden while empty.
  phoneDisplay: '',
  instagram: '', // Footer hides social links while empty.
  linkedin: '',
  bookHref: 'https://calendly.com/meet_to_abdulrahman/ai-discovery-call',
  bookLabel: 'Book a 20-min call',
  defaultTitle: 'Done-for-You Social Content, Ads, CRM & Automation | TrustedTechLeader',
  defaultDescription:
    'TrustedTechLeader is a founder-led marketing fulfillment partner for US small businesses: social posts and short videos, Meta and Google ads, CRM setup and automations. Fixed monthly prices.',
} as const;

export const NAV = [
  { href: '/work', label: 'Samples' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
] as const;
