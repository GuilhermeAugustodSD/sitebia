"use client";

import "./index.scss";
import { useLanguage } from "@/components/Context/Language";
import { dataConst } from "@/constants/data";
import SectionHeaderCustom from "@/components/SectionHeaderCustom";

export type WordPressPage = {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
};

type AreaPageComponentProps = {
  slug: string;
  wpPage: WordPressPage | null;
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function AreaPageComponent({ slug, wpPage }: AreaPageComponentProps) {
  const { language } = useLanguage();

  const areas = dataConst[language]?.areas;
  const area = areas?.find((area) => area.slug === `/${slug}`);

  const title = wpPage?.title.rendered || area?.title || "Área de Atuação";
  const excerpt = stripHtml(wpPage?.excerpt?.rendered);
  const content = wpPage?.content.rendered;
  const emptyMessage = area
    ? "Conteúdo em atualização no WordPress."
    : "Área não encontrada no WordPress.";

  return (
    <div className="mainConteiner">
      <SectionHeaderCustom
        title={title}
        firstDescription={excerpt || "Conteúdo em atualização."}
        secondDescription=""
      />

      {content ? (
        <section className="areaContent">
          <div
            className="areaContentInner"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      ) : (
        <section className="areaContent">
          <div className="areaContentInner">
            <p>{emptyMessage}</p>
          </div>
        </section>
      )}
    </div>
  );
}