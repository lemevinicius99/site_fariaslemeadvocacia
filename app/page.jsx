import Link from "next/link";
import { areas } from "@/lib/areas";
export default function Home() {
  const fam = areas[0], outras = areas.slice(1);
  return (<>
    <section className="hero"><div className="w">
      <div><h1>Direito de família e sucessões, conduzido com método e proximidade.</h1>
        <p>Orientação jurídica clara, acompanhamento organizado e atendimento individualizado em Votorantim, Sorocaba e região, e on-line em todo o Brasil.</p>
        <Link className="btn" href="/contato">Falar com o escritório</Link></div>
      <aside>Fundado em 30 de junho de 2021.<br />Atendimento presencial e on-line.</aside>
    </div></section>
    <section className="sec"><div className="w fam">
      <div><h2>{fam.title}</h2><p>{fam.lead}</p><Link className="btn" href={`/areas-de-atuacao/${fam.slug}`}>Conhecer a área</Link></div>
      <div className="list">{fam.items.map(([t, d]) => <Link key={t} href={`/areas-de-atuacao/${fam.slug}#${encodeURIComponent(t)}`}><b>{t}</b>{d}</Link>)}</div>
    </div></section>
    <section className="sec alt"><div className="w"><h2>Outras áreas de atuação</h2>
      <div className="list">{outras.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}><b>{a.title}</b>{a.lead}</Link>)}</div>
    </div></section>
    <section className="sec"><div className="w"><h2>Votorantim, Sorocaba e todo o Brasil</h2>
      <p>Atendimento presencial em Votorantim e Sorocaba e jurídico on-line em todo o território nacional.</p></div></section>
  </>);
}
