/** Booking options and shared class strings for the meeting scheduler. */

/** Any hourly start can be requested; the team confirms availability by email. */
export const PREFERRED_HOURS = Array.from({ length: 24 }, (_, hour) => hour);

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
  { value: 'Digital Marketing & Growth', label: 'Marketing & growth' },
  { value: 'Web & Software Development', label: 'Web & software' },
  { value: 'AI Automation & Content', label: 'AI automation' },
  { value: 'E-Commerce & Supply Chain', label: 'E-commerce & supply chain' },
];
