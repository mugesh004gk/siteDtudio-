import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Wand2, Rocket, Zap, Layout, Shield, Sparkles, Play, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/StandardUI';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <Sparkles size={14} />
            <span>Futuristic Site Architect</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-glow">FUTURE</span> <br />
            OF THE WEB
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Deploy high-fidelity, futuristic websites in minutes. Professional-grade component library meets AI-powered precision.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigate('/builder')} className="h-14 px-10 text-base">
              <Rocket size={20} /> Launch Builder
            </Button>
            <Button variant="secondary" className="h-14 px-10 text-base">
              <Play size={20} className="fill-current" /> Watch Demo
            </Button>
          </motion.div>

          {/* Product Preview */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="mt-24 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
            <div className="p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
              <div className="rounded-[2.25rem] overflow-hidden border border-white/5 bg-[#0f172a]">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000" alt="Builder Preview" className="w-full opacity-80" />
              </div>
            </div>
            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-[#0f172a]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Hyper-Fast', desc: 'Optimized for speed and high-fidelity rendering.' },
              { icon: Layout, title: 'Infinite Grid', desc: 'Precise control over every pixel with our custom engine.' },
              { icon: Shield, title: 'Safe-Build', desc: 'Real-time backups and versioning for total security.' }
            ].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-[2rem] bg-[#111827] border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
