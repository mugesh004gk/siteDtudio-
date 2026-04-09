import React from 'react';

const FAQPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex flex-col p-6 items-center justify-center space-y-3">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className={`w-full bg-[#09090b] border border-white/5 rounded-xl p-4 flex flex-col ${i === 2 ? 'border-indigo-600/40 shadow-2xl' : ''}`}>
        <div className="flex justify-between items-center w-full">
           <div className="w-2/3 h-2 bg-white/20 rounded-full" />
           <div className="w-4 h-4 rounded-full bg-white/10" />
        </div>
        {i === 2 && <div className="mt-4 w-full h-10 bg-white/5 rounded-lg" />}
      </div>
    ))}
  </div>
);

export default FAQPreview;
