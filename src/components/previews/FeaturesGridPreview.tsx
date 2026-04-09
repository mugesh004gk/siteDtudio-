import React from 'react';

const FeaturesGridPreview = () => (
  <div className="w-full h-full bg-[#18181b] p-6 flex flex-col gap-4 items-center justify-center">
    <div className="grid grid-cols-2 gap-3 w-full">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/20" />
          <div className="w-full h-2 bg-white/10 rounded-full" />
          <div className="w-3/4 h-1.5 bg-white/5 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesGridPreview;
