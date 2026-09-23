const ITEMS = [
  'ECOMMERCE',
  'PAID MEDIA',
  'AI AUTOMATION',
  'WEB DEVELOPMENT',
  'SUPPLY CHAIN',
  'SALES SUPPORT',
  'CONTENT',
  'SOURCING',
  'ECOMMERCE',
  'PAID MEDIA',
  'AI AUTOMATION',
];

/**
 * `.ticker` — the gold capability marquee between the hero and the manifesto.
 *
 * The track is `w-max` and slides by -50%, so the list is written out twice to
 * make the loop seamless.
 */
export function Ticker() {
  return (
    <section
      aria-label="MettGlobal capabilities"
      className="bg-gold overflow-hidden py-4 text-xs font-black tracking-[.14em] whitespace-nowrap text-white"
    >
      <div className="animate-ticker w-max">
        {ITEMS.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            {index < ITEMS.length - 1 ? (
              <i className="mx-[22px] text-[#201d17] not-italic">✦</i>
            ) : null}
          </span>
        ))}
      </div>
    </section>
  );
}
