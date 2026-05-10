import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        console.warn(`Translation missing for key: ${path} in language ${language}`);
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
