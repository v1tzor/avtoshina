import { Gauge, Disc, Battery, Droplet } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    icon: Gauge,
    title: "Автошины",
    description: "Широкий выбор шин для легковых и грузовых автомобилей от ведущих производителей.",
    items: ["Летние шины", "Зимние шины", "Всесезонные", "Грузовые"]
  },
  {
    icon: Disc,
    title: "Диски",
    description: "Литые и стальные диски различных размеров и дизайнов.",
    items: ["Литые диски", "Стальные диски", "Кованые", "Штампованные"]
  },
  {
    icon: Battery,
    title: "Аккумуляторы",
    description: "Качественные аккумуляторные батареи для любых автомобилей.",
    items: ["Легковые АКБ", "Грузовые АКБ", "AGM", "Гелевые"]
  },
  {
    icon: Droplet,
    title: "Автомасла",
    description: "Полный спектр масел и автохимии для обслуживания автомобиля.",
    items: ["Моторные", "Трансмиссионные", "Антифризы", "Присадки"]
  }
];

export function Products() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.product-row');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 md:py-32 relative bg-transparent">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-16 md:mb-24 animate-fade-in-up">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, lineHeight: 0.9 }}>
              КАТАЛОГ
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm leading-relaxed uppercase tracking-widest">
            Оригинальная продукция от проверенных брендов.
          </p>
        </div>

        <div className="flex flex-col w-full">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                data-index={index}
                className={`product-row group relative py-8 md:py-12 ${index !== 0 ? 'border-t border-white/10' : ''} transition-all duration-700 hover:bg-white/[0.02] ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 w-full">
                  
                  {/* Number & Title */}
                  <div className="flex items-start gap-6 lg:w-1/3">
                    <span className="text-xs md:text-sm font-mono text-gray-500 mt-2">0{index + 1}</span>
                    <h3 className="text-3xl md:text-5xl text-white tracking-tight uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      {product.title}
                    </h3>
                  </div>

                  {/* Description & List */}
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 lg:w-2/3">
                    <p className="text-base text-gray-400 font-light leading-relaxed md:w-1/2">
                      {product.description}
                    </p>
                    
                    <div className="md:w-1/2">
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
                        {product.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 group/item hover:text-white transition-colors cursor-default">
                            <span className="w-1 h-1 rounded-full bg-white/30 group-hover/item:bg-white transition-colors"></span>
                            <span className="font-medium tracking-wide uppercase">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

