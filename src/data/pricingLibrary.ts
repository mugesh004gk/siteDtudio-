
export const pricingCategories = [
  "Basic", "Card-Based", "Comparison", "SaaS / Subscription", "E-commerce",
  "Feature List", "Interactive", "Trust / Testimonials", "FAQ Pricing",
  "Minimal", "Creative / Premium", "Enterprise / Custom"
];

export const pricingLibrary = [
  {
    category: "Basic",
    items: [
      { 
        id: "pricing-basic-3col", 
        name: "3 Column Pricing Table", 
        tag: "PRICING • BASIC", 
        desc: "Classic three-tier layout with clear calls to action.", 
        componentName: "PricingBasic3Col",
        defaultProps: { 
          bgColor: "#09090b", 
          textColor: "#ffffff", 
          cardColor: "#18181b", 
          highlightColor: "#6366f1",
          font: "Inter",
          padding: "4rem 2rem",
          columns: 3,
          showFeatures: true
        }
      },
      { 
        id: "pricing-basic-4col", 
        name: "4 Column Pricing Table", 
        tag: "PRICING • BASIC", 
        desc: "Detailed four-tier layout for granular offerings.", 
        componentName: "PricingBasic4Col",
        defaultProps: { 
          bgColor: "#09090b", 
          textColor: "#ffffff", 
          cardColor: "#18181b", 
          highlightColor: "#6366f1",
          font: "Inter",
          padding: "4rem 2rem",
          columns: 4,
          showFeatures: true
        }
      },
      { 
        id: "pricing-simple-cards", 
        name: "Simple Pricing Cards", 
        tag: "PRICING • BASIC", 
        desc: "Minimalist cards with essential pricing info.", 
        componentName: "PricingSimpleCards",
        defaultProps: { 
          bgColor: "#09090b", 
          textColor: "#ffffff", 
          cardColor: "#18181b", 
          highlightColor: "#6366f1",
          font: "Inter",
          padding: "4rem 2rem"
        }
      },
      { 
        id: "pricing-minimal-section", 
        name: "Minimal Pricing Section", 
        tag: "PRICING • BASIC", 
        desc: "Ultra-clean layout for minimalist brands.", 
        componentName: "PricingMinimalSection",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-with-cta", 
        name: "Pricing with CTA", 
        tag: "PRICING • BASIC", 
        desc: "Combines pricing cards with a bottom conversion banner.", 
        componentName: "PricingWithCTA",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Card-Based",
    items: [
      { 
        id: "pricing-cards-grid", 
        name: "Pricing Cards Grid", 
        tag: "PRICING • CARDS", 
        desc: "Modern grid-based cards with hover animations.", 
        componentName: "PricingCardsGrid",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem", hoverEffect: true }
      },
      { 
        id: "pricing-highlighted", 
        name: "Highlighted Plan", 
        tag: "PRICING • CARDS", 
        desc: "Features a 'Popular' badge on the middle tier.", 
        componentName: "PricingHighlighted",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-hover-cards", 
        name: "Hover Effect Pricing Cards", 
        tag: "PRICING • CARDS", 
        desc: "Interactive cards that expand on hover.", 
        componentName: "PricingHoverCards",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-glass", 
        name: "Glass Pricing Cards", 
        tag: "PRICING • GLASS", 
        desc: "Stunning glassmorphism effects for premium feel.", 
        componentName: "PricingGlassCards",
        defaultProps: { bgColor: "transparent", textColor: "#ffffff", cardColor: "rgba(255, 255, 255, 0.05)", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem", blur: true }
      },
      { 
        id: "pricing-shadow-cards", 
        name: "Shadow Pricing Cards", 
        tag: "PRICING • CARDS", 
        desc: "Deep soft shadows for a modern layered look.", 
        componentName: "PricingShadowCards",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Comparison",
    items: [
      { 
        id: "pricing-comparison-table", 
        name: "Feature Comparison Table", 
        tag: "PRICING • COMPARE", 
        desc: "In-depth table comparing features across plans.", 
        componentName: "PricingComparisonTable",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-comparison-grid", 
        name: "Plan Comparison Grid", 
        tag: "PRICING • COMPARE", 
        desc: "Side-by-side grid comparison of core features.", 
        componentName: "PricingComparisonGrid",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-checkmark-comparison", 
        name: "Checkmark Comparison", 
        tag: "PRICING • COMPARE", 
        desc: "Clean list layout using checkmarks for visual clarity.", 
        componentName: "PricingCheckmarkComparison",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-matrix", 
        name: "Detailed Pricing Matrix", 
        tag: "PRICING • COMPARE", 
        desc: "Grid matrix for enterprise-level feature sets.", 
        componentName: "PricingMatrix",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-expandable-comparison", 
        name: "Expandable Comparison", 
        tag: "PRICING • COMPARE", 
        desc: "Advanced table with expandable feature categories.", 
        componentName: "PricingExpandableComparison",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "SaaS / Subscription",
    items: [
      { 
        id: "pricing-saas-toggle", 
        name: "Monthly / Yearly Toggle", 
        tag: "PRICING • SAAS", 
        desc: "Pricing with a switch between billing cycles.", 
        componentName: "PricingSaaSToggle",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem", toggleMonthly: true }
      },
      { 
        id: "pricing-subscription-plans", 
        name: "Subscription Plans", 
        tag: "PRICING • SAAS", 
        desc: "Optimized for recurring subscription businesses.", 
        componentName: "PricingSubscriptionPlans",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-tiered", 
        name: "Tiered Pricing", 
        tag: "PRICING • SAAS", 
        desc: "Basic, Pro, and Enterprise tiers clearly defined.", 
        componentName: "PricingTiered",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-usage-based", 
        name: "Usage-based Pricing", 
        tag: "PRICING • SAAS", 
        desc: "Scalable pricing based on actual usage.", 
        componentName: "PricingUsageBased",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-freemium", 
        name: "Freemium Pricing", 
        tag: "PRICING • SAAS", 
        desc: "Highlights the free plan to drive user acquisition.", 
        componentName: "PricingFreemium",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "E-commerce",
    items: [
      { 
        id: "pricing-product-cards", 
        name: "Product Pricing Cards", 
        tag: "PRICING • ECOMM", 
        desc: "Optimized for selling physical or digital goods.", 
        componentName: "PricingProductCards",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-discount", 
        name: "Discount Pricing", 
        tag: "PRICING • ECOMM", 
        desc: "Shows before/after prices with discount badges.", 
        componentName: "PricingDiscount",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#ef4444", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-offer-banner", 
        name: "Offer Banner Pricing", 
        tag: "PRICING • ECOMM", 
        desc: "Large banner highlighting a special limited offer.", 
        componentName: "PricingOfferBanner",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#f59e0b", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-bundle", 
        name: "Bundle Pricing", 
        tag: "PRICING • ECOMM", 
        desc: "Special pricing for bundled products/services.", 
        componentName: "PricingBundle",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#ef4444", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-tag-ui", 
        name: "Price Tag UI", 
        tag: "PRICING • ECOMM", 
        desc: "Playful price tag style for retail products.", 
        componentName: "PricingTagUI",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Feature List",
    items: [
      { 
        id: "pricing-feature-list", 
        name: "Pricing + Feature List", 
        tag: "PRICING • FEATURES", 
        desc: "Sidebar list of features next to pricing cards.", 
        componentName: "PricingWithFeatureList",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-bullet-feature", 
        name: "Bullet Feature Pricing", 
        tag: "PRICING • FEATURES", 
        desc: "Extensive bullet point lists for each plan.", 
        componentName: "PricingBulletFeature",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-icon-feature", 
        name: "Icon Feature Pricing", 
        tag: "PRICING • FEATURES", 
        desc: "Uses custom icons to represent different features.", 
        componentName: "PricingIconFeature",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-expandable-features", 
        name: "Expandable Feature List", 
        tag: "PRICING • FEATURES", 
        desc: "Hide/Show more features to keep the UI clean.", 
        componentName: "PricingExpandableFeatures",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-feature-highlight", 
        name: "Feature Highlight Pricing", 
        tag: "PRICING • FEATURES", 
        desc: "Large callouts for key features in each plan.", 
        componentName: "PricingFeatureHighlight",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Interactive",
    items: [
      { 
        id: "pricing-slider", 
        name: "Pricing Slider", 
        tag: "PRICING • INTERACTIVE", 
        desc: "Interactive slider to see pricing based on scale.", 
        componentName: "PricingSlider",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-calculator", 
        name: "Pricing Calculator", 
        tag: "PRICING • INTERACTIVE", 
        desc: "Configurable calculator for complex pricing rules.", 
        componentName: "PricingCalculator",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-toggle-options", 
        name: "Toggle Options Pricing", 
        tag: "PRICING • INTERACTIVE", 
        desc: "Switch between multiple add-ons and options.", 
        componentName: "PricingToggleOptions",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-custom-builder", 
        name: "Custom Plan Builder", 
        tag: "PRICING • INTERACTIVE", 
        desc: "Let users build their own custom plan visually.", 
        componentName: "PricingCustomBuilder",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-dynamic-selector", 
        name: "Dynamic Pricing Selector", 
        tag: "PRICING • INTERACTIVE", 
        desc: "Real-time pricing updates based on user selection.", 
        componentName: "PricingDynamicSelector",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Trust / Testimonials",
    items: [
      { 
        id: "pricing-testimonials", 
        name: "Pricing + Testimonials", 
        tag: "PRICING • TRUST", 
        desc: "Combines plans with social proof for higher conversion.", 
        componentName: "PricingWithTestimonials",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-trust-badge", 
        name: "Trust Badge Pricing", 
        tag: "PRICING • TRUST", 
        desc: "Displays security and industry badges below plans.", 
        componentName: "PricingTrustBadge",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-reviews", 
        name: "Reviews in Pricing", 
        tag: "PRICING • TRUST", 
        desc: "Integrates customer ratings directly onto cards.", 
        componentName: "PricingReviews",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-social-proof", 
        name: "Social Proof Pricing", 
        tag: "PRICING • TRUST", 
        desc: "Shows recent signup activity or user counts.", 
        componentName: "PricingSocialProof",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-customer-stories", 
        name: "Customer Stories Pricing", 
        tag: "PRICING • TRUST", 
        desc: "Profiles of actual users succeeding with the product.", 
        componentName: "PricingCustomerStories",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "FAQ Pricing",
    items: [
      { 
        id: "pricing-faq", 
        name: "Pricing + FAQ Accordion", 
        tag: "PRICING • HELP", 
        desc: "Answers common questions directly below pricing.", 
        componentName: "PricingWithFAQ",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-help-section", 
        name: "Pricing Help Section", 
        tag: "PRICING • HELP", 
        desc: "Detailed support resources linked to the pricing page.", 
        componentName: "PricingHelpSection",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-expandable-questions", 
        name: "Expandable Questions", 
        tag: "PRICING • HELP", 
        desc: "Clean card-based FAQ below pricing cards.", 
        componentName: "PricingExpandableQuestions",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-support-info", 
        name: "Support Info Pricing", 
        tag: "PRICING • HELP", 
        desc: "Direct contact info for support and success teams.", 
        componentName: "PricingSupportInfo",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-faq-below", 
        name: "FAQ Below Pricing", 
        tag: "PRICING • HELP", 
        desc: "Full width FAQ section following the pricing grid.", 
        componentName: "PricingFAQBelow",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Minimal",
    items: [
      { 
        id: "pricing-minimal", 
        name: "Minimal Pricing Cards", 
        tag: "PRICING • MINIMAL", 
        desc: "Clean, typo-focused design with zero distractions.", 
        componentName: "PricingMinimal",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-clean-typo", 
        name: "Clean Typography Pricing", 
        tag: "PRICING • MINIMAL", 
        desc: "Uses scale and weight instead of borders/cards.", 
        componentName: "PricingCleanTypo",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-simple-layout", 
        name: "Simple Pricing Layout", 
        tag: "PRICING • MINIMAL", 
        desc: "Horizontal line-based layout for extreme simplicity.", 
        componentName: "PricingSimpleLayout",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-light-dark-minimal", 
        name: "Light / Dark Minimal", 
        tag: "PRICING • MINIMAL", 
        desc: "Switchable minimal theme for light or dark backgrounds.", 
        componentName: "PricingLightDarkMinimal",
        defaultProps: { bgColor: "#ffffff", textColor: "#000000", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-compact", 
        name: "Compact Pricing", 
        tag: "PRICING • MINIMAL", 
        desc: "Dense layout for fitting multiple items in small space.", 
        componentName: "PricingCompact",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Creative / Premium",
    items: [
      { 
        id: "pricing-creative", 
        name: "Gradient Pricing", 
        tag: "PRICING • CREATIVE", 
        desc: "Vibrant gradients and mesh backgrounds.", 
        componentName: "PricingGradient",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#8b5cf6", font: "Outfit", padding: "4rem 2rem", animate: true }
      },
      { 
        id: "pricing-glassmorphism", 
        name: "Glassmorphism Pricing", 
        tag: "PRICING • CREATIVE", 
        desc: "Advanced glass effects with colorful backdrops.", 
        componentName: "PricingGlassmorphism",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#3b82f6", font: "Outfit", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-3d-cards", 
        name: "3D Pricing Cards", 
        tag: "PRICING • CREATIVE", 
        desc: "Depth effects and 3D shadows for high-end feel.", 
        componentName: "Pricing3DCards",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#10b981", font: "Outfit", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-animated", 
        name: "Animated Pricing", 
        tag: "PRICING • CREATIVE", 
        desc: "Smooth entrance and hover animations using Framer.", 
        componentName: "PricingAnimated",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#f43f5e", font: "Outfit", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-neon", 
        name: "Neon Effects", 
        tag: "PRICING • CREATIVE", 
        desc: "Glow effects and high-contrast dark UI.", 
        componentName: "PricingNeonEffects",
        defaultProps: { bgColor: "#000000", textColor: "#ffffff", highlightColor: "#06b6d4", font: "Outfit", padding: "4rem 2rem" }
      }
    ]
  },
  {
    category: "Enterprise / Custom",
    items: [
      { 
        id: "pricing-enterprise", 
        name: "Enterprise Plan Pricing", 
        tag: "PRICING • CUSTOM", 
        desc: "Focus on custom quotes and direct sales contact.", 
        componentName: "PricingEnterprise",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-custom-quote", 
        name: "Custom Quote Pricing", 
        tag: "PRICING • CUSTOM", 
        desc: "Large form for requesting personalized pricing.", 
        componentName: "PricingCustomQuote",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-contact-sales", 
        name: "Contact Sales Pricing", 
        tag: "PRICING • CUSTOM", 
        desc: "Direct CTA to talk to a sales representative.", 
        componentName: "PricingContactSales",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-flexible-plans", 
        name: "Flexible Pricing Plans", 
        tag: "PRICING • CUSTOM", 
        desc: "A wide variety of predefined custom configurations.", 
        componentName: "PricingFlexiblePlans",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      },
      { 
        id: "pricing-business-tier", 
        name: "Business Tier Pricing", 
        tag: "PRICING • CUSTOM", 
        desc: "Specifically for organizations with over 100+ seats.", 
        componentName: "PricingBusinessTier",
        defaultProps: { bgColor: "#09090b", textColor: "#ffffff", highlightColor: "#6366f1", font: "Inter", padding: "4rem 2rem" }
      }
    ]
  }
];

export const generatePricingCode = (componentName: string, props: any) => {
  return `import React from 'react';
import { Check, Zap, Rocket, Star, HelpCircle } from 'lucide-react';

export default function ${componentName}() {
  const customStyle = {
    background: '${props.bgColor}',
    color: '${props.textColor}',
    fontFamily: '${props.font}',
    padding: '${props.padding}'
  };

  return (
    <section style={customStyle} className="w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-${props.columns || 3} gap-8">
           {/* Dynamic pricing cards with ${props.highlightColor} highlights */}
        </div>
      </div>
    </section>
  );
}`;
};
