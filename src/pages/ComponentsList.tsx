import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockComponents } from '../lib/mockData';
import { ChevronRight, Zap, Sparkles } from 'lucide-react';

const categories = [
  { slug: 'navbar', name: 'Navbar', icon: '🧭' },
  { slug: 'hero', name: 'Hero', icon: '🚀' },
  { slug: 'features', name: 'Features', icon: '✨' },
  { slug: 'about', name: 'About', icon: 'ℹ️' },
  { slug: 'services', name: 'Services', icon: '⚡' },
  { slug: 'pricing', name: 'Pricing', icon: '💰' },
  { slug: 'testimonials', name: 'Testimonials', icon: '💬' },
  { slug: 'faq', name: 'FAQ', icon: '❓' },
  { slug: 'blog', name: 'Blog', icon: '📰' },
  { slug: 'gallery', name: 'Gallery', icon: '🖼️' },
  { slug: 'contact', name: 'Contact', icon: '📧' },
  { slug: 'footer', name: 'Footer', icon: '🦶' },
  { slug: 'stats', name: 'Stats', icon: '📊' },
  { slug: 'cta', name: 'CTA', icon: '📢' },
];

export default function ComponentsList() {
  const [componentCounts, setComponentCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      const components = mockComponents;
      const counts: Record<string, number> = {};
      categories.forEach(cat => {
        counts[cat.slug] = components.filter(c => c.category === cat.slug).length;
      });
      setComponentCounts(counts);
      setLoading(false);
      
      try {
        const querySnapshot = await getDocs(collection(db, "components"));
        if (!querySnapshot.empty) {
          const fetched: any[] = [];
          querySnapshot.forEach((doc) => fetched.push(doc.data()));
          const counts: Record<string, number> = {};
          categories.forEach(cat => {
            counts[cat.slug] = fetched.filter(c => c.category === cat.slug).length;
          });
          setComponentCounts(counts);
        }
      } catch (error) {
        console.error("Firebase fetch error:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <Sparkles size={14} />
            <span>Futuristic Registry</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-none">Modules</h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-medium">
            Browse our hyper-optimized library of futuristic web modules. Built for precision and high-fidelity rendering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            return (
              <motion.div 
                key={category.slug} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={`/components/${category.slug}`}
                  className="group block h-[300px] bg-[#111827] p-6 rounded-[2rem] border border-white/5 hover:border-purple-500/50 transition-all hover:scale-105 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[#020617] rounded-2xl border border-white/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-purple-600/10 group-hover:text-purple-400 transition-all shadow-inner">
                        {category.icon}
                      </div>
                      <div className="text-[10px] font-black text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest border border-purple-500/20">
                        {componentCounts[category.slug] || 0} Blocks
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors mb-3 tracking-tight uppercase">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-auto font-medium">
                      High-fidelity {category.name.toLowerCase()} modules optimized for futuristic site architectures.
                    </p>
                    <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-white mt-6 group-hover:text-purple-400 transition-colors">
                      Enter Directory <ChevronRight size={14} className="ml-2 group-hover:ml-3 transition-all" />
                    </div>
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
