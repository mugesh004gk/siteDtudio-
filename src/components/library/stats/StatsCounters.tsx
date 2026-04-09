import { motion } from 'framer-motion';

export default function StatsCounters() {
  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'Components' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];
  return (
    <section className="bg-[#09090b] py-20 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2">{s.value}</div>
            <div className="text-white/50 text-sm font-medium uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
