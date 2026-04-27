
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Globe, Share2, Facebook, Twitter, Github, Linkedin, Apple, Play, Sparkles, ArrowRight, MousePointer2 } from 'lucide-react';

// ─── FOOTER COMPONENTS ───

export const FooterBasic = ({ bgColor, textColor, accentColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-20'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div style={{ backgroundColor: accentColor }} className="w-8 h-8 rounded-xl shadow-lg border border-white/10" />
        <span className="text-xl font-black text-white tracking-tighter">SiteStudio.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
        <button className="hover:text-white transition">Product</button>
        <button className="hover:text-white transition">Agency</button>
        <button className="hover:text-white transition">Pricing</button>
        <button className="hover:text-white transition">Support</button>
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-white/20">© 2026 SiteStudio. All rights reserved.</div>
    </div>
  </footer>
);

export const FooterGrid4Col = ({ bgColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      {[1,2,3,4].map(i => (
        <div key={i}>
           <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">CATEGORY 0{i}</h4>
           <div className="flex flex-col gap-4 text-sm font-bold text-white/60">
              <button className="text-left hover:text-white hover:translate-x-1 transition-all">Documentation</button>
              <button className="text-left hover:text-white hover:translate-x-1 transition-all">Components</button>
              <button className="text-left hover:text-white hover:translate-x-1 transition-all">API Reference</button>
              <button className="text-left hover:text-white hover:translate-x-1 transition-all">Showcase</button>
           </div>
        </div>
      ))}
    </div>
  </footer>
);

export const FooterBranding = ({ bgColor, accentColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
       <div className="md:w-1/3">
          <div className="flex items-center gap-3 mb-8 group cursor-pointer">
             <div style={{ backgroundColor: accentColor }} className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"><Sparkles /></div>
             <span className="text-2xl font-black text-white tracking-tighter uppercase italic">SiteStudio.</span>
          </div>
          <p className="text-white/40 leading-relaxed font-bold tracking-tight">The ultimate high-fidelity UI collection built for elite agencies and solo developers. Speed, precision, and elegance in every export.</p>
       </div>
       <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-12">
          {[1,2,3].map(i => (
             <div key={i}>
                 <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-2">SECTION</h4>
                 <div className="space-y-3">
                    <button className="text-white/30 hover:text-white block text-sm transition-colors">Resources</button>
                    <button className="text-white/30 hover:text-white block text-sm transition-colors">Integrations</button>
                    <button className="text-white/30 hover:text-white block text-sm transition-colors">Community</button>
                 </div>
             </div>
          ))}
       </div>
    </div>
  </footer>
);

export const FooterSocialLinks = ({ bgColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-20'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
       <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Connect <span className="text-white/20">Everywhere.</span></h2>
       <div className="flex flex-wrap justify-center gap-4">
          {[Twitter, Facebook, Linkedin, Github].map((Icon, i) => (
             <button key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all shadow-2xl">
                <Icon size={20} />
             </button>
          ))}
       </div>
       <div className="text-[10px] font-black uppercase text-white/20 tracking-widest">EST. 2026 / SITESTUDIO GLOBAL</div>
    </div>
  </footer>
);

export const FooterNewsletter = ({ bgColor, btnColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto">
       <div className="p-12 md:p-20 bg-indigo-600 rounded-[4rem] relative overflow-hidden group shadow-2xl shadow-indigo-600/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-40 -mt-40 blur-[100px]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-6">THE AGENTIC <br/>REVOLUTION.</h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">Join over 10,000 developers receiving weekly UI insights and early access to new libraries.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Email Address" className="flex-1 h-16 bg-white/10 border border-white/20 rounded-2xl px-6 text-white text-sm outline-none focus:bg-white/20 transition shadow-2xl" />
                <button style={{ color: btnColor }} className="h-16 px-10 bg-white rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20">Subscribe Now</button>
             </div>
          </div>
       </div>
    </div>
  </footer>
);

export const FooterContactInfo = ({ bgColor, iconColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
       <div className="lg:col-span-1">
          <h1 className="text-3xl font-black text-white tracking-tighter mb-4 uppercase leading-none">Support.</h1>
          <p className="text-white/40 text-sm font-bold tracking-tight">Available 24/7 for technical inquiries.</p>
       </div>
       {[
          { label: "PHONE", val: "+1 (555) 012-3456", icon: <Phone /> },
          { label: "EMAIL", val: "hi@sitestudio.io", icon: <Mail /> },
          { label: "HQ", val: "Palo Alto, CA", icon: <MapPin /> }
       ].map((item, i) => (
          <div key={i} className="flex gap-6 group cursor-pointer underline decoration-white/5 underline-offset-8 hover:decoration-indigo-500 transition-all">
             <div style={{ color: iconColor }} className="shrink-0 group-hover:scale-125 transition-transform">{React.cloneElement(item.icon, { size: 24 })}</div>
             <div>
                <div className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] mb-1">{item.label}</div>
                <div className="text-white font-bold tracking-tight">{item.val}</div>
             </div>
          </div>
       ))}
    </div>
  </footer>
);

export const FooterWithMap = ({ bgColor, accentColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 items-center bg-[#111] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
       <div className="p-12 lg:p-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase mb-10">WHERE <br/><span className="text-white/20">WE BUILD.</span></h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md">Our global offices span across San Francisco, London, and Tokyo. Visit us for an in-person deep dive.</p>
          <button style={{ backgroundColor: accentColor }} className="px-10 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-2xl shadow-indigo-600/20 active:scale-95 transition-all">Get Directions</button>
       </div>
       <div className="h-[400px] lg:h-full bg-[#1a1a1c] relative">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" alt="map" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div style={{ backgroundColor: accentColor }} className="w-10 h-10 rounded-full animate-ping opacity-20" />
             <div style={{ backgroundColor: accentColor }} className="w-4 h-4 rounded-full absolute shadow-[0_0_20px_#6366f1]" />
          </div>
       </div>
    </div>
  </footer>
);

export const FooterLegal = ({ bgColor, textColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-12'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: textColor }}>
       <div className="text-white/20">© 2026 SITESTUDIO / AGENTIC ENGINES</div>
       <div className="flex flex-wrap justify-center gap-10">
          <button className="hover:text-white transition decoration-indigo-500/0 hover:decoration-indigo-500/100 underline underline-offset-4 decoration-2">Privacy Policy</button>
          <button className="hover:text-white transition">Terms of Service</button>
          <button className="hover:text-white transition">Cookie Settings</button>
          <button className="hover:text-white transition">Licenses</button>
       </div>
    </div>
  </footer>
);

export const FooterAppDownload = ({ bgColor, btnColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-20'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl">
       <div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none mb-3">SITESTUDIO ON THE GO.</h2>
          <p className="text-white/30 text-sm font-bold uppercase tracking-widest">DOWNLOAD OUR MOBILE DASHBOARD TODAY.</p>
       </div>
       <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-10 py-5 bg-white rounded-2xl flex items-center gap-4 text-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-500/10">
             <Apple size={24} fill="currentColor" />
             <div className="text-left leading-none font-black text-xs uppercase tracking-tight">APP STORE</div>
          </button>
          <button className="px-10 py-5 bg-black rounded-2xl flex items-center gap-4 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-500/10">
             <Play size={24} fill="currentColor" />
             <div className="text-left leading-none font-black text-xs uppercase tracking-tight">GOOGLE PLAY</div>
          </button>
       </div>
    </div>
  </footer>
);

export const FooterMinimal = ({ bgColor, textColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-16'} px-6 border-t border-white/5 text-center`}>
    <div className="max-w-4xl mx-auto space-y-8" style={{ color: textColor }}>
       <h1 className="text-xl font-black text-white tracking-[0.5em] uppercase italic">SITESTUDIO.</h1>
       <div className="flex flex-wrap justify-center gap-6 opacity-30 text-[10px] font-black uppercase tracking-widest">
          <span>Journal</span><span>Projects</span><span>Careers</span><span>Press</span>
       </div>
       <div className="w-12 h-px bg-white/10 mx-auto" />
       <div className="text-[9px] font-black uppercase tracking-[0.4em] opacity-10 leading-relaxed">ALL COMPONENTS ARE PRODUCTION-GRADE. <br/>EXPORT READY FOR NEXT.JS AND VITE.</div>
    </div>
  </footer>
);

export const FooterInteractive = ({ bgColor, hoverColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-t border-white/5`}>
    <div className="max-w-7xl mx-auto flex flex-col gap-1">
       {[
          { label: "INSTAGRAM", handle: "@SITESTUDIO.IO", icon: <Share2 /> },
          { label: "LINKEDIN", handle: "SITE-STUDIO-CORP", icon: <Linkedin /> },
          { label: "GITHUB", handle: "GENTIC-UI", icon: <Github /> }
       ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group cursor-pointer">
             <div className="flex items-center gap-10">
                <span className="text-4xl md:text-6xl font-black text-white/5 group-hover:text-white transition-all group-hover:italic">{item.label}</span>
                <span className="text-white/20 text-xs font-black uppercase tracking-widest hidden md:block">{item.handle}</span>
             </div>
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all" style={{ backgroundColor: hoverColor }}>
                <ArrowRight size={24} />
             </div>
          </div>
       ))}
    </div>
  </footer>
);

export const FooterCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
  <footer style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 perspective-1000">
       <motion.div whileHover={{ rotateY: 10, rotateX: -5, y: -20 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="lg:w-2/3 p-1 rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-white/5 to-purple-500/20 shadow-2xl relative group">
          <div className="bg-[#09090b] rounded-[3.9rem] p-12 md:p-20 relative overflow-hidden">
             <div style={{ background: accentColor }} className="absolute -top-20 -right-20 w-80 h-80 opacity-5 rounded-full blur-[120px] pointer-events-none" />
             <div className="flex items-center gap-4 mb-20">
                <div style={{ background: accentColor }} className="w-4 h-4 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase text-white/20 tracking-[0.5em]">System Status: Ready</span>
             </div>
             <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic mb-10 group-hover:text-indigo-400 transition-colors">THE END <br/>IS JUST <br/><span className="text-white/20">THE START.</span></h2>
             <button className="flex items-center gap-4 text-white font-black uppercase text-xs tracking-widest group-hover:gap-10 transition-all">Back to Top <ArrowRight size={18} className="-rotate-90" /></button>
          </div>
       </motion.div>
       <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="flex-1 p-12 bg-[#111] border border-white/5 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between">
             <Globe size={48} className="text-white/5 absolute -top-4 -right-4" />
             <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">OFFICES</div>
             <div className="text-2xl font-black text-white italic tracking-tight uppercase">S.F. / LONDON / TOKYO</div>
          </div>
          <div className="flex-1 p-12 bg-indigo-600 border border-white/5 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between group cursor-pointer">
             <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">CAREERS</div>
             <div className="text-2xl font-black text-white italic tracking-tight uppercase group-hover:underline">JOIN THE CORE TEAM.</div>
          </div>
       </div>
    </div>
  </footer>
);

export const allFooters = {
  FooterBasic,
  FooterGrid4Col,
  FooterBranding,
  FooterSocialLinks,
  FooterNewsletter,
  FooterContactInfo,
  FooterWithMap,
  FooterLegal,
  FooterAppDownload,
  FooterMinimal,
  FooterInteractive,
  FooterCreative3D
};
