import { site } from "@/lib/site";
export const metadata = { title: "Contato", description: "Fale com o escritório em Votorantim/SP: presencial ou on-line." };
export default function P() {
  const wa = site.whatsapp && `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Olá, gostaria de falar com a Farias Leme Advocacia.")}`;
  return (<section className="sec"><div className="w"><h1>Contato</h1>
    <p>Informe apenas o necessário para o primeiro contato. Não envie documentos nem detalhes do caso por aqui.</p>
    {wa ? <p><a className="btn" href={wa}>WhatsApp</a></p> : <p className="note">WhatsApp, telefone, e-mail e endereço: a confirmar.</p>}
    <form method="post" action="/api/contato">
      <label>Nome<input name="nome" required autoComplete="name" /></label>
      <label>Telefone<input name="telefone" type="tel" required autoComplete="tel" /></label>
      <label>E-mail (opcional)<input name="email" type="email" autoComplete="email" /></label>
      <label>Assunto geral<select name="assunto">{["Família e Sucessões","Saúde","Educação Inclusiva","Criminal","Civil e Consumidor","Previdenciário","Trabalhista","Imobiliário","Outro"].map(o => <option key={o}>{o}</option>)}</select></label>
      <label>Retorno preferido<select name="canal"><option>Telefone</option><option>WhatsApp</option><option>E-mail</option></select></label>
      <input name="site" tabIndex="-1" autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
      <label style={{ display: "flex", gap: ".6rem" }}><input type="checkbox" required style={{ width: "auto" }} />Concordo com o uso dos dados apenas para retorno do contato (LGPD).</label>
      <button className="btn">Enviar contato</button></form></div></section>);
}
