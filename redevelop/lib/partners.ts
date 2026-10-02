/**
 * Clients and service partners shown in the homepage Partners section.
 *
 * To add one, append an entry. `region` decides the group it appears under;
 * the International group only renders once it has at least one entry.
 * `logo` is a file in `/public` (SVG or transparent PNG works best) — without
 * it the name renders as a wordmark. `href` links the tile — a case study,
 * or a full `https://` URL, which opens in a new tab. Only list organizations that have approved being referenced.
 */

export type Partner = {
  name: string;
  /** Sector, then location — e.g. "Automotive · Islamabad". */
  caption: string;
  region: 'international' | 'local';
  logo?: string;
  href?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: 'Serenada Mental Health',
    caption: 'Mental health · Texas',
    region: 'international',
    href: 'https://www.serenadamentalhealth.com/',
  },
  {
    name: 'Prospect Smile',
    caption: 'Dental care · Illinois',
    region: 'international',
    href: 'https://www.prospectsmile.com/',
  },
  {
    name: "Luxury O'Hare Limo",
    caption: 'Limo service · Chicago',
    region: 'international',
    href: 'https://www.luxuryoharelimo.com/',
  },
  {
    name: 'Mowing',
    caption: 'Lawn care · Field-ops software',
    region: 'international',
    href: '/portfolio',
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
    name: 'Capital Smart Motors',
    caption: 'EV automotive · Islamabad',
    region: 'local',
    href: '/case-study-csm-ittehad',
  },
  {
    name: 'Ittehad Steel',
    caption: 'Industrial · Pakistan',
    region: 'local',
  },
  {
    name: 'MyTrackee Pakistan',
    caption: 'GPS & vehicle tracking · Pakistan',
    region: 'local',
  },
];
