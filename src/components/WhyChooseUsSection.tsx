import { motion } from "motion/react";
import { ShieldCheck, Handshake, Clock, Map, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const reasons = [
    { icon: <ShieldCheck size={24} className="text-accent" />, title: t('features.f1') },
    { icon: <Handshake size={24} className="text-accent" />, title: t('features.f2') },
    { icon: <Clock size={24} className="text-accent" />, title: t('features.f3') },
    { icon: <Map size={24} className="text-accent" />, title: t('features.f4') },
    { icon: <Users size={24} className="text-accent" />, title: t('features.f5') },
  ];

  return (
    <section className="py-20 px-4 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Real Estate Theme Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex justify-center items-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-primary"
          >
            {t('features.heading')}
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 bg-slate-50 rounded-2xl flex flex-col items-center text-center border border-slate-200 min-w-[140px] shadow-sm"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                {reason.icon}
              </div>
              <span className="text-sm font-bold text-primary">{reason.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
