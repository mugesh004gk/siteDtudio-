import { motion } from 'framer-motion';

export default function NavbarTransparent() {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="font-extrabold text-xl text-white">Clarity<span className="text-sky-400">.</span></div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-sky-400 transition-colors">Features</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Solutions</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Company</a>
        </div>
        <button className="border border-white/30 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all">Contact</button>
      </div>
    </motion.nav>
  );
}
