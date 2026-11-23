import Button from '@/components/Button';
import type { Tier } from './data';

export default function TierCard({ tier }: { tier: Tier }) {
  const h = `${tier.id}-heading`;
  return (
    <article id={tier.id} className={`card card--lift tier${tier.popular ? ' tier--popular' : ''}`} aria-labelledby={h}>
      <div className="tier__head">
        <h3 id={h} className="tier__name">{tier.name}</h3>
        {tier.popular ? <span className="pill">Most popular</span> : null}
      </div>
      <p className="tier__price">
        <span className="mono tier__amount">{tier.price}</span>
        <span className="tier__per">/month</span>
      </p>
      <h4 className="tier__sub">Who it&rsquo;s for</h4>
      <ul className="tier__list">{tier.who.map((x) => <li key={x}>{x}</li>)}</ul>
      <h4 className="tier__sub">{tier.getHeading}</h4>
      <ul className="tier__list tier__list--check">{tier.gets.map((x) => <li key={x}>{x}</li>)}</ul>
      {tier.gives.length ? (
        <>
          <h4 className="tier__sub">{tier.giveHeading}</h4>
          <ul className="tier__list">{tier.gives.map((x) => <li key={x}>{x}</li>)}</ul>
        </>
      ) : null}
      {tier.timeline ? <p className="tier__timeline"><strong>Timeline:</strong> {tier.timeline}</p> : null}
      <div className="tier__cta">
        <Button href={tier.href} variant={tier.popular ? 'primary' : 'secondary'}>{tier.cta}</Button>
      </div>
    </article>
  );
}
