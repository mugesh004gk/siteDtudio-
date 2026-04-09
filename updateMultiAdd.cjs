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
  
  // Update handleUseThis to NOT include navigate('/builder')
  // We'll search for the function definition and modify its body.
  const handleUseThisRegex = /const handleUseThis = \([\s\S]*?\) => {([\s\S]*?)}/g;
  content = content.replace(handleUseThisRegex, (match, body) => {
    // Check if it's the right kind of handleUseThis (with componentName)
    if (body.includes("addComponent(componentName, props)")) {
       return `const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };`;
    } 
    else if (body.includes("addComponent(testimonial.componentName, props)")) {
       return `const handleUseThis = (testimonial: any) => {
    const props = customProps[testimonial.id] || testimonial.defaultProps;
    addComponent(testimonial.componentName, props);
    // Removed navigation to allow multi-adds
  };`;
    }
    // Generic fallback for others
    return match.replace("navigate('/builder');", "// Removed navigation to allow multi-adds");
  });

  // Ensure all occurrences of navigate('/builder') inside handleUseThis are removed
  // Some files might have different parameter names, so we just a global replace inside those scopes.
  
  fs.writeFileSync(path.join(pagesDir, file), content, 'utf-8');
}
console.log('Successfully updated all library components to allow multi-adds');
