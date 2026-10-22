# Three service animation revisions

20 October 2026. Local branch: `codex/refine-three-service-scenes`. No commit, push, merge or live deployment.

Revised only the three illustrations requested by the user:

- **Serenada Mental Health / Found by Patients:** removed the seated figure and chair. The illustration now follows local care discovery, treatment information and an appointment request. Treatment focus changes by fading between fixed cards, so a moving border does not cross the text. No ranking or patient outcome is claimed.
- **Luxury O'Hare Limo / Booked by Search:** removed the aircraft and tower. A website enquiry connects an O'Hare-to-Chicago example journey with a moving route marker and a gently arriving vehicle. The loop resets while faded out. It is an illustration of the service, not a claim that GPS software was delivered.
- **SFYKEA / Car Care, On Demand:** removed the person spraying the car. A customer booking moves from the app into admin/partner portals, rider assignment and completed doorstep service. This matches the website, app and portal scope in the project description.

The existing charcoal/cream/gold styling, nine-second pace, reduced-motion support and offscreen pausing are retained. No new library, video asset or per-frame JavaScript was added. No homepage layout or case-study text was edited in this revision.

Validation:

- Optimized production build, TypeScript, component ESLint, formatting and diff whitespace checks passed.
- Saved and compared reduced-motion renders of the other 14 scenes at the same viewport: **zero changed pixels in every comparison**.
- Reviewed the three new scenes at 0, 3 and 6 seconds, plus phone-sized screenshots.
- Label collision/clipping checks passed across all 17 scenes at 1440, 390 and 320px widths (51 combinations). Panel bounds checks at four cycle positions also passed (68 combinations).
- All 17 scene headings and illustrations remain visible with JavaScript disabled. No browser JavaScript errors were recorded in the targeted visual checks.

Evidence: `docs/qa/three-service-scenes-revision.json`, `three-service-scenes-storyboard.png`, `revised-serenada-mental-health-mobile.png`, `revised-luxury-ohare-limo-mobile.png`, `revised-sfykea-mobile.png`, `three-service-scenes-motion.json`, `process-scene-label-audit.json`, `process-motion-bounds.json` and `no-javascript-artwork.json`.

Focused two-second local samples for each new scene measured a 16.7ms median animation-frame interval and no intervals over 50ms. Reduced-motion mode stopped every new animation. These are local samples, not field performance guarantees.
