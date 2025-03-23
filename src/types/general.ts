export interface HeaderTypes {
  title: string
  firstDescription: string
  secondDescription: string
}

export interface HeaderTypes2 {
  title: string
  description: string
  menuItems: string
} 

export type Language = 'en' | 'pt'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}