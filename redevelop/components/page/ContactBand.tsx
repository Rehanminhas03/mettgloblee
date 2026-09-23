import { Btn } from './ui';

/** `.contact-band` — the gold closing band with a single call to action. */
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
    <section className="max-b620:px-6 bg-[linear-gradient(135deg,#c89528,#e1bc67)] px-[8vw] py-[90px]">
      <h2 className="mt-0 mb-6 text-[clamp(42px,6vw,82px)] leading-[.95] tracking-[-.06em]">
        {heading}
      </h2>
      <p className="my-[1em] max-w-[700px] leading-[1.7]">{copy}</p>
      <Btn href={ctaHref} variant="dark">
        {ctaLabel}
      </Btn>
    </section>
  );
}
