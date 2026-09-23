import Link from 'next/link';

/**
 * `.brand` + `.mark` from page.css — the skewed gold tile and wordmark used in
 * the standard page header.
 */
export function BrandMark() {
  return (
    <Link href="/" className="flex flex-none items-center gap-3">
      <i className="h-11 w-[34px] skew-x-[-14deg] rounded-[6px_15px_6px_15px] bg-[linear-gradient(145deg,#e1bf69,#b98016)]" />
      <span>
        <strong className="block text-xl">Mett Global</strong>
        <small className="max-b620:hidden mt-0.5 block text-[9px]">
          The Art of Digital Excellence
        </small>
      </span>
    </Link>
  );
}
