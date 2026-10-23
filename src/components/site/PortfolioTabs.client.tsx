'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

export type PortfolioTab = { id: string; label: string };

/**
 * Service filter for the portfolio. Every panel is server-rendered; this island
 * only decides which one is visible. Without JavaScript the "All" panel shows.
 */
export function PortfolioTabs({
  tabs,
  panels,
}: {
  tabs: PortfolioTab[];
  panels: Record<string, ReactNode>;
}) {
  const [active, setActive] = useState(tabs[0].id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const move = (event: KeyboardEvent, index: number) => {
    const step =
      event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = tabs[(index + step + tabs.length) % tabs.length];
    setActive(next.id);
    refs.current[next.id]?.focus();
  };

  return (
    <>
      <div className="max-b620:px-6 px-[8vw] pt-8">
        <div
          role="tablist"
          aria-label="Filter work by service"
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab, index) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={node => {
                  refs.current[tab.id] = node;
                }}
                type="button"
                role="tab"
                id={`portfolio-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`portfolio-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={event => move(event, index)}
                className={`min-h-11 cursor-pointer rounded-full border px-[18px] py-2 text-[13px] font-bold tracking-[.01em] transition-colors duration-200 ${
                  selected
                    ? 'border-ink bg-ink text-white'
                    : 'border-p-line text-ink hover:border-gold bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {tabs.map(tab => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`portfolio-panel-${tab.id}`}
          aria-labelledby={`portfolio-tab-${tab.id}`}
          hidden={tab.id !== active}
        >
          {panels[tab.id]}
        </div>
      ))}
    </>
  );
}
