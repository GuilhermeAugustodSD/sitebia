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

export default function Home() {
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
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
