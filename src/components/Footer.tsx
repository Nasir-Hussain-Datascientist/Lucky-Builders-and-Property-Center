import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-slate-100 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-800 pb-10">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center text-accent">
              <MapPin size={24} />
            </div>
            <h2 className={`text-2xl font-bold ${language === 'ur' ? 'font-urdu' : ''}`}>{t('header.brand')}</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-80 max-w-xs">
            {t('footer.desc')}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">{t('footer.links')}</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-accent transition-colors">{t('header.home')}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">{t('header.about')}</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">{t('header.contact')}</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">{t('footer.social')}</h3>
          <p className="text-sm opacity-80 mb-4">{t('footer.socialDesc')}</p>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p>&copy; {new Date().getFullYear()} Lucky Builders & Property. {t('footer.rights')}</p>
        <p className={language === 'ur' ? 'font-urdu' : ''}>{t('footer.designed')}</p>
      </div>
    </footer>
  );
}
