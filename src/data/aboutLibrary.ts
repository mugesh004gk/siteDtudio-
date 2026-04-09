export const aboutCategories = [
  "Basic",
  "Centered",
  "Split Layout",
  "Image / Visual",
  "Team",
  "Story / Timeline",
  "Mission / Vision",
  "Stats / Achievements",
  "Testimonials",
  "Video",
  "Interactive",
  "Creative / Premium"
];

export const aboutLibrary = [
  {
    category: "Basic",
    items: [
      { id: "a-basic-1", componentName: "about-basic", name: "Text Left + Image Right", desc: "Classic about section with focused text and illustrative media.", tag: "ABOUT • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1", title: "Who We Are", description: "We are a dedicated team of experts focused on delivering excellence and innovation in everything we do." } },
      { id: "a-basic-2", componentName: "about-basic", name: "Simple Company Intro", desc: "Minimalist layout for direct brand messaging.", tag: "ABOUT • BASIC", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Centered",
    items: [
      { id: "a-cent-1", componentName: "about-centered", name: "Centered Heading + Paragraph", desc: "Symmetrical layout for maximum focus on statement pieces.", tag: "ABOUT • CENTERED", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Split Layout",
    items: [
      { id: "a-split-1", componentName: "about-basic", name: "50/50 Split About", desc: "Balanced visual and narrative split layout.", tag: "ABOUT • SPLIT", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Image / Visual",
    items: [
      { id: "a-vis-1", componentName: "about-visual", name: "Image Collage Grid", desc: "High-impact visual showcase of your team and studio.", tag: "ABOUT • VISUAL", defaultProps: { bgColor: "#09090b", textColor: "#ffffff" } }
    ]
  },
  {
    category: "Team",
    items: [
      { id: "a-team-1", componentName: "about-team-grid", name: "Team Grid Cards", desc: "Highlight your key members with roles and photos.", tag: "ABOUT • TEAM", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Story / Timeline",
    items: [
      { id: "a-time-1", componentName: "about-timeline", name: "Vertical Timeline", desc: "Display your company journey and milestones sequentially.", tag: "ABOUT • STORY", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Mission / Vision",
    items: [
      { id: "a-miss-1", componentName: "about-mission-vision", name: "Mission + Vision Cards", desc: "Clear focus on company purpose and future outlook.", tag: "ABOUT • MISSION", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Stats / Achievements",
    items: [
      { id: "a-stats-1", componentName: "about-stats", name: "KPI Metrics Highlight", desc: "Data driven section to showcase reach and experience.", tag: "ABOUT • STATS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Testimonials",
    items: [
       { id: "a-test-1", componentName: "about-basic", name: "About + Quote Highlight", desc: "Feature a powerful client quote alongside your intro.", tag: "ABOUT • TESTIMONIAL", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Video",
    items: [
      { id: "a-vid-1", componentName: "about-video", name: "Video Introduction", desc: "Immersive video playback for storytelling.", tag: "ABOUT • VIDEO", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Interactive",
    items: [
      { id: "a-inter-1", componentName: "about-accordion", name: "Accordion About Section", desc: "Clean expandable content for detailed brand values.", tag: "ABOUT • INTERACTIVE", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      { id: "a-crea-1", componentName: "about-glass", name: "Glassmorphism About", desc: "Modern blur effects for a creative and tech-forward feel.", tag: "ABOUT • CREATIVE", defaultProps: { bgColor: "#050505", textColor: "#ffffff", accentColor: "#6366f1" } }
    ]
  }
];

export const generateAboutCode = (componentName: string, props: any) => {
  const propsString = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
    
  const pascalName = componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return `import { ${pascalName} } from '@/components/library/About';

export default function AboutSection() {
  return (
    <${pascalName} ${propsString} />
  );
}`;
};
