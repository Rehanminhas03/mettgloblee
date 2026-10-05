/**
 * Clients and projects shown in the homepage clients section, in two groups:
 * `local` (Pakistan) and `international`.
 *
 * To add one, append an entry. `href` opens that client's page — a portfolio
 * page, a case study, or a full `https://` URL (new tab). Entries without an
 * `href` render as plain cards. Only list organizations that have approved
 * being referenced.
 */

export type Partner = {
  name: string;
  /** Sector, then location — e.g. "Automotive · Islamabad". */
  caption: string;
  region: 'international' | 'local';
  href?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: 'Ittehad Automotive Dealerships ERP',
    caption: 'Automotive · In development',
    region: 'local',
    href: '/portfolio/dealership-erp',
  },
  {
    name: 'Jetour Ittehad',
    caption: 'Automotive · Islamabad',
    region: 'local',
    href: '/case-study-jetour-ittehad',
  },
  {
    name: 'Hyundai Islamabad',
    caption: 'Automotive · Islamabad',
    region: 'local',
    href: '/case-study-hyundai-islamabad',
  },
  {
    name: 'CSM Ittehad',
    caption: 'EV automotive · Islamabad',
    region: 'local',
    href: '/case-study-csm-ittehad',
  },
  {
    name: 'SFYKEA',
    caption: 'On-demand car care · Islamabad',
    region: 'local',
    href: '/portfolio/sfykea',
  },
  {
    name: 'Ittehad Steel',
    caption: 'Industrial · Islamabad',
    region: 'local',
    href: '/portfolio/ittehad-steel',
  },
  {
    name: 'MyTrackee Pakistan',
    caption: 'GPS & vehicle tracking · Pakistan',
    region: 'local',
  },
  {
    name: 'Mowing',
    caption: 'Lawn care · Field-ops software',
    region: 'international',
    href: '/portfolio/mowing',
  },
  {
    name: 'Serenada Mental Health',
    caption: 'Mental health · Texas',
    region: 'international',
    href: '/portfolio/serenada-mental-health',
  },
  {
    name: 'Prospect Smile',
    caption: 'Dental care · Illinois',
    region: 'international',
    href: '/portfolio/prospect-smile',
  },
  {
    name: "Luxury O'Hare Limo",
    caption: 'Limo service · Chicago',
    region: 'international',
    href: '/portfolio/luxury-ohare-limo',
  },
];
