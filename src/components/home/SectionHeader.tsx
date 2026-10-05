import { Reveal } from './Reveal';

/**
 * The header used by the homepage's content sections: a numbered kicker, a
 * large headline on the left and a short paragraph (and optional action) on
 * the right. One component keeps the type scale and spacing identical across
 * sections.
 */
export function SectionHeader({
  kicker,
  dark = false,
  heading,
  children,
  action,
}: {
  kicker: string;
  dark?: boolean;
  heading: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`text-[11px] font-extrabold tracking-[.2em] uppercase ${
          dark ? 'text-gold2' : 'text-gold'
        }`}
      >
        {kicker}
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-5 short:mt-1 short:mb-5 mt-4 mb-9 grid grid-cols-[1fr_.7fr] items-end gap-[60px]">
        <h2 className="short:text-[40px] m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
          {heading}
        </h2>
        <div>
          <p
            className={`m-0 max-w-[560px] text-base leading-[1.7] ${
              dark ? 'text-[#9c988f]' : 'text-muted'
            } ${action ? 'mb-5' : ''}`}
          >
            {children}
          </p>
          {action}
        </div>
      </Reveal>
    </>
  );
}
