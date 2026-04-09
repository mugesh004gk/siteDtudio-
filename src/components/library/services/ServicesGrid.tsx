import { motion } from 'framer-motion';
import { Layout, Palette, Code, Smartphone, Zap, Shield } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    { icon: Layout, title: 'UI/UX Design', desc: 'Crafting stunning and intuitive user interfaces.' },
    { icon: Code, title: 'Web Development', desc: 'Building robust and scalable web applications.' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native-feeling mobile experiences for all platforms.' },
    { icon: Palette, title: 'Branding', desc: 'Developing unique brand identities and systems.' },
    { icon: Zap, title: 'Performance', desc: 'Optimizing sites for speed and Core Web Vitals.' },
    { icon: Shield, title: 'Security', desc: 'Implementing enterprise-grade security protocols.' },
  ];

  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">We provide a wide range of digital solutions to help your business grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="bg-[#18181b] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-500/20 transition-colors">
                <service.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
