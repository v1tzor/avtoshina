import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center animate-fade-in">
          <p className="text-gray-400 mb-2">
            Продажа и ремонт шин и дисков в г. Россошь
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Автошина. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
