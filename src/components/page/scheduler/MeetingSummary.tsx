import { ADDRESS_LINE, MAPS_URL } from '@/lib/site';
import { DURATIONS, MEETING_TYPES, TOPICS } from './constants';
import styles from './booking.module.css';

function Choice({
  name,
  value,
  label,
  defaultChecked,
  onChange,
  icon,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  icon?: 'online' | 'office';
}) {
  return (
    <label className={styles.choice}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={() => onChange?.(value)}
      />
      <span className={styles.chip}>
        {icon && (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon === 'online' ? (
              <>
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M12 17v4m-4 0h8" />
              </>
            ) : (
              <>
                <path d="M4 21V5l8-3 8 3v16M2 21h20m-13 0v-5h6v5M8 8h1m6 0h1M8 12h1m6 0h1" />
              </>
            )}
          </svg>
        )}
        {label}
      </span>
    </label>
  );
}
export function MeetingSummary({
  timezone,
  meetingType,
  onMeetingTypeChange,
  onDurationChange,
}: {
  timezone: string;
  meetingType: string;
  onMeetingTypeChange: (value: string) => void;
  onDurationChange: (value: string) => void;
}) {
  const office = meetingType === 'In-person meeting';
  return (
    <aside className={styles.summary}>
      <div className={styles.brand}>
        <span aria-hidden="true" className={styles.brandMark}>
          M
        </span>
        METT GLOBAL
      </div>
      <h2>
        Let’s find your
        <br />
        next step.
      </h2>
      <p className={styles.description}>
        Tell us what you’re working on and where you need a hand. We’ll start
        with a focused conversation.
      </p>
      <fieldset className={styles.optionSet}>
        <legend className={styles.label}>How would you like to meet?</legend>
        <div className={styles.formats}>
          {MEETING_TYPES.map((option, index) => (
            <Choice
              key={option.value}
              name="meeting_type"
              value={option.value}
              label={index === 0 ? 'Online call' : 'Office visit'}
              icon={index === 0 ? 'online' : 'office'}
              defaultChecked={index === 0}
              onChange={onMeetingTypeChange}
            />
          ))}
        </div>
      </fieldset>
      <p className={styles.location}>
        {office ? (
          <>
            {ADDRESS_LINE}
            <br />
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Get directions ↗
            </a>
          </>
        ) : (
          'Online · Joining details follow by email.'
        )}
      </p>
      <fieldset className={styles.optionSet}>
        <legend className={styles.label}>Meeting length</legend>
        <div className={styles.durations}>
          {DURATIONS.map((option, index) => (
            <Choice
              key={option.value}
              name="duration"
              value={option.value}
              label={option.label}
              defaultChecked={index === 0}
              onChange={onDurationChange}
            />
          ))}
        </div>
      </fieldset>
      <div className={styles.optionSet}>
        <label className={styles.label} htmlFor="meeting-topic">
          What would you like to discuss?
        </label>
        <select
          id="meeting-topic"
          className={styles.topic}
          name="topic"
          defaultValue={TOPICS[0].value}
        >
          {TOPICS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.timezone}>
        YOUR TIME ZONE
        <strong>
          {timezone === 'Not detected'
            ? 'Detecting your time zone…'
            : timezone.replaceAll('_', ' ')}
        </strong>
        Times are shown in your device’s time zone. All meetings are confirmed
        by email.
      </div>
    </aside>
  );
}
