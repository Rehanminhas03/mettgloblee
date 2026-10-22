# Meeting fields — corrected local review

21 October 2026. Branch `codex/meeting-fields-alignment`, based on local validation commit `913ea49`. This supersedes the optional meeting phone and visible format guidance described in the earlier validation review.

- Meeting Phone / WhatsApp is required in the browser and API. Missing/blank phone is rejected before forwarding. Company and preparation notes remain optional.
- Required fields have visible stars; inputs retain native required semantics for assistive technology. Stars were also added to the existing required homepage and Contact fields.
- Removed the country-specific phone placeholder and permanent guidance. Phone validation errors use generic language with no country-specific examples.
- The meeting details grid aligns each label at the start and prevents internal grid row stretching. Phone and Company inputs retain equal top positions and heights even when phone errors appear. Homepage and Contact labels also use start alignment to prevent equivalent error-state stretching.
- Existing international/Pakistan phone parsing, server normalization, email checks, saved drafts and result notifications are preserved.

Validation: optimized build/TypeScript and ESLint passed; 65 form regression tests passed, including mandatory meeting phone enforcement before email delivery. 192 mocked browser validation assertions passed at 320/390/768/1440 pixels, including desktop Phone/Company geometry in clean and error states, empty required phone, international formats, corrections, accessibility checks and valid submissions. All 146 notification regression assertions passed. No real emails were sent during this pass. Desktop/mobile screenshots were visually inspected: `docs/qa/meeting-alignment-1440.png` and `docs/qa/meeting-alignment-390.png`.

Localhost remains http://localhost:3015/appointment. Port 3000 was not touched. No push, merge or deployment. Earlier production delivery uncertainty remains undiagnosed; these local checks do not prove live email delivery.
