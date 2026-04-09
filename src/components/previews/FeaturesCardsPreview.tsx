import React from 'react';

const FeaturesCardsPreview = () => (
  <div className="w-full h-full bg-[#18181b] p-6 flex flex-col gap-3 items-center justify-center">
    {[1, 2].map(i => (
      <div key={i} className="w-full bg-[#09090b] border border-white/5 rounded-2xl p-4 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-600/20 shrink-0" />
        <div className="flex-1 flex flex-col gap-2 pt-1">
          <div className="w-1/2 h-3 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-white/5 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export default FeaturesCardsPreview;
