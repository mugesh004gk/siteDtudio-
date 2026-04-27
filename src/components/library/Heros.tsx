import React from 'react';
import { 
  ArrowRight, Play, CheckCircle2, Star, Shield, Zap, Sparkles, Download, 
  ChevronRight, PlayCircle, Monitor, Smartphone, Video, Layout
} from 'lucide-react';

/* --- BASIC HEROS --- */
export const HeroTextRight = ({
  bgColor = '#09090b',
  textColor = '#ffffff',
  align = 'left',
  padding = '4rem 2rem',
  title = 'Build the Future',
  subtitle = 'The most advanced platform for modern web development.',
  buttonText = 'Get Started',
  image = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
}: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full min-h-[500px] flex items-center transition-all bg-cover bg-center">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
       <div>
         <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">{title}</h1>
         <p className="text-lg opacity-70 mb-8 max-w-lg leading-relaxed">{subtitle}</p>
         <div className="flex gap-4">
           <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1">{buttonText}</button>
           <button style={{ border: `1px solid ${textColor}` }} className="px-8 py-4 rounded-xl font-bold opacity-80 hover:opacity-100 flex items-center gap-2 transition-transform hover:-translate-y-1"><PlayCircle size={20}/> Watch Demo</button>
         </div>
       </div>
       <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative bg-white/5 border border-white/10 group">
         <img src={image} alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
       </div>
    </div>
  </div>
);

export const HeroImageRight = HeroTextRight; 
export const HeroTextLeft = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '4rem 2rem', ...props }: any) => <HeroTextRight {...{bgColor, textColor, align: 'right', padding, ...props}} />;
export const HeroMinimal = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '6rem 2rem', title = 'Minimal & Clean', subtitle = 'Focus on what matters the most.', buttonText = 'Start Now' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full min-h-[400px] flex items-center justify-center transition-all flex-col">
    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{title}</h1>
    <p className="text-xl md:text-2xl opacity-60 max-w-2xl mx-auto mb-10">{subtitle}</p>
    <button style={{ backgroundColor: textColor, color: bgColor }} className="px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">{buttonText}</button>
  </div>
);
export const HeroHeadingSub = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '8rem 2rem', title = 'Headline Here', subtitle = 'Subheading value', buttonText = 'Action' }: any) => <HeroMinimal {...{bgColor,textColor,align,padding,title,subtitle,buttonText}} />;

/* --- CENTERED HEROS --- */
export const HeroCenteredCTA = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '6rem 2rem', title = 'Center of Attention', subtitle = 'Command the room with central alignment', buttonText = 'Start Building' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex items-center justify-center flex-col max-w-4xl mx-auto">
    <span className="px-4 py-1.5 rounded-full border mb-6 text-xs font-bold uppercase tracking-widest inline-flex" style={{ borderColor: `${textColor}33`, color: textColor }}>New Release 2.0</span>
    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">{title}</h1>
    <p className="text-xl opacity-60 mb-10">{subtitle}</p>
    <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition hover:scale-105 mx-auto">{buttonText} <ArrowRight size={20}/></button>
  </div>
);
export const HeroCenteredTwoButtons = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '6rem 2rem', title = 'Dual Actions', subtitle = 'Give your users choices.', buttonText = 'Primary Action' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex items-center justify-center flex-col">
    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{title}</h1>
    <p className="text-lg opacity-60 max-w-xl mx-auto mb-10">{subtitle}</p>
    <div className="flex gap-4 justify-center w-full max-w-xs mx-auto md:max-w-none">
       <button style={{ backgroundColor: textColor, color: bgColor }} className="flex-1 md:flex-none px-8 py-4 rounded-xl font-bold">{buttonText}</button>
       <button style={{ border: `1px solid ${textColor}` }} className="flex-1 md:flex-none px-8 py-4 rounded-xl font-bold opacity-80 hover:opacity-100">Secondary</button>
    </div>
  </div>
);
export const HeroMinimalCenter = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '5rem 2rem', title = 'Purity in Design', subtitle = 'No distractions.', buttonText='Explore' }: any) => <HeroCenteredCTA {...{bgColor,textColor,align,padding,title,subtitle,buttonText}} />;

/* --- SPLIT HEROS --- */
export const HeroSplit5050 = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '0', title = 'Balanced Layout', subtitle = 'Equal weight to text and media', buttonText='Learn More' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex flex-col md:flex-row min-h-[600px]">
    <div className="flex-1 p-12 md:p-24 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{title}</h1>
      <p className="text-lg opacity-70 mb-10">{subtitle}</p>
      <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold w-max">{buttonText}</button>
    </div>
    <div className="flex-1 bg-cover bg-center min-h-[400px] md:min-h-auto" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')"}}></div>
  </div>
);
export const HeroIllustrationSplit = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '4rem 2rem', title = 'Creative Split', subtitle = 'Featuring illustration art', buttonText='Begin' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
     <div className="order-2 md:order-1 flex justify-center"><div className="w-full max-w-md aspect-square bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl relative"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" alt="Art" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay rounded-[3rem]"/></div></div>
     <div className="order-1 md:order-2">
       <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">{title}</h1>
       <p className="text-xl opacity-60 mb-10">{subtitle}</p>
       <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold">{buttonText}</button>
     </div>
  </div>
);
export const HeroSplitStats = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '4rem 2rem', title = 'Data Driven', subtitle = 'Showcase your metrics instantly', buttonText='Analyze' }: any) => (
   <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex flex-col md:flex-row gap-12 max-w-7xl mx-auto items-center">
      <div className="flex-1">
         <h1 className="text-5xl font-black mb-6">{title}</h1>
         <p className="opacity-70 mb-8">{subtitle}</p>
         <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold mb-12">{buttonText}</button>
         <div className="grid grid-cols-2 gap-6 pt-8 border-t" style={{borderColor: `${textColor}22`}}>
           <div><h4 className="text-4xl font-black">99%</h4><p className="text-xs uppercase tracking-widest opacity-50 mt-2">Satisfaction</p></div>
           <div><h4 className="text-4xl font-black">24/7</h4><p className="text-xs uppercase tracking-widest opacity-50 mt-2">Support</p></div>
         </div>
      </div>
      <div className="flex-1 bg-white/5 rounded-[3rem] p-8 border border-white/10 aspect-square flex flex-col gap-4">
         <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl relative overflow-hidden"><div className="absolute bottom-0 w-full h-1/2 bg-white/20 backdrop-blur" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)'}}></div></div>
      </div>
   </div>
);

/* --- IMAGE BACKGROUND --- */
export const HeroFullImage = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '8rem 2rem', title = 'Immersive Visuals', subtitle = 'Let the image speak.', buttonText='Discover' }: any) => (
  <div style={{ padding, textAlign: align, backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }} className="w-full min-h-[600px] flex flex-col justify-center items-center bg-cover bg-center relative">
    <div className="absolute inset-0 bg-black/40 z-0"></div>
    <div className="w-full max-w-4xl mx-auto relative z-10 text-white">
       <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl">{title}</h1>
       <p className="text-xl md:text-2xl font-medium drop-shadow-lg mb-10">{subtitle}</p>
       <button className="px-10 py-5 bg-white text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">{buttonText}</button>
    </div>
  </div>
);
export const HeroDarkOverlay = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '8rem 2rem', title = 'Deep Contrast', subtitle = 'Perfect text readability.', buttonText='View More' }: any) => (
  <div style={{ padding, textAlign: align, backgroundImage: "url('https://images.unsplash.com/photo-1531297172867-4f50fbdce288?auto=format&fit=crop&w=1920&q=80')" }} className="w-full min-h-[500px] flex flex-col justify-center bg-cover bg-center relative">
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-0"></div>
    <div className="w-full max-w-7xl mx-auto relative z-10 text-white">
       <h1 className="text-5xl md:text-7xl font-black mb-6 max-w-2xl">{title}</h1>
       <p className="text-xl opacity-80 mb-10 max-w-xl">{subtitle}</p>
       <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold">{buttonText}</button>
    </div>
  </div>
);
export const HeroGradientOverlay = HeroDarkOverlay;
export const HeroParallax = HeroFullImage;

/* --- VIDEO BACKGROUND --- */
export const HeroVideoFS = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '10rem 2rem', title = 'Motion Brings Life', subtitle = 'Video background hero.', buttonText='Play Now' }: any) => (
  <div style={{ padding, textAlign: align, backgroundColor: bgColor, color: textColor }} className="w-full min-h-[600px] flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30"><Video size={200} className="animate-pulse"/></div>
    <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[2px]"></div>
    <div className="w-full max-w-4xl mx-auto relative z-20">
       <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20"><Play fill="currentColor" size={32} className="ml-2"/></div>
       <h1 className="text-5xl md:text-7xl font-black mb-6">{title}</h1>
       <p className="text-xl md:text-2xl font-medium mb-10">{subtitle}</p>
    </div>
  </div>
);
export const HeroVideoLoop = HeroVideoFS;
export const HeroVideoOverlay = HeroVideoFS;

/* --- SAAS / STARTUP --- */
export const HeroSaaSProduct = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '6rem 2rem 0', title = 'The Ultimate Tool', subtitle = 'Designed for modern teams.', buttonText='Start Free Trial' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex flex-col items-center pt-24 overflow-hidden relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 aspect-square bg-indigo-500/20 blur-[100px] rounded-full point-events-none"></div>
    <div className="max-w-4xl mx-auto relative z-10 mb-16">
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">{title}</h1>
      <p className="text-xl opacity-60 max-w-2xl mx-auto mb-10">{subtitle}</p>
      <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold">{buttonText}</button>
      <p className="text-xs opacity-40 mt-4">No credit card required. 14-day free trial.</p>
    </div>
    <div className="w-full max-w-6xl mx-auto bg-[#18181b] border border-white/10 rounded-t-[2rem] h-[400px] shadow-[0_0_100px_rgba(79,70,229,0.2)] p-2">
       <div className="w-full h-full rounded-tl-[1.5rem] rounded-tr-[1.5rem] bg-[#09090b] border border-white/5 flex items-center justify-center overflow-hidden relative group">
          <div className="absolute top-4 left-4 flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-500"/><div className="w-3 h-3 rounded-full bg-amber-500"/><div className="w-3 h-3 rounded-full bg-emerald-500"/></div>
          <Monitor size={100} className="opacity-10 text-indigo-500 group-hover:scale-110 transition-transform duration-1000" />
       </div>
    </div>
  </div>
);
export const HeroSaaSDashboard = HeroSaaSProduct;
export const HeroSaaSCTA = HeroSaaSProduct;
export const HeroSaaSTrust = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '8rem 2rem', title = 'Trusted by the Best', subtitle = 'Join 10,000+ companies.', buttonText='Get Started' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex flex-col items-center justify-center">
    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">{title}</h1>
    <p className="text-lg opacity-60 mb-10">{subtitle}</p>
    <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold mb-16">{buttonText}</button>
    <p className="text-xs font-black uppercase tracking-[0.3em] opacity-30 mb-8">Trusted by industry leaders</p>
    <div className="flex gap-12 items-center justify-center flex-wrap opacity-40 grayscale">
      {[1,2,3,4,5].map(i => <div key={i} className="h-8 w-32 bg-white/20 rounded mask-image-gradient" />)}
    </div>
  </div>
);

/* --- E-COMMERCE --- */
export const HeroEcomProduct = ({ bgColor = '#f8fafc', textColor = '#0f172a', align = 'left', padding = '4rem 2rem', title = 'New Collection 2026', subtitle = 'Discover the latest trends in fashion and accessories.', buttonText='Shop Now' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full min-h-[600px] flex items-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 z-10 relative items-center">
       <div className="order-2 md:order-1 relative h-[500px]">
          <div className="absolute inset-0 bg-[#e2e8f0] rounded-full scale-105 translate-x-12 translate-y-12"></div>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" alt="Product" className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10" />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center"><span className="text-sm font-bold text-gray-500 line-through">$299</span><span className="text-3xl font-black text-rose-500">$199</span></div>
       </div>
       <div className="order-1 md:order-2">
         <span className="text-rose-500 font-black tracking-widest uppercase text-sm mb-4 block">Limited Time Offer</span>
         <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">{title}</h1>
         <p className="text-lg opacity-70 mb-10 max-w-md">{subtitle}</p>
         <button style={{ backgroundColor: textColor, color: bgColor }} className="px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wider">{buttonText}</button>
       </div>
    </div>
  </div>
);
export const HeroEcomOffer = HeroEcomProduct;
export const HeroEcomCollection = HeroEcomProduct;
export const HeroEcomSlider = HeroEcomProduct;

/* --- PORTFOLIO --- */
export const HeroPortfolioIntro = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '6rem 2rem', title = "Hi, I'm Alex.", subtitle = "I design digital experiences that make people's lives easier.", buttonText='View Work' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full flex items-center min-h-[500px]">
    <div className="max-w-5xl mx-auto w-full">
       <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full mb-10 overflow-hidden border-4 border-white/10">
         <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight max-w-3xl">{title}</h1>
       <p className="text-2xl font-serif italic opacity-70 mb-12 max-w-2xl">{subtitle}</p>
       <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 justify-between w-64 rounded-xl font-bold flex items-center group transition-all hover:pr-4">{buttonText} <ArrowRight className="group-hover:translate-x-2 transition-transform"/></button>
    </div>
  </div>
);
export const HeroPortfolioDesigner = HeroPortfolioIntro;
export const HeroPortfolioMinimal = HeroPortfolioIntro;

/* --- APP / MOBILE --- */
export const HeroAppDownload = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '4rem 2rem', title = 'App in your hands', subtitle = 'Download the most powerful mobile application built to scale your workflow.', buttonText='App Store' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full overflow-hidden relative min-h-[600px] flex items-center">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <div>
         <span className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-6 uppercase tracking-widest"><Shield size={16}/> Secuirty First</span>
         <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">{title}</h1>
         <p className="text-lg opacity-60 mb-10 max-w-md">{subtitle}</p>
         <div className="flex gap-4">
           <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform"><Download size={24}/> <div className="text-left leading-none"><span className="text-[10px] block opacity-50 font-bold uppercase">Download on the</span><span className="font-black">App Store</span></div></button>
           <button className="flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-xl border border-white/5 hover:bg-white/20 transition-colors"><Smartphone size={24}/> <div className="text-left leading-none"><span className="text-[10px] block opacity-50 font-bold uppercase">Get it on</span><span className="font-black">Google Play</span></div></button>
         </div>
      </div>
      <div className="relative h-[600px] flex justify-center items-end hidden md:flex translate-y-12">
         <div className="w-72 h-[600px] bg-black rounded-[3rem] border-8 border-[#222] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-2xl w-1/2 mx-auto"></div>
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80" className="opacity-50 w-full h-full object-cover scale-110"/>
            <div className="absolute inset-x-4 bottom-8 h-20 bg-white/20 backdrop-blur rounded-2xl border border-white/30"></div>
         </div>
      </div>
    </div>
  </div>
);
export const HeroAppMockup = HeroAppDownload;
export const HeroAppFeature = HeroAppDownload;

/* --- CREATIVE / ANIMATED --- */
export const HeroCreativeGradient = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '10rem 2rem', title = 'Creative Power', subtitle = 'Unleash imagination through design.', buttonText='Get Inspired' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full relative overflow-hidden flex items-center justify-center min-h-[500px]">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{animationDelay: '1s'}}></div>
    
    <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
      <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-8"><div className="px-4 py-1.5 bg-black rounded-full text-xs font-black uppercase tracking-widest">New Engine v4.0</div></div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{title}</h1>
      <p className="text-xl md:text-2xl opacity-60 mb-10 max-w-2xl">{subtitle}</p>
      <button className="relative group px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500 blur-sm"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 z-0"></div>
         <span className="relative z-10 text-white flex items-center gap-2"><Sparkles size={16}/> {buttonText}</span>
      </button>
    </div>
  </div>
);
export const HeroCreativeGlass = HeroCreativeGradient;
export const HeroCreativeAnimated = HeroCreativeGradient;
export const HeroCreative3D = HeroCreativeGradient;

/* --- FULLSCREEN --- */
export const HeroFullscreen100vh = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'center', padding = '2rem', title = 'Fullscreen Immersion', subtitle = 'Take over the entire viewport.', buttonText='Scroll Down' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full h-screen flex flex-col items-center justify-center relative">
    <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none">{title}</h1>
    <p className="text-2xl md:text-4xl opacity-30 mt-8 mb-16">{subtitle}</p>
    <div className="absolute bottom-12 animate-bounce border border-white/20 p-4 rounded-full text-white/50 hover:text-white cursor-pointer"><ArrowRight className="rotate-90"/></div>
  </div>
);
export const HeroFullscreenCenter = HeroFullscreen100vh;
export const HeroFullscreenSplit = HeroFullscreen100vh;

/* --- HYBRID --- */
export const HeroHybridImgVid = ({ bgColor = '#09090b', textColor = '#ffffff', align = 'left', padding = '6rem 2rem', title = 'Hybrid Media', subtitle = 'Combine elements for maximum impact.', buttonText='Explore' }: any) => (
  <div style={{ backgroundColor: bgColor, color: textColor, padding, textAlign: align }} className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
     <div>
       <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">{title}</h1>
       <p className="text-xl opacity-60 mb-10">{subtitle}</p>
       <button style={{ backgroundColor: textColor, color: bgColor }} className="px-8 py-4 rounded-xl font-bold">{buttonText}</button>
     </div>
     <div className="grid grid-cols-2 gap-4 h-[500px]">
       <div className="bg-white/5 rounded-[3rem] overflow-hidden translate-y-12"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80"/></div>
       <div className="bg-white/10 rounded-[3rem] overflow-hidden border border-white/10 flex items-center justify-center relative">
         <div className="absolute inset-0 bg-indigo-500/20 z-0"></div>
         <PlayCircle size={64} className="text-white relative z-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity"/>
       </div>
     </div>
  </div>
);
export const HeroHybridSplitAnim = HeroHybridImgVid;
export const HeroHybridDynamic = HeroHybridImgVid;

export const allHeros = {
  "hero-text-right": HeroTextRight,
  "hero-image-right": HeroImageRight,
  "hero-text-left": HeroTextLeft,
  "hero-minimal": HeroMinimal,
  "hero-heading-sub": HeroHeadingSub,
  "hero-centered-cta": HeroCenteredCTA,
  "hero-centered-two": HeroCenteredTwoButtons,
  "hero-minimal-center": HeroMinimalCenter,
  "hero-split-5050": HeroSplit5050,
  "hero-illustration-split": HeroIllustrationSplit,
  "hero-split-stats": HeroSplitStats,
  "hero-full-image": HeroFullImage,
  "hero-dark-overlay": HeroDarkOverlay,
  "hero-gradient-overlay": HeroGradientOverlay,
  "hero-parallax": HeroParallax,
  "hero-video-fs": HeroVideoFS,
  "hero-video-loop": HeroVideoLoop,
  "hero-video-overlay": HeroVideoOverlay,
  "hero-saas-product": HeroSaaSProduct,
  "hero-saas-dashboard": HeroSaaSDashboard,
  "hero-saas-cta": HeroSaaSCTA,
  "hero-saas-trust": HeroSaaSTrust,
  "hero-ecom-product": HeroEcomProduct,
  "hero-ecom-offer": HeroEcomOffer,
  "hero-ecom-collection": HeroEcomCollection,
  "hero-ecom-slider": HeroEcomSlider,
  "hero-portfolio-intro": HeroPortfolioIntro,
  "hero-portfolio-designer": HeroPortfolioDesigner,
  "hero-portfolio-minimal": HeroPortfolioMinimal,
  "hero-app-download": HeroAppDownload,
  "hero-app-mockup": HeroAppMockup,
  "hero-app-feature": HeroAppFeature,
  "hero-creative-gradient": HeroCreativeGradient,
  "hero-creative-glass": HeroCreativeGlass,
  "hero-creative-animated": HeroCreativeAnimated,
  "hero-creative-3d": HeroCreative3D,
  "hero-fullscreen-100": HeroFullscreen100vh,
  "hero-fullscreen-center": HeroFullscreenCenter,
  "hero-fullscreen-split": HeroFullscreenSplit,
  "hero-hybrid-imgvid": HeroHybridImgVid,
  "hero-hybrid-splitanim": HeroHybridSplitAnim,
  "hero-hybrid-dynamic": HeroHybridDynamic,
};
