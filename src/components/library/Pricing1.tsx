import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-4 text-text">Simple Pricing</h2>
          <p className="text-xl text-text/70">Start for free, upgrade when you need more power.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-surface p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold font-heading mb-2 text-text">Hobby</h3>
            <div className="text-4xl font-extrabold mb-6 text-text">$0</div>
            <ul className="space-y-4 mb-8">
              {['100 Components', 'Basic Export', 'Community Support'].map((ft, i) => (
                <li key={i} className="flex items-center gap-3 text-text/80"><Check size={20} className="text-primary" /> {ft}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-text font-bold transition-colors">Current Plan</button>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-b from-primary/20 to-surface p-8 rounded-3xl border border-primary/30 relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
            <h3 className="text-2xl font-bold font-heading mb-2 text-text">Pro</h3>
            <div className="text-4xl font-extrabold mb-6 text-text">$29<span className="text-lg text-text/50 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8">
              {['All Components', 'Unlimited Exports', 'Priority Support', 'Custom Domains'].map((ft, i) => (
                <li key={i} className="flex items-center gap-3 text-text/80"><Check size={20} className="text-primary" /> {ft}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-colors shadow-lg shadow-primary/20">Upgrade to Pro</button>
          </div>
        </div>
      </div>
    </section>
  )
}
