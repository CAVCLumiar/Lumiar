/*
 * CONTEÚDO DO SITE
 * Resumo da carta programa (versão em construção). Para mudar uma proposta,
 * edite o texto aqui; o site se monta sozinho a partir destas listas.
 *
 * resumo:  uma linha, aparece fechado.
 * detalhe: lista de pontos, aparece quando a pessoa abre a proposta.
 * pagina:  página da carta em PDF (usada no botão "ver na carta").
 * busca:   palavras extras para o "Pergunte à Lumiar" encontrar a proposta.
 */

window.LUMIAR_AREAS = [
  {
    id: "espacos", nome: "Espaços e vivência",
    intro: "Os espaços da FEA precisam acompanhar quem vive a faculdade todos os dias: quem estuda de manhã, quem chega à noite e quem fica até tarde."
  },
  {
    id: "acolhimento", nome: "Acolhimento de calouros",
    intro: "Ninguém deveria descobrir sozinho qual ônibus pega ou onde fica o bandejão. Os primeiros dias moldam a relação com a faculdade."
  },
  {
    id: "academica", nome: "Acadêmica",
    intro: "Ensino, pesquisa e extensão: fechar as lacunas da graduação, aproximar alunos e docentes e abrir a pesquisa para todo mundo."
  },
  {
    id: "rd", nome: "Representação Discente",
    intro: "Nos colegiados se decide grade, contratação de professores, orçamento e provas de ingresso. A RD leva a voz dos estudantes para lá. Foi assim que a FEA aprovou cotas por renda em 2021, incluiu Atuária no nome em 2018 e corrigiu os \"créditos fantasma\" da grade de Economia."
  },
  {
    id: "entidades", nome: "Entidades",
    intro: "As mais de vinte entidades independentes da FEA levam a formação para além da sala de aula, mas quase sempre sem apoio da administração. Já houve avanço: o registro de entidades, antes limitado a poucas semanas, agora pode ser feito o ano todo, uma conquista da greve. Ainda há muito a construir."
  },
  {
    id: "apsm", nome: "Apoio, permanência e saúde mental",
    intro: "A FEA tem que caber na vida de quem estuda aqui: acesso, diversidade, auxílios, moradia e cuidado com a saúde mental. E aqui muita gente se sustenta com a bolsa do estágio, mesmo recebendo PAPFE: estágio não substitui política de permanência, mas colocar mais feanos no mercado alivia a vulnerabilidade financeira de muitos."
  },
  {
    id: "eventos", nome: "Eventos",
    intro: "Festa também é permanência. Eventos são onde a união começa, e precisam ser seguros e abertos a todo mundo."
  },
  {
    id: "mobilizacao", nome: "Mobilização",
    intro: "A ponte entre a FEA e o Movimento Estudantil, dentro e fora da faculdade, sempre a partir das demandas reais dos estudantes."
  },
  {
    id: "comunicacao", nome: "Comunicação e Visconde",
    intro: "Um CAVC que fala com a FEA, e que escuta também."
  },
  {
    id: "gestao", nome: "Gestão interna",
    intro: "Uma gestão horizontal, onde quem entra se sente parte e aprende."
  }
];

window.LUMIAR_DESTAQUES = [
  {
    titulo: "Uma FEA onde dá vontade de ficar",
    texto: "Mesas e guarda-sóis no Novão, uma Vivência bem cuidada, móveis de convivência que durem mais que o papelão e salas para as entidades levadas ao CTA.",
    area: "espacos"
  },
  {
    titulo: "Ninguém chega sozinho",
    texto: "Bar das Calouras, Apadrinhamento, USP Safari e um Guia do Calouro com ônibus, bandejão, CPTM, entidades e CEPE.",
    area: "acolhimento"
  },
  {
    titulo: "Estudar com apoio",
    texto: "O Nivelamento Matemático, que já teve mais de 100 inscritos, continua. E mais: aulões pedidos pela turma, banco de provas antigas e cursos gratuitos de Excel e Power BI.",
    area: "academica"
  },
  {
    titulo: "Festa é pra todo mundo",
    texto: "Lote social e trans, gratuidade para quem mora no CRUSP, Comissão Anti-Opressão nas festas e pelo menos um HH por mês.",
    area: "eventos"
  }
];

window.LUMIAR_PROPOSTAS = [
  /* ---------------- ESPAÇOS E VIVÊNCIA ---------------- */
  {
    area: "espacos", pagina: 2, titulo: "Ouvir antes de mexer",
    resumo: "Mapear com os estudantes o que falta em cada espaço da FEA.",
    detalhe: [
      "Levantar as demandas concretas do dia a dia: disposição dos móveis, condições dos ambientes e o que acontece em cada lugar.",
      "Olhar para os espaços subutilizados e buscar soluções que durem, em vez de intervenções temporárias.",
      "Decidir o uso dos espaços respeitando quem estuda, quem trabalha e quem participa das entidades."
    ],
    busca: "infraestrutura espaco sala predio reforma"
  },
  {
    area: "espacos", pagina: 2, titulo: "Salas para as entidades",
    resumo: "Lutar por espaço próprio para as entidades estudantis.",
    detalhe: [
      "Hoje faltam salas para reuniões, para guardar materiais e para tocar projetos.",
      "Discutir com a faculdade alternativas viáveis, reconhecendo o papel das entidades na vida da FEA.",
      "Levar a pauta ao Conselho Técnico-Administrativo (CTA), que decide o uso do espaço físico e o orçamento."
    ],
    busca: "entidade sala espaco reuniao cta"
  },
  {
    area: "espacos", pagina: 2, titulo: "Novão mais usável",
    resumo: "Mesas, cadeiras e guarda-sóis para usar o Novão de verdade.",
    detalhe: [
      "Seguir investindo em mobiliário para estudar, comer e conversar na área.",
      "Cuidar da conservação do que já foi comprado, que é patrimônio dos estudantes."
    ],
    busca: "novao mesa cadeira guarda-sol"
  },
  {
    area: "espacos", pagina: 2, titulo: "Vivência bem cuidada",
    resumo: "A lanchonete do CAVC funcionando bem e cheia de gente.",
    detalhe: [
      "A Vivência Estudantil Norberto Nehring é gerida pelo CAVC e é o principal ponto de convivência da FEA.",
      "Cuidar da estrutura e do funcionamento faz parte de administrar bem o que está sob gestão do CAVC.",
      "Manter a Vivência como lugar de descontração e de troca de ideias."
    ],
    busca: "vivencia lanchonete cantina comida cafe"
  },
  {
    area: "espacos", pagina: 2, titulo: "Convivência que dura",
    resumo: "Trocar o papelão por móveis de convivência duradouros.",
    detalhe: [
      "A intervenção do Semead com móveis de papelão mostrou que o espaço enche quando acolhe: mais gente lendo, conversando e descansando.",
      "Mas o papelão é frágil e já está gasto. A proposta é buscar soluções permanentes para os espaços de convivência.",
      "Lugares onde dá vontade de ficar transformam colegas de sala em amigos."
    ],
    busca: "semead papelao movel convivencia descanso sofa puff"
  },

  /* ---------------- ACOLHIMENTO ---------------- */
  {
    area: "acolhimento", pagina: 3, titulo: "Bar das Calouras",
    resumo: "Encontro de veteranas e calouras antes da semana de recepção.",
    detalhe: [
      "Acontece na semana anterior à recepção e é exclusivo para calouras.",
      "Mulheres ainda são minoria entre os graduandos da FEA. O encontro cria rede de apoio desde o primeiro dia."
    ],
    busca: "calouro caloura bixete mulher veterana recepcao"
  },
  {
    area: "acolhimento", pagina: 4, titulo: "Apadrinhamento",
    resumo: "Cada bixo com uma pessoa veterana que acompanha a graduação toda.",
    detalhe: [
      "Veteranes se inscrevem e adotam um ou mais bixos por meio de um match.",
      "Um evento presencial na semana de recepção oficializa a dupla.",
      "A relação continua: ajuda com matérias, integração e pertencimento ao longo do curso."
    ],
    busca: "padrinho madrinha afilhado bixo calouro veterano match"
  },
  {
    area: "acolhimento", pagina: 4, titulo: "USP Safari",
    resumo: "Tour pelo campus com concurso de melhor foto.",
    detalhe: [
      "Um passeio leve pelos lugares históricos da Cidade Universitária durante a recepção.",
      "Concurso de melhor foto para animar a turma."
    ],
    busca: "tour campus calouro bixo foto passeio"
  },
  {
    area: "acolhimento", pagina: 4, titulo: "Guia do Calouro",
    resumo: "As respostas que ninguém te dá no primeiro dia, num só lugar.",
    detalhe: [
      "Qual ônibus leva até a FEA, onde fica o bandejão mais próximo, como chegar à CPTM, o que são as entidades e o que é o CEPE.",
      "Fica disponível depois da primeira semana, porque a adaptação leva meses."
    ],
    busca: "calouro bixo onibus circular bandejao cptm trem cepe duvida guia transporte"
  },
  {
    area: "acolhimento", pagina: 14, titulo: "Cartilha de Permanência",
    resumo: "Permanência acadêmica, social e financeira explicada num documento.",
    detalhe: [
      "Feita pela APSM com O Visconde e distribuída a partir da semana de recepção.",
      "Reúne auxílios, bolsas, moradia, saúde mental e outros apoios da USP para consultar quando precisar."
    ],
    busca: "permanencia auxilio bolsa cartilha"
  },
  {
    area: "acolhimento", pagina: 14, titulo: "Corredor das entidades",
    resumo: "Apresentar o CAVC e ajudar a organizar o corredor na recepção.",
    detalhe: ["O CAVC participa do corredor das entidades e apoia a organização quando for preciso."],
    busca: "entidade calouro recepcao corredor"
  },
  {
    area: "acolhimento", pagina: 10, titulo: "Aula Magna",
    resumo: "A primeira aula do ano com uma referência da área.",
    detalhe: ["Abrir o primeiro semestre dos calouros com uma aula especial sobre temas que a grade não cobre e sobre o futuro das áreas da FEA."],
    busca: "aula magna palestra calouro"
  },
  {
    area: "acolhimento", pagina: 11, titulo: "Aulas Trote",
    resumo: "Aulas \"de brincadeira\" dadas por alunos, para quem não curte festa.",
    detalhe: [
      "Nem todo mundo quer se integrar em festa.",
      "As aulas são dadas por alunos escolhidos e começam propositalmente difíceis e exigentes, para quebrar o gelo e despertar curiosidade."
    ],
    busca: "trote aula calouro integracao"
  },

  /* ---------------- ACADÊMICA ---------------- */
  {
    area: "academica", pagina: 7, titulo: "Nivelamento Matemático",
    resumo: "Já teve mais de 100 inscritos. Agora é continuar e ampliar.",
    detalhe: [
      "Projeto criado por Camilly Nobre e Esther Barletta, hoje candidatas a presidente e secretária-geral pela Lumiar. A primeira edição teve mais de 100 inscritos.",
      "Nem toda escola prepara para as exatas que a FEA cobra logo de cara, e tem gente que nunca viu certos conteúdos.",
      "Aulas nas primeiras semanas de cada semestre: base para Cálculo I no 1º semestre e para Introdução à Probabilidade e Estatística no 2º.",
      "Conteúdo organizado pelo CAVC com professores, monitores e voluntários."
    ],
    busca: "matematica calculo estatistica probabilidade exatas base nivelamento camilly camy esther inscritos"
  },
  {
    area: "academica", pagina: 7, titulo: "Aulões antes das provas",
    resumo: "Aulões em todos os cursos, pedidos pela própria turma.",
    detalhe: [
      "Os representantes de classe (RCs) levantam a demanda de cada turma.",
      "Aulões perto das provas, focados em tirar dúvidas e no tipo de prova de cada disciplina.",
      "Formulário de feedback ao fim de cada período de provas para melhorar as próximas edições."
    ],
    busca: "aulao prova estudar duvida monitoria revisao"
  },
  {
    area: "academica", pagina: 7, titulo: "Grupos de estudo",
    resumo: "Grupos sobre o que a graduação não aprofunda, inclusive os que você propuser.",
    detalhe: [
      "O CAVC cria grupos sobre temas pouco abordados nos cursos.",
      "Alunos podem pedir apoio para montar o próprio grupo, se o tema estiver alinhado aos valores da entidade.",
      "O CAVC cede sala, ajuda no contato com docentes e organiza materiais, inclusive do CAVCEBO."
    ],
    busca: "grupo estudo tema"
  },
  {
    area: "academica", pagina: 8, titulo: "Banco de materiais",
    resumo: "Provas antigas, resumos e livros da bibliografia num só lugar.",
    detalhe: [
      "Reorganizar as pastas do banco que já existe.",
      "Atualizar o que está defasado e incluir provas (ou modelos de prova) de anos anteriores.",
      "Adicionar textos de leitura e versões digitais dos livros da bibliografia.",
      "Receber anotações e resumos de quem quiser compartilhar."
    ],
    busca: "material prova antiga resumo livro pdf drive apostila bibliografia"
  },
  {
    area: "academica", pagina: 8, titulo: "CAVCEBO",
    resumo: "O sebo de livros dos estudantes, maior e mais divulgado.",
    detalhe: [
      "Livros técnicos e de lazer, mantidos pelo CAVC.",
      "Buscar parcerias com institutos e agências da USP e divulgar mais entre os alunos."
    ],
    busca: "sebo livro cavcebo"
  },
  {
    area: "academica", pagina: 8, titulo: "Cursos de Excel e Power BI",
    resumo: "Capacitações gratuitas, com aulas gravadas para rever depois.",
    detalhe: [
      "Primeiro para a gestão do CAVC, depois abertas a todos os alunos da FEA.",
      "Acervo online gratuito para quem não puder ir presencialmente ou quiser rever ao longo da graduação."
    ],
    busca: "excel power bi curso capacitacao ferramenta planilha"
  },
  {
    area: "academica", pagina: 8, titulo: "Revista de Iniciação Científica",
    resumo: "Pesquisas de graduação e pós da FEA publicadas e explicadas.",
    detalhe: [
      "Projetos, artigos e resenhas de alunos de graduação e pós, inclusive pesquisas feitas em entidades.",
      "Manuais, relatos e editais para quem quer começar uma IC.",
      "Linguagem acessível, para abrir a pesquisa a quem está chegando."
    ],
    busca: "pesquisa ic iniciacao cientifica revista artigo"
  },
  {
    area: "academica", pagina: 9, titulo: "Estágios",
    resumo: "Ajuda com a burocracia de estágio e vagas dentro da própria USP.",
    detalhe: [
      "Diretoria acessível para tirar dúvidas sobre as etapas junto à Secretaria de Estágios da FEA.",
      "Acompanhar as portarias de estágio.",
      "Divulgar as vagas de estágio dentro da USP, que hoje quase ninguém conhece."
    ],
    busca: "estagio vaga emprego trabalho secretaria contrato"
  },
  {
    area: "academica", pagina: 9, titulo: "Pesquisa de desempenho",
    resumo: "Formulário anônimo sobre as matérias mais difíceis, para avisar quem vem.",
    detalhe: [
      "No fim de cada semestre, um formulário levanta as disciplinas com mais reprovação e dificuldade.",
      "Os dados, anônimos, são organizados e passados aos ingressantes do ano seguinte."
    ],
    busca: "reprovacao disciplina materia dificil dp"
  },
  {
    area: "academica", pagina: 9, titulo: "RCs mais perto",
    resumo: "No mínimo duas reuniões por ano com todos os representantes de classe.",
    detalhe: [
      "Os RCs são a ponte entre cada turma e o CAVC.",
      "Os encontros servem para entender as necessidades de cada turma e estreitar os laços."
    ],
    busca: "rc representante classe turma"
  },
  {
    area: "academica", pagina: 8, titulo: "Acadêmica para quem é menos ouvido",
    resumo: "Aproximar a área de mulheres, pessoas LGBTQIA+ e pessoas negras.",
    detalhe: [
      "Tornar a Área Acadêmica uma referência conhecida para quem enfrenta dificuldades.",
      "Relação próxima com os grupos historicamente menos representados na USP, como apoio à permanência."
    ],
    busca: "mulher lgbt negro pardo representatividade apoio"
  },
  {
    area: "academica", pagina: 9, titulo: "Grades mais plurais",
    resumo: "Ouvir os alunos sobre as grades e levar propostas às Comissões Coordenadoras.",
    detalhe: [
      "Economia: mais Humanidades e Macroeconomia, e eletivas mais diversas.",
      "Administração (grade em debate): manter a pluralidade e incluir Administração Pública.",
      "Contabilidade: incluir Contabilidade Governamental.",
      "Materiais e propostas construídos com a Secretaria de RD e a Mobilização."
    ],
    busca: "grade curricular curriculo economia administracao contabilidade atuaria eletiva disciplina"
  },
  {
    area: "academica", pagina: 10, titulo: "Intercâmbio e inglês",
    resumo: "Editais da CCInt divulgados, apoio no inglês e regras menos restritivas.",
    detalhe: [
      "Contato contínuo com a CCInt para divulgar editais, prazos e bolsas.",
      "Apoio a quem tem dificuldade em inglês, com bolsas e descontos pelo CAVC Idiomas.",
      "Rever as normas de intercâmbio para que um problema acadêmico pontual não tire ninguém de um programa."
    ],
    busca: "intercambio ingles idioma ccint bolsa exterior"
  },
  {
    area: "academica", pagina: 10, titulo: "Qualquer atestado vale",
    resumo: "Atestado de qualquer instituição garantindo abono e prova substitutiva.",
    detalhe: [
      "Hoje o regulamento garante abono e substitutiva com atestado do Hospital Universitário.",
      "Muita gente mora longe do HU, e alguns docentes recusam outros atestados.",
      "A proposta: aceitar atestado de qualquer instituição, com prova substitutiva diferente da reavaliação."
    ],
    busca: "atestado falta prova substitutiva hu doente medico abono"
  },
  {
    area: "academica", pagina: 11, titulo: "Festival Paul Singer",
    resumo: "A semana acadêmica sobre o que as grades deixam de lado, de novo.",
    detalhe: [
      "Palestras, workshops, feiras e oficinas.",
      "Humanidades e Heterodoxia na Economia, Administração Pública, Contabilidade Governamental e Demografia na Atuária.",
      "Incentivar a pesquisa, que na FEA costuma ficar atrás dos estágios."
    ],
    busca: "semana academica festival paul singer heterodoxia humanidades"
  },
  {
    area: "academica", pagina: 10, titulo: "Mostra de IC e TCC",
    resumo: "Alunos apresentando suas pesquisas, com premiação.",
    detalhe: [
      "Eventos em que alunos apresentam ICs e TCCs para colegas e professores da área.",
      "Professores comentam e premiam as melhores iniciações científicas."
    ],
    busca: "tcc ic apresentacao pesquisa premio"
  },
  {
    area: "academica", pagina: 11, titulo: "CorreLab",
    resumo: "Os laboratórios de pesquisa da FEA em estandes no saguão.",
    detalhe: [
      "Conversar com membros e docentes de cada laboratório e tirar dúvidas.",
      "Sair de lá sabendo como se inscrever numa pesquisa."
    ],
    busca: "laboratorio pesquisa ic correlab"
  },
  {
    area: "academica", pagina: 11, titulo: "Palestras ao longo do ano",
    resumo: "Grades, temas pouco abordados e intercâmbio em debate.",
    detalhe: ["Feitas com outras áreas do CAVC, para uma formação mais crítica e plural."],
    busca: "palestra debate"
  },

  /* ---------------- ESTÁGIOS (distribuídas entre Acadêmica, RD e APSM) ---------------- */
  {
    area: "rd", titulo: "Troca de turno mais fácil",
    resumo: "Facilitar a transferência entre turnos, principalmente para quem recebe PAPFE e vive do estágio.",
    detalhe: [
      "Quem depende do estágio para se sustentar precisa conseguir conciliar aula e trabalho.",
      "Lutar para que a transferência entre integral e noturno seja mais simples, com prioridade para quem recebe o PAPFE."
    ],
    busca: "turno transferencia noturno integral papfe estagio trabalha"
  },
  {
    area: "apsm", titulo: "Vagas antes de todo mundo",
    resumo: "Grupos de vagas maiores e uma IA que garimpa oportunidades para o perfil feano.",
    detalhe: [
      "Ampliar os grupos de divulgação de vagas que já existem, com as indicações dos próprios alunos.",
      "Usar inteligência artificial para coletar automaticamente vagas em plataformas como Gupy e LinkedIn que combinem com o perfil da FEA.",
      "A ideia é que os feanos sejam os primeiros a saber das vagas assim que forem publicadas."
    ],
    busca: "vaga vagas grupo divulgacao ia inteligencia artificial gupy linkedin oportunidade emprego"
  },
  {
    area: "academica", titulo: "Preparação para processos seletivos",
    resumo: "Monitorias, oficinas e palestras de entrevista, currículo e LinkedIn.",
    detalhe: [
      "Ajudar os feanos em entrevistas de emprego, montagem de currículo e estruturação do LinkedIn.",
      "Outras faculdades já oferecem mentoria individual para isso; nossos alunos precisam estar preparados para competir em alto nível."
    ],
    busca: "entrevista curriculo cv linkedin processo seletivo mentoria oficina dinamica"
  },
  {
    area: "rd", titulo: "Seção de Estágios mais rápida",
    resumo: "Contrato assinado pela faculdade em até uma semana e documentação mais clara.",
    detalhe: [
      "O sistema da FEA já é relativamente simples, mas dá para melhorar.",
      "Propor um prazo máximo de uma semana para a faculdade assinar os contratos de estágio.",
      "Documentação mais clara para quem está começando um estágio."
    ],
    busca: "contrato assinatura secao estagios burocracia documento tce prazo"
  },
  {
    area: "apsm", titulo: "Indique um Feano",
    resumo: "Um programa para feanos indicarem colegas às vagas das suas empresas.",
    detalhe: ["Incentivar quem já está no mercado a recomendar colegas da FEA para vagas onde trabalha."],
    busca: "indicacao indique feano empresa vaga rede networking"
  },
  {
    area: "academica", titulo: "Empresas de todas as áreas na FEA",
    resumo: "Palestras institucionais com mercado financeiro, setor público, estatais e mais.",
    detalhe: [
      "Mostrar aos alunos a pluralidade de oportunidades, não só o mercado financeiro.",
      "Feitas com outras entidades ou pelo próprio CAVC, para aproximar a FEA desses empregadores."
    ],
    busca: "palestra empresa mercado financeiro setor publico estatal carreira"
  },
  {
    area: "academica", titulo: "Vagas exclusivas com SempreFEA e AmeFEA",
    resumo: "Usar a rede de organizações parceiras para atrair empresas e vagas só para feanos.",
    detalhe: ["Aproveitar a estrutura de parceiros como a SempreFEA e a AmeFEA para captar vagas exclusivas para os alunos."],
    busca: "semprefea amefea exclusiva parceria empresa vaga ex-alunos"
  },
  {
    area: "academica", titulo: "Certificações mais acessíveis",
    resumo: "Apoio para tirar CPA, CEA, ANCORD e outras formações complementares.",
    detalhe: [
      "Programas próprios ou parcerias com instituições de ensino para facilitar o acesso a esses conteúdos.",
      "Certificações que o mercado cobra e que a grade não oferece."
    ],
    busca: "certificacao cpa cea ancord cfp curso formacao complementar"
  },

  /* ---------------- REPRESENTAÇÃO DISCENTE ---------------- */
  {
    area: "rd", titulo: "Você opina antes do voto",
    resumo: "Consultas abertas aos alunos antes de levar uma pauta aos colegiados.",
    detalhe: [
      "As pautas nascem do contato regular entre a Secretaria de RD e os estudantes, por formulários e consultas abertas nos canais oficiais.",
      "As propostas são apresentadas aos alunos e buscam ampla aceitação antes de serem defendidas.",
      "O posicionamento da RD nas reuniões é orientado pelos estudantes."
    ],
    busca: "consulta formulario opiniao voto colegiado congregacao"
  },
  {
    area: "rd", titulo: "Colegiados às claras",
    resumo: "Pautas, decisões e datas das reuniões divulgadas para todo mundo.",
    detalhe: [
      "Divulgar os canais de comunicação, as pautas em discussão, as decisões tomadas e o calendário das reuniões.",
      "Atenção especial às mudanças que afetam a FEA."
    ],
    busca: "transparencia colegiado reuniao decisao pauta"
  },
  {
    area: "rd", titulo: "Grade de Economia com história",
    resumo: "Seguir o debate da reforma de 2021 e acompanhar as reformas dos outros cursos.",
    detalhe: [
      "A reforma da grade de Economia de 2021 foi feita sem participação significativa dos estudantes.",
      "Hoje é o único curso de Economia entre os principais do país sem ao menos 300 horas-aula de formação histórica.",
      "Seguir ajustando essas mudanças e acompanhar as reformas de Administração, Contabilidade e Atuária."
    ],
    busca: "grade curricular reforma economia historia horas"
  },
  {
    area: "rd", titulo: "Espaços de convivência no CTA",
    resumo: "Levar ao Conselho Técnico-Administrativo a falta de lugar para conviver.",
    detalhe: [
      "Até poucos anos atrás não havia mesas e cadeiras adequadas no prédio principal.",
      "A falta de espaço de convivência ainda atrapalha a integração. A pauta vai ao CTA, que cuida do espaço físico e do orçamento da faculdade."
    ],
    busca: "cta espaco convivencia mesa cadeira orcamento"
  },
  {
    area: "rd", titulo: "Entidades valendo crédito",
    resumo: "Atividades das entidades reconhecidas como AAC e AEX.",
    detalhe: [
      "Reconhecimento oficial das entidades estudantis pelos departamentos.",
      "Atividades das entidades validadas como Atividades Acadêmicas Complementares (AACs) e Atividades Extensionistas (AEXs)."
    ],
    busca: "entidade credito aac aex extensao complementar"
  },
  {
    area: "rd", titulo: "Quem trabalha também conta",
    resumo: "Apoio a quem estagia ou trabalha durante a graduação.",
    detalhe: [
      "Com a Secretaria de Estágios, apoio burocrático, orientação e acesso a novas oportunidades.",
      "Levar aos colegiados as demandas próprias de quem estuda e trabalha."
    ],
    busca: "trabalha estagio emprego noturno"
  },
  {
    area: "rd", titulo: "RDs jogando junto",
    resumo: "Representantes de todos os colegiados com estratégia comum.",
    detalhe: ["A Secretaria mobiliza os representantes discentes de todos os colegiados, com estratégias comuns e ampla divulgação para os estudantes."],
    busca: "representante discente colegiado"
  },

  /* ---------------- ENTIDADES ---------------- */
  {
    area: "entidades", titulo: "Entidades mais fortes juntas",
    resumo: "Mais comunicação entre as entidades para negociar com a diretoria da FEA.",
    detalhe: [
      "Hoje as entidades enfrentam restrições a atividades e eventos e não têm canal aberto de diálogo com a administração.",
      "A principal proposta da secretaria: aproximar as entidades entre si para que tenham mais organização e mais peso na articulação com a diretoria."
    ],
    busca: "entidade entidades diretoria dialogo articulacao restricao evento"
  },
  {
    area: "entidades", titulo: "AEX pelas entidades",
    resumo: "Projetos das entidades valendo crédito de extensão, além de Empreendedorismo e Inovação.",
    detalhe: [
      "Hoje a disciplina obrigatória de Empreendedorismo e Inovação é praticamente a única fonte de créditos AEX em larga escala, com desgaste de alunos e professores.",
      "Duas entidades já conseguiram reconhecer projetos como AEX depois de longos processos.",
      "Usar esse aprendizado e a articulação conjunta para levar a conquista a outras entidades."
    ],
    busca: "aex extensao credito curricularizacao empreendedorismo inovacao entidade"
  },
  {
    area: "entidades", titulo: "Professores conhecendo as entidades",
    resumo: "Apresentar as entidades aos docentes e abrir caminho para parcerias.",
    detalhe: [
      "Para um projeto virar extensão, precisa de um docente responsável, e a maior parte dos professores não sabe quais são as entidades nem o que elas fazem.",
      "Divulgar aos professores as finalidades, a estrutura e os temas de cada entidade, muitos ligados às linhas de pesquisa deles."
    ],
    busca: "professor docente parceria pesquisa entidade extensao"
  },
  {
    area: "entidades", titulo: "Conselho de Entidades mais dinâmico",
    resumo: "Reuniões só com pautas importantes e saindo com encaminhamentos concretos.",
    detalhe: [
      "O Conselho é o espaço para construir a aliança entre CAVC e entidades, e das entidades entre si.",
      "Tratar só pautas que exijam a participação de todas ou de boa parte das entidades, respeitando o tempo de quem representa cada uma.",
      "Um espaço igualitário: o CAVC passa a mandar representantes como as outras entidades, e a secretaria de entidades só faz a mediação."
    ],
    busca: "conselho entidades reuniao pauta representante"
  },
  {
    area: "entidades", titulo: "Entidades menos dependentes do CAVC",
    resumo: "Autonomia na reserva de espaços e espaço garantido no plano diretor.",
    detalhe: [
      "Defender que as entidades possam reservar espaços sem depender do CAVC.",
      "Fiscalizar o plano diretor da FEA, que precisa incluir espaço para as entidades."
    ],
    busca: "espaco sala reserva plano diretor autonomia entidade"
  },

  /* ---------------- APSM ---------------- */
  {
    area: "apsm", pagina: 12, titulo: "Prédios acessíveis",
    resumo: "Rampas, piso tátil, elevadores acessíveis e climatização.",
    detalhe: [
      "Mapear os lugares que precisam de atenção e levar projetos aos Representantes Discentes.",
      "Rampas, piso tátil, elevadores acessíveis, saídas de emergência e sistemas de arrefecimento."
    ],
    busca: "acessibilidade rampa elevador pcd deficiencia calor ar"
  },
  {
    area: "apsm", pagina: 12, titulo: "Absorventes nos banheiros",
    resumo: "Absorventes gratuitos nos banheiros femininos da FEA.",
    detalhe: [
      "Propor à diretoria que a faculdade disponibilize absorventes.",
      "Pedir apoio ao SempreFEA, por edital, para garantir a verba."
    ],
    busca: "absorvente banheiro dignidade menstrual"
  },
  {
    area: "apsm", pagina: 12, titulo: "Mais diversidade na FEA",
    resumo: "Cotas para pessoas trans e PCD, vestibular indígena e cotas na docência.",
    detalhe: [
      "Somar às pautas de cotas para pessoas com deficiência e pessoas trans, vestibular indígena e cotas em concursos docentes e na pós.",
      "Debates em assembleias, palestras e intervenções culturais e artísticas.",
      "Rodas de conversa entre alunes e professores que entraram por ações afirmativas e membros de entidades de grupos minoritários."
    ],
    busca: "cota trans pcd indigena vestibular diversidade negro acao afirmativa"
  },
  {
    area: "apsm", pagina: 12, titulo: "Intercâmbio para todos",
    resumo: "Horizonte Sem Fronteiras orientado e intercâmbio para quem está em vulnerabilidade.",
    detalhe: [
      "Informações, editais e ajuda com os procedimentos do Horizonte Sem Fronteiras.",
      "Pautar a falta de oportunidades para estudantes em vulnerabilidade socioeconômica.",
      "Projetos para integrar intercambistas ao dia a dia da FEA."
    ],
    busca: "intercambio horizonte sem fronteiras vulnerabilidade intercambista"
  },
  {
    area: "apsm", pagina: 12, titulo: "Acolher quem entra depois",
    resumo: "Atenção a quem chega fora da semana de recepção.",
    detalhe: ["Receber e explicar como as coisas funcionam para que quem entra depois também tenha uma boa experiência."],
    busca: "ingressante depois transferencia chamada"
  },
  {
    area: "apsm", pagina: 13, titulo: "Canal de bolsas no WhatsApp",
    resumo: "Estágios, PUB, PIBIC e ICs num canal só.",
    detalhe: ["Um canal no WhatsApp com editais de bolsas e vagas abertas aos feanos."],
    busca: "bolsa pub pibic whatsapp edital canal"
  },
  {
    area: "apsm", pagina: 13, titulo: "Auxílios explicados",
    resumo: "PAPFE, CRUSP, USP Diversa e outros apoios divulgados de verdade.",
    detalhe: [
      "Programas da USP: PAPFE, Moradia Estudantil (CRUSP), USP Diversa e Auxílio Alimentação.",
      "Outros auxílios: Bilhete Único Estudante, auxílio do Provão Paulista e mais."
    ],
    busca: "papfe auxilio permanencia bilhete unico alimentacao dinheiro provao paulista usp diversa"
  },
  {
    area: "apsm", pagina: 13, titulo: "CRUSP perto do CAVC",
    resumo: "Grupo com os cruspianos da FEA e luta por mais vagas e PAPFE.",
    detalhe: [
      "Grupo de WhatsApp com os moradores do CRUSP que estudam na FEA.",
      "Canal direto com a AMORCRUSP e a PRIP.",
      "Participar das lutas por aumento do PAPFE, reforma não hostil do CRUSP e mais vagas na moradia."
    ],
    busca: "crusp moradia cruspiano amorcrusp prip"
  },
  {
    area: "apsm", pagina: 13, titulo: "Coletivos fortes",
    resumo: "Apoiar os coletivos ativos e ajudar a reativar os parados.",
    detalhe: ["A FEA ainda é majoritariamente composta por homens brancos. Os coletivos são essenciais para mudar isso."],
    busca: "coletivo negro feminista lgbt"
  },
  {
    area: "apsm", pagina: 13, titulo: "Disque-denúncia",
    resumo: "Canal para denunciar preconceito ou injúria, mais divulgado.",
    detalhe: ["Com a permissão da vítima, as denúncias são levadas à Ouvidoria da FEA."],
    busca: "denuncia preconceito racismo assedio ouvidoria injuria"
  },
  {
    area: "apsm", pagina: 13, titulo: "Eventos temáticos",
    resumo: "Cine debates, Girls Day, oficinas e atividades na Meia-Lua.",
    detalhe: [
      "Eventos interativos em datas como o Dia da Consciência Negra, o Dia das Mulheres e o Mês do Orgulho.",
      "Cine debates, Girls Day e oficinas de cultura negra.",
      "Atividades na Meia-Lua para ocupar os espaços da FEA."
    ],
    busca: "cine debate girls day consciencia negra orgulho mulheres meia-lua oficina"
  },
  {
    area: "apsm", pagina: 14, titulo: "Saúde mental em pauta",
    resumo: "Palestras e divulgação de atendimento gratuito ou com desconto.",
    detalhe: [
      "Palestras para tirar dúvidas, entender condições psicológicas e promover autoconhecimento.",
      "Divulgar psicólogos, psiquiatras e terapias gratuitas ou com desconto, dentro e fora da USP.",
      "Cobrar suporte institucional e fazer pesquisas diagnósticas com a Comissão de Inclusão e Pertencimento (CIP)."
    ],
    busca: "saude mental psicologo psiquiatra terapia ansiedade depressao cip"
  },
  {
    area: "apsm", pagina: 14, titulo: "Apoio Psicossocial maior",
    resumo: "Mais estudantes de baixa renda com atendimento psicológico.",
    detalhe: [
      "Estruturar melhor o projeto e divulgar mais.",
      "Parcerias com ONGs e instituições que oferecem terapia a valor social."
    ],
    busca: "psicologo terapia baixa renda apoio psicossocial"
  },
  {
    area: "apsm", pagina: 14, titulo: "Cão-terapia",
    resumo: "Cachorros na FEA para desestressar na época de provas.",
    detalhe: ["Com o PET FEA e a ONG Cão Carinho, com arrecadação de alimentos não perecíveis."],
    busca: "cachorro cao pet prova estresse"
  },

  /* ---------------- EVENTOS ---------------- */
  {
    area: "eventos", pagina: 15, titulo: "Lote social e trans",
    resumo: "Festas acessíveis, com gratuidade para quem mora no CRUSP e para pessoas trans.",
    detalhe: [
      "Gratuidade para moradores do CRUSP e de outras moradias estudantis e para pessoas trans.",
      "Ampliar com outros institutos: SanFran, Poli, Medicina, Geociências e Enfermagem já são parceiros.",
      "Posts explicando como funcionam os lotes e como pedir."
    ],
    busca: "lote social trans ingresso gratuidade festa preco gratis"
  },
  {
    area: "eventos", pagina: 15, titulo: "Comissão Anti-Opressão",
    resumo: "CAO identificável nas festas e canal aberto de denúncia.",
    detalhe: [
      "Integrantes com batas circulando durante as festas.",
      "Canais abertos para denúncia e pedido de apoio, durante e depois dos eventos.",
      "Redução de danos e suporte a quem passar mal."
    ],
    busca: "cao assedio seguranca festa reducao danos opressao"
  },
  {
    area: "eventos", pagina: 15, titulo: "Feedback depois de cada evento",
    resumo: "Pesquisa aberta para saber o que acertou e o que mudar.",
    detalhe: ["O planejamento das próximas edições parte da experiência de quem foi."],
    busca: "feedback pesquisa evento"
  },
  {
    area: "eventos", pagina: 16, titulo: "Um HH por mês",
    resumo: "Pelo menos um happy hour por mês, com edições novas.",
    detalhe: [
      "Volta de edições icônicas: HH Darkroom e HHalloween.",
      "Edições de rap, trap e hip-hop, HH FEA and Rock e um HH Queer.",
      "Organização e estrutura melhores a cada edição."
    ],
    busca: "hh happy hour sexta festa queer rap trap darkroom halloween rock"
  },
  {
    area: "eventos", pagina: 16, titulo: "Duas FEAFUNK",
    resumo: "Uma edição por semestre.",
    detalhe: ["Atrações de grande porte, open bar e lote social."],
    busca: "feafunk funk festa"
  },
  {
    area: "eventos", pagina: 16, titulo: "Calendário de festas",
    resumo: "Cervejada do Imperador, FEA Junina, EletroFEA e Imperatriz.",
    detalhe: [
      "Cervejada do Imperador no começo das aulas, com atlética, bateria e capitães de equipe.",
      "FEA Junina com comidas típicas e barracas das entidades e times.",
      "EletroFEA, para quem curte música eletrônica.",
      "Imperatriz fechando o ano."
    ],
    busca: "cervejada junina eletrofea imperatriz festa"
  },
  {
    area: "eventos", pagina: 16, titulo: "Festas com outras faculdades",
    resumo: "HH FEAFESP, G4, FEACH e novas parcerias.",
    detalhe: [
      "HH FEAFESP depois da recepção, com os CAs da Unifesp.",
      "G4, FEACH e novas parcerias com entidades de fora da FEA."
    ],
    busca: "parceria unifesp g4 feafesp feach"
  },
  {
    area: "eventos", pagina: 16, titulo: "HH beneficente",
    resumo: "Um HH LGBTQIAPN+ com parte do lucro para uma casa de acolhimento.",
    detalhe: ["Usar a força de mobilização dos eventos para apoiar causas sociais."],
    busca: "beneficente doacao lgbt solidario"
  },

  /* ---------------- MOBILIZAÇÃO ---------------- */
  {
    area: "mobilizacao", pagina: 18, titulo: "Debate no dia a dia",
    resumo: "Eventos de debate e conscientização ao longo do ano.",
    detalhe: [
      "Temas atuais e o papel que os profissionais formados na FEA ocupam na sociedade.",
      "Atividades com a Acadêmica, Eventos e APSM."
    ],
    busca: "debate politica conscientizacao"
  },
  {
    area: "mobilizacao", pagina: 18, titulo: "Ocupar a FEA",
    resumo: "Vivência, Meia-Lua e Novão como espaços de convivência crítica.",
    detalhe: ["Atividades diversas e frequentes, sempre com reflexão política."],
    busca: "ocupar vivencia meia-lua novao"
  },
  {
    area: "mobilizacao", pagina: 18, titulo: "Informação confiável",
    resumo: "Acompanhar as decisões da faculdade e contar para todo mundo.",
    detalhe: ["Materiais gráficos e digitais com informações precisas sobre o que acontece na FEA e na USP."],
    busca: "informacao material noticia"
  },
  {
    area: "mobilizacao", pagina: 18, titulo: "CAVC de volta ao Movimento Estudantil",
    resumo: "Retomar o protagonismo do CAVC no ME da USP e do Brasil.",
    detalhe: [
      "Uma posição alternativa, mas complementar em método à atual gestão do DCE.",
      "Horizontal, conectada à base e às grandes mobilizações populares.",
      "Canais com estudantes de outros institutos."
    ],
    busca: "movimento estudantil dce me usp une"
  },
  {
    area: "mobilizacao", pagina: 19, titulo: "Permanência e ingresso como luta",
    resumo: "CRUSP, condições dignas e novas formas de ingresso.",
    detalhe: [
      "Defesa da moradia e do acesso ao CRUSP.",
      "Prioridade para cotas trans e PCD e para o vestibular indígena.",
      "Fortalecer e reativar os coletivos de grupos minoritários na FEA."
    ],
    busca: "permanencia crusp ingresso cotas coletivo"
  },
  {
    area: "mobilizacao", pagina: 19, titulo: "Federações e conselhos",
    resumo: "A FEA presente em encontros, congressos e conselhos da área.",
    detalhe: [
      "A nossa continuidade recriou a FENECO, a Federação Nacional dos Estudantes de Economia.",
      "Federações e encontros: FENECO, FENEAD, FENECiC, ENECO e ENEAT.",
      "Conselhos: CORECON-SP, COFECON, CRA-SP, CFA, CRC-SP e CFC.",
      "Divulgar e comparecer a congressos e palestras dos quatro cursos."
    ],
    busca: "feneco fenead fenecic eneco eneat corecon cra crc congresso encontro federacao recriou"
  },
  {
    area: "mobilizacao", titulo: "ENECO 2028 na FEA",
    resumo: "O Encontro Nacional dos Estudantes de Economia vai ser na FEA.",
    detalhe: [
      "Em 2028 a FEA recebe o ENECO, que reúne estudantes de Economia do Brasil inteiro.",
      "É resultado do trabalho da continuidade, que recriou a FENECO.",
      "Preparar a FEA e os estudantes para receber o encontro e participar dele."
    ],
    busca: "eneco encontro nacional economia 2028 feneco sediar"
  },

  /* ---------------- COMUNICAÇÃO E VISCONDE ---------------- */
  {
    area: "comunicacao", pagina: 5, titulo: "Ouvidoria do CAVC",
    resumo: "Um canal permanente para mandar feedback, sugestão e demanda.",
    detalhe: [
      "Nos moldes de uma ouvidoria: alunos avaliam os projetos do CAVC, sugerem iniciativas e apontam o que precisa melhorar na FEA.",
      "Uma gestão mais acessível e participativa, perto do cotidiano de quem estuda."
    ],
    busca: "ouvidoria feedback sugestao reclamacao canal escuta"
  },
  {
    area: "comunicacao", pagina: 5, titulo: "Nova Secretaria de Comunicação",
    resumo: "No lugar do Marketing, uma secretaria focada em fazer.",
    detalhe: [
      "Posts, reels, textos, design e cobertura, em vez de pesquisa de mercado.",
      "Gestão das redes e da identidade visual do CAVC.",
      "Aberta aos bixos, com acompanhamento de membros mais experientes."
    ],
    busca: "comunicacao marketing instagram post reels design entrar"
  },
  {
    area: "comunicacao", pagina: 5, titulo: "Comunicação mais ágil",
    resumo: "Templates prontos e posts agendados.",
    detalhe: [
      "Templates padronizados para atender rápido as outras secretarias.",
      "Calendário do Canva integrado ao Instagram do CAVC.",
      "Cobertura dos eventos e divulgação do dia a dia."
    ],
    busca: "template canva instagram calendario cobertura"
  },
  {
    area: "comunicacao", pagina: 20, titulo: "Visconde aberto a todos",
    resumo: "Equipe editorial transparente para quem quiser escrever.",
    detalhe: ["O jornal da FEA: discussões, arte, piadas internas e experiências das entidades, sempre provocando reflexão."],
    busca: "visconde jornal revista escrever"
  },
  {
    area: "comunicacao", pagina: 20, titulo: "Visconde também no digital",
    resumo: "O jornal impresso continua, e o digital traz mais constância.",
    detalhe: ["Cobertura mais dinâmica e atualizada do que acontece na USP."],
    busca: "visconde jornal digital"
  },

  /* ---------------- GESTÃO INTERNA ---------------- */
  {
    area: "gestao", pagina: 4, titulo: "Gestão horizontal",
    resumo: "Acompanhar membros e reuniões para todo mundo trabalhar bem junto.",
    detalhe: [
      "Garantir horizontalidade, respeito e boa convivência.",
      "Eventos internos para criar laços além do dia a dia.",
      "Quando preciso, conversas individuais, reuniões sobre pautas sensíveis e, em último caso, advertências."
    ],
    busca: "gestao pessoas horizontal membros"
  },
  {
    area: "gestao", pagina: 4, titulo: "Formação para quem entra",
    resumo: "Capacitações em comunicação, planejamento, política e ME.",
    detalhe: [
      "Capacitações em marketing, comunicação, planejamento, política e movimento estudantil.",
      "Processos revistos sempre a partir do feedback interno."
    ],
    busca: "capacitacao treinamento formacao entrar gestao"
  },
  {
    area: "gestao", titulo: "Gestão que cabe na rotina de quem trabalha",
    resumo: "Um CAVC organizado para a FEA pós-cotas, em que estatutários também podem trabalhar.",
    detalhe: [
      "As cotas trouxeram para a FEA muitos estudantes que estudam e trabalham ao mesmo tempo. A estrutura do CAVC precisa acompanhar essa realidade.",
      "Adaptar o funcionamento da gestão para que quem tem estágio ou emprego também possa assumir um cargo estatutário.",
      "Responsabilidades melhor divididas e uma rotina de trabalho pensada para caber em agendas diferentes."
    ],
    busca: "trabalha trabalho emprego estagio estatutario pos-cotas cotas rotina horario gestao"
  }
];

/* "O que a continuidade já fez": aparece antes das propostas. */
window.LUMIAR_CONQUISTAS = [
  { marca: "Cotas", titulo: "Cotas na USP", texto: "A adoção das cotas na USP foi fruto da mobilização da continuidade da qual fazemos parte, com o movimento estudantil nas ruas." },
  { marca: "2018", titulo: "Atuária no nome da FEA", texto: "Ciências Atuariais entrou no nome oficial da faculdade graças à atuação estudantil." },
  { marca: "2021", titulo: "Cotas por renda", texto: "Pela primeira vez, a FEA aprovou cotas por renda, com articulação do CAVC nos colegiados." },
  { marca: "Economia", titulo: "Fim dos créditos fantasma", texto: "A representação discente apontou créditos não contabilizados na grade que poderiam travar o diploma de muita gente." },
  { marca: "100+", titulo: "Inscritos no Nivelamento", texto: "O Nivelamento Matemático foi criado por Camilly Nobre e Esther Barletta, candidatas a presidente e secretária-geral." },
  { marca: "FENECO", titulo: "Federação recriada", texto: "A continuidade recriou a Federação Nacional dos Estudantes de Economia." },
  { marca: "2028", titulo: "ENECO na FEA", texto: "O Encontro Nacional dos Estudantes de Economia vai acontecer na FEA." },
  { marca: "1ª ed.", titulo: "Festival Paul Singer", texto: "Uma semana acadêmica inédita sobre os temas que as grades deixam de lado." }
];

/* Estrutura do CAVC na proposta da Lumiar.
 * area:      liga o item às propostas acima (botão "ver propostas").
 * pendente:  texto ainda não escrito na carta. */
/* A diretoria estatutária (topo do organograma) vem de "estatutarios" no config.js. */
window.LUMIAR_ESTRUTURA = [
  {
    grupo: "Secretarias",
    descricao: "Fazem o CAVC funcionar por dentro e por fora.",
    itens: [
      { nome: "Gestão de Pessoas", area: "gestao", resumo: "Cuida para que a gestão seja um bom lugar de trabalhar: integração, acompanhamento dos membros e capacitações." },
      { nome: "Comunicação", area: "comunicacao", resumo: "Nova secretaria, no lugar da de Marketing: cria conteúdo, cobre eventos, cuida da identidade do CAVC e mantém a ouvidoria." },
      { nome: "Finanças", pendente: true },
      { nome: "Entidades", area: "entidades", resumo: "Une as mais de vinte entidades da FEA: Conselho de Entidades, créditos AEX e mais autonomia e espaço." },
      { nome: "Representação Discente", area: "rd", resumo: "Leva a voz dos estudantes aos colegiados da FEA, com consulta aos alunos e transparência sobre o que se decide." }
    ]
  },
  {
    grupo: "Áreas",
    descricao: "Tocam os projetos que chegam aos estudantes.",
    itens: [
      { nome: "Acadêmica", area: "academica", resumo: "Ensino, pesquisa e extensão: fecha as lacunas da graduação e aproxima alunos e docentes." },
      { nome: "APSM", area: "apsm", resumo: "Apoio, Permanência e Saúde Mental: acesso, diversidade, auxílios, CRUSP e cuidado com quem estuda." },
      { nome: "Eventos", area: "eventos", resumo: "Festas e encontros como espaço de pertencimento, com inclusão, segurança e escuta." },
      { nome: "Mobilização", area: "mobilizacao", resumo: "A ponte entre a FEA e o Movimento Estudantil, dentro e fora da faculdade." },
      { nome: "Visconde", area: "comunicacao", resumo: "O jornal da FEA: reflexão crítica, integração e um canal aberto a quem quiser escrever." }
    ]
  }
];

window.LUMIAR_FAQ = [
  {
    pergunta: "O que é o CAVC?",
    resposta: "O Centro Acadêmico Visconde de Cairu é a entidade que representa os estudantes da FEA-USP, de Economia, Administração, Contabilidade e Atuária. Organiza eventos, cuida da Vivência, leva as demandas dos alunos aos colegiados da faculdade e participa do Movimento Estudantil.",
    busca: "cavc centro academico visconde cairu o que faz"
  },
  {
    pergunta: "Por que \"Lumiar\"?",
    resposta: "Lumiar é iluminar. Queremos trazer mais luz e movimento para o dia a dia da FEA. O farol é quem guia e acolhe quem chega.",
    busca: "nome lumiar farol significado"
  },
  {
    pergunta: "O que significa ser continuidade?",
    resposta: "A Lumiar dá sequência ao trabalho das gestões anteriores: mantém o que funciona, como aulões, lote social, Apoio Psicossocial, Visconde e o Festival Paul Singer, e propõe o próximo passo.",
    busca: "continuidade gestao atual reeleicao anterior"
  },
  {
    pergunta: "O que o CAVC já conquistou?",
    resposta: "A adoção das cotas na USP foi fruto da mobilização da nossa continuidade. Pela representação discente, a FEA aprovou cotas por renda em 2021, incluiu Ciências Atuariais no nome oficial em 2018 e corrigiu os \"créditos fantasma\" da grade de Economia. A continuidade também recriou a FENECO, trouxe o ENECO de 2028 para a FEA, criou o Festival Paul Singer e o Nivelamento Matemático, que teve mais de 100 inscritos.",
    busca: "conquista conquistou historia cotas renda atuaria creditos fantasma feito fizeram realizacoes"
  },
  {
    pergunta: "O que são a FENECO e o ENECO?",
    resposta: "A FENECO é a Federação Nacional dos Estudantes de Economia, que a nossa continuidade recriou. O ENECO é o Encontro Nacional dos Estudantes de Economia, e a edição de 2028 vai ser na FEA.",
    busca: "feneco eneco federacao encontro nacional economia 2028"
  },
  {
    pergunta: "Quem trabalha pode fazer parte do CAVC?",
    resposta: "Pode, e deve. Depois das cotas, muita gente na FEA estuda e trabalha ao mesmo tempo. A Lumiar quer adaptar o funcionamento da gestão para que quem tem estágio ou emprego também possa assumir até cargos estatutários.",
    busca: "trabalha trabalho emprego estagio participar gestao estatutario pos-cotas tempo"
  },
  {
    pergunta: "Como faço para participar da Lumiar?",
    resposta: "",
    busca: "participar entrar ajudar fazer parte campanha voluntario"
  },
  {
    pergunta: "Quem pode votar e quando é a eleição?",
    resposta: "",
    busca: "votar eleicao quando onde urna data"
  },
  {
    pergunta: "A carta programa está pronta?",
    resposta: "Ainda estamos fechando a carta. O que está neste site é um resumo da versão atual, e as propostas podem mudar a partir das conversas com vocês.",
    busca: "carta programa pronta pdf"
  },
  {
    pergunta: "Como falo com a chapa?",
    resposta: "",
    busca: "contato falar email whatsapp telefone sugerir ideia ajudar participar"
  }
];
