
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Rocket, Star, HelpCircle, Shield, ArrowRight, Minus, Plus, CreditCard, ShoppingCart, Award, Users, MessageCircle, BarChart, Globe, Lock, Search } from 'lucide-react';

const PlanCard = ({ name, price, desc, features, highlight, bgColor, textColor, highlightColor, font, billing = "/ month" }: any) => {
  return (
    <div 
      style={{ background: bgColor, color: textColor, fontFamily: font }}
      className={`p-8 rounded-[2.5rem] border ${highlight ? `border-indigo-500` : 'border-white/5'} flex flex-col h-full relative group transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl overflow-hidden`}
    >
      {highlight && (
        <div className="absolute top-0 right-0">
          <div style={{ background: highlightColor }} className="px-6 py-1.5 rounded-bl-[1.5rem] text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
            Popular
          </div>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 tracking-tight uppercase tracking-widest text-white/40">{name}</h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl font-black text-white tracking-tighter">${price}</span>
          <span className="text-white/40 font-bold uppercase text-[10px]">{billing}</span>
        </div>
        <p className="text-sm text-white/50 leading-relaxed font-medium">{desc}</p>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((f: string, i: number) => (
          <div key={i} className="flex items-start gap-3 group/item">
            <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
              <Check size={12} style={{ color: highlightColor }} />
            </div>
            <span className="text-sm text-white/70 font-medium group-hover/item:text-white transition-colors">{f}</span>
          </div>
        ))}
      </div>

      <button 
        style={{ background: highlight ? highlightColor : 'rgba(255,255,255,0.05)' }}
        className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl ${highlight ? 'text-white shadow-indigo-500/20' : 'text-white hover:bg-white/10'}`}
      >
        Get Started Now
      </button>
    </div>
  );
};

// 1. BASIC
export const PricingBasic3Col = ({ bgColor, textColor, cardColor, highlightColor, font, padding }: any) => {
  const plans = [
    { name: "Starter", price: "0", desc: "Perfect for exploring our platform features.", features: ["Up to 3 Projects", "Basic Analytics", "Community Support", "1GB Storage"] },
    { name: "Pro", price: "29", desc: "The perfect balance for growing teams.", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "20GB Storage", "Custom Domain"], highlight: true },
    { name: "Global", price: "99", desc: "Complete power for massive scaling.", features: ["Enterprise Security", "API Access", "Dedicated Manager", "Unlimited Storage", "White Labeling"] }
  ];

  return (
    <section style={{ background: bgColor, color: textColor, padding }} className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <PlanCard key={i} {...p} bgColor={cardColor} textColor={textColor} highlightColor={highlightColor} font={font} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PricingBasic4Col = ({ bgColor, textColor, cardColor, highlightColor, font, padding }: any) => {
  const plans = [
    { name: "Free", price: "0", desc: "Hobbyist core features.", features: ["1 Project", "Basic Stats"] },
    { name: "Plus", price: "12", desc: "Indie hackers choice.", features: ["5 Projects", "Priority Stats", "Email Support"] },
    { name: "Pro", price: "49", desc: "Full team automation.", features: ["Unlimited Projects", "Team Members", "24/7 Support"], highlight: true },
    { name: "Max", price: "149", desc: "Global infrastructure.", features: ["Self-hosting", "SSO Login", "Custom SLA"] }
  ];

  return (
    <section style={{ background: bgColor, color: textColor, padding }} className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <PlanCard key={i} {...p} bgColor={cardColor} textColor={textColor} highlightColor={highlightColor} font={font} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PricingSimpleCards = ({ bgColor, textColor, cardColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full flex items-center justify-center flex-col gap-10">
       <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 w-64 text-center">
             <div className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">Essential</div>
             <div className="text-4xl font-bold mb-4">$0</div>
             <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition">Try Free</button>
          </div>
          <div className="bg-indigo-600 p-6 rounded-3xl border border-white/10 w-64 text-center shadow-2xl scale-110 z-10">
             <div className="text-xs font-black uppercase tracking-widest text-white/50 mb-2">Professional</div>
             <div className="text-4xl font-bold mb-4">$39</div>
             <button className="w-full py-2 bg-white text-indigo-600 rounded-xl text-xs font-black transition">Buy Now</button>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 w-64 text-center text-white/40">
             <div className="text-xs font-black uppercase tracking-widest mb-2">Ultimate</div>
             <div className="text-4xl font-bold mb-4">$99</div>
             <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition">Contact Us</button>
          </div>
       </div>
    </section>
  );
};

export const PricingMinimalSection = (props: any) => <PricingBasic3Col {...props} />;
export const PricingWithCTA = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full space-y-20">
      <PricingBasic3Col bgColor="transparent" padding="0" cardColor="#111" highlightColor={highlightColor} font={font} />
      <div className="max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-indigo-600 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
         <div>
            <h2 className="text-3xl font-black text-white mb-2">Ready to transform your business?</h2>
            <p className="text-white/60 font-medium tracking-tight">Join 50,000+ creators building the future.</p>
         </div>
         <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-2xl">Start Free Trial</button>
      </div>
    </section>
  );
};

// 2. CARD-BASED
export const PricingCardsGrid = ({ bgColor, textColor, cardColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding }} className="w-full">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-1 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 shadow-2xl">
               <div className="p-8 rounded-[2.25rem] bg-[#111] h-full">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6"><Zap fill="currentColor"/></div>
                  <h3 className="text-2xl font-bold mb-2">Variant {i}</h3>
                  <p className="text-white/40 text-sm mb-8 leading-relaxed">Modern, clean and efficient card based system for high conversion.</p>
                  <div className="text-4xl font-black mb-10">$49<span className="text-sm font-medium text-white/20">.00</span></div>
                  <button className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors">Select Plan</button>
               </div>
            </motion.div>
          ))}
       </div>
    </section>
  );
};

export const PricingHighlighted = (props: any) => <PricingBasic3Col {...props} />;
export const PricingHoverCards = (props: any) => <PricingCardsGrid {...props} />;
export const PricingGlassCards = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <div style={{ background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000)', backgroundSize: 'cover' }} className="w-full min-h-[500px] relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <section style={{ color: textColor, padding }} className="w-full relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <h2 className="text-3xl font-black mb-4">Silver</h2>
              <p className="text-white/60 mb-8">Basic features for personal use.</p>
              <div className="text-5xl font-black mb-10">$19</div>
              <button className="w-full py-4 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">Start Now</button>
           </div>
           <div className="backdrop-blur-2xl bg-indigo-600/20 border border-indigo-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[60px]" />
              <h2 className="text-3xl font-black mb-4">Gold</h2>
              <p className="text-white/80 mb-8">Professional features for teams.</p>
              <div className="text-5xl font-black mb-10">$49</div>
              <button className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition shadow-lg shadow-white/5">Upgrade Pro</button>
           </div>
        </div>
      </section>
    </div>
  );
};
export const PricingShadowCards = (props: any) => <PricingCardsGrid {...props} />;

// 3. COMPARISON
export const PricingComparisonTable = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  const features = [
    { name: "Projects", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Real-time" },
    { name: "Team Members", starter: "1", pro: "Up to 10", enterprise: "Unlimited" },
    { name: "SSO", starter: false, pro: false, enterprise: true },
    { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated 24/7" },
  ];

  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#18181b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                <th className="p-6 text-center text-sm font-black uppercase tracking-widest text-white">Starter</th>
                <th className="p-6 text-center text-sm font-black uppercase tracking-widest text-indigo-400">Pro</th>
                <th className="p-6 text-center text-sm font-black uppercase tracking-widest text-amber-400">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-sm font-medium text-white/70">{f.name}</td>
                  <td className="p-6 text-center text-sm text-white/50">{typeof f.starter === 'boolean' ? (f.starter ? <Check className="mx-auto" size={16}/> : <Minus className="mx-auto opacity-20" size={16}/>) : f.starter}</td>
                  <td className="p-6 text-center text-sm text-white">{typeof f.pro === 'boolean' ? (f.pro ? <Check className="mx-auto text-indigo-400" size={16}/> : <Minus className="mx-auto opacity-20" size={16}/>) : f.pro}</td>
                  <td className="p-6 text-center text-sm text-white font-bold">{typeof f.enterprise === 'boolean' ? (f.enterprise ? <Check className="mx-auto text-amber-400" size={16}/> : <Minus className="mx-auto opacity-20" size={16}/>) : f.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export const PricingComparisonGrid = (props: any) => <PricingComparisonTable {...props} />;
export const PricingCheckmarkComparison = (props: any) => <PricingComparisonTable {...props} />;
export const PricingMatrix = (props: any) => <PricingComparisonTable {...props} />;
export const PricingExpandableComparison = (props: any) => {
   const [expanded, setExpanded] = useState(false);
   return (
      <div className="w-full flex flex-col items-center gap-10">
         <PricingComparisonTable {...props} />
         <button onClick={() => setExpanded(!expanded)} className="text-white/40 hover:text-white flex items-center gap-2 font-black uppercase text-[10px] tracking-widest transition">
            {expanded ? "Show Less" : "Show All Features"} {expanded ? <Minus size={14}/> : <Plus size={14}/>}
         </button>
      </div>
   );
};

// 4. SAAS / SUBSCRIPTION
export const PricingSaaSToggle = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  const [isYearly, setIsYearly] = React.useState(false);
  
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full flex flex-col items-center">
       <div className="flex items-center gap-4 mb-16 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          <button onClick={() => setIsYearly(false)} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition ${!isYearly ? 'bg-indigo-600 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>Monthly</button>
          <button onClick={() => setIsYearly(true)} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition ${isYearly ? 'bg-indigo-600 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>Yearly <span className="text-[10px] text-emerald-400 ml-1">-20%</span></button>
       </div>
       <PricingBasic3Col bgColor="transparent" textColor={textColor} cardColor="#111" highlightColor={highlightColor} font={font} padding="0" />
    </section>
  );
};

export const PricingSubscriptionPlans = (props: any) => <PricingSaaSToggle {...props} />;
export const PricingTiered = (props: any) => <PricingBasic3Col {...props} />;
export const PricingUsageBased = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  const [val, setVal] = React.useState(1000);
  const cost = (val * 0.05).toFixed(2);

  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-3xl mx-auto p-10 rounded-[3rem] bg-[#111] border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-black mb-2">Usage Based</h2>
          <p className="text-white/40 mb-10 uppercase text-xs font-black tracking-widest italic">Pay only for what you process</p>
          
          <div className="mb-10">
             <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold text-white/70">Monthly Events</span>
                <span className="text-3xl font-black text-indigo-400">{val.toLocaleString()}</span>
             </div>
             <input type="range" min="100" max="10000" step="100" value={val} onChange={(e) => setVal(parseInt(e.target.value))} className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
          </div>

          <div className="flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/5">
             <div>
                <div className="text-xs font-black text-white/30 uppercase tracking-widest mb-1">Estimated Monthly</div>
                <div className="text-5xl font-black text-white">${cost}</div>
             </div>
             <button style={{ background: highlightColor }} className="px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white hover:scale-105 transition-transform shadow-xl">Get Started</button>
          </div>
       </div>
    </section>
  );
};
export const PricingFreemium = (props: any) => <PricingBasic3Col {...props} />;

// 5. E-COMMERCE
export const PricingProductCards = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Audio Pack", price: "24", icon: Rocket },
            { name: "UI Kit V2", price: "89", icon: Zap },
            { name: "3D Assets", price: "45", icon: Star }
          ].map((itm, i) => (
             <div key={i} className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden group">
                <div className="aspect-square bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                   <itm.icon size={64} className="text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <div className="p-8">
                   <h3 className="text-xl font-bold text-white mb-1">{itm.name}</h3>
                   <div className="text-2xl font-black text-indigo-400 mb-6">${itm.price}</div>
                   <button className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition">Add to Cart</button>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
};
export const PricingDiscount = (props: any) => <PricingProductCards {...props} />;
export const PricingOfferBanner = (props: any) => {
   return (
      <section style={{ background: props.bgColor, color: props.textColor, padding: props.padding }} className="w-full">
         <div className="max-w-5xl mx-auto rounded-[3rem] bg-indigo-600 p-12 md:p-20 flex flex-col items-center text-center">
            <div className="px-6 py-2 bg-black/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Limited Time Offer</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Save 50% Today</h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl">Get full access to all our tools and assets for a fraction of the cost. Offer expires in 24 hours.</p>
            <button className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition active:brightness-90">Claim Offer Now</button>
         </div>
      </section>
   );
};

export const PricingBundle = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-3xl mx-auto bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px] rounded-[3rem] shadow-2xl">
          <div className="bg-[#09090b] rounded-[3rem] p-10 md:p-16 text-center">
             <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Shield size={32} className="text-indigo-400" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Master Bundle</h2>
             <p className="text-lg text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">Get our complete library of tools, assets, and templates in one massively discounted package.</p>
             <div className="flex items-center justify-center gap-4 mb-10">
                <span className="text-white/20 text-3xl font-bold line-through">$399</span>
                <span className="text-7xl font-black text-white">$149</span>
             </div>
             <button style={{ background: highlightColor }} className="px-12 py-5 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-indigo-500/20 hover:scale-105 transition active:scale-95">Get the Bundle</button>
             <p className="mt-8 text-white/30 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 italic">
                 <Check size={14}/> Lifetime Access <Check size={14}/> Future Updates
             </p>
          </div>
       </div>
    </section>
  );
};
export const PricingTagUI = (props: any) => <PricingProductCards {...props} />;

// 6. FEATURE LIST
export const PricingWithFeatureList = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-10">
           <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Pick the plan that <br/><span className="text-indigo-500">moves you forward</span>.</h2>
              <p className="text-white/40 text-lg">Scale your business with confidence using our battle-tested infrastructure.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Smart Sync", desc: "Always up to date across all devices" },
                { title: "Team Collab", desc: "Infinite members on any project" },
                { title: "Cloud Ops", desc: "Deployment ready in 60 seconds" },
                { title: "Auto Backup", desc: "Hourly snapshots of your data" }
              ].map((f, i) => (
                <div key={i} className="space-y-2">
                   <div className="text-indigo-400 font-black uppercase tracking-widest text-[10px]">{f.title}</div>
                   <p className="text-white/60 text-sm">{f.desc}</p>
                </div>
              ))}
           </div>
        </div>
        <div className="w-full lg:w-[450px]">
           <PlanCard name="Pro Full" price="49" desc="Best for established startups and studios looking to grow." features={["Unlimited Seats", "Advanced AI", "Custom Branding", "Global CDN"]} highlight={true} highlightColor={highlightColor} cardColor="#111" font={font} />
        </div>
      </div>
    </section>
  );
};
export const PricingBulletFeature = (props: any) => <PricingWithFeatureList {...props} />;
export const PricingIconFeature = (props: any) => <PricingWithFeatureList {...props} />;
export const PricingExpandableFeatures = (props: any) => <PricingWithFeatureList {...props} />;
export const PricingFeatureHighlight = (props: any) => <PricingWithFeatureList {...props} />;

// 7. INTERACTIVE
export const PricingSlider = ({ bgColor, textColor, highlightColor, font, padding }: any) => (
  <PricingUsageBased bgColor={bgColor} textColor={textColor} highlightColor={highlightColor} font={font} padding={padding} />
);
export const PricingCalculator = (props: any) => <PricingUsageBased {...props} />;
export const PricingToggleOptions = (props: any) => <PricingSaaSToggle {...props} />;
export const PricingCustomBuilder = (props: any) => <PricingUsageBased {...props} />;
export const PricingDynamicSelector = (props: any) => <PricingUsageBased {...props} />;

// 8. TRUST / TESTIMONIALS
export const PricingWithTestimonials = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <PricingBasic3Col bgColor="transparent" padding="0" cardColor="#111" highlightColor={highlightColor} font={font} />
          <div className="space-y-8">
             {[1,2].map(i => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 relative">
                   <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-amber-400" fill="currentColor" />)}
                   </div>
                   <p className="text-lg text-white/70 italic leading-relaxed mb-6">"SiteStudio transformed our workflow. We went from prototype to production in record time with their premium component library."</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-500/20 rounded-full" />
                      <div>
                         <div className="text-sm font-black text-white uppercase tracking-widest">Sarah Johnson</div>
                         <div className="text-xs text-white/30 uppercase font-black">CEO @ TechFlow</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};
export const PricingTrustBadge = (props: any) => <PricingWithTestimonials {...props} />;
export const PricingReviews = (props: any) => <PricingWithTestimonials {...props} />;
export const PricingSocialProof = (props: any) => <PricingWithTestimonials {...props} />;
export const PricingCustomerStories = (props: any) => <PricingWithTestimonials {...props} />;

// 9. FAQ PRICING
export const PricingWithFAQ = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-5xl mx-auto px-6 space-y-20">
          <PricingBasic3Col bgColor="transparent" padding="0" cardColor="#111" highlightColor={highlightColor} font={font} />
          <div className="space-y-6">
             <h3 className="text-2xl font-black text-white text-center mb-10">Frequently Asked Questions</h3>
             {[1,2,3].map(i => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 group cursor-pointer hover:border-white/10 transition">
                   <div className="flex justify-between items-center">
                      <h4 className="font-bold text-white/80 group-hover:text-white transition">Can I cancel my subscription at any time?</h4>
                      <div className="p-1 bg-white/5 rounded-full"><Plus size={16} className="text-white/40"/></div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};
export const PricingHelpSection = (props: any) => <PricingWithFAQ {...props} />;
export const PricingExpandableQuestions = (props: any) => <PricingWithFAQ {...props} />;
export const PricingSupportInfo = (props: any) => <PricingWithFAQ {...props} />;
export const PricingFAQBelow = (props: any) => <PricingWithFAQ {...props} />;

// 10. MINIMAL
export const PricingMinimal = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            { n: "Standard", p: "0" },
            { n: "Studio", p: "15" },
            { n: "Infinity", p: "45" }
          ].map((itm, i) => (
             <div key={i} className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">{itm.n}</h3>
                <div className="text-6xl font-black text-white tracking-tighter">${itm.p}</div>
                <ul className="space-y-3">
                   {['All core tools', 'Support access', 'Community'].map(f => (
                      <li key={f} className="text-sm text-white/50 font-medium">{f}</li>
                   ))}
                </ul>
                <button className="text-xs font-black uppercase tracking-widest border-b-2 border-indigo-500 pb-1 hover:text-indigo-400 transition">Select &rarr;</button>
             </div>
          ))}
       </div>
    </section>
  );
};
export const PricingCleanTypo = (props: any) => <PricingMinimal {...props} />;
export const PricingSimpleLayout = (props: any) => <PricingMinimal {...props} />;
export const PricingLightDarkMinimal = (props: any) => <PricingMinimal {...props} />;
export const PricingCompact = (props: any) => <PricingMinimal {...props} />;

// 11. CREATIVE
export const PricingGradient = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full overflow-hidden relative">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
             <div className="text-xs font-black uppercase tracking-[0.5em] text-indigo-400">Premium Pricing</div>
             <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">FUTURE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">SCALE</span>.</h2>
             <p className="text-white/40 text-lg max-w-md">Our next generation architecture allows for infinite horizontal scaling and zero downtime deployments.</p>
          </div>
          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/5 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]">
             <div className="text-sm font-black text-white/30 uppercase tracking-[0.5em] mb-4 text-center">Master Pass</div>
             <div className="text-7xl font-black text-white text-center mb-10">$199<span className="text-sm text-white/20">.00</span></div>
             <div className="grid grid-cols-2 gap-6 mb-12">
                {['24/7 Concierge', 'Beta Access', 'White Label', 'Master API'].map(f => (
                   <div key={f} className="text-[10px] font-black uppercase tracking-widest text-white/70 flex items-center gap-2">
                       <Check size={12} className="text-emerald-400"/> {f}
                   </div>
                ))}
             </div>
             <button style={{ background: highlightColor }} className="w-full py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] text-white shadow-2xl hover:scale-105 transition active:brightness-90">Unlock Everything</button>
          </div>
       </div>
    </section>
  );
};
export const PricingGlassmorphism = (props: any) => <PricingGradient {...props} />;
export const Pricing3DCards = (props: any) => <PricingGradient {...props} />;
export const PricingAnimated = (props: any) => <PricingGradient {...props} />;
export const PricingNeonEffects = (props: any) => <PricingGradient {...props} />;

// 12. ENTERPRISE
export const PricingEnterprise = ({ bgColor, textColor, highlightColor, font, padding }: any) => {
  return (
    <section style={{ background: bgColor, color: textColor, padding, fontFamily: font }} className="w-full">
       <div className="max-w-5xl mx-auto px-6 rounded-[3.5rem] bg-[#111] border border-white/10 p-12 md:p-20 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10"><Shield size={36}/></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Enterprise Scale</h2>
          <p className="text-lg text-white/50 mb-12 max-w-2xl">Custom solutions for massive organizations. Compliance, security, and global infrastructure tailored to your exact needs.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
             {['SSO', 'Custom SLA', 'On-premise', 'API Keys', 'Audit Logs', 'Training'].map(t => (
                <div key={t} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/60">{t}</div>
             ))}
          </div>
          <button style={{ background: highlightColor }} className="px-12 py-5 rounded-2xl text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:scale-110 mb-6 transition">Contact Our Sales Team</button>
          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Average response time: &lt; 2 hours</div>
       </div>
    </section>
  );
};
export const PricingCustomQuote = (props: any) => <PricingEnterprise {...props} />;
export const PricingContactSales = (props: any) => <PricingEnterprise {...props} />;
export const PricingFlexiblePlans = (props: any) => <PricingEnterprise {...props} />;
export const PricingBusinessTier = (props: any) => <PricingEnterprise {...props} />;


export const allPricings = {
  PricingBasic3Col, PricingBasic4Col, PricingSimpleCards, PricingMinimalSection, PricingWithCTA,
  PricingCardsGrid, PricingHighlighted, PricingHoverCards, PricingGlassCards, PricingShadowCards,
  PricingComparisonTable, PricingComparisonGrid, PricingCheckmarkComparison, PricingMatrix, PricingExpandableComparison,
  PricingSaaSToggle, PricingSubscriptionPlans, PricingTiered, PricingUsageBased, PricingFreemium,
  PricingProductCards, PricingDiscount, PricingOfferBanner, PricingBundle, PricingTagUI,
  PricingWithFeatureList, PricingBulletFeature, PricingIconFeature, PricingExpandableFeatures, PricingFeatureHighlight,
  PricingSlider, PricingCalculator, PricingToggleOptions, PricingCustomBuilder, PricingDynamicSelector,
  PricingWithTestimonials, PricingTrustBadge, PricingReviews, PricingSocialProof, PricingCustomerStories,
  PricingWithFAQ, PricingHelpSection, PricingExpandableQuestions, PricingSupportInfo, PricingFAQBelow,
  PricingMinimal, PricingCleanTypo, PricingSimpleLayout, PricingLightDarkMinimal, PricingCompact,
  PricingGradient, PricingGlassmorphism, Pricing3DCards, PricingAnimated, PricingNeonEffects,
  PricingEnterprise, PricingCustomQuote, PricingContactSales, PricingFlexiblePlans, PricingBusinessTier
};
