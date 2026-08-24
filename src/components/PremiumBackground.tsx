export function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030712]">
      {/* Premium Studio Lighting Effect */}
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-blue-900/10 rounded-full blur-[150px]"></div>
      
      {/* Subtle Grain for Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
}
