import { useBuilderStore, SelectedComponent } from '../store/useBuilderStore';
import { resolveComponentByKey } from '../lib/componentMap';
import { componentsRegistry } from '../registry/componentsRegistry';
import { useNavigate } from 'react-router-dom';
import { 
  Trash2, GripVertical, Plus, Download, Eye, Smartphone, Tablet, Monitor, 
  Settings, Layers, Save, Code, Share2, Palette, FileText, X, Rocket, CheckCircle2, 
  SlidersHorizontal, Type, Box, Globe, ChevronRight, Search, Layout as LayoutIcon,
  MousePointer2, Sparkles, Wand2, ArrowLeft, History, Redo2, Undo2, ChevronDown, ChevronUp
} from 'lucide-react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Frame from 'react-frame-component';
import { Button, Input, SidebarItem } from '../components/ui/StandardUI';

const CATEGORY_GROUPS = {
  'Layout': ['navbar', 'hero', 'footer', 'cta'],
  'Content': ['features', 'about', 'services', 'pricing', 'testimonials', 'faq', 'blog', 'gallery', 'stats'],
  'Forms': ['contact']
};

export default function Builder() {
  const { sections, order, addComponent, removeComponent, reorder, clearComponents, setSections, updateSection, projectName, setProjectName } = useBuilderStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'library' | 'layers'>('library');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Layout', 'Content', 'Forms']);
  const [exportStack, setExportStack] = useState<'react' | 'html' | 'next'>('react');
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStage, setExportStage] = useState<'idle' | 'prepare' | 'images' | 'zip' | 'ready'>('idle');
  const [exportMessage, setExportMessage] = useState('Preparing Files...');
  const [previewMatch, setPreviewMatch] = useState<boolean | null>(null);
  const [structuredDrafts, setStructuredDrafts] = useState<Record<string, string>>({});
  const [structuredErrors, setStructuredErrors] = useState<Record<string, string>>({});

  const selectedSection = selectedId ? sections[selectedId] : null;

  const filteredRegistry = useMemo(() => {
    if (!searchTerm) return componentsRegistry;
    return componentsRegistry.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleAddComponent = (componentKey: string) => {
    const comp = componentsRegistry.find(c => c.componentKey === componentKey);
    const defaultProps = comp?.defaultSettings || {};
    addComponent(componentKey, defaultProps);
  };

  const structuredFieldId = (sectionId: string, key: string) => `${sectionId}:${key}`;

  const commitStructuredProp = (sectionId: string, key: string, rawValue: string) => {
    const id = structuredFieldId(sectionId, key);
    try {
      const parsed = JSON.parse(rawValue);
      updateSection(sectionId, { [key]: parsed });
      setStructuredErrors(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    } catch {
      setStructuredErrors(prev => ({ ...prev, [id]: 'Invalid JSON. Please fix syntax and try again.' }));
    }
  };

  const handleSave = async () => {
    if (order.length === 0) return alert('Add some components before saving!');
    setIsSaving(true);
    try {
      const projectData = {
        name: projectName,
        sections: order.map(id => ({
          id,
          componentKey: sections[id].componentKey,
          props: sections[id].props
        })),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await addDoc(collection(db, 'projects'), projectData);
      alert('Project saved to cloud!');
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportProgress(0);
    setExportStage('prepare');
    setExportMessage('Preparing Files...');
    setPreviewMatch(null);

    try {
      const { generateProjectZip } = await import('../lib/exportGenerators');
      const frame = document.getElementById('builder-preview-frame') as HTMLIFrameElement | null;
      const previewHtml = frame?.contentDocument?.body?.innerHTML || '';

      const blob = await generateProjectZip(
        { order, sections, projectName },
        exportStack,
        {
          previewHtml,
          projectName,
          onProgress: (progress: any) => {
            if (typeof progress.percent === 'number') setExportProgress(progress.percent);
            if (typeof progress.message === 'string') setExportMessage(progress.message);
            if (typeof progress.stage === 'string') setExportStage(progress.stage);
            if (typeof progress.previewMatch === 'boolean') setPreviewMatch(progress.previewMatch);
          }
        }
      );

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeName = (projectName || 'sitestudio-project').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      a.download = `${safeName}-${exportStack}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportProgress(100);
      setExportStage('ready');
      setExportMessage('Download Ready...');
      alert('Project export completed! Check your downloads.');
      setShowExport(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to generate project zip.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#020617] text-[#e2e8f0] overflow-hidden">
      {/* Top Navigation */}
      <header className="h-14 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/projects')} className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all">
            <ArrowLeft size={18} />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Wand2 size={16} />
            </div>
            <input 
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-transparent border-none focus:ring-0 font-bold text-sm text-white w-48 placeholder-slate-600"
              placeholder="Untitled Project"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#020617] p-1 rounded-xl border border-white/5">
          <button onClick={() => setDevice('desktop')} className={`p-1.5 rounded-lg transition-all ${device === 'desktop' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-slate-500 hover:text-white'}`}>
            <Monitor size={16} />
          </button>
          <button onClick={() => setDevice('tablet')} className={`p-1.5 rounded-lg transition-all ${device === 'tablet' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-slate-500 hover:text-white'}`}>
            <Tablet size={16} />
          </button>
          <button onClick={() => setDevice('mobile')} className={`p-1.5 rounded-lg transition-all ${device === 'mobile' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-slate-500 hover:text-white'}`}>
            <Smartphone size={16} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => navigate('/live-preview')}>
            <Eye size={16} /> Live Demo
          </Button>
          <Button variant="ghost" onClick={() => {
            setExportProgress(0);
            setExportStage('idle');
            setExportMessage('Preparing Files...');
            setPreviewMatch(null);
            setShowExport(true);
          }}>
            <Download size={16} /> Export Project
          </Button>
          <Button variant="primary" onClick={handleSave} loading={isSaving}>
            <Save size={16} /> {isSaving ? 'Processing...' : 'Deploy Architecture'}
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-72 border-r border-white/5 bg-[#0f172a] flex flex-col z-40 relative">
          <div className="p-4 flex gap-1 bg-[#020617]/30">
            <button 
              onClick={() => setActiveTab('library')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'library' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white'}`}
            >
              <LayoutIcon size={14} /> Modules
            </button>
            <button 
              onClick={() => setActiveTab('layers')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'layers' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white'}`}
            >
              <Layers size={14} /> Stack
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeTab === 'library' ? (
              <div className="p-4 space-y-6">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                  <input 
                    placeholder="Search modules..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#020617] border border-white/5 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 font-medium"
                  />
                </div>

                {Object.entries(CATEGORY_GROUPS).map(([group, cats]) => (
                  <div key={group} className="space-y-2">
                    <button 
                      onClick={() => toggleCategory(group)}
                      className="w-full flex items-center justify-between text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] px-1 py-2 hover:text-slate-400 transition-colors"
                    >
                      {group}
                      {expandedCategories.includes(group) ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategories.includes(group) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="space-y-1.5 overflow-hidden">
                          {filteredRegistry.filter(c => cats.includes(c.category)).map((comp) => (
                            <motion.button 
                              key={comp.componentKey}
                              whileHover={{ x: 4 }}
                              onClick={() => handleAddComponent(comp.componentKey)}
                              className="w-full group flex items-center justify-between p-3 rounded-xl bg-[#020617]/50 border border-white/5 hover:border-purple-500/50 hover:bg-purple-600/5 transition-all text-left"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#0f172a] border border-white/5 flex items-center justify-center text-slate-500 group-hover:text-purple-400 group-hover:bg-[#020617] transition-all">
                                  <LayoutIcon size={16} />
                                </div>
                                <div>
                                  <div className="text-[11px] font-black text-white leading-none mb-1 group-hover:text-purple-300 transition-colors uppercase tracking-tight">{comp.name}</div>
                                  <div className="text-[9px] text-slate-600 uppercase font-black tracking-widest">{comp.category}</div>
                                </div>
                              </div>
                              <Plus size={14} className="text-slate-700 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4">
                {order.length === 0 ? (
                  <div className="text-center py-20 px-4 border-2 border-dashed border-white/5 rounded-2xl">
                    <Layers size={32} className="mx-auto text-slate-700 mb-4 opacity-50" />
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Stack is empty</p>
                  </div>
                ) : (
                  <Reorder.Group axis="y" values={order} onReorder={reorder} className="space-y-2">
                    {order.map((id) => (
                      <Reorder.Item 
                        key={id} 
                        value={id}
                        className={`group flex items-center gap-3 p-3 rounded-xl border transition-all cursor-grab active:cursor-grabbing ${selectedId === id ? 'bg-purple-600/20 border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]' : 'bg-[#020617]/50 border-white/5 hover:border-slate-700'}`}
                        onClick={() => setSelectedId(id)}
                      >
                        <GripVertical size={14} className={selectedId === id ? 'text-purple-400' : 'text-slate-700'} />
                        <div className="flex-1 min-w-0">
                          <div className={`text-[11px] font-black uppercase tracking-tight truncate ${selectedId === id ? 'text-white' : 'text-slate-400'}`}>
                            {sections[id].componentKey.split('-').join(' ')}
                          </div>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeComponent(id); if (selectedId === id) setSelectedId(null); }}
                          className={`p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all ${selectedId === id ? 'hover:bg-white/10 text-white' : 'hover:bg-red-500/10 text-red-500'}`}
                        >
                          <Trash2 size={12} />
                        </button>
                      </Reorder.Item>
                    ))}
                  </Reorder.Group>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 bg-[#020617] relative overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 md:p-12 custom-scrollbar">
            <div 
              className={`mx-auto bg-white shadow-2xl transition-all duration-500 relative min-h-full overflow-hidden rounded-md ${
                device === 'mobile' ? 'max-w-[375px]' : device === 'tablet' ? 'max-w-[768px]' : 'max-w-[1280px]'
              }`}
            >
              <Frame
                id="builder-preview-frame"
                className="w-full h-full min-h-[calc(100vh-10rem)] block"
                head={
                  <>
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                    <style>{`
                      body { margin: 0; padding: 0; overflow-x: hidden; font-family: 'Inter', system-ui, sans-serif; cursor: default; }
                      * { box-sizing: border-box; }
                      img, video, svg, canvas { max-width: 100%; height: auto; }
                      .builder-section { position: relative; cursor: pointer; transition: all 0.2s; }
                      .builder-section { width: 100%; max-width: 100%; overflow: hidden; }
                      .builder-section > * { width: 100%; max-width: 100%; }
                      .builder-section:hover { box-shadow: inset 0 0 0 2px rgba(139,92,246,0.3); }
                      .builder-section.selected { box-shadow: inset 0 0 0 2px #8b5cf6; }
                      .builder-section.selected::after { 
                        content: 'SELECTED'; 
                        position: absolute; 
                        top: 10px; 
                        right: 10px; 
                        background: #8b5cf6; 
                        color: white; 
                        font-size: 8px; 
                        font-weight: 900; 
                        padding: 2px 6px; 
                        border-radius: 4px; 
                        letter-spacing: 1px;
                        z-index: 50;
                      }
                    `}</style>
                  </>
                }
              >
                <div className="flex flex-col">
                  {order.map((id) => {
                    const section = sections[id];
                    if (!section) return null;
                    const Component = resolveComponentByKey(section.componentKey);
                    if (!Component) return null;
                    return (
                      <div 
                        key={id} 
                        className={`builder-section ${selectedId === id ? 'selected' : ''}`}
                        onClick={() => setSelectedId(id)}
                      >
                        <Component {...section.props} />
                      </div>
                    );
                  })}
                  {order.length === 0 && (
                    <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-300">
                      <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200 mb-6 shadow-inner border border-slate-100">
                        <Plus size={40} />
                      </div>
                      <h2 className="text-2xl font-black text-slate-800 mb-2">Architect Your Vision</h2>
                      <p className="text-slate-400 max-w-sm text-center text-sm">Select architectural modules from the left library to begin construction.</p>
                    </div>
                  )}
                </div>
              </Frame>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className={`w-80 border-l border-white/5 bg-[#0f172a] flex flex-col transition-all duration-300 z-40 ${!selectedId ? 'translate-x-full opacity-0 absolute right-0' : 'relative opacity-100'}`}>
          {selectedSection ? (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#020617]/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Settings size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white leading-none mb-1 uppercase tracking-tight">Configuration</div>
                    <div className="text-[9px] text-slate-600 font-black uppercase tracking-widest">{selectedSection.componentKey}</div>
                  </div>
                </div>
                <button onClick={() => setSelectedId(null)} className="p-1.5 hover:bg-white/5 rounded-lg text-slate-600 hover:text-white transition-all">
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
                {/* Visual Settings Section */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Palette size={12} /> Design
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Text</label>
                      <input 
                        type="color" 
                        value={selectedSection.props.textColor || '#000000'}
                        onChange={(e) => updateSection(selectedId!, { textColor: e.target.value })}
                        className="w-full h-10 rounded-xl bg-[#020617] border border-white/5 cursor-pointer p-1"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Back</label>
                      <input 
                        type="color" 
                        value={selectedSection.props.bgColor || '#ffffff'}
                        onChange={(e) => updateSection(selectedId!, { bgColor: e.target.value })}
                        className="w-full h-10 rounded-xl bg-[#020617] border border-white/5 cursor-pointer p-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Settings Section */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                    <FileText size={12} /> Content
                  </h4>
                  
                  {Object.entries(selectedSection.props).map(([key, value]) => {
                    if (key === 'textColor' || key === 'bgColor' || key === 'id') return null;
                    const fieldId = structuredFieldId(selectedId!, key);
                    const isStructured = Array.isArray(value) || (typeof value === 'object' && value !== null);
                    const structuredValue = structuredDrafts[fieldId] ?? (isStructured ? JSON.stringify(value, null, 2) : '');

                    return (
                      <div key={key} className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                        {typeof value === 'boolean' ? (
                          <button 
                            onClick={() => updateSection(selectedId!, { [key]: !value })}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${value ? 'bg-purple-600/10 border-purple-500/50 text-purple-400' : 'bg-[#020617] border-white/5 text-slate-600'}`}
                          >
                            <span className="text-[10px] font-black">{value ? 'ENABLED' : 'DISABLED'}</span>
                            <div className={`w-4 h-4 rounded-full transition-all ${value ? 'bg-purple-500 translate-x-0' : 'bg-slate-800 shadow-inner'}`} />
                          </button>
                        ) : typeof value === 'number' ? (
                          <input
                            type="number"
                            value={Number.isFinite(value as number) ? value : 0}
                            onChange={(e) => {
                              const parsed = Number(e.target.value);
                              updateSection(selectedId!, { [key]: Number.isFinite(parsed) ? parsed : 0 });
                            }}
                            className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 font-medium"
                          />
                        ) : isStructured ? (
                          <>
                            <textarea
                              value={structuredValue}
                              onFocus={() => {
                                setStructuredDrafts(prev => ({
                                  ...prev,
                                  [fieldId]: prev[fieldId] ?? JSON.stringify(value, null, 2)
                                }));
                              }}
                              onChange={(e) => {
                                const nextValue = e.target.value;
                                setStructuredDrafts(prev => ({ ...prev, [fieldId]: nextValue }));
                                setStructuredErrors(prev => {
                                  const next = { ...prev };
                                  delete next[fieldId];
                                  return next;
                                });
                              }}
                              onBlur={() => commitStructuredProp(selectedId!, key, structuredValue)}
                              rows={6}
                              className={`w-full bg-[#020617] border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 resize-none custom-scrollbar font-mono ${structuredErrors[fieldId] ? 'border-red-500/70 focus:ring-red-500/30' : 'border-white/5 focus:ring-purple-500/30'}`}
                            />
                            <p className={`text-[10px] font-bold px-1 ${structuredErrors[fieldId] ? 'text-red-400' : 'text-slate-500'}`}>
                              {structuredErrors[fieldId] || 'JSON field: edit carefully and click outside to apply.'}
                            </p>
                          </>
                        ) : (
                          <textarea 
                            value={String(value ?? '')}
                            onChange={(e) => updateSection(selectedId!, { [key]: e.target.value })}
                            rows={3}
                            className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 resize-none custom-scrollbar font-medium"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Advanced Actions */}
                <div className="pt-6">
                  <Button variant="danger" onClick={() => { removeComponent(selectedId!); setSelectedId(null); }} className="w-full h-12">
                    <Trash2 size={16} /> Delete Module
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-600 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#020617] flex items-center justify-center border border-white/5 shadow-inner">
                <MousePointer2 size={24} className="opacity-50" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-50">Select a module on the canvas to configure parameters.</p>
            </div>
          )}
        </aside>
      </div>

      {/* Export Modal */}
      <AnimatePresence>
        {showExport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowExport(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-3xl bg-[#0f172a] border border-white/10 rounded-[3rem] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
              <div className="p-8 border-b border-white/10 flex items-center justify-between bg-[#020617]/50">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-purple-500/10 rounded-[2rem] text-purple-400 border border-purple-500/20">
                    <Rocket size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Export Architecture</h2>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Select your production tech stack</p>
                  </div>
                </div>
                <button onClick={() => setShowExport(false)} className="p-2 hover:bg-white/5 rounded-xl text-slate-600 hover:text-white transition-all"><X size={28} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-[#020617]/50 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: 'react', name: 'React', desc: 'Production-ready Vite React project', icon: <Rocket size={24}/>, color: 'from-blue-500 to-cyan-500' },
                    { id: 'html', name: 'HTML/CSS/JS', desc: 'Static export with bundled assets', icon: <Code size={24}/>, color: 'from-orange-500 to-red-500' },
                    { id: 'next', name: 'Next.js', desc: 'Next.js App Router project export', icon: <Globe size={24}/>, color: 'from-slate-500 to-black' }
                  ].map((stack) => (
                    <button 
                      key={stack.id}
                      disabled={isExporting}
                      onClick={() => setExportStack(stack.id as any)}
                      className={`relative group p-6 rounded-[2.5rem] border transition-all text-left flex flex-col gap-4 disabled:opacity-50 disabled:cursor-not-allowed ${exportStack === stack.id ? 'bg-white/5 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'bg-[#0f172a] border-white/5 hover:border-slate-700'}`}
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stack.color} flex items-center justify-center text-white shadow-xl`}>
                        {stack.icon}
                      </div>
                      <div>
                        <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{stack.name}</div>
                        <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-tight">{stack.desc}</div>
                      </div>
                      {exportStack === stack.id && (
                        <div className="absolute top-4 right-4 text-purple-500">
                          <CheckCircle2 size={24} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="p-8 rounded-[2.5rem] bg-[#020617] border border-white/5 space-y-6">
                  <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2"><Sparkles size={14}/> Production Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs font-black text-slate-400">
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500"><CheckCircle2 size={14}/></div>
                        Tailwind CSS Integrated
                      </div>
                      <div className="flex items-center gap-4 text-xs font-black text-slate-400">
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500"><CheckCircle2 size={14}/></div>
                        Framer Motion Animations
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs font-black text-slate-400">
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500"><CheckCircle2 size={14}/></div>
                        Fully Responsive Output
                      </div>
                      <div className="flex items-center gap-4 text-xs font-black text-slate-400">
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500"><CheckCircle2 size={14}/></div>
                        Optimized Asset Pipeline
                      </div>
                    </div>
                  </div>
                </div>

                {(isExporting || exportStage !== 'idle' || exportProgress > 0) && (
                  <div className="p-8 rounded-[2.5rem] bg-[#020617] border border-white/5 space-y-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <Download size={14} /> Export Progress
                      </h3>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{Math.min(100, Math.max(0, Math.round(exportProgress)))}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300" style={{ width: `${Math.min(100, Math.max(0, exportProgress))}%` }} />
                    </div>
                    <p className="text-xs text-slate-300 font-semibold">{exportMessage}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: 'prepare', label: 'Preparing Files...' },
                        { id: 'images', label: 'Optimizing Images...' },
                        { id: 'zip', label: 'Creating ZIP...' },
                        { id: 'ready', label: 'Download Ready...' }
                      ].map((step, index) => {
                        const stageOrder = { idle: -1, prepare: 0, images: 1, zip: 2, ready: 3 };
                        const current = stageOrder[exportStage];
                        const completed = current > index;
                        const active = current === index;
                        return (
                          <div key={step.id} className={`rounded-xl border px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${completed ? 'border-green-500/30 bg-green-500/10 text-green-400' : active ? 'border-purple-500/30 bg-purple-500/10 text-purple-300' : 'border-white/5 bg-white/[0.02] text-slate-600'}`}>
                            {completed ? 'Done • ' : active ? 'Now • ' : ''}{step.label}
                          </div>
                        );
                      })}
                    </div>

                    {previewMatch !== null && (
                      <div className={`text-[10px] font-black uppercase tracking-widest ${previewMatch ? 'text-emerald-400' : 'text-amber-400'}`}>
                        Preview Match Check: {previewMatch ? 'Matched' : 'Auto-Fixed Before Export'}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="p-10 border-t border-white/10 flex justify-end gap-4 bg-[#020617]/80">
                <Button variant="secondary" onClick={() => setShowExport(false)} className="px-10 h-14 rounded-2xl font-black text-xs uppercase tracking-widest" disabled={isExporting}>Cancel</Button>
                <Button variant="primary" onClick={handleExport} loading={isExporting} className="px-12 h-14 rounded-2xl font-black text-xs uppercase tracking-widest">
                  <Download size={20} /> {isExporting ? exportMessage : 'Download Project ZIP'}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
