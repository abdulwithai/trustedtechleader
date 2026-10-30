import type { ReactNode } from 'react';
import { BOOKING_URL } from '@/lib/booking';

type Props = {
  children: ReactNode;
  /** Defaults to the Calendly booking link (tracked as generate_lead by Tracking.tsx). */
  href?: string;
  /** primary = violet pill, ghost = outlined (adapts on night sections), light = white pill (for night sections). */
  variant?: 'primary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

/**
 * Pill button with an arrow (styles: `.acs-btn*` in src/styles/brand.css, global).
 * Booking and other absolute links open in a new tab; in-page anchors and site routes do not.
 * Tracking: booking links fire generate_lead, external links outbound_click. Internal links
 * fire cta_click only if you pass className="btn" (Tracking.tsx counts `a.btn`).
 */
export default function Cta({ children, href = BOOKING_URL, variant = 'primary', size = 'md', className = '' }: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={`acs-btn acs-btn--${variant} acs-btn--${size} ${className}`.trim()}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      <span>{children}</span>
      <svg className="acs-btn__arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
