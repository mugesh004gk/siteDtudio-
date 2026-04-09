import React from 'react';

export default function Contact1({ config }: { config: any }) {
  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold font-heading mb-6 text-text">Get in touch.</h2>
            <p className="text-xl text-text/70 mb-10">Have specialized requirements for your enterprise? We'd love to chat.</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">@</div>
                <div>
                  <div className="font-bold text-text">Email us</div>
                  <div className="text-text/60">hello@sitestudio.com</div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">P</div>
                <div>
                  <div className="font-bold text-text">Call us</div>
                  <div className="text-text/60">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-bold mb-2 text-text">Name</label>
                 <input type="text" className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Jane Doe" />
               </div>
               <div>
                 <label className="block text-sm font-bold mb-2 text-text">Email</label>
                 <input type="email" className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="jane@example.com" />
               </div>
               <div>
                 <label className="block text-sm font-bold mb-2 text-text">Message</label>
                 <textarea className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px]" placeholder="How can we help?"></textarea>
               </div>
               <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
