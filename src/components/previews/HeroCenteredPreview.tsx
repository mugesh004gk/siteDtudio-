import React from 'react';

const HeroCenteredPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col items-center justify-center p-6 text-center space-y-4">
    <div className="w-2/3 h-4 bg-indigo-500/20 rounded-full animate-pulse" />
    <div className="w-full h-8 bg-white/10 rounded-xl" />
    <div className="w-full h-8 bg-white/10 rounded-xl" />
    <div className="w-1/2 h-3 bg-white/5 rounded-full" />
    <div className="flex gap-3 pt-2">
      <div className="w-24 h-10 bg-indigo-600 rounded-lg" />
      <div className="w-24 h-10 bg-white/5 border border-white/10 rounded-lg" />
    </div>
  </div>
);

export default HeroCenteredPreview;
