import { useBuilderStore, SelectedComponent } from '../store/useBuilderStore';
import { componentMap } from '../lib/componentMap';
import { useNavigate } from 'react-router-dom';
import { 
  Trash2, GripVertical, Plus, Download, Eye, Smartphone, Tablet, Monitor, 
  Settings, Layers, Save, Code, Share2, Palette, FileText, X, Rocket, CheckCircle2, SlidersHorizontal, Type, Box, Globe
} from 'lucide-react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Builder() {
  const { sections, order, removeComponent, moveComponent, clearComponents, setSections, updateSection, projectName, setProjectName } = useBuilderStore();
  const selectedComponents = order.map(id => sections[id]).filter(c => c);
  const navigate = useNavigate();
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SelectedComponent | null>(null);

  const updateProp = (key: string, value: any) => {
    if (!selectedSection) return;
    updateSection(selectedSection.id, { [key]: value });
    setSelectedSection(useBuilderStore.getState().sections[selectedSection.id]);
  };

  const [showExportOptions, setShowExportOptions] = useState(false);

  const handleExportReact = async () => {
    const { downloadProjectZip } = await import('../utils/exportUtils');
    await downloadProjectZip(selectedComponents, projectName);
    setShowExportOptions(false);
  };

  const handleExportHTML = async () => {
    const { generateStaticHTML } = await import('../utils/exportUtils');
    const html = generateStaticHTML(selectedComponents, projectName);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectName.toLowerCase().replace(/\s+/g, '_')}_static.html`;
    link.click();
    setShowExportOptions(false);
  };

  const handleExportJSON = () => {
    const projectData = {
      name: projectName || "Untitled Project",
      exportedAt: new Date().toISOString(),
      sections: selectedComponents.map(c => ({
        id: c.id,
        type: c.componentKey,
        props: c.props
      }))
    };
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${(projectName || 'project').toLowerCase().replace(/\s+/g, '_')}_export.json`;
    link.click();
    setShowExportOptions(false);
  };

  const handleExport = () => {
    if (!selectedComponents.length) return;
    setShowExportOptions(true);
  };

  const handleSaveProject = async () => {
    if (!selectedComponents.length) return;
    setIsSaving(true);
    try {
      const projectData = {
        name: projectName || "Untitled Project",
        createdAt: new Date(),
        sections: selectedComponents.map(c => ({
          id: c.id,
          type: c.componentKey,
          props: c.props
        })),
        componentKeys: selectedComponents.map(c => c.componentKey) // for preview thumbnails
      };

      await addDoc(collection(db, "projects"), projectData);
      
      // Optional: Local Storage Backup
      localStorage.setItem("project", JSON.stringify(projectData.sections));
      
      setSaveSuccess(true);
      
      // Keep successful state for 2 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving project:", error);
      alert('Failed to save project. Ensure Firebase is configured.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#09090b]">
      {/* Sidebar - Component Order */}
      <aside className="w-96 border-r border-white/5 bg-[#111111]/90 backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl z-20">
        <div className="p-10 border-b border-white/5 bg-black/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/10 shadow-inner text-indigo-400">
              <Layers size={20} />
            </div>
            <h2 className="font-black text-xs uppercase tracking-[0.3em] text-white/90">Page Structure</h2>
          </div>
          
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400/30 group-focus-within:text-indigo-400 transition-colors">
                <Type size={14} />
              </div>
              <input 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-[#09090b] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white font-black text-[10px] uppercase tracking-widest focus:border-indigo-500/50 transition-all outline-none"
                placeholder="ENTER PROJECT TITLE..."
              />
            </div>
            
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Stack Integrity</span>
              <span className="bg-indigo-500/10 text-[9px] font-black px-3 py-1 rounded-full text-indigo-400 border border-indigo-500/10 uppercase tracking-widest leading-none">
                {selectedComponents.length} ELEMENTS
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6 custom-scrollbar">
          {!selectedComponents.length ? (
             <div className="text-center py-32 px-10 border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.01]">
               <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/5 mx-auto mb-8 border border-white/5">
                 <Plus size={40} />
               </div>
               <p className="text-[10px] text-white/20 leading-relaxed font-black uppercase tracking-[0.3em] mb-8">Empty Canvas</p>
               <button onClick={() => navigate('/components')} className="w-full py-5 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-[2rem] text-[10px] uppercase font-black transition-all tracking-[0.2em] border border-indigo-600/20 active:scale-95 shadow-2xl">Browse Library</button>
             </div>
          ) : (
            <Reorder.Group axis="y" values={selectedComponents} onReorder={setSections} className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {selectedComponents.map((item, index) => (
                  <Reorder.Item 
                    key={item.id} 
                    value={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 30 }}
                    className={`p-6 bg-[#18181b] hover:bg-[#1f1f23] border ${selectedSection?.id === item.id ? 'border-indigo-500' : 'border-white/5'} rounded-[2.5rem] cursor-grab active:cursor-grabbing flex items-center gap-5 group transition-all shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)]`}
                    onClick={() => setSelectedSection(item)}
                  >
                    <div className="text-white/10 group-hover:text-indigo-400 transition-colors">
                       <GripVertical size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-black uppercase text-indigo-400/50 tracking-[0.3em] leading-none mb-2 line-clamp-1">
                         {item.componentKey.split('-')[0]}
                      </div>
                      <div className="text-xs font-black text-white/70 line-clamp-1 uppercase tracking-tight leading-none">{item.componentKey.replace(/-/g, ' ')}</div>
                    </div>
                    <button onClick={() => removeComponent(item.id)} className="p-3 opacity-0 group-hover:opacity-100 text-white/10 hover:text-rose-500 transition-all rounded-xl hover:bg-rose-500/10 active:scale-90">
                      <X size={18} strokeWidth={4} />
                    </button>
                  </Reorder.Item>
                ))}
              </AnimatePresence>
            </Reorder.Group>
          )}
        </div>

        <div className="p-8 border-t border-white/5 grid grid-cols-5 gap-4 bg-black/40">
           <button onClick={handleSaveProject} disabled={isSaving || !selectedComponents.length} className="col-span-3 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-30 active:scale-95 shadow-2xl shadow-indigo-600/20">
             {isSaving ? <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" /> : saveSuccess ? <><CheckCircle2 size={20} strokeWidth={3} /> Saved</> : <><Save size={20} /> Save Project</>}
           </button>
           <button onClick={() => clearComponents()} disabled={!selectedComponents.length} className="col-span-2 py-5 bg-white/5 hover:bg-rose-600/10 text-white/20 hover:text-rose-400 rounded-[2rem] border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-30 active:scale-95">
             <Trash2 size={20} />
           </button>
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent)]">
        {/* Top bar controls */}
        <div className="h-24 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-2xl flex items-center justify-between px-12 z-10 shadow-2xl">
          <div className="flex items-center gap-3 p-2 bg-[#18181b] rounded-[1.75rem] border border-white/5 shadow-inner">
            <button onClick={() => setDevice('desktop')} className={`p-4 rounded-xl transition-all shadow-2xl ${device === 'desktop' ? 'bg-indigo-600 text-white shadow-indigo-600/40' : 'text-white/10 hover:text-white/50 hover:bg-white/5'}`}>
              <Monitor size={18} />
            </button>
            <button onClick={() => setDevice('tablet')} className={`p-4 rounded-xl transition-all shadow-2xl ${device === 'tablet' ? 'bg-indigo-600 text-white shadow-indigo-600/40' : 'text-white/10 hover:text-white/50 hover:bg-white/5'}`}>
              <Tablet size={18} />
            </button>
            <button onClick={() => setDevice('mobile')} className={`p-4 rounded-xl transition-all shadow-2xl ${device === 'mobile' ? 'bg-indigo-600 text-white shadow-indigo-600/40' : 'text-white/10 hover:text-white/50 hover:bg-white/5'}`}>
              <Smartphone size={18} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/live-preview')} className="bg-[#18181b] hover:bg-[#1f1f23] text-white px-8 py-4.5 rounded-[1.75rem] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 transition-all border border-white/5 shadow-2xl active:scale-95 group">
              <Eye size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" /> Live Demo
            </button>
            <button onClick={handleExport} className="bg-white text-[#09090b] px-10 py-4.5 rounded-[1.75rem] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.3)] active:scale-95 group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> Export Code
            </button>
          </div>
        </div>

        {/* Live Rendering Canvas */}
        <div className="flex-1 overflow-y-auto p-20 custom-scrollbar flex flex-col items-center">
          <div className={`bg-[#09090b] shadow-[0_80px_150px_-50px_rgba(0,0,0,1)] rounded-[4.5rem] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border-[16px] border-[#18181b] ring-1 ring-white/5 ${device === 'desktop' ? 'w-full' : device === 'tablet' ? 'max-w-4xl' : 'max-w-md h-[850px] border-y-[100px]'}`}>
            {!selectedComponents.length ? (
              <div className="h-[700px] flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent)] uppercase">
                 <div className="text-center">
                   <div className="w-32 h-32 bg-[#18181b] rounded-full flex items-center justify-center text-white/5 mx-auto mb-10 border border-white/5 shadow-inner">
                     <Monitor size={64} className="opacity-10" />
                   </div>
                   <p className="text-white/20 text-[11px] font-black tracking-[0.5em] leading-none">Ready for Materialization</p>
                 </div>
              </div>
            ) : (
              selectedComponents.map((item) => {
                const Component = componentMap[item.componentKey];
                if (!Component) return <div key={item.id} className="p-32 text-center bg-rose-500/5 text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] border-y border-rose-500/10">Registry Fault: {item.componentKey}</div>;
                
                return (
                  <div key={item.id} className="relative group/canvas">
                    <Component {...item.props} />
                    <div className="absolute inset-0 border-4 border-transparent group-hover/canvas:border-indigo-500/40 pointer-events-none transition-all z-10" />
                    <div className="absolute top-10 right-10 flex gap-4 opacity-0 group-hover/canvas:opacity-100 transition-all z-20 translate-x-8 group-hover/canvas:translate-x-0">
                      <button onClick={(e) => { e.stopPropagation(); removeComponent(item.id); if (selectedSection?.id === item.id) setSelectedSection(null); }} className="p-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl shadow-[0_20px_40px_rgba(225,29,72,0.4)] transition-all active:scale-90"><Trash2 size={20}/></button>
                      <button onClick={(e) => { e.stopPropagation(); setSelectedSection(item); }} className="p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-[0_20px_40px_rgba(79,70,229,0.4)] transition-all active:scale-90"><Settings size={20}/></button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>

      {/* Right Customization Sidebar */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 350, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
            className="border-l border-white/5 bg-[#111113] overflow-y-auto shrink-0 flex flex-col z-30 shadow-2xl relative">
            <div className="p-6 border-b border-white/5 sticky top-0 bg-[#111113]/90 backdrop-blur z-10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2"><SlidersHorizontal size={18} className="text-indigo-400"/> Customize Object</h3>
                <p className="text-[10px] text-white/40 mt-1 uppercase font-black tracking-widest">{selectedSection.componentKey}</p>
              </div>
              <button onClick={() => setSelectedSection(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/50"><X size={16}/></button>
            </div>

            <div className="p-6 space-y-10 pb-32">
              {/* COLORS */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Palette size={14}/> Appearance</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Background</label>
                    <div className="flex gap-2">
                       <input type="color" value={selectedSection.props.bgColor || "#09090b"} onChange={(e) => updateProp('bgColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={selectedSection.props.bgColor || ""} onChange={(e) => updateProp('bgColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Text Color</label>
                    <div className="flex gap-2">
                       <input type="color" value={selectedSection.props.textColor || "#ffffff"} onChange={(e) => updateProp('textColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={selectedSection.props.textColor || ""} onChange={(e) => updateProp('textColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Accent</label>
                    <div className="flex gap-2">
                       <input type="color" value={selectedSection.props.accentColor || "#6366f1"} onChange={(e) => updateProp('accentColor', e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
                       <input type="text" value={selectedSection.props.accentColor || ""} onChange={(e) => updateProp('accentColor', e.target.value)} className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-2 text-[10px] text-white font-mono uppercase" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Type size={14}/> Text Content</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Section Title</label>
                    <input type="text" value={selectedSection.props.title || ""} onChange={(e) => updateProp('title', e.target.value)} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-white/20 mb-2 block">Description</label>
                    <textarea value={selectedSection.props.description || selectedSection.props.desc || ""} onChange={(e) => { updateProp('description', e.target.value); updateProp('desc', e.target.value); }} className="w-full bg-[#09090b] border border-white/10 rounded-xl p-3 text-sm text-white min-h-[80px]" />
                  </div>
                </div>
              </div>
              
              {/* CONFIGURATION */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2"><Box size={14}/> Config / Layout</h4>
                <div className="flex items-center justify-between">
                   <label className="text-xs font-bold text-white/60">Hover Animations</label>
                   <button onClick={() => updateProp('hoverEffect', !selectedSection.props.hoverEffect)} className={`w-12 h-6 rounded-full transition-colors relative ${selectedSection.props.hoverEffect !== false ? 'bg-indigo-600' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${selectedSection.props.hoverEffect !== false ? 'left-7' : 'left-1'}`} />
                   </button>
                </div>
                <div className="flex items-center justify-between">
                   <label className="text-xs font-bold text-white/60">Animations</label>
                   <button onClick={() => updateProp('animation', !selectedSection.props.animation)} className={`w-12 h-6 rounded-full transition-colors relative ${selectedSection.props.animation !== false ? 'bg-indigo-600' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${selectedSection.props.animation !== false ? 'left-7' : 'left-1'}`} />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export Options Modal */}
      <AnimatePresence>
        {showExportOptions && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8 md:p-12" onClick={() => setShowExportOptions(false)}>
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} onClick={e => e.stopPropagation()} className="bg-[#09090b] border border-white/10 rounded-[3rem] w-full max-w-4xl p-12 md:p-16 shadow-[0_80px_150px_-40px_rgba(0,0,0,1)] relative overflow-hidden ring-1 ring-white/5">
               <div className="absolute top-8 right-8">
                 <button onClick={() => setShowExportOptions(false)} className="bg-white/5 hover:bg-rose-500/10 p-4 rounded-2xl text-white/20 hover:text-rose-500 transition-all active:scale-90 border border-white/5 shadow-xl"><X size={24} strokeWidth={3} /></button>
               </div>
               
               <div className="mb-12">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 shadow-inner border border-indigo-500/10">
                    <Download size={32} />
                  </div>
                  <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Generate Stack</h2>
                  <p className="text-white/30 text-lg leading-relaxed font-medium uppercase tracking-widest text-xs">Transform your canvas into a production-ready infrastructure.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* React Export */}
                  <button onClick={handleExportReact} className="p-8 bg-[#18181b] border border-white/5 rounded-[2rem] flex flex-col items-center text-center gap-6 group hover:bg-indigo-600/10 hover:border-indigo-500/30 transition-all active:scale-[0.98] shadow-2xl relative">
                    <div className="p-5 bg-black rounded-2xl text-indigo-400 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all border border-white/5">
                      <Rocket size={32} />
                    </div>
                    <div>
                        <div className="text-lg font-black text-white mb-2 uppercase tracking-tight">React Project</div>
                        <div className="text-[9px] uppercase font-black tracking-[0.2em] text-white/20 group-hover:text-indigo-400/50 transition-colors">FULL ZIP • VITE • TAILWIND</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-indigo-500/20 text-indigo-400 text-[8px] font-black px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-widest leading-none">Recommended</div>
                  </button>

                  {/* HTML Export */}
                  <button onClick={handleExportHTML} className="p-8 bg-[#18181b] border border-white/5 rounded-[2rem] flex flex-col items-center text-center gap-6 group hover:bg-[#1f1f23] hover:border-white/10 transition-all active:scale-[0.98] shadow-2xl">
                    <div className="p-5 bg-black rounded-2xl text-white/20 group-hover:text-white transition-all border border-white/5">
                      <Globe size={32} />
                    </div>
                    <div>
                        <div className="text-lg font-black text-white mb-2 uppercase tracking-tight">Static HTML</div>
                        <div className="text-[9px] uppercase font-black tracking-[0.2em] text-white/20 transition-colors">SINGLE FILE • CDN ASSETS</div>
                    </div>
                  </button>

                  {/* JSON Export */}
                  <button onClick={handleExportJSON} className="p-8 bg-[#18181b] border border-white/5 rounded-[2rem] flex flex-col items-center text-center gap-6 group hover:bg-[#1f1f23] hover:border-white/10 transition-all active:scale-[0.98] shadow-2xl">
                    <div className="p-5 bg-black rounded-2xl text-white/20 group-hover:text-white transition-all border border-white/5">
                      <Code size={32} />
                    </div>
                    <div>
                        <div className="text-lg font-black text-white mb-2 uppercase tracking-tight">Data Package</div>
                        <div className="text-[9px] uppercase font-black tracking-[0.2em] text-white/20 transition-colors">JSON SCHEMA • PORTABLE</div>
                    </div>
                  </button>
               </div>
               
               <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4 text-indigo-400">
                    <div className="p-2 bg-indigo-500/10 rounded-lg"><CheckCircle2 size={16}/></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ready for Materialization</span>
                  </div>
                  <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">{selectedComponents.length} ELEMENTS SERIALIZED</span>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
