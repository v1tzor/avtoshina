import { Gauge, Disc, Battery, Droplet } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    icon: Gauge,
    title: "Автошины",
    description: "Широкий выбор шин для легковых и грузовых автомобилей от ведущих производителей.",
    items: ["Летние шины", "Зимние шины", "Всесезонные шины", "Грузовые шины"],
    className: "md:col-span-2 lg:col-span-1" // Bento sizing
  },
  {
    icon: Disc,
    title: "Диски",
    description: "Литые и стальные диски различных размеров и дизайнов.",
    items: ["Литые диски", "Стальные диски", "Кованые диски", "Штампованные диски"],
    className: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: Battery,
    title: "Аккумуляторы",
    description: "Качественные аккумуляторные батареи для любых автомобилей.",
    items: ["Легковые АКБ", "Грузовые АКБ", "Необслуживаемые АКБ", "AGM аккумуляторы"],
    className: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: Droplet,
    title: "Автомасла и автохимия",
    description: "Полный спектр масел и автохимии для обслуживания автомобиля.",
    items: ["Моторные масла", "Трансмиссионные масла", "Тормозные жидкости", "Антифризы и присадки"],
    className: "md:col-span-2 lg:col-span-1"
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

    const elements = document.querySelectorAll('.product-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 md:py-32 relative bg-transparent">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              КАТАЛОГ
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-400 font-light max-w-md leading-relaxed">
            Оригинальная продукция от проверенных брендов. Строгий контроль качества на каждом этапе.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`product-card group relative p-6 sm:p-8 md:p-10 lg:p-12 glass-panel rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] ${product.className} ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                  <h3 className="text-2xl sm:text-3xl text-white tracking-tight order-2 sm:order-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{product.title}</h3>
                  <div className="w-14 h-14 sm:w-auto sm:h-auto p-4 glass rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500 order-1 sm:order-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Icon size={24} strokeWidth={1.5} className="text-gray-300 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light mb-8 max-w-sm">
                  {product.description}
                </p>
                
                <ul className="space-y-3 sm:space-y-4">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 group/item hover:text-white transition-all duration-300 transform hover:translate-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/item:bg-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                      <span className="font-medium tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

