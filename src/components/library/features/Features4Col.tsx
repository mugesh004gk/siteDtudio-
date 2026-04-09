import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, BarChart3 } from 'lucide-react';

export default function Features4Col() {
  const items = [
    { icon: Code, title: 'Clean Code', desc: 'Production-ready, semantic code output.' },
    { icon: Palette, title: 'Custom Themes', desc: 'Full control over every visual aspect.' },
    { icon: Smartphone, title: 'Responsive', desc: 'Perfect on every device and screen.' },
    { icon: BarChart3, title: 'Analytics', desc: 'Built-in performance tracking tools.' },
  ];
  return (
    <section className="bg-[#09090b] py-24 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-5"><item.icon size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
