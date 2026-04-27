import React from 'react';
import { motion } from 'framer-motion';

// Primary Button with Futuristic Glow
export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]',
    secondary: 'bg-slate-800/50 hover:bg-slate-700/50 text-white border border-slate-700 backdrop-blur-sm',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white',
    danger: 'bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Standard Card with Futuristic Glow Edge
export const Card = ({ children, className = '', ...props }: any) => (
  <div className={`bg-[#111827] border border-[#1e293b] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.05)] hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);

// Standard Input with Focus Glow
export const Input = ({ label, className = '', ...props }: any) => (
  <div className="space-y-1.5">
    {label && <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">{label}</label>}
    <input
      className={`w-full bg-[#020617] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/50 transition-all ${className}`}
      {...props}
    />
  </div>
);

// Standard Sidebar Item with Active Glow
export const SidebarItem = ({ icon: Icon, label, active, onClick, className = '' }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all relative group ${
      active 
        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
        : 'text-slate-500 hover:text-white hover:bg-white/5'
    } ${className}`}
  >
    {Icon && <Icon size={18} className={active ? 'text-purple-400' : 'group-hover:text-purple-400 transition-colors'} />}
    {label}
    {active && <div className="absolute left-0 w-1 h-6 bg-purple-500 rounded-full" />}
  </button>
);
