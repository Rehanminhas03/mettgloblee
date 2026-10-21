'use client';

import { useEffect, useRef, useState } from 'react';
import {
  submitForm,
  type SubmissionOutcome,
  type SubmissionResult,
} from '@/lib/submitForm';

function newRequestId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 15) | 64;
  bytes[8] = (bytes[8] & 63) | 128;
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function useFormSubmission() {
  const [state, setState] = useState<
    'idle' | 'sending' | 'slow' | SubmissionOutcome
  >('idle');
  const [requestId, setRequestId] = useState('');
  const [edited, setEdited] = useState(false);
  const busy = useRef(false);
  const revision = useRef(0);
  const onEdit = () => {
    revision.current++;
    setEdited(true);
  };
  useEffect(() => {
    if (state !== 'sending') return;
    const timer = window.setTimeout(() => setState('slow'), 6000);
    return () => window.clearTimeout(timer);
  }, [state]);

  const submit = async (form: HTMLFormElement) => {
    // Synchronous guard catches double-clicks and Enter before React rerenders.
    if (busy.current) return null;
    const version = revision.current;
    const id = newRequestId();
    busy.current = true;
    setRequestId(id);
    setState('sending');
    setEdited(false);
    let result: SubmissionResult;
    try {
      result = await submitForm(form, id);
    } catch {
      result = { outcome: 'unconfirmed', requestId: id };
    } finally {
      busy.current = false;
    }
    const changed = version !== revision.current;
    setEdited(changed);
    setState(result.outcome);
    return { ...result, edited: changed };
  };
  return {
    state,
    requestId,
    edited,
    onEdit,
    submit,
    sending: state === 'sending' || state === 'slow',
  };
}
