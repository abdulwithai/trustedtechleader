import Button from '@/components/Button';
import { Container } from '@/components/Container';

const STAGES = [
  { n: '01', name: 'Lead generation', line: 'New lead from Google' },
  { n: '02', name: 'Content', line: 'Reel posted' },
  { n: '03', name: 'CRM', line: 'Added to pipeline' },
  { n: '04', name: 'AI automation', line: 'AI replied in 30s, call booked' },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Growth partner for Charlotte local businesses</p>
            <h1 id="home-hero-title">
              More leads. Faster follow-up. <span className="hl">Less busywork.</span>
            </h1>
            <p className="hero__sub">
              We bring you leads, make your content, run your CRM and automate the follow-up. One team, one flat monthly price, no contracts.
            </p>
            <div className="hero__actions">
              <Button href="/contact#book">Book a 20-min call</Button>
              <Button href="#offer" variant="secondary">See pricing</Button>
            </div>
            <ul className="hero__proof" aria-label="Why it's easy to start">
              <li>Month-to-month</li>
              <li>Cancel anytime</li>
              <li>Prices published</li>
            </ul>
          </div>

          <div className="hero__visual" role="img" aria-label="Diagram of one pipeline in four stages: lead generation, content, CRM and AI automation. Example: a new lead from Google, a Reel posted, the lead added to the pipeline, and an AI reply in 30 seconds with a call booked.">
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
              <span className="hero__ticket-label">Every month</span>
              <b>Leads</b><b>Content</b><b>Follow-up on autopilot</b>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
