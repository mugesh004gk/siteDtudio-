import type React from 'react';
import {
  NavbarClassic,
  NavbarSticky,
  HeroCentered,
  HeroSplit,
  HeroGradient,
  HeroMinimal,
  Features3Col as FeaturesGrid,
  Features4Col as FeaturesCards,
  FeaturesTimeline,
  AboutCompany,
  ServicesGrid,
  Pricing3Plans,
  TestimonialCards,
  FAQAccordion,
  ContactSplit,
  ContactSplit as ContactForm,
  FooterSimple,
  CTABanner as BannerCTA,
  StatsCounters,
  BlogCardGrid,
  PhotoGallery
} from '../components/library';

import { allNavbars } from '../components/library/Navbars';
import { allHeros } from '../components/library/Heros';
import { allFeatures } from '../components/library/Features';
import { allAbout } from '../components/library/About';
import { allServices } from '../components/library/Services';
import { allPricings } from '../components/library/Pricings';
import { allTestimonials } from '../components/library/Testimonials';
import { allFAQs } from '../components/library/FAQ';
import { allBlogs } from '../components/library/Blog';
import { allGalleries } from '../components/library/Gallery';
import { allContacts } from '../components/library/Contact';
import { allFooters } from '../components/library/Footer';
import { allStats } from '../components/library/Stats';
import { allCTAs } from '../components/library/CTA';
import { componentsRegistry } from '../registry/componentsRegistry';

type ComponentRef = React.ComponentType<any>;
type MapRecord = Record<string, ComponentRef>;

const CAMEL_SPLIT_REGEX = /([a-z0-9])([A-Z])/g;
const ACRONYM_SPLIT_REGEX = /([A-Z]+)([A-Z][a-z])/g;
const ALNUM_SPLIT_REGEX_1 = /([A-Za-z])([0-9])/g;
const ALNUM_SPLIT_REGEX_2 = /([0-9])([A-Za-z])/g;

const DEFAULT_COMPONENT_BY_CATEGORY: Record<string, string> = {
  navbar: 'navbar-classic',
  hero: 'hero-centered',
  features: 'features-grid',
  about: 'about-company',
  services: 'services-grid',
  pricing: 'pricing-3plans',
  testimonials: 'testimonials-cards',
  faq: 'faq-accordion',
  blog: 'blog-card-grid',
  gallery: 'gallery-photo',
  contact: 'contact-split',
  footer: 'footer-simple',
  stats: 'stats-counters',
  cta: 'cta-banner'
};

const REGISTRY_ALIAS_OVERRIDES: Record<string, string> = {
  'navbar-cta': 'navbar-cta-saas',
  'navbar-dropdown': 'navbar-mega-menu',
  'navbar-sidebar': 'navbar-fixed-sidebar',
  'navbar-megamenu': 'navbar-mega-menu',
  'hero-image': 'hero-full-image',
  'hero-video': 'hero-video-fs',
  'hero-slider': 'hero-ecom-slider',
  'hero-fullscreen': 'hero-fullscreen-100',
  'hero-form': 'hero-centered-two',
  'hero-cta': 'hero-centered-two',
  'about-left-image': 'about-visual',
  'about-right-image': 'about-visual',
  'about-team': 'about-team-grid',
  'services-grid': 'services-3col',
  'services-icons': 'services-icon-grid',
  'services-list': 'services-tech',
  'services-timeline': 'services-process',
  'services-images': 'services-image',
  'pricing-simple': 'pricing-basic-3-col',
  'pricing-cards': 'pricing-cards-grid',
  'pricing-saas': 'pricing-saa-s-toggle',
  'pricing-toggle': 'pricing-saa-s-toggle',
  'pricing-comparison': 'pricing-comparison-table',
  'testimonials-slider': 'testimonial-slider',
  'testimonials-grid': 'testimonial-grid-basic',
  'testimonials-cards': 'testimonial-cards',
  'testimonials-images': 'testimonial-avatars',
  'testimonials-video': 'testimonial-video-grid',
  'faq-simple': 'faq-basic-list',
  'faq-two-column': 'faq-grid-cards',
  'faq-categories': 'faq-tabs-filter',
  'blog-grid': 'blog-grid-3-col',
  'blog-cards': 'blog-glass-cards',
  'blog-list': 'blog-basic-list',
  'blog-masonry': 'blog-interactive-grid',
  'blog-featured': 'blog-hero-featured',
  'gallery-grid': 'gallery-basic-grid',
  'gallery-masonry': 'gallery-masonry',
  'gallery-slider': 'gallery-slider',
  'gallery-lightbox': 'gallery-lightbox',
  'gallery-carousel': 'gallery-slider',
  'contact-form': 'contact-form-basic',
  'contact-map': 'contact-with-map',
  'contact-minimal': 'contact-minimal',
  'contact-card': 'contact-cards',
  'footer-columns': 'footer-grid-4-col',
  'footer-newsletter': 'footer-newsletter',
  'footer-minimal': 'footer-minimal',
  'footer-map': 'footer-with-map',
  'footer-large': 'footer-branding',
  'stats-counter': 'stats-counter',
  'stats-cards': 'stats-cards',
  'stats-icons': 'stats-icon',
  'stats-horizontal': 'stats-split',
  'stats-chart': 'stats-progress',
  'cta-centered': 'cta-basic',
  'cta-background': 'cta-image-background',
  'cta-form': 'cta-with-form'
};

function normalizeKey(value: string) {
  return value
    .replace(ACRONYM_SPLIT_REGEX, '$1-$2')
    .replace(CAMEL_SPLIT_REGEX, '$1-$2')
    .replace(ALNUM_SPLIT_REGEX_1, '$1-$2')
    .replace(ALNUM_SPLIT_REGEX_2, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function toPascalCase(value: string) {
  return normalizeKey(value)
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function tokenize(value: string) {
  return normalizeKey(value).split('-').filter(Boolean);
}

function addAliases(map: MapRecord, key: string, component: ComponentRef) {
  if (!key || !component) return;

  const normalized = normalizeKey(key);
  const pascal = toPascalCase(key);
  const aliases = new Set([key, normalized, pascal]);

  aliases.forEach(alias => {
    if (!alias) return;
    map[alias] = component;
  });
}

const rawSources: MapRecord[] = [
  allNavbars as MapRecord,
  allHeros as MapRecord,
  allFeatures as MapRecord,
  allAbout as MapRecord,
  allServices as MapRecord,
  allPricings as MapRecord,
  allTestimonials as MapRecord,
  allFAQs as MapRecord,
  allBlogs as MapRecord,
  allGalleries as MapRecord,
  allContacts as MapRecord,
  allFooters as MapRecord,
  allStats as MapRecord,
  allCTAs as MapRecord,
  {
    'navbar-sticky': NavbarSticky,
    'navbar-classic': NavbarClassic,
    'hero-centered': HeroCentered,
    'hero-split': HeroSplit,
    'hero-gradient': HeroGradient,
    'hero-minimal': HeroMinimal,
    'features-grid': FeaturesGrid,
    'features-cards': FeaturesCards,
    'features-timeline': FeaturesTimeline,
    'about-company': AboutCompany,
    'services-grid': ServicesGrid,
    'pricing-3plans': Pricing3Plans,
    'testimonials-cards': TestimonialCards,
    'testimonial-cards': TestimonialCards,
    'faq-accordion': FAQAccordion,
    'contact-split': ContactSplit,
    'contact-form': ContactForm,
    'footer-simple': FooterSimple,
    'cta-banner': BannerCTA,
    'stats-counters': StatsCounters,
    'blog-card-grid': BlogCardGrid,
    'gallery-photo': PhotoGallery
  }
];

const aliasMap: MapRecord = {};
rawSources.forEach(source => {
  Object.entries(source).forEach(([key, component]) => {
    if (!component) return;
    addAliases(aliasMap, key, component);
  });
});

function findBestBySimilarity(componentKey: string) {
  const requestedTokens = tokenize(componentKey);
  const category = requestedTokens[0];
  const requestedTail = requestedTokens.slice(1);

  let best: { component: ComponentRef | null; score: number } = { component: null, score: -Infinity };

  const uniqueCandidates = new Map<ComponentRef, string[]>();
  Object.entries(aliasMap).forEach(([key, component]) => {
    if (!uniqueCandidates.has(component)) uniqueCandidates.set(component, tokenize(key));
  });

  uniqueCandidates.forEach((candidateTokens, component) => {
    let score = 0;
    if (candidateTokens[0] === category) score += 40;

    requestedTail.forEach(token => {
      if (candidateTokens.includes(token)) score += 16;
      if (candidateTokens.some(candidateToken => candidateToken.startsWith(token) || token.startsWith(candidateToken))) {
        score += 4;
      }
    });

    if (requestedTokens.every(token => candidateTokens.includes(token))) score += 24;
    score -= Math.abs(candidateTokens.length - requestedTokens.length) * 1.5;

    if (score > best.score) {
      best = { component, score };
    }
  });

  if (best.component) return best.component;

  const fallbackAlias = DEFAULT_COMPONENT_BY_CATEGORY[category];
  return fallbackAlias ? aliasMap[fallbackAlias] || null : null;
}

export function resolveComponentByKey(componentKey: string) {
  if (!componentKey) return null;

  const normalized = normalizeKey(componentKey);
  const pascal = toPascalCase(componentKey);
  if (aliasMap[componentKey]) return aliasMap[componentKey];
  if (aliasMap[normalized]) return aliasMap[normalized];
  if (aliasMap[pascal]) return aliasMap[pascal];

  const overrideAlias = REGISTRY_ALIAS_OVERRIDES[normalized];
  if (overrideAlias) {
    const override =
      aliasMap[overrideAlias] ||
      aliasMap[normalizeKey(overrideAlias)] ||
      aliasMap[toPascalCase(overrideAlias)];
    if (override) return override;
  }

  return findBestBySimilarity(normalized);
}

componentsRegistry.forEach(item => {
  const resolved = resolveComponentByKey(item.componentKey);
  if (!resolved) return;
  addAliases(aliasMap, item.componentKey, resolved);
  addAliases(aliasMap, item.slug, resolved);
});

export const componentMap: MapRecord = aliasMap;
