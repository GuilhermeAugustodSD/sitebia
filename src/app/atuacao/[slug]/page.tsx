import { use } from "react";
import Header from "@/components/Header";
import AreaPageComponent from "@/components/AreaPageComponent";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
export default function AreaPage({ params }: Params) {
  const { slug } = use(params);


  return (
    <div className="mainConteiner">
      <Header
        title={"siteTitle"}
        description={"Description"}
        menuItems={"primaryMenu"}
      />

      <main>
        <AreaPageComponent params={params}/>
      </main>
    </div>
  );
}