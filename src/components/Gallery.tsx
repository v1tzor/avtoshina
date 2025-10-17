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
    <section id = "gallery" className="py-24 relative overflow-hidden">

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-800/8 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black to-gray-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Наша работа
          </h2>
          <p className="text-xl text-blue-500">
            Фотографии наших объектов и оборудования
          </p>
        </div>
        {/* <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Наша работа
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Фотографии наших объектов и оборудования
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/5 group transition-all duration-300 hover:border-white/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
