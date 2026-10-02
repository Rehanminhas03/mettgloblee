import { ServicePage } from '@/components/page/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/ecommerce-supply-chain');

export default function EcommerceSupplyChainPage() {
  return <ServicePage service={getService('/ecommerce-supply-chain')} />;
}
