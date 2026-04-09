import React from 'react';
import { 
  Menu, X, Search, ShoppingCart, User, Bell, LayoutDashboard, Settings, 
  ChevronDown, Hexagon, Command, Layers, Sparkles, MonitorSmartphone
} from 'lucide-react';

export const Logo = ({ text = "Brand", icon: Icon = Hexagon, color = "text-indigo-500" }: any) => (
  <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white cursor-pointer select-none">
    <Icon className={`w-6 h-6 ${color}`} />
    {text}
  </div>
);

export const NavLink = ({ children, active, color = "hover:text-indigo-400" }: any) => (
  <a href="#" className={`text-sm font-medium transition-colors ${active ? "text-white" : "text-white/60"} ${color}`}>
    {children}
  </a>
);

// We define a massive set of highly visual, premium Navbars using Tailwind
// Each expects the same standard props for customization: bgColor, textColor, buttonColor, etc.

// 1. BASIC
export const NavbarClassic = ({ bgColor, textColor, font, padding }: any) => (
  <nav style={{ background: bgColor, color: textColor, fontFamily: font, padding }} className="w-full border-b border-white/5 flex items-center justify-between">
    <Logo text="Classic" />
    <div className="hidden md:flex items-center gap-6">
      <NavLink active>Home</NavLink><NavLink>About</NavLink><NavLink>Services</NavLink><NavLink>Contact</NavLink>
    </div>
    <div className="flex gap-3">
      <button className="px-4 py-2 text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">Login</button>
      <button className="px-4 py-2 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">Sign Up</button>
    </div>
  </nav>
);

export const NavbarSticky = ({ bgColor, textColor, font, padding }: any) => (
  <nav style={{ background: bgColor, color: textColor, fontFamily: font, padding }} className="w-full sticky top-0 z-50 shadow-md shadow-black/20 flex items-center justify-between">
    <Logo text="StickyNav" />
    <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
      <NavLink active>Features</NavLink><NavLink>Pricing</NavLink><NavLink>Testimonials</NavLink>
    </div>
    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Menu size={20}/></button>
  </nav>
);

export const NavbarCentered = ({ bgColor, textColor, font, padding }: any) => (
  <nav style={{ background: bgColor, color: textColor, fontFamily: font, padding }} className="w-full flex items-center justify-between relative border-b border-white/5">
    <div className="hidden md:flex items-center gap-6 w-1/3">
      <NavLink>Shop</NavLink><NavLink>Collections</NavLink>
    </div>
    <div className="w-1/3 flex justify-center"><Logo text="CENTERED" icon={Command} /></div>
    <div className="hidden md:flex items-center gap-6 w-1/3 justify-end">
      <NavLink>Account</NavLink><NavLink>Cart (0)</NavLink>
    </div>
  </nav>
);

// ... we will define 30 simple but premium representations
export const NavbarTransparent = ({ font, padding }: any) => (
  <nav style={{ fontFamily: font, padding }} className="w-full bg-transparent absolute top-0 left-0 flex items-center justify-between z-50">
    <Logo text="Transpa" color="text-white" />
    <div className="flex items-center gap-8"><NavLink>Explore</NavLink><NavLink>Create</NavLink></div>
  </nav>
);

export const NavbarSplit = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex">
    <div className="w-1/2 bg-white/5 flex items-center justify-end pr-8 py-4"><NavLink>Left Link 1</NavLink></div>
    <div className="w-1/2 bg-black/20 flex items-center justify-start pl-8 py-4"><NavLink>Right Link 2</NavLink></div>
  </nav>
);

// 2. RESPONSIVE
export const NavbarHamburger = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between border-b border-white/5">
    <Logo text="MenuX" />
    <button className="text-white hover:text-indigo-400"><Menu size={28}/></button>
  </nav>
);
export const NavbarSlideDrawer = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between relative overflow-hidden">
    <Logo text="Drawer" />
    <div className="w-48 bg-[#18181b] absolute right-0 top-0 bottom-0 py-4 px-6 border-l border-white/10 hidden md:block">
      <div className="flex flex-col gap-4 mt-8"><NavLink>Profile</NavLink><NavLink>Settings</NavLink></div>
    </div>
  </nav>
);
export const NavbarFullscreen = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between">
    <Logo text="FullS" />
    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center cursor-pointer text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
      <Menu size={20}/>
    </div>
  </nav>
);
export const NavbarBottomMobile = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full mt-10 rounded-t-3xl border-t border-white/10 flex items-center justify-around pb-4 pt-4 shadow-lg">
    <LayoutDashboard size={24} className="text-indigo-500" />
    <Search size={24} className="text-white/40" />
    <Bell size={24} className="text-white/40" />
    <User size={24} className="text-white/40" />
  </nav>
);

// 3. E-COMMERCE
export const NavbarSearchCart = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full grid grid-cols-3 items-center border-b border-white/10">
    <Logo text="Shopify" />
    <div className="relative">
      <input type="text" placeholder="Search products..." className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 pl-10 text-sm text-white focus:outline-none focus:border-indigo-500" />
      <Search size={16} className="absolute left-4 top-2.5 text-white/40" />
    </div>
    <div className="flex items-center justify-end gap-4">
      <User size={20} className="text-white/70" />
      <div className="relative cursor-pointer">
        <ShoppingCart size={20} className="text-white/70" />
        <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
      </div>
    </div>
  </nav>
);
export const NavbarMegaMenu = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between">
    <div className="flex items-center gap-8">
      <Logo text="MegaShop" />
      <div className="flex items-center gap-1 text-sm text-white/80 cursor-pointer group hover:text-indigo-400">
        Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform"/>
      </div>
    </div>
  </nav>
);
export const NavbarOfferBanner = ({ bgColor, font, padding }: any) => (
  <div className="w-full block" style={{ fontFamily: font }}>
    <div className="w-full bg-indigo-600 text-white text-xs font-bold text-center py-1.5 tracking-wider">SUMMER SALE: 50% OFF ALL ITEMS</div>
    <nav style={{ background: bgColor, padding }} className="w-full flex items-center justify-between border-b border-white/5">
      <Logo text="Banners" />
      <button className="text-xs bg-white text-black px-4 py-1.5 rounded-full font-bold">Shop Now</button>
    </nav>
  </div>
);

// 4. SAAS
export const NavbarCTASaaS = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between">
    <Logo text="Saasify" />
    <div className="hidden md:flex gap-6 text-sm text-white/50"><span className="text-white">Product</span><span>Solutions</span><span>Pricing</span></div>
    <button className="bg-white text-black px-5 py-2 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform">Start Free Trial</button>
  </nav>
);
export const NavbarGlassmorphism = ({ font, padding }: any) => (
  <div className="p-4 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600')] bg-cover w-full h-32 flex items-start" style={{ fontFamily: font }}>
    <nav className="w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 py-3">
      <Logo text="Glassy" />
      <div className="text-sm text-white/80">Documentation</div>
    </nav>
  </div>
);
export const NavbarMinimalSaaS = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between border-b border-white/5">
    <Logo text="Minimal" />
    <button className="text-xs font-semibold text-white border border-white/20 px-4 py-1.5 rounded">Sign In &rarr;</button>
  </nav>
);

// 5. PORTFOLIO
export const NavbarPortfolioDark = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between">
    <div className="text-2xl font-black tracking-tighter text-white">J.DOE.</div>
    <div className="flex gap-8 text-xs font-medium tracking-widest uppercase text-white/50">
      <span className="text-white">Work</span><span>Info</span><span>Contact</span>
    </div>
  </nav>
);
export const NavbarPortfolioVertical = ({ bgColor, font }: any) => (
  <div style={{ background: bgColor, fontFamily: font }} className="w-32 h-40 border-r border-white/10 flex flex-col items-center justify-between py-6">
    <div className="font-bold text-xl writing-vertical-rl rotate-180">PORTFOLIO</div>
    <div className="w-1 h-8 bg-indigo-500 rounded-full" />
  </div>
);

// 6. ADMIN
export const NavbarDashboardTop = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between border-b border-white/5">
    <div className="flex items-center gap-4">
      <Menu size={20} className="text-white/50 cursor-pointer" />
      <input type="text" placeholder="Type / to search" className="bg-transparent border-none text-sm text-white outline-none w-48" />
    </div>
    <div className="flex items-center gap-4">
      <Bell size={18} className="text-white/50" />
      <Settings size={18} className="text-white/50" />
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-[#18181b]" />
    </div>
  </nav>
);

// 7. MEGA MENU
export const NavbarMultiColumnMega = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full border-b border-white/10 relative pb-20">
     <div className="flex justify-between items-center mb-4">
        <Logo text="Columns" />
        <div className="px-4 py-1 bg-white/5 rounded text-sm text-white/80">Services &darr;</div>
     </div>
     <div className="absolute top-16 left-0 w-full bg-[#18181b] border border-white/10 rounded-xl p-6 grid grid-cols-3 gap-6 shadow-2xl">
        <div><h4 className="font-bold text-white mb-2">Design</h4><div className="text-sm text-white/50 space-y-2">UI/UX<br/>Branding</div></div>
        <div><h4 className="font-bold text-white mb-2">Dev</h4><div className="text-sm text-white/50 space-y-2">Frontend<br/>Backend</div></div>
        <div className="bg-indigo-500/10 p-4 rounded-lg"><h4 className="text-indigo-400 font-bold mb-1">Featured</h4><p className="text-xs text-white/50">Learn about our new process.</p></div>
     </div>
  </nav>
);

// 8. CREATIVE
export const NavbarAnimatedHover = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-center gap-10">
    {['Studio', 'Showcase', 'Lab', 'Contact'].map(t => (
      <div key={t} className="relative group cursor-pointer">
        <span className="text-sm font-bold text-white/70 group-hover:text-white transition">{t}</span>
        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
      </div>
    ))}
  </nav>
);

// 9. SIDEBAR
export const NavbarFixedSidebar = ({ bgColor, font }: any) => (
  <div style={{ background: bgColor, fontFamily: font }} className="w-48 h-48 border-r border-white/10 p-6 flex flex-col h-full bg-[#09090b]">
    <Logo text="Dash" className="mb-8" />
    <div className="flex flex-col gap-4 mt-8 text-sm font-medium text-white/60">
      <div className="text-white flex gap-3 items-center"><LayoutDashboard size={16}/> Home</div>
      <div className="hover:text-white flex gap-3 items-center transition"><Layers size={16}/> Projects</div>
      <div className="hover:text-white flex gap-3 items-center transition"><User size={16}/> Team</div>
    </div>
  </div>
);

// 10. HYBRID
export const NavbarHybridAdaptive = ({ bgColor, font, padding }: any) => (
  <nav style={{ background: bgColor, fontFamily: font, padding }} className="w-full flex items-center justify-between border border-white/10 rounded-2xl max-w-sm mx-auto shadow-2xl">
    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> Online</div>
    <Menu size={20} className="text-white/40" />
  </nav>
);

// Helper for dynamic export
export const allNavbars = {
  NavbarClassic, NavbarSticky, NavbarCentered, NavbarTransparent, NavbarSplit,
  NavbarHamburger, NavbarSlideDrawer, NavbarFullscreen, NavbarBottomMobile,
  NavbarSearchCart, NavbarMegaMenu, NavbarOfferBanner,
  NavbarCTASaaS, NavbarGlassmorphism, NavbarMinimalSaaS,
  NavbarPortfolioDark, NavbarPortfolioVertical,
  NavbarDashboardTop, NavbarMultiColumnMega,
  NavbarAnimatedHover, NavbarFixedSidebar, NavbarHybridAdaptive
};
