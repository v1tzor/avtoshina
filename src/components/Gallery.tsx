import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "/prof.jpeg",
    title: "Современное оборудование"
  },
  {
    url: "/catalog.jpg",
    title: "Широкий ассортимент"
  },
  {
    url: "/good-prod.jpeg",
    title: "Качественная продукция"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 relative bg-transparent">
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              ГАЛЕРЕЯ
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-md leading-relaxed">
            Наши стандарты качества в каждой детали. От идеальной чистоты до высокоточного оборудования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden group rounded-3xl border border-white/5 hover:border-white/15 shadow-2xl transition-all duration-500"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="aspect-[4/5] bg-black">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-lg tracking-wide font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
