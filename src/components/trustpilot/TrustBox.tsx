'use client';

import { useEffect, useRef } from 'react';

interface TrustBoxProps {
  className?: string;
}

export function TrustBox({ className = '' }: TrustBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tp = (
      window as unknown as {
        Trustpilot?: {
          loadFromElement: (el: HTMLElement | null, force?: boolean) => void;
        };
      }
    ).Trustpilot;
    if (tp && ref.current) {
      tp.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`trustpilot-widget ${className}`}
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
      >
        Trustpilot
      </a>
    </div>
  );
}
