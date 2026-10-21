import { handleEnquiry } from '@/lib/enquiry-handler';
import { FORM_AJAX_ENDPOINT } from '@/lib/site';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request: Request) {
  return handleEnquiry(request);
}

/** Read-only upstream reachability: never submits a form or sends email. */
export async function GET() {
  try {
    const response = await fetch(FORM_AJAX_ENDPOINT, {
      headers: { Accept: 'application/json' },
      redirect: 'manual',
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    return Response.json(
      {
        providerStatus: response.status,
        type: response.headers.get('content-type'),
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    const code = (error as { cause?: { code?: string } })?.cause?.code;
    return Response.json(
      {
        reachable: false,
        ...(code && /^[A-Z0-9_]{1,64}$/.test(code) ? { code } : {}),
      },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
