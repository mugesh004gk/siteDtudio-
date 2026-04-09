import React from 'react';

// ── Navbars ──
import NavbarClassic from '../components/library/navbars/NavbarClassic';
import NavbarSticky from '../components/library/navbars/NavbarSticky';
import NavbarTransparent from '../components/library/navbars/NavbarTransparent';
import NavbarCentered from '../components/library/navbars/NavbarCentered';

// ── Heroes ──
import HeroCentered from '../components/library/heroes/HeroCentered';
import HeroSplit from '../components/library/heroes/HeroSplit';
import HeroGradient from '../components/library/heroes/HeroGradient';
import HeroMinimal from '../components/library/heroes/HeroMinimal';

// ── Features ──
import Features3Col from '../components/library/features/Features3Col';
import Features4Col from '../components/library/features/Features4Col';
import FeaturesTimeline from '../components/library/features/FeaturesTimeline';

// ── Pricing ──
import Pricing3Plans from '../components/library/pricing/Pricing3Plans';

// ── Testimonials ──
import TestimonialCards from '../components/library/testimonials/TestimonialCards';

// ── FAQ ──
import FAQAccordion from '../components/library/faq/FAQAccordion';

// ── Contact ──
import ContactSplit from '../components/library/contact/ContactSplit';

// ── Footers ──
import FooterSimple from '../components/library/footers/FooterSimple';

// ── About ──
import AboutCompany from '../components/library/about/AboutCompany';

// ── Stats ──
import StatsCounters from '../components/library/stats/StatsCounters';

// ── CTA ──
import CTABanner from '../components/library/cta/CTABanner';

// ── Blog ──
import BlogCardGrid from '../components/library/blog/BlogCardGrid';

// ── Services ──
import ServicesGrid from '../components/library/services/ServicesGrid';

// ── Gallery ──
import PhotoGallery from '../components/library/gallery/PhotoGallery';

/**
 * Fallback component for unimplemented keys
 */
const PlaceholderComponent: React.FC<{ componentKey: string }> = ({ componentKey }) => (
  <div className="bg-[#18181b] border border-white/10 rounded-[3rem] p-32 text-center my-4 relative overflow-hidden group shadow-2xl">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
    <div className="relative z-10">
      <div className="w-20 h-20 bg-indigo-500/10 rounded-[1.5rem] flex items-center justify-center text-indigo-400 mx-auto mb-10 shadow-inner border border-indigo-500/10 group-hover:scale-110 transition-transform duration-700">
        <div className="w-8 h-8 border-2 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin" />
      </div>
      <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-4 font-mono">{componentKey}</div>
      <div className="text-4xl font-black text-white/80 uppercase tracking-tighter mb-4">Engineering Phase</div>
      <p className="text-white/30 text-lg max-w-sm mx-auto font-medium leading-relaxed">This unit is currently in the high-fidelity assembly stage. Implementation coming in the next registry update.</p>
    </div>
  </div>
);

/**
 * Central component map.
 */
export const componentMap: Record<string, React.ComponentType<any>> = {
  // Navbars
  'navbar-classic': NavbarClassic,
  'navbar-sticky': NavbarSticky,
  'navbar-transparent': NavbarTransparent,
  'navbar-centered': NavbarCentered,

  // Heroes
  'hero-centered': HeroCentered,
  'hero-split': HeroSplit,
  'hero-gradient': HeroGradient,
  'hero-minimal': HeroMinimal,

  // Features
  'features-grid': Features3Col,
  'features-cards': Features4Col,
  'features-timeline': FeaturesTimeline,

  // Pricing
  'pricing-simple': Pricing3Plans,
  'pricing-cards': Pricing3Plans,
  'pricing-saas': Pricing3Plans,

  // Testimonials
  'testimonials-grid': TestimonialCards,
  'testimonials-cards': TestimonialCards,

  // FAQ
  'faq-accordion': FAQAccordion,

  // Contact
  'contact-form': ContactSplit,
  'contact-split': ContactSplit,

  // Footers
  'footer-simple': FooterSimple,
  'footer-columns': FooterSimple,

  // About
  'about-company': AboutCompany,
  'about-centered': AboutCompany,

  // Stats
  'stats-counter': StatsCounters,

  // CTA
  'cta-banner': CTABanner,
  'cta-centered': CTABanner,

  // Blog
  'blog-grid': BlogCardGrid,

  // Services
  'services-grid': ServicesGrid,

  // Gallery
  'gallery-photo': PhotoGallery,
  'gallery-grid': PhotoGallery,
};

/**
 * Safe component resolver. Falls back to a placeholder for unimplemented keys.
 */
export function getComponent(componentKey: string): React.ComponentType<any> {
    const Component = componentMap[componentKey];
    if (Component) return Component;
    
    return (props: any) => <PlaceholderComponent {...props} componentKey={componentKey} />;
}
