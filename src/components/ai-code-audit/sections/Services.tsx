import '@/styles/pages/ai-code-audit/services.css';
import Auditor from '@/components/brand/Auditor';
import Cta from '@/components/brand/Cta';
import ServicesExplorer from './ServicesExplorer';

const STACKS = ['Next.js', 'React', 'Supabase', 'Firebase', 'Node.js', 'Python', 'Postgres', 'Stripe', 'Vercel', 'Netlify', 'AWS'];

export default function Services() {
  return (
    <section id="services" className="acs-section acs-services" aria-labelledby="acs-services-h">
      <div className="acs-glow" aria-hidden />
      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">What we check</span>
          <h2 id="acs-services-h">
            Eight layers. <span className="acs-hl">One launch-ready app.</span>
          </h2>
          <p className="acs-lead">
            One engagement covers everything between &ldquo;it runs on my laptop&rdquo; and &ldquo;it&rsquo;s safe with real customers&rdquo;.
          </p>
        </div>

        <div className="acs-services__stage" data-reveal>
          <ServicesExplorer />
          <Auditor pose="point" facing="left" className="acs-services__auditor" />
        </div>

        <div className="acs-services__stacks" data-reveal>
          <span className="acs-eyebrow acs-eyebrow--plain acs-services__stackslabel">Common stacks we review</span>
          <div className="acs-services__marquee">
            <ul className="acs-services__track">
              {STACKS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ul className="acs-services__track" aria-hidden="true">
              {STACKS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="acs-services__cta" data-reveal>
          <Cta size="lg">Book a free discovery call</Cta>
          <p>Not sure which layers you need? That&rsquo;s what the call is for.</p>
        </div>
      </div>
    </section>
  );
}
