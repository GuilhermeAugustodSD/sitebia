import { LanguageProvider } from "@/components/Context/Language";

export default function AtuaçãoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
