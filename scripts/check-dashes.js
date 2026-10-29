const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git') && !file.includes('docs')) {
        results = results.concat(getFiles(file));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.txt')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles('src').concat(['public/llms.txt', 'public/robots.txt']);
let totalFound = 0;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/[\u2013\u2014]/g);
  if (matches) {
    console.log(`DASHES (${matches.length}) found in ${file}`);
    totalFound += matches.length;
  }
}

if (totalFound > 0) {
  console.log(`Total em/en dashes found: ${totalFound}`);
} else {
  console.log('Zero em/en dashes found!');
}
