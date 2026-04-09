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
  
  // 1. Replace the PreviewContainer wrapper
  const containerMatch = content.match(/<PreviewContainer[\s\S]*?<\/PreviewContainer>/);
  if (containerMatch) {
    if (!containerMatch[0].includes('absolute bottom-4 right-4')) {
      const wrapped = `
                {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  ${containerMatch[0]}
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(${ivar}); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(${ivar}); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>`.trim();
      content = content.replace(containerMatch[0], wrapped);
    }
  }

  // 2. Clear out the footer buttons
  // Look for the flex container wrapping the View and Use/Add buttons
  // We can look for <div className="flex flex-col sm:flex-row gap-3"> or <div className="mt-8 flex flex-col sm:flex-row gap-3">
  const footerBtnsRegex = /<div className="(mt-8 )?flex flex-col sm:flex-row gap-3">[\s\S]*?<\/div>\s*<\/div>\s*(?=<\/motion.div>)/;
  
  const handleUseThisCall = file === 'FeaturesLibrary.tsx' || file === 'HeroLibrary.tsx' || file === 'AboutLibrary.tsx' || file === 'ServicesLibrary.tsx' || file === 'NavbarLibrary.tsx' 
      ? `handleUseThis(${ivar}.id, ${ivar}.componentName)` 
      : `handleUseThis(${ivar})`;

  const newFooter = `<div className="mt-6 flex flex-col sm:flex-row gap-3">
                     <button onClick={() => ${mapData.previewFunc}(${ivar})} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl border border-white/5 flex justify-center items-center gap-2 transition active:scale-95 group-hover:border-indigo-500/30">
                        <Eye size={16}/> VIEW
                     </button>
                     <button onClick={() => ${handleUseThisCall}} className="flex-[1.5] bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl shadow-indigo-600/20 transition active:scale-95">
                        <Zap size={16} fill="currentColor"/> ADD TO BUILDER
                     </button>
                  </div>
                </div>`;

  content = content.replace(footerBtnsRegex, newFooter);

  // 3. Remove "handleCustomize" or "handleCopyCode" from the top right info area
  // E.g. <button onClick={() => handleCopyCode(testimonial)} ...
  const copySettingsRegex = /<div className="flex gap-2">\s*<button onClick=\{\(\) => handleCopyCode.*?<\/button>\s*<\/div>/g;
  content = content.replace(copySettingsRegex, '');
  
  const slidersRegex = /<button onClick=\{\(\) => handleCustomize.*?<\/button>/g;
  content = content.replace(slidersRegex, '');

  const checkCopyRegex = /<button onClick=\{\(\) => handleCopyCode.*?<\/button>/g;
  content = content.replace(checkCopyRegex, '');

  fs.writeFileSync(path.join(pagesDir, file), content, 'utf-8');
}
console.log('Successfully updated all library components');
