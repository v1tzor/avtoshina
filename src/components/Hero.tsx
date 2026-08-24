import { Phone, MapPin, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#050505]"
    >
      {/* Sleek Neon Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            Работаем для вас в Россоши
          </div>

          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, lineHeight: 1.1 }}
          >
            <span className="text-white drop-shadow-lg">
              Продажа и ремонт
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              шин и дисков
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto font-light transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Профессиональный шиномонтаж, точная балансировка и огромный выбор качественных шин для вашего автомобиля.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="tel:+79204281777"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Phone size={22} className="relative z-10" />
              <span className="relative z-10">Позвонить сейчас</span>
            </a>
            
            <button
              onClick={() => {
                const element = document.getElementById("contacts");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 text-white font-medium text-lg backdrop-blur-md transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <MapPin size={22} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span>Наши адреса</span>
              <ChevronRight size={18} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
