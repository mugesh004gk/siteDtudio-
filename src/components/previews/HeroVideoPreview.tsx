import React from 'react';

const HeroVideoPreview = () => (
  <div className="w-full h-full bg-[#18181b] relative overflow-hidden flex items-center justify-center text-center p-6">
    <div className="absolute inset-0 bg-indigo-500/10 opacity-30 animate-pulse" />
    <div className="relative z-10 space-y-4 w-full">
      <div className="w-full h-8 bg-white/20 rounded-xl" />
      <div className="w-full h-8 bg-white/20 rounded-xl" />
      <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 mx-auto flex items-center justify-center">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
      </div>
    </div>
  </div>
);

export default HeroVideoPreview;
