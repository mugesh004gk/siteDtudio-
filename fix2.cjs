const fs = require('fs');
const path = require('path');

function fixInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixInDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      if (content.includes('\\`')) {
        content = content.replace(/\\`/g, '`');
        changed = true;
      }
      if (content.includes('\\${')) {
        content = content.replace(/\\\$\{/g, '${');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  }
}

fixInDir(path.join(__dirname, 'src/components/library'));
console.log('Fix complete');
