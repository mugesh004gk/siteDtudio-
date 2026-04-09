import React from 'react';

const NavbarPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col items-center justify-start p-6">
    <div className="w-full h-16 bg-[#09090b] border border-white/10 rounded-2xl flex items-center justify-between px-6 shadow-2xl">
      <div className="w-10 h-10 bg-indigo-600 rounded-xl" />
      <div className="flex gap-4">
        {[1, 2, 3].map(i => <div key={i} className="w-12 h-2 bg-white/20 rounded-full" />)}
      </div>
      <div className="w-24 h-9 bg-indigo-600 rounded-lg shadow-lg" />
    </div>
    <div className="mt-8 space-y-4 w-full">
      <div className="w-full h-8 bg-white/10 rounded-lg" />
      <div className="w-full h-20 bg-white/5 rounded-2xl" />
    </div>
  </div>
);

export default NavbarPreview;
