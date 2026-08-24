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
    <section id="products" className="py-24 relative overflow-hidden bg-[#050505]">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Ассортимент
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Оригинальная продукция от проверенных брендов для долгой службы вашего автомобиля.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`product-card group relative bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)] overflow-hidden ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex items-start gap-5 mb-6 relative z-10">
                  <div className="p-4 bg-cyan-950/40 border border-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-500">
                    <Icon size={28} className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl mb-2 text-white font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{product.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-[72px] mt-6 relative z-10">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group/item hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></div>
                      <span className="font-light">{item}</span>
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

