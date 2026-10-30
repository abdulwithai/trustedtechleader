import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Cta from '@/components/brand/Cta';
import Auditor from '@/components/brand/Auditor';
import '@/styles/pages/not-found.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Page not found | Trusted Tech Leader"
  },
  "description": "The page you were looking for could not be found.",
  "robots": {
    "index": false,
    "follow": true
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Page not found | Trusted Tech Leader",
    "description": "The page you were looking for could not be found."
  },
  "twitter": {
    "card": "summary",
    "title": "Page not found | Trusted Tech Leader",
    "description": "The page you were looking for could not be found."
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-404">
      <main id="main" className="nf">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container nf__inner">
      <div className="nf__char">
      <Auditor pose="think" facing="right" className="nf__auditor" />
      </div>
      <div className="acs-card acs-card--lg nf__card">
      <span className="acs-chip acs-chip--warn">404 · Page not found</span>
      <h1>This page <em>isn&apos;t here.</em></h1>
      <p className="acs-lead">The page you were looking for is not here. It may have moved. Here are three good places to go next.</p>
      <div className="nf__links">
      <Cta href="/">Back to home</Cta>
      <Cta variant="ghost" href="/case-studies/">Case studies</Cta>
      <Cta variant="ghost">Book a call</Cta>
      </div>
      </div>
      </div>
      </main>
    </PageShell>
  );
}
