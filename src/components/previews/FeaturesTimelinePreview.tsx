import React from 'react';

const FeaturesTimelinePreview = () => (
  <div className="w-full h-full bg-[#18181b] p-6 flex flex-col items-center justify-center relative">
    <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-white/5 -translate-x-1/2" />
    <div className="flex flex-col gap-8 w-full relative z-10">
      {[1, 2, 3].map(i => (
        <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="w-full h-2 bg-white/10 rounded-full" />
          </div>
          <div className="w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] shrink-0" />
          <div className="flex-1" />
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesTimelinePreview;
