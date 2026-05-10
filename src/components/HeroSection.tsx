import { motion } from "motion/react";
import { PhoneCall, MessageCircle, Building } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-white border-b border-slate-50">
      {/* Real Estate Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-end justify-center text-primary">
        <svg
          className="w-full h-auto min-w-[800px] max-w-7xl"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMax meet"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skyline pattern */}
          <path d="M0 400V250h50v-50h60v-80h80v130h70V120h90v280H0z"/>
          <path d="M350 400V150h60V80h70v70h50v250H350z"/>
          <path d="M530 400V200h80v-50h70v50h60v200H530z"/>
          <path d="M740 400V100h90v-60h60v60h80v300H740z"/>
          <path d="M970 400V180h50v-70h70v70h60v220H970z"/>
          <path d="M1150 400V260h50v140h-50z"/>
          {/* Windows */}
          <rect x="70" y="220" width="10" height="15" fill="white" />
          <rect x="90" y="220" width="10" height="15" fill="white" />
          <rect x="70" y="250" width="10" height="15" fill="white" />
          <rect x="90" y="250" width="10" height="15" fill="white" />
          <rect x="130" y="150" width="15" height="15" fill="white" />
          <rect x="155" y="150" width="15" height="15" fill="white" />
          <rect x="130" y="180" width="15" height="15" fill="white" />
          <rect x="155" y="180" width="15" height="15" fill="white" />
        </svg>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNMCA0MGw0MC00ME0wIDBsNDAgNDAiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIGZpbGw9Im5vbmUiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center py-20 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2 bg-slate-50 text-slate-800 rounded-full text-sm font-bold border border-slate-200 shadow-sm"
        >
          <Building size={16} className="text-accent" />
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-primary ${language === 'ur' ? 'font-urdu-nastaliq' : ''}`}
        >
          {t('hero.title')} <br className="hidden sm:block" />
          <span className="text-accent">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl mx-auto"
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
            href="https://wa.me/923401565551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-primary text-white hover:bg-primary-light px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            <MessageCircle size={22} className={language === 'ur' ? 'ml-1' : 'mr-1'} />
            {t('hero.whatsapp')}
          </a>
          
          <a
            href="tel:+923401565551"
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 border-2 border-primary text-primary hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
          >
            <PhoneCall size={22} className={language === 'ur' ? 'ml-1' : 'mr-1'} />
            {t('hero.call')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
