import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Globe } from 'lucide-react';

export default function Features3Col() {
  const items = [
    { icon: Layers, title: 'Modular Design', desc: 'Build with reusable component blocks that fit together perfectly.' },
    { icon: Zap, title: 'Blazing Fast', desc: 'Optimized for Core Web Vitals and peak performance scores.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'SOC2 compliant with end-to-end encryption by default.' },
  ];
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why choose us?</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Everything you need to build incredible user interfaces.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#18181b] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-500/20 transition-colors"><item.icon size={22} /></div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
