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
    <section id="services" className="py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950 to-gray-950"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Наши услуги
          </h2>
          <p className="text-xl text-blue-500">
            Профессиональное обслуживание вашего автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-600 rounded-3xl p-8 h-full transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl mb-4">
                    <Icon size={40} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 transition-all duration-300 hover:text-blue-300 hover:translate-x-2">
                      <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
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
