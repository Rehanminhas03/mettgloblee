/**
 * The 16 case-study names, subtitles and page titles (fix document, item 4A).
 * One source for the H1, breadcrumb, card titles, subtitles and meta titles, so
 * they cannot drift apart. Copy is exactly as supplied; do not edit casually.
 */
export type CaseName = {
  /** H1, breadcrumb current item and card title. */
  name: string;
  /** Line under the H1 and under each card title. */
  subtitle: string;
  /** `<title>`, `og:title` and `twitter:title`. */
  metaTitle: string;
};

export const CASE_NAMES: Record<string, CaseName> = {
  'claims-recovery': {
    name: 'The £50,000 Recovery',
    subtitle: 'Courier and marketplace claims for a leading global brand',
    metaTitle: 'The £50,000 Recovery: Claims Case Study | Mett Global',
  },
  'remote-warehouse-management': {
    name: 'The Remote Warehouse',
    subtitle:
      'A complete US warehouse run remotely, with inventory and fulfilment accuracy above 95%',
    metaTitle: 'The Remote Warehouse: US Operations | Mett Global',
  },
  'procurement-sourcing': {
    name: 'From Source to Sale',
    subtitle:
      'Manufacturing and sourcing in Pakistan and China, connected to B2B and Amazon sales',
    metaTitle: 'From Source to Sale: Sourcing Case Study | Mett Global',
  },
  'courier-3pl-management': {
    name: 'The Invoice That Matches',
    subtitle:
      'Courier and 3PL management, from carrier selection to audited invoices',
    metaTitle: 'The Invoice That Matches: Courier & 3PL | Mett Global',
  },
  'multichannel-ecommerce-operations': {
    name: 'Eight Markets, One Operation',
    subtitle:
      '8 Amazon marketplaces across 6 sales channels, run as one operation',
    metaTitle: 'Eight Markets, One Operation: Multichannel | Mett Global',
  },
  'etsy-in-house-launch': {
    name: '64 Listings in Two Days',
    subtitle:
      'An in-house Etsy launch, with every listing live and the first sale within two days',
    metaTitle: '64 Listings in Two Days: Etsy Launch | Mett Global',
  },
  'jetour-ittehad': {
    name: 'The 1,000-Lead Launch',
    subtitle:
      'A dealership growth engine built from zero digital presence for Jetour Ittehad',
    metaTitle: 'The 1,000-Lead Launch: Jetour Ittehad | Mett Global',
  },
  'csm-ittehad': {
    name: '112 Showroom Visits',
    subtitle:
      'Turning a new EV presence into showroom traffic for CSM Ittehad (client-reported)',
    metaTitle: '112 Showroom Visits: CSM Ittehad EV | Mett Global',
  },
  'hyundai-islamabad': {
    name: 'The Connected Showroom',
    subtitle:
      'A local growth system linking content, leads and showroom visits for Hyundai Islamabad',
    metaTitle: 'The Connected Showroom: Hyundai Islamabad | Mett Global',
  },
  'dealership-erp': {
    name: 'One System, Three Showrooms',
    subtitle:
      'A dealership ERP and CRM with a portal for every role, up to the CEO (in development)',
    metaTitle: 'One System, Three Showrooms: Dealership ERP | Mett Global',
  },
  sfykea: {
    name: 'Car Care, On Demand',
    subtitle:
      "Website, iOS and Android apps, and admin and partner portals running SFYKEA's door-to-door car wash",
    metaTitle: 'Car Care, On Demand: SFYKEA App & Portals | Mett Global',
  },
  'ittehad-steel': {
    name: 'Steel, Made Visible',
    subtitle:
      'Instagram management, video reels, and billboard and poster design for Ittehad Steel',
    metaTitle: 'Steel, Made Visible: Ittehad Steel | Mett Global',
  },
  mowing: {
    name: 'The Crew Scheduler',
    subtitle:
      'Field-operations software that turns recurring lawn-care routes into daily crew schedules',
    metaTitle: 'The Crew Scheduler: Mowing Field-Ops | Mett Global',
  },
  'serenada-mental-health': {
    name: 'Found by Patients',
    subtitle:
      'A patient-first website and SEO for a mental health practice serving Georgetown and Waco, Texas',
    metaTitle: 'Found by Patients: Serenada Website & SEO | Mett Global',
  },
  'prospect-smile': {
    name: 'Smiles, Booked',
    subtitle:
      'A modern dental website with local SEO for a family and cosmetic clinic in Mount Prospect, Illinois',
    metaTitle: 'Smiles, Booked: Prospect Smile Dental | Mett Global',
  },
  'luxury-ohare-limo': {
    name: 'Booked by Search',
    subtitle:
      'A website and SEO that turn airport and event searches into Chicago chauffeur bookings',
    metaTitle: "Booked by Search: Luxury O'Hare Limo | Mett Global",
  },
};
