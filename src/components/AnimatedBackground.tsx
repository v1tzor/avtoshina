import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* Subtle ambient gradients so it's not purely black */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>

      {/* SVG Filter definition for the wavy/curved grid */}
      <svg className="hidden">
        <filter id="wavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="3" result="noise">
             <animate attributeName="baseFrequency" dur="30s" values="0.003;0.005;0.003" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* The curved grid layer - visible softly everywhere */}
      <div 
        className="absolute inset-[-20%]"
        style={{
          opacity: 0.07,
          filter: 'url(#wavy)',
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* The glowing curved grid layer - highlighted by cursor */}
      <div 
        className="absolute inset-[-20%] mix-blend-screen"
        style={{
          opacity: 0.8,
          filter: 'url(#wavy)',
          backgroundImage: `
            linear-gradient(to right, #22d3ee 2px, transparent 2px),
            linear-gradient(to bottom, #22d3ee 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          WebkitMaskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          maskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
        }}
      ></div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Smooth gradient at the bottom to ground the page */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent"></div>
    </div>
  );
}
