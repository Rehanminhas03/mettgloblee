import Link from 'next/link';

/** `.logo` — the dot-and-bar monogram and wordmark from the homepage. */
export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="MettGlobal home"
      className="flex flex-none items-center gap-3"
    >
      {/* .mark — a dot and a tilted bar forming the monogram */}
      <span className="relative block h-[34px] w-[34px]">
        <i className="absolute top-[3px] left-0 h-[9px] w-[9px] rounded-full bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
        <b className="absolute top-px left-4 h-[31px] w-3 rotate-[35deg] rounded-[10px] bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
      </span>
      <span className="flex flex-col">
        <strong
          className={`text-2xl leading-none tracking-[-.04em] ${compact ? 'max-b900:text-[21px]' : ''}`}
        >
          Mett Global
        </strong>
        <small className="mt-[5px] text-[8px] tracking-[.06em]">
          The Art of Digital Excellence
        </small>
      </span>
    </Link>
  );
}
