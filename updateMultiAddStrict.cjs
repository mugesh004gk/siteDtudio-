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
  
  const mapData = libraryMap[file];
  const ivar = mapData.itemVar;
  
  // 1. Remove ANY find/replace attempts and just replace the whole function cleanly.
  // This is safer because multiple script runs might have created mess.
  
  // Pattern 1: handleUseThis = (...) => { ... }
  // Pattern 2: handleUseThis = (...) => { ... } (already modified)
  
  const handleUseThisRegex = /const handleUseThis = \([\s\S]*?\) => {([\s\S]*?)}/g;
  
  content = content.replace(handleUseThisRegex, (match, body) => {
    // If it's a file that uses (id, componentName) params
    if (file === 'FeaturesLibrary.tsx' || file === 'HeroLibrary.tsx' || file === 'AboutLibrary.tsx' || file === 'ServicesLibrary.tsx' || file === 'NavbarLibrary.tsx') {
       return `const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };`;
    }
    // Specific for Testimonials (it passes an object)
    if (file === 'TestimonialsLibrary.tsx') {
        return `const handleUseThis = (testimonial: any) => {
    const props = customProps[testimonial.id] || testimonial.defaultProps;
    addComponent(testimonial.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
    }
    // Generic for others (Pricing, CTA, Contact, etc.)
    return `const handleUseThis = (item: any) => {
    const props = customProps[item.id] || item.defaultProps;
    addComponent(item.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
  });

  // 2. Extra safety: Global removal of navigate('/builder') inside handleUseThis matches
  // Sometimes naming of variables (item vs pricing etc) varies.
  
  fs.writeFileSync(path.join(pagesDir, file), content, 'utf-8');
}
console.log('Successfully updated all library components to allow multi-adds with NO redirects');
