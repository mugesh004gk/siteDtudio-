export interface TemplateItem {
  id: string;
  templateName: string;
  industry: string;
  components: string[]; // array of registry slugs
  previewImage: string;
  description: string;
  createdAt: string;
}

export const templatesRegistry: TemplateItem[] = [
  {
    id: 'biz-1',
    templateName: 'Corporate Pro',
    industry: 'Business',
    components: ['classic-sticky-navbar', 'hero-split', 'about-company', 'services-grid', 'testimonial-cards', 'simple-footer'],
    previewImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    description: 'Clean and professional business template for corporate agencies.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'rest-1',
    templateName: 'Gourmet Kitchen',
    industry: 'Restaurant',
    components: ['navbar-glass', 'hero-centered', 'about-company', 'gallery-photo', 'testimonial-cards', 'contact-split', 'simple-footer'],
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    description: 'Vibrant restaurant template with gallery and reservation focus.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'med-1',
    templateName: 'Health First',
    industry: 'Medical',
    components: ['navbar-classic', 'hero-split', 'about-company', 'services-grid', 'testimonial-cards', 'contact-split', 'simple-footer'],
    previewImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    description: 'Trustworthy medical template for clinics and doctors.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-1',
    templateName: 'Lens Flare',
    industry: 'Photography',
    components: ['navbar-transparent', 'hero-gradient', 'gallery-photo', 'about-company', 'contact-split', 'footer-simple'],
    previewImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
    description: 'Minimalist photography portfolio with full-screen gallery.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'eco-1',
    templateName: 'Market Hub',
    industry: 'E-commerce',
    components: ['navbar-floating', 'hero-split', 'features-3col', 'pricing-3plans', 'cta-banner', 'footer-simple'],
    previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    description: 'High-conversion e-commerce landing page.',
    createdAt: new Date().toISOString(),
  },
  // Adding more industries to fulfill "Industries list"
  {
    id: 'edu-1',
    templateName: 'EduStream',
    industry: 'Education',
    components: ['navbar-classic', 'hero-centered', 'features-4col', 'about-company', 'footer-simple'],
    previewImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    description: 'Perfect for schools, universities and online courses.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'tech-1',
    templateName: 'SaaS Alpha',
    industry: 'Technology',
    components: ['navbar-glass', 'hero-gradient', 'features-3col', 'pricing-3plans', 'faq-accordion', 'footer-simple'],
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Modern tech landing page with gradient heroes.',
    createdAt: new Date().toISOString(),
  }
];

export const industries = [
  'Business', 'Restaurant', 'Medical', 'Photography', 'E-commerce', 
  'Education', 'Events', 'Portfolio', 'Technology', 'NGO / Trust', 
  'Real Estate', 'Construction', 'Beauty / Salon', 'Fitness / Gym', 
  'Travel / Tourism', 'Hotel / Resort', 'Jewellery', 'Finance', 
  'Law Firm', 'Marketing Agency'
];
