import type { CalendarCell } from './calendar';
import { WEEKDAYS } from './constants';
import styles from './booking.module.css';

export function CalendarPanel({
  monthLabel,
  cells,
  prevDisabled,
  nextDisabled,
  onPrev,
  onNext,
  onPick,
}: {
  monthLabel: string;
  cells: { blanks: number[]; days: CalendarCell[] } | null;
  prevDisabled: boolean;
  nextDisabled: boolean;
  onPrev: () => void;
  onNext: () => void;
  onPick: (date: Date) => void;
}) {
  return (
    <section
      aria-label="Choose preferred meeting date"
      className={styles.calendar}
    >
      <div className={styles.month}>
        <h3>{monthLabel}</h3>
        <div className={styles.nav}>
          <button
            type="button"
            aria-label="Previous month"
            disabled={prevDisabled}
            onClick={onPrev}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m10 3-5 5 5 5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next month"
            disabled={nextDisabled}
            onClick={onNext}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m6 3 5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className={styles.days}>
        {WEEKDAYS.map(day => (
          <span className={styles.weekday} key={day}>
            {day}
          </span>
        ))}
      </div>
      <div className={styles.days}>
        {cells?.blanks.map(i => (
          <span key={'blank' + i} />
        ))}
        {cells?.days.map(cell => (
          <button
            key={cell.day}
            type="button"
            className={styles.day}
            disabled={cell.disabled}
            aria-pressed={cell.isSelected}
            data-today={cell.isToday}
            aria-label={cell.date.toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            onClick={() => onPick(cell.date)}
          >
            {cell.day}
          </button>
        ))}
      </div>
      <p className={styles.calendarNote}>
        Choose a preferred date within the next 60 days. Your meeting is
        confirmed when our team replies.
      </p>
    </section>
  );
}
