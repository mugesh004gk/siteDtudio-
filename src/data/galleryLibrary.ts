
import { Image, LayoutGrid, Maximize, Sliders, Eye, Filter, Briefcase, Type, Play, MousePointer2, Monitor, Sparkles } from 'lucide-react';

export const galleryCategories = [
  "Basic",
  "Grid",
  "Masonry",
  "Slider / Carousel",
  "Lightbox",
  "Filterable",
  "Portfolio",
  "Image + Text",
  "Video",
  "Interactive",
  "Fullscreen / Hero",
  "Creative / Premium"
];

export const galleryLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "gallery-basic-grid",
        name: "Simple Image Grid",
        tag: "GALLERY • BASIC",
        desc: "A clean, standard grid layout for displaying images.",
        componentName: "GalleryBasicGrid",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3,
          spacing: 24
        }
      }
    ]
  },
  {
    category: "Grid",
    items: [
      {
        id: "gallery-grid-4col",
        name: "4 Column Equal Grid",
        tag: "GALLERY • GRID",
        desc: "Square aspect ratio grid for high-density visual content.",
        componentName: "GalleryGrid4Col",
        defaultProps: {
          bgColor: "#09090b",
          cols: 4
        }
      }
    ]
  },
  {
    category: "Masonry",
    items: [
      {
        id: "gallery-masonry",
        name: "Pinterest Masonry",
        tag: "GALLERY • MASONRY",
        desc: "Vertical-span masonry for images with varying heights.",
        componentName: "GalleryMasonry",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Slider / Carousel",
    items: [
      {
        id: "gallery-slider",
        name: "Auto Slider Gallery",
        tag: "GALLERY • SLIDER",
        desc: "Full-width image slider with auto-advance and dots.",
        componentName: "GallerySlider",
        defaultProps: {
          bgColor: "#09090b",
          autoPlay: true
        }
      }
    ]
  },
  {
    category: "Lightbox",
    items: [
      {
        id: "gallery-lightbox",
        name: "Click-to-Zoom Gallery",
        tag: "GALLERY • LIGHTBOX",
        desc: "Interactive gallery with full-screen viewer functionality.",
        componentName: "GalleryLightbox",
        defaultProps: {
          bgColor: "#09090b",
          overlayColor: "rgba(0,0,0,0.9)"
        }
      }
    ]
  },
  {
    category: "Filterable",
    items: [
      {
        id: "gallery-filterable",
        name: "Tab Filter Gallery",
        tag: "GALLERY • FILTER",
        desc: "Category-based filtering system for visual assets.",
        componentName: "GalleryFilterable",
        defaultProps: {
          bgColor: "#09090b",
          activeColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Portfolio",
    items: [
      {
        id: "gallery-portfolio",
        name: "Project Showcase",
        tag: "GALLERY • PORTFOLIO",
        desc: "Detailed project cards with titles and tags.",
        componentName: "GalleryPortfolio",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
     category: "Image + Text",
     items: [
        {
           id: "gallery-text",
           name: "Hover Caption Gallery",
           tag: "GALLERY • TEXT",
           desc: "Text overlays that appear on image hover.",
           componentName: "GalleryImageText",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#ffffff"
           }
        }
     ]
  },
  {
     category: "Video",
     items: [
        {
           id: "gallery-video",
           name: "Video Grid Gallery",
           tag: "GALLERY • VIDEO",
           desc: "Supports YouTube/Vimeo and self-hosted video content.",
           componentName: "GalleryVideoGrid",
           defaultProps: {
               bgColor: "#0d0d0f",
               cols: 2
           }
        }
     ]
  },
  {
     category: "Interactive",
     items: [
        {
           id: "gallery-interactive",
           name: "Animated Flip Gallery",
           tag: "GALLERY • INTERACTIVE",
           desc: "Images rotate or scale with advanced motion signatures.",
           componentName: "GalleryInteractive",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Fullscreen / Hero",
     items: [
        {
           id: "gallery-fullscreen",
           name: "Fullscreen Banner",
           tag: "GALLERY • FULLSCREEN",
           desc: "Maximum impact full-width image presentation.",
           componentName: "GalleryFullscreen",
           defaultProps: {
               bgColor: "#000000",
               height: "100vh"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "gallery-creative",
           name: "3D Stack Layout",
           tag: "GALLERY • PREMIUM",
           desc: "Creative 3D perspective stacks with hover expansion.",
           componentName: "GalleryCreative3D",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#8b5cf6"
           }
        }
     ]
  }
];

export const generateGalleryCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { Maximize2, Play } from 'lucide-react';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
