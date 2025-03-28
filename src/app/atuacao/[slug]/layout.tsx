import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LanguageProvider } from "@/components/Context/Language";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beatriz Dantas - Advogada Empresarial",
  description: "Advocacia especializada em direito empresarial, societário, contratos, sucessão e mercado de capitais. No centro do Brasil, une experiência acadêmica e prática, com soluções jurídicas personalizadas e atualizadas para o crescimento e sucesso dos clientes.",
  keywords: "Advocacia empresarial, Direito empresarial, Direito societário, Planejamento sucessório, Contratos empresariais, Mercado de capitais, Advogada empresarial, Escritório de advocacia empresarial, Assessoria jurídica empresarial, Soluções jurídicas personalizadas, Experiência acadêmica e prática, Estratégias jurídicas para empresas, Direito para empresas, Consultoria jurídica empresarial, Direito das sociedades, Direito contratual empresarial, Advocacia no Brasil, Escritório no centro do Brasil, Especialista em direito societário, Advogada de empresas",
  robots: "index, follow",
  authors: [{ name: "Beatriz Dantas" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Analytics */}
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4LV1XJLYYS"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4LV1XJLYYS', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /> */}

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
