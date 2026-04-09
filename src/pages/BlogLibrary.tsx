
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, List, SlidersHorizontal, Check, Copy, Zap, 
  X, Eye, Menu as MenuIcon, Rocket, Edit3, 
  AlertCircle, Search, MessageSquare, Plus, ChevronDown,
  Layout, Grid, Image, Share2, Mail, Info, MapPin, Scale, Download, MousePointer2, Sparkles, BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { blogCategories, blogLibrary, generateBlogCode } from '../data/blogLibrary';
import { allBlogs } from '../components/library/Blog';
import { PreviewContainer } from '../components/shared/PreviewContainer';

export default function BlogLibrary() {
  const navigate = useNavigate();
  const { addComponent } = useBuilder();
  
  const [activeCategory, setActiveCategory] = useState("Basic");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [customProps, setCustomProps] = useState<any>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewBlog, setPreviewBlog] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const activeGroup = blogLibrary.find(g => g.category === activeCategory);
  
  const handleCustomize = (blog: any) => {
    setSelectedBlog(blog);
    if (!customProps[blog.id]) {
        setCustomProps({ 
            ...customProps, 
            [blog.id]: { 
                ...blog.defaultProps,
                enableSidebar: false,
                enableSearch: true,
                showMetadata: true,
                animation: true,
                hoverEffect: true
            } 
        });
    }
  };
  const handleUseThis = (item: any) => {
    const props = customProps[item.id] || item.defaultProps;
    addComponent(item.componentName, props);
    // Removed navigation to allow multi-adds
  };

  const handleCopyCode = (blog: any) => {
    const code = generateBlogCode(blog.componentName, customProps[blog.id] || blog.defaultProps);
    navigator.clipboard.writeText(code);
    setCopiedId(blog.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const updateProp = (key: string, value: any) => {
    if (selectedBlog) {
      setCustomProps({ 
        ...customProps, 
        [selectedBlog.id]: { 
            ...(customProps[selectedBlog.id] || selectedBlog.defaultProps),
            [key]: value 
        } 
      });
    }
  };

  const SidebarContent = () => (
    <div className="p-6">
      <h2 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8 px-4">Publication Hub</h2>
      <div className="space-y-1">
        {blogCategories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelectedBlog(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-between group ${
                isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
              {isActive && <motion.div layoutId="activeBlog" className="w-1.5 h-1.5 bg-white rounded-full" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-[#09090b] overflow-hidden font-inter">
      
      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3">
            <Check size={18}/> Component Added Successfully
          </motion.div>
        )}
        {copiedId && (
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] bg-indigo-600 text-white px-8 py-4 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3">
                <Check size={18}/> Code Copied to Clipboard
            </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#09090b] z-20">
        <h1 className="text-xl font-black text-white tracking-tighter uppercase">{activeCategory}</h1>
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-white/60 hover:text-white bg-white/5 rounded-xl">
          <MenuIcon size={24} />
        </button>
      </div>

      {/* LEFT SIDEBAR */}
      <div className="w-64 border-r border-white/5 bg-[#09090b] flex flex-col h-full overflow-y-auto hidden md:flex shrink-0 custom-scrollbar">
        <SidebarContent />
      </div>

      {/* CENTER CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 md:p-12 relative custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.03),transparent)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
               <span className="w-8 h-px bg-indigo-500" />
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em]">SiteStudio Publication Engine</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{activeCategory} <BookOpen className="text-white w-6 h-6" />
Sections</h1>
            <p className="text-white/40 font-medium text-lg max-w-xl leading-relaxed">Launch professional publication channels with 40+ blog layouts designed for maximum readability.</p>
          </div>
          <div className="flex items-center bg-[#111] border border-white/5 p-1.5 rounded-2xl shadow-2xl">
            <button onClick={() => setViewMode('grid')} className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'grid' ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-white/30 hover:text-white"}`}><LayoutGrid size={20} /></button>
            <button onClick={() => setViewMode('list')} className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'list' ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-white/30 hover:text-white"}`}><List size={20} /></button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12" : "flex flex-col gap-8 md:gap-12"}>
          {activeGroup?.items.map((blog) => {
            const ComponentRenderer = (allBlogs as any)[blog.componentName];
            const currentProps = customProps[blog.id] || blog.defaultProps;

            return (
              <motion.div key={blog.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={`bg-[#111] rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden flex flex-col ${selectedBlog?.id === blog.id ? "border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.1)]" : "border-white/5 hover:border-white/10 hover:shadow-2xl"}`}>
                
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
                    {ComponentRenderer ? <ComponentRenderer {...currentProps} isPreview={true} /> : <div className="p-20 text-white uppercase text-xs font-black tracking-widest text-center">Article Loading...</div>}
                </PreviewContainer>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(blog); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(blog); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(blog); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(blog); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(blog); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(blog); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover/preview:opacity-100 flex gap-2 transition-opacity duration-300 z-50">
                     <button onClick={(e) => { e.stopPropagation(); handleCustomize(blog); }} className="bg-indigo-600/90 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 shadow-xl backdrop-blur-md">
                         <SlidersHorizontal size={14}/> Customize
                     </button>
                     <button onClick={(e) => { e.stopPropagation(); handleCopyCode(blog); }} className="bg-[#18181b]/90 border border-white/10 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1f1f23]/90 shadow-xl backdrop-blur-md">
                         <Copy size={14}/> Copy Code
                     </button>
                  </div>
                </div>

                 {/* INFO */}
                <div className="p-8 md:p-10 border-t border-white/5">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                           <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.2em]">{blog.tag}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-2">{blog.name}</h3>
                        <p className="text-white/40 text-sm font-medium leading-relaxed max-w-md">{blog.desc}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => handleCopyCode(blog)} className="p-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-2xl border border-white/5 transition-all active:scale-95">
                           {copiedId === blog.id ? <Check size={20} className="text-emerald-400"/> : <Copy size={20}/>}
                        </button>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                     <button onClick={() => setPreviewBlog(blog)} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl border border-white/5 flex justify-center items-center gap-2 transition active:scale-95 group-hover:border-indigo-500/30">
                        <Eye size={16}/> VIEW
                     </button>
                     <button onClick={() => handleUseThis(blog)} className="flex-[1.5] bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl shadow-indigo-600/20 transition active:scale-95">
                        <Zap size={16} fill="currentColor"/> ADD TO BUILDER
                     </button>
                  </div>
                </div></motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDEBAR CUSTOMIZE */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed md:relative right-0 top-0 bottom-0 md:top-auto md:bottom-auto w-full max-w-[400px] border-l border-white/5 bg-[#09090b] overflow-y-auto shrink-0 flex flex-col pb-20 z-100 shadow-[0_0_100px_rgba(0,0,0,0.5)] custom-scrollbar">
            
            <div className="p-8 border-b border-white/5 sticky top-0 bg-[#09090b]/90 backdrop-blur-xl z-10 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-3 mb-1">
                   <SlidersHorizontal size={18} className="text-indigo-500"/>
                   <h3 className="text-white font-black text-xl tracking-tight uppercase">Blog Config</h3>
                </div>
                <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">{selectedBlog.name}</p>
              </div>
              <button onClick={() => setSelectedBlog(null)} className="p-3 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-2xl text-white/30 transition-all active:scale-90"><X size={20}/></button>
            </div>

            <div className="p-8 space-y-12">
              {/* COLORS */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-3">Styling Tokens</h4>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-widest block">Accent / Links</label>
                    <div className="flex gap-3">
                       <input type="color" value={(customProps[selectedBlog.id] || selectedBlog.defaultProps).accentColor || (customProps[selectedBlog.id] || selectedBlog.defaultProps).tagColor} onChange={(e) => updateProp('accentColor', e.target.value)} className="w-14 h-14 rounded-2xl cursor-pointer bg-white/5 border border-white/10 p-1" />
                       <input type="text" value={(customProps[selectedBlog.id] || selectedBlog.defaultProps).accentColor || ""} onChange={(e) => updateProp('accentColor', e.target.value)} className="flex-1 bg-[#111] border border-white/5 rounded-2xl px-4 text-xs text-white font-mono focus:border-indigo-500 outline-none transition" />
                    </div>
                  </div>
                </div>
              </div>

              {/* LOGIC TOGGLES */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-3"><Zap size={14}/> Features</h4>
                <div className="space-y-2">
                   {[
                        { label: "Enable Widget Sidebar", key: "enableSidebar" },
                        { label: "Show Date & Auth Meta", key: "showMetadata" },
                        { label: "Enable Card Animations", key: "animation" },
                        { label: "Interactive Hover FX", key: "hoverEffect" }
                   ].map(feat => (
                        <div key={feat.key} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                            <span className="text-xs text-white/60 font-medium">{feat.label}</span>
                            <button onClick={() => updateProp(feat.key, !(customProps[selectedBlog.id]?.hasOwnProperty(feat.key) ? customProps[selectedBlog.id][feat.key] : true))} 
                                className={`w-10 h-6 rounded-full relative transition-colors ${((customProps[selectedBlog.id] || {})[feat.key] !== false) ? 'bg-indigo-600' : 'bg-white/10'}`}>
                                <motion.div animate={{ x: ((customProps[selectedBlog.id] || {})[feat.key] !== false) ? 16 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"/>
                            </button>
                        </div>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL PREVIEW MODAL */}
      <AnimatePresence>
        {previewBlog && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-12 overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreviewBlog(null)} className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }}
              className="relative w-full h-full max-w-screen-2xl bg-[#09090b] overflow-hidden md:rounded-[4rem] border border-white/5 shadow-2xl flex flex-col">
              
              <div className="px-8 md:px-12 py-10 flex items-center justify-between border-b border-white/5 bg-[#09090b]">
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-indigo-600/30"><BookOpen size={32}/></div>
                    <div>
                       <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-3">{previewBlog.name}</h2>
                       <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em]">{previewBlog.tag}</p>
                    </div>
                 </div>
                 <button onClick={() => setPreviewBlog(null)} className="p-5 bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 rounded-3xl border border-white/5 transition-all"><X size={32}/></button>
              </div>

              <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent)] p-4 md:p-20 custom-scrollbar">
                 <div className="bg-[#09090b] border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl min-h-full pb-20">
                    {(() => {
                        const ComponentRenderer = (allBlogs as any)[previewBlog.componentName];
                        const props = customProps[previewBlog.id] || previewBlog.defaultProps;
                        return ComponentRenderer ? <ComponentRenderer {...props} /> : <div className="p-20 text-center opacity-20"><BookOpen size={80} className="mx-auto mb-4"/> UNAVAILABLE</div>
                    })()}
                 </div>
              </div>

              <div className="p-8 border-t border-white/5 bg-[#09090b]">
                 <button onClick={() => handleUseThis(previewBlog)} className="w-full bg-indigo-600 text-white py-6 rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 active:scale-95 shadow-xl shadow-indigo-600/20">
                    <Zap size={24} fill="currentColor" /> Deploy Publication Section
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}





