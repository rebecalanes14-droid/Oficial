"use client";
import { useEffect, useMemo, useState } from "react";

export default function Catalogo() {
  const [origin, setOrigin] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  const pptxUrl = useMemo(() => {
    const fileUrl = `${origin}/catalogo/catalogo-oficial-rainha-do-aco.pptx`;
    const encoded = encodeURIComponent(fileUrl);
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encoded}&wdStartOn=1&wdPrint=1&wdEmbedCode=1`;
  }, [origin]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Catálogo Oficial — <span className="text-brand-gold">Rainha do Aço</span>
        </h1>
        <p className="opacity-80 mb-4">
          Visualização em alta qualidade do PPTX diretamente no navegador. Você pode imprimir ou baixar pelo menu do visor.
        </p>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-elegant bg-black">
          {origin ? (
            <iframe
              title="Catálogo Rainha do Aço"
              src={pptxUrl}
              className="w-full"
              style={{ height: "80vh", border: "0" }}
              allowFullScreen
            />
          ) : (
            <div className="p-10 text-center">Carregando...</div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a href="/catalogo/catalogo-oficial-rainha-do-aco.pptx" download className="px-5 py-3 rounded-2xl bg-brand-gold text-black font-semibold hover:opacity-90 transition shadow-elegant">
            Baixar PPTX
          </a>
          <a href="/" className="px-5 py-3 rounded-2xl border border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-black transition">
            Voltar
          </a>
        </div>
      </section>
    </main>
  );
}
