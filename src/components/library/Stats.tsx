
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';
import { TrendingUp, Users, Zap, Globe, Clock, PieChart, BarChart3, Database, Target, Award, Rocket, Sparkles, Plus, ArrowUpRight } from 'lucide-react';

// ─── HELPER COMPONENT: ANIMATED NUMBER ───

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => setDisplayValue(Math.floor(latest)));
    }, [springValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
};

// ─── STATS COMPONENTS ───

export const StatsBasic = ({ bgColor, cols = 3, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            {[1,2,3,4].slice(0, cols).map(i => (
                <div key={i} className="flex-1">
                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                        <AnimatedNumber value={i * 250} suffix="+" />
                    </div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">GLOBAL METRIC {i}</div>
                </div>
            ))}
        </div>
    </section>
);

export const StatsCounter = ({ bgColor, accentColor, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-y border-white/5`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
                { val: 1500, label: "Projects Shipped", suffix: "+" },
                { val: 98, label: "Success Rate", suffix: "%" },
                { val: 12, label: "Global HQ", suffix: "" },
                { val: 24, label: "Supp. Available", suffix: "/7" }
            ].map((s, i) => (
                <div key={i} className="space-y-4 group">
                    <div style={{ color: accentColor }} className="text-6xl font-black italic tracking-tighter group-hover:scale-110 transition-transform">
                        <AnimatedNumber value={s.val} suffix={s.suffix} />
                    </div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{s.label}</p>
                </div>
            ))}
        </div>
    </section>
);

export const StatsCards = ({ bgColor, cardBg, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { val: 400, label: "ACTIVE AGENTS", unit: "M" },
                { val: 90, label: "UPTIME LOG", unit: "%" },
                { val: 1.2, label: "DAILY EXPORTS", unit: "M" }
            ].map((s, i) => (
                <div key={i} style={{ background: cardBg || 'rgba(255,255,255,0.02)' }} 
                    className="p-12 rounded-[3.5rem] border border-white/5 hover:border-white/10 transition-all shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:scale-150 transition-all" />
                    <div className="text-6xl font-black text-white tracking-tighter leading-none mb-8">
                         <AnimatedNumber value={s.val} />{s.unit}
                    </div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">{s.label}</div>
                    <div className="mt-12 w-full h-px bg-white/5 group-hover:bg-indigo-500/30 transition-all" />
                </div>
            ))}
        </div>
    </section>
);

export const StatsIcon = ({ bgColor, iconColor, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { val: 80, label: "Speed Increase", icon: <Zap />, suffix: "%" },
                { val: 50, label: "Cost Savings", icon: <TrendingUp />, suffix: "%" },
                { val: 120, label: "Engaged Devs", icon: <Users />, suffix: "K" },
                { val: 15, label: "Global Nodes", icon: <Globe />, suffix: "" }
            ].map((s, i) => (
                <div key={i} className="flex gap-8 group items-center">
                    <div style={{ backgroundColor: iconColor + '10', color: iconColor }} className="w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-white group-hover:text-black transition-all">
                        {React.cloneElement(s.icon as any, { size: 32 })}
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white tracking-tighter mb-1">
                            <AnimatedNumber value={s.val} suffix={s.suffix} />
                        </div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{s.label}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export const StatsSplit = ({ bgColor, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase italic">DATA DRIVEN <br/><span className="text-white/20">PRECISION.</span></h2>
                <p className="text-white/40 text-xl font-medium leading-relaxed max-w-md">Our architecture is designed to handle extreme scale without compromising on visual fidelity or performant logic.</p>
                <div className="mt-12 flex gap-4">
                   <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition shadow-2xl">Visual Archive</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {[
                    { val: 99, label: "Fidelity Score", suffix: "%", color: "#6366f1" },
                    { val: 40, label: "Layouts Active", suffix: "+", color: "#f43f5e" },
                    { val: 10, label: "Sync Nodes", suffix: "K", color: "#10b981" },
                    { val: 24, label: "Support Line", suffix: "H", color: "#8b5cf6" }
                ].map((s, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-[#111] border border-white/5 relative group overflow-hidden shadow-xl">
                        <div style={{ background: s.color }} className="absolute bottom-0 left-0 w-full h-1 opacity-20 transform translate-y-1 group-hover:translate-y-0 transition-all" />
                        <div style={{ color: s.color }} className="text-5xl font-black tracking-tighter mb-2">
                             <AnimatedNumber value={s.val} suffix={s.suffix} />
                        </div>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const StatsProgress = ({ bgColor, barColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-5xl mx-auto space-y-12">
       {[
         { label: "AI ENGINE PERFORMANCE", val: 92 },
         { label: "USER SATISFACTION INDEX", val: 98 },
         { label: "VISUAL FIDELITY RATING", val: 89 }
       ].map((item, i) => (
          <div key={i} className="space-y-4">
             <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">{item.label}</span>
                <span className="text-2xl font-black text-white tabular-nums tracking-tighter"><AnimatedNumber value={item.val} suffix="%" /></span>
             </div>
             <div className="h-6 bg-white/5 rounded-full overflow-hidden border border-white/5 p-1 shadow-inner">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.val}%` }} transition={{ duration: 1.5, ease: "circOut" }} 
                    style={{ background: barColor || '#6366f1' }} className="h-full rounded-full relative group shadow-2xl">
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/30 to-transparent blur-md" />
                </motion.div>
             </div>
          </div>
       ))}
    </div>
  </section>
);

export const StatsCircular = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
       {[
          { label: "CONVERSION", val: 94 },
          { label: "RETENTION", val: 88 },
          { label: "VELOCITY", val: 78 }
       ].map((item, i) => (
          <div key={i} className="text-center group p-12 hover:bg-white/[0.02] rounded-[4rem] transition-all border border-transparent hover:border-white/5">
             <div className="relative w-48 h-48 mx-auto mb-10 group-hover:scale-110 transition-transform">
                <svg className="w-full h-full -rotate-90 transform">
                   <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                   <motion.circle cx="96" cy="96" r="88" stroke={accentColor || '#6366f1'} strokeWidth="12" fill="transparent" 
                        strokeDasharray={552} initial={{ strokeDashoffset: 552 }} whileInView={{ strokeDashoffset: 552 - (552 * item.val) / 100 }} transition={{ duration: 1.5, ease: "circOut" }} className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-5xl font-black text-white tabular-nums tracking-tighter italic"><AnimatedNumber value={item.val} suffix="%" /></span>
                </div>
             </div>
             <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">{item.label}</div>
          </div>
       ))}
    </div>
  </section>
);

export const StatsSaaS = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <div className="p-12 bg-white/5 rounded-[3.5rem] border border-white/10 lg:col-span-1 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all" />
          <h4 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-10 italic">PLATFORM LOAD INDEX</h4>
          <div className="text-7xl font-black text-white tracking-tighter flex items-end gap-2 mb-8">
             <AnimatedNumber value={12} suffix="ms" />
             <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2 scale-75 shadow-lg shadow-emerald-500/20"><TrendingUp size={20}/></div>
          </div>
          <p className="text-white/40 text-sm font-medium leading-relaxed italic">"SiteStudio holds an all-time low latency record across 180 countries."</p>
       </div>
       <div className="grid grid-cols-2 gap-8 lg:col-span-2">
          {[
            { label: "Active Nodes", val: 140, icon: <Database /> },
            { label: "Uptime (Real)", val: 100, icon: <Zap />, suffix: "%" },
            { label: "Export Velocity", val: 40, icon: <Target />, suffix: "ms" },
            { label: "Security Layer", val: 10, icon: <Users />, suffix: "X" }
          ].map((item, i) => (
             <div key={i} className="p-10 rounded-[3rem] bg-[#111] border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between group shadow-xl">
                <div style={{ color: accentColor }} className="opacity-40 group-hover:opacity-100 transition-opacity mb-8">{React.cloneElement(item.icon as any, { size: 28 })}</div>
                <div>
                   <div className="text-3xl font-black text-white tracking-tighter mb-1 uppercase">
                      <AnimatedNumber value={item.val} suffix={item.suffix || ""} />
                   </div>
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.label}</div>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const StatsTimeline = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-5xl mx-auto space-y-32 relative">
       <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-px bg-white/5" />
       {[
         { year: "2024", label: "Alpha Release", val: 50, suffix: "K Users" },
         { year: "2025", label: "Series A Extension", val: 200, suffix: "K Users" },
         { year: "2026", label: "Global Presence", val: 1, suffix: "M Active" }
       ].map((item, i) => (
          <div key={i} className={`flex items-center gap-12 group ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
             <div className="w-12 h-12 rounded-full border-2 border-indigo-500 bg-black z-10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.5)]"><div className="w-4 h-4 rounded-full bg-white animate-pulse" /></div>
             <div className="flex-1 space-y-4 text-left group-hover:translate-x-4 md:group-hover:translate-x-0 transition-transform md:text-center lg:text-left">
                <div className="text-6xl font-black text-white italic tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity">{item.year}</div>
                <h4 style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.5em]">{item.label}</h4>
                <div className="text-white/40 text-xl font-black uppercase italic tracking-tighter tabular-nums"><AnimatedNumber value={item.val} suffix={item.suffix} /></div>
             </div>
             <div className="hidden md:block flex-1" />
          </div>
       ))}
    </div>
  </section>
);

export const StatsInteractive = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-20">
       {[
          { label: "SATISFACTION", val: 99, icon: <Sparkles /> },
          { label: "DEPLOYMENT", val: 124, icon: <Rocket /> },
          { label: "AWARDS WON", val: 42, icon: <Award /> }
       ].map((item, i) => {
          const [key, setKey] = useState(0);
          return (
             <div key={i} onMouseEnter={() => setKey(prev => prev + 1)} className="text-center group cursor-pointer">
                <div style={{ color: accentColor }} className="text-8xl font-black text-white italic tracking-tighter mb-6 flex justify-center items-center gap-4">
                   <motion.div key={key} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <AnimatedNumber value={item.val} suffix="+" />
                   </motion.div>
                </div>
                <div className="flex items-center justify-center gap-3">
                   <div style={{ background: accentColor }} className="w-2 h-2 rounded-full animate-pulse" />
                   <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] group-hover:text-white transition-colors">{item.label}</div>
                </div>
             </div>
          );
       })}
    </div>
  </section>
);

export const StatsMinimal = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="w-full h-px bg-white/5 mb-16" />
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "ACTIVE EMPLOYEES", val: 120 },
            { label: "COUNTRIES SERVED", val: 84 },
            { label: "SYNC SYSTEMS", val: 12 },
            { label: "CORE NODES", val: 400 }
          ].map((s, i) => (
             <div key={i} className="space-y-2">
                <div className="text-4xl lg:text-6xl font-black text-white tracking-widest leading-none outline-text tabular-nums">
                    <AnimatedNumber value={s.val} />
                </div>
                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">{s.label}</div>
             </div>
          ))}
       </div>
       <div className="w-full h-px bg-white/5 mt-16" />
    </div>
  </section>
);

export const StatsCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 perspective-1000 overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
         {[
            { label: "REVENUE GROWTH", val: 240 },
            { label: "CORE ASSETS", val: 12 }
         ].map((item, i) => (
            <motion.div key={i} whileHover={{ rotateY: 15, rotateX: 5, y: -20, scale: 1.05 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
               className="flex-1 p-1 rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-white/5 to-purple-500/20 shadow-2xl relative group">
               <div className="bg-[#09090b] rounded-[3.9rem] p-16 md:p-24 relative overflow-hidden h-full">
                  <div style={{ background: accentColor }} className="absolute -top-10 -right-10 w-48 h-48 opacity-10 rounded-full blur-[100px] pointer-events-none" />
                  <div className="flex justify-between items-start mb-20 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 group-hover:scale-125 transition-all"><BarChart3 size={32}/></div>
                      <div className="text-white/20 p-2 border border-white/10 rounded-xl hover:text-white transition cursor-pointer"><ArrowUpRight size={24}/></div>
                  </div>
                  <div className="space-y-4 mb-16 relative z-10 text-center md:text-left">
                     <div style={{ color: accentColor }} className="text-7xl md:text-[8rem] font-black italic tracking-tighter leading-none group-hover:shadow-glow">
                        <AnimatedNumber value={item.val} suffix="+" />
                     </div>
                     <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">{item.label}</div>
                  </div>
                  <div className="text-[10px] font-black uppercase text-white/10 tracking-[0.2em] relative z-10 italic">DATA REFRESHED: REALTIME SYNC</div>
               </div>
            </motion.div>
         ))}
      </div>
   </section>
);

export const allStats = {
  StatsBasic,
  StatsCounter,
  StatsCards,
  StatsIcon,
  StatsSplit,
  StatsProgress,
  StatsCircular,
  StatsSaaS,
  StatsTimeline,
  StatsInteractive,
  StatsMinimal,
  StatsCreative3D
};
