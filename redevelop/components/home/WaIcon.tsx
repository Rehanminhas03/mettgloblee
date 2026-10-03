/** `.wa-icon` — the inline WhatsApp glyph used across the homepage. */
export function WaIcon({ className = '' }: { className?: string }) {
  return (
    <i
      aria-hidden="true"
      className={`inline-grid h-7 w-7 place-items-center text-white not-italic [&_circle]:fill-[#25D366] [&_circle]:stroke-none [&_path]:fill-none [&_path]:stroke-white [&_path]:[stroke-width:1.65] [&_path]:[stroke-linecap:round] [&_path]:[stroke-linejoin:round] [&_svg]:h-full [&_svg]:w-full [&_svg]:overflow-visible ${className}`}
    >
      <svg viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="13" />
        <path d="M10.8 9.9c.5-.5 1.3-.5 1.7.1l1.5 2.2c.3.5.3 1.1-.1 1.5l-.8.9c1 2.1 2.7 3.8 4.8 4.8l.9-.8c.4-.4 1-.4 1.5-.1l2.2 1.5c.6.4.6 1.2.1 1.7l-1 1c-.8.8-2 1.1-3.1.8-5.2-1.5-9.3-5.6-10.8-10.8-.3-1.1 0-2.3.8-3.1l1.3-1.2z" />
      </svg>
    </i>
  );
}
