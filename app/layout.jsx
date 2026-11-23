import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import MobileNav from "@/app/components/MobileNav";

const t = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-titulo", display: "swap" });
const s = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-corpo", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Votorantim e Sorocaba`, template: `%s | ${site.name}` },
  description: "Atuação jurídica para pessoas, famílias e empresas. Atendimento presencial em Votorantim e região e on-line em todo o Brasil.",
  icons: {
    icon: [{ url: "/brand/logo-escuro.jpg", type: "image/jpeg" }],
    shortcut: "/brand/logo-escuro.jpg",
    apple: [{ url: "/brand/logo-escuro.jpg", type: "image/jpeg" }],
  },
  openGraph: { siteName: site.name, locale: "pt_BR", type: "website" },
};

const links = [["/", "Início"], ["/o-escritorio", "O Escritório"], ["/advogada", "Nossa Equipe"], ["/areas-de-atuacao", "Áreas de Atuação"], ["/contato", "Contato"]];

export default function Layout({ children }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Antônio Fernandes, 77, Sala 04",
      addressLocality: "Votorantim",
      addressRegion: "SP",
      addressCountry: "BR"
    },
    areaServed: ["Votorantim", "Sorocaba", "Brasil"],
    founder: { "@type": "Person", name: site.advogada },
    foundingDate: "2021-06-30"
  };

  return (
    <html lang="pt-BR" className={`${t.variable} ${s.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <header><div className="w">
          <Link href="/" aria-label="Farias Leme Advocacia, início"><img className="logo" src="/brand/logo-claro.jpg" alt="Farias Leme Advocacia" /></Link>
          <nav className="desktop-nav" aria-label="Principal">{links.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
          <MobileNav />
        </div></header>
        <main>{children}</main>
        <footer><div className="w">
          <div>
            <h2>Dados do Escritório</h2>
            <p><strong>{site.legalName}</strong><br />{site.societyOab}<br /><br />
              <strong>{site.advogada}</strong><br />{site.oab}<br /><br />
              Endereço: {site.address}<br />
              Telefone: <a href={`tel:+${site.phoneDigits}`}>{site.phone}</a><br />
              E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div><h2>Áreas de Atuação</h2>{areas.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}>{a.title}</Link>)}</div>
          <div><h2>Contato</h2><Link href="/contato">Fale com o escritório</Link><a href={`https://wa.me/${site.phoneDigits}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <p style={{ gridColumn: "1/-1" }}>© {new Date().getFullYear()} {site.name}. Conteúdo informativo, sem promessa de resultado, conforme as normas da OAB.</p>
        </div></footer>
      </body>
    </html>
  );
}
