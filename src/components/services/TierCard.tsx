import Button from '@/components/Button';
import type { Tier } from './data';

export default function TierCard({ tier }: { tier: Tier }) {
  const h = `${tier.id}-heading`;
  return (
    <article id={tier.id} className={`card card--lift tier${tier.flag ? ' tier--popular' : ''}`} aria-labelledby={h}>
      <div className="tier__head">
        <h3 id={h} className="tier__name">{tier.name}</h3>
        {tier.flag ? <span className="pill">{tier.flag}</span> : null}
      </div>
      <p className="tier__price">
        <span className="mono tier__amount">{tier.price}</span>
        <span className="tier__per">{tier.period === 'one-off' ? ' one-off' : tier.period}</span>
      </p>
      <p className="tier__timeline"><strong>Founding client price (first 2 clients).</strong> Regular price {tier.regular}{tier.period === 'one-off' ? ' one-off' : tier.period}.</p>
      {tier.bestFor ? (
        <>
          <h4 className="tier__sub">Best for</h4>
          <p>{tier.bestFor}</p>
        </>
      ) : null}
      <h4 className="tier__sub">{tier.includesHeading}</h4>
      <ul className="tier__list tier__list--check">{tier.includes.map((x) => <li key={x}>{x}</li>)}</ul>
      {tier.note ? <p className="tier__timeline">{tier.note}</p> : null}
      <div className="tier__cta">
        <Button href={tier.href} variant={tier.flag ? 'primary' : 'secondary'}>{tier.cta}</Button>
      </div>
    </article>
  );
}
