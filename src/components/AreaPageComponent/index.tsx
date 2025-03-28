"use client";

import { useLanguage } from "@/components/Context/Language";
import { dataConst, iconMap } from "@/constants/data";
import { MdOutlineBusiness } from "react-icons/md"; // fallback para ícone
import { use } from "react";
import Header from "@/components/Header";
import SectionHeaderCustom from "@/components/SectionHeaderCustom";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
export default function AreaPageComponent({ params }: Params) {
  const { language } = useLanguage();
  const { slug } = use(params);

  const areas = dataConst[language]?.areas;
  console.log(areas);
  console.log(language);
  
  const area = areas?.find((area) => area.slug === `/${slug}`);

  if (!area) return <div>Área não encontrada</div>;

  const Icon = iconMap[area.icon as keyof typeof iconMap] ?? MdOutlineBusiness;

  return (
    <div className="mainConteiner">

      <SectionHeaderCustom
        title={area.title}
        firstDescription="Em breve"
        secondDescription=""
      />
    </div>
  );
}