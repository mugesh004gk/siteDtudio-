import React from 'react';

const BannerCTAPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex items-center justify-center p-6">
    <div className="w-full h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 flex items-center justify-between shadow-2xl overflow-hidden relative">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
       <div className="relative z-10 space-y-2">
         <div className="w-48 h-6 bg-white/20 rounded-lg" />
         <div className="w-32 h-3 bg-white/10 rounded-full" />
       </div>
       <div className="relative z-10 w-32 h-12 bg-white text-indigo-600 rounded-xl font-black text-[10px] flex items-center justify-center shadow-xl">GET STARTED</div>
    </div>
  </div>
);

export default BannerCTAPreview;
