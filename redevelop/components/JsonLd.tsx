/**
 * Serialises JSON-LD for an inline `<script>`. `<` is escaped so no string in
 * the payload can close the script element early.
 */
export const jsonLdHtml = (data: object) =>
  JSON.stringify(data).replace(/</g, '\\u003c');

/**
 * Renders a JSON-LD block. The payloads are built in `lib/seo.ts` from static
 * site data, never from user input.
 */
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdHtml(data) }}
    />
  );
}
