/**
 * Renders a JSON-LD block. The payloads are built in `lib/seo.ts` from static
 * site data, never from user input.
 */
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
