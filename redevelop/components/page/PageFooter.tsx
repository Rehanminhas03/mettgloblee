import Link from 'next/link';
import type { NavLink } from '@/lib/navigation';

/**
 * `.footer` from page.css. The note and link set differ per page, so both are
 * passed in rather than hard-coded.
 */
export function PageFooter({
  note = '© MettGlobal',
  links,
}: {
  note?: string;
  links: NavLink[];
}) {
  return (
    <footer className="max-b900:flex-col max-b620:px-6 max-b620:py-[30px] flex justify-between gap-[30px] bg-[#080807] px-[8vw] py-9 text-[11px] text-[#999]">
      <span>{note}</span>
      <nav className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-[#ddd]">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
