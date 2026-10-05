/**
 * Portfolio entries for `/portfolio`, split by market. Cards use the same
 * design as the homepage case studies (`components/site/WorkCards`).
 *
 * Add a project by appending to `INTERNATIONAL` or `LOCAL`. Set `href` and
 * `metrics` only for work with a published, client-approved case study.
 */

import {
  ERP_CASE_STUDY,
  LOCAL_CASE_STUDIES,
  MOWING_CASE_STUDY,
  type WorkCard,
} from './caseStudies';

export const INTERNATIONAL: WorkCard[] = [
  MOWING_CASE_STUDY,
  {
    tone: 'light',
    sector: 'MENTAL HEALTH · TEXAS, USA',
    brand: 'SERENADA MENTAL HEALTH',
    title: 'A patient-first website built to be found.',
    copy: 'Website design and development with ongoing SEO for a psychiatric and counseling practice serving Georgetown and Waco.',
    tags: ['Website', 'SEO'],
    href: '/portfolio/serenada-mental-health',
    linkLabel: 'View the project',
  },
  {
    tone: 'cream',
    sector: 'DENTAL CARE · ILLINOIS, USA',
    brand: 'PROSPECT SMILE',
    title: 'A modern dental website that books patients.',
    copy: 'Website design and development with local SEO for a family and cosmetic dental clinic in Mount Prospect.',
    tags: ['Website', 'Local SEO'],
    href: '/portfolio/prospect-smile',
    linkLabel: 'View the project',
  },
  {
    tone: 'dark',
    sector: 'LUXURY TRANSPORTATION · CHICAGO, USA',
    brand: "LUXURY O'HARE LIMO",
    title: 'Chauffeur bookings, driven by search.',
    copy: 'Website design and development with SEO for airport transfers, corporate travel and event transportation across the Chicago area.',
    tags: ['Website', 'SEO'],
    href: '/portfolio/luxury-ohare-limo',
    linkLabel: 'View the project',
  },
];

export const LOCAL: WorkCard[] = [
  ERP_CASE_STUDY,
  ...LOCAL_CASE_STUDIES,
  {
    tone: 'light',
    sector: 'INDUSTRIAL · PAKISTAN',
    brand: 'ITTEHAD STEEL',
    href: '/portfolio/ittehad-steel',
    linkLabel: 'View the project',
    title: 'Industrial service partner.',
    copy: 'Marketing support for the steel business: Instagram page management, video reels, and billboard and poster design.',
    tags: ['Instagram', 'Video reels', 'Billboards', 'Posters'],
  },
  {
    tone: 'dark',
    sector: 'GPS & VEHICLE TRACKING · PAKISTAN',
    brand: 'MYTRACKEE PAKISTAN',
    title: 'GPS location & vehicle tracking platform.',
    copy: 'A web portal for GPS location and vehicle tracking, so fleets and vehicle owners can see where their vehicles are.',
    tags: ['GPS', 'Vehicle tracking', 'Web portal'],
  },
];

/**
 * Portfolio cards show scope tags, not statistics — the numbers live on each
 * project's own page.
 */
const SCOPE_TAGS: Record<string, string[]> = {
  'ITTEHAD AUTOMOTIVE DEALERSHIPS ERP': [
    'ERP',
    'Role-based portals',
    'CEO portal',
  ],
  'JETOUR ITTEHAD': ['Meta ads', 'Lead automation', 'Outdoor'],
  'HYUNDAI ISLAMABAD': ['Social media', 'Lead handling', 'Outdoor'],
  'CSM ITTEHAD': ['Meta ads', 'Lead automation', 'Local visibility'],
  SFYKEA: ['Website', 'Flutter app', 'Admin & partner portals'],
  MOWING: ['Laravel', 'Vue 3', 'MySQL', 'Custom platform'],
};

export function withoutStats(cards: WorkCard[]): WorkCard[] {
  return cards.map(({ metrics, ...card }) =>
    metrics
      ? { ...card, tags: card.tags ?? SCOPE_TAGS[card.brand] ?? [] }
      : card,
  );
}
