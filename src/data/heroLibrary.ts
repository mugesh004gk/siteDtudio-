export const heroCategories = [
  "Basic",
  "Centered",
  "Split Layout",
  "Image Background",
  "Video Background",
  "SaaS / Startup",
  "E-commerce",
  "Portfolio",
  "App / Mobile",
  "Creative / Animated",
  "Fullscreen",
  "Hybrid"
];

export const heroLibrary = [
  {
    category: "Basic",
    items: [
      { id: "h-basic-1", componentName: "hero-text-left", name: "Text Left + Image Right", desc: "Classic hero layout with strong typography on the left.", tag: "HERO • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "4rem 2rem", title: "Build the Future", subtitle: "The most advanced platform for modern web development.", buttonText: "Get Started" } },
      { id: "h-basic-2", componentName: "hero-image-right", name: "Image Left + Text Right", desc: "Classic hero layout flipped.", tag: "HERO • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "4rem 2rem", title: "Build the Future", subtitle: "The most advanced platform for modern web development.", buttonText: "Get Started" } },
      { id: "h-basic-3", componentName: "hero-minimal", name: "Minimal Hero", desc: "Clean and focused text-only hero.", tag: "HERO • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "6rem 2rem", title: "Minimal & Clean", subtitle: "Focus on what matters the most.", buttonText: "Start Now" } },
      { id: "h-basic-4", componentName: "hero-heading-sub", name: "Heading + Subheading + CTA", desc: "Standard structure for fast conversions.", tag: "HERO • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "8rem 2rem", title: "Headline Here", subtitle: "Subheading value", buttonText: "Action" } }
    ]
  },
  {
    category: "Centered",
    items: [
      { id: "h-center-1", componentName: "hero-centered-cta", name: "Centered Hero + CTA", desc: "Highly aligned focal point in the middle of the screen.", tag: "HERO • CENTERED", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "6rem 2rem", title: "Center of Attention", subtitle: "Command the room with central alignment", buttonText: "Start Building" } },
      { id: "h-center-2", componentName: "hero-centered-two", name: "Centered Two Buttons", desc: "Dual primary and secondary actions.", tag: "HERO • CENTERED", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "6rem 2rem", title: "Dual Actions", subtitle: "Give your users choices.", buttonText: "Primary Action" } },
      { id: "h-center-3", componentName: "hero-minimal-center", name: "Minimal Center Hero", desc: "A stripped down centered focus.", tag: "HERO • CENTERED", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "5rem 2rem", title: "Purity in Design", subtitle: "No distractions.", buttonText: "Explore" } }
    ]
  },
  {
    category: "Split Layout",
    items: [
      { id: "h-split-1", componentName: "hero-split-5050", name: "50/50 Split", desc: "Equal weighting for text and media.", tag: "HERO • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-split-2", componentName: "hero-illustration-split", name: "Illustration Split", desc: "Optimized for vector artwork & 3D graphics.", tag: "HERO • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-split-3", componentName: "hero-split-stats", name: "Split with Stats", desc: "Data driven hero displaying immediate value.", tag: "HERO • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Image Background",
    items: [
      { id: "h-img-1", componentName: "hero-full-image", name: "Full Image Hero", desc: "Large immersive background image.", tag: "HERO • IMAGE", defaultProps: { title: "Immersive Visuals", subtitle: "Let the image speak." } },
      { id: "h-img-2", componentName: "hero-dark-overlay", name: "Dark Overlay Hero", desc: "Gradient overlay ensures text readability.", tag: "HERO • IMAGE", defaultProps: { title: "Deep Contrast", subtitle: "Perfect text readability." } },
      { id: "h-img-3", componentName: "hero-gradient-overlay", name: "Gradient Overlay Hero", desc: "Colorful overlay on top of images.", tag: "HERO • IMAGE", defaultProps: { title: "Deep Contrast", subtitle: "Perfect text readability." } },
      { id: "h-img-4", componentName: "hero-parallax", name: "Parallax Hero", desc: "Scroll-linked background image.", tag: "HERO • IMAGE", defaultProps: { title: "Immersive Visuals", subtitle: "Let the image speak." } }
    ]
  },
  {
    category: "Video Background",
    items: [
      { id: "h-vid-1", componentName: "hero-video-fs", name: "Fullscreen Video Hero", desc: "Engaging moving background.", tag: "HERO • VIDEO", defaultProps: { title: "Motion Brings Life", subtitle: "Video background hero." } },
      { id: "h-vid-2", componentName: "hero-video-loop", name: "Loop Video Hero", desc: "Continuous video playback.", tag: "HERO • VIDEO", defaultProps: { title: "Motion Brings Life", subtitle: "Video background hero." } },
      { id: "h-vid-3", componentName: "hero-video-overlay", name: "Video Overlay Hero", desc: "Filtered video layer with clear text.", tag: "HERO • VIDEO", defaultProps: { title: "Motion Brings Life", subtitle: "Video background hero." } }
    ]
  },
  {
    category: "SaaS / Startup",
    items: [
      { id: "h-saas-1", componentName: "hero-saas-product", name: "Product Showcase Hero", desc: "Optimized for software screenshots.", tag: "HERO • SAAS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", title: "The Ultimate Tool", subtitle: "Designed for modern teams." } },
      { id: "h-saas-2", componentName: "hero-saas-dashboard", name: "Dashboard Preview Hero", desc: "Shows application UI immediately.", tag: "HERO • SAAS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", title: "The Ultimate Tool", subtitle: "Designed for modern teams." } },
      { id: "h-saas-3", componentName: "hero-saas-cta", name: "CTA Hero (Start Free)", desc: "High conversion SaaS layout.", tag: "HERO • SAAS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", title: "The Ultimate Tool", subtitle: "Designed for modern teams." } },
      { id: "h-saas-4", componentName: "hero-saas-trust", name: "Trust Badge Hero", desc: "Hero with integrated social proof.", tag: "HERO • SAAS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", title: "Trusted by the Best", subtitle: "Join 10,000+ companies." } }
    ]
  },
  {
    category: "E-commerce",
    items: [
      { id: "h-ecom-1", componentName: "hero-ecom-product", name: "Product Hero", desc: "Highlight a single flagship product.", tag: "HERO • ECOM", defaultProps: { bgColor: "#f8fafc", textColor: "#0f172a" } },
      { id: "h-ecom-2", componentName: "hero-ecom-offer", name: "Offer Banner Hero", desc: "Sale or discount focused.", tag: "HERO • ECOM", defaultProps: { bgColor: "#f8fafc", textColor: "#0f172a" } },
      { id: "h-ecom-3", componentName: "hero-ecom-collection", name: "Collection Hero", desc: "Introduce a new product line.", tag: "HERO • ECOM", defaultProps: { bgColor: "#f8fafc", textColor: "#0f172a" } },
      { id: "h-ecom-4", componentName: "hero-ecom-slider", name: "Slider Hero", desc: "Multiple products in a carousel.", tag: "HERO • ECOM", defaultProps: { bgColor: "#f8fafc", textColor: "#0f172a" } }
    ]
  },
  {
    category: "Portfolio",
    items: [
      { id: "h-port-1", componentName: "hero-portfolio-intro", name: "Personal Intro Hero", desc: "Hi, I am... focused layout.", tag: "HERO • PORTFOLIO", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-port-2", componentName: "hero-portfolio-designer", name: "Designer Hero", desc: "Creative and expressive intro.", tag: "HERO • PORTFOLIO", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-port-3", componentName: "hero-portfolio-minimal", name: "Minimal Portfolio Hero", desc: "Understated typography focus.", tag: "HERO • PORTFOLIO", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "App / Mobile",
    items: [
      { id: "h-app-1", componentName: "hero-app-download", name: "App Download Hero", desc: "App store badges and phone mockups.", tag: "HERO • APP", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-app-2", componentName: "hero-app-mockup", name: "Mobile Mockup Hero", desc: "3D phone UI showcase.", tag: "HERO • APP", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-app-3", componentName: "hero-app-feature", name: "App Feature Hero", desc: "Highlight key mobile functionality.", tag: "HERO • APP", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Creative / Animated",
    items: [
      { id: "h-crea-1", componentName: "hero-creative-gradient", name: "Gradient Hero", desc: "Dynamic color shifts and glows.", tag: "HERO • CREATIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-crea-2", componentName: "hero-creative-glass", name: "Glass Hero", desc: "Glassmorphism aesthetics.", tag: "HERO • CREATIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-crea-3", componentName: "hero-creative-animated", name: "Animated Hero", desc: "Framer motion enhancements.", tag: "HERO • CREATIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-crea-4", componentName: "hero-creative-3d", name: "3D Hero", desc: "ThreeJS or 3D spline integration.", tag: "HERO • CREATIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Fullscreen",
    items: [
      { id: "h-full-1", componentName: "hero-fullscreen-100", name: "100vh Hero", desc: "Takes up exactly one screen height.", tag: "HERO • FULL", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-full-2", componentName: "hero-fullscreen-center", name: "Fullscreen Center Hero", desc: "Balanced vertical alignment.", tag: "HERO • FULL", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-full-3", componentName: "hero-fullscreen-split", name: "Fullscreen Split Hero", desc: "Split layout occupying 100vh.", tag: "HERO • FULL", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Hybrid",
    items: [
      { id: "h-hyb-1", componentName: "hero-hybrid-imgvid", name: "Image + Video Hero", desc: "Mixed media approach.", tag: "HERO • HYBRID", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-hyb-2", componentName: "hero-hybrid-splitanim", name: "Split + Animation Hero", desc: "Structuring text with fluid graphics.", tag: "HERO • HYBRID", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } },
      { id: "h-hyb-3", componentName: "hero-hybrid-dynamic", name: "Dynamic Hero", desc: "Data driven, interactive hero.", tag: "HERO • HYBRID", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  }
];

export const generateHeroCode = (componentName: string, props: any) => {
  const propsString = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
    
  return `import { ${componentName.replace(/-./g, x=>x[1].toUpperCase()).replace(/^./, x=>x.toUpperCase())} } from '@/components/library/Heros';

export default function HeroSection() {
  return (
    <${componentName.replace(/-./g, x=>x[1].toUpperCase()).replace(/^./, x=>x.toUpperCase())} ${propsString} />
  );
}`;
};
