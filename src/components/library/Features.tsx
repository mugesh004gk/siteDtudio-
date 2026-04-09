import React from 'react';
import { 
  Zap, Shield, Clock, BarChart, Smartphone, Globe, 
  ChevronRight, CheckCircle2, Star, Layers, Activity, 
  Box, CreditCard, Truck, Lock, UserCheck, 
  ArrowRight, MousePointer2, Layout, Database,
  ArrowUpRight, Heart, Send, Search, Terminal,
  Cpu, Command, Workflow, Sparkles
} from 'lucide-react';

/* --- BASIC --- */
export const Features3Col = ({ bgColor = '#09090b', textColor = '#ffffff', cardColor = '#18181b', iconColor = '#6366f1', title = 'Everything you need', description = 'Comprehensive tools designed to scale your performance and workflow.' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{title}</h2>
        <p className="opacity-60 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Lightning Fast', desc: 'Optimized for maximum speed and efficiency across all devices.', icon: Zap },
          { title: 'Secure Design', desc: 'Enterprise-grade security built into every layer of the platform.', icon: Shield },
          { title: 'Proven Metrics', desc: 'Track your growth with sophisticated real-time analytics.', icon: BarChart }
        ].map((item, i) => (
          <div key={i} style={{ backgroundColor: cardColor }} className="p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all group">
            <div style={{ backgroundColor: `${iconColor}20`, color: iconColor }} className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm opacity-50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Features4Col = ({ bgColor = '#09090b', textColor = '#ffffff', cardColor = '#111113', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Global', icon: Globe }, { title: 'Mobile', icon: Smartphone },
        { title: 'Support', icon: Clock }, { title: 'Advanced', icon: Layers }
      ].map((item, i) => (
        <div key={i} style={{ backgroundColor: cardColor }} className="p-6 rounded-3xl border border-white/5 text-center transition-transform hover:-translate-y-2">
           <div style={{ color: iconColor }} className="mx-auto mb-4 w-min"><item.icon size={32}/></div>
           <h4 className="font-bold text-lg mb-2">{item.title}</h4>
           <div className="text-[10px] uppercase font-black tracking-widest opacity-30">Production Ready</div>
        </div>
      ))}
    </div>
  </section>
);

/* --- CARD-BASED --- */
export const FeaturesGlassCards = ({ bgColor = '#09090b', textColor = '#ffffff', cardColor = 'rgba(255,255,255,0.03)', iconColor = '#818cf8' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 relative overflow-hidden">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
     <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {[
          { title: 'Transparent UI', icon: Layout }, 
          { title: 'Modern Glass', icon: Sparkles },
          { title: 'Clean Design', icon: Box }
        ].map((item, i) => (
          <div key={i} style={{ backgroundColor: cardColor }} className="p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl hover:bg-white/5 transition-colors group">
             <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
                <item.icon size={28} className="text-white" />
             </div>
             <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
             <p className="opacity-40 leading-relaxed">Elegant glassmorphism effect for premium interfaces and high-end landing pages.</p>
          </div>
        ))}
     </div>
  </section>
);

/* --- IMAGE / PRODUCT FEATURES --- */
export const FeaturesSplitRight = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1', title = 'Optimized for speed' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
       <div>
          <span style={{ color: iconColor }} className="text-xs font-black uppercase tracking-[0.3em] mb-4 block">Performance First</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">{title}</h2>
          <div className="space-y-6">
             {[
               { t: 'Built-in SEO', d: 'Get discovered easily with search-optimized architecture.' },
               { t: 'Image Scaling', d: 'Automatic compression for lightning fast load times.' },
               { t: 'Caching Engine', d: 'Proprietary edge caching for global performance.' }
             ].map((f, i) => (
               <div key={i} className="flex gap-4">
                  <div style={{ color: iconColor }} className="shrink-0 mt-1"><CheckCircle2 size={24} /></div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{f.t}</h5>
                    <p className="opacity-50 text-sm leading-relaxed">{f.d}</p>
                  </div>
               </div>
             ))}
          </div>
       </div>
       <div className="relative group">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10 opacity-50"></div>
          <div className="aspect-video bg-indigo-600/10 rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-4 bg-white rounded-full text-black shadow-2xl scale-0 group-hover:scale-100 transition-transform delay-100"><ArrowRight size={32}/></div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

/* --- E-COMMERCE --- */
export const FeaturesEcomHighlights = ({ bgColor = '#ffffff', textColor = '#0f172a', cardColor = '#f8fafc', iconColor = '#4f46e5' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-20 px-6 border-y border-gray-100">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { t: 'Fast Shipping', d: 'Free on orders over $100', i: Truck },
        { t: 'Secure Pay', d: '100% encrypted transactions', i: Lock },
        { t: '24/7 Support', d: 'Ready to help anytime', i: Clock },
        { t: 'Money Back', d: '30-day easy guarantee', i: CreditCard }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center">
           <div style={{ color: iconColor, backgroundColor: `${iconColor}10` }} className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <item.i size={28} />
           </div>
           <h4 className="font-bold text-lg mb-1 uppercase tracking-tight">{item.t}</h4>
           <p className="text-xs opacity-50 font-medium">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

/* --- TIMELINE / STEPS --- */
export const FeaturesTimeline = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-4xl mx-auto relative whitespace-normal">
       <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
       <div className="space-y-20 relative">
          {[
            { n: '01', t: 'Plan your strategy', d: 'Define your goals and key metrics for success.' },
            { n: '02', t: 'Build the foundation', d: 'Implement the core architecture of your application.' },
            { n: '03', t: 'Launch to market', d: 'Go live with production-ready global deployment.' }
          ].map((s, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               <div className="flex-1 md:text-right hidden md:block">
                  {i % 2 === 0 && (
                    <>
                      <h4 className="text-2xl font-black mb-3">{s.t}</h4>
                      <p className="opacity-50 text-sm leading-relaxed">{s.d}</p>
                    </>
                  )}
               </div>
               <div style={{ backgroundColor: iconColor, color: '#fff' }} className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 shadow-2xl relative">
                  {s.n}
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20 pointer-events-none" />
               </div>
               <div className="flex-1 text-left">
                  {(i % 2 !== 0 || true) && (
                    <div className="md:hidden lg:block">
                        <h4 className="text-2xl font-black mb-3">{s.t}</h4>
                        <p className="opacity-50 text-sm leading-relaxed">{s.d}</p>
                    </div>
                  )}
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

/* --- STATS / METRICS --- */
export const FeaturesKPIStats = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#10b981' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left">
       <div className="max-w-md">
          <h2 className="text-4xl font-black tracking-tight mb-6">Built for scale</h2>
          <p className="opacity-50">Providing world-class infrastructure for developers and enterprises around the globe.</p>
       </div>
       <div className="flex-1 grid grid-cols-2 gap-12">
          <div><h4 style={{ color: iconColor }} className="text-6xl font-black mb-2 tracking-tighter">150M+</h4><p className="text-xs uppercase font-black tracking-widest opacity-30">Requests / Month</p></div>
          <div><h4 style={{ color: iconColor }} className="text-6xl font-black mb-2 tracking-tighter">99.9%</h4><p className="text-xs uppercase font-black tracking-widest opacity-30">Uptime Average</p></div>
       </div>
    </div>
  </section>
);

/* --- CREATIVE / NEON --- */
export const FeaturesNeonShowcase = ({ bgColor = '#050505', textColor = '#ffffff', iconColor = '#f43f5e' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
       {[
         { t: 'Extreme Speed', d: 'Engineered for micro-latency performance.', i: Cpu, c: '#f43f5e' },
         { t: 'Automated Flow', d: 'Zero-touch deployment workflows.', i: Workflow, c: '#a855f7' }
       ].map((item, i) => (
         <div key={i} className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent group overflow-hidden">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#0a0a0c] p-12 rounded-[2.4rem] h-full">
               <div style={{ color: item.c, textShadow: `0 0 20px ${item.c}66` }} className="mb-8"><item.i size={48} /></div>
               <h3 className="text-3xl font-black mb-4 tracking-tighter">{item.t}</h3>
               <p className="opacity-40 leading-relaxed max-w-sm">{item.d}</p>
               <button style={{ color: item.c }} className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest group/btn">
                  Explore Tech <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- ICON FEATURES --- */
export const FeaturesIconGrid = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { t: 'Securely Built', i: Lock }, { t: 'Cloud Native', i: Globe },
        { t: 'API Driven', i: Terminal }, { t: 'Realtime', i: Activity }
      ].map((f, i) => (
        <div key={i} className="flex flex-col items-center text-center group">
           <div style={{ color: iconColor }} className="mb-6 group-hover:scale-110 transition-transform"><f.i size={48} strokeWidth={1} /></div>
           <h4 className="font-bold text-lg">{f.t}</h4>
        </div>
      ))}
    </div>
  </section>
);

/* --- SAAS / PRODUCT --- */
export const FeaturesTabs = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
       <div className="flex justify-center gap-4 mb-12">
         {['Overview', 'Security', 'Automation'].map((tab, i) => (
           <button key={tab} className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${i===0 ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-white/10 text-white/40 hover:text-white'}`}>{tab}</button>
         ))}
       </div>
       <div className="bg-[#18181b] rounded-[2rem] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
             <h3 className="text-3xl font-black mb-6">Automate your entire workflow</h3>
             <p className="opacity-50 mb-8">Stop doing manual tasks. Our engine handles everything from deployment to scaling automatically.</p>
             <button style={{ backgroundColor: iconColor }} className="px-6 py-3 rounded-xl font-bold flex items-center gap-2">Explore Features <ArrowRight size={18}/></button>
          </div>
          <div className="flex-1 bg-black/40 rounded-2xl h-64 w-full border border-white/5 flex items-center justify-center">
             <Workflow size={64} className="opacity-20 animate-pulse" />
          </div>
       </div>
    </div>
  </section>
);

/* --- GRID / LIST --- */
export const FeaturesList = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#10b981' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12">
       {[1,2,3,4,5,6].map(i => (
         <div key={i} className="flex gap-6 items-start py-6 border-b border-white/5">
            <div style={{ color: iconColor }} className="shrink-0 mt-1"><CheckCircle2 size={24}/></div>
            <div>
               <h4 className="font-bold text-xl mb-2">Feature Advantage {i}</h4>
               <p className="text-sm opacity-50 leading-relaxed">Detailed description of why this specific feature provides a competitive edge in the market.</p>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- INTERACTIVE --- */
export const FeaturesAccordion = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-4">
       {[
         { q: 'How does the scaling engine work?', a: 'Our engine monitors your traffic in real-time and spins up new instances automatically.' },
         { q: 'Can I integrate with my existing tools?', a: 'Yes, we provide first-class support for over 200+ popular developer tools.' },
         { q: 'Is there a free trial available?', a: 'We offer a 14-day full-access trial for every new organization.' }
       ].map((item, i) => (
         <div key={i} className="bg-[#111113] border border-white/5 rounded-2xl p-6 group cursor-pointer">
            <div className="flex items-center justify-between">
               <h4 className="font-bold text-lg">{item.q}</h4>
               <ChevronRight size={20} className={`text-white/20 group-hover:text-white transition-transform ${i===0 ? 'rotate-90' : ''}`} />
            </div>
            {i === 0 && <p className="mt-4 text-sm opacity-50 leading-relaxed">{item.a}</p>}
         </div>
       ))}
    </div>
  </section>
);

export const allFeatures = {
  "features-3col": Features3Col,
  "features-4col": Features4Col,
  "features-glass": FeaturesGlassCards,
  "features-split-right": FeaturesSplitRight,
  "features-ecom-highlights": FeaturesEcomHighlights,
  "features-timeline": FeaturesTimeline,
  "features-kpi-stats": FeaturesKPIStats,
  "features-neon": FeaturesNeonShowcase,
  "features-icon-grid": FeaturesIconGrid,
  "features-tabs": FeaturesTabs,
  "features-list": FeaturesList,
  "features-accordion": FeaturesAccordion
};
