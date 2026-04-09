import { motion } from 'framer-motion';

export default function HeroSplit() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">The Future is Here</div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">Design without limits.</h1>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">Create beautiful, responsive websites using pre-built components. No design skills required.</p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-7 py-3.5 rounded-xl transition-colors">Get Started</button>
            <button className="text-white/70 hover:text-white font-semibold transition-colors flex items-center gap-2">Learn More →</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 rounded-3xl h-[400px] border border-white/10 flex items-center justify-center">
          <div className="text-white/20 text-lg font-medium">App Preview</div>
        </motion.div>
      </div>
    </section>
  );
}
