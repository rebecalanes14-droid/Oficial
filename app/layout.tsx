import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Rainha do Aço — Catálogo Oficial",
  description: "Portas automáticas de enrolar de alto padrão — Tecnologia Alemã | Linha Titanium Force",
  metadataBase: new URL("https://rainha-do-aco.vercel.app"),
  openGraph: {
    title: "Rainha do Aço — Catálogo Oficial",
    description: "Conheça nossos projetos e diferenciais exclusivos",
    type: "website",
    url: "https://rainha-do-aco.vercel.app",
    images: ["/logo-rainha.svg"],
  },
  icons: {
    icon: "/logo-rainha.svg",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
