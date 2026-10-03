import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/software-development');

export default function SoftwareDevelopmentPage() {
  return <ServicePage service={getService('/software-development')} />;
}
