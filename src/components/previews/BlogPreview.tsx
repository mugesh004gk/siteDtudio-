import React from 'react';

const BlogPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex gap-4 p-6 items-center justify-center">
    {[1, 2, 3].map(i => (
      <div key={i} className="flex-1 bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden space-y-4 shadow-2xl transition-transform hover:-translate-y-1">
         <div className="w-full h-24 bg-white/5 border-b border-white/5" />
         <div className="p-4 space-y-3">
            <div className="w-1/4 h-2 bg-indigo-600/30 rounded-full" />
            <div className="w-full h-6 bg-white/20 rounded-lg" />
            <div className="w-full h-2 bg-white/5 rounded-full" />
         </div>
      </div>
    ))}
  </div>
);

export default BlogPreview;
