import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

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
      <main id="main">
      <div className="container section page-center">
      <div>
      <p className="eyebrow eyebrow--dot">404</p>
      <h1>Page not found</h1>
      <p className="lead mt-3 maxw-prose">The page you were looking for is not here. It may have moved.</p>
      <div className="btn-row mt-4"><Link className="btn btn-primary" href="/">Back to the home page</Link></div>
      </div>
      </div>
      </main>
    </PageShell>
  );
}
