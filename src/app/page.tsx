import Image from "next/image";
import "../styles/global.scss";
import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import Visao from "@/components/Visao";
import Areas from "@/components/Areas";
import Contato from "@/components/Contato";
import Sobre from "@/components/Sobre";
import Equipe from "@/components/Equipe";
import Depoimentos from "@/components/Depoimentos";

export default function Home() {
  return (
    <div className="mainConteiner">
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

        <Equipe />

         <Depoimentos />
      </main>
    </div>
  );
}
