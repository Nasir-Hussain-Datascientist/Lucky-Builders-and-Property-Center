import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function FloatingWhatsApp() {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed bottom-6 ${language === 'ur' ? 'left-6' : 'right-6'} z-50 bg-white p-1 rounded-full shadow-2xl border border-slate-100 group`}
    >
      <a
        href="https://wa.me/923345344087"
        target="_blank"
        rel="noopener noreferrer"
        className="h-16 w-16 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all shadow-lg"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:animate-pulse" />
      </a>
      
      {/* Tooltip */}
      <span className={`absolute ${language === 'ur' ? 'left-full ml-4 dir-rtl' : 'right-full mr-4 dir-ltr'} top-1/2 -translate-y-1/2 bg-white text-primary text-sm font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100`}>
        {t('hero.whatsapp')}
      </span>
    </motion.div>
  );
}
