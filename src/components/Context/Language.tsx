'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { dataConst } from '@/constants/data';
import type { Language, LanguageContent, dataConstTypes } from '@/types/dataTypes';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: LanguageContent;
}

const MeuContexto = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt'); 
  const [content, setContent] = useState<LanguageContent>(dataConst.pt); // valor inicial

  useEffect(() => {
    setContent(dataConst[language]);
  }, [language]);

  const value: LanguageContextType = { language, setLanguage, content };

  return <MeuContexto.Provider value={value}>{children}</MeuContexto.Provider>;
};

export const useLanguage = () => {
  const context = useContext(MeuContexto);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
