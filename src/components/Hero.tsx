import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-32 md:pt-40 pb-20 bg-transparent"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col justify-center mt-8 md:mt-0">
        <div className="max-w-6xl w-full">
          
          <div className={`overflow-hidden mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] md:text-sm font-semibold tracking-[0.15em] text-gray-300 uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10">
              Премиальный сервис • Россошь
            </span>
          </div>

          <h1 
            className={`text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] mb-10 md:mb-12 tracking-tighter text-white transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: 0.9 }}
          >
            БЕЗУПРЕЧНЫЙ<br/>
            <span className="text-gradient font-light italic tracking-tight">ШИНОМОНТАЖ</span>
          </h1>
          
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12 border-t border-white/10 pt-10 md:pt-12 mt-10 md:mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed">
              Профессиональное обслуживание, точная балансировка и премиальный выбор шин. Мы создаем стандарты качества для вашего автомобиля.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full md:w-auto">
              <a
                href="tel:+79204281777"
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-white rounded-full text-black font-semibold text-sm tracking-wide transition-all hover:bg-gray-200 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
              >
                Позвонить сейчас
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById("contacts");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-button flex items-center justify-center px-8 py-5 rounded-full text-white font-medium text-sm tracking-wide transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Наши адреса
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
