const fs = require('fs');

const rawCategories = [
  "Navbars:",
  "Normal Sticky Navbar",
  "Shrink on Scroll Navbar",
  "Hide on Scroll Navbar",
  "Transparent Navbar",
  "Glassmorphism Navbar",
  "Floating Navbar",
  "Center Logo Navbar",
  "Split Menu Navbar",
  "Search Navbar",
  "Icon Navbar",
  "Mega Menu Navbar",
  "Sidebar Navbar",
  "Hamburger Mobile Navbar",
  "Off-canvas Navbar",
  "Blur Background Navbar",
  "",
  "Hero Sections:",
  "Centered Hero",
  "Split Hero Left Text Right Image",
  "Split Hero Left Image Right Text",
  "Fullscreen Hero",
  "Video Background Hero",
  "Gradient Hero",
  "Illustration Hero",
  "Product Hero",
  "App Hero",
  "Minimal Hero",
  "Animated Hero",
  "Parallax Hero",
  "Typing Text Hero",
  "Hero with Search",
  "Hero with Email Signup",
  "Hero with Stats",
  "Hero with Client Logos",
  "",
  "Feature Sections:",
  "3 Column Features",
  "4 Column Features",
  "Icon + Text Features",
  "Image + Text Features",
  "Alternating Features",
  "Feature Grid",
  "Feature List",
  "Feature Cards",
  "Feature with Illustration",
  "Feature with Tabs",
  "Feature Comparison",
  "Feature Timeline",
  "Feature Steps",
  "",
  "Pricing Tables:",
  "Simple Pricing 3 Plans",
  "2 Tier Pricing",
  "4 Tier Pricing",
  "Pricing Toggle Monthly Yearly",
  "Pricing Comparison Table",
  "Pricing Cards",
  "SaaS Pricing Table",
  "Ecommerce Pricing",
  "Pricing with FAQ",
  "Pricing with Testimonials",
  "",
  "Testimonials:",
  "Testimonial Cards",
  "Testimonial Slider",
  "Testimonial Grid",
  "Single Testimonial Highlight",
  "Video Testimonial",
  "Logo Testimonials",
  "Tweet Style Testimonials",
  "Testimonial with Rating",
  "Masonry Testimonial Grid",
  "",
  "Forms & CTA:",
  "Contact Form",
  "Newsletter Signup",
  "Login Form",
  "Signup Form",
  "Reset Password Form",
  "Multi Step Form",
  "Checkout Form",
  "Inline CTA",
  "Banner CTA",
  "Popup CTA",
  "Download CTA",
  "Free Trial CTA",
  "",
  "FAQ Sections:",
  "Accordion FAQ",
  "Two Column FAQ",
  "FAQ with Categories",
  "FAQ with Search",
  "FAQ with Contact Box",
  "FAQ Tabs Layout",
  "",
  "Stats & Counters:",
  "Number Counters",
  "Stats with Icons",
  "Stats Cards",
  "Stats with Background",
  "Animated Counters",
  "Progress Bars",
  "Circular Progress",
  "KPI Stats Dashboard",
  "",
  "Blog / Cards:",
  "Blog Card Grid",
  "Blog List Layout",
  "Blog Masonry",
  "Blog with Sidebar",
  "Blog Carousel",
  "News Cards",
  "Article Cards",
  "Author Cards",
  "",
  "Product Cards:",
  "Ecommerce Product Card",
  "Product Grid",
  "Product List",
  "Product Quick View",
  "Product with Rating",
  "Product with Discount Badge",
  "Product Carousel",
  "Featured Product Banner",
  "",
  "Footers:",
  "Simple Footer",
  "Multi Column Footer",
  "Footer with Newsletter",
  "Footer with Social Icons",
  "Footer with Logo + Links",
  "Dark Footer",
  "Minimal Footer",
  "Mega Footer",
  "Sticky Footer",
  "",
  "About Sections:",
  "About Company",
  "About Me",
  "Mission & Vision",
  "Our Story Timeline",
  "About with Images",
  "About with Stats",
  "About with Team Preview",
  "",
  "Contact Sections:",
  "Contact Form + Map",
  "Contact Split Layout",
  "Contact Cards",
  "Contact Minimal",
  "Contact with Sidebar Info",
  "Contact Full Layout",
  "",
  "UI Elements:",
  "Buttons",
  "Badges",
  "Tags / Chips",
  "Avatars",
  "Dropdowns",
  "Modals",
  "Drawers",
  "Tooltips",
  "Popovers",
  "Alerts",
  "Toast Notifications",
  "Loaders / Spinners",
  "Skeleton Loaders",
  "Progress Bars",
  "Tabs",
  "Accordions",
  "Breadcrumbs",
  "Pagination",
  "Rating Stars",
  "Timeline",
  "Stepper"
];

// Map category to a base component name that we have implemented
const componentMap = {
  'Navbars': 'Navbar1',
  'Hero Sections': 'Hero1',
  'Feature Sections': 'Feature1',
  'Pricing Tables': 'Pricing1',
  'Testimonials': 'Testimonial1',
  'Forms & CTA': 'CTA1',
  'FAQ Sections': 'FAQ1',
  'Stats & Counters': 'Stats1',
  'Blog / Cards': 'Blog1',
  'Product Cards': 'Product1',
  'Footers': 'Footer1',
  'About Sections': 'About1',
  'Contact Sections': 'Contact1',
  'UI Elements': 'UIElements1'
};

const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1590650046528-e4b2d558d197?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80'
];

let items = [];
let currentCategory = '';
let imgIdx = 0;

for (const line of rawCategories) {
  if (!line.trim()) continue;
  if (line.endsWith(':')) {
    currentCategory = line.replace(':', '');
  } else {
    let slug = line.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    items.push({
      name: line,
      slug: slug,
      category: currentCategory,
      description: "A premium " + line.toLowerCase() + " component for your project.",
      tags: [currentCategory.split(' ')[0], line.split(' ')[0], 'Premium'],
      previewImage: images[imgIdx % images.length],
      component: componentMap[currentCategory] || 'Hero1',
      features: [{ name: 'Responsive design', description: 'Adapts to all screen sizes automatically.' }],
      defaultSettings: { bgColor: 'bg-bg' },
      codeTemplate: "// " + line + " Component Code Here"
    });
    imgIdx++;
  }
}

let registryCodeLines = [
  "import React from 'react';",
  "import Hero1 from '../components/library/Hero1';",
  "import Navbar1 from '../components/library/Navbar1';",
  "import Feature1 from '../components/library/Feature1';",
  "import Pricing1 from '../components/library/Pricing1';",
  "import Footer1 from '../components/library/Footer1';",
  "import Testimonial1 from '../components/library/Testimonial1';",
  "import CTA1 from '../components/library/CTA1';",
  "import FAQ1 from '../components/library/FAQ1';",
  "import Contact1 from '../components/library/Contact1';",
  "import Stats1 from '../components/library/Stats1';",
  "import Blog1 from '../components/library/Blog1';",
  "import Product1 from '../components/library/Product1';",
  "import About1 from '../components/library/About1';",
  "import UIElements1 from '../components/library/UIElements1';",
  "",
  "export interface ComponentFeature {",
  "  name: string;",
  "  description: string;",
  "}",
  "",
  "export interface RegistryItem {",
  "  name: string;",
  "  slug: string;",
  "  category: string;",
  "  description: string;",
  "  tags: string[];",
  "  previewImage: string;",
  "  component: React.ComponentType<any>;",
  "  features: ComponentFeature[];",
  "  defaultSettings: Record<string, any>;",
  "  codeTemplate: string;",
  "}",
  "",
  "export const componentsRegistry: RegistryItem[] = ["
];

items.forEach((it, idx) => {
  registryCodeLines.push("  {");
  registryCodeLines.push("    name: " + JSON.stringify(it.name) + ",");
  registryCodeLines.push("    slug: " + JSON.stringify(it.slug) + ",");
  registryCodeLines.push("    category: " + JSON.stringify(it.category) + ",");
  registryCodeLines.push("    description: " + JSON.stringify(it.description) + ",");
  registryCodeLines.push("    tags: " + JSON.stringify(it.tags) + ",");
  registryCodeLines.push("    previewImage: " + JSON.stringify(it.previewImage) + ",");
  registryCodeLines.push("    component: " + it.component + ",");
  registryCodeLines.push("    features: " + JSON.stringify(it.features) + ",");
  registryCodeLines.push("    defaultSettings: " + JSON.stringify(it.defaultSettings) + ",");
  registryCodeLines.push("    codeTemplate: " + JSON.stringify(it.codeTemplate));
  registryCodeLines.push("  }" + (idx < items.length - 1 ? "," : ""));
});

registryCodeLines.push("];");
registryCodeLines.push("");
registryCodeLines.push("export const getComponentBySlug = (slug: string) => {");
registryCodeLines.push("  return componentsRegistry.find(c => c.slug === slug);");
registryCodeLines.push("};");
registryCodeLines.push("");
registryCodeLines.push("export const getComponentsByCategory = (category: string) => {");
registryCodeLines.push("  return componentsRegistry.filter(c => c.category === category);");
registryCodeLines.push("};");
registryCodeLines.push("");
registryCodeLines.push("export const getAllCategories = () => {");
registryCodeLines.push("  const categories = componentsRegistry.map(c => c.category);");
registryCodeLines.push("  return [...new Set(categories)];");
registryCodeLines.push("};");

fs.writeFileSync('src/registry/componentsRegistry.ts', registryCodeLines.join('\n'));
console.log('Registry properly written with all components');
