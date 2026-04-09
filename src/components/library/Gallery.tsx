
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Play, X, ChevronLeft, ChevronRight, Search, Filter, Camera, Heart, Share2, Plus, Sparkles, ArrowRight } from 'lucide-react';

// ─── GALLERY COMPONENTS ───

export const GalleryBasicGrid = ({ bgColor, cols = 3, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 md:gap-8`}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-square bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden group cursor-pointer relative shadow-2xl">
            <img src={`https://images.unsplash.com/photo-1518005020453-6ec241dcb140?q=80&w=600`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="gallery" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><Maximize2 size={20}/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GalleryGrid4Col = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="aspect-square bg-[#111] border border-white/5 rounded-3xl overflow-hidden group relative">
             <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=400" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" alt="grid" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GalleryMasonry = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
       {[
         { h: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600" },
         { h: "aspect-square", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600" },
         { h: "aspect-[9/16]", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600" },
         { h: "aspect-[4/5]", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600" },
         { h: "aspect-video", img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=600" },
         { h: "aspect-square", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600" }
       ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className={`${item.h} break-inside-avoid bg-[#111] border border-white/5 rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-xl`}>
             <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt="masonry" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-black text-xs uppercase tracking-widest">WILDERNESS SERIES</div>
                <div className="text-white/40 text-[10px] uppercase font-bold mt-1">VOL 0{i+1}</div>
             </div>
          </motion.div>
       ))}
    </div>
  </section>
);

export const GallerySlider = ({ bgColor, isPreview }: any) => {
   const [index, setIndex] = useState(0);
   const imgs = [
      "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
   ];
   
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
         <div className="max-w-7xl mx-auto relative aspect-[21/9] rounded-[3.5rem] overflow-hidden group border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
               <motion.img key={index} src={imgs[index]} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between px-10 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => setIndex((index - 1 + imgs.length) % imgs.length)} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"><ChevronLeft size={24}/></button>
               <button onClick={() => setIndex((index + 1) % imgs.length)} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"><ChevronRight size={24}/></button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
               {imgs.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-10 bg-white shadow-lg' : 'w-2 bg-white/20'}`} />
               ))}
            </div>
         </div>
      </section>
   );
};

export const GalleryLightbox = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       {[1,2,3].map(i => (
          <div key={i} className="aspect-[4/3] rounded-[2.5rem] bg-[#111] overflow-hidden relative group cursor-pointer border border-white/5">
             <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800" className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt="lightbox" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl"><Plus size={32} /></div>
             </div>
          </div>
       ))}
    </div>
  </section>
);

export const GalleryFilterable = ({ bgColor, activeColor, isPreview }: any) => {
   const [activeTab, setActiveTab] = useState(0);
   const cats = ["All", "Nature", "Abstract", "Urban"];
   
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-20 p-2 bg-white/5 rounded-3xl border border-white/5 max-w-xl mx-auto shadow-2xl">
               {cats.map((cat, i) => (
                  <button key={cat} onClick={() => setActiveTab(i)} 
                     className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === i ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>
                     {cat}
                  </button>
               ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[1,2,3,4,5,6,7,8].map(i => (
                  <motion.div key={i} layout className="aspect-square bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-xl">
                      <img src="https://images.unsplash.com/photo-1518005020453-6ec241dcb140?q=80&w=500" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="filter" />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const GalleryPortfolio = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1,2,3].map(i => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-[2.5rem] bg-[#0d0d0f] border border-white/5 overflow-hidden mb-8 relative shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800" className="w-full h-full object-cover opacity-50 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]" alt="portfolio" />
                   <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">Minimalism</div>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-3 group-hover:italic transition-all">THE GLASS HOUSE PROJECT.</h3>
                <p className="text-white/40 font-medium tracking-tight mb-6">A deep dive into structural transparency and light manipulation in modern architecture.</p>
                <div style={{ color: accentColor }} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group-hover:gap-6 transition-all">View Case Study <ArrowRight size={16}/></div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const GalleryImageText = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
       <div className="relative aspect-square rounded-[3.5rem] bg-[#111] overflow-hidden group border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=800" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2s]" alt="text" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12">
             <div className="text-white font-black text-6xl tracking-tighter leading-[0.85] uppercase mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">CAPTURE <br/>THE MOMENT.</div>
             <p className="text-white/40 text-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-200">Exploring the interplay between shadows and structural integrity.</p>
          </div>
       </div>
       <div className="space-y-12">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">IMAGE & <span className="text-white/20">TEXT.</span></h2>
          <p className="text-white/40 text-xl leading-relaxed max-w-lg">We believe that every image tells a story. Combine your visual assets with powerful typography to deliver your message with high-fidelity clarity.</p>
          <div className="flex gap-4">
             <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl">Explore Collection</button>
             <button className="bg-white/5 text-white/40 hover:text-white px-6 py-5 rounded-2xl transition border border-white/10"><Share2 size={20}/></button>
          </div>
       </div>
    </div>
  </section>
);

export const GalleryVideoGrid = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
             <div key={i} className="aspect-video bg-[#1a1a1c] border border-white/5 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
                <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=500" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="video" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex items-center justify-between z-10">
                   <div>
                      <div className="text-white font-black text-[10px] uppercase tracking-widest mb-1">PROMO VIDEO</div>
                      <div className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">03:45 MIN</div>
                   </div>
                   <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                      <Play size={20} fill="currentColor" />
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const GalleryInteractive = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => (
           <div key={i} className="aspect-[3/4] rounded-[2rem] bg-[#111] overflow-hidden relative group cursor-crosshair border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1518005020453-6ec241dcb140?q=80&w=400" className="w-full h-full object-cover group-hover:scale-[1.2] transition-transform duration-[1s]" alt="interactive" />
              <div className="absolute inset-0 bg-indigo-500/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: accentColor + 'cc' }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="text-center">
                    <div className="text-white font-black text-7xl italic leading-none opacity-20 -translate-y-8 group-hover:translate-y-0 transition-transform duration-500 tracking-tighter">0{i}</div>
                    <div className="text-white font-black tracking-widest text-[10px] uppercase">EXPAND VIEW</div>
                 </div>
              </div>
           </div>
        ))}
     </div>
  </section>
);

export const GalleryFullscreen = ({ bgColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'h-[500px]' : 'h-screen'} overflow-hidden relative group`}>
      <img src="https://images.unsplash.com/photo-1518005020453-6ec241dcb140?q=80&w=1500" className="absolute inset-0 w-full h-full object-cover opacity-40 timescale-150 group-hover:scale-110 transition-transform duration-[10s]" alt="full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
         <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="flex items-center gap-4 mb-10 opacity-40">
            <div className="w-12 h-px bg-white" />
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white">THE GALLERY EXPERIENCE</div>
            <div className="w-12 h-px bg-white" />
         </motion.div>
         <h2 className={`font-black text-white tracking-tighter uppercase leading-[0.8] mb-12 ${isPreview ? 'text-5xl md:text-7xl' : 'text-8xl md:text-[12rem]'}`}>IMMERSIVE <br/><span className="text-white/10">VISION.</span></h2>
         <div className="flex gap-4">
            <button className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition shadow-2xl">Scroll to Explore</button>
         </div>
      </div>
      <div className="absolute bottom-20 left-12 flex gap-12 text-white/20">
         <div className="flex gap-4 items-center"><Camera size={16}/> <span className="text-[10px] font-black uppercase tracking-widest text-white/50">800M ISO</span></div>
         <div className="flex gap-4 items-center"><Maximize2 size={16}/> <span className="text-[10px] font-black uppercase tracking-widest text-white/50">4K OPTICS</span></div>
      </div>
   </section>
);

export const GalleryCreative3D = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 perspective-1000">
         {[1,2,3].map(i => (
            <motion.div key={i} whileHover={{ rotateY: 15, rotateX: 5, y: -30 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
               className="flex-1 aspect-[3/4] rounded-[3.5rem] bg-[#111] overflow-hidden relative group cursor-pointer border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
               <img src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=600" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="3d" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               <div className="absolute top-10 right-10 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all translate-x-8 group-hover:translate-x-0">
                  <button style={{ backgroundColor: accentColor }} className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"><Heart size={20}/></button>
                  <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center"><Share2 size={20}/></button>
               </div>
               <div className="absolute bottom-12 left-12">
                  <div className="text-white font-black text-4xl tracking-tighter uppercase leading-none mb-2">NEON DREAMS.</div>
                  <div style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-widest mb-6 block shadow-indigo-500/20">COLLECTION SERIES A</div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center text-white/40 group-hover:border-white group-hover:text-white transition-all"><Plus size={24}/></div>
               </div>
            </motion.div>
         ))}
      </div>
   </section>
);

export const allGalleries = {
  GalleryBasicGrid,
  GalleryGrid4Col,
  GalleryMasonry,
  GallerySlider,
  GalleryLightbox,
  GalleryFilterable,
  GalleryPortfolio,
  GalleryImageText,
  GalleryVideoGrid,
  GalleryInteractive,
  GalleryFullscreen,
  GalleryCreative3D
};
