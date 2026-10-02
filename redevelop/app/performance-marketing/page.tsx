import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/performance-marketing');

export default function PerformanceMarketingPage() {
  return <ServicePage service={getService('/performance-marketing')} />;
}
