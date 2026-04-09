import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar1({ config }: { config: any }) {
  const glassClass = config.glassEffect ? 'bg-surface/70 backdrop-blur-lg /50 border-b border-white/10/50 -800/50' : 'bg-bg border-b border-white/10 -800';
  const stickyClass = config.sticky ? 'sticky top-0 z-50' : 'relative z-50';

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}
      className={`${stickyClass} ${glassClass} transition-colors`}
    >
       <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
         <div className={`font-heading font-extrabold text-2xl ${config.brandColor || 'text-primary'}`}>SiteStudio<span className="text-text">.</span></div>
         <div className="hidden md:flex gap-8 font-medium text-sm text-text/80">
           <a href="#" className="hover:text-primary transition-colors">Components</a>
           <a href="#" className="hover:text-primary transition-colors">Templates</a>
           <a href="#" className="hover:text-primary transition-colors">Docs</a>
         </div>
         <div className="flex gap-4">
            <button className="hidden md:block text-text px-4 py-2 hover:bg-surface rounded-lg font-medium transition-colors">Log in</button>
            <button className="bg-text text-bg px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform">Get Started</button>
         </div>
       </div>
    </motion.nav>
  );
}
