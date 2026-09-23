import { readableTime } from './calendar';
import {
  DARK_FIELD,
  DARK_FIELD_LABEL,
  KICKER,
  PANEL_BUTTON,
  PREFERRED_HOURS,
} from './constants';

const HOLD_ACTION =
  'inline-flex min-h-[42px] cursor-pointer items-center justify-center rounded-[10px] border border-[#403c34] bg-[#24211b] px-[11px] py-[9px] text-center text-[10px] font-black text-white hover:border-p-gold hover:text-[#e0bc68]';

/** Stage one: pick a time from the fixed list of preferred hours. */
function SlotStage({
  dayLabel,
  hasDate,
  selectedTime,
  onPick,
  onContinue,
}: {
  dayLabel: string;
  hasDate: boolean;
  selectedTime: string;
  onPick: (hour: number) => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <span className={KICKER}>SELECT A TIME</span>
      <h3 className="mt-[7px] mb-0 text-[26px] tracking-[-.035em]">
        {dayLabel}
      </h3>
      <p className="mt-[10px] mb-[18px] text-xs leading-[1.55] text-[#9d988f]">
        {hasDate
          ? 'Choose the time that works best for you.'
          : 'Select a day from the calendar and the preferred times will appear here.'}
      </p>

      <div
        aria-label="Preferred meeting times"
        className="max-b1120:grid-cols-4 max-b760:grid-cols-2 grid grid-cols-1 gap-[9px]"
      >
        {hasDate
          ? PREFERRED_HOURS.map(hour => {
              const active =
                selectedTime === `${String(hour).padStart(2, '0')}:00`;
              return (
                <button
                  key={hour}
                  type="button"
                  onClick={() => onPick(hour)}
                  className={`hover:border-p-gold min-h-[46px] cursor-pointer rounded-xl border px-2 py-3 text-xs font-extrabold hover:bg-[#2a2316] hover:text-[#e0bc68] ${
                    active
                      ? 'border-p-gold bg-[#2a2316] text-[#e0bc68]'
                      : 'border-[#3b3831] bg-[#171714] text-white'
                  }`}
                >
                  {readableTime(hour)}
                </button>
              );
            })
          : null}
      </div>

      <button
        type="button"
        disabled={!selectedTime}
        onClick={onContinue}
        className={`${PANEL_BUTTON} disabled:cursor-not-allowed disabled:opacity-30`}
      >
        Continue
      </button>
    </div>
  );
}

/** Stage two: calendar holds plus the contact fields that get submitted. */
function DetailsStage({
  summary,
  googleCalendarHref,
  onDownloadIcs,
  onBack,
  nameRef,
}: {
  summary: string;
  googleCalendarHref: string;
  onDownloadIcs: () => void;
  onBack: () => void;
  nameRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-6 cursor-pointer border-0 bg-transparent p-0 font-extrabold text-[#aaa69d]"
      >
        ← Change time
      </button>
      <span className={KICKER}>YOUR DETAILS</span>
      <h3 className="mt-[7px] mb-0 text-[26px] tracking-[-.035em]">
        {summary}
      </h3>

      {/* .calendar-hold */}
      <div className="mt-4 mb-1 rounded-[14px] border border-[#39362f] bg-[#171714] p-[14px]">
        <span className="mb-[10px] block text-[9px] font-black tracking-[.12em] text-[#9d988f] uppercase">
          Hold this tentative slot on your calendar
        </span>
        <div className="max-b430:grid-cols-1 grid grid-cols-2 gap-2">
          <a
            href={googleCalendarHref}
            target="_blank"
            rel="noopener"
            className={HOLD_ACTION}
          >
            Google Calendar
          </a>
          <button type="button" onClick={onDownloadIcs} className={HOLD_ACTION}>
            Apple / Outlook (.ics)
          </button>
        </div>
        <small className="mt-[9px] block text-[9px] leading-[1.45] text-[#817d75]">
          The event is marked tentative and includes contact@mettglobal.com.
          Final availability is still confirmed by MettGlobal.
        </small>
      </div>

      {/* .scheduler-fields */}
      <div className="mt-[22px] grid gap-3">
        <label className={DARK_FIELD_LABEL}>
          Name
          <input
            ref={nameRef}
            name="name"
            required
            autoComplete="name"
            className={DARK_FIELD}
          />
        </label>
        <label className={DARK_FIELD_LABEL}>
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={DARK_FIELD}
          />
        </label>
        <label className={DARK_FIELD_LABEL}>
          Phone / WhatsApp
          <input name="phone" autoComplete="tel" className={DARK_FIELD} />
        </label>
        <label className={DARK_FIELD_LABEL}>
          Company
          <input
            name="company"
            autoComplete="organization"
            className={DARK_FIELD}
          />
        </label>
        <label className={DARK_FIELD_LABEL}>
          Anything we should prepare?
          <textarea
            name="meeting_context"
            placeholder="A short note about the business, problem or decision you want to discuss."
            className={`${DARK_FIELD} min-h-[92px] resize-y`}
          />
        </label>
      </div>

      <button type="submit" className={PANEL_BUTTON}>
        Request this meeting
      </button>
      <p className="mt-3 mb-0 text-[10px] leading-[1.55] text-[#8d887f]">
        This is a meeting request, not an automatic calendar confirmation.
        MettGlobal will confirm the final time and joining/location details by
        email.
      </p>
    </div>
  );
}

/** `.slot-panel` — the dark right rail, showing one stage at a time. */
export function SlotPanel({
  showDetails,
  dayLabel,
  hasDate,
  selectedTime,
  onPick,
  onContinue,
  summary,
  googleCalendarHref,
  onDownloadIcs,
  onBack,
  nameRef,
}: {
  showDetails: boolean;
  /** Slot stage */
  dayLabel: string;
  hasDate: boolean;
  selectedTime: string;
  onPick: (hour: number) => void;
  onContinue: () => void;
  /** Details stage */
  summary: string;
  googleCalendarHref: string;
  onDownloadIcs: () => void;
  onBack: () => void;
  nameRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <aside className="bg-p-ink max-b1120:col-span-full max-b1120:grid max-b1120:min-h-0 max-b760:p-[22px] min-w-0 p-[30px] text-white">
      {showDetails ? (
        <DetailsStage
          summary={summary}
          googleCalendarHref={googleCalendarHref}
          onDownloadIcs={onDownloadIcs}
          onBack={onBack}
          nameRef={nameRef}
        />
      ) : (
        <SlotStage
          dayLabel={dayLabel}
          hasDate={hasDate}
          selectedTime={selectedTime}
          onPick={onPick}
          onContinue={onContinue}
        />
      )}
    </aside>
  );
}
