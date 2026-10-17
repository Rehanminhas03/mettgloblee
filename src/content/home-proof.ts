import 'server-only';
import { caseStudies, caseStudyPath } from './operations-case-studies';

/**
 * Homepage proof band: a mix across the service lines, not one service.
 *
 * Every figure already appears on its own case-study or project page. The
 * e-commerce figures are read from the case-study records so they cannot
 * drift; the others mirror the published cards in `lib/caseStudies.ts`.
 * `accessible` is the full sentence for the link's accessible name, including
 * every qualifier (more than, above, client-reported, in development).
 */
export type ProofItem = {
  /** Which service line the figure belongs to (small label above the number). */
  service: string;
  display: string;
  label: string;
  accessible: string;
  href: string;
};

const MARKETING = 'Digital marketing';
const SOFTWARE = 'Web & software';
const ECOMMERCE = 'E-commerce & supply chain';

/** Figures from the operations case studies, by slug. */
function fromStudy(slug: string, label: string): ProofItem {
  const study = caseStudies.find(entry => entry.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return {
    service: ECOMMERCE,
    display: study.hero.display,
    label,
    accessible: study.hero.accessible,
    href: caseStudyPath(slug),
  };
}

/*
 * No client names appear in the band's labels. Order: two marketing, two
 * software, four e-commerce. The marketing and software figures mirror the
 * published case studies; the e-commerce figures are read from the records.
 */
export const homeProofItems: ProofItem[] = [
  {
    service: MARKETING,
    display: '1,000+',
    label: 'Verified leads from one Meta lead-generation campaign',
    accessible:
      'More than 1,000 verified leads from one Meta lead-generation campaign',
    href: '/portfolio/jetour-ittehad',
  },
  {
    service: MARKETING,
    display: '112',
    label: 'Showroom visits from a lead-generation campaign (client-reported)',
    accessible:
      '112 showroom visits from a lead-generation campaign, as reported by the client',
    href: '/portfolio/csm-ittehad',
  },
  {
    service: SOFTWARE,
    display: '2 + 2',
    label: 'Store apps plus admin and partner portals, in one platform',
    accessible:
      'Two store apps plus two portals, admin and partner, running as one platform',
    href: '/portfolio/sfykea',
  },
  {
    service: SOFTWARE,
    display: '6',
    label: 'Role portals in one custom ERP and CRM, in development',
    accessible:
      'Six role portals in one custom ERP and CRM for three showrooms, currently in development',
    href: '/portfolio/dealership-erp',
  },
  fromStudy('claims-recovery', 'Recovered in one year'),
  fromStudy('remote-warehouse-management', 'Inventory and fulfilment accuracy'),
  fromStudy('multichannel-ecommerce-operations', 'Amazon marketplaces'),
  fromStudy(
    'etsy-in-house-launch',
    'To first sale in an in-house Etsy project',
  ),
];
