import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Source_Serif_4, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
const t = Playfair_Display({ subsets: ["latin"], variable: "--f-titulo" });
const s = Source_Serif_4({ subsets: ["latin"], variable: "--f-serif" });
const i = Inter({ subsets: ["latin"], variable: "--f-corpo" });
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Votorantim e Sorocaba`, template: `%s | ${site.name}` },
  description: "Escritório de advocacia em Votorantim/SP. Atendimento presencial em Votorantim, Sorocaba e região e on-line em todo o Brasil.",
  openGraph: { siteName: site.name, locale: "pt_BR", type: "website" },
};
const links = [["/", "Início"], ["/o-escritorio", "O Escritório"], ["/advogada", "A Advogada"], ["/areas-de-atuacao", "Áreas de Atuação"], ["/contato", "Contato"]];
export default function Layout({ children }) {
  const ld = { "@context": "https://schema.org", "@type": "LegalService", name: site.name, url: site.url, areaServed: ["Votorantim", "Sorocaba", "Brasil"], founder: { "@type": "Person", name: site.advogada }, foundingDate: "2021-06-30" };
  return (
    <html lang="pt-BR" className={`${t.variable} ${s.variable} ${i.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <header><div className="w">
          <Link href="/" aria-label="Farias Leme Advocacia, início"><img className="logo" src="/brand/logo-claro.jpg" alt="Farias Leme Advocacia" /></Link>
          <nav aria-label="Principal">{links.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
          <details className="m"><summary>Menu</summary><div>{links.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</div></details>
        </div></header>
        <main>{children}</main>
        <footer><div className="w">
          <div><h2>{site.name}</h2><p>{site.advogada}<br />{site.oab}<br />Votorantim/SP</p></div>
          <div><h2>Áreas</h2>{areas.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}>{a.title}</Link>)}</div>
          <div><h2>Contato</h2><Link href="/contato">Fale com o escritório</Link><p>Endereço, telefone e e-mail: a confirmar.</p></div>
          <p style={{ gridColumn: "1/-1" }}>© 2026 {site.name}. Conteúdo informativo, sem promessa de resultado, conforme o Provimento 205/2021 da OAB.</p>
        </div></footer>
      </body>
    </html>
  );
}
