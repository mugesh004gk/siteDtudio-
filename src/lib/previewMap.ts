import { 
  FeaturesGridPreview, 
  FeaturesCardsPreview, 
  FeaturesTimelinePreview, 
  NavbarStickyPreview,
  HeroCenteredPreview,
  HeroSplitPreview,
  HeroGradientPreview,
  HeroMinimalPreview,
  HeroVideoPreview,
  PricingSimplePreview,
  PricingCardsPreview,
  PricingSaasPreview,
  ContactFormPreview as ContactSplitPreview,
  BannerCTAPreview,
  FooterPreview as FooterSimplePreview,
  NavbarPreview as NavbarClassicPreview,
  ServicesPreview,
  AboutPreview,
  GalleryPreview,
  FAQPreview,
  StatsPreview,
  BlogPreview
} from '../components/previews';

export const previewMap: Record<string, React.ComponentType<any>> = {
  // Navbars
  "navbar-classic": NavbarClassicPreview,
  "navbar-sticky": NavbarStickyPreview,
  "navbar-transparent": NavbarClassicPreview,
  "navbar-cta": NavbarClassicPreview,
  "navbar-dropdown": NavbarClassicPreview,
  "navbar-centered": NavbarClassicPreview,
  "navbar-sidebar": NavbarClassicPreview,
  "navbar-hamburger": NavbarClassicPreview,
  "navbar-megamenu": NavbarClassicPreview,

  // Heroes
  "hero-centered": HeroCenteredPreview,
  "hero-split": HeroSplitPreview,
  "hero-image": HeroSplitPreview,
  "hero-video": HeroVideoPreview,
  "hero-slider": HeroCenteredPreview,
  "hero-gradient": HeroGradientPreview,
  "hero-minimal": HeroMinimalPreview,
  "hero-fullscreen": HeroGradientPreview,
  "hero-form": HeroSplitPreview,
  "hero-cta": HeroCenteredPreview,

  // Features
  "features-grid": FeaturesGridPreview,
  "features-cards": FeaturesCardsPreview,
  "features-timeline": FeaturesTimelinePreview,

  // About
  "about-left-image": AboutPreview,
  "about-right-image": AboutPreview,
  "about-centered": AboutPreview,
  "about-stats": AboutPreview,
  "about-timeline": AboutPreview,
  "about-team": AboutPreview,

  // Services
  "services-grid": ServicesPreview,
  "services-cards": ServicesPreview,
  "services-icons": ServicesPreview,
  "services-list": ServicesPreview,
  "services-timeline": ServicesPreview,
  "services-images": ServicesPreview,

  // Pricing
  "pricing-simple": PricingSimplePreview,
  "pricing-cards": PricingCardsPreview,
  "pricing-saas": PricingSaasPreview,
  "pricing-toggle": PricingSaasPreview,
  "pricing-comparison": PricingSimplePreview,

  // Testimonials
  "testimonials-slider": BlogPreview,
  "testimonials-grid": BlogPreview,
  "testimonials-cards": BlogPreview,
  "testimonials-images": BlogPreview,
  "testimonials-video": BlogPreview,

  // FAQ
  "faq-accordion": FAQPreview,
  "faq-simple": FAQPreview,
  "faq-two-column": FAQPreview,
  "faq-categories": FAQPreview,

  // Blog
  "blog-grid": BlogPreview,
  "blog-cards": BlogPreview,
  "blog-list": BlogPreview,
  "blog-masonry": BlogPreview,
  "blog-featured": BlogPreview,

  // Gallery
  "gallery-grid": GalleryPreview,
  "gallery-masonry": GalleryPreview,
  "gallery-slider": GalleryPreview,
  "gallery-lightbox": GalleryPreview,
  "gallery-carousel": GalleryPreview,

  // Contact
  "contact-form": ContactSplitPreview,
  "contact-split": ContactSplitPreview,
  "contact-map": ContactSplitPreview,
  "contact-minimal": ContactSplitPreview,
  "contact-card": ContactSplitPreview,

  // Footer
  "footer-simple": FooterSimplePreview,
  "footer-columns": FooterSimplePreview,
  "footer-newsletter": FooterSimplePreview,
  "footer-minimal": FooterSimplePreview,
  "footer-map": FooterSimplePreview,
  "footer-large": FooterSimplePreview,

  // Stats
  "stats-counter": StatsPreview,
  "stats-cards": StatsPreview,
  "stats-icons": StatsPreview,
  "stats-horizontal": StatsPreview,
  "stats-chart": StatsPreview,

  // CTA
  "cta-banner": BannerCTAPreview,
  "cta-centered": BannerCTAPreview,
  "cta-split": BannerCTAPreview,
  "cta-background": BannerCTAPreview,
  "cta-form": BannerCTAPreview,
};
