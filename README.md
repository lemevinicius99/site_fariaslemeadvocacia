# Farias Leme Advocacia — site (Next.js 14)

## Rodar localmente
`npm install`
`npm run dev` (http://localhost:3000)

## Publicação
1. Crie uma branch para as alterações e revise os arquivos.
2. Envie a branch ao GitHub e abra um Pull Request.
3. Confira o preview da Vercel.
4. Após aprovação, faça merge na branch principal.

## Dados institucionais
Os dados oficiais do escritório, contatos e endereço estão centralizados em `lib/site.js`.

## Conteúdo
- `app/page.jsx`: página inicial.
- `app/o-escritorio/page.jsx`: apresentação institucional.
- `app/advogada/page.jsx`: página Nossa Equipe (rota preservada para não quebrar links existentes).
- `lib/areas.js`: textos das áreas de atuação.

## Observação técnica
O formulário anterior não foi mantido nesta versão porque sua rota apenas validava campos e redirecionava; não enviava mensagens. A página de contato agora prioriza links funcionais de telefone, e-mail e WhatsApp. Uma integração real de formulário deverá ser implementada e testada separadamente.
