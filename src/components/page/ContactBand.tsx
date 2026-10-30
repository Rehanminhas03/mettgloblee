import { Btn } from './ui';

/**
 * `.contact-band`, the closing call to action: a dark ink rounded card with a
 * soft gold ring, floating on the cream page above the footer, in the same
 * style as the site's dark cards.
 */
export function ContactBand({
  heading,
  copy,
  ctaHref,
  ctaLabel,
}: {
  heading: React.ReactNode;
  copy: React.ReactNode;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <section className="max-b620:px-4 max-b620:py-[48px] px-[8vw] py-[70px]">
      <div className="max-b620:p-7 bg-ink relative overflow-hidden rounded-[30px] border border-[#26231e] p-[clamp(32px,5vw,68px)] text-white">
        {/* Soft gold ring in the corner, as on the site's cards (decorative) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[110px] -right-[120px] h-[300px] w-[300px] rounded-full border border-[rgba(184,137,45,.24)] shadow-[0_0_0_48px_rgba(184,137,45,.035)]"
        />
        <h2 className="relative mt-0 mb-5 max-w-[900px] text-[clamp(32px,4vw,56px)] leading-[1.04] tracking-[-.045em] [text-wrap:balance]">
          {heading}
        </h2>
        <p className="relative my-[1em] max-w-[700px] leading-[1.7] text-[#b9b4aa]">
          {copy}
        </p>
        <span className="relative">
          <Btn href={ctaHref} variant="light">
            {ctaLabel}
          </Btn>
        </span>
      </div>
    </section>
  );
}
