
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Globe, MessageSquare, Calendar, ChevronRight, X, Check, ArrowRight, Share2, Sparkles, Briefcase, HelpCircle } from 'lucide-react';

// ─── HELPER COMPONENTS ───

const SuccessToast = ({ show }: { show: boolean }) => (
    <AnimatePresence>
        {show && (
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                className="fixed bottom-10 right-10 z-[500] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3">
                <Check size={18}/> Message Sent ✅
            </motion.div>
        )}
    </AnimatePresence>
);

// ─── CONTACT COMPONENTS ───

export const ContactFormBasic = ({ bgColor, btnColor, isPreview }: any) => {
    const [sent, setSent] = useState(false);
    const handleSubmit = (e: any) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };

    return (
        <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
            <SuccessToast show={sent} />
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">GET IN TOUCH</h2>
                    <p className="text-white/40 font-medium">Have a question? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Full Name" required className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all w-full" />
                        <input type="email" placeholder="Email Address" required className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all w-full" />
                    </div>
                    <textarea placeholder="Your Message" required className="bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all w-full h-40 resize-none"></textarea>
                    <button type="submit" style={{ backgroundColor: btnColor }} className="w-full py-5 rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                        SUBMIT MESSAGE <Send size={16} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export const ContactDetailsGrid = ({ bgColor, iconColor, isPreview }: any) => (
    <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <Mail />, label: "Email Us", val: "support@sitestudio.io", desc: "For general inquiries and support." },
                { icon: <Phone />, label: "Call Us", val: "+1 (555) 000-0000", desc: "Available Mon-Fri, 9am - 5pm EST." },
                { icon: <MapPin />, label: "Visit Us", val: "Silicon Valley, CA", desc: "Our main headquarters and innovation hub." }
            ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-[#111] border border-white/5 hover:border-white/10 transition-all group shadow-xl">
                    <div style={{ color: iconColor }} className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                        {item.icon}
                    </div>
                    <h4 className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] mb-4">{item.label}</h4>
                    <div className="text-2xl font-black text-white tracking-tighter mb-4">{item.val}</div>
                    <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export const ContactSplit = ({ bgColor, accentColor, isPreview }: any) => {
    const [sent, setSent] = useState(false);
    return (
        <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
            <SuccessToast show={sent} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square rounded-[3.5rem] overflow-hidden group border border-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="contact" />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                        <div className="text-white font-black text-4xl tracking-tighter uppercase leading-none mb-4">LET'S START <br/>SOMETHING BIG.</div>
                        <div style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-3 group-hover:gap-6 transition-all">Reach out today <ChevronRight size={16}/></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">READY TO <br/><span className="text-white/20">CONNECT?</span></h2>
                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }} className="space-y-6">
                        <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all" />
                        <textarea placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all h-32 resize-none"></textarea>
                        <button style={{ backgroundColor: accentColor }} className="w-full py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export const ContactWithMap = ({ bgColor, accentColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-1 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
       <div className="flex-1 min-h-[400px] bg-[#1a1a1c] relative group">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" alt="map" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div style={{ backgroundColor: accentColor }} className="w-10 h-10 rounded-full animate-ping opacity-20" />
             <div style={{ backgroundColor: accentColor }} className="w-4 h-4 rounded-full absolute" />
          </div>
       </div>
       <div className="w-full lg:w-[500px] p-12 lg:p-20 bg-[#111] flex flex-col justify-center">
          <h3 className="text-4xl font-black text-white tracking-tighter mb-8 uppercase leading-none">VISIT OUR <br/>OFFICE.</h3>
          <div className="space-y-8">
             <div className="flex gap-6">
                <MapPin className="text-indigo-400 shrink-0" />
                <div>
                   <div className="text-white font-bold mb-1">HQ ADDRESS</div>
                   <div className="text-white/40 text-sm leading-relaxed">123 innovation Drive, suite 500, <br/>San Francisco, CA 94103</div>
                </div>
             </div>
             <div className="flex gap-6 pt-8 border-t border-white/5">
                <Phone className="text-indigo-400 shrink-0" />
                <div>
                   <div className="text-white font-bold mb-1">DIRECT CONTACT</div>
                   <div className="text-white/40 text-sm leading-relaxed">+1 (415) 555-0123 <br/>hello@sitestudio.io</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const ContactCards = ({ bgColor, cols = 3, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto">
       <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 md:gap-8`}>
          {[
             { title: "Technical Support", icon: <Sparkles />, color: "#8b5cf6" },
             { title: "Sales Inquiries", icon: <Briefcase />, color: "#6366f1" },
             { title: "Press & Media", icon: <Globe />, color: "#f43f5e" }
          ].map((card, i) => (
             <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden shadow-2xl">
                <div style={{ background: card.color }} className="absolute -top-10 -right-10 w-32 h-32 opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                   {React.cloneElement(card.icon as any, { size: 24 })}
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter mb-4 uppercase">{card.title}</h3>
                <p className="text-white/40 mb-10 text-sm font-medium leading-relaxed italic">"Our priority is to provide high-fidelity solutions for every scale of operation."</p>
                <button className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-3 group-hover:translate-x-4 transition-transform">
                   Contact Department <ArrowRight size={14}/>
                </button>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const ContactSocial = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-5xl mx-auto text-center">
       <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">FOLLOW US.</h2>
       <p className="text-white/40 text-lg mb-16 max-w-xl mx-auto">Join our community across all platforms to stay updated with the latest in agentic engineering.</p>
       <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {['LinkedIn', 'Twitter', 'GitHub', 'Discord', 'Instagram'].map((social, i) => (
             <button key={i} className="px-10 py-6 rounded-3xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-black uppercase text-xs tracking-widest active:scale-95 shadow-2xl">
                {social}
             </button>
          ))}
       </div>
    </div>
  </section>
);

export const ContactBooking = ({ bgColor, btnColor, isPreview }: any) => {
   const [sent, setSent] = useState(false);
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
         <SuccessToast show={sent} />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-10 uppercase">SCHEDULE <br/><span className="text-white/20">A DEMO.</span></h2>
               <p className="text-white/40 text-xl leading-relaxed mb-12">See SiteStudio in action with a personalized walkthrough from our core engineering team.</p>
               <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 shadow-2xl">
                     <Calendar className="text-emerald-400" size={32} />
                     <div>
                        <div className="text-white font-bold text-lg leading-tight uppercase tracking-tight">Personalized Session</div>
                        <div className="text-white/30 text-xs font-black uppercase tracking-widest mt-1">Duration: 30 Minutes</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="p-10 md:p-14 bg-[#111] rounded-[4rem] border border-white/5 shadow-2xl">
               <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }} className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-white/30 tracking-widest pl-4">Your Professional Email</label>
                     <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-white/30 tracking-widest pl-4">Preferred Date</label>
                        <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white/40 outline-none focus:border-indigo-500 transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-white/30 tracking-widest pl-4">Best Time</label>
                        <input type="time" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white/40 outline-none focus:border-indigo-500 transition-all" />
                     </div>
                  </div>
                  <button style={{ backgroundColor: btnColor }} className="w-full py-6 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-2xl shadow-emerald-500/20 active:scale-95 transition-all mt-6">Confirm Session</button>
               </form>
            </div>
         </div>
      </section>
   );
};

export const ContactFAQHybrid = ({ bgColor, isPreview }: any) => (
  <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
       <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">NEED QUICK <br/><span className="text-white/20">ANSWERS?</span></h2>
          <div className="space-y-6">
             {[1,2,3].map(i => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group cursor-pointer">
                   <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-white tracking-tight">Can I cancel my subscription anytime?</h4>
                      <ChevronRight size={20} className="text-white/20 group-hover:translate-x-2 transition-transform h-5 w-5" />
                   </div>
                </div>
             ))}
          </div>
       </div>
       <div className="p-12 md:p-16 bg-[#111] border border-white/5 rounded-[4rem] text-center shadow-2xl">
          <HelpCircle size={48} className="text-indigo-400 mx-auto mb-8" />
          <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-6">Didn't find what <br/>you needed?</h3>
          <p className="text-white/40 mb-10 font-medium">Our help center is active 24/7. Open a ticket and we'll track it in real-time.</p>
          <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition shadow-2xl flex items-center justify-center gap-3 mx-auto">
             SUBMIT SUPPORT TICKET <ArrowRight size={14}/>
          </button>
       </div>
    </div>
  </section>
);

export const ContactInteractiveSteps = ({ bgColor, accentColor, isPreview }: any) => {
   const [step, setStep] = useState(1);
   const [sent, setSent] = useState(false);
   
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
         <SuccessToast show={sent} />
         <div className="max-w-3xl mx-auto">
            <div className="flex justify-between mb-20 relative">
               <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
               <div style={{ width: `${(step-1)*50}%`, background: accentColor }} className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 transition-all duration-700" />
               {[1,2,3].map(i => (
                  <div key={i} className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-black transition-all duration-500 border-2 ${step >= i ? 'bg-white text-black border-white shadow-2xl' : 'bg-black text-white/20 border-white/5'}`}>{i}</div>
               ))}
            </div>
            
            <AnimatePresence mode="wait">
               <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-12 md:p-16 bg-[#111] rounded-[3.5rem] border border-white/5 shadow-2xl">
                  {step === 1 && (
                     <div className="space-y-8">
                        <div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Who are you?</h3>
                           <p className="text-white/30 text-xs font-black uppercase tracking-widest italic">Personal background information</p>
                        </div>
                        <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500" />
                        <button onClick={() => setStep(2)} className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest">Next Step</button>
                     </div>
                  )}
                  {step === 2 && (
                     <div className="space-y-8">
                         <div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Contact Link</h3>
                           <p className="text-white/30 text-xs font-black uppercase tracking-widest italic">How to reach you</p>
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500" />
                        <div className="flex gap-4">
                           <button onClick={() => setStep(1)} className="flex-1 py-5 rounded-2xl bg-white/5 text-white font-black uppercase text-xs tracking-widest border border-white/10">Back</button>
                           <button onClick={() => setStep(3)} className="flex-[2] py-5 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest">Next Step</button>
                        </div>
                     </div>
                  )}
                  {step === 3 && (
                     <div className="space-y-8">
                         <div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Message</h3>
                           <p className="text-white/30 text-xs font-black uppercase tracking-widest italic">What's on your mind?</p>
                        </div>
                        <textarea placeholder="Write something..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 h-32"></textarea>
                        <div className="flex gap-4">
                           <button onClick={() => setStep(2)} className="flex-1 py-5 rounded-2xl bg-white/5 text-white font-black uppercase text-xs tracking-widest border border-white/10">Back</button>
                           <button onClick={() => { setSent(true); setTimeout(()=>setSent(false),3000); setStep(1); }} className="flex-[2] py-5 rounded-2xl bg-indigo-600 text-white font-black uppercase text-xs tracking-widest shadow-xl shadow-indigo-600/20">Send Request</button>
                        </div>
                     </div>
                  )}
               </motion.div>
            </AnimatePresence>
         </div>
      </section>
   );
};

export const ContactMinimal = ({ bgColor, accentColor, isPreview }: any) => (
   <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">MINIMAL.</h2>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-12">CONNECT THROUGH SIMPLICITY</p>
            <div className="space-y-4">
               <div className="text-xl font-bold text-white underline underline-offset-8 decoration-white/10 hover:decoration-indigo-500 transition-all cursor-pointer">HELLO@SITESTUDIO.IO</div>
               <div className="text-xl font-bold text-white hover:italic transition-all cursor-pointer">+1 (800) 000 000</div>
            </div>
         </div>
         <div className="flex-1 w-full">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-indigo-500 transition-all" />
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-indigo-500 transition-all" />
                <button style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all">Send Now</button>
            </form>
         </div>
      </div>
   </section>
);

export const ContactFullscreen = ({ bgColor, isPreview }: any) => {
   const [sent, setSent] = useState(false);
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'h-[500px]' : 'h-screen'} flex items-center justify-center px-6 relative overflow-hidden`}>
         <SuccessToast show={sent} />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full" />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 w-full">
            <div>
               <h2 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-20 italic">DIRECT <br/><span className="text-white/10">ACCESS.</span></h2>
               <div className="flex gap-12 text-white/20">
                  <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">AVAILABILITY</div>
                      <div className="text-xl font-bold italic">24/7 GLOBAL SUPP.</div>
                  </div>
                  <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">LOCATIONS</div>
                      <div className="text-xl font-bold italic">SF / LDN / TYO</div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col justify-center">
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3000); }} className="space-y-10">
                   <div className="group">
                      <input type="text" required placeholder="What's your name?" className="w-full bg-transparent border-b-2 border-white/5 py-8 text-3xl font-black uppercase tracking-tighter placeholder:opacity-10 text-white outline-none focus:border-white transition-all" />
                   </div>
                   <div className="group">
                      <input type="email" required placeholder="And your email?" className="w-full bg-transparent border-b-2 border-white/5 py-8 text-3xl font-black uppercase tracking-tighter placeholder:opacity-10 text-white outline-none focus:border-white transition-all" />
                   </div>
                   <button className="bg-white text-black px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] hover:scale-105 active:scale-95 transition-all w-fit shadow-2xl">Start Transmission</button>
                </form>
            </div>
         </div>
      </section>
   );
};

export const ContactCreative3D = ({ bgColor, accentColor, isPreview }: any) => {
   const [sent, setSent] = useState(false);
   return (
      <section style={{ background: bgColor }} className={`w-full ${isPreview ? 'py-10' : 'py-24'} px-6 overflow-hidden`}>
         <SuccessToast show={sent} />
         <div className="max-w-4xl mx-auto">
            <motion.div whileHover={{ rotateY: 10, rotateX: 5, y: -20 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
               className="p-1 rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-white/5 to-purple-500/20 perspective-1000 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
               <div className="bg-[#09090b] rounded-[3.9rem] p-12 md:p-20 relative overflow-hidden">
                  <div style={{ background: accentColor }} className="absolute -top-20 -right-20 w-64 h-64 opacity-5 rounded-full blur-[100px]" />
                  <div className="text-center mb-16 relative z-10">
                     <div className="flex justify-center mb-6">
                        <div style={{ color: accentColor }} className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center shadow-lg shadow-indigo-500/20"><Sparkles size={32}/></div>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4 leading-none">PREMIUM PORTAL</h2>
                     <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">ENTER YOUR CREDENTIALS BELOW</p>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3000); }} className="space-y-6 relative z-10 max-w-lg mx-auto">
                     <input type="text" placeholder="Identity" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all font-mono text-sm placeholder:opacity-20" />
                     <input type="email" placeholder="Communication Node (Email)" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all font-mono text-sm placeholder:opacity-20" />
                     <textarea placeholder="Transmission Data" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-indigo-500 transition-all font-mono text-sm placeholder:opacity-20 h-32"></textarea>
                     <button style={{ backgroundColor: accentColor }} className="w-full py-6 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-2xl shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all">Connect Now</button>
                  </form>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export const allContacts = {
  ContactFormBasic,
  ContactDetailsGrid,
  ContactSplit,
  ContactWithMap,
  ContactCards,
  ContactSocial,
  ContactBooking,
  ContactFAQHybrid,
  ContactInteractiveSteps,
  ContactMinimal,
  ContactFullscreen,
  ContactCreative3D
};
