import type { ReactNode } from 'react';
import Button from './Button';
import { Section } from './Container';
import { SITE } from '@/lib/site';

type CTABandProps = {
  title?: ReactNode;
  body?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: 'forest' | 'tint';
};

/** Full-width closing call-to-action. Defaults to the 20-min call. */
export default function CTABand({
  title = 'Let’s talk about your Charlotte business.',
  body,
  primaryHref = SITE.bookHref,
  primaryLabel = SITE.bookLabel,
  secondaryHref,
  secondaryLabel,
  tone = 'forest',
}: CTABandProps) {
  return (
    <Section tone={tone} className="cta-band">
      <div className="cta-band__inner">
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
        <div className="cta-band__actions">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryHref && secondaryLabel ? <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button> : null}
        </div>
      </div>
    </Section>
  );
}
