import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Хороший сезон" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-stone-900 leading-tight">Хороший сезон</span>
              <span className="text-xs text-stone-500 font-medium tracking-wide uppercase">Орехи и сухофрукты</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  isActive(item.path) ? 'text-orange-600' : 'text-stone-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+79001234567" 
              className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all"
            >
              +7 (900) 123-45-67
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-stone-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(item.path) ? 'bg-orange-50 text-orange-600' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+79001234567" 
              className="block px-3 py-3 text-orange-600 font-semibold"
            >
              +7 (900) 123-45-67
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
