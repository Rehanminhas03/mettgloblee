'use client';

import { useFormSubmission } from '@/hooks/useFormSubmission';
import { useHydrated } from '@/hooks/useHydrated';
import { track } from '@/lib/track';
import { FormWithoutJavaScript } from './FormWithoutJavaScript';
import { SubmissionFeedback } from './SubmissionFeedback';

export function AjaxForm({
  className,
  tone = 'light',
  submitLabel = 'Send enquiry',
  children,
}: {
  className?: string;
  tone?: 'light' | 'dark';
  submitLabel?: string;
  children: React.ReactNode;
}) {
  const submission = useFormSubmission();
  const hydrated = useHydrated();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hydrated || (submission.state === 'accepted' && !submission.edited))
      return;
    const result = await submission.submit(event.currentTarget);
    if (result?.outcome === 'accepted')
      track('generate_lead', { form_location: location.pathname });
  };
  return (
    <>
      <FormWithoutJavaScript />
      <form
        method="post"
        data-js-form
        onSubmit={onSubmit}
        onChange={submission.onEdit}
        className={className}
      >
        {children}
        <button
          type="submit"
          disabled={
            !hydrated ||
            submission.sending ||
            (submission.state === 'accepted' && !submission.edited)
          }
          aria-busy={submission.sending}
          className={`col-span-full min-h-12 cursor-pointer rounded-full border-0 px-5 py-[15px] font-black text-white disabled:cursor-not-allowed disabled:opacity-70 ${tone === 'dark' ? 'bg-gold' : 'bg-p-ink'}`}
        >
          {!hydrated
            ? 'Loading form…'
            : submission.sending
              ? 'Sending…'
              : submission.state === 'accepted' && !submission.edited
                ? 'Submitted'
                : submission.state === 'unconfirmed'
                  ? 'Send again (may duplicate)'
                  : submission.state === 'accepted'
                    ? 'Send updated enquiry'
                    : submitLabel}
        </button>
        <SubmissionFeedback {...submission} dark={tone === 'dark'} />
      </form>
    </>
  );
}
