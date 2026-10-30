import type { CSSProperties, ReactNode } from 'react';
import Auditor from '@/components/brand/Auditor';
import '@/styles/pages/ai-code-audit/process.css';

const ico = { viewBox: '0 0 24 24', width: 28, height: 28, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const STEPS: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: 'Free discovery call',
    text: 'You walk us through the app and what’s at stake; we tell you honestly what it needs.',
    icon: (<svg {...ico}><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M8 10h8M8 13h5" /></svg>),
  },
  {
    title: 'Scope & secure access',
    text: 'NDA on request, read-only repo access, a written scope before any work.',
    icon: (<svg {...ico}><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /><circle cx="12" cy="15.2" r="1.2" /></svg>),
  },
  {
    title: 'Audit & attack',
    text: 'Manual code review plus hands-on testing of the live app, the way an attacker would.',
    icon: (<svg {...ico}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.4-4.4" /><path d="m9 11 1.6 1.6L13.5 9.5" /></svg>),
  },
  {
    title: 'Report & walkthrough',
    text: 'Every finding ranked by severity, with proof and a fix; we go through it together.',
    icon: (<svg {...ico}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 15.5h5M10 8.5h2" /></svg>),
  },
  {
    title: 'Fix & launch',
    text: 'We fix the issues (or guide your team), retest, and sign off the launch checklist.',
    icon: (<svg {...ico}><path d="M4 20l4-1 9-9-3-3-9 9z" /><path d="m14 7 3 3M15 4l1.5-1.5L20 6l-1.5 1.5" /></svg>),
  },
];

export default function Process() {
  return (
    <section className="acs-section acs-process" id="process" aria-labelledby="process-title">
      <div className="acs-glow" aria-hidden />
      <div className="acs-wrap">
        <div className="acs-process__top">
          <div className="acs-head" data-reveal>
            <span className="acs-eyebrow">How it works</span>
            <h2 id="process-title">
              From “is this safe?” to <span className="acs-hl">launch-ready</span>, in five steps.
            </h2>
            <p className="acs-lead">A clear path with a written scope up front. You always know what happens next.</p>
          </div>
          <Auditor pose="point" facing="left" className="acs-process__auditor" />
        </div>

        <div className="acs-process__frame acs-card acs-card--lg" data-reveal>
          <span className="acs-process__pill">The audit</span>
          <div className="acs-process__line" aria-hidden>
            <span className="acs-process__track" />
            <span className="acs-process__fill" />
            <span className="acs-process__dot" />
            <span className="acs-process__dot acs-process__dot--b" />
          </div>
          <ol className="acs-process__steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="acs-process__step" style={{ '--i': i } as CSSProperties}>
                <div className="acs-process__node">
                  <span className="acs-process__num">{i + 1}</span>
                  <span className="acs-process__tile">{s.icon}</span>
                </div>
                <div className="acs-process__copy">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
