import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 py-4 lg:px-8 lg:py-6 ${isScrolled ? 'pt-4' : ''}`}>
      <div className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out ${isScrolled ? 'glass rounded-3xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10' : 'px-2'}`}>
        <div className="flex items-center justify-between">
         {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollToSection("home")}>
          <div className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
            <ImageWithFallback
              src="/avtoshina-logo.png"
              alt="Автошина Logo"
              className="w-full h-full object-contain grayscale invert opacity-90"
            />
          </div>
          <span className="text-xl tracking-wider text-white uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Автошина
          </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group">
              Главная
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("products")} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group">
              Ассортимент
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("services")} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("why-us")} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group">
              Преимущества
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("contacts")} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <a 
              href="tel:+79204281777"
              className="glass-button px-6 py-2.5 rounded-full text-white font-semibold text-sm ml-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              +7 (920) 428-17-77
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-4 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="text-left py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">Главная</button>
            <button onClick={() => scrollToSection("products")} className="text-left py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">Ассортимент</button>
            <button onClick={() => scrollToSection("services")} className="text-left py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">Услуги</button>
            <button onClick={() => scrollToSection("why-us")} className="text-left py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">Преимущества</button>
            <button onClick={() => scrollToSection("contacts")} className="text-left py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">Контакты</button>
            
            <a 
              href="tel:+79204281777"
              className="glass-button mt-4 flex items-center justify-center py-4 rounded-xl text-white font-semibold text-lg"
            >
              Позвонить
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
