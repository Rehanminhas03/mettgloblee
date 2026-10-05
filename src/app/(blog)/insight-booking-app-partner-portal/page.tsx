import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-booking-app-partner-portal');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The customer app is only one part of the product' },
  {
    t: 'p',
    text: 'An on-demand service — a home car wash, a cleaner, a technician — serves three audiences: the customer who books, the field staff who do the work, and the owner who has to run it all. An app for the first group alone leaves the other two on phone calls and spreadsheets.',
  },
  { t: 'h2', text: 'Make booking simple and trustworthy' },
  {
    t: 'p',
    text: 'A customer should be able to pick a package, a date and a time slot in a few taps and get a clear confirmation. The slots on offer must reflect real capacity, or the first missed booking costs more trust than the app earned.',
  },
  { t: 'h2', text: 'Assign every booking to a person' },
  {
    t: 'p',
    text: 'Each booking needs an owner on the day. Match it to an available rider or technician in that area, make the assignment visible to both sides, and keep a record of who did what.',
  },
  { t: 'h2', text: 'Give the owner an admin portal' },
  {
    t: 'ul',
    items: [
      'Today’s orders and booked slots at a glance.',
      'Customers, bookings and order details in one place.',
      'Riders or technicians and where they are assigned.',
      'Activity by area, so demand and gaps are visible.',
    ],
  },
  { t: 'h2', text: 'Use partner portals to grow by area' },
  {
    t: 'p',
    text: 'When you grow through local partners, give each partner a separate login. They add and manage the riders for their own area and see only their own data, while the owner keeps the full picture. Delegation without losing control.',
  },
  { t: 'h2', text: 'Keep one source of truth' },
  {
    t: 'p',
    text: 'The app and every portal should read from the same backend, such as a cloud database. A booking made on a phone is then the same record the rider, the partner and the owner see, with no copying between systems.',
  },
  { t: 'h2', text: 'Ship on both stores, then iterate' },
  {
    t: 'p',
    text: 'A cross-platform framework lets one team ship iOS and Android together and keep them in step. Launch with the core booking flow, watch how customers and field staff actually use it, and let real usage decide what to build next.',
  },
  {
    t: 'quote',
    text: 'The app wins the booking. The portals are what let the business keep every promise it just made.',
  },
];

export default function BookingAppGuide() {
  return (
    <ArticleShell
      back={'BLOG / APPS & PORTALS'}
      title={
        'Booking apps and partner portals: what an on-demand service business needs'
      }
      dek={
        'A customer app is the visible part. The admin and partner portals behind it are what make bookings, riders and areas manageable as the business grows.'
      }
      meta={'METTGLOBAL FIELD GUIDE · APPS & PORTALS · 8 MIN READ'}
      graphic={<ChipGraphic steps={['BOOK', 'ASSIGN', 'SERVE', 'REPORT']} />}
      endHeading={'Building a booking platform?'}
      endHref={'/web-software-development'}
      endLabel={'Explore Web & Software Development'}
    >
      <JsonLd data={articleJsonLd('/insight-booking-app-partner-portal')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
