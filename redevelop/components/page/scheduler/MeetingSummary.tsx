import {
  CHOICE_LABEL,
  DURATIONS,
  KICKER,
  MEETING_TYPES,
  TOPICS,
} from './constants';

const CHIP =
  'flex min-h-[42px] cursor-pointer items-center justify-center rounded-xl border border-p-line bg-white px-[10px] py-[9px] text-center text-[11px] font-extrabold text-[#4d483f] transition-[border-color,background,color] duration-[.18s] peer-checked:border-p-gold peer-checked:bg-[#fff7e7] peer-checked:text-[#6e4c0e] peer-checked:shadow-[inset_0_0_0_1px_rgba(201,152,44,.28)]';

/** `.choice-chip` — a radio input hidden behind its styled label. */
function ChoiceChip({
  name,
  value,
  label,
  defaultChecked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="relative">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={() => onChange?.(value)}
        className="peer pointer-events-none absolute opacity-0"
      />
      <span className={CHIP}>{label}</span>
    </label>
  );
}

/**
 * `.meeting-summary` — the left rail: meeting format, duration, topic and the
 * detected timezone.
 */
export function MeetingSummary({
  timezone,
  onMeetingTypeChange,
  onDurationChange,
}: {
  timezone: string;
  onMeetingTypeChange: (value: string) => void;
  onDurationChange: (value: string) => void;
}) {
  return (
    <aside className="border-p-line max-b760:border-r-0 max-b760:border-b max-b760:p-[22px] min-w-0 border-r bg-[#f8f4ec] p-[30px]">
      <span className={KICKER}>METTGLOBAL DISCOVERY MEETING</span>
      <h2 className="mt-3 mb-4 text-[34px] leading-none tracking-[-.045em]">
        Start with the problem.
      </h2>
      <p className="text-p-muted my-[1em] text-[13px] leading-[1.65]">
        Use this first conversation to explain the constraint, current setup and
        outcome you want.
      </p>

      <div className="mt-[26px]">
        <span className={CHOICE_LABEL}>Meeting format</span>
        <div className="grid grid-cols-2 gap-2">
          {MEETING_TYPES.map((option, index) => (
            <ChoiceChip
              key={option.value}
              name="meeting_type"
              value={option.value}
              label={option.label}
              defaultChecked={index === 0}
              onChange={onMeetingTypeChange}
            />
          ))}
        </div>
      </div>

      <div className="mt-[26px]">
        <span className={CHOICE_LABEL}>Duration</span>
        <div className="max-b430:grid-cols-1 grid grid-cols-3 gap-2">
          {DURATIONS.map((option, index) => (
            <ChoiceChip
              key={option.value}
              name="duration"
              value={option.value}
              label={option.label}
              defaultChecked={index === 0}
              onChange={onDurationChange}
            />
          ))}
        </div>
      </div>

      <div className="mt-[26px]">
        <span className={CHOICE_LABEL}>Topic</span>
        <div className="max-b430:grid-cols-1 grid grid-cols-2 gap-2">
          {TOPICS.map((option, index) => (
            <ChoiceChip
              key={option.value}
              name="topic"
              value={option.value}
              label={option.label}
              defaultChecked={index === 0}
            />
          ))}
        </div>
      </div>

      {/* .timezone-card */}
      <div className="border-p-line mt-7 grid gap-1 border-t pt-[18px]">
        <span className="text-p-muted text-[10px] font-extrabold tracking-[.1em] uppercase">
          Your timezone
        </span>
        <strong className="text-[13px]">
          {timezone === 'Not detected' ? 'Detecting…' : timezone}
        </strong>
        <small className="text-p-muted leading-[1.5]">
          Preferred times are shown in your device timezone. Final availability
          is confirmed by email.
        </small>
      </div>
    </aside>
  );
}
