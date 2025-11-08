import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center text-center gap-6">
            <img src="/logo-rainha.svg" alt="Rainha do Aço" className="w-56 h-auto shadow-elegant rounded-2xl" />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Bem-vinda à <span className="text-brand-gold">Rainha do Aço</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              Maior indústria de portas inteligentes do ES. Aço GL Galvalume, Chapa 18 (1,20mm), Motor Titanium Force,
              Perfiladeira Alemã e Garantia real de 8 anos.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Link href="/catalogo" className="px-6 py-3 rounded-2xl bg-brand-gold text-black font-semibold hover:opacity-90 transition shadow-elegant">
                Abrir Catálogo Oficial
              </Link>
              <a href="https://wa.me/5527999999999" className="px-6 py-3 rounded-2xl border border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-black transition">
                Falar no WhatsApp
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="rounded-2xl bg-[#121212] p-6 border border-white/10">
                <h3 className="text-xl font-bold text-brand-gold">Tecnologia Alemã</h3>
                <p className="opacity-80">Perfiladeira de alta precisão, cortes milimétricos e acabamento premium.</p>
              </div>
              <div className="rounded-2xl bg-[#121212] p-6 border border-white/10">
                <h3 className="text-xl font-bold text-brand-gold">Aço GL Galvalume</h3>
                <p className="opacity-80">Liga nobre anticorrosiva (zinco + alumínio + silício). Ideal para maresia.</p>
              </div>
              <div className="rounded-2xl bg-[#121212] p-6 border border-white/10">
                <h3 className="text-xl font-bold text-brand-gold">Motor Titanium Force</h3>
                <p className="opacity-80">Engrenagem de cobre original, uso intenso e vida útil até 3x maior.</p>
              </div>
            </div>
            <div className="mt-10 text-sm opacity-80">
              <p><strong>Contato:</strong> <a href="mailto:rainhadoacoes@gmail.com.br" className="underline">rainhadoacoes@gmail.com.br</a> · <a href="https://www.instagram.com/rainhadoaco_oficial" className="underline">@rainhadoaco_oficial</a> · <a href="https://www.rainhadoaco.com.br" className="underline">rainhadoaco.com.br</a></p>
              <p>Espírito Santo — Brasil</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
