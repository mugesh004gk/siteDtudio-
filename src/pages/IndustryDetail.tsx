import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useBuilder } from '../context/BuilderContext';
import { ArrowLeft, Rocket, Eye, Sparkles } from 'lucide-react';

export default function IndustryDetail() {
  const { industry } = useParams<{ industry: string }>();
  const navigate = useNavigate();
  const { setSelectedComponents } = useBuilder();
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const decoded = decodeURIComponent(industry || '');

  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "templates"), where("industry", "==", decoded.toLowerCase()));
        const querySnapshot = await getDocs(q);
        const fetched: any[] = [];
        querySnapshot.forEach((doc) => {
          fetched.push({ id: doc.id, ...doc.data() });
        });
        
        // Mock fallback if empty
        if (fetched.length === 0) {
          setTemplates([
            {
              id: "t1",
              templateName: `${decoded} Pro Launch`,
              industry: decoded.toLowerCase(),
              components: ["navbar-classic", "hero-centered", "about-company", "services-grid", "cta-banner", "footer-simple"],
              description: `Standard professional layout for ${decoded} operations.`
            },
            {
              id: "t2",
              templateName: `Modern ${decoded} Edge`,
              industry: decoded.toLowerCase(),
              components: ["navbar-classic", "hero-split", "stats-counters", "pricing-3plans", "faq-accordion", "footer-simple"],
              description: `Performance-focused ${decoded} landing page.`
            }
          ]);
        } else {
          setTemplates(fetched);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
        setTemplates([]);
      } finally {
        setLoading(false);
      }
    };

    if (decoded) fetchTemplates();
  }, [decoded]);

  const applyTemplate = (components: string[]) => {
    const formatted = components.map((key, i) => ({
      id: `${key}-${Date.now()}-${i}`,
      componentKey: key,
      props: {}
    }));
    setSelectedComponents(formatted);
    navigate('/builder');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b]">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-8" />
        <p className="text-white/30 font-black uppercase tracking-[0.3em] text-xs">Assembling {decoded} layouts...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-10 py-24 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="flex-1">
          <Link to="/templates" className="text-indigo-400 hover:text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 mb-10 group transition-all">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Industry Directory
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-indigo-500/10 rounded-3xl border border-indigo-500/10 text-indigo-400">
               <Sparkles size={32} />
            </div>
            <h1 className="text-7xl font-black text-white tracking-tighter uppercase leading-none">{decoded}</h1>
          </div>
          <p className="text-xl text-white/30 max-w-2xl leading-relaxed font-medium mt-4">Professional, industrial-grade website templates designed specifically for the <span className="text-white font-black">{decoded}</span> ecosystem.</p>
        </div>
      </div>

      <AnimatePresence>
        {!templates.length ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-32 bg-[#18181b] rounded-[4rem] text-center border border-dashed border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-white/5 text-9xl mb-8 font-black tracking-tighter uppercase select-none">Empty</div>
            <p className="text-white/20 text-2xl font-medium max-w-lg mx-auto mb-12">We are currently engineering more templates for the <span className="text-indigo-400">{decoded}</span> sector.</p>
            <button onClick={() => navigate('/templates')} className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/5 transition-all font-black uppercase tracking-widest text-xs shadow-2xl active:scale-95">Back to Directory</button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {templates.map((t, idx) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-[#18181b] rounded-[3.5rem] border border-white/5 overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
              >
                <div className="h-72 overflow-hidden relative border-b border-white/5 bg-[#09090b]">
                  <img src={t.previewImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} alt={t.templateName} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/30 to-transparent" />
                  <div className="absolute top-8 right-8 bg-indigo-600 text-white text-[10px] uppercase font-black px-4 py-2.5 rounded-xl shadow-[0_15px_30px_-5px_rgba(79,70,229,0.5)]">Professional</div>
                </div>
                <div className="p-12">
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{t.templateName}</h3>
                  <p className="text-base text-white/30 mb-10 leading-relaxed font-medium line-clamp-2">{t.description || `Optimized ${decoded} landing page built with SiteStudio standard components.`}</p>
                  <div className="flex gap-4">
                    <button onClick={() => applyTemplate(t.components)} className="flex-1 bg-white text-[#09090b] hover:bg-indigo-600 hover:text-white px-8 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-2xl active:scale-95 group/btn">
                      <Rocket size={18} className="group-hover/btn:-translate-y-1 transition-transform" /> Start Project
                    </button>
                    <button className="p-5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-[1.5rem] border border-white/10 transition-all active:scale-95 shadow-xl" title="Quick Preview">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
