/**
 * The 16 case-study names, subtitles and page titles (fix document, item 4A).
 * One source for the H1, breadcrumb, card titles, subtitles and meta titles, so
 * they cannot drift apart.
 */
export type CaseName = {
  /** H1, breadcrumb current item and card title. */
  name: string;
  /** Line under the H1 and under each card title (visible on page). */
  subtitle: string;
  /** `<title>`, `og:title` and `twitter:title`. */
  metaTitle: string;
};

export const CASE_NAMES: Record<string, CaseName> = {
  'mytrackee-pakistan': {
    name: 'MyTrackee Pakistan',
    subtitle:
      'Real-time GPS vehicle location & fleet tracking portal for fleets across Pakistan',
    metaTitle:
      'GPS Vehicle Tracking & Fleet Management Web Portal (Pakistan): MyTrackee | Mett Global',
  },
  'claims-recovery': {
    name: 'The £50,000 Recovery',
    subtitle:
      'Amazon FBA reimbursement & multi-channel courier claims across USA, UK, EU & Canada (>£50,000+ recovered)',
    metaTitle:
      'The £50,000+ Recovery: Amazon FBA Reimbursement & Logistics Claims (USA, UK, EU, Canada) | Mett Global',
  },
  'remote-warehouse-management': {
    name: 'The Remote Warehouse',
    subtitle:
      'US warehouse operations & 3PL logistics management (>95% accuracy) across USA, Canada & Germany',
    metaTitle:
      'Remote US Warehouse Management & 3PL Logistics (USA, Canada, EU) | Mett Global',
  },
  'procurement-sourcing': {
    name: 'From Source to Sale',
    subtitle:
      'Sourcing and manufacturing in Pakistan & China, connected to B2B and Amazon FBA sales',
    metaTitle:
      'Product Sourcing & Manufacturing (Pakistan & China) to Amazon FBA Sales | Mett Global',
  },
  'courier-3pl-management': {
    name: 'The Invoice That Matches',
    subtitle:
      'Courier & 3PL logistics management, carrier rate negotiation and freight invoice auditing (USA, UK, EU)',
    metaTitle:
      'Courier & 3PL Logistics Management & Freight Audit (USA, UK, EU) | Mett Global',
  },
  'multichannel-ecommerce-operations': {
    name: 'Eight Markets, One Operation',
    subtitle:
      '8 Amazon marketplaces across 6 sales channels (USA, UK, Canada, UAE, Germany, France, Italy, Spain)',
    metaTitle:
      'Amazon Multichannel E-Commerce Operations (USA, UK, EU, Canada, UAE) | Mett Global',
  },
  'etsy-in-house-launch': {
    name: '64 Listings in Two Days',
    subtitle:
      'In-house global Etsy shop launch, 64 SEO listings, and first international sale in two days',
    metaTitle:
      'Etsy Shop Launch, Keyword Listing SEO & Marketplace Ads (Global) | Mett Global',
  },
  'jetour-ittehad': {
    name: 'The 1,000-Lead Launch',
    subtitle:
      'Car dealership marketing & lead generation engine in Islamabad: 1,000+ verified leads and showroom growth',
    metaTitle:
      'Car Dealership Marketing & Lead Generation in Islamabad: Jetour | Mett Global',
  },
  'csm-ittehad': {
    name: '112 Showroom Visits',
    subtitle:
      'Electric vehicle (EV) car dealership marketing & showroom visit conversion in Islamabad',
    metaTitle:
      'EV Car Dealership Marketing & Showroom Lead Generation in Islamabad: CSM | Mett Global',
  },
  'hyundai-islamabad': {
    name: 'The Connected Showroom',
    subtitle:
      'Automotive dealership social media growth, lead funnels & showroom footfall in Islamabad',
    metaTitle:
      'Automotive Dealership Growth & Social Media Marketing in Islamabad: Hyundai | Mett Global',
  },
  'dealership-erp': {
    name: 'One System, Three Showrooms',
    subtitle:
      'Multi-showroom automotive dealership ERP and CRM software development in Islamabad',
    metaTitle:
      'Dealership ERP & CRM Software Development (Islamabad) | Mett Global',
  },
  sfykea: {
    name: 'Car Care, On Demand',
    subtitle:
      "On-demand door-to-door car care in Islamabad: Flutter iOS/Android apps & operations portals",
    metaTitle:
      'On-Demand Car Care Mobile App & Web Portal Development (Islamabad): SFYKEA | Mett Global',
  },
  'ittehad-steel': {
    name: 'Steel, Made Visible',
    subtitle:
      'Industrial B2B marketing, video reels production, and billboard advertising in Islamabad & Faisalabad',
    metaTitle:
      'Industrial B2B Marketing, Video Production & Outdoor Advertising in Islamabad: Ittehad Steel | Mett Global',
  },
  mowing: {
    name: 'The Crew Scheduler',
    subtitle:
      'Commercial lawn-care field-operations & crew scheduling software development (USA)',
    metaTitle:
      'Field-Operations & Crew Scheduling Software Development (USA) | Mett Global',
  },
  'serenada-mental-health': {
    name: 'Found by Patients',
    subtitle:
      'Healthcare clinic website design, patient portals & local medical SEO in Georgetown & Waco, Texas (USA)',
    metaTitle:
      'Medical Clinic Website Design & Healthcare SEO in Texas (USA): Serenada | Mett Global',
  },
  'prospect-smile': {
    name: 'Smiles, Booked',
    subtitle:
      'Family & cosmetic dental clinic website design and local dental SEO in Mount Prospect, Illinois (USA)',
    metaTitle:
      'Dental Practice Website Design & Local Dental SEO in Illinois (USA): Prospect Smile | Mett Global',
  },
  'luxury-ohare-limo': {
    name: 'Booked by Search',
    subtitle:
      'Chauffeured transportation website design, booking engine & SEO in Chicago, Illinois (USA)',
    metaTitle:
      "Chauffeured Transportation Website Design & SEO in Chicago (USA): Luxury O'Hare Limo | Mett Global",
  },
};
