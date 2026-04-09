import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-4 text-text">Latest News</h2>
            <p className="text-xl text-text/70 max-w-xl">Stay up to date with our product updates, culture, and more.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors">View all <ArrowRight size={18} /></button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[1,2,3].map(i => (
             <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}} key={i} className="group cursor-pointer">
               <div className="w-full h-60 bg-surface rounded-3xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
               </div>
               <div className="text-sm font-bold text-primary mb-3">PRODUCT UPDATE</div>
               <h3 className="text-2xl font-bold font-heading text-text mb-3 group-hover:text-primary transition-colors">Introducing Visual Page Builder 2.0</h3>
               <p className="text-text/70 mb-4 line-clamp-2">A complete overhaul of our rendering engine allows for buttery smooth interactions and endless drag-and-drop capabilities.</p>
               <div className="text-text font-medium flex items-center gap-2">Read more <ArrowRight size={16} /></div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
