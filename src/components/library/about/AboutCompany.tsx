import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function AboutCompany() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-3xl h-[450px] border border-white/5" />
        <div>
          <div className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-4">About Us</div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Building the tools developers deserve.</h2>
          <p className="text-lg text-white/50 mb-8 leading-relaxed">We're a passionate team of designers and engineers on a mission to make web development accessible, beautiful, and fast for everyone.</p>
          <ul className="space-y-3 mb-8">
            {['Open source community', 'Enterprise-grade components', '10,000+ active users'].map((t, i) => <li key={i} className="flex items-center gap-3 text-white/70"><div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><Check size={12} className="text-indigo-400" /></div>{t}</li>)}
          </ul>
          <button className="bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl border border-white/10 transition-colors">Learn More</button>
        </div>
      </div>
    </section>
  );
}
