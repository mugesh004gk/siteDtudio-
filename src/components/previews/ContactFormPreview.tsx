import React from 'react';

const ContactFormPreview = () => (
  <div className="w-full h-full bg-[#18181b] flex p-6 gap-6 items-center justify-center">
    <div className="flex-1 space-y-3">
       <div className="w-1/2 h-4 bg-indigo-500/20 rounded-full" />
       <div className="w-full h-2 bg-white/10 rounded-full" />
       <div className="w-full h-2 bg-white/10 rounded-full" />
    </div>
    <div className="flex-1 bg-[#09090b] border border-white/10 rounded-2xl p-5 space-y-3">
       <div className="w-full h-8 bg-white/5 border border-white/5 rounded-lg" />
       <div className="w-full h-8 bg-white/5 border border-white/5 rounded-lg" />
       <div className="w-full h-20 bg-white/5 border border-white/5 rounded-lg" />
       <div className="w-full h-10 bg-indigo-600 rounded-lg" />
    </div>
  </div>
);

export default ContactFormPreview;
