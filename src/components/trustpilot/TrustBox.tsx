'use client';

import { useEffect, useRef } from 'react';

interface TrustBoxProps {
  className?: string;
}

export function TrustBox({ className = '' }: TrustBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function loadWidget() {
      const tp = (
        window as unknown as {
          Trustpilot?: {
            loadFromElement: (el: HTMLElement | null, force?: boolean) => void;
          };
        }
      ).Trustpilot;
      if (tp && ref.current) {
        tp.loadFromElement(ref.current, true);
        return true;
      }
      return false;
    }

    if (!loadWidget()) {
      const interval = setInterval(() => {
        if (loadWidget()) {
          clearInterval(interval);
        }
      }, 250);
      const timeout = setTimeout(() => clearInterval(interval), 6000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`trustpilot-widget whitespace-nowrap ${className}`}
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6adcac9d4716e8a5ad9e67f5"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/mettglobal.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 h-[44px] px-4 rounded-lg border border-[#d5cfc4] bg-white text-[#191919] text-xs font-semibold hover:border-[#191919] transition-all shadow-xs whitespace-nowrap"
      >
        <span className="whitespace-nowrap">Review us on</span>
        <span className="inline-flex items-center gap-1 font-bold text-[#191919] whitespace-nowrap">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 text-[#00b67a] flex-shrink-0"
            fill="currentColor"
          >
            <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z" />
          </svg>
          Trustpilot
        </span>
        <span className="inline-flex items-center gap-0.5 text-[#00b67a] text-xs">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </span>
      </a>
    </div>
  );
}
