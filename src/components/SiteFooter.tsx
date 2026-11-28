import Link from 'next/link';
import { Logo } from './SiteHeader';
import { SITE } from '@/lib/site';

export default function SiteFooter() {
  const social: { href: string; label: string }[] = [];
  if (SITE.instagram) social.push({ href: SITE.instagram, label: 'Instagram' });
  if (SITE.linkedin) social.push({ href: SITE.linkedin, label: 'LinkedIn' });

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <Logo />
            <p className="site-footer__tag">{SITE.tagline}</p>
            <ul>
              {SITE.phone ? <li><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li> : null}
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
          <nav aria-label="Site">
            <h2>Site</h2>
            <ul>
              <li><Link href="/work">Sample build</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          {social.length ? (
            <nav aria-label="Social">
              <h2>Social</h2>
              <ul>
                {social.map((s) => (
                  <li key={s.label}><a href={s.href} rel="noopener noreferrer" target="_blank">{s.label}<span className="visually-hidden"> (opens in a new tab)</span></a></li>
                ))}
              </ul>
            </nav>
          ) : null}
          <nav aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </nav>
        </div>
        <div className="site-footer__bar">© 2026 TrustedTechLeader</div>
      </div>
    </footer>
  );
}
