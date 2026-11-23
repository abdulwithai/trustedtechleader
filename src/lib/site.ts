/* Single source of truth for site-wide constants. Placeholders marked TODO. */
export const SITE = {
  name: 'Trusted Tech Leader',
  url: 'https://trustedtechleader.com',
  tagline: 'Leads, content, CRM and AI automation. One team, one monthly price.',
  email: 'hello@trustedtechleader.com',
  phone: '', // TODO: set a real number like '+1-704-555-0123'. Phone links stay hidden while empty.
  phoneDisplay: '', // TODO: e.g. '(704) 555-0123'
  instagram: 'https://www.instagram.com/trustedtechleader', // TODO confirm handle
  linkedin: 'https://www.linkedin.com/company/trustedtechleader', // TODO confirm URL
  address: 'Trusted Tech Leader LLC, Wyoming, USA', // TODO: virtual office street address
  bookHref: '/contact#book',
  bookLabel: 'Book a 20-min call',
  defaultTitle: 'Charlotte Growth Agency: Lead Gen, Content, CRM & AI Automation | Trusted Tech Leader',
  defaultDescription:
    'Done-for-you lead generation, content, CRM and AI automation for Charlotte local businesses. Published prices. Month-to-month.',
} as const;

export const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
] as const;
