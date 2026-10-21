'use client';

import { useId, useState, type InputHTMLAttributes } from 'react';
import { checkedPhone, emailError } from '@/lib/contact-validation';
import styles from './contact-input.module.css';

export function ContactInput({
  kind,
  dark = false,
  ...props
}: Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'name' | 'onBlur' | 'onChange' | 'onInvalid'
> & { kind: 'email' | 'phone'; dark?: boolean }) {
  const [error, setError] = useState('');
  const id = useId();
  const message = (value: string) =>
    kind === 'email'
      ? emailError(value)
      : props.required && !value.trim()
        ? 'Enter your phone number.'
        : checkedPhone(value).error;
  return (
    <>
      <input
        {...props}
        type={kind === 'email' ? 'email' : 'tel'}
        name={kind}
        autoComplete={kind === 'email' ? 'email' : 'tel'}
        autoCapitalize="none"
        spellCheck={false}
        aria-label={kind === 'email' ? 'Email' : 'Phone / WhatsApp'}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={event => {
          event.currentTarget.setCustomValidity('');
          setError('');
        }}
        onBlur={event => {
          const text = message(event.currentTarget.value);
          event.currentTarget.setCustomValidity(text);
          setError(text);
        }}
        onInvalid={event => {
          const text =
            message(event.currentTarget.value) ||
            event.currentTarget.validationMessage;
          event.currentTarget.setCustomValidity(text);
          setError(text);
        }}
      />
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className={`${styles.error} ${dark ? styles.dark : ''}`}
        >
          {error}
        </span>
      )}
    </>
  );
}
