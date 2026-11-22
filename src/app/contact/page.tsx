import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import { SITE } from '@/lib/site';
import CalEmbed from '@/components/contact/CalEmbed';
import ContactForm from '@/components/contact/ContactForm';
import NewsletterForm from '@/components/contact/NewsletterForm';
import '@/styles/contact.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 20-minute call, or email us. Charlotte businesses, month-to-month, published prices.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Section>
        <p className="eyebrow">Contact</p>
        <h1>Let&rsquo;s talk about your Charlotte business.</h1>
        <p className="lead">Twenty minutes, no pitch deck. Pick a time that works for you, or send a note and we&rsquo;ll reply within 12 hours.</p>
        <ul className="contact-links">
          <li><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
          <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
        </ul>
      </Section>

      <Section id="book" tone="tint" aria-labelledby="book-h">
        <h2 id="book-h">{SITE.bookLabel}</h2>
        <p>Calls run Monday to Friday, 7:30&ndash;10:30 AM Eastern. We&rsquo;ll ask for your name, business, Instagram handle and your biggest content problem right now.</p>
        <CalEmbed />
      </Section>

      <Section narrow aria-labelledby="email-h">
        <h2 id="email-h">Prefer email first?</h2>
        <p>Send a note. We&rsquo;re in Karachi, so expect a reply overnight your time.</p>
        <ContactForm />
      </Section>

      <Section tone="tint" narrow aria-labelledby="news-h">
        <h2 id="news-h">One Charlotte business, one content win, every Friday.</h2>
        <p>Plus a free guide: the 5 Reels every Charlotte business should post this month.</p>
        <NewsletterForm />
      </Section>
    </PageShell>
  );
}
