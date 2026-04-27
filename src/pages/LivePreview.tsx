import { useBuilder } from '../context/BuilderContext';
import { resolveComponentByKey } from '../lib/componentMap';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Monitor, Tablet, Smartphone, Globe, Share2, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import Frame from 'react-frame-component';

export default function LivePreview() {
  const { selectedComponents } = useBuilder();
  const navigate = useNavigate();
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [frameStyles, setFrameStyles] = useState<any[]>([]);

  useEffect(() => {
    const getStyles = () => {
      const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map((el, i) => {
        if (el.tagName === 'STYLE') return <style key={i} dangerouslySetInnerHTML={{ __html: el.innerHTML }} />;
        if (el.tagName === 'LINK') return <link key={i} rel="stylesheet" href={(el as HTMLLinkElement).href} />;
        return null;
      });
      setFrameStyles(styles);
    };
    getStyles();
    const observer = new MutationObserver(getStyles);
    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (!selectedComponents.length) {
    return (
      <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-12 text-center">
        <div className="w-24 h-24 bg-rose-500/10 rounded-[3rem] flex items-center justify-center text-rose-500 mb-10 border border-rose-500/10 shadow-[0_0_80px_-20px_rgba(244,63,94,0.3)] select-none">
          <Monitor size={56} />
        </div>
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Stack is Empty</h1>
        <p className="text-xl text-white/30 max-w-sm mx-auto mb-16 leading-relaxed font-medium">Add components in the builder session to materialize your live perspective here.</p>
        <button onClick={() => navigate('/builder')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] active:scale-95">Return to Architect</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-indigo-500/30">
      <style>{`
        .preview-section {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
        .preview-section > * {
          width: 100%;
          max-width: 100%;
        }
        .preview-section img,
        .preview-section video,
        .preview-section svg,
        .preview-section canvas {
          max-width: 100%;
          height: auto;
        }
      `}</style>
      {/* Dynamic Controls Header */}
      <header className="fixed top-0 inset-x-0 z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 h-20 flex items-center justify-between px-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/builder')} className="p-4 bg-white/5 hover:bg-white/10 text-white/20 hover:text-white rounded-2xl border border-white/5 transition-all active:scale-90 shadow-xl group">
             <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-indigo-400 mb-0.5 opacity-80">Deployment Preview</span>
            <span className="text-lg font-black text-white/90 uppercase tracking-tighter">Production Stack Visualizer</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#18181b] p-1.5 rounded-[1.5rem] border border-white/5 shadow-inner backdrop-blur-3xl">
          <button onClick={() => setDevice('desktop')} className={`px-6 py-3 rounded-xl transition-all ${device === 'desktop' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white/60'}`}>
            <Monitor size={18} />
          </button>
          <button onClick={() => setDevice('tablet')} className={`px-6 py-3 rounded-xl transition-all ${device === 'tablet' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white/60'}`}>
            <Tablet size={18} />
          </button>
          <button onClick={() => setDevice('mobile')} className={`px-6 py-3 rounded-xl transition-all ${device === 'mobile' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-white/20 hover:text-white/60'}`}>
            <Smartphone size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4">
           <button className="p-4 bg-white/5 hover:bg-white/10 text-white/20 hover:text-white rounded-2xl border border-white/5 transition-all shadow-xl active:scale-95">
              <Share2 size={20} />
           </button>
           <button className="bg-white text-[#09090b] px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-95">
              <Rocket size={18} /> Publish
           </button>
        </div>
      </header>

      {/* Preview Frame */}
      <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto pt-20 ${device === 'desktop' ? 'w-full' : device === 'tablet' ? 'w-full max-w-4xl mt-12 mb-12 border-[12px] border-[#18181b] shadow-[0_80px_150px_-50px_rgba(0,0,0,1)] rounded-[4rem]' : 'w-full max-w-sm mt-12 mb-12 border-[12px] border-[#18181b] shadow-[0_80px_150px_-50px_rgba(0,0,0,1)] rounded-[4rem] border-y-[80px]'}`}>
        <div className={`bg-[#09090b] ${device !== 'desktop' ? 'h-[800px] overflow-hidden rounded-[3rem]' : ''}`}>
           {device === 'desktop' ? (
             selectedComponents.map((item) => {
                 const Component = resolveComponentByKey(item.componentKey);
                if (!Component) return <div key={item.id} className="p-20 text-center bg-rose-500/5 text-rose-500 text-[10px] font-black uppercase tracking-widest border-y border-rose-500/10">Registry Error: {item.componentKey}</div>;
                return (
                  <div key={item.id} className="preview-section">
                    <Component {...item.props} />
                  </div>
                );
             })
           ) : (
             <Frame head={<>
               {frameStyles}
               <style>{`
                html, body { margin: 0; padding: 0; overflow-x: hidden; }
                * { box-sizing: border-box; }
                .preview-section { width: 100%; max-width: 100%; overflow: hidden; }
                .preview-section > * { width: 100%; max-width: 100%; }
                .preview-section img, .preview-section video, .preview-section svg, .preview-section canvas { max-width: 100%; height: auto; }
               `}</style>
             </>} style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#09090b', display: 'block' }}>
               {selectedComponents.map((item) => {
                 const Component = resolveComponentByKey(item.componentKey);
                 if (!Component) return <div key={item.id} className="p-20 text-center bg-rose-500/5 text-rose-500 text-[10px] font-black uppercase tracking-widest border-y border-rose-500/10">Registry Error: {item.componentKey}</div>;
                 return (
                   <div key={item.id} className="preview-section">
                     <Component {...item.props} />
                   </div>
                 );
               })}
             </Frame>
           )}
        </div>
        
        {/* URL Indicator Bar for Tablet/Mobile */}
        {device !== 'desktop' && (
           <div className="bg-[#18181b] py-4 text-center border-t border-white/5">
              <div className="bg-black/40 px-6 py-2 rounded-full inline-flex items-center gap-3 border border-white/5">
                 <Globe size={14} className="text-white/20" />
                 <span className="text-[10px] font-bold text-white/30 font-mono tracking-widest">sitestudio.app/p/live-view</span>
              </div>
           </div>
        )}
      </div>
    </div>
  );
}
