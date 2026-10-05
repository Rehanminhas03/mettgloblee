import { PARTNERS } from '@/lib/partners';
import {
  CARD_COPY,
  CARD_TITLE,
  CardCta,
  CardTop,
  TONES,
  ToneCard,
  type Tone,
} from '@/components/ui/ToneCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type Group = {
  region: 'local' | 'international';
  label: string;
  question: string;
  hint: string;
  href: string;
  tone: Tone;
};

const GROUPS: Group[] = [
  {
    region: 'local',
    label: 'LOCAL · PAKISTAN',
    question: 'Which Pakistani brands do we work with?',
    hint: 'Some of the names behind platforms and the industry at home.',
    href: '/portfolio#local',
    tone: 'dark',
  },
  {
    region: 'international',
    label: 'INTERNATIONAL',
    question: 'Which international businesses trust us?',
    hint: 'Software, websites and growth for companies abroad.',
    href: '/portfolio#international',
    tone: 'cream',
  },
];

function ClientsCard({ group, count }: { group: Group; count: number }) {
  const { tone } = group;
  return (
    <Reveal className="h-full">
      <ToneCard tone={tone} href={group.href} className="min-h-[360px]">
        <CardTop
          tone={tone}
          label={group.label}
          num={String(count).padStart(2, '0')}
        />
        <h3 className={`${CARD_TITLE} short:mt-4 mt-8 mb-3 max-w-[480px]`}>
          {group.question}
        </h3>
        <p className={`${CARD_COPY} max-w-[480px] ${TONES[tone].copy}`}>
          {group.hint}
        </p>
        <CardCta tone={tone}>Reveal the clients</CardCta>
      </ToneCard>
    </Reveal>
  );
}

/**
 * `.partners` — two cards, one for local clients and one for international,
 * that hold the names back on purpose and lead into the matching group on the
 * portfolio page. The counts come from `lib/partners`.
 */
export function Partners() {
  const count = (region: Group['region']) =>
    PARTNERS.filter(partner => partner.region === region).length;

  return (
    <section
      id="partners"
      className="min-h-view px-pad max-b900:px-7 max-b900:py-[70px] max-b560:px-6 max-b560:py-[60px] short:py-8 flex flex-col justify-center bg-[#070706] bg-[image:radial-gradient(circle_at_10%_15%,rgba(184,137,45,.09),transparent_24%),radial-gradient(circle_at_90%_75%,rgba(224,188,104,.055),transparent_28%)] py-14 text-white"
    >
      <SectionHeader
        kicker="02 / Clients & partners"
        dark
        heading={
          <>
            Trusted by brands
            <br />
            <span className="text-gold2">people already know.</span>
          </>
        }
      >
        Organizations we have delivered growth, technology and operations work
        for — locally in Pakistan and for international businesses.
      </SectionHeader>

      <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-8">
        {GROUPS.map(group => (
          <ClientsCard
            key={group.region}
            group={group}
            count={count(group.region)}
          />
        ))}
      </div>

      <p className="short:mt-4 mt-7 mb-0 text-[11px] text-[#77736b]">
        Client and partner references describe service relationships and are not
        claims of endorsement.
      </p>
    </section>
  );
}
