import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockComponents } from '../lib/mockData';
import { previewMap } from '../lib/previewMap';
import { useBuilderStore } from '../store/useBuilderStore';
import { Eye, ArrowLeft, Grid, List, X, Zap, Wand2, Sparkles } from 'lucide-react';

export default function CategoryPage() {
  const { category: slug } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { addComponent } = useBuilderStore();
  const [components, setComponents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewComp, setPreviewComp] = useState<any>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchComponents = async () => {
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
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#020617]">
        <div className="w-12 h-12 border-4 border-purple-500/10 border-t-purple-500 rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Loading Modules...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="flex-1">
            <button onClick={() => navigate('/components')} className="text-purple-400 hover:text-purple-300 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-6 group transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Registry
            </button>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">{slug}</h1>
              <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest">
                {components.length} Modules
              </div>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium">
              Hyper-optimized <span className="text-white font-bold">{slug}</span> architectures for high-fidelity web experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-1 p-1 bg-[#0f172a] rounded-xl border border-white/5 shadow-lg">
            <button onClick={() => setView('grid')} className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-slate-500 hover:text-white'}`}>
              <Grid size={18} />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-slate-500 hover:text-white'}`}>
              <List size={18} />
            </button>
          </div>
        </div>

        <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
          {components.map((comp, idx) => {
            const Preview = previewMap[comp.componentKey] || (() => <div className="w-full h-full bg-[#020617] flex items-center justify-center text-slate-800 text-[10px] font-black uppercase tracking-widest">NO PREVIEW</div>);
            
            return (
              <motion.div 
                key={comp.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.05 }}
              >
                <div 
                  className={`group block h-[340px] bg-[#111827] p-5 rounded-[2rem] border border-white/5 hover:border-purple-500/50 transition-all hover:scale-105 shadow-2xl relative overflow-hidden ${view === 'list' ? 'md:flex md:items-center md:h-auto' : ''}`}
                >
                  <div className={`relative bg-[#020617] overflow-hidden rounded-2xl mb-5 ${view === 'grid' ? 'h-40' : 'w-full md:w-80 h-48 md:mb-0 md:mr-6'} flex items-center justify-center border border-white/5 shadow-inner`}>
                    <div className="w-full h-full scale-[0.5] origin-top p-2">
                      <Preview isPreview={true} />
                    </div>
                    <div className="absolute inset-0 bg-purple-600/5 pointer-events-none" />
                    {comp.isPremium && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded shadow-lg z-10">
                        Elite
                      </div>
                    )}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600/20 flex items-center justify-center backdrop-blur-[2px]">
                      <button onClick={() => setPreviewComp(comp)} className="px-4 py-1.5 bg-white text-purple-600 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-2xl active:scale-95 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Scan Module
                      </button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 text-[9px] font-black text-purple-400 uppercase tracking-[0.2em]">
                      <span>{comp.type || 'Standard'} Architecture</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors truncate tracking-tight uppercase">
                      {comp.name}
                    </h3>
                    <p className="text-slate-500 text-xs mb-6 line-clamp-2 leading-relaxed font-medium">
                      {comp.description}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleUseThis(comp.componentKey)}
                        className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2">
                        <Wand2 size={16} /> Deploy
                      </button>
                      <button onClick={() => setPreviewComp(comp)}
                        className="p-2.5 bg-[#020617] hover:bg-purple-500/10 text-slate-500 hover:text-purple-400 rounded-xl transition-all border border-white/5">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {previewComp && (
           <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={() => setPreviewComp(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
              
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#0f172a] border border-white/10 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col">
                
                <div className="px-8 py-5 flex items-center justify-between bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white truncate uppercase tracking-tight">{previewComp.name}</h2>
                      <p className="text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">{previewComp.category} System</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleUseThis(previewComp.componentKey)} className="hidden md:flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                      <Wand2 size={18} /> Deploy Module
                    </button>
                    <button onClick={() => setPreviewComp(null)} className="p-3 bg-[#020617] hover:bg-rose-500/10 text-slate-500 hover:text-rose-500 rounded-2xl transition-all border border-white/5">
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto bg-white p-8 md:p-12 relative">
                   {/* Grid Overlay for Canvas feel */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="max-w-5xl mx-auto shadow-2xl border border-slate-200 rounded-3xl overflow-hidden relative z-10">
                    {(() => {
                      const Preview = previewMap[previewComp.componentKey];
                      return Preview ? <Preview /> : <div className="p-20 text-center text-slate-400 font-black uppercase tracking-widest">Architectural Preview Missing</div>;
                    })()}
                  </div>
                </div>

                <div className="md:hidden p-6 border-t border-white/5 bg-[#020617]/80">
                   <button onClick={() => handleUseThis(previewComp.componentKey)} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl">
                      <Wand2 size={20} /> Deploy Module
                   </button>
                </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </div>
  );
}
