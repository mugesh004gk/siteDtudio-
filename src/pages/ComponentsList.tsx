import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockComponents } from '../lib/mockData';

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
      // Use mock by default for speed, can override with Firebase if needed
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Component Library</h1>
        <p className="text-lg text-white/50 max-w-2xl leading-relaxed">Browse our extensive collection of premium, production-ready components organized by category.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => {
          return (
            <motion.div key={category.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Link to={`/components/${category.slug}`}
                className="block bg-[#18181b] rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all group overflow-hidden shadow-xl shadow-black/20">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{category.name}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">Explore professional {category.name.toLowerCase()} designs for your next project.</p>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
