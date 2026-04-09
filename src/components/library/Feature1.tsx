import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield } from 'lucide-react';

export default function Feature1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-4 text-text">Why Choose SiteStudio?</h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">Everything you need to build incredible user interfaces, crafted with precision.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: Layers, t: '100+ Components', d: 'Mix and match premium UI components.' },
             { icon: Zap, t: 'Lightning Fast', d: 'Optimized for performance and speed.' },
             { icon: Shield, t: 'Enterprise Ready', d: 'Accessible, responsive, and reliable.' }
           ].map((v, i) => (
             <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} viewport={{once:true}} key={i} className={`${config.cardColor || 'bg-surface'} p-8 rounded-2xl border border-white/5`}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <v.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-text">{v.t}</h3>
                <p className="text-text/70">{v.d}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
