# Farias Leme Advocacia — site (Next.js 14)
## Rodar
`npm install && npm run dev` (http://localhost:3000)
## Publicar (GitHub + Vercel)
1. `git init && git add . && git commit -m "feat: site inicial" && git branch -M main`
2. Crie o repositório no GitHub, depois `git remote add origin <url> && git push -u origin main`
3. Em vercel.com: Add New > Project > importe o repositório > Deploy.
4. Em Settings > Environment Variables defina `SITE_URL`, `WHATSAPP`, `CONTACT_EMAIL` (veja `.env.example`) e conecte o domínio oficial.
## Onde editar
`lib/site.js` (dados oficiais) e `lib/areas.js` (textos das áreas).
## Pendências
Logo vetorial (SVG) e versão oficial do monograma; endereço, telefone, e-mail, horários; redes sociais; fotos e trajetória da advogada; razão social; serviços empresariais; envio do formulário e LinkLei; política de privacidade, cookies e GA4; blog com revisão jurídica; revisão de todo texto pela advogada.
O slogan "Estratégia jurídica para grandes conquistas" da prancha NÃO foi usado (risco de promessa de resultado, Provimento 205/2021).
