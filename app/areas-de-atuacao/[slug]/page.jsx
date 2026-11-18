import Link from "next/link";
import { notFound } from "next/navigation";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
export const generateStaticParams = () => areas.map(a => ({ slug: a.slug }));
export const generateMetadata = ({ params }) => { const a = areas.find(x => x.slug === params.slug); return a ? { title: a.title, description: a.lead, alternates: { canonical: `/areas-de-atuacao/${a.slug}` } } : {}; };
export default function Area({ params }) {
  const a = areas.find(x => x.slug === params.slug); if (!a) notFound();
  const ld = a.faq && { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faq.map(([q, r]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: r } })) };
  return (<section className="sec"><div className="w">
    <nav className="bc" aria-label="Breadcrumb"><Link href="/">Início</Link> / <Link href="/areas-de-atuacao">Áreas</Link> / {a.title}</nav>
    <h1>{a.title}</h1><p>{a.lead}</p>
    {a.note && <p>{a.note}</p>}
    {a.items.map(([t, d]) => <div className="item" id={t} key={t}><h3>{t}</h3><p>{d}</p></div>)}
    {a.faq && <><h2 style={{ marginTop: "3rem" }}>Perguntas frequentes</h2>{a.faq.map(([q, r]) => <details className="q" key={q}><summary>{q}</summary><p>{r}</p></details>)}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></>}
    <p style={{ marginTop: "2rem" }}><Link className="btn" href="/contato">Entrar em contato</Link></p>
    <p><small>Conteúdo informativo. Cada situação exige análise individual por {site.advogada}, {site.oab}.</small></p>
  </div></section>);
}
