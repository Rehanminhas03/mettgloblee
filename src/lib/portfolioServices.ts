import type { WorkCard } from './caseStudies';

/**
 * Which service each portfolio card belongs to, by brand. A card can sit under
 * more than one service. E-commerce and supply chain is the six international
 * operations case studies, which render through OperationsJourney.
 */
export type ServiceTabId = 'marketing' | 'web' | 'ai' | 'ecommerce';

export const SERVICE_TABS: { id: ServiceTabId; label: string }[] = [
  { id: 'marketing', label: 'Digital Marketing & Growth' },
  { id: 'web', label: 'Web & Software Development' },
  { id: 'ai', label: 'AI Automation & Content' },
  { id: 'ecommerce', label: 'E-Commerce & Supply Chain' },
];

const BRANDS: Record<Exclude<ServiceTabId, 'ecommerce'>, string[]> = {
  marketing: [
    'JETOUR ITTEHAD',
    'HYUNDAI ISLAMABAD',
    'CSM ITTEHAD',
    'ITTEHAD STEEL',
    'SERENADA MENTAL HEALTH',
    'PROSPECT SMILE',
    "LUXURY O'HARE LIMO",
  ],
  web: [
    'ITTEHAD AUTOMOTIVE DEALERSHIPS ERP',
    'SFYKEA',
    'MYTRACKEE PAKISTAN',
    'SERENADA MENTAL HEALTH',
    'PROSPECT SMILE',
    "LUXURY O'HARE LIMO",
  ],
  ai: ['JETOUR ITTEHAD', 'HYUNDAI ISLAMABAD', 'CSM ITTEHAD'],
};

export function forService(
  cards: WorkCard[],
  service: ServiceTabId,
): WorkCard[] {
  if (service === 'ecommerce') return [];
  return cards.filter(card => BRANDS[service].includes(card.brand));
}
