import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/ai-automation-content');

export default function AiAutomationContentPage() {
  return <ServicePage service={getService('/ai-automation-content')} />;
}
