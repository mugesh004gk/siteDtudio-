
import { Zap, Maximize, Split, Layout, FormInput, Image, Play, Star, Sparkles, Anchor, Type, MousePointer2 } from 'lucide-react';

export const ctaCategories = [
  "Basic",
  "Full-width",
  "Split Layout",
  "Card-Based",
  "With Form",
  "Image / Illustration",
  "Video",
  "Social Proof",
  "Interactive",
  "Sticky / Floating",
  "Minimal / Clean",
  "Creative / Premium"
];

export const ctaLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "cta-basic",
        name: "Simple Centered CTA",
        tag: "CTA • BASIC",
        desc: "A clean, high-conversion centered headline with a primary button.",
        componentName: "CtaBasic",
        defaultProps: {
          bgColor: "#09090b",
          btnColor: "#6366f1",
          heading: "Ready to accelerate your workflow?",
          subheading: "Join 10,000+ developers building with SiteStudio."
        }
      }
    ]
  },
  {
    category: "Full-width",
    items: [
      {
        id: "cta-fullwidth",
        name: "Edge-to-Edge Banner",
        tag: "CTA • FULLWIDTH",
        desc: "A sprawling full-width banner for maximum visual impact.",
        componentName: "CtaFullWidth",
        defaultProps: {
          bgColor: "#111",
          btnColor: "#ffffff"
        }
      }
    ]
  },
  {
    category: "Split Layout",
    items: [
      {
        id: "cta-split",
        name: "50/50 Content Split",
        tag: "CTA • SPLIT",
        desc: "Balanced section with persuasive text on one side and CTA on the other.",
        componentName: "CtaSplit",
        defaultProps: {
          bgColor: "#000000",
          accentColor: "#f43f5e"
        }
      }
    ]
  },
  {
    category: "Card-Based",
    items: [
      {
        id: "cta-card",
        name: "Glassmorphic CTA Card",
        tag: "CTA • CARD",
        desc: "Floating CTA card with translucent background and deep shadows.",
        componentName: "CtaCard",
        defaultProps: {
          bgColor: "#09090b",
          cardBg: "rgba(255,255,255,0.03)"
        }
      }
    ]
  },
  {
    category: "With Form",
    items: [
      {
        id: "cta-form",
        name: "Lead Capture Capture",
        tag: "CTA • FORM",
        desc: "Direct integration for email signups or newsletter subscriptions.",
        componentName: "CtaWithForm",
        defaultProps: {
          bgColor: "#09090b",
          btnColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Image / Illustration",
    items: [
      {
        id: "cta-image",
        name: "Image Background CTA",
        tag: "CTA • IMAGE",
        desc: "Cinematic full-width background image with text overlay.",
        componentName: "CtaImageBackground",
        defaultProps: {
          bgColor: "#000000",
          accentColor: "#ffffff"
        }
      }
    ]
  },
  {
    category: "Video",
    items: [
      {
        id: "cta-video",
        name: "Video Experience CTA",
        tag: "CTA • VIDEO",
        desc: "Background video loops for maximum user engagement and impact.",
        componentName: "CtaVideoBackground",
        defaultProps: {
          bgColor: "#000000",
          autoPlay: true
        }
      }
    ]
  },
  {
    category: "Social Proof",
    items: [
      {
        id: "cta-social",
        name: "Trust-Boost CTA",
        tag: "CTA • PROOF",
        desc: "Combines a powerful CTA with ratings or user testimonials.",
        componentName: "CtaSocialProof",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#fbbf24"
        }
      }
    ]
  },
  {
    category: "Interactive",
    items: [
      {
        id: "cta-interactive",
        name: "Hover Dynamic CTA",
        tag: "CTA • INTERACTIVE",
        desc: "Section that scales or rotates dynamically on hover interaction.",
        componentName: "CtaInteractive",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Sticky / Floating",
    items: [
      {
        id: "cta-sticky",
        name: "Sticky Bottom Bar",
        tag: "CTA • STICKY",
        desc: "Persistent CTA bar that stays at the bottom of the viewport.",
        componentName: "CtaStickyBar",
        defaultProps: {
          bgColor: "#111",
          btnColor: "#6366f1"
        }
      }
    ]
  },
  {
     category: "Minimal / Clean",
     items: [
        {
           id: "cta-minimal",
           name: "Minimalist Type Focus",
           tag: "CTA • MINIMAL",
           desc: "Clean typography-focused call to action with zero distractions.",
           componentName: "CtaMinimal",
           defaultProps: {
               bgColor: "#09090b",
               textColor: "#ffffff"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "cta-creative",
           name: "3D perspective Portal",
           tag: "CTA • PREMIUM",
           desc: "Advanced 3D perspective layers with glowing neon gradients.",
           componentName: "CtaCreative3D",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#00fff2"
           }
        }
     ]
  }
];

export const generateCtaCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* CTA Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
