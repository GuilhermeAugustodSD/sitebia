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
};


const dataConst: dataConstTypes = {
  "en": {
    "header": {
      "title": "Excellence Law Firm in Brasília",
      "firstDescription": "A law firm specializing in corporate law, contracts and capital markets, located in the heart of Brazil, it combines vast academic and professional experience with a focus on customized solutions for the success and growth of your company.",
      "secondDescription": "Providing a safe haven for legal issues for both established companies and startups, promoting sustainable growth through legal advice and representation that transcends the traditional, bringing customized solutions reflecting a genuine dedication to client success."
    },
    "navegacao": [
      {"label": "Home", "link": "home"},
      {"label": "Vision", "link": "visao"},
      {"label": "Areas", "link": "areas-de-atuacao"},
      {"label": "About", "link": "sobre"},
      {"label": "Contact Us", "link": "contato"}
    ],
    "areas": [
      {title: "National and International Contracts", hat: "Corporate and Business", icon: "TbContract", slug: "/contratos-nacionais-internacionais"},
      {title: "Corporate agreements", hat: "Corporate and Business", icon: "IoIosPeople", slug: "/contratos-societarios"},
      {title: "Due Diligence for Investment", hat: "Corporate and Business", icon: "PiFileMagnifyingGlassDuotone", slug: "/due-diligence-investimentos"},
      {title: "Advisory and Consultancy Services for Start-ups ", hat: "Corporate and Business", icon: "HiOutlineLightBulb", slug: "/assessoria-startups"},
      {title: "Partnership and Investment Contracts", hat: "Corporate, Business & Private Individuals", icon: "FaHandshakeSimple", slug: "/contratos-parcerias-investimentos"},
      {title: "National and international compliance", hat: "Corporate and Business", icon: "GiWorld", slug: "/compliance-nacional-internacional"},
      {title: "Business Litigation", hat: "Corporate, Business & Private Individuals", icon: "VscLaw", slug: "/cobrancas-litigios-empresariais"},
      {title: "Capital Market Advisory Services and Representation", hat: "Corporate and Private Individuals", icon: "AiOutlineStock", slug: "/mercado-de-capitais"},
      {title: "Bankruptcy Protection", hat: "Corporate and Business", icon: "MdOutlineBusiness", slug: "/recuperacao-judicial-extrajudicial"},
      {title: "Immigration and Naturalisation", hat: "Private individuals", icon: "MdModeOfTravel", slug: "/imigracao-naturalizacao"}
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
      "description1": "Providing excellent business law services, personalized and focused on the specific needs of each client to offer strategic, innovative and effective legal advice and representation, guaranteeing not only legal compliance, but also the growth and prosperity of our clients' businesses."
    },
    "valores": {
      "title": "Values",
      "description1": "A legal practice capable of delivering personalized, innovative and high-impact legal solutions to build lasting relationships with clients, based on trust, excellence and results."
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
      "title": "Advocacia de Excelência em Brasília",
      "firstDescription": "Advocacia especializada em direito empresarial societário, contratos e mercado de capitais, localizada no coração do Brasil, combina vasta experiência acadêmica e profissional com um enfoque em soluções personalizadas para o sucesso e crescimento da sua empresas.",
      "secondDescription": "Proporcionando um porto seguro para questões legais, tanto para empresas estabelecidas quanto para startups, promovendo crescimento sustentável através de consultoria e representação legal que transcende o tradicional, trazendo soluções personalizadas refletindo uma dedicação genuína ao sucesso do cliente."
    },
    "navegacao": [
      {"label": "Inicio", "link": "home"},
      {"label": "Visão", "link": "visao"},
      {"label": "Áreas de Atuação", "link": "areas-de-atuacao"},
      {"label": "Sobre", "link": "sobre"},
      {"label": "Entre em Contato", "link": "contato"}
    ],
    "areas": [
      {title: "Contratos Nacionais e Internacionais", hat: "Empresarial", icon: "TbContract", slug: "/contratos-nacionais-internacionais" },
      {title: "Contratos Societários", hat: "Empresarial", icon: "IoIosPeople", slug: "/contratos-societarios" },
      {title: "Due Diligence para Investimentos", hat: "Empresarial", icon: "PiFileMagnifyingGlassDuotone", slug: "/due-diligence-investimentos" },
      {title: "Assessoria para StartUps", hat: "Consultoria", icon: "HiOutlineLightBulb", slug: "/assessoria-startups" },
      {title: "Contratos de Parcerias e Investimentos", hat: "Empresarial", icon: "FaHandshakeSimple", slug: "/contratos-parcerias-investimentos" },
      {title: "Compliance Nacional e Internacional", hat: "Empresarial", icon: "GiWorld", slug: "/compliance-nacional-internacional" },
      {title: "Ações de Cobranças e outros Litígios Empresariais", hat: "Empresarial e PF", icon: "VscLaw", slug: "/cobrancas-litigios-empresariais" },
      {title: "Assessoria e representação no Mercado de Capitais", hat: "Empresarial e PF", icon: "AiOutlineStock", slug: "/mercado-de-capitais" },
      {title: "Recuperação Judicial e Extrajudicial", hat: "Empresarial", icon: "MdOutlineBusiness", slug: "/recuperacao-judicial-extrajudicial" },
      {title: "Processos de Imigração e Naturalização", hat: "Pessoa Física", icon: "MdModeOfTravel", slug: "/imigracao-naturalizacao" }
    ],
    "depoimentos": [
      {
        "empresa": "D'Leads",
        "company": "D'Leads",
        "name": "Vinícius Valim",
        "cargo": "Co-fundador",
        "avatar": "/vini.png",
        "picture": "/vini.png",
        "grade": 5,
        "link": "https://escolhaaescola.correiobraziliense.com.br",
        "description": "Quero deixar registrado o quanto estou satisfeito com o trabalho da Dra. Beatriz Helena. Ela tem sido uma parceira incrível aqui na empresa, sempre trazendo soluções jurídicas rápidas, claras e que realmente funcionam. Além de ser super profissional, ela manda muito bem no que faz e passa uma segurança que a gente precisa pra tocar o negócio com tranquilidade. Recomendo de olhos fechados!",
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
      "description1": "Prover serviços de advocacia empresarial de excelência, personalizados e focados nas necessidades específicas de cada cliente para oferecer consultoria e representação jurídica estratégica, inovadora e eficaz, garantindo não apenas a conformidade legal, mas também o crescimento e a prosperidade dos negócios dos nossos clientes."
    },
    "valores": {
      "title": "Valores",
      "description1": "Advocacia capaz de entregar soluções jurídicas personalizadas, inovadoras e de alto impacto para construir relações duradouras com os clientes, fundamentadas na confiança, excelência e resultados."
    },
    "sobre": {
      "title": "Sobre mim",
      "description1": "Advogada especializada em Direito Societário e Mercado de Capitais pelo IBMEC, com sólida experiência em contencioso tributário e elaboração de contratos nacionais e internacionais. Ao longo da minha carreira, atuei, juntamente a outros advogados brilhantes, em negociações envolvendo parcerias estratégicas e representação de interesses tanto no Brasil quanto no exterior.  Com passagem pela ONU Migração (Agência da Organização das Nações Unidas para Migrações), participei na implementação de projetos e parcerias nacionais internacionais.",
      "description2": "Minha trajetória inclui conquistas significativas em competições internacionais de Direito Internacional, como a Philip C. Jessup International Law Moot Court Competition.",
      "description3": "Idiomas: Português, Inglês e Japonês."
    }
  }
}
export {dataConst, iconMap}
