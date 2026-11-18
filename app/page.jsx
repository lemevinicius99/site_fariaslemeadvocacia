import Link from "next/link";
import { areas } from "@/lib/areas";

export default function Home() {
  return (<>
    <section className="hero"><div className="w">
      <div>
        <h1>Atuação jurídica para pessoas, famílias e empresas.</h1>
        <p>A Farias Leme Advocacia reúne serviços de orientação, prevenção e atuação judicial e extrajudicial em diferentes áreas do Direito, com análise individualizada e atendimento direto com a advogada responsável.</p>
        <Link className="btn" href="/contato">Falar com o escritório</Link>
      </div>
      <aside>Atendimento presencial em Votorantim e região e on-line em todo o Brasil.</aside>
    </div></section>
    <section className="sec"><div className="w">
      <h2>Áreas de atuação</h2>
      <div className="list">{areas.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}><b>{a.title}</b>{a.lead}</Link>)}</div>
    </div></section>
    <section className="sec alt"><div className="w">
      <h2>Uma atuação jurídica integrada</h2>
      <p>Atendimento presencial em Votorantim e região e atendimento jurídico on-line em todo o Brasil.</p>
      <Link className="btn" href="/o-escritorio">Conheça o escritório</Link>
    </div></section>
  </>);
}
