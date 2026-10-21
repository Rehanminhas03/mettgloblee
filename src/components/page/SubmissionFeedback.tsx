import Link from 'next/link';

export function SubmissionFeedback({
  state,
  requestId,
  edited,
  dark = false,
  meeting = false,
}: {
  state: string;
  requestId: string;
  edited: boolean;
  dark?: boolean;
  meeting?: boolean;
}) {
  if (state === 'idle') return null;
  const busy = state === 'sending' || state === 'slow';
  const accepted = state === 'accepted';
  return (
    <div
      role={busy || accepted ? 'status' : 'alert'}
      aria-live={busy || accepted ? 'polite' : 'assertive'}
      className={`col-span-full rounded-xl border p-4 text-sm leading-[1.65] ${dark ? 'border-[#51452c] bg-[#201d15] text-[#eee4d1]' : 'border-p-line bg-[#fffaf0] text-[#5f5544]'}`}
    >
      <p className="m-0">
        {state === 'sending' &&
          'Sending your request. You can still edit your details.'}
        {state === 'slow' &&
          'Still waiting for confirmation. Please keep this page open; there is no need to submit again.'}
        {accepted &&
          (edited
            ? 'Your original request was submitted. Your newer edits are still here; they have not been sent.'
            : meeting
              ? 'Your meeting request was submitted. We will confirm the time by email.'
              : 'Thank you, your enquiry has been submitted. We will reply by email.')}
        {state === 'unconfirmed' &&
          'We could not confirm receipt. Your request may already have reached us. Your details are still here. Before sending again, please contact us to avoid a duplicate.'}
        {state === 'rejected' &&
          'The request was not accepted. Check your details and try again, or contact us directly.'}
        {state === 'offline' &&
          'You appear to be offline. Nothing was sent. Reconnect and try again; your details are still here.'}
      </p>
      {!busy && (
        <p className="mt-2 mb-0">
          {requestId && (
            <>
              Reference:{' '}
              <span className="font-mono text-xs break-all">{requestId}</span>
              .{' '}
            </>
          )}
          <a
            className="font-semibold underline"
            href="mailto:contact@mettglobal.com"
          >
            Email us
          </a>
          {accepted && meeting && (
            <>
              {' '}
              ·{' '}
              <Link className="underline" href="/">
                Return home
              </Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}
