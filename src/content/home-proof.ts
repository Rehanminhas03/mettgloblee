import 'server-only';
import type { MiniKind } from '@/components/case-studies/MiniVisual';
import { caseStudyPath } from './operations-case-studies';

/**
 * Homepage "Selected results" strip (exactly six cards) and the "Selected
 * work" section (three international cards). No stat appears in both.
 * `accessible` is the full sentence for the link's accessible name, including
 * every qualifier. `visual` picks a schematic graphic; it never implies a
 * value, and no client names appear in any label.
 */
export type ProofItem = {
  service: string;
  value: string;
  unit?: string;
  label: string;
  accessible: string;
  href: string;
  visual: MiniKind;
};

const MARKETING = 'Digital marketing';
const SOFTWARE = 'Web & software';
const ECOMMERCE = 'E‑commerce & supply chain';

export const homeProofItems: ProofItem[] = [
  {
    service: MARKETING,
    value: '1,000+',
    unit: 'verified leads',
    label: 'One Meta lead-generation campaign',
    accessible:
      'More than 1,000 verified leads from one Meta lead-generation campaign',
    href: '/portfolio/jetour-ittehad',
    visual: 'funnel',
  },
  {
    service: MARKETING,
    value: '112',
    unit: 'showroom visits',
    label: 'Lead-generation campaign, client-reported',
    accessible:
      '112 showroom visits from a lead-generation campaign, as reported by the client',
    href: '/portfolio/csm-ittehad',
    visual: 'pin',
  },
  {
    service: SOFTWARE,
    value: '2 + 2',
    unit: 'apps and portals',
    label: 'Two store apps, admin and partner portals',
    accessible:
      'Two store apps plus two portals, admin and partner, running as one platform',
    href: '/portfolio/sfykea',
    visual: 'apps',
  },
  {
    service: SOFTWARE,
    value: '6',
    unit: 'role portals',
    label: 'One custom ERP and CRM, in development',
    accessible:
      'Six role portals in one custom ERP and CRM for three showrooms, currently in development',
    href: '/portfolio/dealership-erp',
    visual: 'portals',
  },
  {
    service: ECOMMERCE,
    value: '>95%',
    unit: 'accuracy',
    label: 'Inventory and order fulfilment',
    accessible:
      'Inventory and order fulfilment accuracy above 95 percent in a remotely managed US warehouse',
    href: caseStudyPath('remote-warehouse-management'),
    visual: 'ring',
  },
  {
    service: ECOMMERCE,
    value: '20+',
    unit: 'courier and 3PL partners',
    label: 'Selected, tested and invoice-audited',
    accessible:
      'More than twenty courier and 3PL partners selected, tested and invoice-audited',
    href: caseStudyPath('courier-3pl-management'),
    visual: 'compare',
  },
];

/** "Selected work": three strongest international engagements. */
export type WorkItem = ProofItem & { line: string };

export const selectedWorkItems: WorkItem[] = [
  {
    service: 'Claims recovery',
    value: '>£50,000',
    label: 'Recovered in one year',
    line: 'Courier and marketplace claims for a leading global brand.',
    accessible:
      'More than fifty thousand pounds recovered in one year in courier and marketplace claims for a leading global brand',
    href: caseStudyPath('claims-recovery'),
    visual: 'rise',
  },
  {
    service: 'Multichannel operations',
    value: '8',
    unit: 'Amazon marketplaces',
    label: 'Across 6 sales channels',
    line: 'Inventory, listings and reporting run as one operation.',
    accessible: 'Eight Amazon marketplaces across six sales channels',
    href: caseStudyPath('multichannel-ecommerce-operations'),
    visual: 'sixdots',
  },
  {
    service: 'Etsy shop launch',
    value: '2 days',
    unit: 'to first sale',
    label: 'In-house Etsy launch',
    line: 'All 64 listings live within 2 days in our own shop.',
    accessible: 'First sale within two days of an in-house Etsy launch',
    href: caseStudyPath('etsy-in-house-launch'),
    visual: 'calendar',
  },
];
