# Direct Zoho delivery — verified localhost review

**Launch hold discovered in the subsequent readiness audit:** these successful local delivery results do not make normal Zoho Mail SMTP the recommended production channel. Zoho's published usage policy excludes automated/transactional sending from normal Mail. The appropriate Transactional Emails service is available in this account but not yet activated. Read [the current readiness decision](form-launch-readiness-2026-10-22.md) before publishing or conducting further real sending.

22 October 2026, Asia/Karachi. Branch `codex/form-delivery-investigation`.

The previous FormSubmit path was reproduced timing out after 20.156 seconds without a confirmation response. An email may still be delivered after such a timeout, so unconditional failure or success would be misleading. Mocked UI tests had verified validation/popups, not delivery reliability.

The homepage, Contact and meeting forms now support direct, server-side Zoho SMTP delivery, selected locally with `MAIL_DELIVERY=smtp`. A dedicated `Mett Global website forms` credential was generated with the user's explicit confirmation and saved privately in ignored `.env.local`. The ordinary Zoho account password is not in the project. The setup helper was stopped after saving the dedicated credential. TLS verification and SMTP authentication passed. No secret was printed or committed; the generated-secret display was closed and the temporary browser variable cleared. A scan of 36 client build files found no dedicated credential.

The sender is the authenticated mailbox, the recipient is fixed to `contact@mettglobal.com`, and the visitor's email is Reply-To. Success requires an acknowledged SMTP send accepting that recipient. Network uncertainty is not labelled a definite failure, and uncertain sends are not automatically retried or forwarded through a second provider. Email and phone validation, required meeting phone, field alignment, draft retention and accessible result popups remain in place. The temporary public FormSubmit GET diagnostic was removed.

## Real verification

Exactly two labelled test submissions were sent through the actual localhost browser forms, without request interception:

| Form    | Browser width | HTTP result  | Success popup | Duration | Reference                              |
| ------- | ------------- | ------------ | ------------- | -------- | -------------------------------------- |
| Contact | 390 px        | 200 accepted | Visible       | 5.650 s  | `6f67786b-8569-45d1-aabf-41b2067371ea` |
| Meeting | 1440 px       | 200 accepted | Visible       | 4.204 s  | `944642c4-5269-4731-b612-c066a75fe138` |

Both corresponding emails were opened in the authenticated `contact@mettglobal.com` Zoho inbox. Their body reference numbers matched the API/browser results; the meeting email included the explicit test-only/no-meeting instruction. No real client meeting was scheduled. No duplicate retry was made. Horizontal overflow checks passed in both browser states.

Local evidence (not staged with source): `docs/qa/zoho-local-real-delivery-2026-10-22.json`, `docs/qa/zoho-enquiry-success.png`, `docs/qa/zoho-meeting-success.png`.

The optimized build/TypeScript passed after the final removal of the diagnostic GET route, using one build worker because the host was low on memory. ESLint and 76 form/SMTP regression tests passed. These cover sender/recipient control, mandatory meeting phone, validation before sending, explicit acceptance, authentication rejection, dropped acknowledgement and prevention of automatic fallback duplicates.

Review: http://localhost:3015/contact and http://localhost:3015/appointment. Port 3000 belongs to another project and was left untouched. These results establish the tested local path; they do not guarantee every future network connection or production configuration.

## Deployment requirements

Nothing has been pushed, merged or deployed for this local revision. Before deployment, securely configure these server environment variables in the existing Mett Global Vercel project: `MAIL_DELIVERY=smtp`, `SMTP_HOST=smtppro.zoho.com`, `SMTP_PORT=465`, `SMTP_USER=contact@mettglobal.com`, and `SMTP_PASSWORD` using the dedicated credential. Never commit `.env.local`, add `NEXT_PUBLIC_` to these names, or publish the password in a PR, logs or chat.

The source retains the prior FormSubmit path for explicit rollback when SMTP mode is not selected. Deploying this code without the SMTP environment configuration would leave that old path active, so verify configuration before merging and smoke-test the deployed route afterward. The user's current hold still requires localhost review before any publishing. PR #11 is the older unmerged diagnostic change and should not be merged separately as a delivery fix.

Vercel documents support for SMTP except port 25 and requires awaiting message sending; this implementation awaits the Zoho send on encrypted port 465. Production delivery and hosting permissions still need verification during the authorized deployment step. See [Vercel SMTP guidance](https://vercel.com/kb/guide/serverless-functions-and-smtp) and [Zoho's SMTP settings](https://www.zoho.com/mail/help/zoho-smtp.html).
