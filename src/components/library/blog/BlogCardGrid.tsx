import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BlogCardGrid() {
  const posts = [
    { cat: 'ENGINEERING', title: 'How We Built Our Visual Page Builder', desc: 'A deep dive into the architecture behind our drag-and-drop builder.' },
    { cat: 'PRODUCT', title: 'Introducing Multi-Framework Export', desc: 'Export your designs to React, Vue, Angular and more.' },
    { cat: 'DESIGN', title: '10 UI Design Principles for 2026', desc: 'Timeless design patterns that never go out of style.' },
  ];
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div><h2 className="text-4xl font-bold text-white mb-2">Latest from our blog</h2><p className="text-lg text-white/50">Insights, updates, and tutorials.</p></div>
          <a href="#" className="hidden md:flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">View All <ArrowRight size={16} /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="bg-[#18181b] rounded-2xl h-48 mb-5 border border-white/5 group-hover:border-indigo-500/30 transition-colors" />
              <div className="text-xs font-bold text-indigo-400 tracking-widest mb-2">{p.cat}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
              <p className="text-white/50 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
