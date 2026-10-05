import type { Leader } from '@/components/page/LeaderCard';

/** Current leadership. Drives the About page and the site's structured data. */
export const LEADERSHIP: Leader[] = [
  {
    role: 'Founder',
    name: 'Hammad Ayub',
    copy: 'Leads marketing, paid media, customer relationships, content direction and commercial positioning.',
    email: 'hammad@mettglobal.com',
    whatsapp: '+923355005901',
    phone: { href: 'tel:+923355005901', label: '+92 335 500 5901' },
  },
  {
    role: 'Co-Founder',
    name: 'Muhammad Ahmad Aamir',
    copy: 'Leads business development, sales coordination, eCommerce, logistics, supply chain and operational execution.',
    email: 'ahmad@mettglobal.com',
    whatsapp: '+923046551553',
    phone: { href: 'tel:+923134262282', label: '+92 313 426 2282' },
  },
  {
    role: 'Director, U.S. Business Development',
    name: 'Usman Rafiq',
    copy: 'U.S. Representative for MettGlobal, leading commercial conversations and U.S. client coordination.',
    email: 'usman@mettglobal.com',
    whatsapp: '18328580716',
    phone: { href: 'tel:+18328580716', label: '+1 (832) 858-0716' },
  },
];
