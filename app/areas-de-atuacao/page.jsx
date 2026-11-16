import Link from "next/link";
import { areas } from "@/lib/areas";
export const metadata = { title: "Áreas de Atuação", description: "Família e Sucessões, Saúde, Educação Inclusiva, Criminal, Civil, Previdenciário, Trabalhista e Imobiliário." };
export default function Page() { return (<section className="sec"><div className="w"><h1>Áreas de Atuação</h1>
  <div className="list">{areas.map(a => <Link key={a.slug} href={`/areas-de-atuacao/${a.slug}`}><b>{a.title}</b>{a.lead}</Link>)}</div></div></section>); }
