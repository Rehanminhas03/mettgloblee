import { useState } from 'react';
import { readableTime } from './calendar';
import { PREFERRED_HOURS } from './constants';
import styles from './booking.module.css';
import { ContactInput } from '../ContactInput';

const PERIODS = [
  { start: 0, label: 'Night', range: '12am–6am' },
  { start: 6, label: 'Morning', range: '6am–12pm' },
  { start: 12, label: 'Afternoon', range: '12pm–6pm' },
  { start: 18, label: 'Evening', range: '6pm–12am' },
];
function SlotStage({
  dayLabel,
  timezone,
  hasDate,
  selectedTime,
  pastHours,
  onPick,
  onContinue,
}: {
  dayLabel: string;
  timezone: string;
  hasDate: boolean;
  selectedTime: string;
  pastHours: number[];
  onPick: (hour: number) => void;
  onContinue: () => void;
}) {
  const [period, setPeriod] = useState(6);
  const available = (start: number) =>
    PREFERRED_HOURS.some(
      hour => hour >= start && hour < start + 6 && !pastHours.includes(hour),
    );
  const current = available(period)
    ? period
    : (PERIODS.find(p => available(p.start))?.start ?? period);
  return (
    <div>
      <span className={styles.kicker}>PREFERRED START TIME</span>
      <h3>{hasDate ? dayLabel : 'Pick your date first.'}</h3>
      <p className={styles.slotZone}>
        Times in {timezone.replaceAll('_', ' ')}
      </p>
      <p className={styles.slotDescription}>
        {hasDate
          ? 'All 24 hours are available to request. Choose a part of the day.'
          : 'Choose a day on the calendar, then pick a time that works for you.'}
      </p>
      {hasDate ? (
        <>
          <div className={styles.periods} role="group" aria-label="Part of day">
            {PERIODS.map(p => (
              <button
                type="button"
                key={p.start}
                aria-pressed={current === p.start}
                disabled={!available(p.start)}
                onClick={() => setPeriod(p.start)}
              >
                {p.label}
                <small>{p.range}</small>
              </button>
            ))}
          </div>
          <div
            role="group"
            aria-label="Preferred meeting times"
            className={styles.times}
          >
            {PREFERRED_HOURS.filter(
              hour => hour >= current && hour < current + 6,
            ).map(hour => (
              <button
                className={styles.time}
                type="button"
                key={hour}
                aria-pressed={
                  selectedTime === String(hour).padStart(2, '0') + ':00'
                }
                disabled={pastHours.includes(hour)}
                onClick={() => onPick(hour)}
              >
                {readableTime(hour)}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M7 2v6m10-6v6M3 11h18m-11 4h4" />
          </svg>
          <span>
            A time that fits
            <br />
            your working day.
          </span>
        </div>
      )}
      {hasDate && pastHours.length === 24 && (
        <p className={styles.slotDescription}>
          No times remain today. Please choose another date.
        </p>
      )}
      {selectedTime && (
        <p className={styles.selectedTime}>
          Selected:{' '}
          <strong>{readableTime(Number(selectedTime.split(':')[0]))}</strong>
        </p>
      )}
      <button
        type="button"
        disabled={!selectedTime}
        onClick={onContinue}
        className={styles.primary}
      >
        Continue <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
function DetailsStage({
  summary,
  googleCalendarHref,
  onDownloadIcs,
  onBack,
  nameRef,
  sending,
  uncertain,
}: {
  summary: string;
  googleCalendarHref: string;
  onDownloadIcs: () => void;
  onBack: () => void;
  nameRef: React.RefObject<HTMLInputElement | null>;
  sending: boolean;
  uncertain: boolean;
}) {
  return (
    <div>
      <button type="button" className={styles.back} onClick={onBack}>
        ← Change time
      </button>
      <h3 className={styles.detailsTitle}>A few details, then we’re set.</h3>
      <p className={styles.summaryLine}>{summary}</p>
      <div className={styles.fields}>
        <label>
          Name
          <input
            ref={nameRef}
            name="name"
            maxLength={100}
            required
            autoComplete="name"
          />
        </label>
        <label>
          Email
          <ContactInput kind="email" maxLength={254} required />
        </label>
        <label>
          <span>
            Phone / WhatsApp <span className={styles.optional}>(optional)</span>
          </span>
          <ContactInput
            kind="phone"
            maxLength={30}
            placeholder="+1 713 555 0123"
          />
        </label>
        <label>
          <span>
            Company <span className={styles.optional}>(optional)</span>
          </span>
          <input name="company" maxLength={120} autoComplete="organization" />
        </label>
        <label className={styles.full}>
          <span>
            Anything we should prepare?{' '}
            <span className={styles.optional}>(optional)</span>
          </span>
          <textarea
            name="meeting_context"
            maxLength={3000}
            placeholder="A little context about your business or what you’d like to discuss."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className={styles.primary}
      >
        {sending
          ? 'Sending…'
          : uncertain
            ? 'Send again (may duplicate)'
            : 'Request this meeting'}
      </button>
      <p className={styles.confirmationNote}>
        Your request goes to contact@mettglobal.com. We’ll confirm the time and
        joining details or office arrangements by email.
      </p>
      <details className={styles.hold}>
        <summary>Optional: add a tentative calendar hold</summary>
        <div className={styles.holdActions}>
          <a
            href={googleCalendarHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Calendar ↗
          </a>
          <button type="button" onClick={onDownloadIcs}>
            Apple / Outlook (.ics)
          </button>
        </div>
        <p>
          This holds the proposed time in your calendar. It does not confirm
          availability with Mett Global.
        </p>
      </details>
    </div>
  );
}
export function SlotPanel(props: {
  showDetails: boolean;
  dayLabel: string;
  timezone: string;
  hasDate: boolean;
  selectedTime: string;
  pastHours: number[];
  onPick: (hour: number) => void;
  onContinue: () => void;
  summary: string;
  googleCalendarHref: string;
  onDownloadIcs: () => void;
  onBack: () => void;
  nameRef: React.RefObject<HTMLInputElement | null>;
  sending: boolean;
  uncertain: boolean;
}) {
  return (
    <aside className={styles.slotPanel}>
      <fieldset
        hidden={!props.showDetails}
        disabled={!props.showDetails}
        className={styles.detailsFieldset}
      >
        <DetailsStage {...props} />
      </fieldset>
      <div hidden={props.showDetails}>
        <SlotStage {...props} />
      </div>
    </aside>
  );
}
