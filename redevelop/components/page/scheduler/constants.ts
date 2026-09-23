/** Booking options and shared class strings for the meeting scheduler. */

/** Hours offered each day, matching `preferredTimes` in the original script. */
export const PREFERRED_HOURS = [10, 11, 12, 14, 15, 16, 17, 18];

/** How far ahead the calendar can be booked, in days. */
export const BOOKING_WINDOW_DAYS = 60;

export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MEETING_TYPES = [
  { value: 'Online meeting', label: 'Online' },
  { value: 'In-person meeting', label: 'In person' },
];

export const DURATIONS = [
  { value: '30 minutes', label: '30 min' },
  { value: '45 minutes', label: '45 min' },
  { value: '60 minutes', label: '60 min' },
];

export const TOPICS = [
  { value: 'General / multi-service discussion', label: 'General' },
  { value: 'eCommerce growth & operations', label: 'eCommerce' },
  { value: 'Web development & conversion', label: 'Web & CRO' },
  { value: 'AI automation', label: 'AI automation' },
  { value: 'Digital marketing & creative', label: 'Growth & creative' },
  {
    value: 'Supply chain, operations or sales systems',
    label: 'Operations & sales',
  },
];

export const KICKER = 'text-[10px] font-black tracking-[.18em] text-p-gold';

export const CHOICE_LABEL =
  'mb-[9px] block text-[10px] font-black uppercase tracking-[.12em] text-[#5f594f]';

export const DARK_FIELD_LABEL =
  'grid gap-[6px] text-[9px] font-black uppercase tracking-[.1em] text-[#b7b1a7]';

export const DARK_FIELD =
  'w-full rounded-[11px] border border-[#3a3730] bg-[#1a1916] px-[13px] py-3 text-white';

export const PANEL_BUTTON =
  'mt-4 min-h-12 w-full cursor-pointer rounded-xl border-0 bg-p-gold font-black text-white';
