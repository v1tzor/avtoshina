import {
  Wrench,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";

export function Goods() {
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
