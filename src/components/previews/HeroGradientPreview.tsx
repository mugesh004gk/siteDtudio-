import React from 'react';

const HeroGradientPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl" />
    <div className="w-full h-10 bg-white/20 rounded-xl" />
    <div className="w-full h-10 bg-white/20 rounded-xl" />
    <div className="w-2/3 h-10 bg-white/5 border border-white/10 rounded-xl" />
  </div>
);

export default HeroGradientPreview;
