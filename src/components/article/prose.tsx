import React from 'react';

/* ------------------------------------------------------------------ *
 * Prose primitives for `article` in article.css. Browser default
 * margins are restated explicitly because Tailwind's preflight resets
 * them and the original stylesheet relied on them.
 * ------------------------------------------------------------------ */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 max-b650:text-[28px] mt-[55px] mb-[14px] text-[34px] tracking-[-.045em] font-extrabold text-[#11110f]"
    >
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
    <blockquote className="border-p-gold my-[55px] border-y py-7 text-[27px] leading-[1.35] text-[#11110f] font-serif italic">
      {children}
    </blockquote>
  );
}

/**
 * `.source-box`, the primary-source citation panel. Its body varies per
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
    <section className="border-a-line mt-[55px] rounded-[20px] border bg-white p-6 shadow-2xs">
      <small className="text-p-gold mb-2 block text-[9px] font-black tracking-[.16em] uppercase">
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
      className="font-extrabold underline decoration-[#d2b26a] underline-offset-4 text-[#11110f] hover:text-p-gold transition-colors"
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
 * Reader's Guide / Table of Contents
 * ------------------------------------------------------------------ */

export function ReadersGuide({
  headings,
}: {
  headings: { text: string; id: string }[];
}) {
  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Reader's Guide and Table of Contents"
      className="my-10 rounded-2xl border border-[#e8e2d5] bg-[#faf8f5] p-6 sm:p-7 shadow-xs"
    >
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#e8e2d5]">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eadecc] text-[#8a7238]">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </span>
          <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#11110f]">
            Reader&apos;s Guide &amp; Key Sections
          </span>
        </div>
        <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider bg-white/80 border border-[#e8e2d5] px-2 py-0.5 rounded-full">
          {headings.length} Topics
        </span>
      </div>
      <p className="text-[13px] text-[#6d685f] mb-4 leading-relaxed">
        Jump directly to verified operational frameworks, empirical benchmarks, and regulatory dispute workflows:
      </p>
      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${h.id}`}
              className="group flex items-start gap-2.5 rounded-lg p-2 text-[13px] font-medium text-[#2d2a26] transition-all hover:bg-white hover:text-p-gold hover:shadow-2xs"
            >
              <span className="font-mono text-xs font-bold text-p-gold group-hover:text-[#11110f] transition-colors">
                {String(i + 1).padStart(2, '0')}.
              </span>
              <span className="leading-snug underline decoration-[#e0d9ca] underline-offset-3 group-hover:decoration-p-gold">
                {h.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ *
 * Block model. Article bodies are authored as ordered block lists so
 * every guide renders through the same typographic rules.
 * ------------------------------------------------------------------ */

export type Block =
  | { t: 'h2'; text: string; id?: string }
  | { t: 'p'; text: React.ReactNode }
  | { t: 'ul'; items: React.ReactNode[] }
  | { t: 'ol'; items: React.ReactNode[] }
  | { t: 'quote'; text: string }
  | { t: 'source'; label: string; body: React.ReactNode }
  | { t: 'table'; headers: string[]; rows: (string | React.ReactNode)[][] };

export function Prose({
  blocks,
  hideToc = false,
}: {
  blocks: Block[];
  hideToc?: boolean;
}) {
  const headings = blocks
    .filter((b): b is Block & { t: 'h2' } => b.t === 'h2')
    .map((b) => ({
      text: b.text,
      id: b.id || slugify(b.text),
    }));

  return (
    <>
      {!hideToc && <ReadersGuide headings={headings} />}

      {blocks.map((block, index) => {
        switch (block.t) {
          case 'h2': {
            const id = block.id || slugify(block.text);
            return (
              <H2 key={index} id={id}>
                {block.text}
              </H2>
            );
          }
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
          case 'table':
            return (
              <div
                key={index}
                className="my-8 overflow-x-auto rounded-xl border border-[#e8e2d5] bg-white shadow-2xs"
              >
                <table className="min-w-full divide-y divide-[#e8e2d5] text-left text-[15px]">
                  <thead className="bg-[#faf8f5]">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th
                          key={i}
                          className="px-5 py-3.5 text-[14px] font-bold tracking-tight text-[#11110f]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8e2d5] text-[#514d46]">
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#faf8f5]/60 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-5 py-3.5 leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </>
  );
}
