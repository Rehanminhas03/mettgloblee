import { ArticleShell } from '@/components/article/ArticleShell';
import { FeedGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-product-feed-health');

const CELLS = [
  { num: '01', title: 'Stable ID', note: 'SKU or variant key' },
  {
    num: '02',
    title: 'Truthful title',
    note: 'matches the landing page',
    accent: true,
  },
  { num: '03', title: 'Clear description', note: 'product facts only' },
  { num: '04', title: 'Useful image', note: 'crawlable main asset' },
  { num: '05', title: 'Price + stock', note: 'same at every checkpoint' },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Think of the feed as a product data layer' },
  {
    t: 'p',
    text: 'Google’s Merchant Center product data specification describes accurate, correctly formatted product data as essential for ads and free listings. Missing or incorrect information can lead to disapprovals, limited eligibility or a product being displayed incorrectly. That makes the feed part of the storefront architecture, not a one-time marketing upload.',
  },
  {
    t: 'p',
    text: 'The fastest way to improve it is to trace one SKU from the master catalog to the feed, the product page, structured data and checkout. If the title, variant, price or availability changes between those checkpoints, the customer and the platform are receiving different versions of the same product.',
  },
  { t: 'h2', text: 'Start with identity and variants' },
  {
    t: 'p',
    text: 'A product ID should be unique and stable. Use the SKU where it is the durable business key, and do not recycle an ID for a completely different product. For variants, preserve the relationship between the parent item and the variant attributes such as size, color or pack count. A stable identity makes it possible to diagnose history instead of treating every feed refresh as a new object.',
  },
  {
    t: 'p',
    text: 'Make the title specific without turning it into ad copy. The title should match what appears on the landing page and include the feature that distinguishes a variant. Keep promotional language, discount claims and gimmicky punctuation out of the product title; put the offer in the appropriate promotion or pricing field instead.',
  },
  { t: 'h2', text: 'Quality-check the visible fields' },
  {
    t: 'ul',
    items: [
      <>
        <strong>Description:</strong> describe the product itself, in language
        that agrees with the product page. Remove links, unrelated products and
        promotional slogans.
      </>,
      <>
        <strong>Main image:</strong> use a crawlable, high-quality image that
        represents the product. Avoid placeholders, watermarks, borders and
        images that have been scaled up beyond their source quality.
      </>,
      <>
        <strong>Link:</strong> send the shopper to a verified, working product
        URL over HTTP or HTTPS. Do not route a variant to a generic category
        page.
      </>,
      <>
        <strong>Price and availability:</strong> reconcile the feed, landing
        page, checkout and structured data. A product that says &ldquo;in
        stock&rdquo; in one place and &ldquo;unavailable&rdquo; in another
        creates both trust and eligibility risk.
      </>,
    ],
  },
  { t: 'h2', text: 'Run a feed health loop, not a monthly scramble' },
  {
    t: 'p',
    text: (
      <>
        Divide issues into three queues. <strong>Blocking</strong> issues affect
        eligibility or checkout truth, such as missing IDs, broken links or
        price mismatch. <strong>Quality</strong> issues reduce clarity, such as
        weak titles, thin descriptions or poor images.{' '}
        <strong>Enhancement</strong> issues improve discovery, such as richer
        attributes or better variant grouping.
      </>
    ),
  },
  {
    t: 'p',
    text: 'Give each queue an owner and a freshness target. A price or availability mismatch should be investigated the same day; a title or image improvement can sit in a planned catalog sprint. Record the first detected date, affected SKU count, root cause and verification result so the team can see whether the system is getting healthier.',
  },
  { t: 'h2', text: 'The five-minute SKU trace' },
  {
    t: 'p',
    text: 'Pick the product with the highest commercial importance and ask five questions: Is the ID stable? Does the title match the page? Does the image represent the exact item? Do price and stock agree across feed, page and checkout? If a customer saw only the feed content, would they understand what they are buying?',
  },
  {
    t: 'p',
    text: 'If the answer is no, fix the source-of-truth workflow before adding more ad spend. A feed that is accurate, complete and refreshed on time gives every downstream channel a better starting point.',
  },
  {
    t: 'quote',
    text: 'A catalog is not clean because it exported successfully. It is clean when the product record tells the same truth everywhere a customer or platform can see it.',
  },
  {
    t: 'source',
    label: 'PRIMARY SOURCE',
    body: (
      <>
        <SourceLink href="https://support.google.com/merchants/answer/7052112?hl=en">
          Google Merchant Center: product data specification
        </SourceLink>
        <SourceNote>
          The specification covers IDs, titles, descriptions, links, images,
          price and availability, plus common causes of disapprovals and limited
          eligibility. Requirements vary by destination and product category;
          confirm the current specification before changing a production feed.
        </SourceNote>
      </>
    ),
  },
];

export default function ProductFeedHealthGuide() {
  return (
    <ArticleShell
      back="BLOG / COMMERCE SYSTEMS"
      title="The product feed is part of the storefront: a Merchant Center health check"
      dek="A shopper may never see the feed, but the feed decides how a product can be discovered, classified and displayed. When catalog data disagrees with the landing page, growth becomes an eligibility problem before it becomes a creative problem."
      meta="METTGLOBAL OPERATOR PLAYBOOK · PRODUCT DATA QUALITY · 9 MIN READ"
      graphic={<FeedGraphic cells={CELLS} />}
      endHeading="Need a stronger commerce foundation?"
      endHref="/ecommerce-growth"
      endLabel="Explore eCommerce growth"
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
