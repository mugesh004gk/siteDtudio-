
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Globe, Share2, HelpCircle, MousePointer2, Monitor, Sparkles } from 'lucide-react';

export const contactCategories = [
  "Basic",
  "Contact Details",
  "Split Layout",
  "Map",
  "Cards",
  "Social Links",
  "Booking / Appointment",
  "FAQ / Help",
  "Interactive",
  "Minimal / Clean",
  "Fullscreen / Hero",
  "Creative / Premium"
];

export const contactLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "contact-basic-form",
        name: "Simple Contact Form",
        tag: "CONTACT • BASIC",
        desc: "A clean, centered contact form for general inquiries.",
        componentName: "ContactFormBasic",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          btnColor: "#6366f1",
          inputBg: "#111"
        }
      }
    ]
  },
  {
    category: "Contact Details",
    items: [
      {
        id: "contact-details-grid",
        name: "Business Info Grid",
        tag: "CONTACT • DETAILS",
        desc: "Structured layout for address, phone, and email details.",
        componentName: "ContactDetailsGrid",
        defaultProps: {
          bgColor: "#09090b",
          iconColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Split Layout",
    items: [
      {
        id: "contact-split",
        name: "Form + Info Split",
        tag: "CONTACT • SPLIT",
        desc: "Balanced layout with forms on one side and details on the other.",
        componentName: "ContactSplit",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#f43f5e"
        }
      }
    ]
  },
  {
    category: "Map",
    items: [
      {
        id: "contact-map",
        name: "Contact + Google Map",
        tag: "CONTACT • MAP",
        desc: "Interactive location highlight with overlay contact info.",
        componentName: "ContactWithMap",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Cards",
    items: [
      {
        id: "contact-cards",
        name: "Contact Info Cards",
        tag: "CONTACT • CARDS",
        desc: "Questions organized into an interactive card grid.",
        componentName: "ContactCards",
        defaultProps: {
          bgColor: "#09090b",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Social Links",
    items: [
      {
        id: "contact-social",
        name: "Social Channel Grid",
        tag: "CONTACT • SOCIAL",
        desc: "Prominent follow buttons and social hub integration.",
        componentName: "ContactSocial",
        defaultProps: {
          bgColor: "#09090b",
          iconColor: "#ffffff"
        }
      }
    ]
  },
  {
    category: "Booking / Appointment",
    items: [
      {
        id: "contact-booking",
        name: "Appointment Scheduler",
        tag: "CONTACT • BOOKING",
        desc: "Includes date/time picker logic for meeting requests.",
        componentName: "ContactBooking",
        defaultProps: {
          bgColor: "#09090b",
          btnColor: "#10b981"
        }
      }
    ]
  },
  {
     category: "FAQ / Help",
     items: [
        {
           id: "contact-help",
           name: "Help Center Hybrid",
           tag: "CONTACT • HELP",
           desc: "Combines FAQ accordions with a direct contact form.",
           componentName: "ContactFAQHybrid",
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
           id: "contact-interactive",
           name: "Step-by-Step Form",
           tag: "CONTACT • INTERACTIVE",
           desc: "Multi-step interactive form for complex data collection.",
           componentName: "ContactInteractiveSteps",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Minimal / Clean",
     items: [
        {
           id: "contact-minimal",
           name: "Minimal Typography Form",
           tag: "CONTACT • MINIMAL",
           desc: "Clean, text-focused Q&A with elegant dividers.",
           componentName: "ContactMinimal",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Fullscreen / Hero",
     items: [
        {
           id: "contact-fullscreen",
           name: "Fullscreen Landing Form",
           tag: "CONTACT • FULLSCREEN",
           desc: "Maximum impact full-width contact presentation.",
           componentName: "ContactFullscreen",
           defaultProps: {
               bgColor: "#000000",
               btnColor: "#ffffff"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "contact-creative",
           name: "3D perspective Form",
           tag: "CONTACT • PREMIUM",
           desc: "Advanced 3D hover effects with glowing backdrop layers.",
           componentName: "ContactCreative3D",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#8b5cf6"
           }
        }
     ]
  }
];

export const generateContactCode = (componentName: string, props: any) => {
  return `
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ${componentName} = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message Sent ✅');
        setTimeout(() => setStatus(''), 3000);
    };

  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Contact Implementation */}
        {status && <div className="fixed bottom-10 right-10 bg-emerald-500 text-white p-4 rounded-xl">{status}</div>}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
