
import { Layout, Grid, Image, Share2, Mail, Info, MapPin, Scale, Download, MousePointer2, Zap, Sparkles } from 'lucide-react';

export const footerCategories = [
  "Basic",
  "Multi-column",
  "Branding",
  "Social Links",
  "Newsletter / Subscribe",
  "Contact Info",
  "Map",
  "Legal",
  "CTA / App Download",
  "Minimal / Clean",
  "Interactive",
  "Creative / Premium"
];

export const footerLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "footer-basic",
        name: "Simple Centered Footer",
        tag: "FOOTER • BASIC",
        desc: "A clean, single-row footer with navigation and copyright.",
        componentName: "FooterBasic",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Multi-column",
    items: [
      {
        id: "footer-4col",
        name: "4 Column Grid Footer",
        tag: "FOOTER • GRID",
        desc: "Structured layout for complex sitemaps and links.",
        componentName: "FooterGrid4Col",
        defaultProps: {
          bgColor: "#09090b",
          cols: 4
        }
      }
    ]
  },
  {
    category: "Branding",
    items: [
      {
        id: "footer-branding",
        name: "Company Identity Footer",
        tag: "FOOTER • BRANDING",
        desc: "Focus on logo, mission statement, and key links.",
        componentName: "FooterBranding",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#f43f5e"
        }
      }
    ]
  },
  {
    category: "Social Links",
    items: [
      {
        id: "footer-social",
        name: "Social Hub Footer",
        tag: "FOOTER • SOCIAL",
        desc: "Prominent follow buttons and social feed integration.",
        componentName: "FooterSocialLinks",
        defaultProps: {
          bgColor: "#09090b",
          iconColor: "#ffffff"
        }
      }
    ]
  },
  {
    category: "Newsletter / Subscribe",
    items: [
      {
        id: "footer-newsletter",
        name: "Newsletter Signup Footer",
        tag: "FOOTER • SUBSCRIBE",
        desc: "Integrate email marketing directly into your site footer.",
        componentName: "FooterNewsletter",
        defaultProps: {
          bgColor: "#09090b",
          btnColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Contact Info",
    items: [
      {
        id: "footer-contact",
        name: "Business Details Footer",
        tag: "FOOTER • CONTACT",
        desc: "One-click access to phone, email, and office locations.",
        componentName: "FooterContactInfo",
        defaultProps: {
          bgColor: "#09090b",
          iconColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Map",
    items: [
      {
        id: "footer-map",
        name: "Location Map Footer",
        tag: "FOOTER • MAP",
        desc: "Embed an interactive Google Map overlay in your footer.",
        componentName: "FooterWithMap",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Legal",
    items: [
      {
        id: "footer-legal",
        name: "Compliance Link Bar",
        tag: "FOOTER • LEGAL",
        desc: "Standard row for Privacy, Terms, and Cookie policies.",
        componentName: "FooterLegal",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff"
        }
      }
    ]
  },
  {
    category: "CTA / App Download",
    items: [
      {
        id: "footer-cta",
        name: "App Store Action Footer",
        tag: "FOOTER • CTA",
        desc: "High-conversion footer for mobile app downloads.",
        componentName: "FooterAppDownload",
        defaultProps: {
          bgColor: "#000000",
          btnColor: "#111"
        }
      }
    ]
  },
  {
     category: "Minimal / Clean",
     items: [
        {
           id: "footer-minimal",
           name: "Minimalist Divider Footer",
           tag: "FOOTER • MINIMAL",
           desc: "Elegant, text-only footer with modern spacing.",
           componentName: "FooterMinimal",
           defaultProps: {
               bgColor: "#09090b",
               textColor: "#ffffff"
           }
        }
     ]
  },
  {
     category: "Interactive",
     items: [
        {
           id: "footer-interactive",
           name: "Animated Social Footer",
           tag: "FOOTER • INTERACTIVE",
           desc: "Footer sections that expand and animate on hover.",
           componentName: "FooterInteractive",
           defaultProps: {
               bgColor: "#000000",
               hoverColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "footer-creative",
           name: "Gradient 3D Footer",
           tag: "FOOTER • PREMIUM",
           desc: "Advanced 3D perspective with neon light signatures.",
           componentName: "FooterCreative3D",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#8b5cf6"
           }
        }
     ]
  }
];

export const generateFooterCode = (componentName: string, props: any) => {
  return `
import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ${componentName} = () => {
  return (
    <footer className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Footer Implementation */}
      </div>
    </footer>
  );
};

export default ${componentName};
  `.trim();
};
