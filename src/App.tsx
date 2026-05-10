/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OwnersSection } from "./components/OwnersSection";
import { AreasSection } from "./components/AreasSection";
import { AddressSection } from "./components/AddressSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { language } = useLanguage();
  
  return (
    <div dir={language === 'ur' ? 'rtl' : 'ltr'} className={`min-h-screen text-slate-800 selection:bg-accent/30 selection:text-slate-900 bg-slate-50 ${language === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <OwnersSection />
      <AreasSection />
      <AddressSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
