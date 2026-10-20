# Historical operations case studies verification

This is the team's historical 18 October record. It does not describe the current homepage or final QA results. See [the current website release notes](website-release-2026-10-20.md) for the final implementation, validation and remaining release caveats.

Run on 18 October 2026 against a local production build (`next build` and
`next start`) in Microsoft Edge driven by Playwright. Not run on a Vercel
preview. Not a field-data or accessibility-certification test.

## Passed (actually run)

- `npm run build`: compiled, 54 static pages generated, no errors.
- `npx tsc --noEmit` and `npx eslint src`: clean.
- All six studies return 200; the three moved studies return 200; unknown
  slugs and `/services/cybersecurity`, `/services/audits` return 404.
- Eleven legacy URLs return a single 308 to a 200 page (no chains).
- Each study page: one H1, one figure, two questions, a self-canonical URL, a
  distinct title, and valid WebPage + BreadcrumbList JSON-LD tied to the
  Organization `@id`.
- Initial HTML contains the full copy, numbers and qualifiers. No internal
  editorial notes, no NDA or legal wording, no joined "MettGlobal" in visible
  text. The confidentiality note is shown once on the five confidential pages
  and is absent on Etsy. Exactly 64 Etsy tiles.
- Homepage proof band: six links with full accessible names.
- Real Inter loads (`document.fonts` reports Inter loaded). 0 console errors on
  19 page and viewport combinations; no horizontal overflow at 320, 375 and
  1440 px.
- Journey line: progress 0 / 0.50 / 1.00 with 0 / 3 / 6 milestones lit.
- Scroll tilt: tilted at load, flat by reading position; `none` with reduced
  motion and with JavaScript off.

## Not run / external

- Vercel preview URL (none created; nothing was deployed).
- Real-user performance (LCP, INP, CLS). Local single runs only.
- Keyboard and screen-reader walkthrough, 200% zoom, 768 and 1024 px checks.
- Search Console: Search generative AI inclusion control, Generative AI
  performance report, sitemap submission. Owner tasks.
- Bing Webmaster Tools sitemap submission.
- Robots and CDN check for OAI-SearchBot on production.

## Notes

- The three legacy studies kept their content and metadata; only their URLs,
  breadcrumb and schema URLs, and internal links changed.
- `public/Etsy/` (two screenshots) was already in the working tree. It is not
  used by this feature and was left untouched.

## Fix document (18 Oct 2026) — implementation notes

- Names, subtitles and meta titles for all 16 case studies live in `src/lib/caseNames.ts` and feed H1s, cards, JSON-LD and metadata.
- Homepage: "Selected results" strip (six cards, swipe + dots, play-once graphics) and a new "Selected work" section between Services and Partners. Animations use `useInViewOnce` (server HTML is the finished state; reduced motion skips the reset).
- `ScrollTilt`: smaller tilt, finishes at 70% viewport height, `overflow: clip`; the case-study hero panel is not tilted. `html { overflow-x: clip }` is a safety net.
- `node scripts/check-overflow.mjs` checks every sitemap URL at 1440/1024/768/390px (needs a running site and playwright-core). Last run: no overflow on 50 URLs.
- Homepage "INTERNATIONAL" card is fixed at 10 per the document's final decision.
- Not done: contrast tweak for small gold text on `/portfolio`, and the Lighthouse performance items.
