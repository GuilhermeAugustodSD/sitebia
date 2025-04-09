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
        title="Teste titulo"
        description="TEste desc"
        imageUrl="teste img"
        url="teste url"
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
    </div>
  );
}