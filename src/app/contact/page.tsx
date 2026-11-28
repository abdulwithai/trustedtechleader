import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';
import '@/styles/contact.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a 20-minute call to look at how leads reach your HVAC or plumbing company today and where they slip through. No pitch deck, no pressure.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Section narrow>
        <p className="eyebrow">Contact</p>
        <h1>Book a 20-minute call</h1>
        <p className="lead">
          Pick a time that suits you. I&rsquo;ll look at how leads reach you today and where they slip through. No pitch deck, no pressure.
        </p>
        <div className="about-hero__actions">
          <a className="btn btn--primary" href={SITE.bookHref} target="_blank" rel="noopener noreferrer">
            Book on Calendly
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
        <ul className="contact-links">
          <li>
            Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
        </ul>
      </Section>
    </PageShell>
  );
}
