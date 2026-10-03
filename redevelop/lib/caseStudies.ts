/**
 * Work cards shared by the homepage, `/case-studies` and `/portfolio`.
 * Published case studies carry an `href` and verified `metrics`; client
 * references without a published study leave both out.
 */

export type CardTone = 'dark' | 'light' | 'cream';

export type WorkCard = {
  brand: string;
  /** Sector, then location — shown in the card's top line. */
  sector: string;
  title: string;
  copy?: string;
  tone: CardTone;
  metrics?: { value: string; label: string }[];
  /** Scope or stack chips, shown at the foot of cards without metrics. */
  tags?: string[];
  /** Internal path, or a full `https://` URL that opens in a new tab. */
  href?: string;
  linkLabel?: string;
};

export const CASE_STUDIES: WorkCard[] = [
  {
    href: '/case-study-jetour-ittehad',
    tone: 'dark',
    sector: 'AUTOMOTIVE · ISLAMABAD',
    brand: 'JETOUR ITTEHAD',
    title: 'From zero digital presence to a measurable lead engine.',
    copy: 'Brand launch, Meta acquisition, lead automation, outdoor visibility and live activations working as one system.',
    metrics: [
      { value: '79', label: 'verified leads' },
      { value: '82%', label: 'from Reel creative' },
      { value: '20.3%', label: 'visit-stage+' },
    ],
    linkLabel: 'Read the Jetour case study',
  },
  {
    href: '/case-study-hyundai-islamabad',
    tone: 'light',
    sector: 'AUTOMOTIVE · ISLAMABAD',
    brand: 'HYUNDAI ISLAMABAD',
    title:
      'Connecting an established automotive brand into a local growth system.',
    copy: 'Content, digital journey, lead handling, outdoor visibility and activation planning built around measurable showroom outcomes.',
    metrics: [
      { value: '3', label: 'managed social channels' },
      { value: '1', label: 'connected funnel' },
      { value: 'LIVE', label: 'measurement framework' },
    ],
    linkLabel: 'Read the Hyundai case study',
  },
  {
    href: '/case-study-csm-ittehad',
    tone: 'cream',
    sector: 'EV AUTOMOTIVE · ISLAMABAD',
    brand: 'CSM ITTEHAD',
    title: 'Turning a new EV presence into showroom traffic.',
    copy: 'Brand foundation, Meta acquisition, lead automation and local visibility built around a measurable visit funnel.',
    metrics: [
      { value: '~400', label: 'client-reported leads' },
      { value: '112', label: 'showroom visits' },
      { value: '~28%', label: 'lead-to-visit rate' },
    ],
    linkLabel: 'Read the CSM case study',
  },
];
