import { motion } from "motion/react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { t, language } = useLanguage();

  const numbers = [
    { display: "0340-1565551", link: "923401565551" },
    { display: "0334-5344087", link: "923345344087" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-primary text-white relative overflow-hidden">
       {/* Background Graphic Pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none flex items-end justify-center">
        <svg
          className="w-full h-auto min-w-[800px] max-w-7xl"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMax meet"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skyline outline */}
          <path d="M0 400V300h50v-80h60v-40h80v150h70V180h90v220H0z"/>
          <path d="M550 400V200h60v-60h70v90h50v170H550z"/>
          <path d="M800 400V150h90v-50h60v90h80v210H800z"/>
          
          {/* Windows Detail */}
          <rect x="70" y="240" width="10" height="15" />
          <rect x="70" y="270" width="10" height="15" />
          <rect x="130" y="200" width="15" height="15" />
          <rect x="160" y="200" width="15" height="15" />
          <rect x="130" y="230" width="15" height="15" />
          <rect x="160" y="230" width="15" height="15" />
          
          <rect x="580" y="160" width="12" height="20" />
          <rect x="620" y="180" width="12" height="20" />
          
          <rect x="830" y="120" width="15" height="20" />
          <rect x="860" y="120" width="15" height="20" />
          <rect x="830" y="160" width="15" height="20" />
          <rect x="860" y="160" width="15" height="20" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: language === 'ur' ? 30 : -30 }} // Adapting direction
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div>
            <span className="text-accent font-bold tracking-wider text-sm mb-3 block uppercase">{t('contact.badge')}</span>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-white ${language === 'ur' ? 'font-urdu-nastaliq' : ''}`}>{t('contact.heading')}</h2>
            <p className="text-slate-300 opacity-90 text-lg max-w-md">
              {t('contact.text')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">{t('contact.phone')}</p>
                <div className="flex flex-col gap-1">
                  {numbers.map((num, i) => (
                    <a key={i} href={`tel:+${num.link}`} className="text-xl font-bold dir-ltr flex hover:text-accent transition-colors">
                      {num.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Clock className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">{t('contact.hours')}</p>
                <p className="text-lg font-medium text-slate-200">{t('contact.hoursText')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Action Cards */}
        <motion.div
           initial={{ opacity: 0, x: language === 'ur' ? -30 : 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{t('contact.formHeading')}</h3>
          <p className="text-slate-300 text-sm mb-8 relative z-10">{t('contact.actionText')}</p>
          
          <div className="space-y-4 relative z-10">
            {numbers.map((num, i) => (
              <a 
                key={i}
                href={`https://wa.me/${num.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-primary hover:bg-slate-50 font-bold py-4 px-6 rounded-2xl flex items-center justify-between transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle size={22} />
                  </div>
                  <span className="text-lg dir-ltr">{num.display}</span>
                </div>
                <span className={`text-sm text-slate-500 font-medium ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {t('contact.btn')} &rarr;
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
