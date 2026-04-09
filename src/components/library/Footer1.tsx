import React from 'react';

export default function Footer1({ config }: { config: any }) {
  return (
    <footer className={`${config.bgColor || 'bg-surface'} border-t border-white/5 pt-16 pb-8`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="font-heading font-extrabold text-2xl text-primary mb-4">SiteStudio.</div>
            <p className="text-text/60 text-sm">Building the future of the web, component by component.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-text">Product</h4>
            <ul className="space-y-2 text-sm text-text/60">
              <li><a href="#" className="hover:text-primary transition-colors">Components</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-text">Company</h4>
            <ul className="space-y-2 text-sm text-text/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-text">Legal</h4>
            <ul className="space-y-2 text-sm text-text/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text/50 text-sm">© 2026 SiteStudio. All rights reserved.</p>
          <div className="flex gap-4">
             {/* Social mock icons */}
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text/60 hover:text-primary cursor-pointer transition-colors">X</div>
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text/60 hover:text-primary cursor-pointer transition-colors">in</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
