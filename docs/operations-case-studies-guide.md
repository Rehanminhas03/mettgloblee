# Operations case studies: maintenance guide

Plain-English guide for Rehan. Written 18 October 2026.

## What was built

Six case studies for E-Commerce & Supply Chain, all under `/portfolio/{slug}`:

| #   | Slug                                | Headline figure                        |
| --- | ----------------------------------- | -------------------------------------- |
| 1   | `claims-recovery`                   | >£50,000 recovered in one year         |
| 2   | `remote-warehouse-management`       | >95% inventory and fulfilment accuracy |
| 3   | `procurement-sourcing`              | 2 sourcing countries                   |
| 4   | `courier-3pl-management`            | End to end                             |
| 5   | `multichannel-ecommerce-operations` | 6 Amazon marketplaces                  |
| 6   | `etsy-in-house-launch`              | 2 days to first sale (in-house)        |

They appear in four places: the detail pages, the six-stop journey inside the
Portfolio International section, the six-cell proof band under the homepage
hero, and the `/case-studies` listing. `/ecommerce-supply-chain` links to them.

## Where things live (actual paths)

| File                                                   | Job                                                                                                                                                         |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/operations-case-studies.ts`               | **The only place the copy, numbers and metadata live.** Server-only. Validates itself at build time. Also builds the proof band, listing cards and sitemap. |
| `src/components/case-studies/types.ts`                 | The TypeScript shape of a study. No data.                                                                                                                   |
| `src/components/case-studies/CaseStudyPage.tsx`        | The shared detail page. One template for all six.                                                                                                           |
| `src/components/case-studies/CaseStudyHero.tsx`        | Ink hero: H1, result, qualifier, the single figure.                                                                                                         |
| `src/components/case-studies/CaseStudyVisual.tsx`      | The six figures (recovery, accuracy, sourcing, invoice, channels, etsy).                                                                                    |
| `src/components/case-studies/OperationsJourney.tsx`    | The six-stop list on `/portfolio`.                                                                                                                          |
| `src/components/case-studies/JourneyScroll.client.tsx` | Makes the gold line fill as you scroll.                                                                                                                     |
| `src/components/case-studies/ResultsStrip.tsx` | The homepage results carousel (cards with graphics). |
| `src/components/case-studies/ProofCarousel.client.tsx` | Carousel buttons and gentle autoplay (off with reduced motion, paused on hover or focus). |
| `src/components/case-studies/MiniVisual.tsx` | The small schematic graphics used on the homepage cards and in the portfolio journey. They never imply a value. |
| `src/content/home-proof.ts`                            | **The eight cards in the homepage results carousel**: a mix of marketing, software and e-commerce. E-commerce ones are read from the case-study records.        |
| `src/components/case-studies/RelatedCaseStudies.tsx`   | The two related links at the end of a page.                                                                                                                 |
| `src/components/case-studies/MotionGate.client.tsx`    | Loads the figure animation only when it nears the screen.                                                                                                   |
| `src/components/case-studies/enhance-visual.client.ts` | The figure animation itself (line draw, count-up, tile reveal).                                                                                             |
| `src/components/case-studies/case-study-jsonld.ts`     | Structured data (WebPage + BreadcrumbList).                                                                                                                 |
| `src/components/case-studies/case-studies.module.css`  | All styling and the motion timing.                                                                                                                          |
| `src/components/ui/scroll-tilt.tsx`                    | The container-scroll effect (card tilts flat while scrolling).                                                                                              |
| `src/components/ui/resizable-navbar.tsx`               | The navbar (nav links are client-side links).                                                                                                        |
| `src/app/(site)/portfolio/[slug]/page.tsx`             | Route. Serves the six studies **and** the existing project pages.                                                                                           |
| `src/lib/services.ts`                                  | `RETIRED_SERVICE_REDIRECTS`: every permanent redirect.                                                                                                      |
| `src/lib/seo.ts`                                       | `routeMetadata()` builds metadata for routes outside `PAGE_SEO`.                                                                                            |

Scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## How to change things

- **Edit a study's words:** change its record in `operations-case-studies.ts`.
  The page, journey, proof band, listing card and metadata all follow.
- **Change a number:** update, in the same record, `hero.display`,
  `hero.accessible`, `hero.label`, `hero.qualifier`, `visual.caption` and the
  `summary`/`deck` text. Never turn a ">" figure into an exact one.
- **Change how all six pages look:** edit the shared template and
  `case-studies.module.css`.
- **Change colours:** the `--cs-*` variables at the top of the CSS module.
- **Change the animation feel:** `--cs-duration`, `--cs-stagger` and `--cs-ease`
  on `.scope` in the CSS module. One place; the script reads them. Total motion
  is capped at 1400ms in `enhance-visual.client.ts`.
- **Change the scroll-tilt strength:** `START_TILT` and `START_SCALE` at the top
  of `scroll-tilt.tsx`.
- **Change a URL:** rename the slug in the record, then add a permanent
  redirect from the old path in `src/lib/services.ts`.

## Add a seventh study

1. Add a record to `internalStudies` in `operations-case-studies.ts`.
2. The build currently insists on exactly six studies. To add a seventh,
   change the "exactly six" check. The homepage band is separate: it lives in
   `home-proof.ts` and is not tied to the number of studies, so add a figure
   there only if it is documented on the study's own page.
3. Give it a `visual.type`. A new figure type needs a component in
   `CaseStudyVisual.tsx`.
4. Pick two existing `relatedSlugs`.
5. Run `npm run build`; it fails loudly if a record is incomplete.

## Redirects

`/case-study-jetour-ittehad`, `/case-study-hyundai-islamabad` and
`/case-study-csm-ittehad` now live at `/portfolio/{slug}` and redirect
permanently (308). Also redirected: `/team` and the old `/services/*` paths.
`/services/cybersecurity` and `/services/audits` are intentionally real 404s.
Keep every redirect permanently.

## Rules that must not be broken

- Confidential studies show the withheld-name note; the Etsy study is labelled
  "In-house project" everywhere it appears.
- ">£50,000" always keeps "more than" or ">" and "in one year".
- The two accuracy figures stay "above 95%". No returns percentage.
- The 95.6/100 average belongs to the ten sample listings, not all 64.
- Mavya is always named next to its scores.
- `editorialNotes` never leaves the content file.
