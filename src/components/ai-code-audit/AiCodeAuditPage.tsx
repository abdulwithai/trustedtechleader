// Imported before the sections so their stylesheets come later and win ties.
import '@/styles/pages/ai-code-audit/base.css';
import Reveal from '@/components/brand/Reveal';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Shipped from './sections/Shipped';
import DeepScan from './sections/DeepScan';
import Services from './sections/Services';
import Process from './sections/Process';
import Report from './sections/Report';
import SelfCheck from './sections/SelfCheck';
import Trust from './sections/Trust';
import FinalCta from './sections/FinalCta';
import Faq from './sections/Faq';
import Footer from './sections/Footer';

/**
 * Landing page: AI-generated code security audits and production readiness.
 * Fonts (--acs-font-*) are loaded once in src/app/layout.tsx; tokens live in src/styles/tokens.css.
 */
export default function AiCodeAuditPage() {
  return (
    <div className="acs" data-funnel="ai-code-audit">
      <a className="acs-skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Shipped />
        <DeepScan />
        <Services />
        <Process />
        <Report />
        <SelfCheck />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Reveal />
    </div>
  );
}
