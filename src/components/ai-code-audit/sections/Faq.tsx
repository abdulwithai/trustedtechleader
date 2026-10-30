import type { CSSProperties } from 'react';
import Cta from '@/components/brand/Cta';
import '@/styles/pages/ai-code-audit/faq.css';

type FaqItem = { q: string; a: string };

/** Single source for the visible FAQ and the FAQPage JSON-LD. Plain-text answers only. */
const FAQ: FaqItem[] = [
  {
    q: 'My app works fine. Why would I need an audit?',
    a: 'Working and being secure are different things. AI tools are very good at producing code that runs, so the app looks right when you test it. Security problems are usually invisible until someone deliberately tries to misuse the app, for example by reading data they should not see or skipping a payment check. An audit looks for those hidden gaps.',
  },
  {
    q: "I'm not technical. Will I understand the results?",
    a: 'Yes. You get a plain-English summary that explains each finding, what it could mean for your customers or business, and what to do about it. We walk through the results on a call. If someone on your team maintains the code, they also get the technical detail they need to fix things.',
  },
  {
    q: 'Which AI tools and stacks do you review?',
    a: 'Apps built with tools such as Cursor, Bolt, Lovable, Replit, v0, Claude Code, Windsurf and GitHub Copilot. Common stacks include Next.js, React, Supabase, Firebase, Node.js, Python, Postgres and Stripe. If your stack is not on this list, ask on the discovery call.',
  },
  {
    q: 'What access do you need?',
    a: 'Read-only access to your code repository and a test account on your staging or live app. An NDA is available on request. We remove our access when the audit is finished.',
  },
  {
    q: 'Will you fix the problems, or just report them?',
    a: 'Either. We can fix the issues ourselves, or we can guide your team through the fixes. Either way, we retest afterwards so you know the fixes worked.',
  },
  {
    q: 'How long does it take, and what does it cost?',
    a: 'It depends on the size of your app and the scope of the work. You get a written scope and a quote after the free discovery call, so there are no surprises.',
  },
  {
    q: 'Is it safe to share my code with you?',
    a: 'Yes. An NDA is available on request, we only ask for the access the audit needs, and we do not share or reuse your code.',
  },
  {
    q: 'What if you find nothing serious?',
    a: 'Then you launch with evidence instead of hope. You still get the checklist, so you know what we checked and what to keep doing as the app changes.',
  },
];

export default function Faq() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section id="faq" className="acs-section acs-faq" aria-labelledby="acs-faq-title">
      <div className="acs-wrap acs-faq__grid">
        <div className="acs-faq__intro" data-reveal="left">
          <span className="acs-eyebrow">FAQ</span>
          <h2 id="acs-faq-title">
            Questions founders <span className="acs-hl">actually ask</span>
          </h2>
          <p className="acs-lead">
            Short, honest answers. If yours is not here, ask it on a free call.
          </p>
          <Cta>Book a free discovery call</Cta>
        </div>

        <div className="acs-faq__list">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              className="acs-card acs-faq__item"
              data-reveal
              style={{ '--d': i } as CSSProperties}
            >
              <summary className="acs-faq__q">
                <span>{item.q}</span>
                <span className="acs-faq__icon" aria-hidden="true" />
              </summary>
              <p className="acs-faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
