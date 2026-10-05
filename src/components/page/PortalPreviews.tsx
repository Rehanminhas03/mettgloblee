/**
 * Illustrative previews of two portals in the Ittehad Automotive Dealerships
 * ERP — the sales manager's and the CEO's — drawn in one shared glass UI so
 * they read as the same product.
 *
 * Every figure is sample data used to show the layout and what each portal
 * brings together. The page labels them as illustrative; they must not be
 * presented as real dealership performance.
 */

type NavSection = { label: string; items: string[] };

const OVERVIEW: NavSection = {
  label: 'OVERVIEW',
  items: ['Dashboard', 'Activity', 'Notifications'],
};

const ICON_PATHS = {
  calendar:
    'M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
  users:
    'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 19c0-3 2.7-5 6-5s6 2 6 5M17 11a2.5 2.5 0 1 0 0-5M18 14c2 .4 3 2 3 4',
  document: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5',
  truck: 'M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19a1.5 1.5 0 1 0 0-.01M17 19a1.5 1.5 0 1 0 0-.01',
} as const;

const TILE_TONES = {
  blue: 'from-[#5b86f0] to-[#3558c4]',
  green: 'from-[#34c796] to-[#1d9a72]',
  orange: 'from-[#f6a363] to-[#e2742c]',
  purple: 'from-[#9372e6] to-[#5f3fc0]',
} as const;

type Tile = {
  label: string;
  value: string;
  note: string;
  icon: keyof typeof ICON_PATHS;
  tone: keyof typeof TILE_TONES;
};

const GLASS =
  'rounded-2xl border border-white/70 bg-white/45 shadow-[0_10px_30px_rgba(53,88,196,.10)] backdrop-blur-md';

function Icon({ name }: { name: keyof typeof ICON_PATHS }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

function Frame({
  label,
  role,
  initials,
  greeting,
  subtitle,
  sections,
  action,
  tiles,
  children,
}: {
  label: string;
  role: string;
  initials: string;
  greeting: string;
  subtitle: string;
  sections: NavSection[];
  action: { text: string; badge: string };
  tiles: Tile[];
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="max-b900:grid-cols-1 grid grid-cols-[230px_1fr] gap-4 overflow-hidden rounded-[26px] border border-white/60 bg-[linear-gradient(135deg,#dbe5fb_0%,#a3b6e6_55%,#bcaeea_100%)] p-4 text-[#1b2540] shadow-[0_30px_80px_rgba(38,29,13,.16)]"
    >
      {/* Sidebar */}
      <aside className={`${GLASS} max-b900:hidden p-4`}>
        <div className="mb-5 flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#1b2540] text-[11px] font-black text-[#e0bc68]">
            IA
          </span>
          <span className="text-[11px] leading-[1.15] font-black tracking-[.04em]">
            ITTEHAD
            <br />
            AUTOMOTIVE
          </span>
          <span className="ml-auto rounded-md bg-[#c5d3f6] px-2 py-0.5 text-[9px] font-black text-[#35549f]">
            DMS
          </span>
        </div>
        {sections.map(section => (
          <div key={section.label} className="mb-3">
            <div className="mb-1 px-2 text-[9px] font-black tracking-[.14em] text-[#5d6b92]">
              {section.label}
            </div>
            <ul className="m-0 grid list-none gap-0.5 p-0 text-[12px]">
              {section.items.map(item => (
                <li
                  key={item}
                  className={`rounded-xl px-3 py-[7px] ${
                    section === sections[0] && item === 'Dashboard'
                      ? 'bg-white font-bold text-[#2d4a9a] shadow-sm'
                      : 'text-[#33426b]'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main */}
      <div className="min-w-0">
        <div className={`${GLASS} mb-4 flex items-center justify-between px-4 py-2.5`}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <div className="flex items-center gap-3 text-[12px]">
            <span className="relative grid h-7 w-7 place-items-center rounded-full bg-white/70">
              <span className="absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#e5252f] px-1 text-[9px] font-bold text-white">
                9
              </span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0" />
              </svg>
            </span>
            <span className="max-b620:hidden rounded-full bg-white/70 px-3 py-1 font-semibold">
              Showroom 1
            </span>
            <span className="flex items-center gap-2 font-bold">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c5d3f6] text-[10px] font-black text-[#35549f]">
                {initials}
              </span>
              <span className="max-b620:hidden">{role}</span>
            </span>
          </div>
        </div>

        <h3 className="m-0 text-[clamp(22px,2.4vw,30px)] leading-[1.1] font-bold tracking-[-.02em]">
          {greeting}
        </h3>
        <p className="mt-1 mb-3 text-[12px] text-[#4a5a85]">{subtitle}</p>

        <div className="mb-4 inline-flex rounded-xl border border-white/70 bg-white/40 p-0.5 text-[11px] font-semibold">
          {['7 days', '14 days', '30 days', 'Custom'].map(range => (
            <span
              key={range}
              className={`rounded-[10px] px-3 py-1.5 ${
                range === '14 days' ? 'bg-white text-[#2d4a9a] shadow-sm' : 'text-[#4a5a85]'
              }`}
            >
              {range}
            </span>
          ))}
        </div>

        <div className={`${GLASS} mb-4 p-4`}>
          <div className="mb-2 flex items-center gap-2 text-[12px] font-bold">
            <span className="h-2 w-2 rounded-full bg-[#e5252f]" />
            Action needed
          </div>
          <div className="flex items-center justify-between gap-3 text-[12px]">
            <span className="flex items-center gap-3">
              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#ffd9d9] px-1.5 text-[11px] font-bold text-[#c1272d]">
                {action.badge}
              </span>
              {action.text}
            </span>
            <span className="font-bold text-[#2d4a9a]">Open →</span>
          </div>
        </div>

        <div className="max-b620:grid-cols-2 mb-4 grid grid-cols-4 gap-3">
          {tiles.map(tile => (
            <div key={tile.label} className={`${GLASS} flex items-center gap-3 p-3.5`}>
              <span
                className={`grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${TILE_TONES[tile.tone]}`}
              >
                <Icon name={tile.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] leading-tight font-semibold text-[#33426b]">
                  {tile.label}
                </span>
                <strong className="block text-[24px] leading-[1.1] tracking-[-.02em]">
                  {tile.value}
                </strong>
                <span className="block text-[10px] text-[#5d6b92]">{tile.note}</span>
              </span>
            </div>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
}

function BarList({
  title,
  note,
  rows,
}: {
  title: string;
  note: string;
  rows: { name: string; value: number }[];
}) {
  const max = Math.max(...rows.map(row => row.value));
  return (
    <div className={`${GLASS} p-4`}>
      <b className="block text-[13px]">{title}</b>
      <span className="mb-3 block text-[10px] text-[#5d6b92]">{note}</span>
      <ul className="m-0 grid list-none gap-2.5 p-0">
        {rows.map(row => (
          <li key={row.name} className="text-[11px]">
            <div className="mb-1 flex justify-between font-semibold text-[#33426b]">
              <span>{row.name}</span>
              <span>{row.value}</span>
            </div>
            <div className="h-2 rounded-full bg-white/60">
              <div
                className="h-2 rounded-full bg-[linear-gradient(90deg,#5b86f0,#8b6be0)]"
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PER_DAY = [3, 5, 4, 7, 6, 9, 5, 8, 11, 7, 6, 10, 12, 9];

function LeadsPerDay() {
  const max = Math.max(...PER_DAY);
  return (
    <div className={`${GLASS} p-4`}>
      <div className="flex items-baseline justify-between">
        <b className="text-[13px]">Leads per day</b>
        <span className="text-[11px] font-bold text-[#2d4a9a]">View all →</span>
      </div>
      <span className="mb-3 block text-[10px] text-[#5d6b92]">
        Last 14 days
      </span>
      <div className="flex h-[88px] items-end gap-1.5">
        {PER_DAY.map((value, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#7b9cf5,#4b6fd8)]"
            style={{ height: `${(value / max) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const MANAGER_NAV: NavSection[] = [
  OVERVIEW,
  {
    label: 'SALES',
    items: [
      'Leads',
      'Sales orders',
      'Open stock',
      'Deliveries',
      'Delivery report',
      'Quotations',
      'Document formats',
    ],
  },
];

const CEO_NAV: NavSection[] = [
  OVERVIEW,
  {
    label: 'GROUP',
    items: [
      'Showrooms',
      'Sales',
      'Service & after-sales',
      'Parts',
      'Accounts',
      'People & roles',
      'Reports',
    ],
  },
];

export function ManagerPortalPreview() {
  return (
    <Frame
      label="Illustrative layout of the sales manager portal: leads, approvals and deliveries at a glance"
      role="Sales Manager"
      initials="SM"
      greeting="Good morning, Sales Manager"
      subtitle="Your sales department at a glance."
      sections={MANAGER_NAV}
      action={{ badge: '3', text: 'Customer appointments today' }}
      tiles={[
        { label: 'Leads today', value: '12', note: 'Logged today', icon: 'calendar', tone: 'blue' },
        { label: 'Open leads', value: '38', note: 'of 124 total leads', icon: 'users', tone: 'green' },
        { label: 'Awaiting your approval', value: '5', note: 'Draft or submitted', icon: 'document', tone: 'orange' },
        { label: 'Delivered', value: '17', note: 'last 14 days', icon: 'truck', tone: 'purple' },
      ]}
    >
      <div className="max-b900:grid-cols-1 grid grid-cols-[1.2fr_.8fr] gap-3">
        <LeadsPerDay />
        <BarList
          title="Orders by salesperson"
          note="Orders raised, last 14 days"
          rows={[
            { name: 'Salesperson 1', value: 14 },
            { name: 'Salesperson 2', value: 11 },
            { name: 'Salesperson 3', value: 8 },
            { name: 'Salesperson 4', value: 5 },
          ]}
        />
      </div>
    </Frame>
  );
}

export function CeoPortalPreview() {
  return (
    <Frame
      label="Illustrative layout of the CEO portal: leads, bookings, deliveries and approvals across every showroom and department"
      role="CEO"
      initials="CE"
      greeting="Good morning, CEO"
      subtitle="Every showroom and department at a glance."
      sections={CEO_NAV}
      action={{ badge: '8', text: 'Approvals waiting across showrooms' }}
      tiles={[
        { label: 'Leads this month', value: '412', note: 'All showrooms', icon: 'calendar', tone: 'blue' },
        { label: 'Bookings', value: '96', note: 'All showrooms', icon: 'users', tone: 'green' },
        { label: 'Pending approvals', value: '8', note: 'Across the group', icon: 'document', tone: 'orange' },
        { label: 'Deliveries', value: '71', note: 'last 14 days', icon: 'truck', tone: 'purple' },
      ]}
    >
      <div className="max-b900:grid-cols-1 grid grid-cols-[1.2fr_.8fr] gap-3">
        <BarList
          title="Leads by showroom"
          note="This month"
          rows={[
            { name: 'Showroom 1', value: 168 },
            { name: 'Showroom 2', value: 139 },
            { name: 'Showroom 3', value: 105 },
          ]}
        />
        <div className={`${GLASS} p-4`}>
          <b className="block text-[13px]">Departments</b>
          <span className="mb-3 block text-[10px] text-[#5d6b92]">
            One summary for each
          </span>
          <ul className="m-0 grid list-none gap-2 p-0 text-[11px]">
            {[
              ['Sales', 'Leads and bookings'],
              ['Service & after-sales', 'Open jobs'],
              ['Parts', 'Orders and stock'],
              ['Accounts', 'Invoices and collections'],
            ].map(([name, note]) => (
              <li key={name} className="flex justify-between gap-3">
                <b>{name}</b>
                <span className="text-[#5d6b92]">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}
