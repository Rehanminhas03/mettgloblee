'use client';

import { useEffect, useId, useRef } from 'react';
import styles from './submission-dialog.module.css';

/** Prominent, keyboard-accessible result notification shared by every form. */
export function SubmissionDialog({
  state,
  requestId,
  edited,
  meeting = false,
}: {
  state: string;
  requestId: string;
  edited: boolean;
  meeting?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const announced = useRef('');
  const titleId = useId();
  const descriptionId = useId();
  const accepted = state === 'accepted';
  useEffect(() => {
    if (
      !['accepted', 'rejected', 'offline', 'unconfirmed'].includes(state) ||
      !requestId
    )
      return;
    const key = `${requestId}:${state}`;
    if (announced.current === key || !dialog.current) return;
    announced.current = key;
    previousFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    dialog.current.showModal();
  }, [state, requestId]);
  const title = accepted
    ? meeting
      ? 'Meeting request submitted successfully'
      : 'Enquiry submitted successfully'
    : state === 'offline'
      ? 'You’re offline'
      : state === 'rejected'
        ? 'Request not sent'
        : 'We couldn’t confirm your submission';
  const description = accepted
    ? edited
      ? 'Your submitted request reached the email service. Changes made while sending are still on this page and were not included.'
      : meeting
        ? 'Thank you. We’ll review your request and confirm the meeting time and joining details by email.'
        : 'Thank you for contacting Mett Global. We’ll review your enquiry and reply by email.'
    : state === 'offline'
      ? 'Nothing was sent. Reconnect to the internet and try again. Your details are still on this page.'
      : state === 'rejected'
        ? 'Please check your details and try again. Your information is still on this page, or you can email us directly.'
        : 'The email service did not confirm receipt. Your request may already have reached us. Your details are still on this page; please contact us before submitting again.';
  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={() => {
        const previous = previousFocus.current;
        if (previous?.isConnected && !previous.matches(':disabled'))
          previous.focus();
      }}
    >
      <div className={styles.content}>
        <span className={styles.icon} aria-hidden="true">
          {accepted ? '✓' : '!'}
        </span>
        <p className={styles.kicker}>Mett Global</p>
        <h2 id={titleId}>{title}</h2>
        <p id={descriptionId} className={styles.description}>
          {description}
        </p>
        {requestId && (
          <p className={styles.reference}>
            Reference: <span>{requestId}</span>
          </p>
        )}
        {!accepted && (
          <a className={styles.email} href="mailto:contact@mettglobal.com">
            Email Mett Global
          </a>
        )}
        <button
          type="button"
          autoFocus
          className={styles.close}
          aria-label="Close notification"
          onClick={() => dialog.current?.close()}
        >
          {accepted ? 'Done' : 'Back to form'}
        </button>
      </div>
    </dialog>
  );
}
