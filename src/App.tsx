import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ComponentsList from './pages/ComponentsList';
import CategoryPage from './pages/CategoryPage';
import ComponentDetail from './pages/ComponentDetail';
import Builder from './pages/Builder';
import Templates from './pages/Templates';
import Theme from './pages/Theme';
import AI from './pages/AI';
import Projects from './pages/Projects';
import IndustryDetail from './pages/IndustryDetail';
import LivePreview from './pages/LivePreview';
import { BuilderProvider } from './context/BuilderContext';
import NavbarLibrary from './pages/NavbarLibrary';
import HeroLibrary from './pages/HeroLibrary';
import FeaturesLibrary from './pages/FeaturesLibrary';
import AboutLibrary from './pages/AboutLibrary';
import ServicesLibrary from './pages/ServicesLibrary';
import PricingLibrary from './pages/PricingLibrary';
import TestimonialsLibrary from './pages/TestimonialsLibrary';
import FAQLibrary from './pages/FAQLibrary';
import BlogLibrary from './pages/BlogLibrary';
import GalleryLibrary from './pages/GalleryLibrary';
import CTALibrary from './pages/CTALibrary';
import ContactLibrary from './pages/ContactLibrary';
import FooterLibrary from './pages/FooterLibrary';
import StatsLibrary from './pages/StatsLibrary';

function App() {
  return (
    <BuilderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="components" element={<ComponentsList />} />
            <Route path="components/navbar" element={<NavbarLibrary />} />
            <Route path="components/hero" element={<HeroLibrary />} />
            <Route path="components/features" element={<FeaturesLibrary />} />
            <Route path="components/about" element={<AboutLibrary />} />
            <Route path="components/services" element={<ServicesLibrary />} />
            <Route path="components/pricing" element={<PricingLibrary />} />
            <Route path="components/testimonials" element={<TestimonialsLibrary />} />
            <Route path="components/faq" element={<FAQLibrary />} />
            <Route path="components/blog" element={<BlogLibrary />} />
            <Route path="components/stats" element={<StatsLibrary />} />
            <Route path="components/cta" element={<CTALibrary />} />
            <Route path="components/gallery" element={<GalleryLibrary />} />
            <Route path="components/contact" element={<ContactLibrary />} />
            <Route path="components/footer" element={<FooterLibrary />} />
            <Route path="components/:category" element={<CategoryPage />} />
            <Route path="component/:componentKey" element={<ComponentDetail />} />
            <Route path="builder" element={<Builder />} />
            <Route path="live-preview" element={<LivePreview />} />
            <Route path="projects" element={<Projects />} />
            <Route path="theme" element={<Theme />} />
            <Route path="ai" element={<AI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BuilderProvider>
  );
}

export default App;
