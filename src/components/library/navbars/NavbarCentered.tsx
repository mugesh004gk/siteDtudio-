import { motion } from 'framer-motion';

export default function NavbarCentered() {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#18181b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
        </div>
        <div className="font-black text-2xl text-white tracking-tight">STUDIO</div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Blog</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
