import { allNavbars } from '../components/library/Navbars';

export const navbarCategories = [
  "Basic", "Responsive", "E-commerce", "SaaS", "Portfolio",
  "Admin", "Mega Menu", "Creative", "Sidebar", "Hybrid"
];

// Mapping structure for the library
export const navbarLibrary = [
  {
    category: "Basic",
    items: [
      { id: "nav-classic", name: "Classic Navbar", tag: "NAVBAR • BASIC", desc: "Standard horizontal navigation with logo and links.", componentName: "NavbarClassic", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-sticky", name: "Sticky Navbar", tag: "NAVBAR • STICKY", desc: "Stays fixed at the top as you scroll.", componentName: "NavbarSticky", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-centered", name: "Centered Logo Navbar", tag: "NAVBAR • CENTERED", desc: "Balanced layout with brand icon in the middle.", componentName: "NavbarCentered", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-transpa", name: "Transparent Navbar", tag: "NAVBAR • TRANSPARENT", desc: "Clear background, best for over hero images.", componentName: "NavbarTransparent", defaultProps: { bgColor: "transparent", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-split", name: "Split Menu Navbar", tag: "NAVBAR • SPLIT", desc: "Two distinct sides separated visually.", componentName: "NavbarSplit", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "0", font: "Inter" } }
    ]
  },
  {
    category: "Responsive",
    items: [
      { id: "nav-hamburger", name: "Hamburger Menu Navbar", tag: "NAVBAR • MOBILE", desc: "Clean layout with a toggleable menu.", componentName: "NavbarHamburger", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-drawer", name: "Slide Drawer Navbar", tag: "NAVBAR • DRAWER", desc: "Navigation slides in from the side.", componentName: "NavbarSlideDrawer", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-fulls", name: "Fullscreen Mobile Menu", tag: "NAVBAR • FULLSCREEN", desc: "Expanding interactive overlay.", componentName: "NavbarFullscreen", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-bottom", name: "Bottom Mobile Navbar", tag: "NAVBAR • BOTTOM", desc: "App-like bottom floating navigation.", componentName: "NavbarBottomMobile", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem", font: "Inter" } }
    ]
  },
  {
    category: "E-commerce",
    items: [
      { id: "nav-searchcart", name: "Search + Cart Navbar", tag: "NAVBAR • SHOP", desc: "Optimal layout for stores with large catalogs.", componentName: "NavbarSearchCart", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-megashop", name: "Mega Menu Navbar", tag: "NAVBAR • MEGA", desc: "Complex multi-level dropdowns.", componentName: "NavbarMegaMenu", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-offer", name: "Offer Banner Navbar", tag: "NAVBAR • PROMO", desc: "Top banner to drive urgent sales.", componentName: "NavbarOfferBanner", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } }
    ]
  },
  {
    category: "SaaS",
    items: [
      { id: "nav-cta", name: "CTA Navbar (Start Free)", tag: "NAVBAR • SAAS", desc: "Prominent conversion action buttons.", componentName: "NavbarCTASaaS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-glass", name: "Glassmorphism Navbar", tag: "NAVBAR • GLASS", desc: "Premium blurred transparent aesthetic.", componentName: "NavbarGlassmorphism", defaultProps: { bgColor: "transparent", textColor: "#ffffff", padding: "0", font: "Inter" } },
      { id: "nav-minsaas", name: "Minimal SaaS Navbar", tag: "NAVBAR • MINIMAL", desc: "Uncluttered layout for modern tools.", componentName: "NavbarMinimalSaaS", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } }
    ]
  },
  {
    category: "Portfolio",
    items: [
      { id: "nav-portdark", name: "Dark Mode Navbar", tag: "NAVBAR • DISCREET", desc: "Highly stylized typography-first design.", componentName: "NavbarPortfolioDark", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } },
      { id: "nav-portvert", name: "Vertical Navbar", tag: "NAVBAR • VERTICAL", desc: "Left-aligned layout for creatives.", componentName: "NavbarPortfolioVertical", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } }
    ]
  },
  {
    category: "Admin",
    items: [
      { id: "nav-dash", name: "Dashboard Top Navbar", tag: "NAVBAR • SYSTEM", desc: "System-level utility layout with search.", componentName: "NavbarDashboardTop", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } }
    ]
  },
  {
    category: "Mega Menu",
    items: [
      { id: "nav-megacol", name: "Multi-column Mega Menu", tag: "NAVBAR • MEGAMENU", desc: "Structured links categorized into columns.", componentName: "NavbarMultiColumnMega", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem", font: "Inter" } }
    ]
  },
  {
    category: "Creative",
    items: [
      { id: "nav-animhover", name: "Animated Hover Navbar", tag: "NAVBAR • MOTION", desc: "Liquid and smooth link transitions.", componentName: "NavbarAnimatedHover", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "1.5rem", font: "Inter" } }
    ]
  },
  {
    category: "Sidebar",
    items: [
      { id: "nav-sidebarfx", name: "Fixed Sidebar", tag: "NAVBAR • SIDEBAR", desc: "Persistent left-docked dashboard menu.", componentName: "NavbarFixedSidebar", defaultProps: { bgColor: "#09090b", textColor: "#ffffff", padding: "0", font: "Inter" } }
    ]
  },
  {
    category: "Hybrid",
    items: [
      { id: "nav-adaptive", name: "Adaptive Responsive Navbar", tag: "NAVBAR • HYBRID", desc: "Floating app-style dock for modern UIs.", componentName: "NavbarHybridAdaptive", defaultProps: { bgColor: "#18181b", textColor: "#ffffff", padding: "1rem", font: "Inter" } }
    ]
  }
];

// Helper to generate stringified code
export const generateCode = (componentName: string, props: any) => {
  return `import React from 'react';
import { Menu, Search, User, ShoppingCart, Bell, Settings } from 'lucide-react';

export default function ${componentName}() {
  return (
    <div style={{ background: '${props.bgColor}', color: '${props.textColor}', fontFamily: '${props.font}' }}>
      {/* Component imported from SiteStudio */}
    </div>
  );
}`;
};
