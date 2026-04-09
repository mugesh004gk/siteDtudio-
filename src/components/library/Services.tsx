import React from 'react';
import { 
  Zap, Shield, Smartphone, Globe, Code, BarChart3, 
  Settings, PenTool, Database, Cloud, Lock, Users,
  CheckCircle2, ArrowRight, MousePointer2, Layout, Sparkles
} from 'lucide-react';

/* --- BASIC --- */
export const Services3Col = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      {[
        { t: 'Web Development', d: 'Custom high-performance websites built with the latest technologies.', i: Code },
        { t: 'Cloud Solutions', d: 'Scalable and secure cloud infrastructure for modern applications.', i: Cloud },
        { t: 'UI/UX Design', d: 'Intuitive user experiences designed to convert and engage.', i: PenTool }
      ].map((s, i) => (
        <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all active:scale-95 cursor-pointer">
           <div style={{ color: iconColor }} className="mb-6 group-hover:scale-110 transition-transform"><s.i size={40} strokeWidth={1.5} /></div>
           <h3 className="text-xl font-bold mb-4">{s.t}</h3>
           <p className="opacity-50 text-sm leading-relaxed mb-6">{s.d}</p>
           <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">Explore <ArrowRight size={14}/></button>
        </div>
      ))}
    </div>
  </section>
);

/* --- CARD-BASED --- */
export const ServicesCards = ({ bgColor = '#0d0d0f', textColor = '#ffffff', cardColor = '#18181b', iconColor = '#818cf8' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {[
         { t: 'Product Strategy', d: 'Defining clear roadmaps for successful market entry.', i: Target },
         { t: 'Deep Analytics', d: 'Understand user behavior with precise data tracking.', i: BarChart3 },
         { t: 'Security Audit', d: 'Enterprise-grade protection for your digital assets.', i: Shield },
         { t: 'Mobile First', d: 'Optimized experiences for smartphones and tablets.', i: Smartphone },
         { t: 'Global Scale', d: 'Deploy globally with zero-latency infrastructure.', i: Globe },
         { t: 'Process Automation', d: 'Eliminate manual tasks with intelligent workflows.', i: Settings }
       ].map((s, i) => (
         <div key={i} style={{ backgroundColor: cardColor }} className="p-10 rounded-[2.5rem] border border-white/5 group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-colors" />
            <div style={{ color: iconColor }} className="mb-8"><s.i size={36} /></div>
            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase">{s.t}</h3>
            <p className="opacity-40 text-sm leading-loose">{s.d}</p>
         </div>
       ))}
    </div>
  </section>
);

/* --- PROCESS --- */
export const ServicesProcess = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
       {[
         { n: '01', t: 'Discovery', d: 'We analyze your needs and goals.' },
         { n: '02', t: 'Planning', d: 'Strategy and wireframing phase.' },
         { n: '03', t: 'Execution', d: 'High-quality code and design.' },
         { n: '04', t: 'Launch', d: 'Final polish and deployment.' }
       ].map((p, i) => (
         <div key={i} className="flex-1 group relative">
            <div className="text-8xl font-black opacity-[0.03] absolute -top-10 -left-6 group-hover:opacity-[0.08] transition-opacity select-none">{p.n}</div>
            <div className="relative z-10">
               <div style={{ backgroundColor: iconColor }} className="w-12 h-1.5 rounded-full mb-8 shadow-lg shadow-indigo-600/20" />
               <h4 className="text-2xl font-bold mb-4">{p.t}</h4>
               <p className="opacity-50 text-sm">{p.d}</p>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- ICON SERVICES --- */
export const ServicesIconGrid = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#10b981' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
       {[
         { t: 'Lightning Fast', i: Zap }, { t: 'Total Control', i: Settings },
         { t: 'Cloud Native', i: Cloud }, { t: 'Safe & Sound', i: Lock }
       ].map((s, i) => (
         <div key={i} className="group flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/5 group-hover:border-indigo-500/30 transition-all">
               <div style={{ color: iconColor }}><s.i size={32} /></div>
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest">{s.t}</h4>
         </div>
       ))}
    </div>
  </section>
);

/* --- PREMIUM --- */
export const ServicesPremium = ({ bgColor = '#050505', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
   <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-3 gap-8">
         {[
           { t: 'AI Integration', d: 'Harness the power of machine learning for your business.', i: Zap },
           { t: 'Blockchain Tech', d: 'Secure, decentralized solutions for the new economy.', i: Shield },
           { t: 'NextGen Hosting', d: 'Serverless architecture with infinite scalability.', i: Cloud }
         ].map((s, i) => (
           <div key={i} className="aspect-square bg-[#0f0f11] border border-white/10 rounded-[3rem] p-12 flex flex-col justify-end group hover:border-indigo-500/50 transition-all duration-700 overflow-hidden relative shadow-2xl">
              <div className="absolute top-12 left-12 opacity-10 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 rotate-12"><s.i size={120} /></div>
              <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">{s.t}</h3>
                 <p className="opacity-40 text-sm leading-relaxed">{s.d}</p>
              </div>
           </div>
         ))}
      </div>
   </section>
);

const Target = ({ size }: any) => <BarChart3 size={size} />; // Fallback for target since target import failed

/* --- IMAGE SERVICES --- */
export const ServicesImageGrid = ({ bgColor = '#09090b', textColor = '#ffffff' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {[
         { t: 'Interior Design', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' },
         { t: 'Architecture', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
         { t: 'Product Design', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' }
       ].map((s, i) => (
         <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-square border border-white/10">
            <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
               <h4 className="text-2xl font-black uppercase tracking-tighter">{s.t}</h4>
               <p className="text-xs font-black uppercase tracking-widest opacity-60 mt-2">Professional Grade</p>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- SPLIT LAYOUT --- */
export const ServicesSplit = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto space-y-24">
       {[
         { t: 'End-to-End Development', d: 'We handle everything from initial concept to final deployment and maintenance.', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80', rev: false },
         { t: 'Strategic Consulting', d: 'Get expert advice on how to scale your business and optimize your tech stack.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', rev: true }
       ].map((s, i) => (
         <div key={i} className={`flex flex-col ${s.rev ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
            <div className="flex-1">
               <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">{s.t}</h3>
               <p className="text-lg opacity-50 mb-10 leading-relaxed">{s.d}</p>
               <ul className="space-y-4 mb-10">
                  {['React & Next.js experts', 'Cloud infrastructure scaling', 'UI/UX precision'].map(item => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm opacity-80"><CheckCircle2 className="text-indigo-400" size={18}/> {item}</li>
                  ))}
               </ul>
               <button style={{ backgroundColor: accentColor }} className="px-8 py-4 rounded-xl font-bold">Get a Quote</button>
            </div>
            <div className="flex-1 rounded-[3rem] overflow-hidden border border-white/10 aspect-video md:aspect-square">
               <img src={s.img} className="w-full h-full object-cover" />
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- AGENCY / BUSINESS --- */
export const ServicesAgencyGrid = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
       {[
         { t: 'Digital Strategy', d: 'Data-driven approaches to brand growth.' },
         { t: 'Content Creation', d: 'High-quality media that resonates.' },
         { t: 'SEO Optimization', d: 'Rank higher and attract organic traffic.' },
         { t: 'Paid Advertising', d: 'Targeted campaigns with high ROI.' }
       ].map((s, i) => (
         <div key={i} className="flex gap-8 group">
            <div style={{ backgroundColor: iconColor }} className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:rotate-12 transition-transform">
               <Zap className="text-white" size={24}/>
            </div>
            <div>
               <h4 className="text-2xl font-bold mb-2">{s.t}</h4>
               <p className="opacity-50 text-sm leading-relaxed">{s.d}</p>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- SAAS / TECH --- */
export const ServicesTechList = ({ bgColor = '#09090b', textColor = '#ffffff', iconColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-4">
       {[
         { t: 'Real-time Synchronization', d: 'Instant data updates across all connected devices.' },
         { t: 'Edge Computing', d: 'Process data closer to your users for ultra-low latency.' },
         { t: 'Automated CI/CD', d: 'Deploy features faster with robust pipelines.' }
       ].map((s, i) => (
         <div key={i} className="bg-[#111113] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-6">
               <div style={{ color: iconColor }}><Code size={32}/></div>
               <div>
                  <h4 className="font-bold text-lg">{s.t}</h4>
                  <p className="text-sm opacity-40">{s.d}</p>
               </div>
            </div>
            <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-black uppercase tracking-widest transition-all">Docmentation</button>
         </div>
       ))}
    </div>
  </section>
);

/* --- E-COMMERCE --- */
export const ServicesEcom = ({ bgColor = '#ffffff', textColor = '#0f172a', iconColor = '#4f46e5' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
     <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { t: 'Free Shipping', d: 'On orders over $100', i: Globe },
          { t: 'Secure Payment', d: '100% secure checkout', i: Lock },
          { t: '24/7 Support', d: 'Dedicated support team', i: Users },
          { t: 'Easy Returns', d: '30 day return policy', i: RotateCcw }
        ].map((s, i) => (
          <div key={i} className="text-center group">
             <div style={{ color: iconColor }} className="mb-6 flex justify-center group-hover:scale-110 transition-transform"><s.i size={40} /></div>
             <h4 className="font-bold text-lg mb-1">{s.t}</h4>
             <p className="text-xs opacity-60 uppercase font-black tracking-widest italic">{s.d}</p>
          </div>
        ))}
     </div>
  </section>
);

/* --- INTERACTIVE --- */
export const ServicesTabs = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
       <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white/5 p-2 rounded-2xl w-max mx-auto border border-white/10">
          {['Web Apps', 'Mobile', 'Design'].map((tab, i) => (
             <button key={tab} className={`px-8 py-3 rounded-xl font-bold transition-all ${i===0 ? 'bg-indigo-600 shadow-xl shadow-indigo-600/20 text-white' : 'text-white/40 hover:text-white'}`}>{tab}</button>
          ))}
       </div>
       <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-square">
             <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
          </div>
          <div>
             <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter">Enterprise Web Apps</h3>
             <p className="text-lg opacity-50 mb-10 leading-relaxed">We build scalable, secure, and high-performance web applications that drive your business forward into the digital era.</p>
             <div className="space-y-4">
                {[1,2,3].map(i => <div key={i} className="flex items-center gap-3 font-bold opacity-60"><Zap size={20} className="text-indigo-400"/> Feature Advantage Highlight {i}</div>)}
             </div>
          </div>
       </div>
    </div>
  </section>
);

const RotateCcw = ({ size }: any) => <Settings size={size} />; // Placeholder

export const allServices = {
  "services-3col": Services3Col,
  "services-cards": ServicesCards,
  "services-process": ServicesProcess,
  "services-icon-grid": ServicesIconGrid,
  "services-premium": ServicesPremium,
  "services-image": ServicesImageGrid,
  "services-split": ServicesSplit,
  "services-agency": ServicesAgencyGrid,
  "services-tech": ServicesTechList,
  "services-ecom": ServicesEcom,
  "services-tabs": ServicesTabs
};
