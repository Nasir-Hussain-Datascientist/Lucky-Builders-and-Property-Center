import { motion } from "motion/react";
import { ShieldCheck, Handshake, Clock, Map, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function WhyChooseUsSection() {
  const { t, language } = useLanguage();

  const reasons = [
    { icon: <ShieldCheck size={28} className="text-accent" />, title: t('features.f1') },
    { icon: <Handshake size={28} className="text-accent" />, title: t('features.f2') },
    { icon: <Clock size={28} className="text-accent" />, title: t('features.f3') },
    { icon: <Map size={28} className="text-accent" />, title: t('features.f4') },
    { icon: <Users size={28} className="text-accent" />, title: t('features.f5') },
  ];

  return (
    <section className="py-24 px-4 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider text-sm mb-3 block uppercase">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              {t('features.heading')}
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-colors mb-6">
                <div className="group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
              </div>
              <span className="text-xl font-bold text-primary">{reason.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
