import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/web-software-development');

export default function WebSoftwareDevelopmentPage() {
  return <ServicePage service={getService('/web-software-development')} />;
}
