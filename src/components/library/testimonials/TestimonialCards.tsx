import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCards() {
  const items = [
    { name: 'Sarah Chen', role: 'CTO at TechFlow', text: 'SiteStudio cut our development time by 60%. The component quality is outstanding.' },
    { name: 'Marcus Johnson', role: 'Founder, DesignLab', text: 'Finally a builder that produces clean, production-ready code I\'m not embarrassed to ship.' },
    { name: 'Emily Parker', role: 'Lead Developer, NexGen', text: 'The drag and drop builder combined with code export is a game changer for our agency.' },
  ];
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Loved by developers</h2>
          <p className="text-lg text-white/50">See what our users have to say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#18181b] rounded-2xl p-8 border border-white/5">
              <div className="flex gap-1 text-amber-400 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}</div>
              <p className="text-white/70 mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">{item.name[0]}</div>
                <div><div className="font-semibold text-white text-sm">{item.name}</div><div className="text-white/40 text-xs">{item.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
