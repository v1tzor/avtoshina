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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
         {/* Logo + Название */}
        <div className="flex items-center gap-3 transform transition-all duration-500 hover:scale-105 cursor-pointer" onClick={() => scrollToSection("home")}>
          <div className="w-12 h-12">
            <ImageWithFallback
              src="/avtoshina-logo.png"
              alt="Автошина Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            />
          </div>
          <span className="text-xl tracking-wider text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            АВТОШИНА<span className="text-cyan-500">36</span>
          </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Ассортимент
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Фото
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Контакты
            </button>
            <a 
              href="tel:+79204281777"
              className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              +7 (920) 428-17-77
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 p-2 hover:bg-white/5 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-2 pb-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-3 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-cyan-400"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-3 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-cyan-400"
            >
              Ассортимент
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-3 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-cyan-400"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left py-3 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-cyan-400"
            >
              Фото
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-left py-3 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-cyan-400"
            >
              Контакты
            </button>
            <a 
              href="tel:+79204281777"
              className="mt-2 flex items-center justify-center py-3 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm"
            >
              Позвонить +7 (920) 428-17-77
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
