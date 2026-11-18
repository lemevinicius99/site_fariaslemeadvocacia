import { site } from "@/lib/site";

export const metadata = {
  title: "Contato",
  description: "Entre em contato com a Farias Leme Advocacia, em Votorantim/SP."
};

export default function P() {
  const wa = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent("Olá, gostaria de falar com a Farias Leme Advocacia.")}`;
  return (<section className="sec"><div className="w"><h1>Contato</h1>
    <p>Atendimento presencial em Votorantim e região e on-line em todo o Brasil.</p>
    <p><a className="btn" href={wa} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></p>
    <div className="item">
      <p><strong>Endereço:</strong> {site.address}<br />
      <strong>Telefone:</strong> <a href={`tel:+${site.phoneDigits}`}>{site.phone}</a><br />
      <strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </div>
    <p>Para o primeiro contato, informe apenas os dados necessários. Evite encaminhar documentos ou detalhes sensíveis do caso por canais não destinados a esse fim.</p>
  </div></section>);
}
