import Link from 'next/link';

/** `.button`, `.button.gold`, `.button.ghost` — with the shared shimmer sweep. */
export function HomeButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: 'gold' | 'ghost';
  children: React.ReactNode;
}) {
  const base =
    "relative isolate inline-flex items-center justify-center gap-[18px] overflow-hidden rounded-full px-6 py-[17px] text-[13px] font-extrabold transition-all duration-[.35s] before:absolute before:inset-0 before:-z-[1] before:-translate-x-[140%] before:bg-[linear-gradient(105deg,transparent_25%,rgba(255,255,255,.16)_48%,transparent_70%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] hover:before:translate-x-[140%] max-b560:w-full";
  const skin =
    variant === 'gold'
      ? 'bg-gold text-white hover:-translate-y-0.5 hover:bg-gold2 hover:text-black'
      : 'border border-[#383731] text-[#ddd] hover:border-gold2 hover:text-gold2';

  return (
    <Link href={href} className={`${base} ${skin}`}>
      {children}
    </Link>
  );
}
