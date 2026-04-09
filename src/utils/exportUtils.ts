import JSZip from 'jszip';
import { SelectedComponent } from '../store/useBuilderStore';

/**
 * Converts a component key (e.g., 'hero-gradient-mesh') to a PascalCase component name ('HeroGradientMesh').
 */
const toPascalCase = (key: string) => {
  return key.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
};

/**
 * Converts a props object to a JSX-compatible attribute string.
 */
const convertProps = (props: Record<string, any>) => {
  return Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'string') return `${key}="${value}"`;
      if (typeof value === 'boolean') return value ? key : '';
      return `${key}={${JSON.stringify(value)}}`;
    })
    .filter(p => p !== '')
    .join(' ');
};

/**
 * Generates the full App.jsx source code.
 */
export const generateAppJSX = (sections: SelectedComponent[], projectName: string) => {
  const componentNames = [...new Set(sections.map(s => toPascalCase(s.componentKey)))];
  
  const imports = `import { ${componentNames.join(', ')} } from './components/library';`;
  
  const renderedSections = sections.map(s => {
    const name = toPascalCase(s.componentKey);
    const props = convertProps(s.props);
    return `      <${name} ${props} />`;
  }).join('\n');

  return `import React from 'react';
${imports}

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <main>
${renderedSections}
      </main>
    </div>
  );
}
`;
};

/**
 * Generates a standard Package.json for the exported project.
 */
export const generatePackageJSON = (projectName: string) => {
  return JSON.stringify({
    name: projectName.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    private: true,
    dependencies: {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "framer-motion": "^11.0.0",
      "lucide-react": "^0.320.0",
      "clsx": "^2.1.0",
      "tailwind-merge": "^2.2.1"
    },
    devDependencies: {
      "vite": "^5.0.0",
      "@vitejs/plugin-react": "^4.2.0",
      "autoprefixer": "^10.4.0",
      "postcss": "^8.4.0",
      "tailwindcss": "^3.4.0"
    },
    scripts: {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }, null, 2);
};

/**
 * Generates initial Tailwind and PostCSS configs.
 */
export const generateTailwindConfigs = () => {
    const tailwind = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
}`;

    const postcss = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

    return { tailwind, postcss };
};

/**
 * Generates the root index.html.
 */
export const generateIndexHTML = (projectName: string) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
};

/**
 * Generates a simple static HTML version of the page.
 */
export const generateStaticHTML = (sections: SelectedComponent[], projectName: string) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background: #09090b; color: white; }
    </style>
</head>
<body>
    <main>
        <!-- This is a static representation. Full React components require JS runtime. -->
        <div class="p-20 text-center">
            <h1 class="text-4xl font-black mb-4 uppercase tracking-tighter">${projectName}</h1>
            <p class="text-white/40 uppercase tracking-widest text-sm font-bold">Static HTML Export (Components serialized)</p>
        </div>
        ${sections.map(s => `<section data-type="${s.componentKey}"></section>`).join('\n        ')}
    </main>
</body>
</html>`;
};

/**
 * Triggers a full project ZIP download.
 */
export const downloadProjectZip = async (sections: SelectedComponent[], projectName: string) => {
  const zip = new JSZip();
  
  // Root files
  zip.file('index.html', generateIndexHTML(projectName));
  zip.file('package.json', generatePackageJSON(projectName));
  
  const { tailwind, postcss } = generateTailwindConfigs();
  zip.file('tailwind.config.js', tailwind);
  zip.file('postcss.config.js', postcss);
  
  // Src directory
  const src = zip.folder('src')!;
  src.file('App.jsx', generateAppJSX(sections, projectName));
  src.file('main.jsx', `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`);
  src.file('index.css', `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  background: #09090b;
  color-scheme: dark;
}`);

  // components/library directory placeholder
  const componentsFolder = src.folder('components')!;
  componentsFolder.folder('library')!;
  
  // Note: In a real app, we would fetch or bundle the actual component files here.
  // For this demonstration, we are generating the structure and the App file.
  
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${projectName.toLowerCase().replace(/\s+/g, '-')}_project.zip`;
  link.click();
  URL.revokeObjectURL(url);
};
