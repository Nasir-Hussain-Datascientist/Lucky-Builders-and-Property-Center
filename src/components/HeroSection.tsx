import { motion } from "motion/react";
import { PhoneCall, MessageCircle, Building, Home, MapPin, Key } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Real Estate Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-primary/85 md:bg-primary/75 mix-blend-multiply"></div>
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNMCA0MGw0MC00ME0wIDBsNDAgNDAiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIGZpbGw9Im5vbmUiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-20 pointer-events-none z-0"></div>

      {/* Floating Property Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[10%] text-white opacity-[0.07] hidden lg:block pointer-events-none z-10"
      >
        <Home size={100} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[10%] text-white opacity-[0.06] hidden lg:block pointer-events-none z-10"
      >
        <Building size={120} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-[15%] text-accent opacity-20 hidden md:block pointer-events-none z-10"
      >
        <MapPin size={70} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-20 right-[15%] text-accent opacity-20 hidden md:block pointer-events-none z-10"
      >
        <Key size={60} strokeWidth={1.5} />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center py-24 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <Building size={16} className="text-accent" />
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg ${language === 'ur' ? 'font-urdu-nastaliq' : ''}`}
        >
          {t('hero.title')} <br className="hidden sm:block" />
          <span className="text-accent drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-200 mb-10 max-w-xl mx-auto drop-shadow-md"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <a
            href="https://wa.me/923345344087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-accent text-primary hover:bg-accent-light px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-accent/20 hover:-translate-y-1"
          >
            <MessageCircle size={22} className={language === 'ur' ? 'ml-1' : 'mr-1'} />
            {t('hero.whatsapp')}
          </a>
          
          <a
            href="tel:+923345344087"
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
          >
            <PhoneCall size={22} className={language === 'ur' ? 'ml-1' : 'mr-1'} />
            {t('hero.call')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
