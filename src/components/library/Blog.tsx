
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User, Calendar, Tag, Search, MessageSquare, Briefcase, Share2, Sparkles, BookOpen } from 'lucide-react';

// ─── BLOG COMPONENTS ───

export const BlogBasicList = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-4xl mx-auto space-y-12">
      {[1,2,3].map(i => (
        <div key={i} className="group cursor-pointer">
           <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em]">MARCH 24, 2026</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.3em]">ENGINEERING</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 transition-colors group-hover:text-indigo-400 uppercase leading-none italic">Scaling React architectures for 2026.</h2>
           <p className="text-white/40 text-lg leading-relaxed line-clamp-2">How we built the world's fastest UI engine using nothing but raw speed and determination.</p>
           <div className="mt-8 w-full h-px bg-white/5 group-hover:bg-white/10 transition-colors" />
        </div>
      ))}
    </div>
  </section>
);

export const BlogGrid3Col = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map(i => (
          <div key={i} className="group cursor-pointer">
             <div className="aspect-[16/10] bg-[#1a1a1c] border border-white/5 rounded-[2rem] mb-6 overflow-hidden relative shadow-2xl">
                <img src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600`} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="blog" />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Design</div>
             </div>
             <h3 className="text-2xl font-black text-white mb-3 tracking-tighter leading-tight group-hover:text-indigo-400 transition-colors">THE ART OF MINIMAL INTERFACES.</h3>
             <p className="text-white/40 text-sm leading-relaxed line-clamp-2">Exploring why less is always more in the current design landscape.</p>
             <div className="flex items-center gap-4 mt-6 text-white/20">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Clock size={14}/> 4 MIN READ</div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const BlogHeroFeatured = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-7xl mx-auto">
       <div className="relative aspect-[21/9] rounded-[3.5rem] overflow-hidden group cursor-pointer border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s]" alt="featured" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 md:p-20 max-w-4xl">
             <div style={{ background: accentColor }} className="inline-block px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 shadow-2xl">FEATURED STORY</div>
             <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">THE FUTURE OF <br/>GENESIS CLOUD.</h2>
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
                   <div className="text-white font-bold text-sm">Alexander Pierce</div>
                </div>
                <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest"><Calendar size={14}/> APRIL 02, 2026</div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const BlogGlassCards = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       {[1,2,3].map(i => (
          <div key={i} className="relative group">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative bg-[#18181b]/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 h-full flex flex-col hover:border-white/20 transition-all">
                <div className="aspect-square rounded-2xl bg-white/5 mb-8 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" alt="card" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase leading-none">DEBUGGING AT SCALE.</h3>
                <p className="text-white/40 leading-relaxed mb-auto pb-10">How we managed 10M concurrent connections using Rust and a dream.</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                   <span style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                   <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform h-5 w-5" />
                </div>
             </div>
          </div>
       ))}
    </div>
  </section>
);

export const BlogWithSidebar = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
       <div className="flex-1 space-y-16">
          {[1,2].map(i => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-[3.5rem] bg-[#111] border border-white/5 mb-8 overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1550439062-609e15302271?q=80&w=800" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1s]" alt="post" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6 group-hover:text-indigo-500 transition-colors uppercase italic">Automating the entire development pipeline.</h3>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/50"><User size={14}/> BY ADMIN</div>
                   <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/50"><MessageSquare size={14}/> 12 COMMENTS</div>
                </div>
             </div>
          ))}
       </div>
       <div className="w-full lg:w-80 space-y-12">
          <div className="p-8 rounded-[2.5rem] bg-[#111] border border-white/5">
             <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-8">CATEGORIES</h4>
             <div className="space-y-4">
                {['Engineering', 'Design', 'Product', 'Culture'].map(cat => (
                   <button key={cat} className="w-full flex items-center justify-between text-white/60 hover:text-white transition group">
                      <span className="font-bold text-sm tracking-tight">{cat}</span>
                      <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-indigo-600 transition tracking-tighter">12</span>
                   </button>
                ))}
             </div>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20">
             <BookOpen size={32} className="mb-6" />
             <h4 className="text-2xl font-black leading-tight uppercase tracking-tighter mb-4">JOIN OUR <br/>NEWSLETTER.</h4>
             <p className="text-white/70 text-sm mb-8 leading-relaxed">Weekly insights into the world of agentic code.</p>
             <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm mb-3 outline-none focus:bg-white/20" />
             <button className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition active:scale-95 shadow-2xl shadow-black/20">Subscribe</button>
          </div>
       </div>
    </div>
  </section>
);

export const BlogTabFilter = ({ bgColor, activeColor, isPreview }: any) => {
   const [activeTab, setActiveTab] = useState(0);
   const cats = ["All Posts", "Technology", "Design", "DevOps"];
   
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-20 p-2 bg-white/5 rounded-3xl border border-white/5 max-w-2xl mx-auto">
               {cats.map((cat, i) => (
                  <button key={cat} onClick={() => setActiveTab(i)} 
                     className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === i ? 'bg-white text-black shadow-2xl' : 'text-white/40 hover:text-white'}`}>
                     {cat}
                  </button>
               ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {[1,2,3,4].map(i => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                     <div className="w-full md:w-56 aspect-square bg-[#111] rounded-[2.5rem] overflow-hidden shrink-0 border border-white/5">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="thumb" />
                     </div>
                     <div className="flex flex-col justify-center">
                        <div style={{ color: activeColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 italic">{cats[activeTab === 0 ? 1 : activeTab]}</div>
                        <h3 className="text-3xl font-black text-white leading-none mb-4 group-hover:underline uppercase tracking-tighter italic decoration-indigo-500/50 underline-offset-8">THE FUTURE OF SEMICONDUCTOR WORKFLOWS.</h3>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">BY SARAH JENKINS • 5 MIN READ</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const BlogSearchable = ({ bgColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-4xl mx-auto">
         <div className="relative mb-20">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20" size={24} />
            <input type="text" placeholder="Search the archives..." className="w-full h-24 bg-[#111] border border-white/10 rounded-[2.5rem] pl-20 pr-10 text-xl md:text-2xl text-white font-black uppercase tracking-tighter focus:border-indigo-500 outline-none transition shadow-2xl placeholder:opacity-20" />
         </div>
         <div className="space-y-4">
            {[1,2,3].map(i => (
               <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between group cursor-pointer">
                  <div>
                     <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.4em] mb-2 block">April 07, 2026</span>
                     <h3 className="text-2xl font-black text-white tracking-widest uppercase">Deep Learning in React Native.</h3>
                  </div>
                  <ArrowRight className="text-white/10 group-hover:text-white group-hover:translate-x-4 transition-all" size={32} />
               </div>
            ))}
         </div>
      </div>
   </section>
);

export const BlogAuthorGrid = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto">
         <h2 className="text-center text-4xl font-black text-white mb-20 uppercase tracking-[0.2em] leading-none">OUR TOP <span className="text-white/20">WRITERS</span></h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
               <div key={i} className="p-10 rounded-[3rem] bg-[#111] border border-white/5 text-center group hover:border-indigo-500/30 transition-all">
                  <div className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-8 overflow-hidden border-4 border-black shadow-2xl group-hover:scale-110 transition-transform">
                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" alt="author" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Julian Vance</h4>
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-6">Staff Engineer</p>
                  <div className="flex justify-center gap-4 text-white/20">
                     <Share2 size={16} className="hover:text-white transition" />
                     <Briefcase size={16} className="hover:text-white transition" />
                  </div>
               </div>
            ))}
         </div>
      </div>
   </section>
);

export const BlogMetaDetail = ({ bgColor, tagColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 border-b border-white/5`}>
      <div className="max-w-4xl mx-auto">
         <div className="flex flex-wrap gap-3 mb-10">
            {['React', 'Next.js', 'Scaling', 'AI'].map(tag => (
               <span key={tag} style={{ backgroundColor: tagColor + '20', color: tagColor, borderColor: tagColor + '30' }} className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border">#{tag}</span>
            ))}
         </div>
         <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase mb-16">THE ANATOMY OF A <br/><span className="text-white/20">PERFECT BUNDLE.</span></h1>
         <div className="flex flex-col md:flex-row items-start md:items-center gap-12 border-t border-white/5 pt-12">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-full bg-white/10" />
               <div>
                  <div className="text-white font-black text-sm uppercase">Marcus Aurelius</div>
                  <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Philosophy Lead</div>
               </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/5" />
            <div className="flex gap-12">
               <div>
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-1">DATE</div>
                  <div className="text-white font-bold text-sm">APR 07, 2026</div>
               </div>
               <div>
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-1">READ TIME</div>
                  <div className="text-white font-bold text-sm">12 MIN</div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

export const BlogInteractiveGrid = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[1,2,3,4,5,6].map(i => (
               <div key={i} className="aspect-square bg-[#111] overflow-hidden relative group cursor-pointer border border-white/5">
                  <img src="https://images.unsplash.com/photo-1511376761162-bb37e753f7c4?q=80&w=600" className="w-full h-full object-cover opacity-20 filter contrast-150 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1s]" alt="interactive" />
                  <div className="absolute inset-x-0 bottom-0 p-12 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                     <span style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Series 0{i}</span>
                     <h3 className="text-4xl font-black text-white leading-[0.8] mb-6 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">RECODING <br/>THE MATRIX.</h3>
                     <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={16} />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </section>
);

export const BlogMinimalClean = ({ bgColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-3xl mx-auto">
         <h2 className="text-5xl font-black text-white mb-20 tracking-tighter text-center uppercase">JOURNAL.</h2>
         <div className="space-y-24">
            {[1,2,3].map(i => (
               <div key={i} className="text-center group">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-10 block">ISSUE 0{i} / 2026</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 uppercase group-hover:italic transition-all">The aesthetics of functional programming in modern UI.</h3>
                  <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-medium">Why we are moving back to server-side components and why you should care about the bundle size before it's too late.</p>
                  <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border-b-2 border-indigo-400/20 pb-2 hover:border-indigo-400 transition-all">Read Journal</button>
               </div>
            ))}
         </div>
      </div>
   </section>
);

export const BlogCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 perspective-1000">
         {[1,2,3].map(i => (
            <motion.div key={i} whileHover={{ rotateY: 10, y: -20 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
               className="flex-1 p-1 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent group cursor-pointer shadow-2xl">
               <div className="bg-[#09090b] rounded-[2.9rem] p-10 h-full relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-indigo-500/30 transition-all" />
                  <div>
                     <Sparkles style={{ color: accentColor }} className="mb-8" />
                     <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-8">AI-NATIVE <br/>INTERFACE <br/>DESIGN.</h3>
                     <p className="text-white/30 text-xs font-black uppercase tracking-widest mb-10">Chapter 0{i} • Series A</p>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Available Now</span>
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight size={18} />
                     </div>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
   </section>
);

export const allBlogs = {
  BlogBasicList,
  BlogGrid3Col,
  BlogHeroFeatured,
  BlogGlassCards,
  BlogWithSidebar,
  BlogTabFilter,
  BlogSearchable,
  BlogAuthorGrid,
  BlogMetaDetail,
  BlogInteractiveGrid,
  BlogMinimalClean,
  BlogCreative3D
};
