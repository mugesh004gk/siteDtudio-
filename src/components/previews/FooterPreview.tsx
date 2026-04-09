import React from 'react';

const FooterPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col p-6 justify-center">
    <div className="grid grid-cols-4 gap-4 mb-6">
       {[1, 2, 3, 4].map(i => (
         <div key={i} className="space-y-3">
           <div className="w-1/2 h-3 bg-indigo-500/20 rounded-full" />
           <div className="w-full h-2 bg-white/5 rounded-full" />
           <div className="w-3/4 h-2 bg-white/5 rounded-full" />
         </div>
       ))}
    </div>
    <div className="w-full h-px bg-white/5" />
    <div className="flex justify-between mt-4">
      <div className="w-24 h-2 bg-white/5 rounded-full" />
      <div className="flex gap-2">
        {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-white/10" />)}
      </div>
    </div>
  </div>
);

export default FooterPreview;
