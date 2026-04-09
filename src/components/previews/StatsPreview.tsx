import React from 'react';

const StatsPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex gap-4 p-4 items-center justify-center text-center">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="flex-1 space-y-2 group transition-transform hover:-translate-y-2">
         <div className="w-full h-10 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-6 bg-white/20 rounded-lg animate-pulse" />
         </div>
         <div className="w-3/4 h-2 bg-white/10 rounded-full mx-auto" />
      </div>
    ))}
  </div>
);

export default StatsPreview;
