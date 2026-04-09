
import { HelpCircle, Layers, LayoutGrid, Search, MessageSquare, Monitor, ListOrdered, MousePointer2, Minus, Sparkles } from 'lucide-react';

export const faqCategories = [
  "Basic",
  "Accordion",
  "Grid / Cards",
  "Category / Tabs",
  "Searchable",
  "Icons / Illustration",
  "Support / CTA",
  "Media (Video/Image)",
  "Steps / Guide",
  "Interactive",
  "Minimal",
  "Creative / Premium"
];

export const faqLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "faq-basic-list",
        name: "Simple Q&A List",
        tag: "FAQ • BASIC",
        desc: "A clean, static list of frequently asked questions.",
        componentName: "FAQBasicList",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          accentColor: "#6366f1",
          items: [
            { q: "How do I get started?", a: "Simply sign up and choose a template to begin building your site." },
            { q: "Can I export my code?", a: "Yes, you can export production-ready React or HTML code instantly." }
          ]
        }
      }
    ]
  },
  {
    category: "Accordion",
    items: [
      {
        id: "faq-accordion-glass",
        name: "Animated Accordion",
        tag: "FAQ • ACCORDION",
        desc: "Smoothly expanding FAQ items with glassmorphism effects.",
        componentName: "FAQAccordionGlass",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#a855f7"
        }
      }
    ]
  },
  {
    category: "Grid / Cards",
    items: [
      {
        id: "faq-grid-cards",
        name: "FAQ Cards Grid",
        tag: "FAQ • GRID",
        desc: "Questions organized into an interactive card grid.",
        componentName: "FAQGridCards",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Category / Tabs",
    items: [
      {
        id: "faq-tabs-filter",
        name: "Tab-based FAQ",
        tag: "FAQ • TABS",
        desc: "Filter questions by category using a high-fidelity tab system.",
        componentName: "FAQTabsFilter",
        defaultProps: {
          bgColor: "#09090b",
          activeColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Searchable",
    items: [
      {
        id: "faq-searchable",
        name: "Help Center FAQ",
        tag: "FAQ • SEARCH",
        desc: "Includes a real-time search bar for finding specific answers.",
        componentName: "FAQSearchable",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Icons / Illustration",
    items: [
      {
         id: "faq-icons",
         name: "Illustrated FAQ",
         tag: "FAQ • ICONS",
         desc: "Questions accompanied by descriptive icons for better UX.",
         componentName: "FAQWithIcons",
         defaultProps: {
             bgColor: "#09090b",
             iconColor: "#10b981"
         }
      }
    ]
  },
  {
    category: "Support / CTA",
    items: [
      {
        id: "faq-support",
        name: "FAQ + Support Section",
        tag: "FAQ • SUPPORT",
        desc: "Combines FAQ with a direct support/contact call to action.",
        componentName: "FAQSupportCTA",
        defaultProps: {
          bgColor: "#09090b",
          btnColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Media (Video/Image)",
    items: [
      {
        id: "faq-media",
        name: "Tutorial FAQ",
        tag: "FAQ • MEDIA",
        desc: "Embed tutorial videos or helpful images alongside answers.",
        componentName: "FAQMedia",
        defaultProps: {
          bgColor: "#0d0d0f",
          mediaUrl: "video"
        }
      }
    ]
  },
  {
    category: "Steps / Guide",
    items: [
      {
        id: "faq-steps",
        name: "Step-by-Step Guide",
        tag: "FAQ • STEPS",
        desc: "Ordered list layout for process-oriented instruction.",
        componentName: "FAQSteps",
        defaultProps: {
          bgColor: "#09090b",
          numberColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Interactive",
    items: [
      {
        id: "faq-interactive",
        name: "Hover Interaction FAQ",
        tag: "FAQ • INTERACTIVE",
        desc: "Items expand or illuminate on hover for modern web feel.",
        componentName: "FAQInteractive",
        defaultProps: {
          bgColor: "#000000",
          hoverColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Minimal",
    items: [
      {
        id: "faq-minimal",
        name: "Minimal Typography FAQ",
        tag: "FAQ • MINIMAL",
        desc: "Clean, text-focused Q&A with elegant dividers.",
        componentName: "FAQMinimal",
        defaultProps: {
          bgColor: "#09090b",
          dividerColor: "rgba(255,255,255,0.05)"
        }
      }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      {
        id: "faq-creative",
        name: "3D Stacked FAQ",
        tag: "FAQ • PREMIUM",
        desc: "Creative 3D perspective cards with advanced animations.",
        componentName: "FAQCreative3D",
        defaultProps: {
          bgColor: "#000000",
          accentColor: "#8b5cf6"
        }
      }
    ]
  }
];

export const generateFAQCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { Plus, Minus } from 'lucide-react';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
