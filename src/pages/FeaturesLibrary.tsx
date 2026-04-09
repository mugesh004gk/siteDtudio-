import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, List, SlidersHorizontal, Check, Copy, Zap, 
  Component, Palette, Type, Box, X, Eye, Menu as MenuIcon, Rocket,
  Columns, AlignLeft, Layout, Sparkles, Image as ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { featuresCategories, featuresLibrary, generateFeaturesCode } from '../data/featuresLibrary';
import { allFeatures } from '../components/library/Features';
import { PreviewContainer } from '../components/shared/PreviewContainer';

export default function FeaturesLibrary() {
  const navigate = useNavigate();
  const { addComponent } = useBuilder();
  
  const [activeCategory, setActiveCategory] = useState("Basic");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [customProps, setCustomProps] = useState<any>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewFeature, setPreviewFeature] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeGroup = featuresLibrary.find(g => g.category === activeCategory);
  
  const handleCustomize = (feature: any) => {
    setSelectedFeature(feature);
    setCustomProps(feature.defaultProps || {});
  };
  const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };

  const handleCopyCode = (feature: any) => {
    const code = generateFeaturesCode(feature.componentName, customProps || feature.defaultProps);
    navigator.clipboard.writeText(code);
    setCopiedId(feature.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const updateProp = (key: string, value: any) => {
    setCustomProps({ ...customProps, [key]: value });
  };

  const SidebarContent = () => (
    <div className="p-6">
      <h2 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6 px-4">Feature Categories</h2>
      <div className="space-y-1">
        {featuresCategories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelectedFeature(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive ? "bg-indigo-500/10 text-indigo-400" : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-[#09090b] overflow-hidden">
      
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#09090b]">
        <h1 className="text-xl font-black text-white tracking-tighter uppercase">{activeCategory}</h1>
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-white/60 hover:text-white">
          <MenuIcon size={24} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-[#18181b] border-r border-white/10 overflow-y-auto shadow-2xl">
              <div className="flex justify-end p-4">
                <button onClick={() => setMobileMenuOpen(false)} className="text-white/40"><X size={24}/></button>
              </div>
              <SidebarContent />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LEFT SIDEBAR */}
      <div className="w-64 border-r border-white/5 bg-[#09090b] flex flex-col h-full overflow-y-auto hidden md:flex shrink-0">
        <SidebarContent />
      </div>

      {/* CENTER - GRID/LIST */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative custom-scrollbar bg-[#0d0d0f]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 uppercase">{activeCategory} Features</h1>
            <p className="text-white/40 font-medium text-sm md:text-base text-balance">Showcase your product's value with high-impact layouts.</p>
          </div>
          <div className="flex items-center bg-[#18181b] border border-white/5 p-1.5 rounded-xl shadow-lg self-end md:self-auto">
            <button onClick={() => setViewMode('grid')} className={`p-2 md:p-2.5 rounded-lg transition-colors ${viewMode === 'grid' ? "bg-indigo-600 text-white" : "text-white/40 hover:text-white"}`}><LayoutGrid size={18} /></button>
            <button onClick={() => setViewMode('list')} className={`p-2 md:p-2.5 rounded-lg transition-colors ${viewMode === 'list' ? "bg-indigo-600 text-white" : "text-white/40 hover:text-white"}`}><List size={18} /></button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8" : "flex flex-col gap-6 md:gap-8"}>
          {activeGroup?.items.map((feature) => {
            const ComponentRenderer = (allFeatures as any)[feature.componentName];
            const currentProps = (selectedFeature?.id === feature.id) ? customProps : feature.defaultProps;

            return (
              <motion.div key={feature.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className={`bg-[#18181b] rounded-3xl border ${selectedFeature?.id === feature.id ? "border-indigo-500 shadow-indigo-500/20" : "border-white/5"} overflow-hidden group shadow-2xl flex flex-col transition-all duration-300`}>
                
                {/* PREVIEW CONTAINER */}
                {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  <PreviewContainer height={600} width={1440}>
                    {ComponentRenderer ? <ComponentRenderer {...currentProps} isPreview={true} /> : <div className="p-20 text-white uppercase text-xs font-black tracking-widest text-center">Feature Loading...</div>}
                </PreviewContainer>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(feature); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(feature); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(feature); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(feature); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(feature); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(feature); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(feature); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(feature); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>

                 {/* DETAILS */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest bg-indigo-500/10 px-2 py-1 rounded">{feature.tag}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-4 mb-2 tracking-tight">{feature.name}</h3>
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed font-medium line-clamp-2">{feature.desc}</p>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                     <button onClick={() => setPreviewFeature(feature)} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl border border-white/5 flex justify-center items-center gap-2 transition active:scale-95 group-hover:border-indigo-500/30">
                        <Eye size={16}/> VIEW
                     </button>
                     <button onClick={() => handleUseThis(feature.id, feature.componentName)} className="flex-[1.5] bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl shadow-indigo-600/20 transition active:scale-95">
                        <Zap size={16} fill="currentColor"/> ADD TO BUILDER
                     </button>
                  </div>
                </div></motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDEBAR - CUSTOMIZE PANEL */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 350, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
            className="fixed md:relative right-0 top-0 bottom-0 w-full max-w-[350px] border-l border-white/5 bg-[#111113] overflow-y-auto shrink-0 flex flex-col z-[150] shadow-2xl">
            <div className="p-6 border-b border-white/5 sticky top-0 bg-[#111113]/90 backdrop-blur z-10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2"><SlidersHorizontal size={18} className="text-indigo-400"/> Customize</h3>
                <p className="text-[10px] text-white/40 mt-1 uppercase font-black tracking-widest">{selectedFeature.name}</p>
              </div>
              <button onClick={() => setSelectedFeature(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/50"><X size={16}/></button>
            </div>

            <div className="p-6 space-y-10 pb-32">
              {/* COLORS */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Palette size={14}/> Appearance</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Background</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.bgColor || "#09090b"} onChange={(e) => updateProp('bgColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={customProps.bgColor || ""} onChange={(e) => updateProp('bgColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Text Color</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.textColor || "#ffffff"} onChange={(e) => updateProp('textColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={customProps.textColor || ""} onChange={(e) => updateProp('textColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Card / UI</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.cardColor || "#18181b"} onChange={(e) => updateProp('cardColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={customProps.cardColor || ""} onChange={(e) => updateProp('cardColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Icon / Accent</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.iconColor || "#6366f1"} onChange={(e) => updateProp('iconColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={customProps.iconColor || ""} onChange={(e) => updateProp('iconColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Type size={14}/> Content</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Main Title</label>
                    <input type="text" value={customProps.title || ""} onChange={(e) => updateProp('title', e.target.value)} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Description</label>
                    <textarea value={customProps.description || ""} onChange={(e) => updateProp('description', e.target.value)} className="w-full bg-[#09090b] border border-white/10 rounded-xl p-3 text-sm text-white min-h-[80px]" />
                  </div>
                </div>
              </div>

              {/* LAYOUT */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                 <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Layout size={14}/> Layout & Grid</h4>
                 <div className="space-y-4">
                    <div>
                       <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Columns</label>
                       <div className="grid grid-cols-4 gap-2 bg-[#09090b] p-1 rounded-xl">
                          {[1,2,3,4].map(num => (
                            <button key={num} onClick={() => updateProp('cols', num)} className={`py-1.5 rounded-lg text-xs font-bold ${customProps.cols === num ? 'bg-indigo-600 text-white' : 'text-white/40'}`}>{num}</button>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* EFFECTS */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Sparkles size={14}/> Effects</h4>
                <div className="flex items-center justify-between">
                   <label className="text-xs font-bold text-white/60">Hover Interactions</label>
                   <button onClick={() => updateProp('hoverEffect', !customProps.hoverEffect)} className={`w-12 h-6 rounded-full transition-colors relative ${customProps.hoverEffect ? 'bg-indigo-600' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${customProps.hoverEffect ? 'left-7' : 'left-1'}`} />
                   </button>
                </div>
              </div>

              {/* PRESETS */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Zap size={14}/> Presets</h4>
                <div className="grid grid-cols-2 gap-2">
                   <button onClick={() => setCustomProps({...customProps, bgColor: "#09090b", textColor: "#ffffff", cardColor: "#18181b"})} className="py-3 rounded-xl bg-black border border-white/10 text-white text-[10px] font-bold uppercase">Modern Dark</button>
                   <button onClick={() => setCustomProps({...customProps, bgColor: "#ffffff", textColor: "#0f172a", cardColor: "#f8fafc"})} className="py-3 rounded-xl bg-white border border-black/10 text-black text-[10px] font-bold uppercase">Soft Light</button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL PREVIEW MODAL */}
      <AnimatePresence>
        {previewFeature && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setPreviewFeature(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full h-full max-w-7xl md:max-h-[90vh] bg-[#09090b] overflow-hidden md:rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col">
              
              <div className="p-6 md:p-10 flex items-center justify-between border-b border-white/5 bg-[#111] z-10 shrink-0">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Rocket className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none mb-2">{previewFeature.name}</h2>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{previewFeature.tag}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleUseThis(previewFeature.id, previewFeature.componentName, customProps || previewFeature.defaultProps)} className="hidden md:flex bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] items-center gap-3 transition-all active:scale-95 shadow-xl shadow-indigo-600/20">
                    <Zap size={18} fill="currentColor" /> Add to Builder
                  </button>
                  <button onClick={() => setPreviewFeature(null)} className="p-4 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-2xl transition-all border border-white/5 shadow-xl">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] flex items-start justify-center p-4 md:p-12 relative">
                <div className="w-full relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0c]">
                  {(() => {
                    const ComponentRenderer = (allFeatures as any)[previewFeature.componentName];
                    const props = (selectedFeature?.id === previewFeature.id) ? customProps : previewFeature.defaultProps;
                    return ComponentRenderer ? <ComponentRenderer {...props} /> : null;
                  })()}
                </div>
              </div>

              <div className="md:hidden p-6 border-t border-white/5 bg-[#111] shrink-0">
                 <button onClick={() => handleUseThis(previewFeature.id, previewFeature.componentName, customProps || previewFeature.defaultProps)} className="w-full bg-indigo-600 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95">
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





