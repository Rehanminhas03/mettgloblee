import { BOOKING_WINDOW_DAYS } from './constants';

/* Date helpers, carried over unchanged from the inline appointment script. */

/** `YYYY-MM-DD` in the visitor's local time, not UTC. */
export const isoDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`;

export const sameDay = (a: Date | null, b: Date | null) =>
  Boolean(
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate(),
  );

/** Compact UTC stamp (`20260904T100000Z`) used by both calendar formats. */
export const calendarStamp = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}Z$/, 'Z');

/** `10` -> `10:00 AM`, localised to the visitor. */
export const readableTime = (hour: number) =>
  new Date(2000, 0, 1, hour, 0).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  });

export const startOfToday = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

export const lastBookableDate = (today: Date) => {
  const max = new Date(today);
  max.setDate(max.getDate() + BOOKING_WINDOW_DAYS);
  return max;
};

export const resolveTimezone = () => {
  try {
    return (
      Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local device time'
    );
  } catch {
    return 'Local device time';
  }
};

export type CalendarCell = {
  date: Date;
  day: number;
  disabled: boolean;
  isToday: boolean;
  isSelected: boolean;
};

/**
 * Leading blanks plus one cell per day, so the month lines up under the
 * Sunday-first weekday row.
 */
export function buildMonth(
  viewMonth: Date,
  today: Date,
  maxDate: Date,
  selectedDate: Date | null,
): { blanks: number[]; days: CalendarCell[] } {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return {
    blanks: Array.from({ length: firstWeekday }, (_, i) => i),
    days: Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        date,
        day: i + 1,
        disabled: date < today || date > maxDate,
        isToday: sameDay(date, today),
        isSelected: sameDay(date, selectedDate),
      };
    }),
  };
}

const EVENT_TITLE = 'MettGlobal Discovery Meeting';
const EVENT_DETAILS =
  'Tentative MettGlobal meeting request. Final time and joining or location details are confirmed by email.';

/** Pre-filled Google Calendar event for the chosen slot. */
export function googleCalendarUrl(
  start: Date,
  durationMinutes: number,
  location: string,
  timezone: string,
) {
  const end = new Date(start.getTime() + durationMinutes * 60000);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT_TITLE,
    dates: `${calendarStamp(start)}/${calendarStamp(end)}`,
    details: EVENT_DETAILS,
    location,
    add: 'contact@mettglobal.com',
    ctz: timezone,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** The same event as an .ics payload, marked TENTATIVE. */
export function buildIcs(
  start: Date,
  durationMinutes: number,
  location: string,
) {
  const end = new Date(start.getTime() + durationMinutes * 60000);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MettGlobal//Discovery Meeting//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}-mettglobal@mettglobal.com`,
    `DTSTAMP:${calendarStamp(new Date())}`,
    `DTSTART:${calendarStamp(start)}`,
    `DTEND:${calendarStamp(end)}`,
    `SUMMARY:${EVENT_TITLE}`,
    'DESCRIPTION:Tentative MettGlobal meeting request. Final time and meeting details are confirmed by email.',
    `LOCATION:${location}`,
    'ATTENDEE;CN=MettGlobal:mailto:contact@mettglobal.com',
    'STATUS:TENTATIVE',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/** Triggers a browser download of the .ics file. */
export function downloadIcs(contents: string) {
  const url = URL.createObjectURL(
    new Blob([contents], { type: 'text/calendar;charset=utf-8' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mettglobal-discovery-meeting.ics';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
