import React from 'react';

const HeroSplitPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex p-6 gap-6 items-center">
    <div className="flex-1 space-y-3">
      <div className="w-1/3 h-3 bg-indigo-500/20 rounded-full" />
      <div className="w-full h-6 bg-white/10 rounded-lg" />
      <div className="w-full h-6 bg-white/10 rounded-lg" />
      <div className="w-1/2 h-8 bg-indigo-600 rounded-lg mt-4" />
    </div>
    <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl h-32 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10" />
    </div>
  </div>
);

export default HeroSplitPreview;
