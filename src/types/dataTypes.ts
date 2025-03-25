export type Language = 'en' | 'pt'

export type Section = {
  title: string
  description1: string
  description2?: string
  description3?: string
}

export type Header = {
  title: string
  firstDescription: string
  secondDescription: string
}

export type Depoimento = {
  empresa: string
  avatar: string
  link: string
  description: string
}

export type Navegacao = {
  label: string
  link: string
}

export type Areas = {
  title: string
  hat: string
  icon: any
}

export type LanguageContent = {
  header: Header
  navegacao: Navegacao[]
  areas: Areas[]
  depoimentos: Depoimento[]
  equipe: Section
  missao: Section
  valores: Section
  sobre: Section
}

export type dataConstTypes = Record<Language, LanguageContent>