import { Phone, Mail, MapPin, Send, User } from "lucide-react";
import ReactGA from 'react-ga4';

const trackGA4Event = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  ReactGA.event({
    category: 'Engagement',
    action: eventName,
    ...parameters
  });
};

export function Contacts() {
  return (
    <section id="contacts" className="py-20 md:py-32 relative bg-transparent">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              КОНТАКТЫ
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-400 font-light max-w-md leading-relaxed">
            Мы всегда на связи. Выберите удобный способ связи или приезжайте в один из наших сервисных центров.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          
          {/* Contact Info */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-14 glass-panel rounded-[1.5rem] md:rounded-[2rem] hover:-translate-y-2 transition-all duration-700 shadow-2xl flex flex-col justify-between group">
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 uppercase mb-6 sm:mb-8">Прямая связь</p>
              
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mb-2 flex items-center gap-2"><User size={14}/>Телефон (Андрей)</p>
                  <a
                    href="tel:+79204281777"
                    className="text-2xl sm:text-3xl md:text-4xl text-white tracking-tight hover:text-gray-300 transition-colors inline-block text-gradient"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    onClick={() => trackGA4Event('contact_click', {
                      contact_type: 'phone',
                      phone_number: '+79204281777',
                      contact_name: 'Андрей'
                    })}
                  >
                    +7 (920) 428-17-77
                  </a>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mb-2 flex items-center gap-2"><User size={14}/>Куратор</p>
                  <a
                    href="https://t.me/So_sofia_So"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl md:text-2xl text-white tracking-tight hover:text-gray-300 transition-colors inline-block pb-1 font-medium"
                    onClick={() => trackGA4Event('social_click', {
                      social_platform: 'telegram',
                      username: 'So_sofia_So',
                      role: 'куратор'
                    })}
                  >
                    @So_sofia_So
                  </a>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mb-2 flex items-center gap-2"><Mail size={14}/>Email</p>
                  <a
                    href="mailto:sulimavto@yandex.ru"
                    className="text-base sm:text-lg md:text-xl text-white hover:text-gray-300 transition-colors font-medium break-all"
                    onClick={() => trackGA4Event('contact_click', {
                      contact_type: 'email',
                      email: 'sulimavto@yandex.ru'
                    })}
                  >
                    sulimavto@yandex.ru
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 sm:mt-16 flex gap-4 sm:gap-6">
              <a
                href="https://vk.com/away.php?to=https%3A%2F%2Ft.me%2Favtoshina_rsh&utf=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
                onClick={() => trackGA4Event('social_click', { social_platform: 'telegram', link_type: 'channel' })}
              >
                <Send size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://vk.com/club229635905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
                onClick={() => trackGA4Event('social_click', { social_platform: 'vkontakte', link_type: 'group' })}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.025-1.49-1.163-1.744-1.163-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.27.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Addresses */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-14 glass-panel rounded-[1.5rem] md:rounded-[2rem] hover:-translate-y-2 transition-all duration-700 shadow-2xl">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 uppercase mb-6 sm:mb-8">Локации</p>
            
            <div className="space-y-10 sm:space-y-16">
              <div className="group">
                <h3 className="text-xl sm:text-2xl text-white tracking-tight mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Магазин
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-light mb-4 sm:mb-6 flex items-center gap-2"><MapPin size={14} className="sm:w-4 sm:h-4"/>г. Россошь, пл. Октябрьская, 3Б</p>
                <a
                  href="https://yandex.ru/maps/-/CLRZ4LYv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 px-5 sm:px-6 py-3 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-all"
                  onClick={() => trackGA4Event('map_click', {
                    location: 'магазин',
                    map_service: 'yandex_maps',
                    address: 'г. Россошь, пл. Октябрьская площадь, 3Б'
                  })}
                >
                  Открыть в Картах
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>

              <div className="group">
                <h3 className="text-xl sm:text-2xl text-white tracking-tight mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Шинсервис
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-light mb-4 sm:mb-6 flex items-center gap-2"><MapPin size={14} className="sm:w-4 sm:h-4"/>г. Россошь, ул. Январская, д. 43</p>
                <a
                  href="https://yandex.ru/maps/-/CLRVzBZ3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 px-5 sm:px-6 py-3 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-all"
                  onClick={() => trackGA4Event('map_click', {
                    location: 'шинсервис', 
                    map_service: 'yandex_maps',
                    address: 'г. Россошь, ул. Январская, д. 43'
                  })}
                >
                  Открыть в Картах
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}