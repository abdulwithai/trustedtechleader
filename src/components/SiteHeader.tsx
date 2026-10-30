import Link from 'next/link';
import NavToggle from './NavToggle';
import BrandMark from './brand/BrandMark';
import Cta from './brand/Cta';
import { funnels, type FunnelId, type FunnelLink } from '@/lib/funnels';

type Props = {
  /** Route of the current page (e.g. "/law-firms/"); marks the matching nav link. */
  current?: string;
  /** Optional crumb shown after the brand name. */
  crumb?: string;
  /** Home page uses an in-page anchor for Services. */
  home?: boolean;
  /** When set, the nav shows this funnel's links instead of the general nav. */
  funnel?: FunnelId;
};

const links: FunnelLink[] = [
  { href: '/ai-automation/', label: 'AI automation' },
  { href: '/ai-code-security-audit/', label: 'AI audit' },
  { href: '/case-studies/', label: 'Case studies' },
];

/**
 * Sticky translucent bar: brand, nav, violet "Book a call" (BOOKING_URL via <Cta>).
 * DOM order is brand, CTA, toggle, nav so that on mobile the menu follows its toggle in tab order;
 * on desktop CSS `order` puts the nav right after the brand (left-aligned) and the CTA at the far right. Styles: site.css section 8.
 */
export default function SiteHeader({ current, crumb, home, funnel }: Props) {
  const navLinks: readonly FunnelLink[] = funnel ? funnels[funnel].nav : links;
  const cur = (href: string) => (current === href ? 'page' : undefined);
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/">
          <BrandMark className="brand-mark" />
          <span className="brand-name">Trusted Tech Leader</span>
          {crumb ? <span className="brand-crumb">/ {crumb}</span> : null}
        </Link>
        <Cta className="site-header__cta">Book a call</Cta>
        <NavToggle />
        <nav className="site-nav" id="site-nav" aria-label="Main">
          {funnel ? null : home ? <a href="#services">Services</a> : <Link href="/#services">Services</Link>}
          {navLinks.map((l) =>
            l.anchor ? (
              <a key={l.href} href={l.href}>{l.label}</a>
            ) : (
              <Link key={l.href} href={l.href} aria-current={cur(l.href)}>{l.label}</Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
