import React from 'react';
import { motion } from 'framer-motion';

export default function Stats1({ config }: { config: any }) {
  const stats = [
    { value: '1M+', label: 'Active Users' },
    { value: '$50M', label: 'Revenue Generated' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ];
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-20 border-y border-white/5`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: i*0.1}} key={i} className="text-center px-4">
               <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">{s.value}</div>
               <div className="text-text/70 font-medium uppercase tracking-wider text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
