import { dataConstTypes } from "@/types/dataTypes"
import { TbContract } from "react-icons/tb";
import { MdOutlineBusiness } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GoLaw } from "react-icons/go";
const iconMap = {
  TbContract: TbContract,
  MdOutlineBusiness: MdOutlineBusiness,
  HiOutlineLightBulb: HiOutlineLightBulb,
  GoLaw: GoLaw
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
      {title: "National and International Contracts", hat: "Business", icon: "TbContract"},
      {title: "New Business Structuring", hat: "Planning", icon: "MdOutlineBusiness"},
      {title: "Business Partnership", hat: "Business", icon: "MdOutlineBusiness"},
      {title: "Startup Advisory", hat: "Consulting", icon: "HiOutlineLightBulb"},
      {title: "Holdings", hat: "Organization", icon: "GoLaw"},
      {title: "Sue Others", hat: "Money", icon: "GoLaw"}

    ],
    "depoimentos": [
      {
        "empresa": "Eletrobrás",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      },
      {
        "empresa": "Teste",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Ótima advogada 2!",
      },
      {
        "empresa": "Ipiranga",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Ótima advogada!",
      }
    ],
    "equipe": {
      "title": "Meet the Napoleon&Tajra team",
      "description": "Founded in 2003 in Brasília, Napoleão e Tajra Advogados is a law firm that provides legal services and consultancy, primarily focused on civil and business law. The firm serves a wide range of companies, including universities, gas station chains, franchisors, construction companies, car rental agencies, financial institutions, health insurance providers, among others. The firm has its own headquarters in Brasília, with a physical structure of 550 square meters."
    },
    "missao": {
      "title": "Legacy",
      "description": "Provide excellent business law services, personalized and focused on the specific needs of each client through a unique combination of professional and academic experience to offer strategic, innovative and effective legal consultancy and representation, ensuring not only legal compliance, but also growth and the prosperity of our customers' businesses."
    },
    "valores": {
      "title": "Values",
      "description": "Having a law firm differentiated by its ability to deliver personalized, innovative and high-impact legal solutions. Aspire to build lasting relationships with customers, based on trust, excellence and results, contributing significantly to the success and evolution of the business scenario."
    },
    "sobre": {
      "title": "About me",
      "description": "EN ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
      {title: "Estruturação de Novos Negócios", hat: "Planejamento", icon: "MdOutlineBusiness"},
      {title: "Sociedade Empresarial", hat: "Empresarial", icon: "MdOutlineBusiness"},
      {title: "Acessoria para StartUps", hat: "Consultoria", icon: "HiOutlineLightBulb"},
      {title: "Holdings", hat: "Organização", icon: "GoLaw"},
      {title: "Processar os Outros", hat: "Dinheiro", icon: "GoLaw"}
    ],
    "depoimentos": [
      {
        "empresa": "Eletrobrás",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Lorem Lorem Lorem Lorem bla bla bla json PT",
      },
      {
        "empresa": "Teste",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Ótima advogada 2!",
      },
      {
        "empresa": "Ipiranga",
        "avatar": "/avatar.png",
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Ótima advogada!",
      }
    ],
    "equipe": {
      "title": "Conheça a equipe Napoleão&Tajra",
      "description": "Constituído em 2003, em Brasília, o Napoleão e Tajra Advogados é um escritório que presta serviços de advocacia e consultoria jurídica com atuação dedicada principalmente à área cível e  empresarial, baseada no atendimento a empresas de diversos seguimentos como universidades, redes de postos de gasolina, franqueadoras, empreiteiras, locadoras de veículos, instituições financeiras, planos de saúde, dentre outros. O escritório possui sede própria em Brasília, com estrutura física de 550 m²."
    },
    "missao": {
      "title": "Missão",
      "description": "Prover serviços de advocacia empresarial de excelência, personalizados e focados nas necessidades específicas de cada cliente por meio uma combinação única de experiência profissional e acadêmica para oferecer consultoria e representação jurídica estratégica, inovadora e eficaz, garantindo não apenas a conformidade legal, mas também o crescimento e a prosperidade dos negócios dos nossos clientes."
    },
    "valores": {
      "title": "Valores",
      "description": "Ter uma advocacia diferenciada pela capacidade de entregar soluções jurídicas personalizadas, inovadoras e de alto impacto. Aspirar a construir relações duradouras com os clientes, fundamentadas na confiança, excelência e resultados, contribuindo significativamente para o sucesso e a evolução do cenário empresarial."
    },
    "sobre": {
      "title": "Sobre mim",
      "description": "PT ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
}
export {dataConst, iconMap}
