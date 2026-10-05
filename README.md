# MettGlobal

The MettGlobal website, built on Next.js (App Router) with TypeScript and
Tailwind CSS v4. It deploys to Vercel from the repository root.

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
src/
  app/                    routes (the folders in parentheses are route groups —
                          they organise the code and do not appear in URLs)
    layout.tsx            <html>/<body>, analytics, consent banner
    page.tsx              homepage
    globals.css           Tailwind import + design tokens
    robots.ts, sitemap.ts /robots.txt and /sitemap.xml
    (site)/               about, contact, appointment, portfolio (+ [slug]
                          project pages), services, privacy, terms, sitemap
    (services)/           the four service pages
    (case-studies)/       /case-studies and the Jetour, Hyundai and CSM studies
    (blog)/               /blog, the field guides (insight-*) and briefs (update-*)
  components/
    home/                 homepage sections (hero, services, clients, FAQ, contact)
    page/                 standard page shell, forms, scheduler, portal previews
    article/              guide + brief shell and prose blocks
    site/                 header, footer, logo, work cards
    ui/                   resizable navbar
  lib/                    data and helpers: services, projects, portfolio,
                          partners, leadership, faqs, seo, site, navigation
  hooks/, types/
public/                   favicons and logo, social card, manifest, team photos
```

## Design tokens

Tailwind v4 is configured from CSS. All colours, fonts, spacing and breakpoints
live in the `@theme` block in `src/app/globals.css`, ported from the three original
stylesheets:

| Prefix | Source            | Used by                       |
| ------ | ----------------- | ----------------------------- |
| (none) | `src/styles.css`  | homepage                      |
| `p-`   | `src/page.css`    | standard pages                |
| `a-`   | `src/article.css` | insight guides, policy briefs |

Breakpoints are declared one pixel above the original `max-width` values so
Tailwind's `max-*` variants (`width < N`) reproduce the source media queries
exactly. For example `max-b900:` equals `@media (max-width: 900px)`.

Styling is done with utility classes. `src/app/globals.css` holds only
document-level defaults that utilities cannot express: `scroll-behavior`,
`overflow-x`, the focus ring and the `prefers-reduced-motion` reset.

## Adding a page

1. Create `src/app/<group>/<slug>/page.tsx` in the matching route group.
2. Add the route to `PAGE_SEO` in `src/lib/seo.ts` — `pageMetadata()` is typed
   against that map, so a missing entry is a compile error.
3. Add the route to `ENTRIES` in `src/app/sitemap.ts`.

## Notes

- Analytics stays off until a visitor accepts the cookie banner. The GA4 tag
  sets Consent Mode v2 defaults to `denied` and only loads the library after
  consent is granted or restored from `localStorage`.
- Enquiry and meeting-request forms post to FormSubmit and redirect to
  `/contact-success`. There is no server-side form handling.
- Security headers (HSTS, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`) are declared in `next.config.ts` so they apply on any
  host, not only Vercel.
