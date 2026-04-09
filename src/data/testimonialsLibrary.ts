
import { LayoutGrid, MessageSquare, Star, Users, Play, Quote, Zap, Sparkles } from 'lucide-react';

export const testimonialsCategories = [
  "Basic",
  "Card-Based",
  "Slider / Carousel",
  "Video",
  "Avatar / Image",
  "Rating / Stars",
  "Grid / List",
  "Social Proof",
  "Stats",
  "Quote / Story",
  "Interactive",
  "Creative / Premium"
];

export const testimonialsLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "test-basic-single",
        name: "Single Testimonial",
        tag: "TESTIMONIAL • BASIC",
        desc: "A clean, centered testimonial with a quote and author.",
        componentName: "TestimonialSingle",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          accentColor: "#6366f1",
          authorName: "Sarah Johnson",
          authorRole: "CEO, TechFlow",
          content: "Implementing SiteStudio has been a game-changer for our development workflow. The speed and quality are unmatched.",
          fontSize: "Standard",
          fontWeight: "Medium",
          align: "center"
        }
      },
      {
        id: "test-basic-3col",
        name: "3 Column Layout",
        tag: "TESTIMONIAL • BASIC",
        desc: "Classic three-column testimonial grid for standard reviews.",
        componentName: "TestimonialGridBasic",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          cols: 3,
          items: [
            { name: "John Doe", role: "Manager", text: "Great tool!" },
            { name: "Jane Smith", role: "Designer", text: "Love the UI." },
            { name: "Alex Lee", role: "Dev", text: "Extremely fast." }
          ]
        }
      }
    ]
  },
  {
    category: "Card-Based",
    items: [
      {
        id: "test-card-glass",
        name: "Glassmorphism Cards",
        tag: "TESTIMONIAL • CARDS",
        desc: "Frosted glass effect testimonial cards for a modern aesthetic.",
        componentName: "TestimonialGlassCards",
        defaultProps: {
          bgColor: "#09090b",
          cardColor: "rgba(255,255,255,0.05)",
          accentColor: "#a855f7",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Slider / Carousel",
    items: [
      {
        id: "test-slider-auto",
        name: "Auto-Loop Slider",
        tag: "TESTIMONIAL • SLIDER",
        desc: "Infinite looping testimonial slider with motion focus.",
        componentName: "TestimonialSlider",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          accentColor: "#6366f1",
          autoPlay: true
        }
      }
    ]
  },
  {
    category: "Video",
    items: [
      {
        id: "test-video-grid",
        name: "Video Review Grid",
        tag: "TESTIMONIAL • VIDEO",
        desc: "Interactive video testimonials with play button overlays.",
        componentName: "TestimonialVideoGrid",
        defaultProps: {
          bgColor: "#0d0d0f",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Avatar / Image",
    items: [
      {
        id: "test-avatar-circles",
        name: "Circular Avatars",
        tag: "TESTIMONIAL • AVATAR",
        desc: "Layout focused on customer personas with prominent avatars.",
        componentName: "TestimonialAvatars",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#f43f5e"
        }
      }
    ]
  },
  {
    category: "Rating / Stars",
    items: [
      {
        id: "test-rating-stars",
        name: "Star Highlight Reviews",
        tag: "TESTIMONIAL • RATING",
        desc: "Focus on social proof with prominent star ratings.",
        componentName: "TestimonialStars",
        defaultProps: {
          bgColor: "#09090b",
          starColor: "#facc15",
          showRatingValue: true,
          rating: 5
        }
      }
    ]
  },
  {
    category: "Grid / List",
    items: [
      {
        id: "test-grid-masonry",
        name: "Masonry Wall",
        tag: "TESTIMONIAL • GRID",
        desc: "Dynamic masonry layout for varying review lengths.",
        componentName: "TestimonialMasonry",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Social Proof",
    items: [
      {
        id: "test-social-logos",
        name: "Brand Trust Strip",
        tag: "SOCIAL • PROOF",
        desc: "Logo monochrome strip to showcase brand trust.",
        componentName: "SocialProofLogos",
        defaultProps: {
          bgColor: "#09090b",
          opacity: 0.5
        }
      }
    ]
  },
  {
    category: "Stats",
    items: [
      {
        id: "test-stats-reviews",
        name: "Metric-Driven Reviews",
        tag: "TESTIMONIAL • STATS",
        desc: "Combines aggregate ratings with individual customer stories.",
        componentName: "TestimonialStats",
        defaultProps: {
          bgColor: "#09090b",
          statsColor: "#10b981"
        }
      }
    ]
  },
  {
    category: "Quote / Story",
    items: [
      {
        id: "test-story-long",
        name: "Long-form Story",
        tag: "TESTIMONIAL • STORY",
        desc: "Rich narrative-style testimonial for case studies.",
        componentName: "TestimonialStory",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Interactive",
    items: [
      {
        id: "test-interactive-tabs",
        name: "Tabbed Reviews",
        tag: "TESTIMONIAL • INTERACTIVE",
        desc: "User-selectable testimonials categorized by use-case.",
        componentName: "TestimonialTabs",
        defaultProps: {
          bgColor: "#09090b",
          activeColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      {
        id: "test-creative-3d",
        name: "3D Motion Cards",
        tag: "TESTIMONIAL • PREMIUM",
        desc: "Perspective-shifting cards with interactive entrance animations.",
        componentName: "TestimonialCreative3D",
        defaultProps: {
          bgColor: "#000000",
          accentColor: "#8b5cf6"
        }
      }
    ]
  }
];

export const generateTestimonialCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { Quote, Star } from 'lucide-react';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Testimonial Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
