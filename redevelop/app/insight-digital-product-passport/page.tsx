import { ArticleShell } from '@/components/article/ArticleShell';
import { PassportGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-digital-product-passport');

const NODES: { label: string; lines: [string, string] }[] = [
  { label: '01 / DESIGN', lines: ['materials', 'components'] },
  { label: '02 / SUPPLY', lines: ['evidence', 'declarations'] },
  { label: '03 / USE', lines: ['instructions', 'maintenance'] },
  { label: '04 / CIRCULARITY', lines: ['repair', 'reuse / recycle'] },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Why this is an operating-data issue' },
  {
    t: 'p',
    text: 'On 20 July 2026, the European Commission announced that the Digital Product Passport Registry and a testing environment were live. The Commission describes the DPP as a digital container of product information intended to strengthen supply-chain transparency, support informed choices and facilitate compliance across the Single Market.',
  },
  {
    t: 'p',
    text: 'The scope is not identical for every product. The registry supports product groups covered by the Ecodesign for Sustainable Products Regulation and other Union legislation that requires registration, with implementation details arriving through product-specific rules. Treat this as preparation guidance, not a legal conclusion about a particular SKU or market.',
  },
  { t: 'h2', text: 'Start with the identity spine' },
  {
    t: 'p',
    text: 'A passport cannot be more reliable than the product identity behind it. Begin with a durable product, model, variant and batch or serial structure. Record who owns each identifier, when it changes and how a downstream system can resolve it. A QR code, NFC tag or web address is only an access mechanism; the important part is the record it resolves to.',
  },
  {
    t: 'p',
    text: 'Keep the identifier separate from marketing copy. Names and pack designs can change while the product record needs continuity. If a material, component or safety characteristic changes, define whether the change creates a new version, a new batch or a new product identity.',
  },
  { t: 'h2', text: 'Build a minimum data map' },
  {
    t: 'ul',
    items: [
      <>
        <strong>Product facts:</strong> model, variant, materials, components,
        dimensions and relevant technical characteristics.
      </>,
      <>
        <strong>Evidence:</strong> supplier declarations, test results,
        certificates, chain-of-custody records and the owner of each document.
      </>,
      <>
        <strong>Use and care:</strong> instructions, maintenance, repair
        guidance, software or firmware dependencies where relevant.
      </>,
      <>
        <strong>Circularity:</strong> repair, refurbishment, reuse, disassembly
        and end-of-life information that a product-specific rule may require.
      </>,
      <>
        <strong>Access rules:</strong> what is public, what is available to
        business partners or authorities, and what must remain protected.
      </>,
    ],
  },
  {
    t: 'p',
    text: 'Do not wait for every field to be finalized before creating the map. A field dictionary with a named owner and a known evidence location is already more useful than a slide saying “sustainability data” without a system behind it.',
  },
  { t: 'h2', text: 'Make supplier evidence operational' },
  {
    t: 'p',
    text: 'Ask suppliers for evidence in a repeatable structure: product or component ID, reporting period, material or claim, document type, issuing body, valid-from and valid-to dates, and the person responsible for questions. Store the source document and the normalized value together. A dashboard number without the document or calculation behind it is difficult to defend.',
  },
  {
    t: 'p',
    text: 'Version the record when a supplier declaration changes. Keep the previous version, the reason for change and the affected products. That creates a trace for quality teams and prevents a new document from silently overwriting the history of what was sold.',
  },
  { t: 'h2', text: 'Design for different readers' },
  {
    t: 'p',
    text: 'A consumer may need a short, readable explanation. A repair partner may need component and maintenance detail. A regulator or business customer may need evidence, identifiers and access logs. These are different views of the same product record. Design the data model once, then expose only the fields each audience is authorized to see.',
  },
  {
    t: 'p',
    text: 'The Commission’s announcement notes that the registry supports a user interface and an API, plus machine-readable data models and vocabulary resources. That is a signal to product teams: keep the source data structured and exportable. A collection of PDFs in a shared drive is evidence storage, not a passport system.',
  },
  { t: 'h2', text: 'A sensible first 30 days' },
  {
    t: 'ol',
    items: [
      'Choose one product family that is important to an EU-facing route.',
      'Map the identifier from supplier record to catalog, packaging and customer-facing page.',
      'List the material, compliance and circularity fields already available—and the gaps.',
      'Assign an owner and evidence location to every high-value field.',
      'Test a versioned record with a QR or web access pattern without presenting it as a legal passport until requirements are confirmed.',
    ],
  },
  {
    t: 'quote',
    text: 'The companies that move fastest on product transparency will not start with a QR code. They will start with a product record they can trust.',
  },
  {
    t: 'source',
    label: 'PRIMARY SOURCES',
    body: (
      <>
        <SourceNote>
          <SourceLink href="https://single-market-economy.ec.europa.eu/news/digital-product-passport-registry-now-live-2026-07-20_en">
            European Commission: The Digital Product Passport Registry is now
            live
          </SourceLink>
          <br />
          <SourceLink href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ%3AL_202401781">
            EUR-Lex: Regulation (EU) 2024/1781
          </SourceLink>
        </SourceNote>
        <SourceNote>
          The article explains an operational preparation approach. Product
          scope, delegated acts, deadlines and legal obligations depend on the
          relevant product and market; obtain current EU and local advice before
          treating this as a compliance determination.
        </SourceNote>
      </>
    ),
  },
];

export default function DigitalProductPassportGuide() {
  return (
    <ArticleShell
      back="BLOG / PRODUCT DATA & COMPLIANCE"
      title="Digital Product Passports: what exporters should organize before the data rush"
      dek="A Digital Product Passport is not just a QR code. It is a structured way to connect a product identity to the information, evidence and permissions that follow the product through its life."
      meta="METTGLOBAL CURRENT PRACTICE NOTE · PRODUCT DATA SYSTEMS · 10 MIN READ"
      graphic={<PassportGraphic nodes={NODES} />}
      endHeading="Need product data that can move across systems?"
      endHref="/audits-diagnostics"
      endLabel="Explore audits & diagnostics"
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
