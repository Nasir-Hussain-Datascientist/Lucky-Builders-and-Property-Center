import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function AreasSection() {
  const { t, language } = useLanguage();
  const areasList = t('areas.list');

  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Decorative City Graphic Background */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none w-full h-[300px]">
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full text-primary" fill="currentColor">
          <path d="M0 300V250h50v-50h60v-80h80v130h70V120h90v280H0z"/>
          <path d="M350 300V150h60V80h70v70h50v250H350z"/>
          <path d="M530 300V200h80v-50h70v50h60v200H530z"/>
          <path d="M740 300V100h90v-60h60v60h80v300H740z"/>
          <path d="M970 300V180h50v-70h70v70h60v220H970z"/>
          <path d="M1150 300V260h50v140h-50z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-3xl font-extrabold text-primary mb-12 border-s-4 border-accent px-4 text-center md:text-start">{t('areas.heading')}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasList.map((area: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 border border-slate-200 hover:border-accent/40 transition-all flex flex-col justify-between group"
            >
              <div className="mb-4">
                <h5 className="font-bold text-primary text-xl mb-2 group-hover:text-accent transition-colors">{area.name}</h5>
                <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full font-bold tracking-wide">
                    {t('areas.status')}
                  </span>
                  <a href="#contact" className="text-accent hover:text-primary flex items-center gap-1 text-xs font-bold transition-colors">
                    {language === 'ur' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    {t('areas.details')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
