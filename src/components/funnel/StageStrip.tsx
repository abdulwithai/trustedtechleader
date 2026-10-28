import type { FunnelContent } from '@/lib/funnel-content/types';

export default function StageStrip({ stages }: { stages: FunnelContent['stages'] }) {
  return (
    <section className="section stages container" id="stages" aria-labelledby="stages-title">
      <div className="stages__head">
        <h2 id="stages-title">{stages.title}</h2>
        <p className="stages__sub">{stages.sub}</p>
      </div>
      <ol className="stage-strip">
        {stages.items.map((s) => (
          <li key={s.n} className={s.next ? 'is-next' : undefined}><div className="stage__n">{s.n}</div><h3>{s.title}</h3><p>{s.body}</p></li>
        ))}
      </ol>
    </section>
  );
}
