import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/ai-automation');

export default function AiAutomationPage() {
  return <ServicePage service={getService('/ai-automation')} />;
}
