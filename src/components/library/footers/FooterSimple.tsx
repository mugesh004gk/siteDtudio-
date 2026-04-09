export default function FooterSimple() {
  return (
    <footer className="bg-[#18181b] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="font-extrabold text-xl text-white mb-4">SiteStudio<span className="text-indigo-500">.</span></div>
            <p className="text-white/40 text-sm leading-relaxed">Build beautiful websites with premium components and visual tools.</p>
          </div>
          <div><h4 className="font-semibold text-white mb-4 text-sm">Product</h4><ul className="space-y-2 text-sm text-white/40"><li><a href="#" className="hover:text-white transition-colors">Components</a></li><li><a href="#" className="hover:text-white transition-colors">Templates</a></li><li><a href="#" className="hover:text-white transition-colors">Pricing</a></li></ul></div>
          <div><h4 className="font-semibold text-white mb-4 text-sm">Company</h4><ul className="space-y-2 text-sm text-white/40"><li><a href="#" className="hover:text-white transition-colors">About</a></li><li><a href="#" className="hover:text-white transition-colors">Careers</a></li><li><a href="#" className="hover:text-white transition-colors">Blog</a></li></ul></div>
          <div><h4 className="font-semibold text-white mb-4 text-sm">Legal</h4><ul className="space-y-2 text-sm text-white/40"><li><a href="#" className="hover:text-white transition-colors">Privacy</a></li><li><a href="#" className="hover:text-white transition-colors">Terms</a></li></ul></div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-white/30 text-sm">&copy; 2026 SiteStudio. All rights reserved.</div>
      </div>
    </footer>
  );
}
