import { Gauge, Disc, Battery, Droplet } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    icon: Gauge,
    title: "Автошины",
    description: "Широкий выбор шин для легковых и грузовых автомобилей от ведущих производителей",
    items: ["Летние шины", "Зимние шины", "Всесезонные шины", "Грузовые шины"]
  },
  {
    icon: Disc,
    title: "Диски",
    description: "Литые и стальные диски различных размеров и дизайнов",
    items: ["Литые диски", "Стальные диски", "Кованые диски", "Штампованные диски"]
  },
  {
    icon: Battery,
    title: "Аккумуляторы",
    description: "Качественные аккумуляторные батареи для любых автомобилей",
    items: ["Легковые АКБ", "Грузовые АКБ", "Необслуживаемые АКБ", "AGM аккумуляторы"]
  },
  {
    icon: Droplet,
    title: "Автомасла и автохимия",
    description: "Полный спектр масел и автохимии для обслуживания автомобиля",
    items: ["Моторные масла", "Трансмиссионные масла", "Тормозные жидкости", "Антифризы и присадки"]
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
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Наш ассортимент
          </h2>
          <p className="text-xl text-blue-500">
            Качественная продукция для вашего автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`product-card bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-600 rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-1 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{product.title}</h3>
                    <p className="text-gray-400">{product.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-16">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-blue-300 hover:translate-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      {item}
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
