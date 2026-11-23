import Link from 'next/link';
import { Logo } from './SiteHeader';
import { SITE } from '@/lib/site';

export default function SiteFooter() {
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
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Social">
            <h2>Social</h2>
            <ul>
              <li><a href={SITE.instagram} rel="noopener noreferrer" target="_blank">Instagram</a></li>
              <li><a href={SITE.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li>{SITE.address}</li>
            </ul>
          </nav>
        </div>
        <div className="site-footer__bar">© 2026 Trusted Tech Leader LLC · Wyoming, USA</div>
      </div>
    </footer>
  );
}
