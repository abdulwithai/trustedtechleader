import Link from 'next/link';
import NavToggle from './NavToggle';

type Props = {
  /** Route of the current page (e.g. "/law-firms/"); marks the matching nav link. */
  current?: string;
  /** Optional crumb shown after the brand name. */
  crumb?: string;
  /** Home page uses an in-page anchor for Services. */
  home?: boolean;
  /** Reduced nav used by the ad landing variants (/v/*). */
  landing?: boolean;
};

const links = [
  { href: '/case-studies/', label: 'Case studies' },
  { href: '/law-firms/', label: 'For law firms' },
  { href: '/ai-visibility/', label: 'AI visibility' },
  { href: '/ai-audit/', label: 'Free AI audit' },
];

export default function SiteHeader({ current, crumb, home, landing }: Props) {
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
          {landing ? (
            <>
              <Link href="/case-studies/">Case studies</Link>
              <a href="#services">Services</a>
              <a className="btn btn-dark btn-sm" href="mailto:hello@trustedtechleader.com">Get in touch</a>
            </>
          ) : (
            <>
              {home ? <a href="#services">Services</a> : <Link href="/#services">Services</Link>}
              {links.map((l) => (
                <Link key={l.href} href={l.href} aria-current={cur(l.href)}>{l.label}</Link>
              ))}
              <Link className="btn btn-dark btn-sm" href="/free-scan/" aria-current={cur('/free-scan/')}>Free AI Visibility Scan</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
