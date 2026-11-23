import Button from '@/components/Button';
import { Container } from '@/components/Container';

const REELS = [
  { cls: 'a', n: '01', title: 'Behind the counter' },
  { cls: 'b', n: '02', title: 'Meet the team' },
  { cls: 'c', n: '03', title: 'Before & after' },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Social media content for Charlotte businesses</p>
            <h1 id="home-hero-title">
              We make your Instagram content. <span className="hl">You run the business.</span>
            </h1>
            <p className="hero__sub">
              Weekly Reels, on-location photos and posting for Charlotte coffee shops, studios, salons and home-service pros. One flat monthly price. No contracts.
            </p>
            <div className="hero__actions">
              <Button href="/contact#book">Book a 20-min call</Button>
              <Button href="#offer" variant="secondary">See pricing</Button>
            </div>
            <ul className="hero__proof" aria-label="Why it's easy to start">
              <li>First post live in 10 days</li>
              <li>Cancel anytime</li>
              <li>Prices published</li>
            </ul>
          </div>

          <div className="hero__visual" role="img" aria-label="Example of one month of content: three Reels, plus 12 feed posts and 4 story series">
            <div className="hero__reels" aria-hidden="true">
              {REELS.map((r) => (
                <div key={r.n} className={`reel reel--${r.cls}`}>
                  <span className="reel__tag">Reel {r.n}</span>
                  <span className="reel__play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
                  <span className="reel__title">{r.title}</span>
                </div>
              ))}
            </div>
            <div className="hero__ticket" aria-hidden="true">
              <span className="hero__ticket-label">Every month</span>
              <b>8 Reels</b><b>12 posts</b><b>4 story series</b>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
