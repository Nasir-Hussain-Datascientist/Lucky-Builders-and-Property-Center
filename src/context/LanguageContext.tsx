import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../locales/en';
import { ur } from '../locales/ur';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string | any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ur'); // Default to Urdu

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  const t = (key: string): string | any => {
    const keys = key.split('.');
    let dict: any = language === 'en' ? en : ur;
    
    for (const k of keys) {
      if (dict[k] === undefined) return key;
      dict = dict[k];
    }
    return dict;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
