export default function ContactSplit() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-lg text-white/50 mb-10">Have questions? We'd love to hear from you.</p>
          <div className="space-y-6">
            <div className="flex gap-4 items-center"><div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">@</div><div><div className="font-semibold text-white">Email</div><div className="text-white/50 text-sm">hello@sitestudio.dev</div></div></div>
            <div className="flex gap-4 items-center"><div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-lg">☎</div><div><div className="font-semibold text-white">Phone</div><div className="text-white/50 text-sm">+1 (555) 123-4567</div></div></div>
          </div>
        </div>
        <div className="bg-[#18181b] p-8 rounded-2xl border border-white/5">
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div><label className="block text-sm font-semibold text-white mb-2">Name</label><input className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your name" /></div>
            <div><label className="block text-sm font-semibold text-white mb-2">Email</label><input className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="you@example.com" /></div>
            <div><label className="block text-sm font-semibold text-white mb-2">Message</label><textarea className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors min-h-[120px] resize-none" placeholder="How can we help?" /></div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
