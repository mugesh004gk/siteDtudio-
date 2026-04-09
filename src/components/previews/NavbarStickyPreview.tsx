import React from 'react';

const NavbarStickyPreview = () => (
  <div className="w-full h-full bg-[#09090b] relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-12 bg-[#18181b]/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-10">
      <div className="w-16 h-4 bg-indigo-500/20 rounded-lg" />
      <div className="flex gap-4">
        {[1, 2, 3].map(i => <div key={i} className="w-8 h-2 bg-white/10 rounded-full" />)}
      </div>
      <div className="w-12 h-6 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-600/20" />
    </div>
    <div className="pt-20 px-6 space-y-4">
       {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-20 bg-white/5 rounded-2xl border border-white/5" />)}
    </div>
  </div>
);

export default NavbarStickyPreview;
