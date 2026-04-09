import React from 'react';

export default function CTA1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 drop-shadow-sm">Ready to accelerate your workflow?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join thousands of developers assembling world-class websites with SiteStudio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">Start Building Full Page</button>
              <button className="bg-black/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-black/30 transition-colors backdrop-blur-sm">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
