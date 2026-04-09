
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

  return (
    <div className={`relative flex flex-col group ${className}`}>
        <div ref={containerRef} style={{ height: `${height}px` }} 
            className={`w-full overflow-y-auto overflow-x-hidden custom-scrollbar bg-[#09090b] relative rounded-t-[2.5rem] border-b border-white/5`}>
            
            <div 
                style={{
                  width: `${width}px`,
                  transformOrigin: "top center",
                  margin: "0 auto"
                }}
            >
                {children}
            </div>
        </div>
    </div>
  );
};
