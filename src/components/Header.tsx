import { MapPin, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="h-16 px-6 sm:px-10 border-b border-gray-200 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
           <MapPin size={24} className="text-accent" />
        </div>
        <span className={`text-2xl font-bold text-primary ${language === 'ur' ? 'font-urdu' : ''} hidden sm:block`}>
          {t('header.brand')}
        </span>
      </div>
      <nav className={`flex gap-6 sm:gap-8 items-center text-sm font-semibold text-primary ${language === 'ur' ? 'font-urdu' : ''}`}>
        <a href="#" className="hover:text-accent transition-colors">{t('header.home')}</a>
        <a href="#" className="hover:text-accent transition-colors">{t('header.about')}</a>
        <a href="#contact" className="hover:text-accent transition-colors">{t('header.contact')}</a>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-primary px-3 py-1.5 rounded-full transition-colors ml-4"
        >
          <Globe size={16} className="text-accent" />
          <span className="font-urdu">{t('header.toggle')}</span>
        </button>
      </nav>
    </header>
  );
}
