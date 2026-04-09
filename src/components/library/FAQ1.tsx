import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ1({ config }: { config: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: 'Can I export the code to Next.js?', a: 'Yes, SiteStudio supports multi-framework code export including React, Next.js, and pure HTML.' },
    { q: 'Is the generated code production-ready?', a: 'Absolutely. The exported code uses Tailwind CSS for styling and is fully responsive, accessible, and ready to be deployed.' },
    { q: 'Can I use custom themes?', a: 'SiteStudio relies on root CSS variables. You can easily inject your brand colors to globally theme all components instantly.' }
  ];

  return (
    <section className={`${config.bgColor || 'bg-bg'} py-24`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold font-heading mb-12 text-center text-text">Frequently Asked Questions</h2>
        <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="border border-white/10 rounded-2xl bg-surface overflow-hidden transition-colors hover:border-white/20">
               <button 
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="w-full px-6 py-5 flex items-center justify-between font-bold text-left text-text"
               >
                 {faq.q}
                 {openIndex === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-text/50" />}
               </button>
               <AnimatePresence>
                 {openIndex === i && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: 'auto', opacity: 1 }} 
                     exit={{ height: 0, opacity: 0 }}
                     className="px-6 pb-5 text-text/70"
                   >
                     {faq.a}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
