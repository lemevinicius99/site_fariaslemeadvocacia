import Link from "next/link";
import { areas } from "@/lib/areas";

export const metadata = {
  title: "Áreas de Atuação",
  description: "Atuação jurídica para pessoas, famílias e empresas em diferentes áreas do Direito."
};

export default function Page() {
  return (<section className="sec"><div className="w">
    <h1>Áreas de Atuação</h1>
    <p>A Farias Leme Advocacia reúne serviços de orientação, prevenção e atuação judicial e extrajudicial em diferentes áreas do Direito, com análise individualizada e atendimento direto com a advogada responsável.</p>
    <div className="list">{areas.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}><b>{a.title}</b>{a.lead}</Link>)}</div>
  </div></section>);
}
