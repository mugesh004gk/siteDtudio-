const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/components/Layout.tsx',
  'src/components/library/Hero1.tsx',
  'src/components/library/Navbar1.tsx',
  'src/pages/ComponentsList.tsx',
  'src/pages/CategoryPage.tsx',
  'src/pages/ComponentDetail.tsx',
  'src/pages/AI.tsx',
  'src/registry/componentsRegistry.ts'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace \` with `
    content = content.replace(/\\`/g, '`');
    // Replace \${ with ${
    content = content.replace(/\\\$\{/g, '${');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  } catch (e) {
    console.log(`Error with ${file}:`, e.message);
  }
});
