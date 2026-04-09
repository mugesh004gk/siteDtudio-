import {
  NavbarClassic,
  NavbarSticky,
  HeroCentered,
  HeroSplit,
  HeroGradient,
  HeroMinimal,
  Features3Col as FeaturesGrid,
  Features4Col as FeaturesCards,
  FeaturesTimeline,
  AboutCompany,
  ServicesGrid,
  Pricing3Plans,
  TestimonialCards,
  FAQAccordion,
  ContactSplit,
  ContactSplit as ContactForm,
  FooterSimple,
  CTABanner as BannerCTA,
  StatsCounters,
  BlogCardGrid,
  PhotoGallery
} from '../components/library';

import { allNavbars } from '../components/library/Navbars';
import { allHeros } from '../components/library/Heros';
import { allFeatures } from '../components/library/Features';
import { allAbout } from '../components/library/About';
import { allServices } from '../components/library/Services';
import { allPricings } from '../components/library/Pricings';
import { allTestimonials } from '../components/library/Testimonials';
import { allFAQs } from '../components/library/FAQ';
import { allBlogs } from '../components/library/Blog';
import { allGalleries } from '../components/library/Gallery';
import { allContacts } from '../components/library/Contact';
import { allFooters } from '../components/library/Footer';
import { allStats } from '../components/library/Stats';
import { allCTAs } from '../components/library/CTA';

export const componentMap: Record<string, React.ComponentType<any>> = {
  ...allNavbars,
  ...allHeros,
  ...allFeatures,
  ...allAbout,
  ...allServices,
  ...allPricings,
  ...allTestimonials,
  ...allFAQs,
  ...allBlogs,
  ...allGalleries,
  ...allContacts,
  ...allFooters,
  ...allStats,
  ...allCTAs,
  "navbar-sticky": NavbarSticky,
  "navbar-classic": NavbarClassic,
  "hero-centered": HeroCentered,
  "hero-split": HeroSplit,
  "hero-gradient": HeroGradient,
  "hero-minimal": HeroMinimal,
  "features-grid": FeaturesGrid,
  "features-cards": FeaturesCards,
  "features-timeline": FeaturesTimeline,
  "about-company": AboutCompany,
  "services-grid": ServicesGrid,
  "pricing-3plans": Pricing3Plans,
  "testimonial-cards": TestimonialCards,
  "faq-accordion": FAQAccordion,
  "contact-split": ContactSplit,
  "contact-form": ContactForm,
  "footer-simple": FooterSimple,
  "cta-banner": BannerCTA,
  "stats-counters": StatsCounters,
  "blog-card-grid": BlogCardGrid,
  "gallery-photo": PhotoGallery
};

