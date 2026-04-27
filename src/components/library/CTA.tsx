
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Star, Play, Check, Send, Sparkles, Zap, Shield, Heart } from 'lucide-react';

// ─── CTA COMPONENTS ───

export const CtaBasic = ({ bgColor, btnColor, heading, subheading, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
      <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
        {heading || "READY TO ACCELERATE?"}
      </h2>
      <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
        {subheading || "Join 10,000+ developers building with SiteStudio. The ultimate UI engine for production projects."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button style={{ backgroundColor: btnColor }} className="px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
           Get Started Now <ArrowRight size={18} />
        </button>
        <button className="px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest text-white/40 border border-white/5 hover:bg-white/5 hover:text-white transition-all">
           View Documentation
        </button>
      </div>
    </div>
  </section>
);

export const CtaFullWidth = ({ bgColor, btnColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-32'} px-6 relative overflow-hidden group`}>
    <div className="absolute top-0 right-0 w-[800px] h-full bg-indigo-500/5 blur-[150px] -rotate-12 translate-x-1/2" />
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
       <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white"><Sparkles size={20}/></div>
              <span className="text-[10px] font-black uppercase text-white tracking-[0.5em]">SYSTEM ACCESS GRANTED</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.8] mb-4 uppercase">BUILD YOUR <br/><span className="text-white/20 italic">VISION.</span></h2>
       </div>
       <button style={{ color: bgColor === '#ffffff' ? '#000' : bgColor, backgroundColor: btnColor }} className="px-16 py-8 rounded-[2.5rem] font-black text-xl uppercase tracking-tighter hover:scale-110 active:scale-95 transition-all shadow-[0_20px_80px_rgba(255,255,255,0.1)] flex items-center gap-4">
          Activate Node <Zap size={24} fill="currentColor" />
       </button>
    </div>
  </section>
);

export const CtaSplit = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
       <div className="p-12 md:p-20 bg-indigo-600 rounded-[4rem] relative overflow-hidden shadow-2xl group border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-6 italic group-hover:translate-x-4 transition-transform duration-500">START <br/>SHIPPING.</h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed max-w-sm">Direct export to Next.js, Vite, or Raw HTML/Tailwind. No compromises.</p>
          <div className="flex gap-4">
             <button className="bg-white text-black p-4 rounded-2xl hover:scale-110 transition"><Rocket size={24}/></button>
             <button className="bg-white/10 text-white p-4 rounded-2xl hover:bg-white/20 transition backdrop-blur-md"><ArrowRight size={24}/></button>
          </div>
       </div>
       <div className="space-y-12">
          <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">THE MOST <br/>POWERFUL <br/><span className="text-white/20">ENGINE.</span></h3>
          <p className="text-white/40 text-xl font-medium leading-relaxed">Scale from zero to production in hours. SiteStudio delivers high-fidelity modules for every conceivable use case.</p>
          <button style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 group hover:gap-10 transition-all">
             EXPLORE DOCUMENTATION <ArrowRight size={18} />
          </button>
       </div>
    </div>
  </section>
);

export const CtaCard = ({ bgColor, cardBg, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-4xl mx-auto p-1 rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-white/5 to-purple-500/20 shadow-2xl">
       <div style={{ background: cardBg || '#09090b' }} className="rounded-[3.9rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]" />
          <div className="relative z-10">
             <div className="flex justify-center mb-8 gap-4">
                {[1,2,3].map(i => <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/20"><Star size={20} /></div>)}
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">ELITE ACCESS ONLY</h2>
             <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">Lock in your premium workspace and receive all future component updates for lifetime. Final call for founder memberships.</p>
             <button className="bg-white text-black px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl shadow-indigo-500/20">Claim Access</button>
          </div>
       </div>
    </div>
  </section>
);

export const CtaWithForm = ({ bgColor, btnColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-indigo-600/20">
       <div className="absolute top-0 right-0 w-80 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
       <div className="flex-1 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-6">READY TO SHIP?</h2>
          <p className="text-white/60 text-lg max-w-md font-medium italic">Join our early access roster and receive high-fidelity components directly in your inbox daily.</p>
       </div>
       <div className="w-full lg:w-[500px] relative z-10">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="professional@email.com" className="flex-1 h-16 bg-white/10 border border-white/20 rounded-2xl px-6 text-white text-sm outline-none focus:bg-white/20 transition shadow-2xl" />
             <button style={{ color: bgColor === '#ffffff' ? '#000' : bgColor, backgroundColor: btnColor || '#fff' }} className="h-16 px-10 bg-white rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl shadow-black/10">JOIN NOW</button>
          </form>
          <div className="mt-6 flex items-center gap-4 text-white/40 text-[10px] font-black uppercase tracking-widest px-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-indigo-600 bg-[#333]" />)}
             </div>
             <span>10K developers joined today.</span>
          </div>
       </div>
    </div>
  </section>
);

export const CtaImageBackground = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-40'} px-6 overflow-hidden relative flex flex-col items-center justify-center text-center`}>
      <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=1500" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-[10s]" alt="cta" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto shadow-2xl shadow-black">
         <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="flex justify-center mb-10 text-white/50"><Rocket size={50}/></motion.div>
         <h2 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12">THE ONLY <br/><span className="text-white/20">LIMIT IS...</span></h2>
         <button className="bg-white text-black px-16 py-8 rounded-[2.5rem] font-black text-xl tracking-tighter uppercase hover:scale-110 active:scale-95 transition-all shadow-[0_20px_100px_rgba(255,255,255,0.2)]">START BUILDING</button>
      </div>
  </section>
);

export const CtaVideoBackground = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'h-[500px]' : 'h-screen'} relative overflow-hidden flex flex-col items-center justify-center text-center px-6`}>
      <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" alt="video" />
      <div className="absolute inset-0 bg-[#09090b]/80" />
      <div className="relative z-10">
         <div className="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center text-white mx-auto mb-12 hover:scale-110 transition group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:shadow-white/20"><Play size={28} fill="currentColor" /></div>
         </div>
         <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 italic scale-x-110">EXPERIENCE <br/>THE ENGINE.</h2>
         <button className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl">WATCH DEMO VIDEO</button>
      </div>
  </section>
);

export const CtaSocialProof = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 relative shadow-2xl">
       <div className="flex-1">
          <div className="flex items-center gap-1 mb-8">
             {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={accentColor || '#fbbf24'} className="text-[#fbbf24]" />)}
             <span className="ml-3 text-[10px] font-black text-white uppercase tracking-widest">4.9/5 RATING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-6">TRUSTED BY <br/><span className="text-indigo-400">10,000+ AGENTS.</span></h2>
          <div className="flex flex-wrap gap-10 opacity-30">
              <span className="text-xl font-black italic uppercase">Metaphor.</span>
              <span className="text-xl font-black italic uppercase">Hyperion.</span>
              <span className="text-xl font-black italic uppercase">Nebula.</span>
          </div>
       </div>
       <div className="shrink-0 space-y-4">
           <button className="w-full bg-white text-black px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition shadow-2xl">JOIN THE NETWORK</button>
           <p className="text-center text-[10px] font-black text-white/30 uppercase tracking-widest">NO CREDIT CARD REQUIRED</p>
       </div>
    </div>
  </section>
);

export const CtaInteractive = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="max-w-7xl mx-auto p-20 bg-indigo-600 rounded-[5rem] flex flex-col items-center text-center relative group cursor-crosshair shadow-2xl shadow-indigo-600/20 overflow-hidden">
       <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -ml-40 -mt-40 group-hover:scale-150 transition-transform duration-[2s]" />
       <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/20 rounded-full blur-[100px] -mr-40 -mb-40" />
       
       <h2 className="text-6xl md:text-9xl font-black text-white tracking-[1.5em] md:tracking-[2em] translate-x-[0.5em] md:translate-x-[1em] mb-12 uppercase leading-none italic">INTERACTIVE</h2>
       <div className="w-32 h-32 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all text-xs font-black uppercase tracking-widest">SEND NOW</div>
       <div className="mt-12 text-white/20 text-[10px] font-black uppercase tracking-[1em]">SYSTEM UNDER LOAD</div>
    </motion.div>
  </section>
);

export const CtaStickyBar = ({ bgColor, btnColor, isPreview }: any) => (
  <div className={`w-full ${isPreview ? 'relative mt-40' : 'fixed bottom-4 left-0 right-0'} z-[200] px-4 md:px-6`}>
     <div style={{ background: bgColor || '#111' }} className="max-w-7xl mx-auto bg-[#111] backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex items-center justify-between gap-8 group">
        <div className="flex items-center gap-4 hidden md:flex">
           <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white"><Rocket size={20}/></div>
           <div>
              <div className="text-white font-black text-xs uppercase tracking-widest leading-none mb-1">FOUNDER SPECIAL</div>
              <div className="text-white/40 text-[10px] font-medium tracking-tight">Only 12 slots remaining in the early roster.</div>
           </div>
        </div>
        <div className="flex-1 text-center md:text-left md:hidden">
           <div className="text-white font-black text-[10px] uppercase tracking-widest leading-none">FOUNDER SPECIAL • JOIN NOW</div>
        </div>
        <button style={{ backgroundColor: btnColor || '#fff' }} className="px-8 py-4 bg-white rounded-2xl font-black text-[10px] uppercase tracking-widest text-black hover:scale-110 active:scale-95 transition-all shadow-xl shadow-white/5">GET ACCESS</button>
     </div>
  </div>
);

export const CtaMinimal = ({ bgColor, textColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-20'} px-6 border-y border-white/5 flex flex-col items-center`}>
    <div className="max-w-4xl mx-auto text-center" style={{ color: textColor }}>
       <h1 className="text-4xl md:text-8xl font-black text-white tracking-widest uppercase mb-16 underline underline-offset-[20px] decoration-white/5">BUILD. SHIP. REPEAT.</h1>
       <div className="flex gap-12 justify-center items-center">
          <button className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition">START NOW</button>
          <div className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_15px_#6366f1]" />
          <button className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition underline">READ DOCS</button>
       </div>
    </div>
  </section>
);

export const CtaCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 perspective-1000 overflow-hidden`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div whileHover={{ rotateY: 15, rotateX: 5, y: -20, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
           className="flex-1 p-1 rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-white/5 to-purple-500/20 shadow-2xl relative group">
           <div className="bg-[#09090b] rounded-[3.9rem] p-16 md:p-24 relative overflow-hidden h-full">
              <div style={{ background: accentColor }} className="absolute -top-20 -right-20 w-80 h-80 opacity-5 rounded-full blur-[100px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-20 relative z-10">
                  <div style={{ background: accentColor }} className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"><Sparkles size={24}/></div>
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-[0.5em]">PREMIUM TIER</div>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-20 group-hover:text-indigo-400 transition-all duration-500">JOIN THE <br/>FUTURE.</h2>
              <div className="flex items-center gap-10 relative z-10">
                 <button style={{ backgroundColor: accentColor }} className="px-10 py-5 rounded-2xl text-black font-black uppercase text-xs tracking-widest shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform flex items-center gap-3">Activate <ArrowRight size={18}/></button>
                 <span className="text-[10px] font-black uppercase text-white/10 tracking-[0.2em] italic">NEON SIGNATURE ENGINE V.2</span>
              </div>
           </div>
        </motion.div>
        <div className="md:w-1/3 flex flex-col gap-8">
            <div className="flex-1 p-12 bg-[#111] border border-white/5 rounded-[3.5rem] flex flex-col justify-between group cursor-pointer hover:bg-white/[0.03] transition-all shadow-xl">
               <Shield className="text-white/5 group-hover:text-white/20 transition-all" size={48} />
               <div>
                  <div className="text-2xl font-black text-white italic tracking-tighter uppercase">ENTERPRISE <br/>PORTAL.</div>
                  <div className="mt-4 text-[10px] font-black text-white/20 uppercase tracking-widest">VIEW SECURITY DOCS</div>
               </div>
            </div>
            <div className="flex-1 p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] flex flex-col justify-between group cursor-pointer hover:bg-white/[0.03] transition-all shadow-xl ring-2 ring-indigo-500/0 hover:ring-indigo-500/20">
               <Heart className="text-white/5 group-hover:text-red-500/50 transition-all" size={48} />
               <div>
                  <div className="text-2xl font-black text-white italic tracking-tighter uppercase">COMMUNITY <br/>LOGOUT.</div>
                   <div className="mt-4 text-[10px] font-black text-white/20 uppercase tracking-widest">SITESTUDIO NETWORK</div>
               </div>
            </div>
        </div>
    </div>
  </section>
);

export const allCTAs = {
  CtaBasic,
  CtaFullWidth,
  CtaSplit,
  CtaCard,
  CtaWithForm,
  CtaImageBackground,
  CtaVideoBackground,
  CtaSocialProof,
  CtaInteractive,
  CtaStickyBar,
  CtaMinimal,
  CtaCreative3D
};
