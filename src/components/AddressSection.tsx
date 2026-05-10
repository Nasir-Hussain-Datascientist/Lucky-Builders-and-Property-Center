import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function AddressSection() {
  const { t, language } = useLanguage();

  return (
    <section className="pb-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-primary text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-xl shadow-primary/20"
        >
          {/* Real estate decorative element */}
          <div className="absolute inset-x-0 bottom-0 opacity-10 pointer-events-none flex justify-end">
            <svg
              className="w-full h-auto max-h-48"
              viewBox="0 0 600 200"
              preserveAspectRatio="xMaxYMax meet"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M400 200V100h30V60h40v40h30v100h-100z"/>
               <path d="M500 200V120h40V80h30v120h-70z"/>
               <rect x="410" y="120" width="10" height="15" fill="white" />
               <rect x="430" y="120" width="10" height="15" fill="white" />
               <rect x="410" y="150" width="10" height="15" fill="white" />
               <rect x="430" y="150" width="10" height="15" fill="white" />
               <rect x="520" y="140" width="15" height="15" fill="white" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-start">
              <h3 className={`text-2xl font-bold mb-4 text-white ${language === 'ur' ? 'font-urdu' : ''}`}>
                {t('address.heading')}
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
                {t('address.text')}
              </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
