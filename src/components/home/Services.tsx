import Link from 'next/link';
import { SERVICES, type Service } from '@/lib/services';
import {
  CARD_COPY,
  CARD_TITLE,
  CardCta,
  CardTop,
  TickList,
  TONES,
  ToneCard,
  type Tone,
} from '@/components/ui/ToneCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

/** Tone rhythm for the four services: dark, light, cream, dark. */
const TONE_BY_NUM: Record<string, Tone> = {
  '01': 'dark',
  '02': 'light',
  '03': 'cream',
  '04': 'dark',
};

/**
 * A compact service card: one line and four key points. The service page
 * holds everything else.
 */
function ServiceCard({ service }: { service: Service }) {
  const tone = TONE_BY_NUM[service.num] ?? 'light';

  return (
    <Reveal className="h-full">
      <ToneCard tone={tone} href={service.href} className="min-h-[380px]">
        <CardTop tone={tone} label="SERVICE" num={service.num} />

        <h3 className={`${CARD_TITLE} short:mt-4 mt-8 mb-3 max-w-[480px]`}>
          {service.title}
        </h3>
        <p className={`${CARD_COPY} max-w-[480px] ${TONES[tone].copy}`}>
          {service.short}
        </p>

        <div
          className={`short:mt-4 short:pt-4 mt-6 border-t pt-5 ${TONES[tone].rule}`}
        >
          <TickList tone={tone} items={service.cardPoints} className="" />
        </div>

        <CardCta tone={tone}>Explore {service.title}</CardCta>
      </ToneCard>
    </Reveal>
  );
}

/** A fine gold rule that separates one block of the page from the next. */
function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(184,137,45,.55),transparent)]"
    />
  );
}

/**
 * `.services` — the four services as compact cards, over two sections of
 * two. The sections keep their natural height (no forced full screen) so the
 * gap between the rows stays even. A gold rule separates the hero above from
 * the first row.
 */
export function Services() {
  const [first, second] = [SERVICES.slice(0, 2), SERVICES.slice(2, 4)];

  return (
    <>
      <section
        id="services"
        data-natural
        className="px-pad max-b900:px-7 max-b560:px-6 flex flex-col bg-[#f1ede5] pb-8"
      >
        <Divider />
        <div className="pt-[clamp(56px,9vh,96px)]">
          <SectionHeader
            kicker="01 / Services"
            heading={
              <>
                We build, grow,{' '}
                <span className="text-gold font-serif font-normal">
                  and automate businesses.
                </span>
              </>
            }
            action={
              <Link
                href="/services"
                className="inline-block rounded-full bg-black px-6 py-[13px] text-[13px] font-extrabold text-white transition-colors hover:bg-[#2a2925]"
              >
                View all services
              </Link>
            }
          >
            Digital growth, technology, AI and commerce — engage us for one
            focused problem or connect all four into a single growth and
            operations program.
          </SectionHeader>

          <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-8">
            {first.map(service => (
              <ServiceCard key={service.href} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services-more"
        data-natural
        aria-label="More services"
        className="px-pad max-b900:px-7 max-b560:px-6 bg-[#f1ede5] pt-0 pb-[clamp(56px,9vh,96px)]"
      >
        <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-8">
          {second.map(service => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
