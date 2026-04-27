
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2, MousePointer2 } from 'lucide-react';

interface PreviewContainerProps {
  children: React.ReactNode;
  height?: number;
  width?: number; // Base width to scale from
  defaultScale?: number;
  className?: string;
  name?: string;
}

export const PreviewContainer: React.FC<PreviewContainerProps> = ({ 
  children, 
  height = 400, 
  width = 1440,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const newScale = parentWidth / width;
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [width]);

  return (
    <div className={`relative flex flex-col group ${className}`}>
        <div ref={containerRef} style={{ height: `${height * scale}px` }} 
            className={`w-full overflow-hidden custom-scrollbar bg-[#09090b] relative rounded-t-[2.5rem] border-b border-white/5`}>
            
            <div 
                style={{
                  width: `${width}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  position: "absolute",
                  top: 0,
                  left: 0
                }}
            >
                {children}
            </div>
        </div>
    </div>
  );
};
