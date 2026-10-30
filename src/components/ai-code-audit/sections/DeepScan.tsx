import type { CSSProperties } from 'react';
import '@/styles/pages/ai-code-audit/deepscan.css';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import DeepScanTimeline from './DeepScanTimeline';
import CountUp from './CountUp';

const SOURCE =
  'https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/';

const SCANNER = ['Known-vulnerable packages', 'Obvious secrets in the repo', 'Common code patterns'];
const HUMAN = [
  'Broken access control between users',
  'Business-logic abuse, like editing someone else’s order',
  'Auth flows that can be skipped',
  'Data leaking through your API responses',
  'Misconfigured storage buckets and database rules',
];

function SourceLink() {
  return (
    <a className="acs-deepscan__src" href={SOURCE} target="_blank" rel="noopener">
      Source: Veracode 2025 GenAI Code Security Report
    </a>
  );
}

const d = (n: number) => ({ '--d': n }) as CSSProperties;

export default function DeepScan() {
  return (
    <section className="acs-section acs-night acs-deepscan" aria-labelledby="deepscan-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-deepscan__stars" aria-hidden="true" />
      <div className="acs-deepscan__stars acs-deepscan__stars--b" aria-hidden="true" />
      <svg className="acs-deepscan__waves" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120 C200 60 400 190 600 120 S1000 60 1200 130" />
        <path d="M0 470 C250 410 450 540 700 470 S1050 420 1200 480" />
        <path d="M0 520 C300 470 500 570 760 520 S1080 490 1200 540" />
      </svg>

      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">Deep scan</span>
          <h2 id="deepscan-title">
            AI writes code that works. <span className="acs-hl">Not code that defends itself.</span>
          </h2>
          <p className="acs-lead">
            A full-stack review walks every layer of your app, from login to deploy, and flags what an attacker would find first.
          </p>
        </div>

        <DeepScanTimeline />

        <div className="acs-deepscan__stats">
          <div className="acs-deepscan__stat" data-reveal style={d(0)}>
            <div className="acs-deepscan__num">
              <CountUp value={45} suffix="%" />
            </div>
            <p className="acs-deepscan__stat-t">of AI coding tasks produced code with a security flaw.</p>
            <p className="acs-deepscan__cap">Veracode tested 80 tasks across 100+ AI models.</p>
            <SourceLink />
          </div>
          <div className="acs-deepscan__stat" data-reveal style={d(1)}>
            <div className="acs-deepscan__num acs-deepscan__num--word">Bigger ≠ safer</div>
            <p className="acs-deepscan__stat-t">Newer, larger models were not meaningfully more secure.</p>
            <p className="acs-deepscan__cap">Same study, same finding.</p>
            <SourceLink />
          </div>
          <div className="acs-deepscan__stat acs-deepscan__stat--ok" data-reveal style={d(2)}>
            <div className="acs-deepscan__num acs-deepscan__num--ok">Human eyes</div>
            <p className="acs-deepscan__stat-t">A senior engineer reading your code catches what models and scanners miss.</p>
          </div>
        </div>

        <div className="acs-deepscan__vs">
          <div className="acs-card acs-deepscan__col" data-reveal>
            <span className="acs-eyebrow acs-eyebrow--plain">Tools</span>
            <h3>What automated scanners catch</h3>
            <ul>
              {SCANNER.map((t) => (
                <li key={t}>
                  <span className="acs-deepscan__bullet" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="acs-card acs-deepscan__col acs-deepscan__col--win" data-reveal style={d(1)}>
            <span className="acs-eyebrow">Human</span>
            <h3>What a manual review adds</h3>
            <ul>
              {HUMAN.map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 12 12" aria-hidden="true">
                    <path d="m2.5 6.2 2.4 2.4 4.6-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="acs-deepscan__scene">
          <div className="acs-deepscan__figure">
            <Auditor pose="alert" facing="right" className="acs-deepscan__auditor" />
            <div className="acs-deepscan__cloud" data-reveal="pop">
              <svg className="acs-deepscan__cloudsvg" viewBox="0 0 520 270" aria-hidden="true" preserveAspectRatio="none">
                <g>
                  <circle cx="105" cy="150" r="62" />
                  <circle cx="180" cy="95" r="72" />
                  <circle cx="285" cy="80" r="78" />
                  <circle cx="385" cy="105" r="72" />
                  <circle cx="435" cy="160" r="60" />
                  <circle cx="330" cy="180" r="75" />
                  <circle cx="215" cy="185" r="70" />
                  <rect x="100" y="150" width="340" height="80" rx="40" />
                </g>
                <circle cx="52" cy="262" r="10" />
                <circle cx="20" cy="284" r="6" />
              </svg>
              <div className="acs-deepscan__moment acs-card">
                <span className="acs-eyebrow acs-eyebrow--risk">Example · the moment</span>
                <p>Any logged-in user could read every customer’s data.</p>
              </div>
            </div>
          </div>

          <div className="acs-deepscan__closing" data-reveal>
            <h3>Find it before someone else does.</h3>
            <p>Talk it through with a senior engineer who reads code for a living.</p>
            <div className="acs-deepscan__cta">
              <Cta variant="light" size="lg">
                Book your audit call
              </Cta>
              <Cta variant="ghost" size="lg" href="#services">
                What we check
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
