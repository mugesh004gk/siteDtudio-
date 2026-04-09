import React from 'react';

export default function UIElements1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold font-heading mb-12 text-text">Basic UI Elements</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Buttons */}
          <div className="bg-surface p-8 rounded-3xl border border-white/5 space-y-6">
            <h3 className="font-bold text-lg border-b border-white/5 pb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors cursor-pointer">Primary</button>
              <button className="bg-white/10 hover:bg-white/20 text-text px-6 py-2.5 rounded-lg font-medium transition-colors cursor-pointer">Secondary</button>
              <button className="border border-white/20 hover:border-text text-text px-6 py-2.5 rounded-lg font-medium transition-colors cursor-pointer">Outline</button>
            </div>
          </div>
          {/* Badges */}
          <div className="bg-surface p-8 rounded-3xl border border-white/5 space-y-6">
            <h3 className="font-bold text-lg border-b border-white/5 pb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider">NEW</span>
              <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold tracking-wider">SUCCESS</span>
              <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-xs font-bold tracking-wider">WARNING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
