import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/digital-marketing-growth');

export default function DigitalMarketingGrowthPage() {
  return <ServicePage service={getService('/digital-marketing-growth')} />;
}
