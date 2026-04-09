import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, MonitorSmartphone, Code, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { componentMap } from '../lib/componentMap';

export default function Home() {
  const HeroPreview = componentMap['hero-centered'] || (() => <div className="h-64 bg-indigo-600/10 animate-pulse" />);

  return (
    <div className="flex-1 bg-[#09090b]">
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.1),transparent_60%)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-3 bg-indigo-500/5 border border-indigo-500/20 rounded-full px-6 py-2.5 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-12 shadow-2xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)] animate-ping" /> Engineering Version 2.0
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">
              Build the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-gradient">Future.</span>
            </h1>
            <p className="text-2xl text-white/30 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              SiteStudio is an industrial-grade UI framework, visual assembly engine, and cross-platform code generator for high-performance development teams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/components" className="w-full sm:w-auto px-12 py-6 bg-white text-[#09090b] hover:bg-indigo-600 hover:text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3 active:scale-95 group">
                Browse Components <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/builder" className="w-full sm:w-auto px-12 py-6 bg-white/5 hover:bg-white/10 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] border border-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-xl active:scale-95 shadow-2xl">
                <MonitorSmartphone size={20} /> Launch Architect
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-32 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Layers, title: 'Precision Components', desc: '50+ unique, industrial-grade components across core categories.', color: 'indigo' },
              { icon: MonitorSmartphone, title: 'Visual Assembly', desc: 'Dynamic, real-time builder logic for instant UI materialization.', color: 'purple' },
              { icon: Code, title: 'Code Synthesis', desc: 'Atomic export for React, Next.js, and standardized industrial HTML.', color: 'emerald' },
              { icon: Sparkles, title: 'AI Acceleration', desc: 'Intelligent layout suggestions powered by neural design patterns.', color: 'amber' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#18181b] p-10 rounded-[3rem] border border-white/5 hover:border-indigo-500/30 transition-all group shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <f.icon size={120} />
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-${f.color}-500 mb-8 border border-white/5 shadow-inner transition-transform group-hover:scale-110`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{f.title}</h3>
                <p className="text-white/30 text-base leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Rendering Demo */}
      <section className="py-40 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.05),transparent_60%)]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-24">
             <div className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Real-time Visualization</div>
             <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Instant Material Preview</h2>
             <p className="text-xl text-white/30 max-w-2xl mx-auto font-medium">Observe the high-fidelity rendering performance of our component registry.</p>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#18181b] rounded-[4rem] border border-white/5 overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,1)] ring-1 ring-white/[0.02]">
            <div className="bg-[#09090b] px-8 py-5 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500/30 border border-rose-500/10" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/30 border border-amber-500/10" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/30 border border-emerald-500/10" />
              </div>
              <div className="bg-white/5 px-6 py-2 rounded-full border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                localhost:3000/live-preview
              </div>
              <div className="w-20" />
            </div>
            <div className="relative min-h-[500px] flex items-center justify-center">
                <div className="w-full">
                  <HeroPreview />
                </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer / CTA Social */}
      <section className="py-40 border-t border-white/5 text-center px-10">
         <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">Start Building<br/>Today.</h2>
         <div className="flex justify-center gap-6">
            <Link to="/builder" className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] active:scale-95">
               Initialize Session
            </Link>
            <Link to="/components" className="bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs transition-all border border-white/5 active:scale-95">
               Explore Assets
            </Link>
         </div>
      </section>
    </div>
  );
}
