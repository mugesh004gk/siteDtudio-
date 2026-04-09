import { motion } from 'framer-motion';
import { Book, FileText, Code, Rocket, Terminal, Share2, ShieldCheck, Cpu } from 'lucide-react';

export default function Docs() {
  const sections = [
    {
      icon: Book,
      title: "Project Architecture",
      content: "SiteStudio exports use a standardized industrial-grade Next.js structure. Every component is atomic, independent, and optimized for high-performance rendering.",
      list: ["/components - Atomic UI units", "/app - Next.js Logic", "/styles - Design Tokens", "tailwind.config.js - Custom Theme"]
    },
    {
      icon: Terminal,
      title: "Local Implementation",
      content: "To run your exported stack locally, follow the standard Node.js lifecycle protocols.",
      list: ["npm install - Dependency Sync", "npm run dev - Launch Dev Mode", "npm run build - Compile Assets"]
    },
    {
      icon: Code,
      title: "Component Engineering",
      content: "Every component exported is fully distinct. You can modify Tailwind classes or React hooks directly without affecting global state unless intended.",
      list: ["No external CSS weight", "Fully responsive logic", "Customizable framer-motion"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-24 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 text-indigo-400 mb-6 bg-indigo-500/5 px-4 py-2 rounded-full w-fit border border-indigo-500/10">
            <Book size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Engineering Documentation</span>
          </div>
          <h1 className="text-7xl font-black text-white tracking-tighter uppercase leading-none mb-8">Export Guide</h1>
          <p className="text-xl text-white/30 max-w-2xl leading-relaxed font-medium">Technical specifications and implementation protocols for your generated SiteStudio assets.</p>
        </div>
        <button className="bg-white text-[#09090b] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-95 group">
           <Rocket size={18} /> Deploy Protocol
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {sections.map((sec, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            className="bg-[#18181b] border border-white/5 rounded-[3rem] p-12 group hover:border-indigo-500/30 transition-all shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <sec.icon size={120} />
             </div>
             <div className="w-16 h-16 bg-[#09090b] rounded-[1.5rem] flex items-center justify-center text-indigo-400 mb-8 border border-white/5 shadow-inner transition-transform group-hover:scale-105">
                <sec.icon size={32} />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{sec.title}</h3>
             <p className="text-white/30 text-base mb-8 leading-relaxed font-medium">{sec.content}</p>
             <ul className="space-y-3">
                {sec.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/10 group-hover:text-white/40 transition-colors">
                     <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> {item}
                  </li>
                ))}
             </ul>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#111] rounded-[4rem] border border-white/5 p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-16 text-indigo-500/5"><Cpu size={300} /></div>
         <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Cloud Deployment Ready</h2>
            <p className="text-white/30 text-lg mb-10 max-w-xl font-medium leading-relaxed">Your project is pre-configured for instant deployment on edge platforms like Vercel or Netlify. Every export includes automated build optimization protocols.</p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 active:scale-95"><ShieldCheck size={16} /> Secure Deploy</button>
               <button className="px-8 py-4 bg-white/5 text-white/40 border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95"><Share2 size={16} /> Asset Share</button>
            </div>
         </div>
         <div className="w-full max-w-sm bg-[#09090b] border border-white/5 rounded-[2.5rem] p-10 shadow-inner relative z-10">
             <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 bg-rose-500/40 rounded-full" /><div className="w-2.5 h-2.5 bg-amber-500/40 rounded-full" /><div className="w-2.5 h-2.5 bg-emerald-500/40 rounded-full" /></div>
                <div className="text-[9px] font-mono text-white/10 tracking-widest uppercase ml-4">Terminal Session</div>
             </div>
             <div className="font-mono text-xs space-y-3">
                <div className="text-indigo-400"># Initializing Export...</div>
                <div className="text-white/40">npm run build</div>
                <div className="text-emerald-500 flex items-center gap-2"><CheckCircle2 size={12} strokeWidth={3} /> Build Protocol Completed</div>
                <div className="text-white/20">ready - started server on [::]:3000</div>
             </div>
         </div>
      </div>
    </div>
  );
}

function CheckCircle2({ size, strokeWidth }: { size: number, strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
