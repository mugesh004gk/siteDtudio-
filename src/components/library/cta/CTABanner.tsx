export default function CTABanner() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to build?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Join thousands of developers shipping beautiful websites faster than ever before.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">Start Free Trial</button>
            <button className="bg-black/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-black/30 transition-colors backdrop-blur">Talk to Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
