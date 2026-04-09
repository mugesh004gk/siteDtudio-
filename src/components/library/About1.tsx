import React from 'react';
import { Check } from 'lucide-react';

export default function About1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-surface rounded-3xl h-[500px] border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text">Building the tools we wish we had.</h2>
            <p className="text-xl text-text/70 mb-8 leading-relaxed">We are a team of designers and engineers passionate about creating accessible, beautiful, and highly performant user interfaces for everyone.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-text/90"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"><Check size={14} /></div> Completely open source community.</li>
              <li className="flex items-center gap-4 text-text/90"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"><Check size={14} /></div> Backed by top tier venture capital.</li>
              <li className="flex items-center gap-4 text-text/90"><div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"><Check size={14} /></div> Over 1 million active users globally.</li>
            </ul>
            <button className="bg-surface hover:bg-white/10 text-text px-8 py-4 rounded-xl font-bold transition-colors">Join Our Team</button>
          </div>
        </div>
      </div>
    </section>
  )
}
