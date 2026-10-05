/**
 * Detail pages for `/portfolio/[slug]` — one entry per client page.
 *
 * `caseStudy: true` renders the longer case-study layout with a KPI strip.
 * Everything here describes the engagement itself or facts the client already
 * publishes on its own website; no performance figures are claimed.
 *
 * To add a client: append an entry here, then point its `WorkCard`
 * (`lib/caseStudies.ts` / `lib/portfolio.ts`) at `/portfolio/<slug>`.
 */

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  market: 'international' | 'local';
  caseStudy: boolean;
  brand: string;
  /** Sector, then location — upper-cased in the hero kicker. */
  sector: string;
  title: string;
  accent: string;
  lede: string;
  links: ProjectLink[];
  /** KPI strip — case studies only. */
  kpis?: { value: string; label: string }[];
  panel: { label: string; value: string; copy: string };
  about: { heading: string; copy: string };
  scope: string[];
  delivered: { heading: string; copy: string; blocks: ProjectBlock[] };
  flow?: { heading: string; copy: string; steps: string[] };
  glance?: { label: string; value: string }[];
  challenges?: ProjectBlock[];
  tech?: string[];
  /** Show the illustrative manager and CEO portal previews. */
  portals?: boolean;
  seo: { title: string; description: string };
};

export type ProjectBlock = { label: string; title: string; copy: string };

export const PROJECTS: Project[] = [
  {
    slug: 'dealership-erp',
    market: 'local',
    caseStudy: true,
    brand: 'ITTEHAD AUTOMOTIVE DEALERSHIPS ERP',
    sector: 'Automotive retail · Islamabad',
    title: 'One system for the entire',
    accent: 'car-buying journey.',
    lede: 'A complete dealership management system, built for Hyundai Islamabad, Jetour Ittehad Islamabad and Capital Smart Motors. One web portal follows every customer from their first visit to the day they receive their new car, and on into after-sales and the other services a dealership provides, so the whole team knows where each customer and each car stands.',
    links: [],
    kpis: [
      { value: '3', label: 'showrooms on one platform' },
      { value: '6', label: 'team roles, each with a tailored portal' },
      { value: '770+', label: 'automated tests for reliability' },
      {
        value: 'End-to-end',
        label:
          'first visit, delivery, after-sales and every dealership service',
      },
    ],
    panel: {
      label: 'IN DEVELOPMENT',
      value: 'A full ERP for a multi-brand dealership group.',
      copy: 'Sales, service and after-sales, parts and accounts are being brought into one platform, with a portal for every role up to the CEO.',
    },
    about: {
      heading: 'The platform',
      copy: 'Car dealerships run on many hands: sales, delivery, service, parts and accounts. This system gives each of those teams one shared, always-current picture of the customer, so nothing depends on a spreadsheet, a paper file or a chat thread. Each showroom’s data stays separate and secure, and the platform works on desktop and mobile.',
    },
    scope: [
      'Sales',
      'Service & after-sales',
      'Parts',
      'Accounts',
      'CEO portal',
      'Role-based access',
    ],
    glance: [
      { label: 'Industry', value: 'Automotive retail' },
      { label: 'My role', value: 'Designer & full-stack developer' },
      { label: 'Platform', value: 'Web and mobile' },
      { label: 'Timeline', value: '3 months so far, in development' },
    ],
    challenges: [
      {
        label: '01 / PAPER & CHAT',
        title: 'Sales ran on paper, sheets and messages',
        copy: 'Enquiries, bookings and approvals were spread across paper files, spreadsheets and chat threads.',
      },
      {
        label: '02 / VISIBILITY',
        title: 'Managers could not see the whole picture',
        copy: 'Customers, follow-ups and team performance were hard to see in one place.',
      },
      {
        label: '03 / “WHERE IS MY CAR?”',
        title: 'A simple question took too long',
        copy: 'Customers kept asking where their car was, and finding the answer took time.',
      },
      {
        label: '04 / DOCUMENTS',
        title: 'Paperwork was prepared by hand',
        copy: 'Customer documents were made manually, in formats that were not consistent.',
      },
    ],
    delivered: {
      heading: 'What the system does',
      copy: 'Eight capabilities, each kept simple, so every team member gets exactly what they need.',
      blocks: [
        {
          label: '01 / CUSTOMERS & LEADS',
          title: 'No enquiry is lost',
          copy: 'Every enquiry is captured, followed up and never lost.',
        },
        {
          label: '02 / SALES ORDERS',
          title: 'Booking to approval, clearly',
          copy: 'A simple, clear flow from booking to manager approval.',
        },
        {
          label: '03 / DELIVERY TRACKING',
          title: 'Live status of every car',
          copy: 'The status of each car is visible until it reaches the customer.',
        },
        {
          label: '04 / DOCUMENTS',
          title: 'Branded documents in one click',
          copy: 'Quotations, vouchers and delivery notes produced as PDFs.',
        },
        {
          label: '05 / ROLE-BASED PORTALS',
          title: 'Each person sees what they need',
          copy: 'Every team member gets a tailored portal — nothing more, nothing less.',
        },
        {
          label: '06 / NOTIFICATIONS',
          title: 'The right alert at the right time',
          copy: 'Live notifications and reminders reach the right people.',
        },
        {
          label: '07 / REPORTS',
          title: 'Performance at a glance',
          copy: 'Reports and dashboards give managers a quick, clear view.',
        },
        {
          label: '08 / ANY DEVICE',
          title: 'Desktop and mobile',
          copy: 'Works on any device, with each showroom’s data kept separate and secure.',
        },
      ],
    },
    flow: {
      heading: 'The customer journey, in one place',
      copy: 'From the first visit to the keys in hand — and every service after.',
      steps: [
        'Enquiry & follow-up',
        'Booking & approval',
        'Delivery',
        'After-sales & services',
      ],
    },
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Real-time notifications',
      'Cloud-hosted database',
    ],
    portals: true,
    seo: {
      title: 'Ittehad Automotive Dealerships ERP Case Study | MettGlobal',
      description:
        'How MettGlobal is building a complete dealership management system for three showrooms, covering sales, service, parts, accounts and a CEO portal.',
    },
  },
  {
    slug: 'sfykea',
    market: 'local',
    caseStudy: true,
    brand: 'SFYKEA',
    sector: 'On-demand car care · Islamabad',
    title: 'A door-to-door car wash,',
    accent: 'run from one platform.',
    lede: 'SFYKEA brings professional car washing to customers’ homes and offices in Islamabad. MettGlobal built the company website, the customer app on iOS and Android, and the admin and partner portals that run bookings, riders and areas behind it.',
    links: [
      { label: 'Visit website', href: 'https://sfykea.com/' },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/qa/app/sfykea/id1614229829',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.carantechnologies.sfykea',
      },
      { label: 'Partner portal', href: 'https://partner.sfykea.com' },
      { label: 'support@sfykea.com', href: 'mailto:support@sfykea.com' },
    ],
    kpis: [
      { value: '2', label: 'store apps — iOS & Android' },
      { value: '2', label: 'portals — admin & partner' },
      { value: '1', label: 'Firebase backend' },
      { value: '5,000+', label: 'customers served (client-reported)' },
    ],
    panel: {
      label: 'BUILD SCOPE',
      value: 'Website, app and two portals.',
      copy: 'One connected system: customers book in the app, riders are assigned, and the owner and regional partners manage everything from their own portal.',
    },
    about: {
      heading: 'The business',
      copy: 'SFYKEA is a professional door-to-door car wash service operated by CARAN Technologies. Customers pick a package and a time slot, a trained rider comes to them, and the business currently serves areas of Islamabad including Gulberg and Naval Anchorage, with expansion to the twin cities planned. Running that takes more than an app: bookings, riders, locations and partners all need one place to be managed.',
    },
    scope: [
      'Website',
      'Flutter app',
      'Admin portal',
      'Partner portal',
      'Firebase',
    ],
    delivered: {
      heading: 'Four parts, one system',
      copy: 'Each part has a single job, and all of them read from the same Firebase data so what a customer books is what the rider and the portals see.',
      blocks: [
        {
          label: '01 / WEBSITE',
          title: 'The company website',
          copy: 'The public site that explains the service, links to both app stores and gives prospective partners a route to join.',
        },
        {
          label: '02 / CUSTOMER APP',
          title: 'Booking in a few taps',
          copy: 'A Flutter app, live on the App Store and Google Play, where a customer books a specific slot — for example tomorrow at 4 p.m. — for their car wash.',
        },
        {
          label: '03 / ADMIN PORTAL',
          title: 'The owner’s control room',
          copy: 'Customers, bookings, orders, riders and locations in one place, including how many orders and slots were booked today, in which area and through which partner.',
        },
        {
          label: '04 / PARTNER PORTAL',
          title: 'Regional partners, self-managed',
          copy: 'A separate login for partners, who add and manage the riders for their own area. Riders are assigned to the partner who runs that area.',
        },
      ],
    },
    flow: {
      heading: 'How a booking moves through it',
      copy: 'The same record travels from the customer’s phone to the rider and into the portals.',
      steps: [
        'Customer books a slot in the app',
        'Booking is assigned to a rider in that area',
        'Rider completes the wash',
        'Admin and partner portals update from Firebase',
      ],
    },
    seo: {
      title: 'SFYKEA Case Study: Car Wash App & Portals | MettGlobal',
      description:
        'How MettGlobal built the website, Flutter app and admin and partner portals for SFYKEA, a door-to-door car wash service in Islamabad.',
    },
  },
  {
    slug: 'mowing',
    market: 'international',
    caseStudy: true,
    brand: 'MOWING',
    sector: 'Lawn care · Field-ops software',
    title: 'Field operations for',
    accent: 'commercial lawn care.',
    lede: 'A custom scheduling and workforce platform for a commercial lawn-care business. It turns recurring property routes into daily crew schedules, and gives drivers a locked field workflow to complete jobs and track their time.',
    links: [],
    kpis: [
      { value: '2', label: 'workspaces — office & field' },
      { value: 'Daily', label: 'crew schedules from recurring routes' },
      { value: '3', label: 'stack layers — Laravel, Vue 3, MySQL' },
      { value: '1', label: 'custom platform' },
    ],
    panel: {
      label: 'BUILD SCOPE',
      value: 'A custom platform, not an off-the-shelf tool.',
      copy: 'Built around how the business actually runs routes, crews and jobs, with the office and the field each getting the view they need.',
    },
    about: {
      heading: 'The business',
      copy: 'Commercial lawn care runs on repetition: the same properties, on the same cycles, with crews who need to know where to be each day. Doing that from spreadsheets and messages does not scale, so the work moved into one platform where the office plans and the field executes.',
    },
    scope: ['Laravel', 'Vue 3', 'MySQL', 'Custom platform'],
    delivered: {
      heading: 'What the platform does',
      copy: 'The office plans the work; drivers run a workflow that keeps jobs and hours on the record.',
      blocks: [
        {
          label: '01 / OFFICE PLANNING',
          title: 'Customers, properties, services and teams',
          copy: 'The office manages the records that every route is built from.',
        },
        {
          label: '02 / ROUTES',
          title: 'Recurring routes, turned into daily schedules',
          copy: 'Recurring property routes become the daily crew schedules, rather than being rebuilt by hand each morning.',
        },
        {
          label: '03 / FIELD WORKFLOW',
          title: 'A locked workflow for drivers',
          copy: 'Drivers follow a fixed sequence in the field, so a job is worked and closed the same way every time.',
        },
        {
          label: '04 / TIME',
          title: 'Job completion, service timers and time clocks',
          copy: 'Completion, time on each service and hours worked are captured as the work happens.',
        },
      ],
    },
    flow: {
      heading: 'From plan to completed job',
      copy: 'One flow, from the office to the field and back.',
      steps: [
        'Office sets up customers, properties and services',
        'Recurring routes become daily crew schedules',
        'Drivers run the locked field workflow',
        'Completion, service timers and time clocks are recorded',
      ],
    },
    seo: {
      title: 'Mowing Case Study: Field-Ops Software | MettGlobal',
      description:
        'How MettGlobal built a custom Laravel and Vue 3 scheduling and workforce platform for a commercial lawn-care business.',
    },
  },
  {
    slug: 'ittehad-steel',
    market: 'local',
    caseStudy: false,
    brand: 'ITTEHAD STEEL',
    sector: 'Industrial · Islamabad',
    title: 'Marketing for a',
    accent: 'steel manufacturer.',
    lede: 'Marketing support for Ittehad Steel, a Pakistani manufacturer of reinforcement bars and light section steel: Instagram page management, video reels, and billboard and poster design.',
    links: [
      { label: 'Visit website', href: 'https://ittehad.com.pk' },
      { label: 'Instagram', href: 'https://www.instagram.com/ittehadsteel' },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/18LAaiYMUu/',
      },
    ],
    panel: {
      label: 'ENGAGEMENT',
      value: 'Social, video and outdoor creative.',
      copy: 'A consistent brand presence on social media and on the street, for an industrial business that is rarely marketed well.',
    },
    about: {
      heading: 'The company',
      copy: 'Ittehad Steel is a Pakistani steel manufacturer headquartered in Islamabad, with mills in Islamabad and Faisalabad. It produces reinforcement bars and light section steel for construction and infrastructure projects.',
    },
    scope: ['Instagram', 'Video reels', 'Billboards', 'Posters'],
    delivered: {
      heading: 'What we delivered',
      copy: 'Creative and channel management that give an industrial brand a clear, consistent voice online and outdoors.',
      blocks: [
        {
          label: '01 / INSTAGRAM',
          title: 'Page management',
          copy: 'Management of the brand’s Instagram page and its content.',
        },
        {
          label: '02 / VIDEO REELS',
          title: 'Short-form video',
          copy: 'Video reels produced for the Instagram audience.',
        },
        {
          label: '03 / BILLBOARDS',
          title: 'Outdoor visibility',
          copy: 'Billboard design that carries the brand onto the street.',
        },
        {
          label: '04 / POSTERS',
          title: 'Print and campaign posters',
          copy: 'Poster design for campaigns and print use.',
        },
      ],
    },
    seo: {
      title: 'Ittehad Steel Marketing Case | MettGlobal',
      description:
        'Instagram management, video reels, and billboard and poster design MettGlobal delivered for Ittehad Steel, a steel manufacturer in Islamabad.',
    },
  },
  {
    slug: 'serenada-mental-health',
    market: 'international',
    caseStudy: false,
    brand: 'SERENADA MENTAL HEALTH',
    sector: 'Mental health · Texas, USA',
    title: 'A patient-first website',
    accent: 'built to be found.',
    lede: 'Website design and development, with ongoing SEO, for a psychiatric and counseling practice serving Georgetown and Waco, Texas.',
    links: [
      { label: 'Visit website', href: 'https://www.serenadamentalhealth.com/' },
    ],
    panel: {
      label: 'ENGAGEMENT',
      value: 'Website and ongoing SEO.',
      copy: 'A clear route from a patient searching for help to booking an appointment.',
    },
    about: {
      heading: 'The practice',
      copy: 'Serenada Mental Health is a psychiatric clinic offering clinical counseling and medication management. Its treatments include Spravato for treatment-resistant depression, along with care for depression, anxiety, PTSD, OCD and panic attacks. Patients are often searching at a difficult moment, so the site has to be calm, clear and quick to act on.',
    },
    scope: ['Website', 'SEO'],
    delivered: {
      heading: 'What we delivered',
      copy: 'A website organised around what patients are looking for, and the search visibility to be found for it.',
      blocks: [
        {
          label: '01 / WEBSITE',
          title: 'Design and development',
          copy: 'A clean, accessible website that presents the practice with the calm and clarity patients expect.',
        },
        {
          label: '02 / SEO',
          title: 'Ongoing search optimisation',
          copy: 'Continuing SEO work so the practice is found for the conditions and treatments it provides in its local areas.',
        },
        {
          label: '03 / TREATMENTS',
          title: 'Condition and treatment pages',
          copy: 'Dedicated pages for Spravato, depression, anxiety, PTSD, OCD and panic attack treatment, so each search lands on the right answer.',
        },
        {
          label: '04 / BOOKING',
          title: 'Clear route to an appointment',
          copy: 'A prominent “Book now” action and clear location and contact details across the practice’s sites.',
        },
      ],
    },
    seo: {
      title: 'Serenada Mental Health Website & SEO | MettGlobal',
      description:
        'Website design, development and ongoing SEO MettGlobal delivered for Serenada Mental Health, a psychiatric and counseling practice in Texas.',
    },
  },
  {
    slug: 'prospect-smile',
    market: 'international',
    caseStudy: false,
    brand: 'PROSPECT SMILE',
    sector: 'Dental care · Illinois, USA',
    title: 'A modern dental website',
    accent: 'that books patients.',
    lede: 'Website design and development with local SEO for a family and cosmetic dental clinic in Mount Prospect, Illinois.',
    links: [{ label: 'Visit website', href: 'https://www.prospectsmile.com/' }],
    panel: {
      label: 'ENGAGEMENT',
      value: 'Website and local SEO.',
      copy: 'Built so a neighbour searching for a dentist can find the clinic and book in minutes.',
    },
    about: {
      heading: 'The clinic',
      copy: 'Prospect Smile is a general dentistry practice in Mount Prospect led by Dr. Jagruti Dudhatra, with a multilingual team. It offers checkups and cleanings, restorative work, implants, cosmetic treatment and emergency care, and accepts major PPO and Medicare plans.',
    },
    scope: ['Website', 'Local SEO'],
    delivered: {
      heading: 'What we delivered',
      copy: 'A website that answers the questions patients ask before they call, and local search presence to be found when they ask them.',
      blocks: [
        {
          label: '01 / WEBSITE',
          title: 'Design and development',
          copy: 'A modern, responsive website that presents the clinic and its team to families and cosmetic patients.',
        },
        {
          label: '02 / LOCAL SEO',
          title: 'Found in Mount Prospect',
          copy: 'Local search optimisation so the clinic appears for dental searches in its own area.',
        },
        {
          label: '03 / SERVICES',
          title: 'Clear treatment pages',
          copy: 'General, restorative, implant, cosmetic and emergency care, each explained on its own page.',
        },
        {
          label: '04 / PATIENT JOURNEY',
          title: 'Booking, insurance and membership',
          copy: 'Online appointment booking, insurance information and a membership plan for uninsured patients, all easy to find.',
        },
      ],
    },
    seo: {
      title: 'Prospect Smile Dental Website & Local SEO | MettGlobal',
      description:
        'Website design, development and local SEO MettGlobal delivered for Prospect Smile, a family and cosmetic dental clinic in Mount Prospect, Illinois.',
    },
  },
  {
    slug: 'luxury-ohare-limo',
    market: 'international',
    caseStudy: false,
    brand: "LUXURY O'HARE LIMO",
    sector: 'Luxury transportation · Chicago, USA',
    title: 'Chauffeur bookings,',
    accent: 'driven by search.',
    lede: 'Website design and development with SEO for airport transfers, corporate travel and event transportation across the Chicago area.',
    links: [
      { label: 'Visit website', href: 'https://www.luxuryoharelimo.com/' },
    ],
    panel: {
      label: 'ENGAGEMENT',
      value: 'Website and SEO.',
      copy: 'A premium site for a premium service, built so travellers can find it, trust it and book.',
    },
    about: {
      heading: 'The company',
      copy: 'Luxury O’Hare Limo is a chauffeured transportation service covering downtown Chicago and its suburbs. It handles airport transfers with flight tracking, corporate travel, weddings and events, and group travel, with a fleet that ranges from executive sedans to 13-seat Sprinter vans.',
    },
    scope: ['Website', 'SEO'],
    delivered: {
      heading: 'What we delivered',
      copy: 'A website that carries the premium feel of the service and turns searches for airport and event transport into booking requests.',
      blocks: [
        {
          label: '01 / WEBSITE',
          title: 'Design and development',
          copy: 'A refined, responsive website that presents the brand and the experience of travelling with it.',
        },
        {
          label: '02 / SEO',
          title: 'Search visibility',
          copy: 'SEO focused on airport transfers, corporate travel and event transportation across the Chicago area.',
        },
        {
          label: '03 / SERVICES & FLEET',
          title: 'Services and vehicles, laid out clearly',
          copy: 'Pages for airport, corporate, event and group travel, plus the fleet from sedans to Sprinter vans.',
        },
        {
          label: '04 / BOOKING & PRICING',
          title: 'A straightforward way to book',
          copy: 'A booking route and a pricing page that explains flat-rate quotes so travellers know what to expect.',
        },
      ],
    },
    seo: {
      title: "Luxury O'Hare Limo Website & SEO | MettGlobal",
      description:
        "Website design, development and SEO MettGlobal delivered for Luxury O'Hare Limo, a chauffeured transportation service in Chicago.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(project => project.slug === slug);
}
