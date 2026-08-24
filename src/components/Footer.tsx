export function Footer() {
  return (
    <footer className="relative bg-transparent pt-20 pb-10 border-t border-white/10 mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl text-white tracking-tighter mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              ГОТОВЫ НАЧАТЬ?
            </h2>
            <a href="tel:+79204281777" className="inline-block border-b border-white text-white text-lg md:text-xl pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
              +7 (920) 428-17-77
            </a>
          </div>
          
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 font-light mb-2">Профессиональный сервис</p>
            <p className="text-sm text-gray-500 font-light">г. Россошь, Воронежская область</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 font-light tracking-wide">
            © {new Date().getFullYear()} АВТОШИНА. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          
          <p className="text-[10vw] md:text-[8vw] lg:text-[6vw] text-white/5 font-black tracking-tighter leading-none select-none pointer-events-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            АВТОШИНА
          </p>
        </div>
        
      </div>
    </footer>
  );
}
