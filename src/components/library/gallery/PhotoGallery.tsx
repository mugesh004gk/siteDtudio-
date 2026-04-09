import { motion } from 'framer-motion';

export default function PhotoGallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Developer Workspace' },
    { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c', title: 'Project Management' },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', title: 'Data Analytics' },
    { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f', title: 'Finance Tools' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', title: 'Startup Team' },
    { url: 'https://images.unsplash.com/photo-1557683316-973673baf926', title: 'Brand Identity' },
  ];

  return (
    <section className="bg-[#09090b] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Explore our portfolio of curated projects from around the world.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="group relative overflow-hidden rounded-2xl h-80 bg-[#18181b] border border-white/5"
            >
              <img 
                src={`${img.url}?auto=format&fit=crop&w=800&q=80`} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white mb-1">{img.title}</h4>
                <p className="text-sm text-indigo-400 font-medium">Case Study →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
