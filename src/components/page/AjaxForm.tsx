'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';

/**
 * A form that submits in the background and swaps itself for a thank-you
 * message, so the visitor never leaves the page. The fields (and the hidden
 * FormSubmit settings) are passed in as children.
 */
export function AjaxForm({
  className,
  tone = 'light',
  children,
}: {
  className?: string;
  tone?: 'light' | 'dark';
  children: React.ReactNode;
}) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState('sending');
    const ok = await submitForm(event.currentTarget);
    setState(ok ? 'sent' : 'error');
  };

  if (state === 'sent') {
    const dark = tone === 'dark';
    return (
      <div
        role="status"
        className={`rounded-2xl border p-8 ${
          dark
            ? 'border-[rgba(224,188,104,.3)] bg-white/[.04] text-white'
            : 'border-p-line bg-white text-p-ink'
        }`}
      >
        <span
          aria-hidden="true"
          className={`mb-4 grid h-11 w-11 place-items-center rounded-full text-lg font-black ${
            dark ? 'bg-gold2 text-ink' : 'bg-p-gold text-white'
          }`}
        >
          ✓
        </span>
        <strong className="block text-[22px] tracking-[-.02em]">
          Thank you — your enquiry has been sent.
        </strong>
        <p
          className={`mt-2 mb-0 text-sm leading-[1.65] ${
            dark ? 'text-[#aaa69d]' : 'text-p-muted'
          }`}
        >
          We will review the details and reply by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <fieldset
        disabled={state === 'sending'}
        className="contents border-0 p-0 m-0"
      >
        {children}
      </fieldset>
      {state === 'error' ? (
        <p
          role="alert"
          className={`col-span-full m-0 text-sm ${
            tone === 'dark' ? 'text-[#f0b4a8]' : 'text-[#b3261e]'
          }`}
        >
          Sorry, that did not send. Please try again, or email us at{' '}
          <a href="mailto:contact@mettglobal.com" className="underline">
            contact@mettglobal.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
