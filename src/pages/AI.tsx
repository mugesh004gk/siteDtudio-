import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Plus, Check, X } from 'lucide-react';
import { componentsRegistry } from '../registry/componentsRegistry';
import { resolveComponentByKey } from '../lib/componentMap';
import { useBuilder } from '../context/BuilderContext';
import { useNavigate } from 'react-router-dom';
import { previewMap } from '../lib/previewMap';

interface Result { comp: typeof componentsRegistry[0]; score: number }

export default function AI() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof componentsRegistry>([]);
  const [searched, setSearched] = useState(false);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const { addComponent } = useBuilder();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      const q = query.toLowerCase().trim();
      const words = q.split(/\s+/).filter(w => w.length > 2);

      const scored: Result[] = componentsRegistry.map(comp => {
        let score = 0;
        const name = comp.name.toLowerCase();
        const cat = comp.category.toLowerCase();
        const desc = comp.description.toLowerCase();
        const tagsStr = comp.tags.join(' ').toLowerCase();

        if (name.includes(q)) score += 15;
        if (cat.includes(q)) score += 8;
        if (desc.includes(q)) score += 5;
        if (tagsStr.includes(q)) score += 5;

        words.forEach(w => {
          if (name.includes(w)) score += 4;
          if (cat.includes(w)) score += 3;
          if (desc.includes(w)) score += 2;
          if (tagsStr.includes(w)) score += 2;
        });

        return { comp, score };
      });

      const top = scored
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map(r => r.comp);

      setResults(top.length ? top : componentsRegistry.slice(0, 3));
      setLoading(false);
      setSearched(true);
    }, 900);
  };

  const handleAdd = (comp: typeof componentsRegistry[0]) => {
    addComponent(comp.componentKey, comp.defaultSettings);
    setAddedSlug(comp.slug);
    setTimeout(() => setAddedSlug(null), 2000);
  };

  const suggestions = ['I need a dark hero with a CTA button', 'glassmorphism navbar', 'pricing table 3 plans', 'accordion FAQ', 'footer with newsletter'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center min-h-[80vh]">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-xl shadow-amber-500/20">✨</div>
        <h1 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter">AI Component Finder</h1>
        <p className="text-xl text-white/30 max-w-xl mx-auto font-medium">Describe what you need in plain English and we'll find the perfect component for you.</p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="w-full max-w-4xl relative mb-12">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <Search className="text-indigo-400/40" size={24} />
        </div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="e.g. 'a bold hero with gradient and CTA buttons...'"
          className="w-full bg-[#18181b] border-2 border-white/5 rounded-[2.5rem] py-6 pl-16 pr-44 text-white text-xl focus:outline-none focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/10 transition-all placeholder:text-white/20 font-bold shadow-2xl"
        />
        <button type="submit" disabled={loading || !query.trim()}
          className="absolute right-4 top-4 bottom-4 bg-indigo-600 hover:bg-indigo-500 text-white px-10 rounded-2xl font-black uppercase text-xs tracking-widest disabled:opacity-40 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-indigo-600/30">
          {loading ? <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" /> : <>Find <ArrowRight size={18} /></>}
        </button>
      </form>

      {/* Quick suggestions */}
      {!searched && (
        <div className="flex gap-4 flex-wrap justify-center mb-12">
          {suggestions.map(s => (
            <button key={s} onClick={() => { setQuery(s); }} className="text-[10px] bg-white/5 hover:bg-white/10 text-white/40 hover:text-white px-5 py-2.5 rounded-full border border-white/5 transition-all font-black uppercase tracking-widest active:scale-95">
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {searched && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <div className="text-[10px] font-black text-indigo-400/40 uppercase tracking-[0.4em] mb-10 text-center">
              {results.length} matching component{results.length !== 1 ? 's' : ''} found
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((comp, i) => {
                const Preview = previewMap[comp.componentKey] || (() => <div className="w-full h-full bg-[#09090b] flex items-center justify-center text-white/10 uppercase font-black tracking-widest text-[10px]">No Demo</div>);
                return (
                  <motion.div key={comp.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className="bg-[#18181b] rounded-[3rem] border border-white/5 overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 shadow-2xl"
                  >
                    {/* Mini preview */}
                    <div className="relative h-56 bg-[#09090b] overflow-hidden">
                      <div className="w-full h-full transform transition-transform duration-1000 group-hover:scale-105">
                        <Preview />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#18181b] to-transparent" />
                      <button
                        onClick={() => setPreviewSlug(previewSlug === comp.slug ? null : comp.slug)}
                        className="absolute top-6 right-6 z-10 bg-black/60 hover:bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl border border-white/10 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all transform tracking-widest uppercase active:scale-90"
                      >
                        View Demo
                      </button>
                    </div>
                    <div className="p-10">
                      <div className="text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-[0.2em] leading-none">{comp.category}</div>
                      <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{comp.name}</h3>
                      <p className="text-sm text-white/30 mb-10 line-clamp-2 leading-relaxed font-medium">{comp.description}</p>
                      <div className="flex gap-4">
                        <button onClick={() => handleAdd(comp)}
                          className={`flex-1 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-2xl active:scale-95 ${addedSlug === comp.slug ? 'bg-emerald-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}>
                          {addedSlug === comp.slug ? <><Check size={18} strokeWidth={4} /> Added</> : <><Plus size={18} strokeWidth={4} /> Add to Page</>}
                        </button>
                        <button onClick={() => navigate(`/component/${comp.componentKey}`)}
                          className="px-6 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 active:scale-95">
                          View
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-20 text-center">
              <button onClick={() => navigate('/builder')} className="bg-white text-[#09090b] font-black px-12 py-6 rounded-[2.5rem] uppercase tracking-[0.2em] text-[10px] transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] active:scale-95">
                Open Builder →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full preview modal */}
      <AnimatePresence>
        {previewSlug && (() => {
          const comp = results.find(r => r.slug === previewSlug);
          if (!comp) return null;
          const ComponentToRender =
            resolveComponentByKey(comp.componentKey) ||
            (() => <div className="p-20 text-center text-white/10 font-black uppercase tracking-widest text-xs">Visual Component Not Registered</div>);
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8" onClick={() => setPreviewSlug(null)}>
              <motion.div initial={{ scale: 0.95, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 40 }} onClick={e => e.stopPropagation()} className="bg-[#09090b] rounded-[4rem] border border-white/10 w-full max-w-6xl overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,1)] relative">
                <div className="flex items-center justify-between p-10 border-b border-white/5 bg-black/20">
                  <div>
                    <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-1">{comp.category}</div>
                    <span className="text-3xl font-black text-white uppercase tracking-tighter">{comp.name}</span>
                  </div>
                  <button onClick={() => setPreviewSlug(null)} className="p-5 bg-white/5 hover:bg-rose-500/10 text-white/30 hover:text-rose-500 rounded-2xl transition-all active:scale-90 shadow-xl border border-white/5">
                    <X size={24} strokeWidth={3} />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[70vh] p-12 custom-scrollbar bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03),transparent)]">
                  <ComponentToRender />
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
