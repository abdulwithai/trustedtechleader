import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import '@/styles/pages/ai-code-audit/hero.css';

const TOOLS = ['Cursor', 'Bolt', 'Lovable', 'Replit', 'v0', 'Claude Code', 'Windsurf', 'Copilot'];

const FINDINGS = [
  { sev: 'risk', label: 'Critical', text: 'Service key exposed in the browser bundle' },
  { sev: 'risk', label: 'High', text: 'Database rows readable by any logged-in user' },
  { sev: 'warn', label: 'Medium', text: 'No rate limit on login' },
] as const;

export default function Hero() {
  return (
    <section className="acs-section acs-hero" aria-labelledby="acs-hero-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-wrap acs-hero__grid">
        <div className="acs-hero__copy">
          <span className="acs-eyebrow">Security audit for AI-built apps</span>
          <h1 id="acs-hero-title">
            You built it with AI. <span className="acs-hl">Let&apos;s make sure it&apos;s safe to launch.</span>
          </h1>
          <p className="acs-lead">
            A senior engineer reviews your AI-generated code, tests it the way an attacker would, and fixes what&apos;s
            broken before real users and real data arrive.
          </p>
          <div className="acs-hero__ctas">
            <Cta size="lg">Book a free discovery call</Cta>
            <Cta variant="ghost" size="lg" href="#services">See what we check</Cta>
          </div>
          <div className="acs-hero__tools">
            <span className="acs-hero__tools-label">We audit apps built with</span>
            <ul>
              {TOOLS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="acs-hero__stage">
          <Auditor pose="present" facing="right" className="acs-hero__auditor" />
          <svg className="acs-hero__connector" viewBox="0 0 120 70" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="3" cy="62" r="3.5" fill="#6B3BEA" />
            <path d="M3 62 C 40 66, 60 10, 118 14" fill="none" stroke="#6B3BEA" strokeWidth="1.6" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="acs-card acs-card--lg acs-hero__app">
            <div className="acs-hero__bar">
              <span className="acs-hero__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="acs-hero__url">your-app.com</span>
            </div>
            <div className="acs-hero__body">
              <span className="acs-eyebrow acs-eyebrow--plain acs-hero__label">Example findings</span>
              <ul className="acs-hero__slots">
                {FINDINGS.map((f) => (
                  <li key={f.text} className="acs-slot acs-hero__slot">
                    <div className="acs-hero__finding">
                      <span className={`acs-chip acs-chip--${f.sev}`}>{f.label}</span>
                      <span>{f.text}</span>
                    </div>
                  </li>
                ))}
                <li className="acs-slot acs-hero__slot">
                  <div className="acs-hero__finding acs-hero__finding--ok">
                    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#3FA34D" />
                      <path d="m5.8 10.3 2.7 2.7 5.4-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span><strong>Fix plan ready:</strong> 3 issues, every one with a fix</span>
                  </div>
                </li>
              </ul>
              <span className="acs-hero__scan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
