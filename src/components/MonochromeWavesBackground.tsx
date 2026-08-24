export function MonochromeWavesBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
      
      {/* Slow moving soft white orbs for abstract shifting light */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-[0.04] animate-blob"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[70%] bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-[0.03] animate-blob" style={{ animationDelay: '7s' }}></div>
      <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-[0.02] animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* SVG Filter for Wavy Distortion */}
      <svg className="hidden">
        <filter id="monochrome-waves">
          <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="2" result="noise">
             <animate attributeName="baseFrequency" dur="30s" values="0.004;0.006;0.004" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Distinct contour wave lines (B&W) */}
      <div 
        className="absolute inset-[-20%] opacity-[0.15] mix-blend-screen"
        style={{
          filter: 'url(#monochrome-waves)',
          background: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)',
          transform: 'rotate(-5deg) scale(1.1)'
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
