import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Шиномонтаж любой сложности",
    description: "Профессиональный шиномонтаж для легковых и грузовых автомобилей.",
    features: [
      "Монтаж и демонтаж шин",
      "Балансировка колес",
      "Ремонт проколов",
      "Проверка давления"
    ]
  },
  {
    title: "Раскатка стальных дисков",
    description: "Восстановление геометрии стальных дисков после деформации.",
    features: [
      "Правка после ударов",
      "Устранение восьмерки",
      "Выправление вмятин",
      "Прокатка бортов"
    ]
  },
  {
    title: "Экспресс замена масла",
    description: "Быстрая замена моторного масла и технических жидкостей.",
    features: [
      "Замена моторного масла",
      "Замена фильтров",
      "Долив жидкостей",
      "Осмотр систем"
    ]
  }
];

export function Services() {
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

    const elements = document.querySelectorAll('.service-col');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 relative bg-transparent">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-16 md:mb-24 animate-fade-in-up">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, lineHeight: 0.9 }}>
              УСЛУГИ
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm leading-relaxed uppercase tracking-widest">
            Обслуживание с гарантией скорости.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                data-index={index}
                className={`service-col group relative p-8 md:p-12 glass-panel rounded-[2rem] border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-gray-500 font-mono text-xs md:text-sm mb-8">
                  0{index + 1}
                </div>
                
                <h3 className="text-2xl md:text-3xl text-white tracking-tight uppercase mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-10">
                  {service.description}
                </p>
                  
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 group/item hover:text-white transition-colors cursor-default">
                      <span className="w-1 h-1 rounded-full bg-white/30 group-hover/item:bg-white transition-colors"></span>
                      <span className="font-medium tracking-wide uppercase">{feature}</span>
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

