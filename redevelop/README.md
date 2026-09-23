# MettGlobal

The MettGlobal marketing site, rebuilt on Next.js (App Router) with TypeScript
and Tailwind CSS v4. It is a port of the previous static Vite build in the
parent directory — same content, same design, same URLs.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npm run format   # prettier
```

## Project layout

```
app/                    route segments, one folder per URL
  layout.tsx            <html>/<body>, analytics, consent banner
  globals.css           Tailwind import + design tokens
  page.tsx              homepage
  not-found.tsx         404
  robots.ts             /robots.txt
  sitemap.ts            /sitemap.xml
components/
  home/                 homepage sections (hero, services, case studies, …)
  page/                 the standard page shell, forms and the scheduler
  article/              insight guide + policy brief shell and prose blocks
  Analytics.tsx         GA4 with Consent Mode v2
  ConsentBanner.tsx     cookie preferences
  JsonLd.tsx            structured-data helper
hooks/useHydrated.ts    server/client boundary for browser-only values
lib/
  navigation.ts         header and footer link sets
  seo.ts                per-route title/description, canonical, JSON-LD
  site.ts               URLs, GA id, form endpoint
public/                 favicons, manifest, social card
```

## Design tokens

Tailwind v4 is configured from CSS. All colours, fonts, spacing and breakpoints
live in the `@theme` block in `app/globals.css`, ported from the three original
stylesheets:

| Prefix | Source            | Used by                       |
| ------ | ----------------- | ----------------------------- |
| (none) | `src/styles.css`  | homepage                      |
| `p-`   | `src/page.css`    | standard pages                |
| `a-`   | `src/article.css` | insight guides, policy briefs |

Breakpoints are declared one pixel above the original `max-width` values so
Tailwind's `max-*` variants (`width < N`) reproduce the source media queries
exactly. For example `max-b900:` equals `@media (max-width: 900px)`.

Styling is done with utility classes. `app/globals.css` holds only
document-level defaults that utilities cannot express: `scroll-behavior`,
`overflow-x`, the focus ring and the `prefers-reduced-motion` reset.

## Adding a page

1. Create `app/<slug>/page.tsx`.
2. Add the route to `PAGE_SEO` in `lib/seo.ts` — `pageMetadata()` is typed
   against that map, so a missing entry is a compile error.
3. Add the route to `ENTRIES` in `app/sitemap.ts`.

## Notes

- Analytics stays off until a visitor accepts the cookie banner. The GA4 tag
  sets Consent Mode v2 defaults to `denied` and only loads the library after
  consent is granted or restored from `localStorage`.
- Enquiry and meeting-request forms post to FormSubmit and redirect to
  `/contact-success`. There is no server-side form handling.
- Security headers (HSTS, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`) are declared in `next.config.ts` so they apply on any
  host, not only Vercel.
