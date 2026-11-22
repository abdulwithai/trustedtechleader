/* Single source of truth for site-wide constants. Placeholders marked TODO. */
export const SITE = {
  name: 'Trusted Tech Leader',
  url: 'https://trustedtechleader.com',
  tagline: 'A small team in Karachi. A camera in Charlotte.',
  email: 'hello@trustedtechleader.com',
  phone: '+1-704-000-0000', // TODO: real Charlotte 704/980 number
  phoneDisplay: '(704) 000-0000', // TODO
  instagram: 'https://www.instagram.com/trustedtechleader', // TODO confirm handle
  linkedin: 'https://www.linkedin.com/company/trustedtechleader', // TODO confirm URL
  address: 'Trusted Tech Leader LLC, Wyoming, USA', // TODO: virtual office street address
  bookHref: '/contact#book',
  bookLabel: 'Book a 20-min call',
  defaultTitle: 'Charlotte Social Media & Content Studio | Trusted Tech Leader',
  defaultDescription:
    'Weekly Reels, on-location photo, and social management for Charlotte independent businesses. Published prices. Month-to-month.',
} as const;

export const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
] as const;
