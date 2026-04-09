import { motion } from 'framer-motion';

export default function NavbarGlass() {
  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-extrabold text-xl text-white">Glass<span className="text-purple-400">UI</span></div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white/70 hover:text-white text-sm font-medium transition-colors">Login</button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/10 transition-all">Sign Up</button>
        </div>
      </div>
    </motion.nav>
  );
}
