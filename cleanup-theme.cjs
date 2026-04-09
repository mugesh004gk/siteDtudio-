const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace hardcoded colors with variables
      content = content.replace(/bg-white\b/g, 'bg-surface');
      content = content.replace(/bg-slate-50\b|bg-gray-50\b/g, 'bg-bg');
      content = content.replace(/dark:bg-[a-z0-9]+\b/g, ''); // discard dark:bg-* since surface/bg is already dark
      
      content = content.replace(/border-gray-200\b/g, 'border-white/10');
      content = content.replace(/border-gray-100\b/g, 'border-white/5');
      content = content.replace(/dark:border-[a-z0-9]+\b/g, '');
      
      content = content.replace(/text-gray-[0-9]+\b/g, 'text-text/70');
      content = content.replace(/dark:text-[a-z0-9]+\b/g, '');
      
      content = content.replace(/text-black\b/g, 'text-text');

      content = content.replace(/bg-gray-100\b/g, 'bg-white/5');
      content = content.replace(/bg-gray-200\b/g, 'bg-white/10');

      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Cleanup complete');
