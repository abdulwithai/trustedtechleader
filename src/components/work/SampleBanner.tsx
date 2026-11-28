import { SAMPLE_NOTICE } from '@/lib/work/data';
import { Container } from '@/components/Container';
import '@/styles/work.css';

export default function SampleBanner() {
  return (
    <div className="concept-banner" role="note" aria-label="Sample notice">
      <Container className="concept-banner__inner">
        <span className="concept-banner__tag">SAMPLE</span>
        <p>{SAMPLE_NOTICE}</p>
      </Container>
    </div>
  );
}
