import React from 'react';

const HeroMinimalPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col items-center justify-center p-8 text-center space-y-4">
    <div className="w-full h-10 bg-white/10 rounded-lg" />
    <div className="w-full h-10 bg-white/10 rounded-lg" />
    <div className="w-1/3 h-1 bg-white/30 rounded-full" />
    <div className="w-32 h-10 bg-white border border-white/20 rounded-lg" />
  </div>
);

export default HeroMinimalPreview;
