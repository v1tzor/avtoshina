import { Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-blue-400/20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
           <h1 
            className={`text-4xl md:text-6xl lg:text-7xl mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Продажа и ремонт
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              шин и дисков
            </span>
          </h1>
          <p 
            className={`text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Профессиональный сервис, качественные шины и диски, быстрый ремонт в городе Россошь
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="tel:+79204281777"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <Phone size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              Позвонить
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("contacts");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-500/20 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <MapPin size={20} className="transition-transform duration-300 group-hover:bounce" />
              Наши адреса
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
