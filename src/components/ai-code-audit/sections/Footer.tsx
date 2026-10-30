import BrandMark from '@/components/brand/BrandMark';
import { BOOKING_URL } from '@/lib/booking';
import '@/styles/pages/ai-code-audit/footer.css';

/** Page footer for the AI code audit landing. */
export default function Footer() {
  return (
    <footer className="acs-footer">
      <div className="acs-wrap acs-footer__inner">
        <div className="acs-footer__brand">
          <p className="acs-footer__name"><BrandMark size={22} />Trusted Tech Leader</p>
          <p className="acs-footer__tagline">Security audits and production readiness for AI-built apps.</p>
        </div>

        <nav className="acs-footer__nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/case-studies/">Case studies</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a>
        </nav>
      </div>

      <div className="acs-wrap acs-footer__legal">
        <p>&copy; {new Date().getFullYear()} Trusted Tech Leader</p>
      </div>
    </footer>
  );
}
