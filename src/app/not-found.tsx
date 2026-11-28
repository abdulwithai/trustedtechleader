import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import Button from '@/components/Button';

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };

const quickLinks = [
  { href: '/work', label: 'See the sample build' },
  { href: '/services', label: 'Services and pricing' },
  { href: '/contact', label: 'Contact us' },
];

export default function NotFound() {
  return (
    <PageShell>
      <Section>
        <p className="eyebrow">Error 404</p>
        <h1>This page isn&rsquo;t here.</h1>
        <p className="lead">
          The link may be old, or the page may have moved. Here are a few places you can go instead.
        </p>

        <nav aria-label="Helpful links" style={{ marginTop: 32 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, maxWidth: 420 }}>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="card card--lift"
                  style={{ display: 'block', textDecoration: 'none', color: 'var(--ttl-near-black)', fontWeight: 600, padding: '16px 20px' }}
                >
                  {l.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ marginTop: 32 }}>
          <Button href="/">Back to home</Button>
        </div>
      </Section>
    </PageShell>
  );
}
