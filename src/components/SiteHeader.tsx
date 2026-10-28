import Link from 'next/link';
import NavToggle from './NavToggle';
import { BOOKING_URL } from '@/lib/booking';
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
  { href: '/case-studies/', label: 'Case studies' },
  { href: '/ai-automation/', label: 'AI automation' },
];

export default function SiteHeader({ current, crumb, home, funnel }: Props) {
  const navLinks: readonly FunnelLink[] = funnel ? funnels[funnel].nav : links;
  const cur = (href: string) => (current === href ? 'page' : undefined);
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span className="brand-name">Trusted Tech Leader</span>
          {crumb ? <span className="brand-crumb">/ {crumb}</span> : null}
        </Link>
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
          <a className="btn btn-dark btn-sm" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
        </nav>
      </div>
    </header>
  );
}
