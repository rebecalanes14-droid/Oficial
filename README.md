# Rainha do Aço — Catálogo Oficial (Vercel)

Site Next.js 14 + Tailwind pronto para publicar seu catálogo PPTX em **alto nível**.

## Como publicar (3 opções)

### 1) Vercel Web (sem terminal)
1. Baixe o ZIP abaixo e extraia a pasta.
2. Crie um repositório no GitHub e suba os arquivos.
3. Acesse https://vercel.com/new e importe o repositório.
4. Clique em **Deploy**. Pronto!

### 2) Vercel CLI
```bash
npm i -g vercel
vercel login
cd rainha-do-aco-catalogo-site
npm i
vercel
# e depois para produção:
vercel --prod
```

### 3) Upload direto no Vercel (arrastar e soltar)
1. Rode `npm run build` (opcional).
2. Compacte os arquivos (já tem um .zip pronto abaixo).
3. Vá em https://vercel.com/new -> **Upload** -> arraste o ZIP.

## Onde colocar novas versões do catálogo
Substitua o arquivo em: `public/catalogo/catalogo-oficial-rainha-do-aco.pptx`  
O site atualizará automaticamente no próximo deploy.

## URL do visor (Office Online)
Usamos o **Office Web Viewer** para renderizar o PPTX em alta qualidade dentro do site.
