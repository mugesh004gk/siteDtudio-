import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { industries } from '../registry/templatesRegistry';
import { Briefcase, Utensils, Stethoscope, Camera, ShoppingBag, GraduationCap, Calendar, User, Cpu, Heart, Landmark, Construction, Scissors, Dumbbell, Plane, Building, Gem, Banknote, Scale, Lightbulb } from 'lucide-react';

const icons: Record<string, any> = {
  'Business': Briefcase, 'Restaurant': Utensils, 'Medical': Stethoscope, 'Photography': Camera, 
  'E-commerce': ShoppingBag, 'Education': GraduationCap, 'Events': Calendar, 'Portfolio': User, 
  'Technology': Cpu, 'NGO / Trust': Heart, 'Real Estate': Landmark, 'Construction': Construction, 
  'Beauty / Salon': Scissors, 'Fitness / Gym': Dumbbell, 'Travel / Tourism': Plane, 
  'Hotel / Resort': Building, 'Jewellery': Gem, 'Finance': Banknote, 'Law Firm': Scale, 
  'Marketing Agency': Lightbulb
};

export default function Templates() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">Choose Your Industry</h1>
        <p className="text-white/50 text-xl max-w-2xl mx-auto">Select an industry to see our collection of pre-built website templates.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {industries.map((ind, i) => {
          const Icon = icons[ind] || Briefcase;
          return (
            <motion.div 
              key={ind}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/templates/${encodeURIComponent(ind)}`)}
              className="bg-[#18181b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-indigo-500/50 hover:bg-white/5 transition-all group shadow-xl shadow-black/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                <Icon size={28} />
              </div>
              <span className="font-bold text-white text-center tracking-tight">{ind}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
