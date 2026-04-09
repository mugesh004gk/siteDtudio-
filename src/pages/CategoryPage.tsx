import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockComponents } from '../lib/mockData';
import { previewMap } from '../lib/previewMap';
import { useBuilder } from '../context/BuilderContext';
import {  Eye, Check, ArrowLeft, Filter, Grid, List, X, Zap, Component } from 'lucide-react';

export default function CategoryPage() {
  const { category: slug } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { addComponent } = useBuilder();
  const [components, setComponents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewComp, setPreviewComp] = useState<any>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchComponents = async () => {
      // Immediate mock load
      const filteredMocks = mockComponents.filter(c => c.category === slug).map((c, i) => ({ id: `m${i}`, ...c }));
      setComponents(filteredMocks);
      setLoading(false);

      try {
        const q = query(collection(db, "components"), where("category", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
           const fetched: any[] = [];
           querySnapshot.forEach((doc) => {
             fetched.push({ id: doc.id, ...doc.data() });
           });
           setComponents(fetched);
        }
      } catch (error) {
        console.error("Error fetching category components:", error);
      }
    };

    if (slug) fetchComponents();
  }, [slug]);

  const handleUseThis = (componentKey: string) => {
    addComponent(componentKey);
    navigate('/builder');
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-white/40 font-black uppercase tracking-widest text-xs">Loading components...</p>
      </div>
    );
  }

  if (!components.length) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-rose-500/10 rounded-3xl flex items-center justify-center text-rose-500 mb-8 border border-rose-500/10 shadow-inner">
          <Filter size={48} />
        </div>
        <h1 className="text-4xl font-black text-white mb-4">No components found.</h1>
        <p className="text-lg text-white/30 max-w-md mx-auto mb-10 leading-relaxed">We haven't cataloged any components for the <span className="text-indigo-400 font-bold uppercase">{slug}</span> category yet.</p>
        <button onClick={() => navigate('/components')} className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-white/5 active:scale-95 shadow-2xl">Back to Directory</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-10">
        <div className="flex-1">
          <button onClick={() => navigate('/components')} className="text-indigo-400 hover:text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 mb-6 md:mb-8 group transition-all">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Directory Overview
          </button>
          <div className="flex items-center gap-6 mb-4 md:mb-6">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">{slug}</h1>
          </div>
          <p className="text-sm md:text-xl text-white/30 max-w-2xl leading-relaxed font-medium">Browsing <span className="text-white font-black">{components.length}</span> premium components in the industrial {slug} registry.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-[#18181b] p-1.5 rounded-2xl border border-white/5 shadow-2xl self-end md:self-auto">
           <button onClick={() => setView('grid')} className={`p-3 md:p-4 rounded-xl transition-all ${view === 'grid' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-white/20 hover:text-white'}`}>
             <Grid size={18} />
           </button>
           <button onClick={() => setView('list')} className={`p-3 md:p-4 rounded-xl transition-all ${view === 'list' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-white/20 hover:text-white'}`}>
             <List size={18} />
           </button>
        </div>
      </div>

      <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" : "flex flex-col gap-6 md:gap-8"}>
        {components.map((comp, idx) => {
          const Preview = previewMap[comp.componentKey] || (() => <div className="w-full h-full bg-[#09090b] flex items-center justify-center text-white/10 uppercase font-black tracking-widest text-[10px]">No Preview Available</div>);
          
          return (
            <motion.div 
              key={comp.id} 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`bg-[#18181b] rounded-3xl md:rounded-[3rem] border border-white/5 overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-indigo-500/10 ${view === 'list' ? 'md:flex md:items-center' : ''}`}
            >
              <div className={`relative bg-[#09090b] shadow-inner overflow-hidden ${view === 'grid' ? 'h-72 md:h-[500px]' : 'w-full md:w-[28rem] h-56 md:h-full md:border-r border-white/5'} flex items-center justify-center`}>
                <div className="w-full h-full border border-white/5 overflow-y-auto overflow-x-hidden relative bg-black/40 backdrop-blur-sm custom-scrollbar origin-top scale-[0.75] md:scale-[0.6] transition-transform duration-700">
                    <div className="w-[133%] md:w-[166%] origin-top">
                        <Preview isPreview={true} />
                    </div>
                </div>
                {comp.isPremium && <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-amber-500 text-[#09090b] text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl shadow-xl z-30">Premium</div>}
              </div>

              <div className="p-6 md:p-12 flex-1">
                <div className="flex items-center gap-3 mb-3 md:mb-4 text-[10px] font-black uppercase tracking-widest">
                   <span className="text-indigo-400 leading-none">{comp.category}</span>
                   <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
                   <span className="text-white/20 leading-none">{comp.type || 'Standard'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 leading-none group-hover:text-indigo-400 transition-colors uppercase tracking-tighter">{comp.name}</h3>
                <p className="text-sm md:text-base text-white/30 mb-6 md:mb-10 line-clamp-2 md:line-clamp-none leading-relaxed font-medium">{comp.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button onClick={() => setPreviewComp(comp)}
                    className="flex-1 flex items-center justify-center gap-3 py-4 md:py-5 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl border border-white/5 transition-all active:scale-95 shadow-xl">
                    <Eye size={18} /> View
                  </button>
                  <button onClick={() => handleUseThis(comp.componentKey)}
                    className="flex-1 flex items-center justify-center gap-3 py-4 md:py-5 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-2xl active:scale-95 bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/40">
                    <Component size={18} strokeWidth={4} /> Use This
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {previewComp && (
           <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={() => setPreviewComp(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
              
              <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }}
                className="relative w-full h-full max-w-7xl md:max-h-[85vh] bg-[#09090b] overflow-hidden md:rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col">
                
                {/* MODAL HEADER */}
                <div className="p-6 md:p-10 flex items-center justify-between border-b border-white/5 bg-[#111] z-10">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-indigo-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <Zap className="text-white w-5 md:w-6 h-5 md:h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none mb-1 md:mb-2">{previewComp.name}</h2>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{previewComp.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleUseThis(previewComp.componentKey)} className="hidden md:flex bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] items-center gap-3 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                      Add to Builder
                    </button>
                    <button onClick={() => setPreviewComp(null)} className="p-3 md:p-4 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-xl md:rounded-2xl transition-all border border-white/5 shadow-xl">
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* MODAL CANVAS */}
                <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] flex items-start justify-center p-6 md:p-24 relative">
                  <div className="w-full relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl overflow-hidden bg-[#09090b]">
                    {(() => {
                      const Preview = previewMap[previewComp.componentKey];
                      return Preview ? <Preview /> : <div className="p-20 text-center text-white/20 font-black uppercase tracking-widest text-[10px]">No Interactive Preview Available</div>;
                    })()}
                  </div>
                </div>

                {/* MOBILE MODAL FOOTER */}
                <div className="md:hidden p-6 border-t border-white/5 bg-[#111]">
                   <button onClick={() => handleUseThis(previewComp.componentKey)} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                      <Zap size={18} fill="currentColor" /> Add to Builder
                   </button>
                </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </div>
  );
}
