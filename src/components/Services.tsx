import { Wrench, Droplets, Settings } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Шиномонтаж любой сложности",
    description: "Профессиональный шиномонтаж для легковых и грузовых автомобилей.",
    features: [
      "Монтаж и демонтаж шин",
      "Балансировка колес",
      "Ремонт проколов и порезов",
      "Установка и снятие колес",
      "Проверка давления и подкачка"
    ],
    className: "md:col-span-2 lg:col-span-1 lg:row-span-2" // Large vertical card
  },
  {
    icon: Wrench,
    title: "Раскатка стальных дисков",
    description: "Восстановление геометрии стальных дисков после деформации.",
    features: [
      "Правка дисков после ударов",
      "Устранение восьмерки",
      "Выправление вмятин"
    ],
    className: "md:col-span-1 lg:col-span-2" // Wide horizontal card
  },
  {
    icon: Droplets,
    title: "Экспресс замена масла",
    description: "Быстрая замена масла и технических жидкостей.",
    features: [
      "Замена моторного масла",
      "Замена фильтров",
      "Долив жидкостей"
    ],
    className: "md:col-span-1 lg:col-span-2" // Wide horizontal card
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

    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 relative bg-transparent">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              УСЛУГИ
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-400 font-light max-w-md leading-relaxed">
            Профессиональное обслуживание вашего автомобиля с гарантией качества и скорости.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-[minmax(180px,_auto)]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative p-6 sm:p-8 md:p-10 lg:p-12 glass-panel rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex flex-col justify-between ${service.className} ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >

                <div className="flex flex-col mb-8 md:mb-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 glass rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-white/10 transition-colors duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Icon size={28} strokeWidth={1.5} className="text-gray-300 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-white tracking-tight leading-snug" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{service.title}</h3>
                </div>
                
                <div>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light mb-6 md:mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 sm:space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 group/item hover:text-white transition-all duration-300 transform hover:translate-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/item:bg-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                        <span className="font-medium tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

