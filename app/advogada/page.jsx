export const metadata = {
  title: "Nossa Equipe",
  description: "Conheça a equipe da Farias Leme Advocacia."
};

const team = [
  {
    name: "Ariele Gomes Farias Leme da Silva",
    role: "Advogada fundadora | OAB/SP 451.476",
    paragraphs: [
      "Advogada desde dezembro de 2020, Ariele fundou o escritório em junho de 2021 e conduz a atuação jurídica da Farias Leme Advocacia. É responsável pelo atendimento aos clientes, pela análise das demandas e pela definição e acompanhamento das estratégias jurídicas.",
      "Sua atuação abrange orientação preventiva, consultoria e representação em questões judiciais e extrajudiciais, com atenção às necessidades pessoais, familiares e empresariais de cada cliente. Tem na escuta, no rigor técnico e na clareza da comunicação os fundamentos de sua prática profissional.",
      "À frente do escritório, coordena o atendimento presencial em Votorantim e região e on-line em todo o Brasil."
    ]
  },
  {
    name: "Vinícius Leme",
    role: "Gestão da Qualidade e Tecnologia",
    paragraphs: [
      "Responsável pela gestão da qualidade e pela tecnologia da Farias Leme Advocacia, atua na avaliação e melhoria dos processos internos, na organização dos fluxos de trabalho e no desenvolvimento e manutenção dos recursos digitais do escritório.",
      "Seu trabalho contribui para a eficiência das rotinas, a qualidade do atendimento e a melhoria contínua da experiência dos clientes."
    ]
  },
  {
    name: "Sara Santos",
    role: "Estagiária de Direito",
    paragraphs: [
      "Sara integra a equipe da Farias Leme Advocacia e auxilia no atendimento inicial aos clientes, na organização de documentos e no acompanhamento das rotinas jurídicas e administrativas.",
      "Sob supervisão da advogada responsável, contribui para manter as informações e os registros atualizados, apoiando a organização das demandas e a comunicação entre o escritório e seus clientes."
    ]
  }
];

export default function P() {
  return (
    <section className="sec"><div className="w">
      <h1>Nossa Equipe</h1>
      {team.map((person) => (
        <section className="item" key={person.name}>
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
          {person.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
      ))}
    </div></section>
  );
}
