import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
         {/* Logo + Название */}
        <div className="flex items-center gap-3 transform transition-all duration-300 hover:scale-110">
          <div className="w-12 h-12">
            <ImageWithFallback
              src="/avtoshina-logo.png"
              alt="Автошина Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            АВТОШИНА
          </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="relative hover:text-blue-400 transition-all duration-300 group"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="relative hover:text-blue-400 transition-all duration-300 group"
            >
              Ассортимент
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative hover:text-blue-400 transition-all duration-300 group"
            >
              Услуги
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="relative hover:text-blue-400 transition-all duration-300 group"
            >
              Фото
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="relative hover:text-blue-400 transition-all duration-300 group"
            >
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-blue-500/20 rounded-2xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-3 px-4 hover:bg-blue-500/20 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-3 px-4 hover:bg-blue-500/20 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
            >
              Ассортимент
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-3 px-4 hover:bg-blue-500/20 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left py-3 px-4 hover:bg-blue-500/20 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
            >
              Фото
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-left py-3 px-4 hover:bg-blue-500/20 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
            >
              Контакты
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
