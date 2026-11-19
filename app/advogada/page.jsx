export const metadata = {
  title: "Nossa Equipe",
  description: "Conheça os profissionais que integram a equipe da Farias Leme Advocacia."
};

const team = [
  {
    name: "Ariele Gomes Farias Leme da Silva",
    role: "Advogada fundadora | OAB/SP 451.476",
    image: "/team/ariele.webp",
    imageAlt: "Retrato profissional da advogada Ariele Gomes Farias Leme da Silva",
    paragraphs: [
      "Advogada desde dezembro de 2020, Ariele fundou o escritório em junho de 2021 e conduz sua atuação jurídica. É responsável pelo atendimento aos clientes, pela análise das demandas e pela definição e pelo acompanhamento das estratégias jurídicas.",
      "Sua atuação abrange orientação preventiva, consultoria e representação em questões judiciais e extrajudiciais, com atenção às necessidades pessoais, familiares e empresariais de cada cliente. A escuta atenta, o rigor técnico e a clareza na comunicação orientam sua prática profissional.",
      "À frente do escritório, coordena o atendimento presencial em Votorantim e região, além do atendimento on-line em todo o Brasil."
    ]
  },
  {
    name: "Vinícius Leme",
    role: "Gestão da Qualidade e Tecnologia",
    image: "/team/vinicius.webp",
    imageAlt: "Retrato profissional de Vinícius Leme",
    paragraphs: [
      "Responsável pela gestão da qualidade e pela tecnologia da Farias Leme Advocacia, atua na avaliação e no aprimoramento dos processos internos, na organização dos fluxos de trabalho e no desenvolvimento e na manutenção dos recursos digitais do escritório.",
      "Seu trabalho contribui para a eficiência das rotinas, a qualidade do atendimento e a melhoria contínua da experiência dos clientes."
    ]
  },
  {
    name: "Sara Santos",
    role: "Estagiária de Direito",
    image: null,
    paragraphs: [
      "Sara integra a equipe da Farias Leme Advocacia e auxilia no atendimento inicial aos clientes, na organização de documentos e no acompanhamento das rotinas jurídicas e administrativas.",
      "Sob a supervisão da advogada responsável, contribui para manter as informações e os registros atualizados, apoiando a organização das demandas e a comunicação entre o escritório e seus clientes."
    ]
  }
];

export default function P() {
  return (
    <section className="sec"><div className="w">
      <h1>Nossa Equipe</h1>
      <p className="team-intro">Profissionais que trabalham de forma integrada para oferecer atendimento próximo, organização e qualidade técnica em cada etapa.</p>
      <div className="team-grid">
        {team.map((person) => (
          <article className={`team-card${person.image ? "" : " team-card--text-only"}`} key={person.name}>
            {person.image && (
              <div className="team-card__portrait">
                <img src={person.image} alt={person.imageAlt} loading="lazy" />
              </div>
            )}
            <div className="team-card__content">
              <h2>{person.name}</h2>
              <h3>{person.role}</h3>
              {person.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
    </div></section>
  );
}
