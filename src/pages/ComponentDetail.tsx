import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { resolveComponentByKey } from '../lib/componentMap';
import { useBuilder } from '../context/BuilderContext';
import { 
  ArrowLeft, Plus, Eye, Code, Share2, Heart, 
  Check, Smartphone, Tablet, Monitor, Info, Sparkles,
  Download, Copy, Save, Briefcase, Layout as LayoutIcon, Palette, ArrowRight, X, CheckCircle2
} from 'lucide-react';

export default function ComponentDetail() {
  const { componentKey } = useParams<{ componentKey: string }>();
  const navigate = useNavigate();
  const { addComponent } = useBuilder();
  
  const [component, setComponent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'docs'>('preview');
  const [isAdded, setIsAdded] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveAction, setSaveAction] = useState<string>('');

  useEffect(() => {
    const fetchComponent = async () => {
      // Immediate mock fallback calculation
      const mock = {
        id: `mock-${componentKey}`,
        name: (componentKey || "").split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        componentKey: componentKey,
        category: (componentKey || "").split('-')[0],
        description: `Industrial ${componentKey} unit precisely engineered for the SiteStudio ecosystem.`
      };
      
      setComponent(mock);
      setLoading(false);

      try {
        const q = query(collection(db, "components"), where("componentKey", "==", componentKey));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setComponent({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        }
      } catch (error) {
        console.error("Error fetching component details:", error);
      }
    };

    if (componentKey) fetchComponent();
  }, [componentKey]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b]">
        <div className="w-16 h-16 border-4 border-indigo-500/10 border-t-indigo-500 rounded-full animate-spin mb-8" />
        <p className="text-white/10 font-black uppercase tracking-[0.3em] text-xs">Accessing Repository...</p>
      </div>
    );
  }

  if (!component) return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-12 text-center">
      <div className="w-24 h-24 bg-rose-500/10 rounded-[2.5rem] flex items-center justify-center text-rose-500 mb-10 border border-rose-500/10 shadow-inner">
         <X size={48} strokeWidth={3} />
      </div>
      <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Identity Not Found</h1>
      <p className="text-white/30 text-xl max-w-md mx-auto mb-12 font-medium opacity-60">The requested component key <span className="text-indigo-400 font-bold">{componentKey}</span> does not exist in our industrial registry.</p>
      <button onClick={() => navigate('/components')} className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/5 transition-all font-black uppercase tracking-widest text-xs shadow-2xl active:scale-95">Back to Directory</button>
    </div>
  );

  const RenderComp = resolveComponentByKey(component.componentKey) || (() => <div className="p-20 text-center text-white/10 font-black uppercase tracking-widest text-xs">Visual Component Not Registered</div>);

  const handleAdd = () => {
    addComponent(component.componentKey);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleSaveTo = (type: string) => {
    setSaveAction(type);
    setShowSaveModal(true);
    setTimeout(() => setShowSaveModal(false), 2000);
  };

  const copyCode = () => {
    const mockCode = `// SiteStudio Generated Component: ${component.name}\nimport React from 'react';\n\nexport default function ${component.name.replace(/\s+/g, '')}() {\n  return (\n    <div className="p-10 bg-indigo-600 text-white rounded-2xl">\n      Hello World from ${component.name}!\n    </div>\n  );\n}`;
    navigator.clipboard.writeText(mockCode);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-24 min-h-screen">
      {/* Header Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-4 text-indigo-400 hover:text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] transition-all group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Repository Catalog
        </button>
        <div className="flex items-center gap-4">
          <button className="p-5 bg-[#18181b] hover:bg-[#1f1f23] text-white/20 hover:text-white rounded-[1.5rem] border border-white/5 transition-all active:scale-95 shadow-xl">
             <Share2 size={24} />
          </button>
          <button className="p-5 bg-[#18181b] hover:bg-rose-500/10 text-white/20 hover:text-rose-500 rounded-[1.5rem] border border-white/5 transition-all active:scale-95 shadow-xl">
             <Heart size={24} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Visual Preview Section */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-[#18181b] rounded-[4rem] border border-white/5 p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden ring-1 ring-white/[0.02]">
            {/* Viewport Toggles */}
            <div className="flex items-center justify-between px-10 py-8 bg-black/20 rounded-t-[3.8rem] border-b border-white/5">
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,1)]"></div>
                 <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30 leading-none">Simulation Environment</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
                <button onClick={() => setDevice('desktop')} className={`p-3.5 rounded-xl transition-all ${device === 'desktop' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white'}`}>
                  <Monitor size={18} />
                </button>
                <button onClick={() => setDevice('tablet')} className={`p-3.5 rounded-xl transition-all ${device === 'tablet' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white'}`}>
                  <Tablet size={18} />
                </button>
                <button onClick={() => setDevice('mobile')} className={`p-3.5 rounded-xl transition-all ${device === 'mobile' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white'}`}>
                  <Smartphone size={18} />
                </button>
              </div>
              <div className="hidden md:block w-32 h-1 bg-white/5 rounded-full"></div>
            </div>

            {/* Rendering Canvas */}
            <div className="bg-[#09090b] min-h-[600px] flex items-start justify-center p-12 overflow-y-auto custom-scrollbar rounded-b-[3.8rem] transition-all bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03),transparent)]">
              <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${device === 'desktop' ? 'w-full' : device === 'tablet' ? 'max-w-xl' : 'max-w-sm h-[700px] border-y-[60px] border-[#18181b] rounded-[3.5rem] overflow-hidden'}`}>
                {activeTab === 'preview' ? (
                   <div className="bg-transparent transform-gpu origin-top">
                      <RenderComp />
                   </div>
                ) : activeTab === 'code' ? (
                  <div className="w-full bg-[#050505] rounded-[2.5rem] p-10 border border-white/5 font-mono text-sm leading-relaxed relative group shadow-inner">
                    <pre className="text-white/40">
{`// SiteStudio Component: ${component.name}\nimport { motion } from 'framer-motion';\n\nexport default function ${component.name.replace(/\s+/g, '')}() {\n  return (\n    <div className="bg-[#09090b] text-white">\n       {/* Professional Render Code */}\n       <ComponentLogic />\n    </div>\n  );\n}`}
                    </pre>
                    <button onClick={copyCode} className="absolute top-8 right-8 bg-white/5 hover:bg-indigo-600 text-white p-4 rounded-2xl shadow-2xl transition-all active:scale-90 border border-white/5">
                       <Copy size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="py-32 text-center text-white/10 flex flex-col items-center">
                     <Info size={80} className="mb-10 opacity-5" />
                     <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Documentation Node</h3>
                     <p className="max-w-md mx-auto text-base font-medium opacity-50">Technical implementation guides and API parameters are being indexed for this asset class.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
             {['preview', 'code', 'docs'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t as any)}
                  className={`py-6 rounded-[1.75rem] text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${activeTab === t ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-600/30' : 'bg-[#18181b] border-white/5 text-white/20 hover:text-white hover:bg-[#1f1f23]'}`}
                >
                  {t} Mode
                </button>
             ))}
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-[#18181b] rounded-[3.5rem] border border-white/5 p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-all duration-1000"></div>
            
            <div className="flex items-center gap-3 text-indigo-400 mb-10 bg-indigo-500/5 px-4 py-2 rounded-full w-fit border border-indigo-500/10">
               <Sparkles size={14} />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Industrial Component</span>
            </div>

            <h1 className="text-5xl font-black text-white leading-none tracking-tighter uppercase mb-6">{component.name}</h1>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/5">{component.category}</span>
              <span className="w-1.5 h-1.5 bg-white/10 rounded-full"></span>
              <span className="text-[10px] font-black text-indigo-400/80 uppercase tracking-widest">{component.type || 'Standard'}</span>
            </div>

            <p className="text-white/30 leading-relaxed mb-12 text-lg font-medium opacity-80">{component.description || "A high-performance aesthetic component precisely engineered for the SiteStudio ecosystem."}</p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleAdd}
                className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] active:scale-95 flex items-center justify-center gap-4 ${isAdded ? 'bg-emerald-500 text-[#09090b] shadow-emerald-500/30' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'}`}
              >
                {isAdded ? <CheckCircle2 size={22} strokeWidth={3} /> : <Plus size={22} strokeWidth={3} />}
                {isAdded ? 'Added to Stack' : 'Initialize Injection'}
              </button>
              
              <div className="grid grid-cols-2 gap-4 mt-8 pt-12 border-t border-white/5">
                {[
                  { icon: Briefcase, label: 'Add to Project', action: 'Project' },
                  { icon: LayoutIcon, label: 'Add to Template', action: 'Template' },
                  { icon: Palette, label: 'Add to Theme', action: 'Theme' },
                  { icon: Download, label: 'Deploy Logic', action: 'Export' }
                ].map((act, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSaveTo(act.action)}
                    className="flex flex-col items-center justify-center gap-3 p-8 bg-[#09090b] hover:bg-white/[0.04] border border-white/5 rounded-[2.5rem] transition-all hover:scale-[1.05] active:scale-95 group shadow-2xl"
                  >
                    <div className="p-4 bg-white/5 rounded-2xl text-white/20 group-hover:text-indigo-400 group-hover:shadow-lg transition-all shadow-inner">
                       <act.icon size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase text-white/10 group-hover:text-white/40 tracking-[0.1em] text-center mt-3 transition-colors">{act.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-indigo-600/10 border border-indigo-500/10 rounded-[3.5rem] p-10 flex items-center gap-8 group hover:bg-indigo-600/20 transition-all cursor-pointer shadow-2xl shadow-indigo-600/5 ring-1 ring-indigo-500/20" onClick={() => navigate('/builder')}>
             <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                <Monitor size={28} />
             </div>
             <div className="flex-1">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1.5 opacity-60">Architect Session</div>
                <div className="text-2xl font-black text-white tracking-tighter uppercase">Launch Builder <ArrowRight className="inline-block group-hover:translate-x-2 transition-transform" size={24} /></div>
             </div>
          </div>
        </div>
      </div>

      {/* Success Notification Modal */}
      <AnimatePresence>
        {showSaveModal && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 1 }} className="fixed bottom-12 right-12 z-[200] bg-white text-[#09090b] px-12 py-8 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(255,255,255,0.2)] flex items-center gap-8 border border-white/20 backdrop-blur-3xl">
             <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl text-white">
                <Save size={32} />
             </div>
             <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09090b]/40 mb-1 leading-none">Cloud Protocol Success</div>
                <div className="text-2xl font-black uppercase tracking-tighter">Added to {saveAction}</div>
             </div>
             <div className="ml-6 p-4 bg-emerald-500 text-white rounded-2xl shadow-xl">
                <CheckCircle2 size={24} strokeWidth={4} />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
