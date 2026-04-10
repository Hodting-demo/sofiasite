import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingBag, Truck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover filter brightness-[0.6]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Орехи и сухофрукты, за которые не стыдно
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-10 leading-relaxed font-light">
              Прямой импорт из 12 стран. Мы сами отбираем каждую партию, чтобы вы получили продукт, который захочется покупать снова.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/catalog" 
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Посмотреть каталог <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contacts" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full font-semibold text-lg transition-all"
              >
                Стать партнером
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">О компании</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                Мы — «Хороший сезон». Мы привозим в Россию то, что любим сами.
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed text-lg">
                <p>
                  История компании началась с простого желания найти качественные орехи для своей семьи. Мы поняли, что на рынке много «пластиковых» продуктов, и решили изменить это.
                </p>
                <p>
                  Сегодня мы импортируем орехи и сухофрукты со всего мира: от Узбекистана до Чили. Работаем без лишних посредников, поэтому можем предложить честную цену при премиальном качестве.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-stone-900">5 лет</span>
                  <span className="text-sm text-stone-500 uppercase tracking-tighter font-medium">на рынке</span>
                </div>
                <div className="h-10 w-px bg-stone-200" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-stone-900">50+</span>
                  <span className="text-sm text-stone-500 uppercase tracking-tighter font-medium">позиций</span>
                </div>
                <div className="h-10 w-px bg-stone-200" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-stone-900">1000+</span>
                  <span className="text-sm text-stone-500 uppercase tracking-tighter font-medium">тонн в год</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/nuts-mix.jpg" alt="Nuts" className="rounded-3xl shadow-2xl mt-12 hover:scale-[1.02] transition-transform duration-500" />
              <img src="/dried-fruits.jpg" alt="Dried fruits" className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Почему с нами удобно</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Мы не просто продаем товар, мы выстраиваем партнерство, где каждый уверен в результате.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <CheckCircle2 className="h-8 w-8 text-orange-600" />,
              title: "Контроль качества",
              desc: "Каждая партия проходит тройной контроль: в стране производства, при приемке и перед отгрузкой вам."
            },
            {
              icon: <Truck className="h-8 w-8 text-orange-600" />,
              title: "Гибкая логистика",
              desc: "Собственный склад в Москве позволяет нам быстро отгружать любые объемы — от коробки до фуры."
            },
            {
              icon: <Leaf className="h-8 w-8 text-orange-600" />,
              title: "Натуральность",
              desc: "Мы выбираем продукты без лишних консервантов и добавок. Только то, что дала природа."
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <div className="mb-6 p-4 bg-orange-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">{val.icon}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{val.title}</h3>
              <p className="text-stone-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <ShoppingBag className="h-16 w-16 text-orange-500 mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ищете надежного поставщика?</h2>
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Давайте обсудим условия сотрудничества. Мы готовы предложить индивидуальный прайс и образцы продукции.
          </p>
          <Link 
            to="/contacts" 
            className="px-12 py-5 bg-white text-stone-900 rounded-full font-bold text-xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
