import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="./logo.png" alt="Хороший сезон" className="h-10 w-10 brightness-110" />
              <span className="text-xl font-bold text-white transition-colors group-hover:text-orange-400">Хороший сезон</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-stone-400">
              Поставляем только проверенные орехи и сухофрукты напрямую от производителей с 2018 года. Качество, которое можно попробовать.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Разделы</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-sm hover:text-white transition-colors">Каталог продукции</Link></li>
              <li><Link to="/contacts" className="text-sm hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Связь с нами</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm">г. Москва, ул. Софии, 1, стр. 1<br/><span className="text-stone-500">Пн — Пт: 9:00 - 18:00</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+79001234567" className="text-sm hover:text-white">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@good-season.ru" className="text-sm hover:text-white">Sofia-CEO@zadanie.ru</a>
              </li>
            </ul>
          </div>

          {/* Socials & Subscribe */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Будьте в курсе</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-all">
                <Send className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-all">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-all">
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-stone-500">Подпишитесь на наши новости и получите скидку 5% на первый оптовый заказ.</p>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500 uppercase tracking-widest">© 2026 ООО «Задание Софии». Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-stone-600 hover:text-stone-400 uppercase tracking-widest">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-stone-600 hover:text-stone-400 uppercase tracking-widest">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
