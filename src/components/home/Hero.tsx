import Button from '@/components/Button';
import { Container } from '@/components/Container';
import { SITE } from '@/lib/site';

const STAGES = [
  { n: '01', name: 'Content', line: 'Posts and short videos, planned monthly' },
  { n: '02', name: 'Ads', line: 'Meta and Google, tuned monthly' },
  { n: '03', name: 'CRM', line: 'Leads tracked in one pipeline' },
  { n: '04', name: 'Automation', line: 'Instant replies and follow-up' },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Done-for-you marketing for US small businesses</p>
            <h1 id="home-hero-title">
              Content, ads, CRM and automation. <span className="hl">One partner, done for you.</span>
            </h1>
            <p className="hero__sub">
              I create your social posts and short videos, run your ads, and set up the CRM and automations that follow up with every lead, so your marketing keeps moving while you run the business.
            </p>
            <div className="hero__actions">
              <Button href={SITE.bookHref}>{SITE.bookLabel}</Button>
              <Button href="#pricing" variant="secondary">See pricing</Button>
            </div>
            <ul className="hero__proof" aria-label="Founder-led">
              <li>Founder-led. You work directly with Abdul Rahman, the person doing the work.</li>
            </ul>
          </div>

          <div className="hero__visual" role="img" aria-label="Diagram of one marketing system in four stages: Content, Ads, CRM and Automation, which together keep every lead followed up.">
            <ol className="pipe" aria-hidden="true">
              {STAGES.map((s) => (
                <li key={s.n} className="pipe__stage">
                  <span className="pipe__n">{s.n}</span>
                  <span className="pipe__text">
                    <span className="pipe__name">{s.name}</span>
                    <span className="pipe__line">{s.line}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="hero__ticket" aria-hidden="true">
              <span className="hero__ticket-label">One partner</span>
              <b>Content</b><b>Ads</b><b>CRM</b><b>Automation</b>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
