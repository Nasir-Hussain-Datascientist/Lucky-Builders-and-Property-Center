import { motion } from "motion/react";
import { User, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function OwnersSection() {
  const { t, language } = useLanguage();

  const owners = [
    {
      name: t('experts.names.owner1'),
      title: t('experts.role1'),
      phone: "0334-5344087",
      phone2: "0340-1565551",
      whatsapp: "923345344087",
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-3xl font-extrabold text-primary mb-10 border-s-4 border-accent px-4">{t('experts.heading')}</h3>
        <div className="grid grid-cols-1 gap-6">
          {owners.map((owner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-colors group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100 flex items-center justify-center shadow-inner shrink-0 relative">
                <User size={40} className="text-slate-300" />
              </div>

              <div className="flex-1 text-center sm:text-start w-full">
                <h4 className="font-extrabold text-primary text-3xl mb-2">{owner.name}</h4>
                <p className="text-sm font-semibold tracking-wider text-accent uppercase bg-accent/10 inline-block px-3 py-1 rounded-full mb-6">{owner.title}</p>
                
                <div className={`flex flex-col sm:flex-row items-center gap-4 ${language === 'ur' ? 'sm:justify-start' : 'sm:justify-start'}`}>
                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <div className="flex items-center gap-2">
                       <Phone size={14} className="text-slate-400" />
                       <span className="text-base font-bold text-slate-700 dir-ltr">{owner.phone}</span>
                    </div>
                    {owner.phone2 && (
                       <div className="flex items-center gap-2 mt-1">
                          <Phone size={14} className="text-slate-400" />
                          <span className="text-base font-bold text-slate-700 dir-ltr">{owner.phone2}</span>
                       </div>
                    )}
                  </div>
                  
                  <div className="w-px h-10 bg-slate-200 hidden sm:block mx-4"></div>

                  <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <a
                      href={`https://wa.me/${owner.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
