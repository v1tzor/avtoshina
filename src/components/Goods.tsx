import { useEffect, useState } from "react";

const reasons = [
  {
    title: "ПРОФЕССИОНАЛИЗМ",
    description: "Более 10 лет на рынке. Опыт, который гарантирует безупречный результат."
  },
  {
    title: "СКОРОСТЬ",
    description: "Оптимизированные процессы. Мы ценим ваше время без ущерба качеству."
  },
  {
    title: "ГАРАНТИЯ",
    description: "Полная ответственность за каждый этап работы. Честно и надежно."
  },
  {
    title: "ПРОЗРАЧНОСТЬ",
    description: "Абсолютно понятное ценообразование. Никаких скрытых платежей."
  },
  {
    title: "ТЕХНОЛОГИИ",
    description: "Только передовое оборудование для обслуживания премиум-класса."
  },
  {
    title: "ПОДХОД",
    description: "Индивидуальный сервис для каждого клиента. Мы слышим ваши пожелания."
  }
];

export function Goods() {
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

    const elements = document.querySelectorAll('.reason-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-32 relative bg-transparent">

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              ПОЧЕМУ МЫ
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-md leading-relaxed">
            Мы не просто выполняем работу, мы устанавливаем стандарты сервиса в городе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {reasons.map((reason, index) => {
            return (
              <div
                key={index}
                data-index={index}
                className={`reason-card relative p-10 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/15 transition-all duration-700 ease-out shadow-2xl ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 right-6 text-6xl font-black text-white/5 select-none pointer-events-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl mb-4 text-white tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
