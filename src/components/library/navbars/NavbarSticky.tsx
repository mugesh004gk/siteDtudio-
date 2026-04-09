import { motion } from 'framer-motion';

export default function NavbarSticky() {
  return (
    <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 bg-[#18181b]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-black text-sm">S</div>
            <div className="font-extrabold text-xl text-white tracking-tight">Studio<span className="text-indigo-500">.</span></div>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-indigo-400 transition-colors">Solutions</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Resources</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
            <button className="text-white text-sm font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors hidden sm:block">Login</button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20 active:scale-95">Signup Free</button>
        </div>
      </div>
    </motion.nav>
  );
}
