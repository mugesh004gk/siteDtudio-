import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FeaturesTimeline() {
  const steps = [
    { title: 'Research & Planning', desc: 'Identify core system requirements and architecture.' },
    { title: 'Design & Prototype', desc: 'Craft high-fidelity industrial interfaces and prototypes.' },
    { title: 'Implementation', desc: 'Deploy production-ready code with CI/CD automation.' },
    { title: 'Launch & Optimize', desc: 'Final deployment and real-time performance tracking.' },
  ];
  return (
    <section className="bg-[#09090b] py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Project Timeline</h2>
          <p className="text-lg text-white/50">Our industrial execution process from start to finish.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 md:block hidden" />
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`flex items-center gap-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 md:block hidden" />
                <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-[#09090b] shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center text-white z-10 shrink-0">
                  <CheckCircle2 size={24} strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <div className={`p-8 bg-[#18181b] rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">Step 0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
