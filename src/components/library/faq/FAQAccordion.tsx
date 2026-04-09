import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: 'How does the component builder work?', a: 'Browse our library, click "Add to Page" on any component, then open the Builder to arrange, customize, and preview your full website.' },
    { q: 'Can I export the code?', a: 'Yes! Export production-ready code in React, Next.js, HTML+Tailwind, Vue, Angular, or Bootstrap formats.' },
    { q: 'Is the generated code production-ready?', a: 'Absolutely. All exported code is clean, semantic, responsive, and follows modern best practices.' },
    { q: 'Can I customize the themes?', a: 'SiteStudio uses CSS variables for theming. You can change colors, fonts, spacing, and more globally.' },
  ];
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-white/50">Everything you need to know.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#18181b] rounded-2xl border border-white/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`text-white/40 transition-transform ${open === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-5 text-white/60 leading-relaxed">{faq.a}</motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
