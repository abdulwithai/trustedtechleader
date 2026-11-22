import type { ElementType, ReactNode } from 'react';

type ContainerProps = { children: ReactNode; narrow?: boolean; className?: string; as?: ElementType };

export function Container({ children, narrow, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`container${narrow ? ' container--narrow' : ''} ${className}`.trim()}>{children}</Tag>;
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: 'default' | 'tint' | 'forest';
  narrow?: boolean;
  className?: string;
  'aria-labelledby'?: string;
};

/** Vertical-padded full-width band with an inner Container. */
export function Section({ children, id, tone = 'default', narrow, className = '', ...rest }: SectionProps) {
  const toneClass = tone === 'default' ? '' : ` section--${tone}`;
  return (
    <section id={id} className={`section${toneClass} ${className}`.trim()} aria-labelledby={rest['aria-labelledby']}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
