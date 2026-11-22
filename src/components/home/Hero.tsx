import Button from '@/components/Button';
import { Container } from '@/components/Container';

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container>
        <div className="home-hero__body">
          <p className="eyebrow home-hero__eyebrow">Charlotte, NC</p>
          <h1 id="home-hero-title">Charlotte&rsquo;s human-made content studio.</h1>
          <p className="home-hero__sub">
            Weekly Reels, on-location photo, and social management that sounds like your business &mdash; not a template. Studios, shops and services across Charlotte trust us to show up for them.
          </p>
          <div className="home-hero__actions">
            <Button href="/work">See our Charlotte work &rarr;</Button>
            <a className="home-hero__link" href="/contact#book">or book a 20-min call</a>
          </div>
          <p className="home-hero__micro">Based in Charlotte via Karachi &middot; Month-to-month &middot; Prices published</p>
        </div>
      </Container>
      <a className="home-hero__scroll" href="#trust" aria-label="Scroll to next section">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </section>
  );
}
