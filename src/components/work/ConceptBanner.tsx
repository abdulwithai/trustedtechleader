import { CONCEPT_BANNER } from '@/lib/work/data';
import { Container } from '@/components/Container';
import '@/styles/work.css';

export default function ConceptBanner() {
  return (
    <div className="concept-banner" role="note" aria-label="Concept notice">
      <Container className="concept-banner__inner">
        <span className="concept-banner__tag">CONCEPT</span>
        <p>{CONCEPT_BANNER}</p>
      </Container>
    </div>
  );
}
