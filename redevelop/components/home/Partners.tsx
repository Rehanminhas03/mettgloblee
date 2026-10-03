import Image from 'next/image';
import Link from 'next/link';
import { PARTNERS, type Partner } from '@/lib/partners';
import { Reveal } from './Reveal';

const GROUPS: { region: Partner['region']; label: string }[] = [
  { region: 'international', label: 'International' },
  { region: 'local', label: 'Pakistan' },
];

const TILE =
  'group relative flex h-[136px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-[rgba(224,188,104,.16)] bg-[#0d0d0c] px-5 text-center transition-[transform,border-color,background-color] duration-300 short:h-[112px]';

function PartnerTile({ partner }: { partner: Partner }) {
  const body = (
    <>
      {partner.logo ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={160}
          height={48}
          className="h-11 w-auto max-w-[80%] object-contain opacity-80 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : (
        <strong className="group-hover:text-gold2 text-[clamp(17px,1.35vw,21px)] leading-[1.15] font-black tracking-[.04em] text-[#e4dfd4] uppercase transition-colors duration-300">
          {partner.name}
        </strong>
      )}
      <small className="text-[10px] tracking-[.14em] text-[#8f8a80] uppercase">
        {partner.caption}
      </small>
      {partner.href ? (
        <span
          aria-hidden="true"
          className="text-gold2 absolute top-3 right-4 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          ↗
        </span>
      ) : null}
    </>
  );

  const linked = `${TILE} hover:border-gold2/50 hover:-translate-y-1 hover:bg-[#121210]`;

  if (partner.href?.startsWith('http')) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener"
        aria-label={`${partner.name} website (opens in a new tab)`}
        className={linked}
      >
        {body}
      </a>
    );
  }

  return partner.href ? (
    <Link href={partner.href} aria-label={partner.name} className={linked}>
      {body}
    </Link>
  ) : (
    <div className={TILE}>{body}</div>
  );
}

/**
 * `.partners` — clients and service partners, grouped by market and driven by
 * `lib/partners`. Add a client there and it appears here automatically.
 */
export function Partners() {
  const groups = GROUPS.map(group => ({
    ...group,
    items: PARTNERS.filter(partner => partner.region === group.region),
  })).filter(group => group.items.length);

  return (
    <section
      id="partners"
      className="min-h-view px-pad max-b900:px-7 max-b900:py-[70px] max-b560:px-6 max-b560:py-[60px] short:py-8 flex flex-col justify-center bg-[#070706] bg-[image:radial-gradient(circle_at_10%_15%,rgba(184,137,45,.09),transparent_24%),radial-gradient(circle_at_90%_75%,rgba(224,188,104,.055),transparent_28%)] py-14 text-white"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        03 / Clients &amp; partners
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-5 short:mt-2 short:mb-6 mt-4 mb-10 grid grid-cols-[1fr_.7fr] items-end gap-[60px]">
        <h2 className="short:text-[40px] m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
          Trusted by brands
          <br />
          <span className="text-gold2">people already know.</span>
        </h2>
        <p className="m-0 max-w-[560px] text-base leading-[1.7] text-[#9c988f]">
          Organizations we have delivered growth, technology and operations work
          for — locally in Pakistan and for international businesses.
        </p>
      </Reveal>

      <div className="short:gap-6 grid gap-9">
        {groups.map(group => (
          <div key={group.region}>
            <div className="mb-4 flex items-center gap-4 text-[10px] font-black tracking-[.2em] uppercase">
              <span className="text-gold2">{group.label}</span>
              <span className="h-px flex-1 bg-[rgba(224,188,104,.16)]" />
              <span className="text-[#77736b]">
                {String(group.items.length).padStart(2, '0')}
              </span>
            </div>
            <div className="max-b1100:grid-cols-3 max-b700:grid-cols-2 max-b560:grid-cols-1 grid grid-cols-5 gap-3">
              {group.items.map(partner => (
                <PartnerTile key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="short:mt-4 mt-6 mb-0 text-[11px] text-[#77736b]">
        Client and partner references describe service relationships and are not
        claims of endorsement.
      </p>
    </section>
  );
}
