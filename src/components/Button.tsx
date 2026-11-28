import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string; // renders a link when set, otherwise a <button>
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({ children, href, variant = 'primary', size = 'md', className = '', type = 'button', onClick }: ButtonProps) {
  const cls = `btn btn--${variant}${size === 'sm' ? ' btn--sm' : ''} ${className}`.trim();
  if (href) {
    const web = /^https?:/.test(href);
    const external = web || /^(mailto:|tel:)/.test(href);
    return external ? (
      <a className={cls} href={href} {...(web ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}{web ? <span className="visually-hidden"> (opens in a new tab)</span> : null}</a>
    ) : (
      <Link className={cls} href={href}>{children}</Link>
    );
  }
  return <button className={cls} type={type} onClick={onClick}>{children}</button>;
}
