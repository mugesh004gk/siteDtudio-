
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, MessageCircle, Play, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';

// ─── FAQ COMPONENTS ───

export const FAQBasicList = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12 uppercase leading-none">FAQS</h2>
      <div className="space-y-8">
        {[1,2,3].map(i => (
          <div key={i} className="group">
             <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span style={{ background: accentColor }} className="w-1.5 h-1.5 rounded-full" />
                How does the site export work?
             </h3>
             <p className="text-white/40 leading-relaxed pl-5 border-l border-white/5">You can export your site as a production-ready React package or a single HTML/CSS file. All styles are optimized for performance and SEO.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQAccordionGlass = ({ bgColor, accentColor, isPreview }: any) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-3xl mx-auto">
        { [1,2,3,4].map((i, idx) => (
          <div key={idx} className="mb-4">
            <button onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className={`w-full p-6 md:p-8 rounded-[2rem] border transition-all duration-500 flex items-center justify-between text-left ${openIndex === idx ? 'bg-white/5 border-white/20 shadow-2xl' : 'bg-[#111] border-white/5 hover:border-white/10'}`}>
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">What payment methods do you support?</span>
              <div className={`p-3 rounded-full transition-transform duration-500 ${openIndex === idx ? 'bg-white text-black rotate-180' : 'bg-white/5 text-white'}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden">
                  <div className="p-8 md:p-10 text-white/40 leading-relaxed text-lg border-x border-b border-white/10 rounded-b-[2rem] -mt-8 pt-16 bg-white/[0.02]">
                    We support all major credit cards, PayPal, and cryptocurrency payments. Our enterprise plans also support wire transfers and invoicing.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )) }
      </div>
    </section>
  );
};

export const FAQGridCards = ({ bgColor, cols = 3, isPreview }: any) => {
  const colsClass = cols >= 4 ? 'md:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${colsClass} gap-6 md:gap-8`}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#111] border border-white/5 hover:border-indigo-500/30 transition-all group shadow-xl">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-8">
                  <HelpCircle size={24} />
               </div>
               <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter tracking-tight">Is there a free trial?</h3>
               <p className="text-white/40 leading-relaxed font-medium">Yes! You can use all core features for free on up to 3 projects. No credit card required to start.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQTabsFilter = ({ bgColor, activeColor, isPreview }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = ["General", "Account", "Billing", "Developer"];
  
  return (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-white/5 rounded-3xl border border-white/5">
          {categories.map((cat, i) => (
             <button key={cat} onClick={() => setActiveTab(i)} 
                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === i ? 'bg-white text-black shadow-2xl' : 'text-white/40 hover:text-white'}`}>
                {cat}
             </button>
          ))}
        </div>
        <div className="space-y-6">
           {[1,2,3].map(i => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111] border border-white/5 hover:border-white/10 transition-all flex items-start gap-6">
                 <div style={{ background: activeColor }} className="w-3 h-3 rounded-full mt-2 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Professional question for {categories[activeTab]}?</h3>
                    <p className="text-white/40 leading-relaxed font-medium">High-fidelity answer that explains everything related to {categories[activeTab].toLowerCase()} settings and configuration.</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export const FAQSearchable = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-3xl mx-auto">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-none">HELP <span className="text-white/20">CENTER</span></h2>
          <div className="relative max-w-xl mx-auto">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
             <input type="text" placeholder="Search for answers..." className="w-full h-16 bg-[#111] border border-white/10 rounded-2xl pl-16 pr-6 text-white text-sm outline-none focus:border-indigo-500 transition shadow-2xl" />
          </div>
       </div>
       <div className="space-y-6">
          {[1,2,3].map(i => (
             <div key={i} className="p-8 rounded-2xl bg-[#111] border border-white/5 group hover:border-white/10 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Can I manage multiple projects?</h3>
                <p className="text-white/40 leading-relaxed">Absolutely. Our dashboard is built for agencies managing 100+ concurrent projects.</p>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const FAQWithIcons = ({ bgColor, iconColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-4xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {[1,2,3,4].map(i => (
             <div key={i} className="flex gap-6">
                <div style={{ color: iconColor }} className="shrink-0 mt-1 opacity-40"><Sparkles size={24} /></div>
                <div>
                   <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">AI AGENT SUPPORT</h3>
                   <p className="text-white/40 leading-relaxed font-medium">Yes, Sitestudio includes an intelligent AI agent that can build and debug components in real-time.</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const FAQSupportCTA = ({ bgColor, btnColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
             <FAQAccordionGlass bgColor="transparent" isPreview={true} />
          </div>
          <div className="p-10 rounded-[3rem] bg-indigo-600 text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
             <MessageCircle size={48} className="mb-8 rotate-12" />
             <h3 className="text-3xl font-black tracking-tight mb-4 uppercase leading-none">Still have <br/>questions?</h3>
             <p className="text-white/70 mb-10 text-lg leading-relaxed">Our support team is available 24/7 to help you with technical or billing inquiries.</p>
             <button style={{ color: btnColor }} className="w-full bg-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition flex items-center justify-center gap-3 shadow-2xl shadow-black/20">
                Contact Support <ArrowRight size={18} />
             </button>
          </div>
       </div>
    </div>
  </section>
);

export const FAQMedia = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
       <div className="aspect-video rounded-[3rem] bg-[#1a1a1c] border border-white/5 overflow-hidden relative group cursor-pointer shadow-2xl shadow-indigo-500/10">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt="demo" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                <Play size={32} fill="currentColor" />
             </div>
          </div>
       </div>
       <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-none uppercase">WATCH & <span className="text-white/20">LEARN</span></h2>
          <div className="space-y-8">
             {[1,2].map(i => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5">
                   <h3 className="text-lg font-bold text-white mb-2">Detailed tutorial for custom integrations?</h3>
                   <p className="text-white/40 leading-relaxed">Follow the video on the left to see how deep React hooks can be used with our internal API.</p>
                </div>
             ))}
          </div>
       </div>
    </div>
  </section>
);

export const FAQSteps = ({ bgColor, numberColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-4xl mx-auto">
       <div className="space-y-12">
          {[1,2,3,4].map(i => (
             <div key={i} className="flex gap-8 group">
                <div style={{ color: numberColor }} className="text-6xl font-black tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity select-none leading-none">0{i}</div>
                <div>
                   <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter pt-2">Phase {i}: Configuration</h3>
                   <p className="text-white/40 text-lg leading-relaxed font-medium">In this step, you will initialize your project environment variables and connect your primary database to the builder cloud.</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const FAQInteractive = ({ bgColor, hoverColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-5xl mx-auto flex flex-col gap-4">
       {[1,2,3,4,5].map(i => (
          <div key={i} className="relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden group cursor-pointer hover:bg-white/[0.05] transition-all">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-indigo-500 group-hover:h-1/2 transition-all duration-500" style={{ backgroundColor: hoverColor }} />
             <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 tracking-tight">How secure is my data?</h3>
                <ArrowRight size={20} className="text-white/20 group-hover:text-white transition-all group-hover:translate-x-2" />
             </div>
          </div>
       ))}
    </div>
  </section>
);

export const FAQMinimal = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-3xl mx-auto text-center">
       <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-20 uppercase leading-none">COMMON <span className="text-white/20">QUESTIONS.</span></h2>
       <div className="space-y-16">
          {[1,2,3].map(i => (
             <div key={i} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">What's the cancellation policy?</h3>
                <p className="text-white/40 leading-relaxed max-w-xl mx-auto">Cancel anytime within 30 days for a full refund. No questions asked. We believe in our product, and we want you to be 100% satisfied.</p>
                <div className="w-16 h-px bg-white/10 mx-auto mt-16" />
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const FAQCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-7xl mx-auto relative h-[500px] flex items-center justify-center">
       <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 blur-[120px]" />
       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
             <motion.div key={i} whileHover={{ rotateY: 15, rotateX: 5, y: -20 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="p-12 rounded-[3.5rem] bg-black/60 border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                <div style={{ background: accentColor }} className="absolute -top-10 -right-10 w-32 h-32 opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity" />
                <HelpCircle size={48} className="text-white opacity-20 mb-10" />
                <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-none mb-6">UNLIMITED <br/>DOMAIN EXPORT?</h3>
                <p className="text-white/40 leading-relaxed font-medium">Yes, the premium plan allows you to export and host your projects on unlimited domains without any additional royalty fees.</p>
             </motion.div>
          ))}
       </div>
    </div>
  </section>
);

export const allFAQs = {
  FAQBasicList,
  FAQAccordionGlass,
  FAQGridCards,
  FAQTabsFilter,
  FAQSearchable,
  FAQWithIcons,
  FAQSupportCTA,
  FAQMedia,
  FAQSteps,
  FAQInteractive,
  FAQMinimal,
  FAQCreative3D
};
