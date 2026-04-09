const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('Library.tsx'));

const libraryMap = {
  'NavbarLibrary.tsx': { type: 'standard' },
  'HeroLibrary.tsx': { type: 'standard' },
  'FeaturesLibrary.tsx': { type: 'standard' },
  'AboutLibrary.tsx': { type: 'standard' },
  'ServicesLibrary.tsx': { type: 'standard' },
  'PricingLibrary.tsx': { type: 'generic' },
  'TestimonialsLibrary.tsx': { type: 'testimonial' },
  'FAQLibrary.tsx': { type: 'generic' },
  'BlogLibrary.tsx': { type: 'generic' },
  'GalleryLibrary.tsx': { type: 'generic' },
  'CTALibrary.tsx': { type: 'generic' },
  'ContactLibrary.tsx': { type: 'generic' },
  'FooterLibrary.tsx': { type: 'generic' },
  'StatsLibrary.tsx': { type: 'generic' },
};

for (const file of files) {
  if (!libraryMap[file]) continue;
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const type = libraryMap[file].type;

  let newHandleUseThis = "";
  if (type === 'standard') {
    newHandleUseThis = `
  const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  } else if (type === 'testimonial') {
    newHandleUseThis = `
  const handleUseThis = (testimonial: any) => {
    const props = customProps[testimonial.id] || testimonial.defaultProps;
    addComponent(testimonial.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  } else {
    newHandleUseThis = `
  const handleUseThis = (item: any) => {
    const props = customProps[item.id] || item.defaultProps;
    addComponent(item.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  }

  // Find the position after handleCustomize and insert it there.
  const customizeRegex = /const handleCustomize = [\s\S]*?};/g;
  if (content.match(customizeRegex)) {
      content = content.replace(customizeRegex, (match) => match + newHandleUseThis);
  }

  // CRITICAL: Filter out any accidental syntax errors or double-adds
  // There's a mess at lines 33-39 in some files.
  // We'll replace the block between handleCustomize and handleCopyCode with Just our new function.
  
  const blockRegex = /const handleCustomize = ([\s\S]*?const handleCopyCode = )/g;
  content = content.replace(blockRegex, (match) => {
      // Extract customize function only
      const customizePart = match.match(/const handleCustomize = [\s\S]*?};/)[0];
      return customizePart + newHandleUseThis + "\n\n  const handleCopyCode = ";
  });

  fs.writeFileSync(path.join(pagesDir, file), content, 'utf-8');
}
console.log('Manual reconstruction complete.');
