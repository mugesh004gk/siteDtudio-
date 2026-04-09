import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, SlidersHorizontal, Check, Copy, Zap, Component, Palette, Type, Box, X, Eye, Menu as MenuIcon, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { navbarCategories, navbarLibrary, generateCode } from '../data/navbarLibrary';
import { allNavbars } from '../components/library/Navbars';
import { PreviewContainer } from '../components/shared/PreviewContainer';

export default function NavbarLibrary() {
  const navigate = useNavigate();
  const { addComponent } = useBuilder();
  
  const [activeCategory, setActiveCategory] = useState("Basic");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedNav, setSelectedNav] = useState<any>(null);
  const [customProps, setCustomProps] = useState<any>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewNav, setPreviewNav] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeGroup = navbarLibrary.find(g => g.category === activeCategory);
  
  const handleCustomize = (nav: any) => {
    setSelectedNav(nav);
    setCustomProps(nav.defaultProps);
  };
  const handleUseThis = (id: string, componentName: string, propsOverride?: any) => {
    const item = activeGroup?.items.find(i => i.id === id);
    const props = propsOverride || customProps || (item?.defaultProps || {});
    addComponent(componentName, props);
    // Removed navigation to allow multi-adds
  };

  const handleCopyCode = (nav: any) => {
    const code = generateCode(nav.componentName, customProps[nav.id] || nav.defaultProps);
    navigator.clipboard.writeText(code);
    setCopiedId(nav.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const updateProp = (key: string, value: string) => {
    if (selectedNav) {
      setCustomProps({ ...customProps, [key]: value });
    }
  };

  const SidebarContent = () => (
    <div className="p-6">
      <h2 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6 px-4">Navbar Categories</h2>
      <div className="space-y-1">
        {navbarCategories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelectedNav(null); setMobileMenuOpen(false); }}
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

      {/* LEFT SIDEBAR - CATEGORIES (DESKTOP) */}
      <div className="w-64 border-r border-white/5 bg-[#09090b] flex flex-col h-full overflow-y-auto hidden md:flex shrink-0">
        <SidebarContent />
      </div>

      {/* CENTER - GRID/LIST */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative custom-scrollbar">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">{activeCategory} Navbars</h1>
            <p className="text-white/40 font-medium text-sm md:text-base text-balance">Explore premium production-ready navigations.</p>
          </div>
          <div className="flex items-center bg-[#18181b] border border-white/5 p-1.5 rounded-xl shadow-lg self-end md:self-auto">
            <button onClick={() => setViewMode('grid')} className={`p-2 md:p-2.5 rounded-lg transition-colors ${viewMode === 'grid' ? "bg-indigo-600 text-white" : "text-white/40 hover:text-white"}`}><LayoutGrid size={18} /></button>
            <button onClick={() => setViewMode('list')} className={`p-2 md:p-2.5 rounded-lg transition-colors ${viewMode === 'list' ? "bg-indigo-600 text-white" : "text-white/40 hover:text-white"}`}><List size={18} /></button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8" : "flex flex-col gap-6 md:gap-8"}>
          {activeGroup?.items.map((nav) => {
            const ComponentRenderer = (allNavbars as any)[nav.componentName];
            const currentProps = (selectedNav?.id === nav.id) ? customProps : nav.defaultProps;

            return (
              <motion.div key={nav.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={`bg-[#18181b] rounded-2xl md:rounded-3xl border ${selectedNav?.id === nav.id ? "border-indigo-500 shadow-indigo-500/20" : "border-white/5"} overflow-hidden group shadow-2xl flex flex-col transition-all duration-300`}>
                
                {/* PREVIEW */}
                {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  {/* PREVIEW CONTAINER */}
                <div className="relative group/preview inset-0 overflow-hidden rounded-t-[2.5rem]">
                  <PreviewContainer height={400} width={1440}>
                    {ComponentRenderer ? <ComponentRenderer {...currentProps} isPreview={true} /> : <div className="p-4 text-white uppercase text-[10px] font-black tracking-widest text-center">Development Module</div>}
                </PreviewContainer>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(nav); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(nav); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(nav); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(nav); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(nav); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(nav); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(nav); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(nav); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>

                {/* DETAILS CARD */}
                <div className="p-5 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">{nav.tag}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5 mb-1.5 tracking-tight">{nav.name}</h3>
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed font-medium">{nav.desc}</p>
                  </div>
                  
                  <div className="mt-6 md:mt-8 flex flex-col lg:flex-row gap-2 md:gap-3">
                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3 flex-1">
                      <button onClick={() => setPreviewNav(nav)} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider py-3.5 md:py-3 rounded-xl transition flex justify-center items-center gap-2 border border-white/5 active:scale-95">
                         <Eye size={16}/> View
                      </button>
                      <button onClick={() => handleUseThis(nav.id, nav.componentName)} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] uppercase tracking-wider py-3.5 md:py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95">
                         <Component size={16}/> Use This
                      </button>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <button onClick={() => handleCopyCode(nav)} className="flex-1 lg:flex-none lg:w-36 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider py-3.5 md:py-3 rounded-xl transition flex justify-center items-center gap-2 border border-white/5 active:scale-95">
                         {copiedId === nav.id ? <Check size={16} className="text-emerald-400"/> : <Copy size={16}/>} Copy
                      </button>
                      <button onClick={() => handleCustomize(nav)} className={`px-4 flex justify-center items-center rounded-xl transition active:scale-95 ${selectedNav?.id === nav.id ? "bg-indigo-500 text-white" : "bg-white/5 hover:bg-white/10 text-white border border-white/5"}`}>
                         <SlidersHorizontal size={18}/>
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDEBAR - CUSTOMIZE PANEL */}
      <AnimatePresence>
        {selectedNav && (
          <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 320, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
            className="fixed md:relative right-0 top-0 bottom-0 md:top-auto md:bottom-auto w-full max-w-[320px] border-l border-white/5 bg-[#18181b] overflow-y-auto shrink-0 flex flex-col pb-20 z-50 shadow-2xl">
            <div className="p-6 border-b border-white/5 sticky top-0 bg-[#18181b]/90 backdrop-blur z-10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2"><SlidersHorizontal size={18} className="text-indigo-400"/> Customize</h3>
                <p className="text-xs text-white/40 mt-1 uppercase font-black tracking-widest">{selectedNav.name}</p>
              </div>
              <button onClick={() => setSelectedNav(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/50"><X size={16}/></button>
            </div>

            <div className="p-6 space-y-8">
              {/* COLORS */}
              <div>
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2 mb-4"><Palette size={14}/> Colors</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/30 mb-2 block tracking-widest">Background</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.bgColor} onChange={(e) => updateProp('bgColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-[#09090b] border border-white/10" />
                       <input type="text" value={customProps.bgColor} onChange={(e) => updateProp('bgColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-3 text-sm text-white focus:border-indigo-500 font-mono" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/30 mb-2 block tracking-widest">Text Element</label>
                    <div className="flex gap-2">
                       <input type="color" value={customProps.textColor} onChange={(e) => updateProp('textColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-[#09090b] border border-white/10" />
                       <input type="text" value={customProps.textColor} onChange={(e) => updateProp('textColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-3 text-sm text-white focus:border-indigo-500 font-mono" />
                    </div>
                  </div>
                </div>
              </div>

              {/* FONTS */}
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2 mb-4"><Type size={14}/> Typography</h4>
                <label className="text-[10px] font-black uppercase text-white/30 mb-2 block tracking-widest">Font Family</label>
                <select value={customProps.font} onChange={(e) => updateProp('font', e.target.value)} className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 cursor-pointer">
                  <option value="Inter">Inter (Default)</option>
                  <option value="Poppins">Poppins (Modern)</option>
                  <option value="Outfit">Outfit (Display)</option>
                  <option value="serif">System Serif</option>
                  <option value="mono">Monospace</option>
                </select>
              </div>

              {/* LAYOUT */}
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2 mb-4"><Box size={14}/> Layout</h4>
                <label className="text-[10px] font-black uppercase text-white/30 mb-2 block tracking-widest">Height / Padding</label>
                <select value={customProps.padding} onChange={(e) => updateProp('padding', e.target.value)} className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 cursor-pointer">
                  <option value="0">Zero Padding</option>
                  <option value="0.5rem 1rem">Compact</option>
                  <option value="1rem 2rem">Standard</option>
                  <option value="1.5rem 3rem">Relaxed</option>
                  <option value="2rem 4rem">Premium Large</option>
                </select>
              </div>

              {/* PRESETS */}
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2 mb-4"><Zap size={14}/> Quick Presets</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setCustomProps({...customProps, bgColor: "#09090b", textColor: "#ffffff", padding: "1rem 2rem"})} className="bg-black border border-white/10 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-lg hover:border-white/30 transition-colors">Midnight</button>
                  <button onClick={() => setCustomProps({...customProps, bgColor: "#ffffff", textColor: "#000000", padding: "1rem 2rem"})} className="bg-white border border-black/10 text-black text-[10px] font-black uppercase tracking-widest py-3 rounded-lg hover:bg-gray-100 transition-colors">Alpine</button>
                  <button onClick={() => setCustomProps({...customProps, bgColor: "transparent", padding: "0.5rem"})} className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest py-3 rounded-lg hover:brightness-125 transition-all">Glass</button>
                  <button onClick={() => setCustomProps({...customProps, bgColor: "#6366f1", textColor: "#ffffff"})} className="bg-indigo-600 border border-indigo-500 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-lg hover:bg-indigo-500 transition-colors">Primary</button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL PREVIEW MODAL */}
      <AnimatePresence>
        {previewNav && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setPreviewNav(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full h-full max-w-7xl md:max-h-[85vh] bg-[#09090b] overflow-hidden md:rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col">
              
              {/* MODAL HEADER */}
              <div className="p-6 md:p-10 flex items-center justify-between border-b border-white/5 bg-[#111] z-10">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-indigo-500 group rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Rocket className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none mb-2">{previewNav.name}</h2>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{previewNav.tag}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleUseThis(previewNav.id, previewNav.componentName, customProps[previewNav.id] || previewNav.defaultProps)} className="hidden md:flex bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] items-center gap-3 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                    <Zap size={18} fill="currentColor" /> Add to Builder
                  </button>
                  <button onClick={() => setPreviewNav(null)} className="p-4 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-2xl transition-all border border-white/5 shadow-xl">
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* MODAL CANVAS */}
              <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] flex items-start justify-center p-6 md:p-24 relative group">
                <div className="w-full relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 rounded-2xl overflow-hidden bg-[#09090b]">
                  {(() => {
                    const ComponentRenderer = (allNavbars as any)[previewNav.componentName];
                    const props = customProps[previewNav.id] || previewNav.defaultProps;
                    return ComponentRenderer ? <ComponentRenderer {...props} /> : <div className="p-20 text-center text-white/20 font-black uppercase tracking-widest text-xs">Navigation Preview Unavailable</div>;
                  })()}
                </div>
              </div>

              {/* MOBILE MODAL FOOTER */}
              <div className="md:hidden p-6 border-t border-white/5 bg-[#111]">
                 <button onClick={() => handleUseThis(previewNav.id, previewNav.componentName, customProps[previewNav.id] || previewNav.defaultProps)} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
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





