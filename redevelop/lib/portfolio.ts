/**
 * Portfolio entries for `/portfolio`, split by market. Cards use the same
 * design as the homepage case studies (`components/site/WorkCards`).
 *
 * Add a project by appending to `INTERNATIONAL` or `LOCAL`. Set `href` and
 * `metrics` only for work with a published, client-approved case study.
 */

import { CASE_STUDIES, type WorkCard } from './caseStudies';

export const INTERNATIONAL: WorkCard[] = [
  {
    tone: 'dark',
    sector: 'LAWN CARE · FIELD-OPS SOFTWARE',
    brand: 'MOWING',
    title: 'Field operations for commercial lawn care.',
    copy: 'A scheduling and workforce platform that turns recurring property routes into daily crew schedules. The office plans customers, properties, services and teams; drivers run a locked field workflow with job completion, service timers and time clocks.',
    tags: ['Laravel', 'Vue 3', 'MySQL', 'Custom platform'],
  },
  {
    tone: 'light',
    sector: 'MENTAL HEALTH · TEXAS, USA',
    brand: 'SERENADA MENTAL HEALTH',
    title: 'A patient-first website built to be found.',
    copy: 'Website design and development with ongoing SEO for a psychiatric and counseling practice serving Georgetown and Waco.',
    tags: ['Website', 'SEO'],
    href: 'https://www.serenadamentalhealth.com/',
    linkLabel: 'Visit website',
  },
  {
    tone: 'cream',
    sector: 'DENTAL CARE · ILLINOIS, USA',
    brand: 'PROSPECT SMILE',
    title: 'A modern dental website that books patients.',
    copy: 'Website design and development with local SEO for a family and cosmetic dental clinic in Mount Prospect.',
    tags: ['Website', 'Local SEO'],
    href: 'https://www.prospectsmile.com/',
    linkLabel: 'Visit website',
  },
  {
    tone: 'dark',
    sector: 'LUXURY TRANSPORTATION · CHICAGO, USA',
    brand: "LUXURY O'HARE LIMO",
    title: 'Chauffeur bookings, driven by search.',
    copy: 'Website design and development with SEO for airport transfers, corporate travel and event transportation across the Chicago area.',
    tags: ['Website', 'SEO'],
    href: 'https://www.luxuryoharelimo.com/',
    linkLabel: 'Visit website',
  },
];

export const LOCAL: WorkCard[] = [
  ...CASE_STUDIES,
  {
    tone: 'light',
    sector: 'INDUSTRIAL · PAKISTAN',
    brand: 'ITTEHAD STEEL',
    title: 'Industrial service partner.',
  },
  {
    tone: 'dark',
    sector: 'GPS & VEHICLE TRACKING · PAKISTAN',
    brand: 'MYTRACKEE PAKISTAN',
    title: 'GPS location & vehicle tracking platform.',
  },
];
