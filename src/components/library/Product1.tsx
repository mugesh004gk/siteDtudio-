import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

export default function Product1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
         <h2 className="text-4xl font-bold font-heading mb-12 text-center text-text">Featured Products</h2>
         <div className="grid md:grid-cols-4 gap-6">
           {[1,2,3,4].map(i => (
             <div key={i} className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors group">
               <div className="h-48 bg-[#1e1e1e] relative">
                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
                 <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 cursor-pointer hover:bg-primary"><ShoppingCart size={14} /></div>
               </div>
               <div className="p-5">
                 <div className="flex text-amber-400 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                 </div>
                 <h3 className="text-lg font-bold font-heading text-text mb-1">Premium Wireless Headphones</h3>
                 <div className="flex items-center gap-3">
                   <div className="text-lg font-extrabold text-primary">$299</div>
                   <div className="text-sm text-text/40 line-through">$399</div>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  )
}
