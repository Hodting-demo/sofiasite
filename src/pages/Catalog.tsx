import { motion } from 'framer-motion';
import { Leaf, Award, ShieldCheck, ShoppingCart } from 'lucide-react';

const categories = [
  {
    title: "Орехи",
    description: "Цельные, хрустящие, идеально очищенные. От классического миндаля до премиальной макадамии.",
    items: [
      { name: "Миндаль жареный", origin: "США/Чили", price: "от 650 ₽/кг" },
      { name: "Кешью крупный", origin: "Вьетнам", price: "от 780 ₽/кг" },
      { name: "Фундук очищенный", origin: "Грузия/Турция", price: "от 720 ₽/кг" },
      { name: "Грецкий орех экстра", origin: "Россия/Чили", price: "от 600 ₽/кг" },
      { name: "Макадамия в скорлупе", origin: "ЮАР/Австралия", price: "от 850 ₽/кг" },
      { name: "Фисташки жареные", origin: "Иран", price: "от 950 ₽/кг" },
    ]
  },
  {
    title: "Сухофрукты",
    description: "Естественной сушки, без лишнего сахара и ярких красителей. Только вкус солнца.",
    items: [
      { name: "Курага темная (шоколадная)", origin: "Узбекистан", price: "от 550 ₽/кг" },
      { name: "Чернослив без косточки", origin: "Чили/Армения", price: "от 480 ₽/кг" },
      { name: "Манго сушеное натуральное", origin: "Вьетнам", price: "от 1100 ₽/кг" },
      { name: "Инжир сушеный", origin: "Турция", price: "от 620 ₽/кг" },
      { name: "Финики королевские", origin: "Израиль/Иран", price: "от 750 ₽/кг" },
      { name: "Изюм голден", origin: "Узбекистан", price: "от 380 ₽/кг" },
    ]
  }
];

const Catalog = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Наш ассортимент
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-lg leading-relaxed"
          >
            Мы отобрали лучшие позиции, которые пользуются стабильным спросом у ритейла и ресторанов. Цены указаны для оптовых закупок от 10 кг.
          </motion.p>
        </header>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">{cat.title}</h2>
                <p className="text-stone-500 max-w-xl italic">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 group hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                      <span className="text-xs font-bold bg-stone-100 text-stone-500 px-2 py-1 rounded uppercase tracking-wider">{item.origin}</span>
                    </div>
                    <div className="flex items-center justify-between mt-8 border-t border-stone-100 pt-4">
                      <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                      <button className="flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors">
                        <ShoppingCart className="h-4 w-4" /> В заказ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bars */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-200 pt-16">
          <div className="flex gap-4 items-start">
            <Leaf className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-stone-900 mb-2">100% Эко</h4>
              <p className="text-sm text-stone-500">Только натуральное сырье без ГМО и химии.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Award className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-stone-900 mb-2">Сертификаты</h4>
              <p className="text-sm text-stone-500">Полный пакет документов (Декларации соответствия, EAC).</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <ShieldCheck className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-stone-900 mb-2">Гарантия возврата</h4>
              <p className="text-sm text-stone-500">Если качество не устроит — заменим или вернем деньги без лишних вопросов.</p>
            </div>
          </div>
        </div>

        {/* Catalog Banner */}
        <div className="mt-24 p-12 bg-stone-900 rounded-[3rem] text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="/hero.jpg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Нужен полный прайс-лист?</h2>
            <p className="text-stone-400 mb-10 max-w-xl mx-auto">Оставьте почту, и мы пришлем актуальный каталог с ценами на все позиции в течение 10 минут.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ваша почта" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-full font-bold transition-all shadow-lg shadow-orange-600/20">
                Получить прайс
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
