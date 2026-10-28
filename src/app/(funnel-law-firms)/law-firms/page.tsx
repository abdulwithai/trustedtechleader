import FunnelPage, { generateFunnelMetadata } from '@/components/funnel/FunnelPage';
import lawContent from '@/lib/funnel-content/law-firms';

export const metadata = generateFunnelMetadata(lawContent);

export default function Page() {
  return <FunnelPage content={lawContent} />;
}
