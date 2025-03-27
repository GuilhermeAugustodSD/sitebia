import { dataConstTypes } from "@/types/dataTypes"
import { TbContract } from "react-icons/tb";
import { MdOutlineBusiness } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineStock } from "react-icons/ai";
import { MdModeOfTravel } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
const iconMap = {
  TbContract: TbContract,
  MdOutlineBusiness: MdOutlineBusiness,
  HiOutlineLightBulb: HiOutlineLightBulb,
  PiFileMagnifyingGlassDuotone: PiFileMagnifyingGlassDuotone,
  FaHandshakeSimple: FaHandshakeSimple,
  GiWorld: GiWorld,
  VscLaw: VscLaw,
  AiOutlineStock: AiOutlineStock,
  MdModeOfTravel: MdModeOfTravel,
  IoIosPeople: IoIosPeople
  // adicione outros ícones aqui conforme for usando
};


const dataConst: dataConstTypes = {
  "en": {
    "header": {
      "title": "Excellence Law Firm in Brasília",
      "firstDescription": "Law firm specializing in corporate business law, contracts, succession planning and capital markets, located in the heart of Brazil, combines vast academic and professional experience and offers in-depth theoretical knowledge and up-to-date legal practices, with a focus on personalized solutions for the success and growth of customers.",
      "secondDescription": "Providing a safe haven for legal issues, with advice guided by a commitment to innovation that anticipates trends. Serving both established companies and startups, it promotes sustainable growth through consultancy and legal representation that transcends the traditional, bringing personalized solutions reflecting a genuine dedication to client success."
    },
    "navegacao": [
      {"label": "Home", "link": "home"},
      {"label": "Vision", "link": "visao"},
      {"label": "Areas", "link": "areas-de-atuacao"},
      {"label": "About", "link": "sobre"},
      {"label": "Contact Us", "link": "contato"}
    ],
    "areas": [
      {title: "National and International Contracts", hat: "Corporate and Business", icon: "TbContract"},
      {title: "Corporate agreements", hat: "Corporate and Business", icon: "IoIosPeople"},
      {title: "Due Diligence for Investment", hat: "Corporate and Business", icon: "PiFileMagnifyingGlassDuotone"},
      {title: "Advisory and Consultancy Services for Start-ups ", hat: "Corporate and Business", icon: "HiOutlineLightBulb"},
      {title: "Partnership and Investment Contracts", hat: "Corporate, Business & Private Individuals", icon: "FaHandshakeSimple"},
      {title: "National and international compliance", hat: "Corporate and Business", icon: "GiWorld"},
      {title: "Business Litigation", hat: "Corporate, Business & Private Individuals", icon: "VscLaw"},
      {title: "Capital Market Advisory Services and Representation", hat: "Corporate and Private Individuals", icon: "AiOutlineStock"},
      {title: "Bankruptcy Protection", hat: "Corporate and Business", icon: "MdOutlineBusiness"},
      {title: "Immigration and Naturalisation", hat: "Private individuals", icon: "MdModeOfTravel"}
    ],
    "depoimentos": [
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Name Eletrobrás",
        "cargo": "Presidente",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Participar desse projeto foi transformador. Aprendi muito, cresci pessoal e profissionalmente, e sou grato pela oportunidade de fazer parte de algo tão significativo e inspirador.",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "Presidente",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Participar desse projeto foi transformador. Aprendi muito, cresci pessoal e profissionalmente, e sou grato pela oportunidade de fazer parte de algo tão significativo e inspirador.",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "cargo",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "cargo",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      }
    ],
    "equipe": {
      "title": "Meet the Napoleon&Tajra team",
      "description1": "Founded in 2003, in Brasília, Napoleão e Tajra Advogados is a law firm that provides legal advice and consultancy services, mainly in the civil and business areas, based on assisting companies from various sectors such as universities, gas station chains, franchisors, contractors, car rental companies, financial institutions, insurance companies, and others."
    },
    "missao": {
      "title": "Legacy",
      "description1": "Provide excellent business law services, personalized and focused on the specific needs of each client through a unique combination of professional and academic experience to offer strategic, innovative and effective legal consultancy and representation, ensuring not only legal compliance, but also growth and the prosperity of our customers' businesses."
    },
    "valores": {
      "title": "Values",
      "description1": "Having a law firm differentiated by its ability to deliver personalized, innovative and high-impact legal solutions. Aspire to build lasting relationships with customers, based on trust, excellence and results, contributing significantly to the success and evolution of the business scenario."
    },
    "sobre": {
      "title": "About me",
      "description1": "Lawyer specialist in Corporate Law and Capital Markets at IBMEC, with solid experience in tax litigation and drafting of national and international contracts. Throughout my career, I have acted in negotiations involving strategic partnerships and representation of interests both in Brazil and abroad.  At IOM - International organization for Migration  (UN Migration), I participated in the implementation of national and international projects and partnerships.",
      "description2": "My career also includes significant achievements in international law competitions, such as the Philip C. Jessup International Law Moot Court Competition.",
      "description3": "Languages: Portuguese, English and Japanese."
    }
  },
  "pt": {
    "header": {
      "title": "Advocacia de Exelência em Brasília",
      "firstDescription": "Advocacia especializada em direito empresarial societário, contratos, planejamento sucessório e mercado de capitais, localizada no coração do Brasil, combina vasta experiência acadêmica e profissional e oferece conhecimento teórico profundo e práticas legais atualizadas, com um enfoque em soluções personalizadas para o sucesso e crescimento dos clientes.",
      "secondDescription": "Proporcionando um porto seguro para questões legais, com conselhos guiados pelo comprometimento com a inovação que antecipam tendências. Atendendo tanto empresas estabelecidas quanto startups, promove crescimento sustentável através de consultoria e representação legal que transcende o tradicional, trazendo soluções personalizadas refletindo uma dedicação genuína ao sucesso do cliente."
    },
    "navegacao": [
      {"label": "Inicio", "link": "home"},
      {"label": "Visão", "link": "visao"},
      {"label": "Áreas de Atuação", "link": "areas-de-atuacao"},
      {"label": "Sobre", "link": "sobre"},
      {"label": "Entre em Contato", "link": "contato"}
    ],
    "areas": [
      {title: "Contratos Nacionais e Internacionais", hat: "Empresarial", icon: "TbContract"},
      {title: "Contratos Societários", hat: "Empresarial", icon: "IoIosPeople"},
      {title: "Due Diligence para Investimentos", hat: "Empresarial", icon: "PiFileMagnifyingGlassDuotone"},
      {title: "Acessoria para StartUps", hat: "Consultoria", icon: "HiOutlineLightBulb"},
      {title: "Contratos de Parcerias e Investimentos", hat: "Empresarial", icon: "FaHandshakeSimple"},
      {title: "Compliance Nacional e Internacional", hat: "Empresarial", icon: "GiWorld"},
      {title: "Ações de Cobranças e outros Litígios Empresariais", hat: "Empresarial e PF", icon: "VscLaw"},
      {title: "Assesoria e representação no Mercado de Capitais", hat: "Empresarial e PF", icon: "AiOutlineStock"},
      {title: "Recuperação Judicial e Extrajudicial", hat: "Empresarial", icon: "MdOutlineBusiness"},
      {title: "Processos de Imigração e Naturalização", hat: "Pessoa Física", icon: "MdModeOfTravel"}
    ],
    "depoimentos": [
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Name Eletrobrás",
        "cargo": "Presidente",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Participar desse projeto foi transformador. Aprendi muito, cresci pessoal e profissionalmente, e sou grato pela oportunidade de fazer parte de algo tão significativo e inspirador.",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "Presidente",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Participar desse projeto foi transformador. Aprendi muito, cresci pessoal e profissionalmente, e sou grato pela oportunidade de fazer parte de algo tão significativo e inspirador.",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "cargo",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      },
      {
        "empresa": "Eletrobrás",
        "company": "Eletrobrás",
        "name": "Eletrobrás",
        "cargo": "cargo",
        "avatar": "/avatar.png",
        "picture": "/avatar.png",
        "grade": 4,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      }
    ],
    "equipe": {
      "title": "Conheça a equipe Napoleão&Tajra",
      "description1": "Constituído em 2003, em Brasília, o Napoleão e Tajra Advogados é um escritório que presta serviços de advocacia e consultoria jurídica com atuação dedicada principalmente à área cível e  empresarial, baseada no atendimento a empresas de diversos seguimentos como universidades, redes de postos de gasolina, franqueadoras, empreiteiras, locadoras de veículos, instituições financeiras, planos de saúde, dentre outros.",
      "description2": "O escritório possui sede própria em Brasília, com estrutura física de 550 m²."
    },
    "missao": {
      "title": "Missão",
      "description1": "Prover serviços de advocacia empresarial de excelência, personalizados e focados nas necessidades específicas de cada cliente por meio uma combinação única de experiência profissional e acadêmica para oferecer consultoria e representação jurídica estratégica, inovadora e eficaz, garantindo não apenas a conformidade legal, mas também o crescimento e a prosperidade dos negócios dos nossos clientes."
    },
    "valores": {
      "title": "Valores",
      "description1": "Ter uma advocacia diferenciada pela capacidade de entregar soluções jurídicas personalizadas, inovadoras e de alto impacto. Aspirar a construir relações duradouras com os clientes, fundamentadas na confiança, excelência e resultados, contribuindo significativamente para o sucesso e a evolução do cenário empresarial."
    },
    "sobre": {
      "title": "Sobre mim",
      "description1": "Advogada especializada em Direito Societário e Mercado de Capitais pelo IBMEC, com sólida experiência em contencioso tributário e elaboração de contratos nacionais e internacionais. Atualmente, faço parte do quadro de advogados do escritório Napoleão & Tajra.  Ao longo da minha carreira, atuei, juntamente a outros advogados brilhantes, em negociações envolvendo parcerias estratégicas e representação de interesses tanto no Brasil quanto no exterior. Com passagem pela ONU Migração (Agência da Organização das Nações Unidas para Migrações), participei na implementação de projetos e parcerias nacionais internacionais.",
      "description2": "Minha trajetória inclui conquistas significativas em competições internacionais de Direito Internacional, como a Philip C. Jessup International Law Moot Court Competition.",
      "description3": "Idiomas: Português, Inglês e Japonês."
    }
  }
}
export {dataConst, iconMap}
