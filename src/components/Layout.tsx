import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useBuilderStore } from '../store/useBuilderStore';
import { Layers, Briefcase, Sparkles, Wand2, Menu, X, Settings, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/components', label: 'Library', icon: LayoutGrid },
  { to: '/projects', label: 'Dashboard', icon: Briefcase },
  { to: '/ai', label: 'AI Assistant', icon: Sparkles },
];

export default function Layout() {
  const location = useLocation();
  const { order } = useBuilderStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (location.pathname === '/builder' || location.pathname === '/live-preview') {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col text-[#e2e8f0]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform">
              <Wand2 size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Site<span className="text-purple-400">Studio</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const active = location.pathname.startsWith(to);
              return (
                <Link key={to} to={to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all relative ${active ? 'text-purple-400 bg-purple-500/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                  <Icon size={16} />
                  {label}
                  {active && <motion.div layoutId="nav-active" className="absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500 rounded-full" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/builder"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95">
              <Wand2 size={16} />
              Open Builder
              {order.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded-md text-[10px]">
                  {order.length}
                </span>
              )}
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-400 hover:text-white">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0f172a]">
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <Link key={to} to={to} onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${location.pathname.startsWith(to) ? 'bg-purple-500/10 text-purple-400' : 'text-slate-400 hover:text-white'}`}>
                    <Icon size={18} />{label}
                  </Link>
                ))}
                <Link to="/builder" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-2">
                  <Wand2 size={18} /> Open Builder
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 py-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
                  <Wand2 size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Site<span className="text-purple-400">Studio</span></span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering developers to build futuristic web experiences faster with our premium components and AI-assisted site builder.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">Product</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <Link to="/components" className="hover:text-purple-400 transition-colors">Library</Link>
                <Link to="/builder" className="hover:text-purple-400 transition-colors">Builder</Link>
                <Link to="/ai" className="hover:text-purple-400 transition-colors">AI Assistant</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">Connect</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Discord</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-slate-600 font-bold uppercase tracking-widest">
            <div>&copy; 2026 SiteStudio. Next-gen Site Architect.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
