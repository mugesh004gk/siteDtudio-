import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw } from 'lucide-react';


export default function Theme() {
  const [applied, setApplied] = useState<string | null>(null);
  const [custom, setCustom] = useState({
    primary: '#6366f1', secondary: '#a855f7', bg: '#09090b',
    surface: '#18181b', text: '#fafafa', font: 'Inter',
  });

  const applyTheme = (preset: any) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', preset.primary);
    root.style.setProperty('--color-secondary', preset.secondary);
    root.style.setProperty('--color-bg', preset.bg);
    root.style.setProperty('--color-surface', preset.surface);
    root.style.setProperty('--color-text', preset.text);
    root.style.setProperty('--font-heading', `'${preset.font}', sans-serif`);
    root.style.setProperty('--font-body', `'${preset.font}', sans-serif`);
    setApplied(preset.name);
    setCustom({ primary: preset.primary, secondary: preset.secondary, bg: preset.bg, surface: preset.surface, text: preset.text, font: preset.font });
  };

  const applyCustom = () => {
    applyTheme({ ...custom, name: 'Custom' });
  };

  const resetTheme = () => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', '#6366f1');
    root.style.setProperty('--color-secondary', '#a855f7');
    root.style.setProperty('--color-bg', '#09090b');
    root.style.setProperty('--color-surface', '#18181b');
    root.style.setProperty('--color-text', '#fafafa');
    root.style.setProperty('--font-heading', "'Inter', sans-serif");
    root.style.setProperty('--font-body', "'Inter', sans-serif");
    setApplied(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">Theme Customization</h1>
        <p className="text-lg text-white/50 max-w-2xl">Customize your site colors and typography globally. Changes take effect instantly across all components.</p>
      </div>


      {/* Custom theme builder */}
      <section className="bg-[#18181b] rounded-2xl border border-white/5 p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-6">Custom Theme</h2>
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {[
            { key: 'primary', label: 'Primary Color' },
            { key: 'secondary', label: 'Secondary Color' },
            { key: 'bg', label: 'Background' },
            { key: 'surface', label: 'Surface' },
            { key: 'text', label: 'Text Color' },
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-white/50 mb-2">{label}</label>
              <div className="flex items-center gap-3">
                <input type="color" value={(custom as any)[key]} onChange={e => setCustom({ ...custom, [key]: e.target.value })}
                  className="w-10 h-10 rounded-lg cursor-pointer border border-white/10 bg-transparent" />
                <input type="text" value={(custom as any)[key]} onChange={e => setCustom({ ...custom, [key]: e.target.value })}
                  className="flex-1 bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-sm font-mono focus:outline-none focus:border-indigo-500" />
              </div>
            </div>
          ))}
          <div>
            <label className="block text-xs font-semibold text-white/50 mb-2">Font Family</label>
            <select value={custom.font} onChange={e => setCustom({ ...custom, font: e.target.value })}
              className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500">
              {['Inter', 'Outfit', 'Poppins', 'Space Grotesk', 'Nunito', 'DM Sans'].map(f => <option key={f}>{f}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={applyCustom} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors">
            Apply Custom Theme
          </button>
          <button onClick={resetTheme} className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors flex items-center gap-2">
            <RefreshCw size={16} /> Reset to Default
          </button>
        </div>
      </section>

      {/* CSS variables reference */}
      <section className="bg-[#18181b] rounded-2xl border border-white/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5"><h2 className="font-bold text-white text-sm">CSS Variables Reference</h2></div>
        <pre className="p-6 text-sm text-green-400 font-mono leading-loose text-xs overflow-auto">{`:root {
  --color-primary: ${custom.primary};
  --color-secondary: ${custom.secondary};
  --color-bg: ${custom.bg};
  --color-surface: ${custom.surface};
  --color-text: ${custom.text};
  --font-heading: '${custom.font}', sans-serif;
  --font-body: '${custom.font}', sans-serif;
}`}</pre>
      </section>
    </div>
  );
}
