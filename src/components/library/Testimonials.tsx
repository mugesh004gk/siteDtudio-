
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Play, MessageSquare, ArrowRight, User, TrendingUp, CheckCircle, Award, Sparkles } from 'lucide-react';

// ─── HELPER COMPONENTS ───

const RatingStars = ({ count = 5, color = "#facc15" }: any) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < count ? color : "transparent"} className={i < count ? "" : "text-white/10"} style={{ color: i < count ? color : "" }} />
    ))}
  </div>
);

// ─── TESTIMONIAL COMPONENTS ───

export const TestimonialSingle = ({ bgColor, textColor, accentColor, authorName, authorRole, content, align = "center", isPreview }: any) => (
  <section style={{ background: bgColor, color: textColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden relative`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className={`max-w-4xl mx-auto flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} relative z-10`}>
      <Quote size={isPreview ? 32 : 64} style={{ color: accentColor }} className="mb-8 opacity-20" />
      <h2 className={`font-black tracking-tight leading-tight ${isPreview ? 'text-xl' : 'text-4xl md:text-6xl'} mb-10`}>"{content}"</h2>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <User className="text-white" />
        </div>
        <div className="text-left">
          <div className="font-bold text-lg">{authorName}</div>
          <div className="text-white/40 text-sm">{authorRole}</div>
        </div>
      </div>
    </div>
  </section>
);

export const TestimonialGridBasic = ({ bgColor, textColor, cols = 3, isPreview }: any) => {
  const colsClass = cols >= 4 ? 'md:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  const items = [
    { name: "Sarah J.", role: "CEO @ TechFlow", text: "SiteStudio optimized our entire stack in weeks. Truly innovative." },
    { name: "Mike D.", role: "Founding Engineer", text: "The cleanest UI builder I have ever used. The code output is production-grade." },
    { name: "Elena Q.", role: "Product Manager", text: "Collaboration became so much easier after we integrated SiteStudio." },
  ];

  return (
    <section style={{ background: bgColor, color: textColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${colsClass} gap-8`}>
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 relative group">
              <Quote size={24} className="text-indigo-500 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg font-medium leading-relaxed mb-8">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><User size={20} className="text-white/40"/></div>
                <div>
                   <div className="font-bold text-sm">{item.name}</div>
                   <div className="text-[10px] text-white/30 uppercase tracking-widest">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialGlassCards = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map(i => (
           <div key={i} className="relative p-1 rounded-[3rem] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[#18181b]/40 backdrop-blur-3xl border border-white/10 rounded-[2.9rem] p-10 h-full flex flex-col justify-between">
                <div>
                   <RatingStars count={5} color={accentColor} />
                   <p className="text-xl font-bold text-white mt-8 mb-10 leading-snug tracking-tight">"This is hands down the best design system our team has adopted. Visual fidelity is 10/10."</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black">UJ</div>
                   <div>
                      <div className="text-white font-bold">User Journeys</div>
                      <div className="text-white/30 text-[10px] uppercase font-black">Digital Agency</div>
                   </div>
                </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialStars = ({ bgColor, starColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-5xl mx-auto text-center">
       <div className="flex justify-center mb-12">
          <RatingStars count={5} color={starColor} />
       </div>
       <h2 className={`font-black text-white tracking-tighter uppercase ${isPreview ? 'text-2xl' : 'text-5xl md:text-7xl'} mb-8`}>Over 10,000+ Happy Builders</h2>
       <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10">We believe in the power of social proof. See why thousands of developers trust SiteStudio for their production projects.</p>
       <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition">View All Wall of Love</button>
    </div>
  </section>
);

export const TestimonialSlider = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
           <Quote size={48} className="text-white opacity-10 mb-6" />
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">WHAT THEY <br/><span className="text-white/20">SAY ABOUT US</span></h2>
           <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition"><ArrowRight size={24} className="rotate-180"/></button>
              <button style={{ backgroundColor: accentColor }} className="w-14 h-14 rounded-full flex items-center justify-center text-white hover:scale-110 transition"><ArrowRight size={24}/></button>
           </div>
        </div>
        <div className="md:w-1/2 relative">
           <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <RatingStars count={5} color={accentColor} />
              <p className="text-2xl font-medium text-white my-8 leading-relaxed italic">"The automated workflow component saved us roughly 40 hours per month. It's not just a library, it's a productivity engine."</p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/20 bg-[#111] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100" alt="user" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <div className="text-white font-bold">David Chen</div>
                    <div className="text-white/30 text-xs font-medium uppercase tracking-widest underline decoration-indigo-500/50 underline-offset-4">Principal Engineer @ Zenith</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const TestimonialVideoGrid = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[1,2,3].map(i => (
             <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-[#1a1a1c] border border-white/5 overflow-hidden relative group cursor-pointer">
                <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format`} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="video" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                   <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-white transition-colors group-hover:text-black text-white">
                      <Play size={24} fill="currentColor" />
                   </div>
                   <div className="text-white font-black uppercase text-xs tracking-[0.2em] mb-1">Marcus Thorne</div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">VP Engineering @ CoreLogic</div>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const TestimonialAvatars = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-4xl mx-auto text-center">
       <div className="flex justify-center -space-x-4 mb-10">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="w-20 h-20 rounded-full border-4 border-black bg-white/10 overflow-hidden relative group">
                <img src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150`} alt="avatar" className="w-full h-full object-cover group-hover:scale-125 transition-transform" />
             </div>
          ))}
       </div>
       <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase leading-tight">TRUSTED BY THE <span className="text-indigo-400">BEST TEAMS</span> AROUND THE GLOBE</h2>
       <p className="text-white/40 text-lg font-medium leading-relaxed italic mb-12">"SiteStudio is the only platform that allows us to iterate at the speed of light without sacrificing design consistency. It's the standard for our enterprise projects."</p>
       <div className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-2xl">
          <div className="text-white font-black text-xs uppercase tracking-widest">KATHERINE MURPHY</div>
          <div className="text-white/30 text-[10px] uppercase font-bold mt-1">HEAD OF DESIGN @ GLOBAL SYSTEMS</div>
       </div>
    </div>
  </section>
);

export const TestimonialStats = ({ bgColor, statsColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-500/20">
                <TrendingUp size={14}/> Verified Performance
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.85] uppercase">LET THE <br/><span className="text-white/20">NUMBERS SPEAK</span></h2>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <div style={{ color: statsColor }} className="text-6xl font-black tracking-tighter mb-2">99%</div>
                   <div className="text-white/30 text-xs font-black uppercase tracking-widest">CUSTOMER <br/>SATISFACTION</div>
                </div>
                <div>
                   <div style={{ color: statsColor }} className="text-6xl font-black tracking-tighter mb-2">4.9/5</div>
                   <div className="text-white/30 text-xs font-black uppercase tracking-widest">TRUSTPILOT <br/>RATING</div>
                </div>
             </div>
          </div>
          <div className="space-y-6">
             {[1,2].map(i => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                   <RatingStars count={5} color={statsColor} />
                   <p className="text-xl font-medium text-white my-6 leading-relaxed">"SiteStudio transformed our legacy system into a high-converting landing machine in under 48 hours."</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">JD</div>
                      <div className="text-white font-bold text-sm leading-none">Jameson Dell</div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  </section>
);

export const TestimonialStory = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-5xl mx-auto">
       <div className="flex items-center gap-4 mb-16 opacity-40">
          <Award size={32} />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white">CASE STUDY • SERIES 01</div>
       </div>
       <div className="space-y-12">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none italic">"WE NEVER LOOKED BACK AFTER THE FIRST DEPLOYMENT."</h2>
          <div className="w-full h-px bg-white/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <p className="text-lg text-white/50 leading-relaxed font-medium">SiteStudio didn't just give us components; it gave us a language. Our design team and development team are finally speaking the same dialect. The time-to-market reduction is literally over 300% across all our client projects.</p>
             <div className="space-y-6">
                <div>
                   <div className="text-white font-black text-xl mb-1 uppercase tracking-tight">ALEXA VANDERGRIFF</div>
                   <div className="text-white/30 text-xs uppercase tracking-widest font-bold">DIRECTOR OF INNOVATION @ NEXUS DESIGN</div>
                </div>
                <button style={{ color: accentColor }} className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest group">
                   READ FULL CASE STUDY <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const TestimonialTabs = ({ bgColor, activeColor, isPreview }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["SaaS", "E-commerce", "Enterprise", "Agencies"];
  
  return (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-4xl mx-auto text-center">
         <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-white/5 rounded-3xl border border-white/5">
            {tabs.map((tab, i) => (
               <button key={tab} onClick={() => setActiveTab(i)} 
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === i ? 'bg-white text-black shadow-2xl' : 'text-white/40 hover:text-white'}`}>
                  {tab}
               </button>
            ))}
         </div>
         <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
               className="space-y-10">
               <div className="text-6xl font-black text-white/5 select-none tracking-tighter italic uppercase">{tabs[activeTab]} FEEDBACK</div>
               <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter uppercase px-10">"THE TABS ENGINE IN SITESTUDIO ALLOWS US TO FILTER PROOF BY INDUSTRY, WHICH DOUBLED OUR LANDING CONVERSIONS."</p>
               <div className="flex items-center justify-center gap-4">
                  <div style={{ background: activeColor }} className="w-12 h-12 rounded-full flex items-center justify-center text-white"><CheckCircle /></div>
                  <div className="text-left leading-none font-bold text-white uppercase tracking-tighter">Verified Reviewer • <span className="text-white/30">SiteStudio Enterprise</span></div>
               </div>
            </motion.div>
         </AnimatePresence>
      </div>
    </section>
  );
};

export const TestimonialCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
     <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-[100px]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {[1,2,3].map(i => (
              <motion.div key={i} whileHover={{ rotateY: 15, rotateX: 5, y: -10 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-10 rounded-[3rem] bg-black/40 border border-white/10 backdrop-blur-xl group cursor-pointer shadow-2xl overflow-hidden shadow-black">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent -mr-10 -mt-10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 mb-8 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <Sparkles className="text-white" />
                 </div>
                 <RatingStars count={5} color={accentColor} />
                 <p className="text-xl font-bold text-white my-8 leading-snug">"The 3D effects and premium components are what set our projects apart from the competition."</p>
                 <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                    <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">NATHANIEL GREY</div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">CREATIVE DIR @ PIXEL</div>
                 </div>
              </motion.div>
           ))}
        </div>
     </div>
  </section>
);

export const TestimonialMasonry = ({ bgColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
         {[
            "Incredible speed and UI fidelity. Highly recommend.", 
            "The components are highly customizable and perfect for our production stack.",
            "SiteStudio is the missing piece in our tech stack. We save days of development on every project.",
            "Visual excellence at its peak.",
            "The best React library in the market right now.",
            "Clean code, premium aesthetics, and great support."
         ].map((text, i) => (
            <div key={i} className="break-inside-avoid p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/10 transition-colors">
               <RatingStars count={5} />
               <p className="text-lg text-white/60 font-medium my-6 leading-relaxed">"{text}"</p>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 font-black text-[10px] flex items-center justify-center text-white/40">U{i}</div>
                  <div className="text-white text-sm font-bold">User {i+1}</div>
               </div>
            </div>
         ))}
      </div>
   </section>
);

export const SocialProofLogos = ({ bgColor, opacity = 0.5, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-16'} px-6 border-y border-white/5`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-20 grayscale" style={{ opacity }}>
         {['Microsoft', 'Google', 'Airbnb', 'Netflix', 'Amazon', 'Spotify'].map(logo => (
            <span key={logo} className="text-white font-black text-2xl md:text-4xl tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-pointer">{logo}</span>
         ))}
      </div>
   </section>
);

export const allTestimonials = {
  TestimonialSingle,
  TestimonialGridBasic,
  TestimonialGlassCards,
  TestimonialStars,
  TestimonialSlider,
  TestimonialVideoGrid,
  TestimonialAvatars,
  TestimonialStats,
  TestimonialStory,
  TestimonialTabs,
  TestimonialCreative3D,
  TestimonialMasonry,
  SocialProofLogos
};
