import React from 'react';

const PricingSaasPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col p-6 items-center justify-center space-y-4">
    <div className="w-1/4 h-8 bg-white/5 rounded-full flex items-center p-1 border border-white/5">
      <div className="w-1/2 h-full bg-indigo-600 rounded-full" />
    </div>
    <div className="flex gap-4 w-full h-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`flex-1 bg-[#09090b] border ${i === 2 ? 'border-indigo-600 ring-2 ring-indigo-600/20' : 'border-white/5'} rounded-xl p-4 space-y-4`}>
           <div className="w-3/4 h-3 bg-white/10 rounded-full" />
           <div className="w-full h-1/3 bg-white/5 rounded-lg" />
           <div className="space-y-2">
             <div className="w-full h-1 bg-white/5 rounded-full" />
             <div className="w-full h-1 bg-white/5 rounded-full" />
           </div>
        </div>
      ))}
    </div>
  </div>
);

export default PricingSaasPreview;
