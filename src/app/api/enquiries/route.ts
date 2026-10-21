import { handleEnquiry } from '@/lib/enquiry-handler';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request: Request) {
  return handleEnquiry(request);
}
