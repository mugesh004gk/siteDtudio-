import { motion } from 'framer-motion';

export default function NavbarClassic() {
  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 bg-[#18181b] border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-extrabold text-xl text-white tracking-tight">Brand<span className="text-indigo-500">.</span></div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">Get Started</button>
      </div>
    </motion.nav>
  );
}
