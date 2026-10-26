import type { ReactNode } from 'react';

/** Shared footer; the page's disclaimer line (if any) is passed as children. */   
export default function SiteFooter({ children, linkedin = true }: { children?: ReactNode; linkedin?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© 2026 Trusted Tech Leader</span>
        <div className="footer-links">
          <a href="mailto:hello@trustedtechleader.com">hello@trustedtechleader.com</a>
          {linkedin ? <a href="#linkedin" data-todo="linkedin">LinkedIn</a> : null}
        </div>
        {children ? <p className="footer-note">{children}</p> : null}
      </div>
    </footer>
  );
}
