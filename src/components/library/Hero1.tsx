import React from 'react';
import { motion } from 'framer-motion';

export default function Hero1({ config }: { config: any }) {
  const initial = config.animateOnLoad ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className={`${config.bgColor || 'bg-bg'} ${config.textColor || 'text-text'} ${config.padding || 'py-20'}`}>
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.h1 
          initial={initial} animate={animate} transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight"
        >
          Build the future of web, <span className="text-primary italic">faster.</span>
        </motion.h1>
        <motion.p 
          initial={initial} animate={animate} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl opacity-80 mb-10 max-w-2xl mx-auto"
        >
          A powerful UI component library and visual page builder for modern web developers.
        </motion.p>
        <motion.div 
          initial={initial} animate={animate} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get Started
          </button>
          <button className="bg-surface hover:bg-white/10 text-text px-8 py-4 rounded-xl font-medium text-lg transition-all">
            View Components
          </button>
        </motion.div>
      </div>
    </section>
  );
}
