import Button from '@/components/Button';
import { Container } from '@/components/Container';
import { SITE } from '@/lib/site';

const STAGES = [
  { n: '01', name: 'Missed call', line: 'Customer calls while you’re on a job' },
  { n: '02', name: 'Text-back', line: 'Text sent with a booking link' },
  { n: '03', name: 'Estimate follow-up', line: 'Messages on days 2, 5 and 10' },
  { n: '04', name: 'Review request', line: 'Asked after the job is marked done' },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">For HVAC and plumbing companies</p>
            <h1 id="home-hero-title">
              Stop losing jobs to missed calls and <span className="hl">forgotten estimates.</span>
            </h1>
            <p className="hero__sub">
              I set up a simple follow-up system that texts back missed calls in seconds, chases estimates that went quiet, and asks happy customers for a Google review. Built in the tools you already use, or a low-cost CRM if you have none. Live in 7 days (texting switches on once carrier registration clears).
            </p>
            <div className="hero__actions">
              <Button href={SITE.bookHref}>{SITE.bookLabel}</Button>
              <Button href="#pricing" variant="secondary">See pricing</Button>
            </div>
            <ul className="hero__proof" aria-label="Founder-led">
              <li>Founder-led. You work directly with Abdul Rahman, the person who builds it.</li>
            </ul>
          </div>

          <div className="hero__visual" role="img" aria-label="Diagram of one follow-up flow in four stages: a missed call, a text-back with a booking link, estimate follow-up on days 2, 5 and 10, and a review request after the job.">
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
              <span className="hero__ticket-label">Every lead</span>
              <b>Text-back</b><b>Estimates</b><b>Reviews</b>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
