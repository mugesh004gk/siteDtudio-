import React from 'react';

const ServicesPreview = () => (
  <div className="w-full h-full bg-[#18181b] grid grid-cols-3 gap-4 p-6 items-center justify-center">
    {[1, 2, 3, 4, 5, 6].map(i => (
      <div key={i} className="bg-[#09090b] border border-white/5 rounded-2xl p-4 flex flex-col items-center space-y-3 transition-transform hover:scale-105 shadow-xl">
        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl" />
        <div className="w-3/4 h-2 bg-white/20 rounded-full" />
        <div className="w-full h-1/3 bg-white/5 rounded-lg" />
      </div>
    ))}
  </div>
);

export default ServicesPreview;
