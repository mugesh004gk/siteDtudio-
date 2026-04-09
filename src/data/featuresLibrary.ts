export const featuresCategories = [
  "Basic",
  "Card-Based",
  "Icon Features",
  "Image Features",
  "Split Layout",
  "SaaS / Product",
  "E-commerce",
  "Grid / List",
  "Timeline / Steps",
  "Interactive",
  "Stats / Metrics",
  "Creative / Premium"
];

export const featuresLibrary = [
  {
    category: "Basic",
    items: [
      { id: "f-basic-1", componentName: "features-3col", name: "3 Column Features (Icon + Text)", desc: "Standard 3-column layout with center-aligned text and icons.", tag: "FEATURES • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", iconColor: "#6366f1" } },
      { id: "f-basic-2", componentName: "features-4col", name: "4 Column Grid Features", desc: "Four-column grid for dense feature lists.", tag: "FEATURES • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#111113", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Card-Based",
    items: [
      { id: "f-card-1", componentName: "features-glass", name: "Glass Cards", desc: "Modern glassmorphism style cards with blur effects.", tag: "FEATURES • CARD", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "rgba(255,255,255,0.03)", iconColor: "#818cf8" } }
    ]
  },
  {
    category: "Icon Features",
    items: [
      { id: "f-icon-1", componentName: "features-icon-grid", name: "Colored Icon Features", desc: "Large illustrative icons with title focus.", tag: "FEATURES • ICON", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Image Features",
    items: [
      { id: "f-img-1", componentName: "features-split-right", name: "Image Right + Text Left", desc: "Feature text with 50% split image on the right.", tag: "FEATURES • IMAGE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1", title: "Optimized for speed" } }
    ]
  },
  {
    category: "Split Layout",
    items: [
      { id: "f-split-1", componentName: "features-split-right", name: "Multi-section Split", desc: "High conversion split layout with bullet points.", tag: "FEATURES • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1", title: "Scale with confidence" } }
    ]
  },
  {
    category: "SaaS / Product",
    items: [
      { id: "f-saas-1", componentName: "features-tabs", name: "Feature Tabs Showcase", desc: "Interactive tabs for different product modules.", tag: "FEATURES • SAAS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "E-commerce",
    items: [
      { id: "f-ecom-1", componentName: "features-ecom-highlights", name: "Service Highlights", desc: "Compact layout for trust and shipping features.", tag: "FEATURES • ECOM", defaultProps: { bgColor: "#ffffff", textColor: "#0f172a", cardColor: "#f8fafc", iconColor: "#4f46e5" } }
    ]
  },
  {
    category: "Grid / List",
    items: [
      { id: "f-grid-1", componentName: "features-list", name: "Two Column List", desc: "Highly readable list of competitive advantages.", tag: "FEATURES • LIST", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#10b981" } }
    ]
  },
  {
    category: "Timeline / Steps",
    items: [
      { id: "f-time-1", componentName: "features-timeline", name: "Step-by-Step Features", desc: "Clean vertical timeline for processes and roadmaps.", tag: "FEATURES • STEPS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Interactive",
    items: [
      { id: "f-inter-1", componentName: "features-accordion", name: "Accordion Features", desc: "Expandable sections for detailed feature breakdowns.", tag: "FEATURES • INTERACTIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Stats / Metrics",
    items: [
      { id: "f-stats-1", componentName: "features-kpi-stats", name: "KPI Metrics Highlight", desc: "Emphasis on numbers and growth metrics.", tag: "FEATURES • STATS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#10b981" } }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      { id: "f-crea-1", componentName: "features-neon", name: "Neon Effects Showcase", desc: "High-contrast creative layouts with glow effects.", tag: "FEATURES • CREATIVE", defaultProps: { bgColor: "#050505", textColor: "#ffffff", iconColor: "#f43f5e" } }
    ]
  }
];

export const generateFeaturesCode = (componentName: string, props: any) => {
  const propsString = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
    
  const pascalName = componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return `import { ${pascalName} } from '@/components/library/Features';

export default function FeaturesSection() {
  return (
    <${pascalName} ${propsString} />
  );
}`;
};
