import React from 'react';

const PricingCardsPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex gap-6 p-6 items-center justify-center">
    {[1, 2].map((i) => (
      <div key={i} className="flex-1 bg-[#09090b] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-indigo-500/50 transition-colors shadow-2xl">
         <div className="w-10 h-10 bg-indigo-500/20 rounded-xl" />
         <div className="w-full h-6 bg-white/20 rounded-lg" />
         <div className="w-2/3 h-10 bg-white/30 rounded-lg" />
         <div className="space-y-2">
           <div className="w-full h-2 bg-white/5 rounded-full" />
           <div className="w-full h-2 bg-white/5 rounded-full" />
         </div>
      </div>
    ))}
  </div>
);

export default PricingCardsPreview;
