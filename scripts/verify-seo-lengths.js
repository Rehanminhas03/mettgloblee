const fs = require('fs');

const seoContent = fs.readFileSync('src/lib/seo.ts', 'utf8');

// Extract PAGE_SEO block
const match = seoContent.match(/export const PAGE_SEO = ({[\s\S]*?}) as const/);
if (!match) {
  console.error('Could not find PAGE_SEO block');
  process.exit(1);
}

const lines = match[1].split('\n');
let currentPath = '';
let hasError = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const pathMatch = line.match(/^'([^']+)': \{/);
  if (pathMatch) {
    currentPath = pathMatch[1];
    continue;
  }
  
  const titleMatch = line.match(/^title:\s*'([^']+)',/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length > 60) {
      console.error(`TITLE TOO LONG (${title.length} chars) at ${currentPath}: "${title}"`);
      hasError = true;
    }
  }

  const descMatch = line.match(/^description:\s*'([^']+)'/);
  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length > 155) {
      console.error(`DESC TOO LONG (${desc.length} chars) at ${currentPath}: "${desc}"`);
      hasError = true;
    }
    if (desc.includes('—') || desc.includes('–')) {
      console.error(`DASH IN DESC at ${currentPath}: "${desc}"`);
      hasError = true;
    }
    if (desc.startsWith('Over £50,000') || desc.startsWith('£50,000') || desc.startsWith('We recovered over £50,000')) {
      console.error(`OPENS WITH £50k FIGURE at ${currentPath}: "${desc}"`);
      hasError = true;
    }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log('SUCCESS: All titles <= 60, all descriptions <= 155, 0 dashes, no £50k opens!');
}
