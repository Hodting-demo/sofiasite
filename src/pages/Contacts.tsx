import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6"
          >
            Давайте обсудим дела
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-xl leading-relaxed max-w-2xl font-light"
          >
            Мы всегда рады новым партнерам. Позвоните нам или оставьте заявку, и мы найдем лучшие условия для вашего бизнеса.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Info Card */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-xs">
                  <Phone className="h-4 w-4" /> Позвонить
                </div>
                <a href="tel:+79001234567" className="text-2xl font-bold text-stone-900 hover:text-orange-600 transition-colors">
                  +7 (900) 123-45-67
                </a>
                <p className="text-stone-500 text-sm">Отдел продаж оптом. Пн-Пт с 9 до 18.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-xs">
                  <Mail className="h-4 w-4" /> Написать
                </div>
                <a href="mailto:info@good-season.ru" className="text-2xl font-bold text-stone-900 hover:text-orange-600 transition-colors">
                  info@sofia-zadanie.ru
                </a>
                <p className="text-stone-500 text-sm">Для коммерческих предложений и тендеров.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-xs">
                  <MapPin className="h-4 w-4" /> Приехать
                </div>
                <address className="text-2xl font-bold text-stone-900 not-italic leading-tight">
                  г. Москва, ул. Рябиновая, 44, стр. 1
                </address>
                <p className="text-stone-500 text-sm">Складской комплекс «Гринвич».</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-xs">
                  <MessageCircle className="h-4 w-4" /> Мессенджеры
                </div>
                <div className="flex gap-4">
                  <a href="#" className="px-6 py-2 bg-stone-100 rounded-full text-stone-900 font-bold hover:bg-stone-200 transition-all">Telegram</a>
                  <a href="#" className="px-6 py-2 bg-green-50 rounded-full text-green-700 font-bold hover:bg-green-100 transition-all">WhatsApp</a>
                </div>
              </div>
            </div>

            {/* Warehouse Map (Placeholder) */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="./map-placeholder.jpg" 
                alt="Our location" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-600 rounded-full text-white"><Clock className="h-5 w-5" /></div>
                  <div>
                    <span className="block font-bold text-stone-900">Выдача заказов</span>
                    <span className="text-sm text-stone-500 italic">Свободный заезд по паспорту</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-stone-50 p-12 md:p-16 rounded-[3rem] border border-stone-100"
          >
            <h3 className="text-3xl font-bold text-stone-900 mb-8 leading-tight">Оставьте заявку на расчет стоимости</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-stone-200 focus:border-orange-600 outline-none transition-all text-stone-900 text-lg" 
                    placeholder="Александр"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-stone-200 focus:border-orange-600 outline-none transition-all text-stone-900 text-lg" 
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Что вас интересует?</label>
                <select className="w-full px-0 py-4 bg-transparent border-b-2 border-stone-200 focus:border-orange-600 outline-none transition-all text-stone-900 text-lg appearance-none">
                  <option>Оптовый прайс-лист</option>
                  <option>Контрактное производство</option>
                  <option>Закупка для ресторана</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Комментарий</label>
                <textarea 
                  rows={3}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-stone-200 focus:border-orange-600 outline-none transition-all text-stone-900 text-lg resize-none" 
                  placeholder="Расскажите немного о вашей компании"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-6 bg-stone-900 text-white rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-600/20 active:scale-95"
              >
                Отправить запрос <Send className="h-5 w-5" />
              </button>
              <p className="text-xs text-stone-400 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с нашей <a href="#" className="underline decoration-stone-200 hover:decoration-stone-400">политикой обработки данных</a>. Мы не спамим.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
