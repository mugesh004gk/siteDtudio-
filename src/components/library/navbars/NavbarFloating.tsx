import { motion } from 'framer-motion';

export default function NavbarFloating() {
  return (
    <div className="pt-4 px-4 relative z-50">
      <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-5xl mx-auto bg-[#1e1e24] rounded-2xl border border-white/10 shadow-2xl shadow-black/40 px-6 py-3 flex items-center justify-between">
        <div className="font-extrabold text-lg text-white">Float<span className="text-emerald-400">Nav</span></div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60 font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Products</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Resources</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-5 py-2 rounded-xl text-sm transition-colors">Try Free</button>
      </motion.nav>
    </div>
  );
}
