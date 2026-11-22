import type { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

/** Wraps a page with skip link, header, <main id="main"> and footer. */
export default function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main" className={className || undefined}>{children}</main>
      <SiteFooter />
    </>
  );
}
