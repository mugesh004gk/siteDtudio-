import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function Testimonial1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <MessageSquare className="w-12 h-12 mx-auto text-primary mb-8" />
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-10 leading-tight text-text">
          "SiteStudio entirely transformed how our agency delivers client projects. We went from taking weeks to deploy to just a matter of days."
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-surface border-2 border-primary overflow-hidden">
             <div className="w-full h-full bg-white/10"></div>
          </div>
          <div className="text-left">
            <div className="font-bold text-text">Sarah Jenkins</div>
            <div className="text-sm text-text/60">Creative Director, DesignCo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
