import BrandMark from '@/components/brand/BrandMark';
import Cta from '@/components/brand/Cta';
import '@/styles/pages/ai-code-audit/header.css';

const LINKS = [
  { href: '#services', label: 'What we check' },
  { href: '#process', label: 'Process' },
  { href: '#report', label: 'Sample report' },
  { href: '#self-check', label: 'Self-check' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="acs-header">
      <div className="acs-wrap acs-header__row">
        <a className="acs-header__brand" href="/">
          <BrandMark className="acs-header__mark" />
          <span>Trusted Tech Leader</span>
        </a>
        <nav className="acs-header__nav" aria-label="Page sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <Cta className="acs-header__cta">Book a free call</Cta>
      </div>
    </header>
  );
}
