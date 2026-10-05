import type { CalendarCell } from './calendar';
import { KICKER, WEEKDAYS } from './constants';

const NAV_BUTTON =
  'h-10 w-10 cursor-pointer rounded-full border border-p-line bg-white text-2xl text-p-ink disabled:cursor-not-allowed disabled:opacity-[.28]';

const GRID = 'grid grid-cols-7 gap-2 max-b620:gap-[5px] max-b430:gap-1';

/** `.calendar-panel` — month header, weekday row and the day grid. */
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
      className="max-b620:p-[22px] min-w-0 bg-white p-[30px]"
    >
      <div className="mb-[26px] flex items-center justify-between gap-5">
        <div>
          <span className={KICKER}>SELECT A DATE</span>
          <h3 className="mt-[7px] mb-0 text-[26px] tracking-[-.035em]">
            {monthLabel}
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous month"
            disabled={prevDisabled}
            onClick={onPrev}
            className={NAV_BUTTON}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next month"
            disabled={nextDisabled}
            onClick={onNext}
            className={NAV_BUTTON}
          >
            ›
          </button>
        </div>
      </div>

      <div aria-hidden="true" className={`${GRID} mb-2`}>
        {WEEKDAYS.map(weekday => (
          <span
            key={weekday}
            className="text-p-muted text-center text-[10px] font-extrabold tracking-[.08em] uppercase"
          >
            {weekday}
          </span>
        ))}
      </div>

      <div className={GRID}>
        {cells?.blanks.map(index => (
          <span key={`blank-${index}`} className="aspect-square" />
        ))}
        {cells?.days.map(cell => (
          <button
            key={cell.day}
            type="button"
            disabled={cell.disabled}
            aria-label={cell.date.toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            onClick={() => onPick(cell.date)}
            className={`max-b620:rounded-[10px] max-b430:rounded-[9px] aspect-square cursor-pointer rounded-[14px] border text-[13px] font-extrabold transition-[transform,border-color,background] duration-[.18s] disabled:cursor-not-allowed disabled:opacity-25 ${
              cell.isSelected
                ? 'border-p-ink bg-p-ink text-white'
                : `text-p-ink bg-[#f7f3ea] ${
                    cell.isToday ? 'border-[#cfc4af]' : 'border-transparent'
                  } ${
                    cell.disabled
                      ? ''
                      : 'hover:border-p-gold hover:-translate-y-[2px]'
                  }`
            }`}
          >
            {cell.day}
          </button>
        ))}
      </div>
    </section>
  );
}
