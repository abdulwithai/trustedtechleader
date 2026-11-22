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
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a className={cls} href={href}>{children}</a>
    ) : (
      <Link className={cls} href={href}>{children}</Link>
    );
  }
  return <button className={cls} type={type} onClick={onClick}>{children}</button>;
}
