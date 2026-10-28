import FunnelPage, { generateFunnelMetadata } from '@/components/funnel/FunnelPage';
import travelContent from '@/lib/funnel-content/travel';
import '@/styles/pages/funnel-travel.css';

export const metadata = generateFunnelMetadata(travelContent);

export default function Page() {
  return <FunnelPage content={travelContent} />;
}
