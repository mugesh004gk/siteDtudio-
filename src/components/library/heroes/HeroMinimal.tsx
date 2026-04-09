import { motion } from 'framer-motion';

export default function HeroMinimal() {
  return (
    <section className="bg-[#09090b] py-36">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">Less is more.</h1>
          <p className="text-xl text-white/40 mb-12 max-w-xl">Simplicity is the ultimate sophistication. Build clean, modern websites with minimal effort.</p>
          <a href="#" className="text-white font-bold text-lg border-b-2 border-white/30 hover:border-white pb-1 transition-colors">Explore →</a>
        </motion.div>
      </div>
    </section>
  );
}
