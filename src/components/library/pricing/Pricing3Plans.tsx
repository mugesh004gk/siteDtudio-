import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing3Plans() {
  const plans = [
    { name: 'Starter', price: '$0', desc: 'Perfect for getting started', features: ['5 Components', 'Basic Export', 'Community Support'], popular: false },
    { name: 'Pro', price: '$29', desc: 'For professional teams', features: ['All Components', 'Multi-format Export', 'Priority Support', 'Custom Themes'], popular: true },
    { name: 'Enterprise', price: '$99', desc: 'For large organizations', features: ['Everything in Pro', 'White-label', 'SSO & SAML', 'Dedicated Account Manager'], popular: false },
  ];
  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-white/50">Start free. Upgrade when you need more.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-2xl p-8 border ${plan.popular ? 'bg-gradient-to-b from-indigo-500/10 to-[#18181b] border-indigo-500/30 relative' : 'bg-[#18181b] border-white/5'}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-white/40 text-sm mb-4">{plan.desc}</p>
              <div className="text-4xl font-black text-white mb-6">{plan.price}<span className="text-base font-normal text-white/40">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => <li key={j} className="flex items-center gap-3 text-white/70 text-sm"><Check size={16} className="text-indigo-400 shrink-0" />{f}</li>)}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white/5 hover:bg-white/10 text-white'}`}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
