import { motion } from 'framer-motion';

export default function HeroCentered() {
  return (
    <section className="relative py-32 bg-[#09090b] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-8">Now in Beta</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">Build stunning websites <span className="text-indigo-400">effortlessly</span></h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">A modern component library with a visual builder. Pick, customize, assemble, and export production-ready code.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20">Start Building</button>
            <button className="bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg border border-white/10 transition-all">Watch Demo</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
