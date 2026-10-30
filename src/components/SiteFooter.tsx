import type { ReactNode } from 'react';
import Link from 'next/link';
import BrandMark from './brand/BrandMark';
import { BOOKING_URL } from '@/lib/booking';

/** Shared footer; the page's disclaimer line (if any) is passed as children. Styles: site.css section 9. */
export default function SiteFooter({ children, linkedin = true }: { children?: ReactNode; linkedin?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name"><BrandMark />Trusted Tech Leader</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/case-studies/">Case studies</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
          <a href="mailto:hello@trustedtechleader.com">hello@trustedtechleader.com</a>
          {linkedin ? <a href="#linkedin" data-todo="linkedin">LinkedIn</a> : null}
        </nav>
      </div>
      <div className="container site-footer__legal">
        <p className="site-footer__copy">© 2026 Trusted Tech Leader</p>
        {children ? <p className="footer-note">{children}</p> : null}
      </div>
    </footer>
  );
}
