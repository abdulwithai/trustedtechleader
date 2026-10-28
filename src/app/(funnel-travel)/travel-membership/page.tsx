import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Moved to /travel/ | Trusted Tech Leader' },
  robots: { index: false, follow: false },
  alternates: { canonical: '/travel/' },
};

export default function Page() {
  return (
    <main id="main" style={{ padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <meta httpEquiv="refresh" content="0; url=/travel/" />
      <p>This page has moved to <a href="/travel/">/travel/</a></p>
    </main>
  );
}
