/* ------------------------------------------------------------------ *
 * Prose primitives for `article` in article.css. Browser default
 * margins are restated explicitly because Tailwind's preflight resets
 * them and the original stylesheet relied on them.
 * ------------------------------------------------------------------ */

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-b650:text-[28px] mt-[55px] mb-[14px] text-[34px] tracking-[-.045em]">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-[1em] text-[17px] leading-[1.85] text-[#514d46]">
      {children}
    </p>
  );
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-[1em] list-disc pl-[22px]">
      {items.map((item, index) => (
        <li key={index} className="text-[17px] leading-[1.85] text-[#514d46]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="my-[1em] list-decimal ps-10">
      {items.map((item, index) => (
        <li key={index} className="text-[17px] leading-[1.85] text-[#514d46]">
          {item}
        </li>
      ))}
    </ol>
  );
}

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-p-gold my-[55px] border-y py-7 text-[27px] leading-[1.35]">
      {children}
    </blockquote>
  );
}

/**
 * `.source-box` — the primary-source citation panel. Its body varies per
 * article (one link, two links, or no link at all), so it takes children.
 */
export function SourceBox({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-a-line mt-[55px] rounded-[20px] border bg-white p-6">
      <small className="text-p-gold mb-2 block text-[9px] font-black tracking-[.16em]">
        {label}
      </small>
      {children}
    </section>
  );
}

/** `.source-box a` */
export function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="font-extrabold underline decoration-[#d2b26a] underline-offset-4"
    >
      {children}
    </a>
  );
}

/** `.source-box p` */
export function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-[1em] mb-0 text-[13px] leading-[1.85] text-[#514d46]">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ *
 * Block model. Article bodies are authored as ordered block lists so
 * every guide renders through the same typographic rules.
 * ------------------------------------------------------------------ */

export type Block =
  | { t: 'h2'; text: string }
  | { t: 'p'; text: React.ReactNode }
  | { t: 'ul'; items: React.ReactNode[] }
  | { t: 'ol'; items: React.ReactNode[] }
  | { t: 'quote'; text: string }
  | { t: 'source'; label: string; body: React.ReactNode };

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.t) {
          case 'h2':
            return <H2 key={index}>{block.text}</H2>;
          case 'p':
            return <P key={index}>{block.text}</P>;
          case 'ul':
            return <UL key={index} items={block.items} />;
          case 'ol':
            return <OL key={index} items={block.items} />;
          case 'quote':
            return <Quote key={index}>{block.text}</Quote>;
          case 'source':
            return (
              <SourceBox key={index} label={block.label}>
                {block.body}
              </SourceBox>
            );
        }
      })}
    </>
  );
}
