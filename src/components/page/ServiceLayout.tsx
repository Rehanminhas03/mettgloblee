import { Btn } from './ui';

export type ServiceBlock = {
  heading: string;
  copy: React.ReactNode;
  /** Optional "what's included" list rendered under the copy. */
  items?: string[];
};

/**
 * `.service-layout`, sticky left rail plus the prose column, shared by the
 * service detail pages and the two legal pages.
 */
export function ServiceLayout({
  sideKicker,
  sideHeading,
  ctaHref,
  ctaLabel,
  blocks,
}: {
  sideKicker: string;
  sideHeading: string;
  ctaHref?: string;
  ctaLabel?: string;
  blocks: ServiceBlock[];
}) {
  return (
    <section className="max-b620:px-6 max-b620:py-10 px-[8vw] py-16">
      <div className="max-b900:grid-cols-1 max-b900:gap-7 grid grid-cols-[.72fr_1.28fr] gap-12">
        <aside className="max-b900:static sticky top-[120px] h-max">
          <span className="text-p-gold text-[10px] font-black tracking-[.16em]">
            {sideKicker}
          </span>
          <h2 className="my-5 text-[clamp(28px,3vw,38px)] leading-[1.12] tracking-[-.04em]">
            {sideHeading}
          </h2>
          {ctaHref && ctaLabel ? (
            <Btn href={ctaHref} variant="dark">
              {ctaLabel}
            </Btn>
          ) : null}
        </aside>

        <article className="min-w-0 [overflow-wrap:anywhere]">
          {blocks.map(block => (
            <div key={block.heading} className="pt-10 first:pt-0">
              <h2 className="mt-0 mb-[14px] text-[clamp(26px,2.8vw,36px)] leading-[1.15] tracking-[-.04em]">
                {block.heading}
              </h2>
              <p className="my-[1em] text-[16px] leading-[1.85] text-[#514d46]">
                {block.copy}
              </p>
              {block.items?.length ? (
                <ul className="max-b620:grid-cols-1 m-0 mt-5 grid list-none grid-cols-2 gap-x-6 gap-y-[10px] p-0">
                  {block.items.map(item => (
                    <li
                      key={item}
                      className="before:text-p-gold relative pl-5 text-[15px] leading-[1.5] text-[#3d3a34] before:absolute before:left-0 before:content-['✓']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
