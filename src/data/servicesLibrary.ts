export const servicesCategories = [
  "Basic",
  "Card-Based",
  "Icon Services",
  "Image Services",
  "Split Layout",
  "Agency / Business",
  "SaaS / Tech",
  "E-commerce",
  "Grid / List",
  "Process / Workflow",
  "Interactive",
  "Creative / Premium"
];

export const servicesLibrary = [
  {
    category: "Basic",
    items: [
      { id: "s-basic-1", componentName: "services-3col", name: "3 Column Services", desc: "Clean grid layout with icons and focused descriptive text.", tag: "SERVICES • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } },
      { id: "s-basic-2", componentName: "services-3col", name: "Minimalist Services List", desc: "Simplified services view for direct messaging.", tag: "SERVICES • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Card-Based",
    items: [
      { id: "s-card-1", componentName: "services-cards", name: "Service Cards Grid", desc: "Premium cards with glassmorphism and subtle glow effects.", tag: "SERVICES • CARD", defaultProps: { bgColor: "#0d0d0f", textColor: "#ffffff", cardColor: "#18181b", iconColor: "#818cf8" } }
    ]
  },
  {
    category: "Icon Services",
    items: [
      { id: "s-icon-1", componentName: "services-icon-grid", name: "Circular Icon Showcase", desc: "Minimal list focusing on primary capabilities.", tag: "SERVICES • ICON", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#10b981" } }
    ]
  },
  {
    category: "Image Services",
    items: [
       { id: "s-img-1", componentName: "services-image", name: "Professional Image Cards", desc: "Visual-first service presentation with hover reveals.", tag: "SERVICES • IMAGE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Split Layout",
    items: [
       { id: "s-split-1", componentName: "services-split", name: "Alternating Zig-Zag Services", desc: "Balanced visual and narrative split layout.", tag: "SERVICES • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Agency / Business",
    items: [
       { id: "s-agency-1", componentName: "services-agency", name: "Agency Services Grid", desc: "Icon-led business solutions layout for professional agencies.", tag: "SERVICES • AGENCY", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "SaaS / Tech",
    items: [
       { id: "s-tech-1", componentName: "services-tech", name: "Tech Solutions List", desc: "Clean row-based layouts for API and platform services.", tag: "SERVICES • TECH", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "E-commerce",
    items: [
       { id: "s-ecom-1", componentName: "services-ecom", name: "Store Benefits Section", desc: "Highlight shipping, support, and payment features.", tag: "SERVICES • ECOM", defaultProps: { bgColor: "#ffffff", textColor: "#0f172a", iconColor: "#4f46e5" } }
    ]
  },
  {
    category: "Grid / List",
    items: [
       { id: "s-grid-1", componentName: "services-cards", name: "Bento Style Grid", desc: "Modern dense grid for versatile service listings.", tag: "SERVICES • GRID", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#111113", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Process / Workflow",
    items: [
      { id: "s-proc-1", componentName: "services-process", name: "Horizontal Workflow Steps", desc: "Display your delivery process with numerical indicators.", tag: "SERVICES • PROCESS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", iconColor: "#6366f1" } }
    ]
  },
  {
    category: "Interactive",
    items: [
       { id: "s-inter-1", componentName: "services-tabs", name: "Tabs Services Section", desc: "Interactive service switching with illustrative media.", tag: "SERVICES • INTERACTIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      { id: "s-pre-1", componentName: "services-premium", name: "High-Contrast Premium Cards", desc: "Dark theme creative layouts with illustrative background icons.", tag: "SERVICES • PREMIUM", defaultProps: { bgColor: "#050505", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  }
];

export const generateServicesCode = (componentName: string, props: any) => {
  const propsString = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
    
  const pascalName = componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return `import { ${pascalName} } from '@/components/library/Services';

export default function ServicesSection() {
  return (
    <${pascalName} ${propsString} />
  );
}`;
};
