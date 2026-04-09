import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { Layers, LayoutTemplate, Palette, Sparkles, Wrench, Menu, X, ShieldCheck, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/components', label: 'Components', icon: Layers },
  { to: '/projects', label: 'Projects', icon: Briefcase },
  { to: '/ai', label: 'AI Suggest', icon: Sparkles },
  { to: '/builder', label: 'Builder', icon: Wrench },
];

export default function Layout() {
  const location = useLocation();
  const { selectedComponents } = useBuilder();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Builder page uses its own full-screen layout
  if (location.pathname === '/builder') {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#18181b]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/20">S</div>
            <span className="text-white">Site<span className="text-indigo-400">Studio</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const active = location.pathname.startsWith(to);
              return (
                <Link key={to} to={to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${active ? 'bg-indigo-500/10 text-indigo-400' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                  <Icon size={15} />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link to="/builder"
              className="relative hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20">
              <Wrench size={14} />
              Open Builder
              {selectedComponents.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {selectedComponents.length}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/60 hover:text-white">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/5 bg-[#18181b] overflow-hidden">
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <Link key={to} to={to} onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname.startsWith(to) ? 'bg-indigo-500/10 text-indigo-400' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                    <Icon size={16} />{label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-[#18181b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-sm">
            &copy; 2026 <span className="text-white/50 font-medium">SiteStudio</span> · Premium UI Component Library
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <Link to="/components" className="hover:text-white transition-colors">Components</Link>
            <Link to="/templates" className="hover:text-white transition-colors">Templates</Link>
            <Link to="/builder" className="hover:text-white transition-colors">Builder</Link>
            <Link to="/ai" className="hover:text-white transition-colors">AI Suggest</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
