import { Award, Clock, Shield, ThumbsUp, Users, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const reasons = [
  {
    icon: Award,
    title: "Профессионализм",
    description: "Больше 10 лет на рынке"
  },
  {
    icon: Clock,
    title: "Быстрое обслуживание",
    description: "Минимальное время ожидания, оперативная работа"
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Гарантия на все виды выполненных работ"
  },
  {
    icon: ThumbsUp,
    title: "Честные цены",
    description: "Прозрачное ценообразование без скрытых платежей"
  },
  {
    icon: Wrench,
    title: "Современное оборудование",
    description: "Новейшее оборудование для качественной работы"
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Персональное обслуживание каждого клиента"
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
    <section id="why-us" className="py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950 to-gray-950"></div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-900/6 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
             Почему выбирают нас
          </h2>
          <p className="text-xl text-blue-500">
              Мы заботимся о вашей безопасности и комфорте
          </p>
        </div>
        {/* <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Почему выбирают нас
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Мы заботимся о вашей безопасности и комфорте
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`reason-card bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-white/20 hover:bg-gray-900/50 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gray-900 border border-white/10 rounded-xl mb-4">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
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
