import type { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

type Props = {
  /** Page class (e.g. "page-home"); page CSS is scoped under it. */
  pageClass: string;
  current?: string;
  crumb?: string;
  home?: boolean;
  landing?: boolean;
  /** Set false for the few pages whose footer omits the LinkedIn link. */
  linkedin?: boolean;
  /** Footer disclaimer line. */
  footerNote?: ReactNode;
  children: ReactNode;
};

export default function PageShell({ pageClass, current, crumb, home, landing, linkedin, footerNote, children }: Props) {
  return (
    <div className={pageClass}>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader current={current} crumb={crumb} home={home} landing={landing} />
      {children}
      <SiteFooter linkedin={linkedin}>{footerNote}</SiteFooter>
    </div>
  );
}
