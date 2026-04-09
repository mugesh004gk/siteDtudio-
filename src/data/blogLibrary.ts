
import { Newspaper, LayoutGrid, Star, CreditCard, Sidebar, Filter, Search, User, Clock, Zap, Sparkles, BookOpen } from 'lucide-react';

export const blogCategories = [
  "Basic",
  "Grid Layout",
  "Featured / Hero Blog",
  "Card-Based",
  "Sidebar Layout",
  "Category / Filter",
  "Searchable",
  "Author / Profile",
  "Metadata",
  "Interactive",
  "Minimal / Clean",
  "Creative / Premium"
];

export const blogLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "blog-basic-list",
        name: "Minimal Blog List",
        tag: "BLOG • BASIC",
        desc: "A clean, list-based layout for news and articles.",
        componentName: "BlogBasicList",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          accentColor: "#6366f1",
          showDate: true
        }
      }
    ]
  },
  {
    category: "Grid Layout",
    items: [
      {
        id: "blog-grid-3col",
        name: "3 Column Grid",
        tag: "BLOG • GRID",
        desc: "Classic three-column post grid for high content density.",
        componentName: "BlogGrid3Col",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Featured / Hero Blog",
    items: [
      {
        id: "blog-hero",
        name: "Featured Post Hero",
        tag: "BLOG • HERO",
        desc: "Large highlight section for your most important story.",
        componentName: "BlogHeroFeatured",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#f43f5e"
        }
      }
    ]
  },
  {
    category: "Card-Based",
    items: [
      {
        id: "blog-card-glass",
        name: "Glassmorphism Cards",
        tag: "BLOG • CARDS",
        desc: "Frosted cards with interactive hover effects.",
        componentName: "BlogGlassCards",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#a855f7"
        }
      }
    ]
  },
  {
    category: "Sidebar Layout",
    items: [
      {
        id: "blog-sidebar",
        name: "Blog + Widget Sidebar",
        tag: "BLOG • SIDEBAR",
        desc: "Traditional blog layout with a functional navigation sidebar.",
        componentName: "BlogWithSidebar",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Category / Filter",
    items: [
      {
        id: "blog-filter",
        name: "Category Tabs Blog",
        tag: "BLOG • FILTER",
        desc: "Sort articles instantly using premium category tabs.",
        componentName: "BlogTabFilter",
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
        id: "blog-search",
        name: "Live Search Blog",
        tag: "BLOG • SEARCH",
        desc: "Includes a real-time reactive search engine for posts.",
        componentName: "BlogSearchable",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
     category: "Author / Profile",
     items: [
        {
           id: "blog-author",
           name: "Author Profile Grid",
           tag: "BLOG • AUTHOR",
           desc: "Focus on the creators with prominent author cards.",
           componentName: "BlogAuthorGrid",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#10b981"
           }
        }
     ]
  },
  {
     category: "Metadata",
     items: [
        {
           id: "blog-meta",
           name: "Rich Metadata List",
           tag: "BLOG • META",
           desc: "Detailed post headers with read time and category tags.",
           componentName: "BlogMetaDetail",
           defaultProps: {
               bgColor: "#09090b",
               tagColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Interactive",
     items: [
        {
           id: "blog-interactive",
           name: "Interactive Grid",
           tag: "BLOG • INTERACTIVE",
           desc: "Components that respond and animate to user interaction.",
           componentName: "BlogInteractiveGrid",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#f59e0b"
           }
        }
     ]
  },
  {
     category: "Minimal / Clean",
     items: [
        {
           id: "blog-minimal",
           name: "Clean Typography Blog",
           tag: "BLOG • MINIMAL",
           desc: "Focus purely on content with high-fidelity typography.",
           componentName: "BlogMinimalClean",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "blog-premium",
           name: "3D Perspective Cards",
           tag: "BLOG • PREMIUM",
           desc: "Advanced 3D hover effects with glowing backdrop layers.",
           componentName: "BlogCreative3D",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#8b5cf6"
           }
        }
     ]
  }
];

export const generateBlogCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Blog Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
