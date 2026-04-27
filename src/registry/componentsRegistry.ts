export interface RegistryItem {
  name: string;
  category: string;
  type: string;
  componentKey: string;
  slug: string;
  description: string;
  tags: string[];
  previewImage: string;
  features: string[];
  defaultSettings: Record<string, any>;
  codeTemplate: string;
  isPremium: boolean;
  createdAt: string;
}

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
const I = {
  nav: img('1498050108023-c5249f4df085'),
  hero: img('1555066931-4365d14bab8c'),
  about: img('1522071820081-009f0129c71c'),
  services: img('1551288049-bebda4e38f71'),
  pricing: img('1554224155-6726b3ff858f'),
  testi: img('1516321318423-f06f85e504b3'),
  faq: img('1590650046528-e4b2d558d197'),
  blog: img('1504711434969-e33886168f5c'),
  gallery: img('1607082348824-0a96f2a4b9da'),
  contact: img('1423666639041-f56000c27a9a'),
  footer: img('1512941937-f7d9eb507bfa'),
  stats: img('1551288049-bebda4e38f71'),
  cta: img('1557683316-973673baf926'),
};

const date = new Date().toISOString();

export const componentsRegistry: RegistryItem[] = [
  // NAVBARS (9)
  { name: 'Classic Navbar', category: 'navbar', type: 'classic', componentKey: 'navbar-classic', slug: 'navbar-classic', description: 'Standard industrial navigation unit.', tags: ['navbar', 'classic'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Sticky Navbar', category: 'navbar', type: 'sticky', componentKey: 'navbar-sticky', slug: 'navbar-sticky', description: 'Stays fixed at the top of the viewport.', tags: ['navbar', 'sticky'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Transparent Navbar', category: 'navbar', type: 'transparent', componentKey: 'navbar-transparent', slug: 'navbar-transparent', description: 'Transparent background for hero overlays.', tags: ['navbar', 'transparent'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Navbar With CTA Button', category: 'navbar', type: 'cta', componentKey: 'navbar-cta', slug: 'navbar-cta', description: 'Includes a prominent call-to-action button.', tags: ['navbar', 'cta'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Navbar With Dropdown', category: 'navbar', type: 'dropdown', componentKey: 'navbar-dropdown', slug: 'navbar-dropdown', description: 'Multi-level navigation with dropdown menus.', tags: ['navbar', 'dropdown'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Centered Logo Navbar', category: 'navbar', type: 'centered', componentKey: 'navbar-centered', slug: 'navbar-centered', description: 'Balanced layout with a centered brand identity.', tags: ['navbar', 'centered'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Sidebar Navbar', category: 'navbar', type: 'sidebar', componentKey: 'navbar-sidebar', slug: 'navbar-sidebar', description: 'Vertical navigation for dashboard interfaces.', tags: ['navbar', 'sidebar'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Mobile Hamburger Navbar', category: 'navbar', type: 'hamburger', componentKey: 'navbar-hamburger', slug: 'navbar-hamburger', description: 'Minimalist mobile-first toggle navigation.', tags: ['navbar', 'mobile'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Mega Menu Navbar', category: 'navbar', type: 'megamenu', componentKey: 'navbar-megamenu', slug: 'navbar-megamenu', description: 'Expansive menu for content-heavy architectures.', tags: ['navbar', 'mega'], previewImage: I.nav, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // HEROES (10)
  { name: 'Centered Hero', category: 'hero', type: 'centered', componentKey: 'hero-centered', slug: 'hero-centered', description: 'Impactful centered value proposition.', tags: ['hero', 'centered'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Split Hero', category: 'hero', type: 'split', componentKey: 'hero-split', slug: 'hero-split', description: 'Asymmetrical text and visual composition.', tags: ['hero', 'split'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Image Hero', category: 'hero', type: 'image', componentKey: 'hero-image', slug: 'hero-image', description: 'Large-scale background image focus.', tags: ['hero', 'image'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Video Hero', category: 'hero', type: 'video', componentKey: 'hero-video', slug: 'hero-video', description: 'Dynamic cinematic background experience.', tags: ['hero', 'video'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Slider Hero', category: 'hero', type: 'slider', componentKey: 'hero-slider', slug: 'hero-slider', description: 'Multi-slide narrative progression.', tags: ['hero', 'slider'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Gradient Hero', category: 'hero', type: 'gradient', componentKey: 'hero-gradient', slug: 'hero-gradient', description: 'Vibrant modern color interpolation.', tags: ['hero', 'gradient'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Minimal Hero', category: 'hero', type: 'minimal', componentKey: 'hero-minimal', slug: 'hero-minimal', description: 'Clean focus on core identity and message.', tags: ['hero', 'minimal'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Fullscreen Hero', category: 'hero', type: 'fullscreen', componentKey: 'hero-fullscreen', slug: 'hero-fullscreen', description: 'Total viewport immersion.', tags: ['hero', 'fullscreen'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Hero With Form', category: 'hero', type: 'form', componentKey: 'hero-form', slug: 'hero-form', description: 'Immediate lead generation access.', tags: ['hero', 'form'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Hero With CTA Buttons', category: 'hero', type: 'cta', componentKey: 'hero-cta', slug: 'hero-cta', description: 'Standard primary and secondary trigger layout.', tags: ['hero', 'cta'], previewImage: I.hero, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },

  // FEATURES (7)
  { name: 'Features Grid', category: 'features', type: 'grid', componentKey: 'features-grid', slug: 'features-grid', description: 'Matrix of core system advantages.', tags: ['features', 'grid'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Features Cards', category: 'features', type: 'cards', componentKey: 'features-cards', slug: 'features-cards', description: 'Hoverable advantage units.', tags: ['features', 'cards'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Features Timeline', category: 'features', type: 'timeline', componentKey: 'features-timeline', slug: 'features-timeline', description: 'Chronological progression logic.', tags: ['features', 'timeline'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Feature Icon Grid', category: 'features', type: 'icon-grid', componentKey: 'features-grid', slug: 'features-icon-grid', description: 'Icon-centric advantage display.', tags: ['features', 'icons'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Feature Step Matrix', category: 'features', type: 'steps', componentKey: 'features-grid', slug: 'features-steps', description: 'Sequential utility progression.', tags: ['features', 'steps'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Feature Split View', category: 'features', type: 'split', componentKey: 'features-cards', slug: 'features-split', description: 'Visual + textual feature pairs.', tags: ['features', 'split'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Feature Dense View', category: 'features', type: 'dense', componentKey: 'features-grid', slug: 'features-dense', description: 'Content-rich feature layout.', tags: ['features', 'dense'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // ABOUT (6)
  { name: 'About Left Image', category: 'about', type: 'left-image', componentKey: 'about-left-image', slug: 'about-left-image', description: 'Identity section with left-aligned visual.', tags: ['about', 'image'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'About Right Image', category: 'about', type: 'right-image', componentKey: 'about-right-image', slug: 'about-right-image', description: 'Identity section with right-aligned visual.', tags: ['about', 'image'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'About Centered', category: 'about', type: 'centered', componentKey: 'about-centered', slug: 'about-centered', description: 'Balanced company narrative.', tags: ['about', 'centered'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'About With Stats', category: 'about', type: 'stats', componentKey: 'about-stats', slug: 'about-stats', description: 'Narrative reinforced by performance metrics.', tags: ['about', 'stats'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'About Timeline', category: 'about', type: 'timeline', componentKey: 'about-timeline', slug: 'about-timeline', description: 'Visual history of the legacy.', tags: ['about', 'timeline'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'About Team Section', category: 'about', type: 'team', componentKey: 'about-team', slug: 'about-team', description: 'Gallery of core personnel.', tags: ['about', 'team'], previewImage: I.about, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // SERVICES (6)
  { name: 'Services Grid', category: 'services', type: 'grid', componentKey: 'services-grid', slug: 'services-grid', description: 'Technical service matrix.', tags: ['services', 'grid'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Services Cards', category: 'services', type: 'cards', componentKey: 'services-cards', slug: 'services-cards', description: 'Individual utility units.', tags: ['services', 'cards'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Services Icons', category: 'services', type: 'icons', componentKey: 'services-icons', slug: 'services-icons', description: 'Minimalist icon-based utility map.', tags: ['services', 'icons'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Services List', category: 'services', type: 'list', componentKey: 'services-list', slug: 'services-list', description: 'Detailed sequential service index.', tags: ['services', 'list'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Services Timeline', category: 'services', type: 'timeline', componentKey: 'services-timeline', slug: 'services-timeline', description: 'Process-oriented utility delivery.', tags: ['services', 'timeline'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Services With Images', category: 'services', type: 'images', componentKey: 'services-images', slug: 'services-images', description: 'Visual-heavy service catalog.', tags: ['services', 'images'], previewImage: I.services, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // PRICING (5)
  { name: 'Simple Pricing Table', category: 'pricing', type: 'simple', componentKey: 'pricing-simple', slug: 'pricing-simple', description: 'Basic tier hierarchy.', tags: ['pricing', 'table'], previewImage: I.pricing, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Pricing Cards', category: 'pricing', type: 'cards', componentKey: 'pricing-cards', slug: 'pricing-cards', description: 'Modern standalone tier units.', tags: ['pricing', 'cards'], previewImage: I.pricing, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'SaaS Pricing Plan', category: 'pricing', type: 'saas', componentKey: 'pricing-saas', slug: 'pricing-saas', description: 'Optimized for subscription models.', tags: ['pricing', 'saas'], previewImage: I.pricing, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Pricing Toggle (M/Y)', category: 'pricing', type: 'toggle', componentKey: 'pricing-toggle', slug: 'pricing-toggle', description: 'Switch between payment frequencies.', tags: ['pricing', 'toggle'], previewImage: I.pricing, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Pricing Comparison', category: 'pricing', type: 'comparison', componentKey: 'pricing-comparison', slug: 'pricing-comparison', description: 'Comprehensive feature matrix.', tags: ['pricing', 'compare'], previewImage: I.pricing, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // TESTIMONIALS (5)
  { name: 'Testimonials Slider', category: 'testimonials', type: 'slider', componentKey: 'testimonials-slider', slug: 'testimonials-slider', description: 'Dynamic user narrative carousel.', tags: ['testimonials', 'slider'], previewImage: I.testi, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Testimonials Grid', category: 'testimonials', type: 'grid', componentKey: 'testimonials-grid', slug: 'testimonials-grid', description: 'Matrix of verified social proof.', tags: ['testimonials', 'grid'], previewImage: I.testi, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Testimonials Cards', category: 'testimonials', type: 'cards', componentKey: 'testimonials-cards', slug: 'testimonials-cards', description: 'Individual endorsement units.', tags: ['testimonials', 'cards'], previewImage: I.testi, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Testimonials With Images', category: 'testimonials', type: 'images', componentKey: 'testimonials-images', slug: 'testimonials-images', description: 'Visual-centric proof units.', tags: ['testimonials', 'images'], previewImage: I.testi, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Testimonials Video', category: 'testimonials', type: 'video', componentKey: 'testimonials-video', slug: 'testimonials-video', description: 'High-fidelity cinematic endorsements.', tags: ['testimonials', 'video'], previewImage: I.testi, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // FAQ (4)
  { name: 'FAQ Accordion', category: 'faq', type: 'accordion', componentKey: 'faq-accordion', slug: 'faq-accordion', description: 'Interactive expandable Q&A.', tags: ['faq', 'accordion'], previewImage: I.faq, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'FAQ Simple List', category: 'faq', type: 'simple', componentKey: 'faq-simple', slug: 'faq-simple', description: 'Clean sequential Q&A index.', tags: ['faq', 'simple'], previewImage: I.faq, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'FAQ Two Column', category: 'faq', type: 'two-column', componentKey: 'faq-two-column', slug: 'faq-two-column', description: 'Symmetrical dense Q&A layout.', tags: ['faq', 'grid'], previewImage: I.faq, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'FAQ With Categories', category: 'faq', type: 'categories', componentKey: 'faq-categories', slug: 'faq-categories', description: 'Categorized knowledge base index.', tags: ['faq', 'categories'], previewImage: I.faq, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // BLOG (5)
  { name: 'Blog Grid', category: 'blog', type: 'grid', componentKey: 'blog-grid', slug: 'blog-grid', description: 'Matrix of technical articles.', tags: ['blog', 'grid'], previewImage: I.blog, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Blog Cards', category: 'blog', type: 'cards', componentKey: 'blog-cards', slug: 'blog-cards', description: 'Individual article preview units.', tags: ['blog', 'cards'], previewImage: I.blog, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Blog List', category: 'blog', type: 'list', componentKey: 'blog-list', slug: 'blog-list', description: 'Sequential article timeline.', tags: ['blog', 'list'], previewImage: I.blog, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Blog Masonry', category: 'blog', type: 'masonry', componentKey: 'blog-masonry', slug: 'blog-masonry', description: 'Dynamic asymmetrical article grid.', tags: ['blog', 'masonry'], previewImage: I.blog, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Blog Featured Post', category: 'blog', type: 'featured', componentKey: 'blog-featured', slug: 'blog-featured', description: 'High-impact major narrative piece.', tags: ['blog', 'featured'], previewImage: I.blog, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // GALLERY (5)
  { name: 'Gallery Grid', category: 'gallery', type: 'grid', componentKey: 'gallery-grid', slug: 'gallery-grid', description: 'Symmetrical visual documentation grid.', tags: ['gallery', 'grid'], previewImage: I.gallery, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Gallery Masonry', category: 'gallery', type: 'masonry', componentKey: 'gallery-masonry', slug: 'gallery-masonry', description: 'Modern asymmetrical visual layout.', tags: ['gallery', 'masonry'], previewImage: I.gallery, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Gallery Slider', category: 'gallery', type: 'slider', componentKey: 'gallery-slider', slug: 'gallery-slider', description: 'Sequential visual narrative carousel.', tags: ['gallery', 'slider'], previewImage: I.gallery, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Gallery Lightbox', category: 'gallery', type: 'lightbox', componentKey: 'gallery-lightbox', slug: 'gallery-lightbox', description: 'Immersive visual expansion logic.', tags: ['gallery', 'lightbox'], previewImage: I.gallery, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Gallery Carousel', category: 'gallery', type: 'carousel', componentKey: 'gallery-carousel', slug: 'gallery-carousel', description: 'Infinite visual looping system.', tags: ['gallery', 'carousel'], previewImage: I.gallery, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },

  // CONTACT (5)
  { name: 'Contact Form', category: 'contact', type: 'form', componentKey: 'contact-form', slug: 'contact-form', description: 'Standard lead generation intake.', tags: ['contact', 'form'], previewImage: I.contact, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Contact Split Layout', category: 'contact', type: 'split', componentKey: 'contact-split', slug: 'contact-split', description: 'Identity and intake side-by-side.', tags: ['contact', 'split'], previewImage: I.contact, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Contact With Map', category: 'contact', type: 'map', componentKey: 'contact-map', slug: 'contact-map', description: 'Location-based identity verification.', tags: ['contact', 'map'], previewImage: I.contact, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Contact Minimal', category: 'contact', type: 'minimal', componentKey: 'contact-minimal', slug: 'contact-minimal', description: 'Bare-essential identity intake.', tags: ['contact', 'minimal'], previewImage: I.contact, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Contact Card Layout', category: 'contact', type: 'card', componentKey: 'contact-card', slug: 'contact-card', description: 'Aesthetic card-based identity contact.', tags: ['contact', 'card'], previewImage: I.contact, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // FOOTER (6)
  { name: 'Footer Simple', category: 'footer', type: 'simple', componentKey: 'footer-simple', slug: 'footer-simple', description: 'Standard industrial site termination.', tags: ['footer', 'simple'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Footer Columns', category: 'footer', type: 'columns', componentKey: 'footer-columns', slug: 'footer-columns', description: 'Multi-column link architecture.', tags: ['footer', 'columns'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Footer Newsletter', category: 'footer', type: 'newsletter', componentKey: 'footer-newsletter', slug: 'footer-newsletter', description: 'Site termination with intake logic.', tags: ['footer', 'newsletter'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Footer Minimal', category: 'footer', type: 'minimal', componentKey: 'footer-minimal', slug: 'footer-minimal', description: 'Bare-essential site termination.', tags: ['footer', 'minimal'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Footer With Map', category: 'footer', type: 'map', componentKey: 'footer-map', slug: 'footer-map', description: 'Location-aware site termination.', tags: ['footer', 'map'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'Footer Large', category: 'footer', type: 'large', componentKey: 'footer-large', slug: 'footer-large', description: 'Expansive information-rich site termination.', tags: ['footer', 'large'], previewImage: I.footer, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // STATS (5)
  { name: 'Stats Counter', category: 'stats', type: 'counter', componentKey: 'stats-counter', slug: 'stats-counter', description: 'Animated numerical performance metrics.', tags: ['stats', 'counter'], previewImage: I.stats, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Stats Cards', category: 'stats', type: 'cards', componentKey: 'stats-cards', slug: 'stats-cards', description: 'Aesthetic metric units.', tags: ['stats', 'cards'], previewImage: I.stats, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Stats With Icons', category: 'stats', type: 'icons', componentKey: 'stats-icons', slug: 'stats-icons', description: 'Icon-reinforced metric display.', tags: ['stats', 'icons'], previewImage: I.stats, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Stats Horizontal', category: 'stats', type: 'horizontal', componentKey: 'stats-horizontal', slug: 'stats-horizontal', description: 'Wide-axis metric display.', tags: ['stats', 'wide'], previewImage: I.stats, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'Stats With Chart', category: 'stats', type: 'chart', componentKey: 'stats-chart', slug: 'stats-chart', description: 'Visualized metric interpolation.', tags: ['stats', 'chart'], previewImage: I.stats, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },

  // CTA (5)
  { name: 'CTA Banner', category: 'cta', type: 'banner', componentKey: 'cta-banner', slug: 'cta-banner', description: 'High-impact conversion trigger.', tags: ['cta', 'banner'], previewImage: I.cta, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'CTA Centered', category: 'cta', type: 'centered', componentKey: 'cta-centered', slug: 'cta-centered', description: 'Balanced conversion trigger layout.', tags: ['cta', 'centered'], previewImage: I.cta, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'CTA Split', category: 'cta', type: 'split', componentKey: 'cta-split', slug: 'cta-split', description: 'Asymmetrical conversion trigger layout.', tags: ['cta', 'split'], previewImage: I.cta, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
  { name: 'CTA W/ Image', category: 'cta', type: 'background', componentKey: 'cta-background', slug: 'cta-background', description: 'Visual-immersive conversion trigger.', tags: ['cta', 'image'], previewImage: I.cta, features: [], defaultSettings: {}, codeTemplate: '', isPremium: true, createdAt: date },
  { name: 'CTA With Form', category: 'cta', type: 'form', componentKey: 'cta-form', slug: 'cta-form', description: 'Direct-action conversion trigger.', tags: ['cta', 'form'], previewImage: I.cta, features: [], defaultSettings: {}, codeTemplate: '', isPremium: false, createdAt: date },
];

export const getComponentBySlug = (slug: string) => componentsRegistry.find(c => c.slug === slug);
export const getComponentsByCategory = (category: string) => componentsRegistry.filter(c => c.category === category.toLowerCase());
export const getAllCategories = () => [...new Set(componentsRegistry.map(c => c.category))];
