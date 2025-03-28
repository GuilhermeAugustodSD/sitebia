import { LanguageProvider } from "@/components/Context/Language";
import '../../../styles/global.scss';

export default function AtuacaooLayout({
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
