import React from 'react';

const PricingSimplePreview = () => (
  <div className="w-full h-full bg-[#18181b] flex gap-4 p-4 items-center justify-center">
    {[1, 2, 3].map((i) => (
      <div key={i} className={`flex-1 bg-[#09090b] border ${i === 2 ? 'border-indigo-600' : 'border-white/5'} rounded-xl p-4 space-y-3 shadow-2xl`}>
         <div className="w-1/2 h-2 bg-white/10 rounded-full" />
         <div className="w-3/4 h-6 bg-white/20 rounded-lg" />
         <div className="w-full h-1/2 bg-white/5 rounded-lg" />
         <div className="w-full h-8 bg-indigo-600 rounded-lg" />
      </div>
    ))}
  </div>
);

export default PricingSimplePreview;
