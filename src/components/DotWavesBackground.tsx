export function DotWavesBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
      
      {/* Soft ambient colored lighting in the background */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* SVG Filter for Wavy Distortion */}
      <svg className="hidden">
        <filter id="wave-distortion">
          <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" result="noise">
             <animate attributeName="baseFrequency" dur="20s" values="0.005;0.007;0.005" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Dotted Field Layer */}
      <div 
        className="absolute inset-[-20%] opacity-40 mix-blend-screen"
        style={{
          filter: 'url(#wave-distortion)',
          backgroundImage: 'radial-gradient(circle, #60a5fa 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      {/* Secondary Dotted Layer for Parallax Depth */}
      <div 
        className="absolute inset-[-20%] opacity-20 mix-blend-screen"
        style={{
          filter: 'url(#wave-distortion)',
          backgroundImage: 'radial-gradient(circle, #a78bfa 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          transform: 'scale(1.2)'
        }}
      ></div>
      
      {/* Smooth gradient at the bottom to ground the page */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] to-transparent"></div>
    </div>
  );
}
