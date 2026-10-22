> Historical review. Current release assessment: [preflight QA and release readiness](preflight-qa-and-release-readiness.md).

> Latest revision: see [process-animation-review.md](process-animation-review.md) for the labelled process animations, corrected homepage header alignment, current branch and animation checks. Earlier text-free illustration descriptions below are historical.

# Document review and browser QA

Reviewed 20 October 2026 on local branch `codex/document-review-and-visual-qa`. Work is uncommitted and local. No push, merge or live deployment was performed. Existing work is preserved in the retained Git stash and working tree.

## Fixes from need changes.docx

1. Removed the marked services introduction and redundant button.
2. Aligned the clients and partners heading with its introduction.
3. Removed the marked homepage relationship footnote.
4. Rebuilt the FAQ layout with a full-width accordion below its header, removing the empty desktop column.
5. Set homepage contact values in Inter at 16–17px; aligned labels and values and gave the U.S. representative a structured block.
6. Reduced portfolio and inner-page spacing, made case titles bold, and aligned the artwork and text columns. International work remains first and left; local work follows and sits right on the homepage. The homepage has category panels rather than individual case studies.
7. Connected the MyTrackee card, including its artwork, to a detail page. Its description uses the supplied GPS tracking portal facts, without invented results or technology claims.

## Additional visual issues found and fixed

- Replaced the automotive miniatures with 17 brand-coloured interface/workflow illustrations. These are conceptual diagrams, not screenshots of client software. Text and numerical claims remain outside the artwork.
- Long URL examples now wrap inside article bodies. Testing checks both body and root width; checking the root alone had missed this overflow.
- Mobile graphic headings and labels now occupy separate lines.
- A one-item delivery section uses one column rather than leaving three empty grid columns.
- Removed two consecutive, overlapping related-work sections from the e-commerce service page.
- Mobile call/WhatsApp controls now use a safe-area-aware bottom strip with reserved page space, rather than floating over text.
- Preserved the original homepage hero sizing, browser-height scaling rules and section minimum heights. A short 1366 × 560 window still applies its original 0.66 scaling.

## Validation

- Optimized production build and full ESLint passed; TypeScript passed during the build.
- HTTP, metadata, canonical, structured data, sitemap, internal-link and redirect checks: 51 sitemap pages, 17 portfolio entries, 24 redirects; zero failures.
- Document acceptance checks passed at 1440 × 900, 1366 × 560, 820 × 1180, 390 × 844 and 320 × 568.
- Automated WCAG A/AA and best-practice checks across all 51 pages at desktop and mobile sizes found zero violations in the rules run.
- Chrome and Firefox each passed 153 page/viewport checks at widths 1440, 820 and 390, with top/middle/bottom measurements. Desktop and mobile opening/middle screenshot galleries were inspected for all pages.
- WebKit also passed 153 layout checks. It required a virtual HTTPS proxy for the production HTTPS-upgrade policy on localhost; background Next.js prefetches reported access-control errors through that harness. These are retained in the report, and Safari navigation is not claimed as fully verified. Production security headers were not weakened.
- Forms, error/retry, date/time booking, mobile navigation, Escape/focus and reduced motion passed 12 interaction checks. Form responses were mocked; no test enquiries were sent.
- All 17 case illustrations and headings remain visible with JavaScript disabled. Offscreen and hidden-page animation pausing and reduced-motion support are retained.
- A three-second desktop animation sample measured median 16.7ms and p95 16.9ms frame intervals, with zero intervals over 50ms. The static comparison had the same values. This is a local sample rather than a guarantee on every device.

Evidence is in `docs/qa/`: document-acceptance.json, whole-site-browser-audit-*.json, accessibility-all-pages.json, accessibility-mobile-pages.json, no-javascript-artwork.json, scene-motion-audit.json, and whole-site screenshot galleries. The earlier SEO audit remains in `website-review-and-seo-audit.md`; its old design and speed figures describe the previous revision.

## Current speed measurements

Local production build, Lighthouse default simulated mobile throttling and desktop preset; runs performed sequentially.

| Page      | Preset  | Performance | Accessibility | Best practices | SEO | LCP   | TBT    | CLS |
| --------- | ------- | ----------- | ------------- | -------------- | --- | ----- | ------ | --- |
| Homepage  | Mobile  | 95          | 100           | 100            | 100 | 2.6 s | 100 ms | 0   |
| Portfolio | Mobile  | 94          | 100           | 100            | 100 | 2.9 s | 130 ms | 0   |
| Homepage  | Desktop | 99          | 100           | 100            | 100 | 0.7 s | 0 ms   | 0   |
| Portfolio | Desktop | 99          | 100           | 100            | 100 | 0.7 s | 80 ms  | 0   |

Mobile LCP remains 2.6–2.9s in these runs. Zero layout shift and low blocking time are positive, but these lab results are not a field Core Web Vitals pass. The original homepage presentation and browser-height rules were preserved.

## Review limits and next improvements

Browser engines and responsive emulation were tested; physical iPhone/iPad hardware and a complete manual screen-reader review were not available. Real, approved client screenshots or short product recordings would strengthen portfolio evidence beyond conceptual illustrations. More MyTrackee project details should be added only when verified. Local speed results do not measure production hosting or Google field data, and technical fixes cannot guarantee rankings.
