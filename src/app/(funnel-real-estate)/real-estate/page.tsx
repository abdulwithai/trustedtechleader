import FunnelPage, { generateFunnelMetadata } from '@/components/funnel/FunnelPage';
import realEstateContent from '@/lib/funnel-content/real-estate';
import '@/styles/pages/funnel-realestate.css';

export const metadata = generateFunnelMetadata(realEstateContent);

export default function Page() {
  return <FunnelPage content={realEstateContent} />;
}
