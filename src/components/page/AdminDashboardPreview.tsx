/**
 * Illustrative preview of the SFYKEA admin portal for its case study.
 *
 * Every figure below is sample data used only to show the layout and the
 * kinds of information the portal reports. It is labelled as such on the page
 * and must not be presented as real SFYKEA performance.
 */

const TILES = [
  { label: 'Orders today', value: '48' },
  { label: 'Slots booked', value: '62' },
  { label: 'Active riders', value: '14' },
  { label: 'Partners', value: '3' },
];

const AREAS = [
  { name: 'Gulberg', value: 24 },
  { name: 'Naval Anchorage', value: 18 },
  { name: 'Area C', value: 11 },
  { name: 'Area D', value: 9 },
];

const BOOKINGS = [
  {
    id: 'BK-1042',
    customer: 'Customer A',
    area: 'Gulberg',
    slot: 'Tomorrow, 4:00 PM',
    rider: 'Rider 03',
    status: 'Assigned',
  },
  {
    id: 'BK-1041',
    customer: 'Customer B',
    area: 'Naval Anchorage',
    slot: 'Today, 2:00 PM',
    rider: 'Rider 07',
    status: 'In progress',
  },
  {
    id: 'BK-1040',
    customer: 'Customer C',
    area: 'Gulberg',
    slot: 'Today, 11:00 AM',
    rider: 'Rider 03',
    status: 'Completed',
  },
  {
    id: 'BK-1039',
    customer: 'Customer D',
    area: 'Area C',
    slot: 'Today, 10:00 AM',
    rider: 'Rider 11',
    status: 'Completed',
  },
];

const PARTNERS = [
  { name: 'Partner 1', area: 'Gulberg', riders: 6 },
  { name: 'Partner 2', area: 'Naval Anchorage', riders: 5 },
  { name: 'Partner 3', area: 'Area C', riders: 3 },
];

const STATUS: Record<string, string> = {
  Assigned: 'bg-[#2a2415] text-[#e0bc68]',
  'In progress': 'bg-[#1a2a3a] text-[#8fc1f0]',
  Completed: 'bg-[#16291d] text-[#7fd49a]',
};

const NAV = ['Dashboard', 'Bookings', 'Customers', 'Riders', 'Partners', 'Areas'];

export function AdminDashboardPreview() {
  const max = Math.max(...AREAS.map(area => area.value));

  return (
    <figure className="m-0">
      <div
        role="img"
        aria-label="Illustrative layout of the SFYKEA admin portal dashboard, showing today's orders, slots booked, riders, partners, bookings by area and recent bookings"
        className="max-b900:grid-cols-1 grid grid-cols-[200px_1fr] overflow-hidden rounded-[26px] border border-[#2d2a23] bg-[#0f0f0d] text-white shadow-[0_30px_80px_rgba(38,29,13,.18)]"
      >
        {/* Sidebar */}
        <aside className="max-b900:hidden border-r border-[#26231e] bg-[#12120f] p-5">
          <div className="text-p-gold2 mb-6 text-[11px] font-black tracking-[.2em]">
            SFYKEA ADMIN
          </div>
          <ul className="m-0 grid list-none gap-1 p-0 text-[13px]">
            {NAV.map((item, index) => (
              <li
                key={item}
                className={`rounded-lg px-3 py-2 ${
                  index === 0
                    ? 'bg-[#2a2415] font-bold text-[#e0bc68]'
                    : 'text-[#a8a398]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div className="p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <strong className="text-[18px] tracking-[-.02em]">Overview</strong>
            <span className="rounded-full border border-[#37332b] px-3 py-1 text-[10px] font-bold tracking-[.1em] text-[#a8a398] uppercase">
              All areas · Today
            </span>
          </div>

          <div className="max-b620:grid-cols-2 mb-5 grid grid-cols-4 gap-3">
            {TILES.map(tile => (
              <div
                key={tile.label}
                className="rounded-2xl border border-[#2d2a23] bg-[#151513] p-4"
              >
                <strong className="text-p-gold2 block text-[30px] leading-none tracking-[-.04em]">
                  {tile.value}
                </strong>
                <span className="mt-2 block text-[10px] tracking-[.1em] text-[#a8a398] uppercase">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>

          <div className="max-b900:grid-cols-1 mb-5 grid grid-cols-[1.1fr_.9fr] gap-3">
            <div className="rounded-2xl border border-[#2d2a23] bg-[#151513] p-5">
              <small className="text-p-gold2 text-[10px] font-black tracking-[.14em]">
                BOOKINGS BY AREA
              </small>
              <ul className="m-0 mt-4 grid list-none gap-3 p-0">
                {AREAS.map(area => (
                  <li key={area.name} className="text-[12px]">
                    <div className="mb-1 flex justify-between text-[#d4cfc4]">
                      <span>{area.name}</span>
                      <span className="font-bold">{area.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#26231e]">
                      <div
                        className="bg-p-gold2 h-2 rounded-full"
                        style={{ width: `${(area.value / max) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#2d2a23] bg-[#151513] p-5">
              <small className="text-p-gold2 text-[10px] font-black tracking-[.14em]">
                PARTNERS & RIDERS
              </small>
              <ul className="m-0 mt-4 grid list-none gap-3 p-0">
                {PARTNERS.map(partner => (
                  <li
                    key={partner.name}
                    className="flex items-center justify-between gap-3 border-b border-[#26231e] pb-3 text-[12px] last:border-b-0 last:pb-0"
                  >
                    <span>
                      <b className="block text-[13px]">{partner.name}</b>
                      <span className="text-[#a8a398]">{partner.area}</span>
                    </span>
                    <span className="text-[#d4cfc4]">
                      {partner.riders} riders
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#2d2a23] bg-[#151513]">
            <table className="w-full min-w-[560px] border-collapse text-left text-[12px]">
              <caption className="text-p-gold2 p-5 pb-3 text-left text-[10px] font-black tracking-[.14em]">
                RECENT BOOKINGS
              </caption>
              <thead>
                <tr className="text-[10px] tracking-[.1em] text-[#8a857b] uppercase">
                  {['Booking', 'Customer', 'Area', 'Slot', 'Rider', 'Status'].map(
                    heading => (
                      <th key={heading} scope="col" className="px-5 py-2 font-bold">
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {BOOKINGS.map(booking => (
                  <tr key={booking.id} className="border-t border-[#26231e]">
                    <td className="px-5 py-3 font-bold">{booking.id}</td>
                    <td className="px-5 py-3 text-[#d4cfc4]">
                      {booking.customer}
                    </td>
                    <td className="px-5 py-3 text-[#d4cfc4]">{booking.area}</td>
                    <td className="px-5 py-3 text-[#d4cfc4]">{booking.slot}</td>
                    <td className="px-5 py-3 text-[#d4cfc4]">{booking.rider}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold ${STATUS[booking.status]}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <figcaption className="text-p-muted mt-4 text-xs leading-[1.65]">
        Illustrative layout of the admin portal with sample figures — it shows
        what the portal tracks (orders, slots, riders, partners and areas), not
        real SFYKEA performance.
      </figcaption>
    </figure>
  );
}
