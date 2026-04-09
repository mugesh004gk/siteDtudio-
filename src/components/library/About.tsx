import React from 'react';
import { 
  ArrowRight, Users, Target, Eye, Rocket, Trophy, Heart, Shield,
  Globe, Calendar, MapPin, Twitter, Linkedin, Facebook, Play,
  ChevronRight, CheckCircle2, Star, Zap, Activity, Award
} from 'lucide-react';

/* --- BASIC --- */
export const AboutBasic = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1', title = 'Who We Are', description = 'We are a dedicated team of experts focused on delivering excellence and innovation in everything we do.' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
       <div>
          <span style={{ color: accentColor }} className="text-xs font-black uppercase tracking-[0.3em] mb-4 block">About Our Company</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9]">{title}</h2>
          <p className="text-lg opacity-60 leading-relaxed mb-10">{description}</p>
          <button style={{ backgroundColor: accentColor }} className="px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 hover:translate-x-2 transition-transform">Learn More <ArrowRight size={20}/></button>
       </div>
       <div className="relative">
          <div className="aspect-[4/5] bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 relative group">
             <img src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
             <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 hidden md:block">
                <p className="text-sm font-bold">"Innovation is at the core of our DNA, driving every decision we make."</p>
             </div>
          </div>
       </div>
    </div>
  </section>
);

/* --- TEAM --- */
export const AboutTeamGrid = ({ bgColor = '#09090b', textColor = '#ffffff', cardColor = '#18181b', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto text-center mb-16">
       <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Meet The Team</h2>
       <p className="opacity-40 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.2em]">The visionary minds behind SiteStudio</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
       {[
         { name: 'Alex Rivera', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
         { name: 'Sarah Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
         { name: 'Marcus Bell', role: 'CTO', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
         { name: 'Emma Watson', role: 'Product Lead', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' }
       ].map((member, i) => (
         <div key={i} style={{ backgroundColor: cardColor }} className="group relative rounded-[2rem] overflow-hidden border border-white/5 active:scale-95 transition-all">
            <div className="aspect-[3/4] overflow-hidden">
               <img src={member.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="p-6 text-center bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 inset-x-0 pt-12">
               <h4 className="font-bold text-lg mb-1">{member.name}</h4>
               <p style={{ color: accentColor }} className="text-xs font-black uppercase tracking-widest">{member.role}</p>
            </div>
         </div>
       ))}
    </div>
  </section>
);

/* --- STATS / ACHIEVEMENTS --- */
export const AboutStats = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 border-y border-white/5">
     <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { l: 'Happy Clients', val: '2.5k+', i: Users },
          { l: 'Finished Projects', val: '180+', i: Target },
          { l: 'Awards Win', val: '12', i: Trophy },
          { l: 'Years Exp.', val: '8+', i: Calendar }
        ].map((s, i) => (
          <div key={i}>
             <div style={{ color: accentColor }} className="flex justify-center mb-6"><s.i size={32}/></div>
             <h3 className="text-5xl font-black mb-2 tracking-tighter">{s.val}</h3>
             <p className="text-[10px] font-black uppercase tracking-widest opacity-30">{s.l}</p>
          </div>
        ))}
     </div>
  </section>
);

/* --- STORY / TIMELINE --- */
export const AboutTimeline = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black">Our Journey</h2>
       </div>
       <div className="space-y-12">
          {[
            { y: '2018', t: 'The Beginning', d: 'Started with a team of two in a small garage with a big vision.' },
            { y: '2020', t: 'Initial Scale', d: 'Reached 10k monthly active users and secured initial funding.' },
            { y: '2023', t: 'Global Expansion', d: 'Opened offices in 3 continents with a distributed team of 50+.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start relative pb-12 last:pb-0">
               {i < 2 && <div className="absolute left-6 top-12 bottom-0 w-px bg-white/10 hidden md:block" />}
               <div style={{ backgroundColor: accentColor }} className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shrink-0 z-10">{item.y}</div>
               <div>
                  <h4 className="text-2xl font-bold mb-2">{item.t}</h4>
                  <p className="opacity-50 leading-relaxed">{item.d}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

/* --- MISSION / VISION --- */
export const AboutMissionVision = ({ bgColor = '#09090b', textColor = '#ffffff', cardColor = '#18181b', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
       <div style={{ backgroundColor: cardColor }} className="p-12 md:p-20 rounded-[3rem] border border-white/5 group hover:border-indigo-500/30 transition-all">
          <div style={{ color: accentColor }} className="mb-8"><Target size={48} /></div>
          <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Our Mission</h3>
          <p className="text-lg opacity-50 leading-relaxed">To democratize professional web design through intelligent automation and creative freedom.</p>
       </div>
       <div style={{ backgroundColor: cardColor }} className="p-12 md:p-20 rounded-[3rem] border border-white/5 group hover:border-indigo-500/30 transition-all">
          <div style={{ color: accentColor }} className="mb-8"><Eye size={48} /></div>
          <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Our Vision</h3>
          <p className="text-lg opacity-50 leading-relaxed">Defining the next generation of web building where every developer has the power of a studio at their fingertips.</p>
       </div>
    </div>
  </section>
);

/* --- CREATIVE / GLASS --- */
export const AboutGlass = ({ bgColor = '#050505', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
   <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
         <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 md:p-24 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10">Creative Energy.</h2>
                  <p className="text-xl opacity-60 leading-relaxed max-w-lg mb-12">We don't just build websites; we craft digital identities that resonate with humans across the globe.</p>
                  <div className="flex gap-4">
                     {[1,2,3].map(i => <div key={i} className="w-12 h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center"><Zap size={20} className="text-indigo-400"/></div>)}
                  </div>
               </div>
               <div className="flex-1 relative">
                  <div className="w-full aspect-square bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] rotate-3 opacity-20 absolute inset-0 blur-2xl" />
                  <div className="w-full aspect-square bg-[#09090b] rounded-[3rem] border border-white/10 flex items-center justify-center p-8 relative">
                     <Rocket size={120} className="text-white opacity-20 animate-bounce" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* --- CENTERED --- */
export const AboutCentered = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1', title = 'Pioneering Change', description = 'Our goal is to reshape the digital landscape with purpose-driven design.' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6 text-center">
    <div className="max-w-3xl mx-auto">
       <div style={{ color: accentColor }} className="flex justify-center mb-8"><Award size={48} /></div>
       <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter">{title}</h2>
       <p className="text-xl opacity-50 mb-12 leading-relaxed">{description}</p>
       <button style={{ backgroundColor: accentColor }} className="px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform">Get Started</button>
    </div>
  </section>
);

/* --- IMAGE / VISUAL --- */
export const AboutVisualGrid = ({ bgColor = '#09090b', textColor = '#ffffff' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
       <div className="col-span-2 row-span-2 rounded-[3rem] overflow-hidden group border border-white/10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
       </div>
       <div className="rounded-[2rem] overflow-hidden group border border-white/10">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
       </div>
       <div className="rounded-[2rem] overflow-hidden group border border-white/10">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
       </div>
       <div className="col-span-2 rounded-[2rem] overflow-hidden group border border-white/10 relative">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 className="text-4xl font-black uppercase italic tracking-tighter">Inside Our Studio</h3></div>
       </div>
    </div>
  </section>
);

/* --- VIDEO --- */
export const AboutVideo = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
     <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative aspect-video border border-white/10 shadow-2xl group">
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black/20">
           <div style={{ backgroundColor: accentColor }} className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl border-4 border-white/20">
              <Play className="text-white ml-2" size={40} fill="currentColor" />
           </div>
           <p className="text-2xl font-black uppercase tracking-widest text-white/80">Watch Our Founder's Story</p>
        </div>
     </div>
  </section>
);

/* --- INTERACTIVE --- */
export const AboutAccordion = ({ bgColor = '#09090b', textColor = '#ffffff', accentColor = '#6366f1' }: any) => (
  <section style={{ backgroundColor: bgColor, color: textColor }} className="py-24 px-6">
    <div className="max-w-4xl mx-auto space-y-6">
       {[
         { q: 'Continuous Innovation', a: 'We never stop exploring new technologies to give our users a competitive edge in the web building landscape.' },
         { q: 'User-Centric Design', a: 'Every feature we build starts with a simple question: How does this make our users lives easier?' },
         { q: 'Community Driven', a: 'Our roadmap is directly influenced by the feedback and needs of our global developer community.' }
       ].map((item, i) => (
         <div key={i} className="bg-[#111113] border border-white/5 rounded-3xl p-8 group cursor-pointer transition-all hover:border-indigo-500/30">
            <div className="flex items-center justify-between">
               <h4 className="text-2xl font-black uppercase tracking-tighter">{item.q}</h4>
               <div style={{ backgroundColor: i===0 ? accentColor : 'transparent' }} className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all`}>
                  <ChevronRight size={20} className={`transition-transform ${i===0 ? 'rotate-90' : ''}`} />
               </div>
            </div>
            {i === 0 && <p className="mt-6 text-lg opacity-50 leading-relaxed font-medium">{item.a}</p>}
         </div>
       ))}
    </div>
  </section>
);

export const allAbout = {
  "about-basic": AboutBasic,
  "about-team-grid": AboutTeamGrid,
  "about-stats": AboutStats,
  "about-timeline": AboutTimeline,
  "about-mission-vision": AboutMissionVision,
  "about-glass": AboutGlass,
  "about-centered": AboutCentered,
  "about-visual": AboutVisualGrid,
  "about-video": AboutVideo,
  "about-accordion": AboutAccordion
};
