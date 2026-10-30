import Cta from '@/components/brand/Cta';
import ShippedDemo from './ShippedDemo';
import '@/styles/pages/ai-code-audit/shipped.css';

export default function Shipped() {
  return (
    <section className="acs-section acs-shipped" aria-labelledby="acs-shipped-title">
      <div className="acs-glow" aria-hidden="true" />
      <div className="acs-wrap">
        <div className="acs-head" data-reveal>
          <span className="acs-eyebrow">What your AI actually shipped</span>
          <h2 id="acs-shipped-title">
            It works in the demo. <span className="acs-hl">That&apos;s not the same as safe.</span>
          </h2>
          <p className="acs-lead">
            AI tools optimise for &ldquo;it runs&rdquo;, not for &ldquo;it can&apos;t be abused&rdquo;. The reply sounds
            confident either way. Flip the switch to see what sits behind it.
          </p>
        </div>

        <ShippedDemo />

        <div className="acs-shipped__end" data-reveal>
          <p>If nobody has read the code, nobody knows which of these your app has.</p>
          <Cta>Get your app reviewed</Cta>
        </div>
      </div>
    </section>
  );
}
