async function checkLd(url) {
  const html = await (await fetch('http://localhost:3000' + url)).text();
  const matches = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || [];
  console.log('=== ' + url + ' ===');
  for (const m of matches) {
    const raw = m.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
    try {
      const parsed = JSON.parse(raw);
      if (parsed['@graph']) {
        for (const n of parsed['@graph']) {
          console.log('  Graph Node: ' + n['@type'] + (n.headline ? ' | ' + n.headline : '') + (n.dateModified ? ' | modified: ' + n.dateModified : ''));
        }
      } else {
        console.log('  Node: ' + parsed['@type']);
      }
    } catch (e) {
      console.log('  JSON parse err:', e.message);
    }
  }
}

async function run() {
  await checkLd('/insight-amazon-fba-lost-damaged-inventory');
  await checkLd('/insight-manual-amazon-reimbursement-vs-bots');
  await checkLd('/insight-walmart-wfs-reimbursement-claim');
  await checkLd('/insight-meta-lead-ads-lead-quality');
}

run();
