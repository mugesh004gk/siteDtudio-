import React from 'react';

const AboutPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex p-6 gap-6 items-center">
    <div className="flex-1 bg-white/5 rounded-3xl h-full flex items-center justify-center border border-white/10 overflow-hidden shadow-inner relative">
       <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl" />
    </div>
    <div className="flex-1 space-y-4">
       <div className="w-3/4 h-6 bg-white/20 rounded-xl" />
       <div className="w-full h-1/2 bg-white/5 rounded-xl" />
       <div className="flex gap-2">
          {[1, 2].map(i => <div key={i} className="w-12 h-12 rounded-full bg-white/10" />)}
       </div>
    </div>
  </div>
);

export default AboutPreview;
