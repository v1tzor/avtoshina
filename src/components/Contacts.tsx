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
    <section id="contacts" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl mb-4 text-blue-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Контакты
          </h2>
          <p className="text-xl text-blue-500">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Addresses */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-600 rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-in-left">
              <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Наши адреса</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex-shrink-0 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-2">Магазин:</p>
                    <p className="text-gray-400 mb-2">г. Россошь, пл. Октябрьская площадь, 3Б</p>
                    <a
                      href="https://yandex.ru/maps/-/CLRZ4LYv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-all duration-300 inline-flex items-center gap-1 hover:gap-2"
                      onClick={() => trackGA4Event('map_click', {
                        location: 'магазин',
                        map_service: 'yandex_maps',
                        address: 'г. Россошь, пл. Октябрьская площадь, 3Б'
                      })}
                    >
                      Показать на карте
                      <MapPin size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex-shrink-0 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-2">Шинсервис:</p>
                    <p className="text-gray-400 mb-2">г. Россошь, ул. Январская, д. 43</p>
                    <a
                      href="https://yandex.ru/maps/-/CLRVzBZ3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-all duration-300 inline-flex items-center gap-1 hover:gap-2"
                      onClick={() => trackGA4Event('map_click', {
                        location: 'шинсервис', 
                        map_service: 'yandex_maps',
                        address: 'г. Россошь, ул. Январская, д. 43'
                      })}
                    >
                      Показать на карте
                      <MapPin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-600 rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-in-right">
              <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Связь с нами</h3>
              <div className="space-y-4">
                <a
                  href="tel:+79204281777"
                  className="flex items-center gap-4 p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group hover:translate-x-2"
                  onClick={() => trackGA4Event('contact_click', {
                    contact_type: 'phone',
                    phone_number: '+79204281777',
                    contact_name: 'Андрей'
                  })}
                >
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Телефон</p>
                    <p className="text-blue-300 group-hover:text-blue-200 transition-colors">+7 (920) 428-17-77 — Андрей</p>
                  </div>
                </a>

                <a
                  href="mailto:sulimavto@yandex.ru"
                  className="flex items-center gap-4 p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group hover:translate-x-2"
                  onClick={() => trackGA4Event('contact_click', {
                    contact_type: 'email',
                    email: 'sulimavto@yandex.ru'
                  })}
                >
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-blue-300 group-hover:text-blue-200 transition-colors">sulimavto@yandex.ru</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl transition-all duration-300 hover:bg-gray-800/50">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg shadow-blue-500/30">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Куратор</p>
                    <a
                      href="https://t.me/So_sofia_So"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                      onClick={() => trackGA4Event('social_click', {
                        social_platform: 'telegram',
                        username: 'So_sofia_So',
                        role: 'куратор'
                      })}
                    >
                      @So_sofia_So
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-600 rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in">
            <h3 className="text-2xl mb-6 text-center text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Мы в социальных сетях</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://vk.com/away.php?to=https%3A%2F%2Ft.me%2Favtoshina_rsh&utf=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => trackGA4Event('social_click', {
                  social_platform: 'telegram',
                  link_type: 'channel'
                })}
              >
                <Send size={20} />
                <span>Telegram</span>
              </a>

              <a
                href="https://vk.com/club229635905"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => trackGA4Event('social_click', {
                  social_platform: 'vkontakte',
                  link_type: 'group'
                })}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.025-1.49-1.163-1.744-1.163-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.27.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
                <span>VK</span>
              </a>

              <a
                href="https://yandex.ru/maps/-/CLRVzBZ3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => trackGA4Event('map_click', {
                  location: 'яндекс_карты_соц',
                  map_service: 'yandex_maps'
                })}
              >
                <MapPin size={20} />
                <span>Yandex Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}