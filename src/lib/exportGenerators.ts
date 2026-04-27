import JSZip from 'jszip';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server.browser';
import { resolveComponentByKey } from './componentMap';
import componentMapSource from './componentMap.ts?raw';
import componentsRegistrySource from '../registry/componentsRegistry.ts?raw';

interface SectionData {
  componentKey: string;
  props: Record<string, any>;
}

interface PageData {
  order: string[];
  sections: Record<string, SectionData>;
  projectName?: string;
}

type ExportStack = 'react' | 'html' | 'next';
type ExportStage = 'prepare' | 'images' | 'zip' | 'ready';

export interface ExportProgress {
  stage: ExportStage;
  message: string;
  percent: number;
  previewMatch?: boolean;
}

interface GenerateProjectZipOptions {
  onProgress?: (progress: ExportProgress) => void;
  previewHtml?: string;
  projectName?: string;
}

interface ImageAsset {
  fileName: string;
  bytes: Uint8Array;
  mimeType: string;
}

interface ImagePathMapEntry {
  react: string;
  html: string;
  next: string;
}

interface ImageResolutionResult {
  assets: ImageAsset[];
  pathMap: Map<string, ImagePathMapEntry>;
}

type RawFilesMap = Record<string, string>;
type ExportFlavor = 'react' | 'html' | 'next';

const MAX_IMAGE_DOWNLOADS = 24;
const IMAGE_FETCH_TIMEOUT_MS = 1700;
const PLACEHOLDER_IMAGE_NAME = 'placeholder.svg';
const PLACEHOLDER_IMAGE = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
<defs>
<linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="#0f172a"/>
<stop offset="1" stop-color="#1e293b"/>
</linearGradient>
</defs>
<rect width="1280" height="720" fill="url(#g)"/>
<circle cx="640" cy="320" r="70" fill="#334155"/>
<rect x="320" y="470" width="640" height="20" rx="10" fill="#475569"/>
<rect x="430" y="510" width="420" height="16" rx="8" fill="#64748b"/>
<text x="640" y="600" text-anchor="middle" fill="#cbd5e1" font-size="36" font-family="Arial, sans-serif">Image unavailable</text>
</svg>`;

const librarySourceFiles = import.meta.glob('../components/library/**/*.{ts,tsx}', {
  query: '?raw',
  import: 'default',
  eager: true
}) as RawFilesMap;

const IMAGE_KEY_HINTS = [
  'image',
  'img',
  'photo',
  'avatar',
  'logo',
  'hero',
  'banner',
  'thumbnail',
  'poster',
  'background',
  'bg',
  'src'
];

const MIME_TO_EXT: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
  'image/avif': 'avif'
};

function notify(onProgress: GenerateProjectZipOptions['onProgress'], payload: ExportProgress) {
  if (onProgress) onProgress(payload);
}

function sanitizeProjectName(input?: string) {
  const name = (input || 'sitestudio-export').trim();
  const cleaned = name.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
  return cleaned || 'sitestudio-export';
}

function normalizeComponentKey(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
}

function toPascalCase(value: string) {
  return normalizeComponentKey(value)
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function resolveComponent(componentKey: string) {
  return resolveComponentByKey(componentKey);
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function normalizeMarkup(markup: string) {
  return markup.replace(/\s+/g, ' ').trim();
}

function escapeHtml(input: unknown) {
  if (input === null || input === undefined) return '';
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readText(props: Record<string, any>, keys: string[], fallback = '') {
  for (const key of keys) {
    const value = props?.[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return fallback;
}

function exportFallbackMarkup(componentKey: string, props: Record<string, any>) {
  const title = readText(props, ['title', 'heading', 'headline', 'name'], toPascalCase(componentKey));
  const subtitle = readText(
    props,
    ['subtitle', 'description', 'tagline', 'text'],
    'This section was exported with fallback rendering because its component mapping is unavailable.'
  );
  const buttonText = readText(props, ['buttonText', 'ctaText'], 'Learn More');
  const bgColor = props?.bgColor || '#ffffff';
  const textColor = props?.textColor || '#0f172a';

  return `
<section style="background:${escapeHtml(bgColor)};color:${escapeHtml(textColor)};padding:72px 20px;border-top:1px solid #e2e8f0">
  <div style="max-width:1120px;margin:0 auto;text-align:center">
    <p style="margin:0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.7">${escapeHtml(componentKey)}</p>
    <h2 style="margin:12px 0 8px;font-size:2rem">${escapeHtml(title)}</h2>
    <p style="margin:0;opacity:.75">${escapeHtml(subtitle)}</p>
    <a href="#" style="display:inline-block;margin-top:20px;padding:12px 20px;border-radius:999px;background:#2563eb;color:#fff;text-decoration:none;font-weight:700">${escapeHtml(buttonText)}</a>
  </div>
</section>`.trim();
}

function renderSectionsMarkup(pageData: PageData) {
  return pageData.order
    .map((id, index) => {
      const section = pageData.sections[id];
      if (!section) return '';
      const Component = resolveComponent(section.componentKey);
      if (!Component) return exportFallbackMarkup(section.componentKey, section.props || {});

      try {
        return `<!-- Section ${index + 1}: ${escapeHtml(section.componentKey)} -->\n${renderToStaticMarkup(
          React.createElement(Component, section.props || {})
        )}`;
      } catch {
        return exportFallbackMarkup(section.componentKey, section.props || {});
      }
    })
    .join('\n');
}

function extractPreviewSectionsMarkup(previewHtml: string) {
  if (!previewHtml.trim()) return '';
  if (typeof DOMParser === 'undefined') return previewHtml;

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<body>${previewHtml}</body>`, 'text/html');

  const wrapperSections = Array.from(doc.querySelectorAll('.builder-section'));
  if (wrapperSections.length > 0) {
    return wrapperSections.map(node => node.innerHTML).join('\n');
  }

  const flexRoot = doc.body.querySelector('div.flex.flex-col');
  if (flexRoot) return flexRoot.innerHTML;

  return doc.body.innerHTML;
}

function looksLikeImageUrl(value: string, keyName = '') {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (trimmed.startsWith('data:image/')) return true;
  if (trimmed.startsWith('blob:')) return true;
  if (/^https?:\/\//i.test(trimmed)) {
    if (trimmed.includes('images.unsplash.com')) return true;
    if (/\.(png|jpe?g|gif|webp|svg|avif)(\?|#|$)/i.test(trimmed)) return true;
    return IMAGE_KEY_HINTS.some(hint => keyName.toLowerCase().includes(hint));
  }
  if (trimmed.startsWith('/')) {
    return /\.(png|jpe?g|gif|webp|svg|avif)(\?|#|$)/i.test(trimmed);
  }
  return false;
}

function collectImageUrlsFromProps(value: any, collector: Set<string>, keyName = '') {
  if (value === null || value === undefined) return;

  if (typeof value === 'string') {
    if (looksLikeImageUrl(value, keyName)) collector.add(value);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach(item => collectImageUrlsFromProps(item, collector, keyName));
    return;
  }

  if (typeof value === 'object') {
    Object.entries(value).forEach(([key, nested]) => {
      collectImageUrlsFromProps(nested, collector, key);
    });
  }
}

function collectImageUrlsFromMarkup(markup: string, collector: Set<string>) {
  const attrRegex = /\b(?:src|poster)=["']([^"']+)["']/gi;
  const cssUrlRegex = /url\((['"]?)(.*?)\1\)/gi;

  let match: RegExpExecArray | null = null;
  while ((match = attrRegex.exec(markup)) !== null) {
    if (looksLikeImageUrl(match[1])) collector.add(match[1]);
  }

  while ((match = cssUrlRegex.exec(markup)) !== null) {
    if (looksLikeImageUrl(match[2])) collector.add(match[2]);
  }
}

function safeFileSegment(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w.-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'asset';
}

function inferExtension(url: string, mimeType = '') {
  const mimeExt = MIME_TO_EXT[mimeType.toLowerCase()];
  if (mimeExt) return mimeExt;

  const match = url.match(/\.([a-zA-Z0-9]+)(?:[?#].*)?$/);
  if (match) return match[1].toLowerCase();
  return 'png';
}

function dataUrlToAsset(url: string) {
  const [meta, rawData] = url.split(',');
  if (!meta || !rawData) return null;
  const mimeTypeMatch = meta.match(/^data:([^;]+)(;base64)?$/i);
  if (!mimeTypeMatch) return null;

  const mimeType = mimeTypeMatch[1] || 'image/png';
  const isBase64 = /;base64$/i.test(meta);
  let bytes: Uint8Array;

  if (isBase64) {
    const binary = atob(rawData);
    bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  } else {
    const decoded = decodeURIComponent(rawData);
    bytes = new TextEncoder().encode(decoded);
  }

  return { bytes, mimeType, extension: inferExtension('', mimeType) };
}

async function fetchImageAsset(url: string) {
  if (url.startsWith('data:image/')) return dataUrlToAsset(url);

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), IMAGE_FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) return null;
    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const mimeType = blob.type || 'image/png';
    return {
      bytes: new Uint8Array(buffer),
      mimeType,
      extension: inferExtension(url, mimeType)
    };
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function resolveImageAssets(
  imageUrls: string[],
  onProgress?: GenerateProjectZipOptions['onProgress']
): Promise<ImageResolutionResult> {
  const pathMap = new Map<string, ImagePathMapEntry>();
  const assets: ImageAsset[] = [
    {
      fileName: PLACEHOLDER_IMAGE_NAME,
      bytes: new TextEncoder().encode(PLACEHOLDER_IMAGE),
      mimeType: 'image/svg+xml'
    }
  ];

  const uniqueUrls = [...new Set(imageUrls)].filter(Boolean);
  if (uniqueUrls.length === 0) return { assets, pathMap };

  const downloadableUrls = uniqueUrls.slice(0, MAX_IMAGE_DOWNLOADS);
  const overflowUrls = uniqueUrls.slice(MAX_IMAGE_DOWNLOADS);

  overflowUrls.forEach((originalUrl) => {
    pathMap.set(originalUrl, {
      react: `/images/${PLACEHOLDER_IMAGE_NAME}`,
      next: `/images/${PLACEHOLDER_IMAGE_NAME}`,
      html: `./assets/images/${PLACEHOLDER_IMAGE_NAME}`
    });
  });

  let completed = 0;
  const total = downloadableUrls.length || 1;
  const downloadTasks = downloadableUrls.map(async (originalUrl, index) => {
    const fetched = await fetchImageAsset(originalUrl);
    completed += 1;
    const progress = 28 + Math.round((completed / total) * 40);
    notify(onProgress, {
      stage: 'images',
      percent: progress,
      message: `Optimizing Images... (${completed}/${downloadableUrls.length})`
    });
    return { originalUrl, index, fetched };
  });

  const results = await Promise.all(downloadTasks);
  results.forEach(({ originalUrl, index, fetched }) => {
    if (!fetched) {
      pathMap.set(originalUrl, {
        react: `/images/${PLACEHOLDER_IMAGE_NAME}`,
        next: `/images/${PLACEHOLDER_IMAGE_NAME}`,
        html: `./assets/images/${PLACEHOLDER_IMAGE_NAME}`
      });
      return;
    }

    const fileBase = safeFileSegment(`image-${index + 1}`);
    const fileName = `${fileBase}.${fetched.extension}`;
    assets.push({
      fileName,
      bytes: fetched.bytes,
      mimeType: fetched.mimeType
    });
    pathMap.set(originalUrl, {
      react: `/images/${fileName}`,
      next: `/images/${fileName}`,
      html: `./assets/images/${fileName}`
    });
  });

  return { assets, pathMap };
}

function remapStringWithImages(value: string, pathMap: Map<string, ImagePathMapEntry>, flavor: ExportFlavor) {
  let output = value;
  pathMap.forEach((paths, original) => {
    output = output.split(original).join(paths[flavor]);
  });
  return output;
}

function remapValueWithImages(value: any, pathMap: Map<string, ImagePathMapEntry>, flavor: ExportFlavor): any {
  if (typeof value === 'string') return remapStringWithImages(value, pathMap, flavor);
  if (Array.isArray(value)) return value.map(item => remapValueWithImages(item, pathMap, flavor));
  if (value && typeof value === 'object') {
    const remapped: Record<string, any> = {};
    Object.entries(value).forEach(([key, nested]) => {
      remapped[key] = remapValueWithImages(nested, pathMap, flavor);
    });
    return remapped;
  }
  return value;
}

function copyLibrarySources(zip: JSZip, flavor: Exclude<ExportFlavor, 'html'>, pathMap: Map<string, ImagePathMapEntry>) {
  Object.entries(librarySourceFiles).forEach(([sourcePath, content]) => {
    const normalizedPath = sourcePath.replace('../components/library/', 'components/library/');
    const outputPath = flavor === 'react' ? `src/${normalizedPath}` : normalizedPath;
    zip.file(outputPath, remapStringWithImages(content, pathMap, flavor));
  });
}

function writeImageAssets(zip: JSZip, stack: ExportStack, assets: ImageAsset[]) {
  const base = stack === 'html' ? 'assets/images' : 'public/images';
  assets.forEach(asset => {
    zip.file(`${base}/${asset.fileName}`, asset.bytes);
  });
}

function createReadme(stack: ExportStack, projectName: string) {
  const titleStack =
    stack === 'react' ? 'React (Vite)' : stack === 'next' ? 'Next.js 14' : 'HTML/CSS/JS';

  return `# ${projectName}

Exported from SiteStudio Builder.

## Stack
- ${titleStack}

## Quick Start
1. npm install
2. npm run dev

If you see "vite is not recognized", dependencies were not installed yet. Run npm install in the exported folder and retry.

## Build
- npm run build

## Notes
- This export keeps section order, styles, and responsive behavior from the builder.
- Local images are bundled inside the project and auto-wired.
`;
}

function reactPackageJson(projectName: string) {
  return JSON.stringify(
    {
      name: projectName,
      private: true,
      version: '1.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'vite build',
        preview: 'vite preview'
      },
      dependencies: {
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        'framer-motion': '^11.0.0',
        'lucide-react': '^0.320.0'
      },
      devDependencies: {
        '@types/react': '^18.2.43',
        '@types/react-dom': '^18.2.17',
        '@vitejs/plugin-react': '^4.2.1',
        autoprefixer: '^10.4.17',
        postcss: '^8.4.33',
        tailwindcss: '^3.4.1',
        typescript: '^5.9.3',
        vite: '^5.0.8'
      }
    },
    null,
    2
  );
}

function nextPackageJson(projectName: string) {
  return JSON.stringify(
    {
      name: projectName,
      private: true,
      version: '1.0.0',
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start'
      },
      dependencies: {
        next: '14.1.0',
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        'framer-motion': '^11.0.0',
        'lucide-react': '^0.320.0'
      },
      devDependencies: {
        '@types/node': '^20.0.0',
        '@types/react': '^18.2.43',
        '@types/react-dom': '^18.2.17',
        autoprefixer: '^10.4.17',
        postcss: '^8.4.33',
        tailwindcss: '^3.4.1',
        typescript: '^5.9.3'
      }
    },
    null,
    2
  );
}

function baseTailwindConfig(contentPaths: string[]) {
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: ${JSON.stringify(contentPaths, null, 2)},
  theme: {
    extend: {}
  },
  plugins: []
};`;
}

function basePostcssConfigESM() {
  return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};`;
}

function basePostcssConfigCJS() {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};`;
}

function createReactHomePage() {
  return `import React from 'react';
import { resolveComponentByKey } from '../lib/componentMap';
import pageData from '../data/pageData';

const toPascalCase = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .split(/[-_\\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const readText = (props: Record<string, any>, keys: string[], fallback = '') => {
  for (const key of keys) {
    const value = props?.[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return fallback;
};

const FallbackSection = ({ componentKey, props = {} as Record<string, any> }) => {
  const title = readText(props, ['title', 'heading', 'headline', 'name'], toPascalCase(componentKey));
  const subtitle = readText(
    props,
    ['subtitle', 'description', 'tagline', 'text'],
    'This section uses fallback rendering because a direct component was not found.'
  );
  const bgColor = props.bgColor || '#ffffff';
  const textColor = props.textColor || '#0f172a';

  return (
    <section style={{ background: bgColor, color: textColor, padding: '72px 20px', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.7 }}>
          {componentKey}
        </p>
        <h2 style={{ margin: '12px 0 8px', fontSize: '2rem' }}>{title}</h2>
        <p style={{ margin: 0, opacity: 0.75 }}>{subtitle}</p>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {pageData.order.map((id) => {
        const section = pageData.sections[id];
        if (!section) return null;

        const Component = resolveComponentByKey(section.componentKey);
        if (!Component) {
          return <FallbackSection key={id} componentKey={section.componentKey} props={section.props || {}} />;
        }

        return <Component key={id} {...(section.props || {})} />;
      })}
    </main>
  );
}
`;
}

function createNextPage() {
  return `'use client';

import React from 'react';
import { resolveComponentByKey } from '../lib/componentMap';
import pageData from '../data/pageData';

const toPascalCase = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .split(/[-_\\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const readText = (props: Record<string, any>, keys: string[], fallback = '') => {
  for (const key of keys) {
    const value = props?.[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return fallback;
};

const FallbackSection = ({ componentKey, props = {} as Record<string, any> }) => {
  const title = readText(props, ['title', 'heading', 'headline', 'name'], toPascalCase(componentKey));
  const subtitle = readText(
    props,
    ['subtitle', 'description', 'tagline', 'text'],
    'This section uses fallback rendering because a direct component was not found.'
  );
  const bgColor = props.bgColor || '#ffffff';
  const textColor = props.textColor || '#0f172a';

  return (
    <section style={{ background: bgColor, color: textColor, padding: '72px 20px', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.7 }}>
          {componentKey}
        </p>
        <h2 style={{ margin: '12px 0 8px', fontSize: '2rem' }}>{title}</h2>
        <p style={{ margin: 0, opacity: 0.75 }}>{subtitle}</p>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {pageData.order.map((id) => {
        const section = pageData.sections[id];
        if (!section) return null;

        const Component = resolveComponentByKey(section.componentKey);
        if (!Component) {
          return <FallbackSection key={id} componentKey={section.componentKey} props={section.props || {}} />;
        }

        return <Component key={id} {...(section.props || {})} />;
      })}
    </main>
  );
}
`;
}

function createGlobalStyleFile() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

body {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  overflow-x: hidden;
}
`;
}

function generateReactFiles(
  zip: JSZip,
  pageData: PageData,
  projectName: string,
  pathMap: Map<string, ImagePathMapEntry>
) {
  zip.file('package.json', reactPackageJson(projectName));
  zip.file('README.md', createReadme('react', projectName));
  zip.file(
    'index.html',
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
  );
  zip.file(
    'vite.config.ts',
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});`
  );
  zip.file(
    'tsconfig.json',
    `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": false,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}`
  );
  zip.file('tailwind.config.js', baseTailwindConfig(['./index.html', './src/**/*.{js,ts,jsx,tsx}']));
  zip.file('postcss.config.js', basePostcssConfigESM());

  zip.file(
    'src/main.tsx',
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
  );
  zip.file(
    'src/App.tsx',
    `import React from 'react';
import Home from './pages/Home';

export default function App() {
  return <Home />;
}
`
  );
  zip.file('src/pages/Home.tsx', createReactHomePage());
  zip.file('src/styles/index.css', createGlobalStyleFile());
  zip.file('src/data/pageData.ts', `const pageData = ${JSON.stringify(pageData, null, 2)};\n\nexport default pageData;\n`);
  zip.file('src/vite-env.d.ts', `/// <reference types="vite/client" />\n`);
  zip.file('src/lib/componentMap.ts', remapStringWithImages(componentMapSource, pathMap, 'react'));
  zip.file('src/registry/componentsRegistry.ts', componentsRegistrySource);

  copyLibrarySources(zip, 'react', pathMap);
}

function generateNextFiles(
  zip: JSZip,
  pageData: PageData,
  projectName: string,
  pathMap: Map<string, ImagePathMapEntry>
) {
  zip.file('package.json', nextPackageJson(projectName));
  zip.file('README.md', createReadme('next', projectName));
  zip.file(
    'next.config.js',
    `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
`
  );
  zip.file(
    'tsconfig.json',
    `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`
  );
  zip.file('next-env.d.ts', `/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n`);
  zip.file('tailwind.config.js', baseTailwindConfig(['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}']));
  zip.file('postcss.config.js', basePostcssConfigCJS());
  zip.file(
    'app/layout.tsx',
    `import './globals.css';

export const metadata = {
  title: '${projectName}',
  description: 'Exported from SiteStudio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`
  );
  zip.file('app/page.tsx', createNextPage());
  zip.file('app/globals.css', createGlobalStyleFile());
  zip.file('data/pageData.ts', `const pageData = ${JSON.stringify(pageData, null, 2)};\n\nexport default pageData;\n`);
  zip.file('lib/componentMap.ts', remapStringWithImages(componentMapSource, pathMap, 'next'));
  zip.file('registry/componentsRegistry.ts', componentsRegistrySource);

  Object.entries(librarySourceFiles).forEach(([sourcePath, content]) => {
    const outputPath = sourcePath.replace('../components/library/', 'components/library/');
    zip.file(outputPath, remapStringWithImages(content, pathMap, 'next'));
  });
}

function htmlTemplate(markup: string, projectName: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <main id="app">
${markup}
    </main>
    <script src="./js/script.js"></script>
  </body>
</html>`;
}

function htmlStyles() {
  return `* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

body {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  overflow-x: hidden;
  background: #ffffff;
  color: #0f172a;
}

img {
  max-width: 100%;
  height: auto;
}
`;
}

function htmlScript() {
  return `(() => {
  const links = document.querySelectorAll('a[href="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
})();`;
}

function generateHtmlFiles(zip: JSZip, htmlMarkup: string, projectName: string) {
  zip.file('index.html', htmlTemplate(htmlMarkup, projectName));
  zip.file('css/style.css', htmlStyles());
  zip.file('js/script.js', htmlScript());
  zip.file('README.md', createReadme('html', projectName));
}

export async function generateProjectZip(
  rawPageData: PageData,
  stack: ExportStack,
  options: GenerateProjectZipOptions = {}
) {
  const pageData = deepClone(rawPageData || { order: [], sections: {} });
  const projectName = sanitizeProjectName(options.projectName || pageData.projectName || 'sitestudio-project');
  const zip = new JSZip();

  notify(options.onProgress, {
    stage: 'prepare',
    percent: 5,
    message: 'Preparing Files...'
  });

  const generatedMarkup = renderSectionsMarkup(pageData);
  const previewMarkup = extractPreviewSectionsMarkup(options.previewHtml || '');
  const previewMatch = !previewMarkup || normalizeMarkup(generatedMarkup) === normalizeMarkup(previewMarkup);
  let htmlMarkupBase = generatedMarkup;

  if (!previewMatch && previewMarkup.trim()) {
    htmlMarkupBase = previewMarkup;
  }

  notify(options.onProgress, {
    stage: 'prepare',
    percent: 22,
    message: previewMatch
      ? 'Preparing Files... Preview matched'
      : 'Preparing Files... Mismatch detected, applying auto-fix',
    previewMatch
  });

  const imageCollector = new Set<string>();
  collectImageUrlsFromProps(pageData.sections, imageCollector);
  collectImageUrlsFromMarkup(generatedMarkup, imageCollector);
  collectImageUrlsFromMarkup(htmlMarkupBase, imageCollector);

  const imageResolution = await resolveImageAssets([...imageCollector], options.onProgress);

  const reactData = remapValueWithImages(pageData, imageResolution.pathMap, 'react') as PageData;
  const nextData = remapValueWithImages(pageData, imageResolution.pathMap, 'next') as PageData;
  const htmlMarkup = remapStringWithImages(htmlMarkupBase, imageResolution.pathMap, 'html');

  notify(options.onProgress, {
    stage: 'images',
    percent: 68,
    message: 'Optimizing Images... Done'
  });

  if (stack === 'react') {
    generateReactFiles(zip, reactData, projectName, imageResolution.pathMap);
  } else if (stack === 'next') {
    generateNextFiles(zip, nextData, projectName, imageResolution.pathMap);
  } else {
    generateHtmlFiles(zip, htmlMarkup, projectName);
  }

  writeImageAssets(zip, stack, imageResolution.assets);

  notify(options.onProgress, {
    stage: 'zip',
    percent: 78,
    message: 'Creating ZIP...'
  });

  const content = await zip.generateAsync(
    { type: 'blob' },
    (metadata) => {
      notify(options.onProgress, {
        stage: 'zip',
        percent: Math.min(99, 78 + Math.round(metadata.percent * 0.2)),
        message: 'Creating ZIP...'
      });
    }
  );

  notify(options.onProgress, {
    stage: 'ready',
    percent: 100,
    message: 'Download Ready...',
    previewMatch
  });

  return content;
}
