import {
  Wrench,
  Droplets,
  Settings,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Шиномонтаж любой сложности",
    description:
      "Профессиональный шиномонтаж для легковых и грузовых автомобилей",
    features: [
      "Монтаж и демонтаж шин",
      "Балансировка колес",
      "Ремонт проколов и порезов",
      "Установка и снятие колес",
      "Проверка давления и подкачка",
    ],
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
      "Проверка на специальном оборудовании",
    ],
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
      "Проверка уровня жидкостей",
    ],
  },
];

export function Goods() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".service-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-blue-900/20">
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Почему выбирают нас</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">Опыт</h3>
            <p className="text-slate-300">Более 10 лет на рынке</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">Качество</h3>
            <p className="text-slate-300">Только сертифицированные материалы</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">Скорость</h3>
            <p className="text-slate-300">Быстрое выполнение работ</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">Профессионализм</h3>
            <p className="text-slate-300">Квалифицированные мастера</p>
          </div>
        </div>
      </div>
    </section>
  );
}
