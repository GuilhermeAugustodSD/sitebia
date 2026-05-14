import Image from "next/image";
import "../styles/global.scss";
import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import Visao from "@/components/Visao";
import Areas from "@/components/Areas";
import Contato from "@/components/Contato";
import Sobre from "@/components/Sobre";
// import Equipe from "@/components/Equipe";
// import Depoimentos from "@/components/Depoimentos";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TestimonialsPage from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { GetStaticProps } from "next";

type Review = {
  user: {
    name: string;
    thumbnail: string;
  };
  rating: number;
  link: string;
  extracted_snippet: {
    original: string;
    translated: string;
  };
  date: string;
};

export default async function Home() {

  const res = await fetch('http://static.beatrizdantas.adv.br:8080/reviews.json', {
    // forçar cache build time, como getStaticProps
    cache: 'force-cache', // padrão
    next: { revalidate: 3600 }, // revalida a cada 1h
  });

  const data = await res.json();
  const reviews: Review[] = data.reviews || [];

  return (
    <div className="mainConteiner">
      <SEO
        title="Beatriz Dantas - Advocacia Empresarial de Excelência em Brasília"
        description="Advocacia especializada em direito empresarial, societário, contratos e mercado de capitais. No centro do Brasil, une experiência acadêmica e prática, com soluções jurídicas personalizadas para o crescimento e sucesso da sua empresa."
        imageUrl="https://www.beatrizdantas.adv.br/logo-bia.png"
        url="https://www.beatrizdantas.adv.br"
      />
      <Header
        title={"siteTitle"}
        description={"Description"}
        menuItems={"primaryMenu"}
      />

      <main>
        <SectionHeader />

        <Visao />

        <Areas />

        <Contato />

        <Sobre />

        {/* <Equipe /> */}

        {/* <Depoimentos /> */}
        <Testimonials reviews={reviews} />
      </main>

      <Footer />
      
      <FloatingWhatsApp />
    </div>
  );
}