import { site } from "@/lib/site";
export const metadata = { title: "A Advogada", description: "Ariele Gomes Farias Leme da Silva, OAB/SP 451.476, em atuação desde dezembro de 2020." };
export default function P() { return (<section className="sec"><div className="w"><h1>{site.advogada}</h1>
  <p>{site.oab}. Atua na advocacia desde dezembro de 2020.</p>
  <p className="note">PENDENTE: fotografia profissional e trajetória documentada. Nada será inventado.</p></div></section>); }
