/** `.skip-link` from page.css / article.css — off-screen until focused. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="bg-p-ink fixed top-3 left-[18px] z-[100] -translate-y-[180%] rounded-full px-4 py-[11px] text-white transition-transform duration-200 focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
