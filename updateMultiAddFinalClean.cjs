const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('Library.tsx'));

const libraryMap = {
  'NavbarLibrary.tsx': { itemVar: 'nav', previewFunc: 'setPreviewNav' },
  'HeroLibrary.tsx': { itemVar: 'hero', previewFunc: 'setPreviewHero' },
  'FeaturesLibrary.tsx': { itemVar: 'feature', previewFunc: 'setPreviewFeature' },
  'AboutLibrary.tsx': { itemVar: 'about', previewFunc: 'setPreviewAbout' },
  'ServicesLibrary.tsx': { itemVar: 'service', previewFunc: 'setPreviewService' },
  'PricingLibrary.tsx': { itemVar: 'pricing', previewFunc: 'setPreviewPricing' },
  'TestimonialsLibrary.tsx': { itemVar: 'testimonial', previewFunc: 'setPreviewTestimonial' },
  'FAQLibrary.tsx': { itemVar: 'faq', previewFunc: 'setPreviewFAQ' },
  'BlogLibrary.tsx': { itemVar: 'blog', previewFunc: 'setPreviewBlog' },
  'GalleryLibrary.tsx': { itemVar: 'gal', previewFunc: 'setPreviewGallery' },
  'CTALibrary.tsx': { itemVar: 'cta', previewFunc: 'setPreviewCta' },
  'ContactLibrary.tsx': { itemVar: 'contact', previewFunc: 'setPreviewContact' },
  'FooterLibrary.tsx': { itemVar: 'foot', previewFunc: 'setPreviewFooter' },
  'StatsLibrary.tsx': { itemVar: 'stats', previewFunc: 'setPreviewStats' },
};

for (const file of files) {
  if (!libraryMap[file]) continue;
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  
  // 1. Completely clear and redefine handleUseThis to avoid double-function / half-closed-brackets mess
  // We'll use a very aggressive regex to find the old one and replace it.
  
  const handleUseThisRegex = /const handleUseThis = \([\s\S]*?\) => {[\s\S]*?};/g;

  let newHandleUseThis = "";
  if (file === 'FeaturesLibrary.tsx' || file === 'HeroLibrary.tsx' || file === 'AboutLibrary.tsx' || file === 'ServicesLibrary.tsx' || file === 'NavbarLibrary.tsx') {
    newHandleUseThis = `const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  } else if (file === 'TestimonialsLibrary.tsx') {
    newHandleUseThis = `const handleUseThis = (testimonial: any) => {
    const props = customProps[testimonial.id] || testimonial.defaultProps;
    addComponent(testimonial.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  } else {
    newHandleUseThis = `const handleUseThis = (item: any) => {
    const props = customProps[item.id] || item.defaultProps;
    addComponent(item.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  }

  // If the regex doesn't match (due to formatting), we'll try a fallback or just force it before the next function.
  if (content.match(handleUseThisRegex)) {
      content = content.replace(handleUseThisRegex, newHandleUseThis);
  } else {
      // Fallback: search for navigate('/builder') and remove the whole surrounding function or block.
      // But safer is to look for "const handleUseThis"
      const fallbackRegex = /const handleUseThis = [\s\S]*?navigate\('\/builder'\);[\s\S]*?};/g;
      content = content.replace(fallbackRegex, newHandleUseThis);
  }

  // 2. Extra CLEANUP: Remove any trailing navigate('/builder') or duplicate addComponent lines that might have leaked.
  // This is a common issue with multiple search/replace runs.
  content = content.replace(/addComponent\(componentName, props\);\s*navigate\('\/builder'\);/g, "addComponent(componentName, props);");

  fs.writeFileSync(path.join(pagesDir, file), content, 'utf-8');
}
console.log('Final clean update complete.');
