export const metadata = {
  title: "O Escritório",
  description: "Conheça a trajetória, os valores e a atuação da Farias Leme Advocacia."
};

const paragraphs = [
  "A Farias Leme Advocacia é um escritório de advocacia fundado em 30 de junho de 2021 pela advogada Ariele Gomes Farias Leme da Silva, inscrita na OAB/SP sob o nº 451.476, cuja trajetória profissional na advocacia teve início em dezembro de 2020.",
  "O escritório nasceu com o propósito de oferecer uma atuação jurídica que reunisse conhecimento técnico, atendimento personalizado e acompanhamento próximo das necessidades de cada cliente, reconhecendo que as demandas jurídicas exigem não apenas conhecimento da legislação, mas também compreensão das circunstâncias e dos interesses envolvidos.",
  "Inicialmente identificado como AGFL Advocacia, o escritório passou por um processo de amadurecimento institucional, consolidando sua atuação em diferentes áreas do Direito e desenvolvendo uma estrutura de atendimento voltada tanto à resolução de conflitos quanto à orientação jurídica preventiva.",
  "Em 2026, essa trajetória alcançou uma nova etapa, marcada pela formalização da estrutura empresarial e pela adoção da identidade Farias Leme Sociedade Individual de Advocacia, com inscrição na OAB/SP sob o nº 72.778, representando a evolução de uma atuação profissional individual para uma marca institucional com perspectivas de crescimento e consolidação.",
  "Com sede em Votorantim, no interior de São Paulo, o escritório adota um modelo de atuação full service, oferecendo atendimento presencial a clientes de Votorantim, Sorocaba e região, além de atendimento jurídico on-line em todo o território nacional.",
  "A Farias Leme Advocacia mantém como fundamento de sua atuação o compromisso com a excelência técnica, a ética profissional, a transparência e o desenvolvimento de estratégias jurídicas individualizadas."
];

export default function P() {
  return (
    <section className="sec"><div className="w">
      <h1>O Escritório</h1>
      {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div></section>
  );
}
