import React from 'react';

const GalleryPreview = () => (
  <div className="w-full h-full bg-[#18181b] grid grid-cols-4 grid-rows-2 gap-2 p-6 flex items-center justify-center">
    <div className="col-span-2 row-span-2 bg-indigo-500/20 rounded-2xl border border-white/10 shadow-2xl" />
    <div className="bg-white/10 rounded-2xl border border-white/5 shadow-2xl" />
    <div className="bg-white/10 rounded-2xl border border-white/5 shadow-2xl" />
    <div className="bg-white/10 rounded-2xl border border-white/5 shadow-2xl" />
    <div className="bg-white/10 rounded-2xl border border-white/5 shadow-2xl" />
  </div>
);

export default GalleryPreview;
