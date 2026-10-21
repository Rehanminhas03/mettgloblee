'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useHydrated } from '@/hooks/useHydrated';
import Link from 'next/link';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { SubmissionFeedback } from '../SubmissionFeedback';
import { track } from '@/lib/track';
import { FormWithoutJavaScript } from '../FormWithoutJavaScript';
import { CalendarPanel } from './CalendarPanel';
import styles from './booking.module.css';
import { MeetingSummary } from './MeetingSummary';
import { SlotPanel } from './SlotPanel';
import { PREFERRED_HOURS } from './constants';
import {
  buildIcs,
  buildMonth,
  downloadIcs,
  googleCalendarUrl,
  isoDate,
  lastBookableDate,
  readableTime,
  resolveTimezone,
  startOfToday,
} from './calendar';

/**
 * Calendar-first meeting scheduler.
 *
 * Port of the inline script in appointment.html: a 60-day booking window,
 * fixed preferred hours, a two-stage flow (slot then details) and tentative
 * Google Calendar / .ics holds for the chosen slot. The request goes to the
 * same FormSubmit inbox in the background and a confirmation replaces the
 * calendar, so the visitor never leaves the page.
 */
export function Scheduler() {
  /* The visitor's date and timezone are only knowable in the browser, so they
     are derived from hydration rather than assigned in an effect. */
  const hydrated = useHydrated();

  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [status, setStatus] = useState('Select a date and time to continue.');
  const submission = useFormSubmission();
  const [sent, setSent] = useState(false);
  const [meetingType, setMeetingType] = useState('Online meeting');
  const [duration, setDuration] = useState('30 minutes');

  const nameInput = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sent) confirmationRef.current?.focus();
  }, [sent]);

  const today = useMemo(() => (hydrated ? startOfToday() : null), [hydrated]);
  const maxDate = useMemo(
    () => (today ? lastBookableDate(today) : null),
    [today],
  );
  const timezone = useMemo(
    () => (hydrated ? resolveTimezone() : 'Not detected'),
    [hydrated],
  );

  /* The visible month is the current month plus however many steps the
     visitor has taken, so it needs no state of its own. */
  const viewMonth = useMemo(
    () =>
      today
        ? new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
        : null,
    [today, monthOffset],
  );

  const cells = useMemo(
    () =>
      viewMonth && today && maxDate
        ? buildMonth(viewMonth, today, maxDate, selectedDate)
        : null,
    [viewMonth, today, maxDate, selectedDate],
  );

  const dayLabel = selectedDate
    ? selectedDate.toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : 'Choose a date first';

  const selectedReadableTime = selectedTime
    ? readableTime(Number(selectedTime.split(':')[0]))
    : '';

  const pastHours = useMemo(() => {
    if (!selectedDate) return [];
    const now = new Date();
    return PREFERRED_HOURS.filter(
      hour =>
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          hour,
        ) <= now,
    );
  }, [selectedDate]);

  const durationMinutes = Number.parseInt(duration, 10) || 30;

  const meetingLocation =
    meetingType === 'Online meeting'
      ? 'Online, joining details to follow'
      : 'In person, location to be confirmed';

  const startDate = useMemo(() => {
    if (!selectedDate || !selectedTime) return null;
    const [hour, minute] = selectedTime.split(':').map(Number);
    return new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour,
      minute,
      0,
      0,
    );
  }, [selectedDate, selectedTime]);

  const googleCalendarHref = startDate
    ? googleCalendarUrl(startDate, durationMinutes, meetingLocation, timezone)
    : '#';

  const onDownloadIcs = () => {
    if (!startDate) return;
    downloadIcs(buildIcs(startDate, durationMinutes, meetingLocation));
  };

  const monthStart = (date: Date, offset: number) =>
    new Date(date.getFullYear(), date.getMonth() + offset, 1);

  const prevDisabled =
    !viewMonth || !today || monthStart(viewMonth, -1) < monthStart(today, 0);

  const nextDisabled =
    !viewMonth || !maxDate || monthStart(viewMonth, 1) > monthStart(maxDate, 0);

  const pickDate = (date: Date) => {
    submission.onEdit();
    setSelectedDate(date);
    setSelectedTime('');
    setShowDetails(false);
    setStatus('Date selected. Choose a preferred time.');
  };

  const pickTime = (hour: number) => {
    submission.onEdit();
    setSelectedTime(`${String(hour).padStart(2, '0')}:00`);
    setStatus(`${dayLabel} · ${readableTime(hour)} · ${timezone}`);
  };

  const onContinue = () => {
    if (!selectedDate || !selectedTime) return;
    if (!startDate || startDate <= new Date()) {
      setSelectedDate(new Date(selectedDate));
      setSelectedTime('');
      setStatus('That time has passed. Please choose a future date and time.');
      return;
    }
    setShowDetails(true);
    setStatus('Time selected. Add your details to request the meeting.');
    window.setTimeout(() => nameInput.current?.focus(), 0);
  };

  /* The hidden date/time fields are the source of truth for the submission,
     so an empty slot blocks the post rather than sending a blank request. */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hydrated || submission.sending) return;
    if (!(selectedDate && selectedTime)) {
      setStatus('Please select a date and time before submitting.');
      statusRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }
    const form = event.currentTarget;
    if (!startDate || startDate <= new Date()) {
      setSelectedDate(new Date(selectedDate));
      setSelectedTime('');
      setShowDetails(false);
      setStatus('That time has passed. Please choose a future date and time.');
      statusRef.current?.scrollIntoView({ block: 'center' });
      return;
    }
    const result = await submission.submit(form);
    if (result?.outcome === 'accepted') {
      if (!result.edited) setSent(true);
      track('meeting_request', { meeting_type: meetingType });
    }
  };

  if (sent) {
    return (
      <section className="max-b760:px-[18px] max-b760:pb-[70px] px-[6vw] pt-5 pb-24">
        <div
          role="status"
          ref={confirmationRef}
          tabIndex={-1}
          className="border-p-line mx-auto max-w-[760px] rounded-[30px] border bg-white p-10 shadow-[0_30px_90px_rgba(32,26,15,.08)]"
        >
          <span
            aria-hidden="true"
            className="bg-p-gold mb-5 grid h-12 w-12 place-items-center rounded-full text-xl font-black text-white"
          >
            ✓
          </span>
          <h2 className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.05] tracking-[-.04em]">
            Meeting request submitted.
          </h2>
          <p className="text-p-muted my-4 leading-[1.7]">
            {dayLabel} · {selectedReadableTime} ({timezone}). We will confirm
            the time by email. You can also hold the slot in your own calendar.
          </p>
          <p className="text-p-muted text-xs break-all">
            Reference: {submission.requestId}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={googleCalendarHref}
              target="_blank"
              rel="noopener"
              className="border-p-ink bg-p-ink rounded-full border px-5 py-[15px] text-xs font-extrabold text-white"
            >
              Add to Google Calendar
            </a>
            <button
              type="button"
              onClick={onDownloadIcs}
              className="border-p-line cursor-pointer rounded-full border bg-white px-5 py-[15px] text-xs font-extrabold"
            >
              Download .ics
            </button>
            <Link
              href="/"
              className="border-p-line rounded-full border px-5 py-[15px] text-xs font-extrabold"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.scheduler}>
      <FormWithoutJavaScript />
      <form
        method="post"
        data-js-form
        id="scheduler-form"
        onSubmit={onSubmit}
        onChange={submission.onEdit}
        className="mx-auto"
      >
        <input
          type="hidden"
          name="_subject"
          value="New Mett Global meeting request"
        />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="visitor_timezone" value={timezone} />
        <input
          type="hidden"
          name="preferred_date"
          value={selectedDate ? isoDate(selectedDate) : ''}
        />
        <input type="hidden" name="preferred_time" value={selectedTime} />
        <input
          type="hidden"
          name="preferred_start"
          value={startDate?.toISOString() || ''}
        />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {/* .scheduler-card */}
        <fieldset className="m-0 contents border-0 p-0">
          <div className={styles.workspace}>
            <MeetingSummary
              timezone={timezone}
              meetingType={meetingType}
              onMeetingTypeChange={setMeetingType}
              onDurationChange={setDuration}
            />

            <div
              className={styles.bookingArea}
              data-stage={showDetails ? 'details' : 'time'}
            >
              <div className={styles.steps}>
                <h2>
                  {showDetails
                    ? 'Your meeting request'
                    : 'Choose a preferred time.'}
                </h2>
                <ol
                  className={styles.stepList}
                  aria-label="Meeting request steps"
                >
                  <li aria-current={!showDetails ? 'step' : undefined}>
                    <span>1</span>Date & time
                  </li>
                  <li aria-current={showDetails ? 'step' : undefined}>
                    <span>2</span>Your details
                  </li>
                </ol>
              </div>
              <div hidden={showDetails}>
                <CalendarPanel
                  monthLabel={
                    viewMonth
                      ? viewMonth.toLocaleDateString(undefined, {
                          month: 'long',
                          year: 'numeric',
                        })
                      : 'Month'
                  }
                  cells={cells}
                  prevDisabled={prevDisabled}
                  nextDisabled={nextDisabled}
                  onPrev={() => setMonthOffset(monthOffset - 1)}
                  onNext={() => setMonthOffset(monthOffset + 1)}
                  onPick={pickDate}
                />
              </div>
              <SlotPanel
                showDetails={showDetails}
                dayLabel={dayLabel}
                timezone={timezone}
                hasDate={Boolean(selectedDate)}
                selectedTime={selectedTime}
                pastHours={pastHours}
                onPick={pickTime}
                onContinue={onContinue}
                summary={`${dayLabel} · ${selectedReadableTime} (${timezone})`}
                googleCalendarHref={googleCalendarHref}
                onDownloadIcs={onDownloadIcs}
                onBack={() => setShowDetails(false)}
                nameRef={nameInput}
                sending={submission.sending || !hydrated}
                uncertain={submission.state === 'unconfirmed'}
              />
            </div>
          </div>
        </fieldset>

        {/* .booking-status */}
        <div ref={statusRef} className={styles.status}>
          {submission.state === 'idle' ? (
            <p className="m-0" role="status">
              {status}
            </p>
          ) : (
            <SubmissionFeedback {...submission} meeting />
          )}
        </div>
      </form>
    </section>
  );
}
