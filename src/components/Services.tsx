import { Wrench, Droplets, Settings } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Шиномонтаж любой сложности",
    description: "Профессиональный шиномонтаж для легковых и грузовых автомобилей",
    features: [
      "Монтаж и демонтаж шин",
      "Балансировка колес",
      "Ремонт проколов и порезов",
      "Установка и снятие колес",
      "Проверка давления и подкачка"
    ]
  },
  {
    icon: Wrench,
    title: "Раскатка стальных дисков",
    description: "Восстановление геометрии стальных дисков после деформации",
    features: [
      "Правка дисков после ударов",
      "Устранение восьмерки",
      "Выправление вмятин",
      "Восстановление биения",
      "Проверка на специальном оборудовании"
    ]
  },
  {
    icon: Droplets,
    title: "Экспресс замена масла",
    description: "Быстрая замена масла и технических жидкостей",
    features: [
      "Замена моторного масла",
      "Замена масляного фильтра",
      "Замена воздушного фильтра",
      "Долив технических жидкостей",
      "Проверка уровня жидкостей"
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

    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">

      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Наши услуги
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Профессиональное обслуживание вашего автомобиля с гарантией качества и скорости.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-md rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)] overflow-hidden ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col items-center text-center mb-8 relative z-10">
                  <div className="p-5 bg-cyan-950/40 border border-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-500 mb-6">
                    <Icon size={40} className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mt-4 text-left w-full relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/item hover:text-white transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-cyan-500/50 rounded-full flex-shrink-0 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></div>
                      <span className="font-light">{feature}</span>
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

