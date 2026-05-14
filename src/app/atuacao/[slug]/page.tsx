import Header from "@/components/Header";
import AreaPageComponent from "@/components/AreaPageComponent";
import type { WordPressPage } from "@/components/AreaPageComponent";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

async function getWordPressPage(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await fetch(
      `https://wp.beatrizdantas.adv.br/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const pages: WordPressPage[] = await response.json();

    return pages?.[0] ?? null;
  } catch {
    return null;
  }
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const wpPage = await getWordPressPage(slug);

  return (
    <div className="mainConteiner">
      <Header
        title={"siteTitle"}
        description={"Description"}
        menuItems={"primaryMenu"}
      />

      <main>
        <AreaPageComponent slug={slug} wpPage={wpPage}/>
      </main>
    </div>
  );
}