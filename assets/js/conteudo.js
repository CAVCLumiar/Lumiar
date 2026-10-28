/*
 * CONTEÚDO DO SITE
 * Resumo da carta programa (versão em construção). Para mudar uma proposta,
 * edite o texto aqui; o site se monta sozinho a partir destas listas.
 *
 * pagina: página da carta em PDF (usada no botão "ver na carta").
 * busca:  palavras extras para o "Pergunte à Lumiar" encontrar a proposta.
 */

window.LUMIAR_AREAS = [
  { id: "espacos",     nome: "Espaços e vivência" },
  { id: "acolhimento", nome: "Acolhimento" },
  { id: "academica",   nome: "Acadêmica" },
  { id: "apsm",        nome: "Apoio, permanência e saúde mental" },
  { id: "eventos",     nome: "Eventos" },
  { id: "mobilizacao", nome: "Mobilização" },
  { id: "comunicacao", nome: "Comunicação e Visconde" },
  { id: "gestao",      nome: "Gestão interna" }
];

window.LUMIAR_DESTAQUES = [
  {
    titulo: "Uma FEA onde dá vontade de ficar",
    texto: "Mesas e guarda-sóis no Novão, uma Vivência bem cuidada e móveis de convivência que durem mais que o papelão. E salas próprias para as entidades na pauta.",
    area: "espacos"
  },
  {
    titulo: "Ninguém chega sozinho",
    texto: "Bar das Calouras, Apadrinhamento, USP Safari e um Guia do Calouro com tudo que ninguém te conta: ônibus, bandejão, CPTM, entidades e CEPE.",
    area: "acolhimento"
  },
  {
    titulo: "Estudar com apoio",
    texto: "Nivelamento em matemática no começo do semestre, aulões antes das provas, banco de materiais organizado e capacitação em Excel e Power BI.",
    area: "academica"
  },
  {
    titulo: "Festa é pra todo mundo",
    texto: "Lotes sociais e trans, gratuidade para quem mora no CRUSP, Comissão Anti-Opressão presente nas festas e um HH por mês.",
    area: "eventos"
  }
];

window.LUMIAR_PROPOSTAS = [
  // ESPAÇOS E VIVÊNCIA
  { area: "espacos", pagina: 2, titulo: "Ouvir antes de mexer", texto: "Mapear com os estudantes as demandas concretas dos espaços da FEA e olhar para os ambientes subutilizados.", busca: "infraestrutura espaço sala predio" },
  { area: "espacos", pagina: 2, titulo: "Salas para as entidades", texto: "Discutir alternativas viáveis para que as entidades tenham espaço próprio para reuniões, materiais e projetos.", busca: "entidade sala espaço reuniao" },
  { area: "espacos", pagina: 2, titulo: "Novão mais usável", texto: "Seguir investindo em mesas, cadeiras e guarda-sóis para ampliar o uso da área.", busca: "novao mesa cadeira guarda-sol" },
  { area: "espacos", pagina: 2, titulo: "Vivência bem cuidada", texto: "Cuidar da estrutura e do funcionamento da Vivência, a lanchonete gerida pelo CAVC.", busca: "vivencia lanchonete cantina comida" },
  { area: "espacos", pagina: 2, titulo: "Soluções que durem", texto: "Os móveis de papelão do Semead mostraram que o espaço enche quando acolhe. Agora é hora de convivência que dure.", busca: "semead papelao movel convivencia descanso" },
  { area: "espacos", pagina: 2, titulo: "Continuar o que democratiza", texto: "Manter aulões, divulgação do PAPFE, lote social nas festas e debates como portas de entrada para a vida na FEA.", busca: "continuidade acesso democratizar" },

  // ACOLHIMENTO
  { area: "acolhimento", pagina: 3, titulo: "Bar das Calouras", texto: "Na semana antes da recepção, um encontro para aproximar veteranas e calouras. Mulheres ainda são minoria na FEA.", busca: "calouro bixete mulher veterana recepcao" },
  { area: "acolhimento", pagina: 4, titulo: "Apadrinhamento", texto: "Match entre veteranes e bixos, com um evento presencial que oficializa padrinho e afilhado.", busca: "padrinho madrinha afilhado bixo calouro veterano match" },
  { area: "acolhimento", pagina: 4, titulo: "USP Safari", texto: "Um tour leve pelo campus e seus lugares históricos, com concurso de melhor foto.", busca: "tour campus calouro bixo foto" },
  { area: "acolhimento", pagina: 4, titulo: "Guia do Calouro", texto: "Material simples para consultar sempre: transporte, bandejão, CPTM, entidades, CEPE e o que mais aparecer.", busca: "calouro bixo onibus circular bandejao cptm trem cepe duvida guia" },
  { area: "acolhimento", pagina: 14, titulo: "Cartilha de Permanência", texto: "Informações de permanência acadêmica, social e financeira reunidas num só lugar, feita com O Visconde.", busca: "permanencia auxilio bolsa cartilha" },
  { area: "acolhimento", pagina: 14, titulo: "Corredor das entidades", texto: "Apoiar a organização do corredor e apresentar o CAVC aos ingressantes.", busca: "entidade calouro recepcao" },
  { area: "acolhimento", pagina: 10, titulo: "Aula Magna", texto: "Abrir o primeiro semestre com uma aula de uma referência da área, sobre o que a grade não cobre.", busca: "aula magna palestra calouro" },
  { area: "acolhimento", pagina: 11, titulo: "Aulas Trote", texto: "Aulas dadas por alunos para integrar os ingressantes, uma alternativa para quem não curte festa.", busca: "trote aula calouro integracao" },

  // ACADÊMICA
  { area: "academica", pagina: 7, titulo: "Nivelamento Matemático", texto: "Aulas no início do semestre com a base que Cálculo I e Probabilidade e Estatística exigem, organizadas com professores e monitores.", busca: "matematica calculo estatistica exatas base nivelamento" },
  { area: "academica", pagina: 7, titulo: "Aulões antes das provas", texto: "Sob demanda das turmas, pedidos pelos RCs, para todos os cursos, com formulário de feedback depois de cada período de provas.", busca: "aulao prova estudar duvida monitoria" },
  { area: "academica", pagina: 7, titulo: "Grupos de estudo", texto: "Grupos sobre temas que a graduação não cobre, com sala, contato com docentes e materiais. Alunos podem propor os seus.", busca: "grupo estudo tema" },
  { area: "academica", pagina: 8, titulo: "Banco de materiais", texto: "Pastas organizadas, provas antigas, textos e livros da bibliografia em versão digital e resumos de quem quiser compartilhar.", busca: "material prova antiga resumo livro pdf drive apostila" },
  { area: "academica", pagina: 8, titulo: "CAVCEBO", texto: "Ampliar o sebo de livros dos estudantes com parcerias dentro da USP e mais divulgação.", busca: "sebo livro cavcebo" },
  { area: "academica", pagina: 8, titulo: "Capacitação em ferramentas", texto: "Cursos de Excel e Power BI, primeiro para a gestão e depois para toda a FEA, com acervo online gratuito.", busca: "excel power bi curso capacitacao ferramenta" },
  { area: "academica", pagina: 8, titulo: "Revista de Iniciação Científica", texto: "Continuar a revista com artigos e resenhas de graduação e pós, além de manuais e editais para quem quer começar a pesquisar.", busca: "pesquisa ic iniciacao cientifica revista artigo" },
  { area: "academica", pagina: 9, titulo: "Estágios", texto: "Diretoria acessível para tirar dúvidas da burocracia de estágio e divulgação das vagas dentro da própria USP.", busca: "estagio vaga emprego trabalho secretaria" },
  { area: "academica", pagina: 9, titulo: "Pesquisa de desempenho", texto: "Formulário anônimo ao fim do semestre sobre as matérias mais difíceis, com o resultado passado aos ingressantes.", busca: "reprovacao disciplina materia dificil" },
  { area: "academica", pagina: 9, titulo: "RCs mais perto", texto: "Pelo menos duas reuniões por ano com todos os representantes de classe da FEA.", busca: "rc representante classe turma" },
  { area: "academica", pagina: 10, titulo: "Grades mais plurais", texto: "Levantar a opinião dos alunos sobre as grades e levar propostas às Comissões Coordenadoras, com RDs e Mobilização.", busca: "grade curricular curriculo economia administracao contabilidade atuaria eletiva" },
  { area: "academica", pagina: 10, titulo: "Intercâmbio e idiomas", texto: "Contato com a CCInt para divulgar editais e bolsas, apoio em inglês pelo CAVC Idiomas e normas de intercâmbio menos restritivas.", busca: "intercambio ingles idioma ccint bolsa exterior" },
  { area: "academica", pagina: 10, titulo: "Mostra de IC e TCC", texto: "Eventos para alunos apresentarem iniciações científicas e TCCs a colegas e professores, com premiação.", busca: "tcc ic apresentacao pesquisa" },
  { area: "academica", pagina: 10, titulo: "Prova substitutiva com qualquer atestado", texto: "Pautar que atestados de qualquer instituição, e não só do HU, garantam abono de falta e prova substitutiva.", busca: "atestado falta prova substitutiva hu doente" },
  { area: "academica", pagina: 11, titulo: "Festival Paul Singer", texto: "Dar continuidade à semana acadêmica com palestras, oficinas e feiras sobre o que as grades deixam de lado.", busca: "semana academica festival paul singer heterodoxia humanidades" },
  { area: "academica", pagina: 11, titulo: "CorreLab", texto: "Um corredor no saguão com estandes dos laboratórios de pesquisa da FEA para quem quer entrar numa IC.", busca: "laboratorio pesquisa ic correlab" },
  { area: "academica", pagina: 11, titulo: "Palestras ao longo do ano", texto: "Com outras áreas do CAVC, sobre grades, temas pouco abordados, intercâmbio e mais.", busca: "palestra debate" },

  // APOIO, PERMANÊNCIA E SAÚDE MENTAL
  { area: "apsm", pagina: 12, titulo: "Prédios acessíveis", texto: "Levar aos RDs projetos com rampas, piso tátil, elevadores acessíveis, saídas de emergência e climatização.", busca: "acessibilidade rampa elevador pcd deficiencia" },
  { area: "apsm", pagina: 12, titulo: "Absorventes nos banheiros", texto: "Propor à diretoria absorventes nos banheiros femininos e buscar verba via edital do SempreFEA.", busca: "absorvente banheiro dignidade menstrual" },
  { area: "apsm", pagina: 12, titulo: "Mais diversidade na FEA", texto: "Somar às lutas por cotas para pessoas trans e PCD, vestibular indígena e cotas na docência e na pós.", busca: "cota trans pcd indigena vestibular diversidade negro" },
  { area: "apsm", pagina: 12, titulo: "Intercâmbio para todos", texto: "Orientar o Horizonte Sem Fronteiras e pautar a falta de oportunidades para quem está em vulnerabilidade.", busca: "intercambio horizonte sem fronteiras vulnerabilidade" },
  { area: "apsm", pagina: 13, titulo: "Canal de bolsas e editais", texto: "Um canal no WhatsApp com estágios, PUB, PIBIC, ICs e outras oportunidades.", busca: "bolsa pub pibic whatsapp edital" },
  { area: "apsm", pagina: 13, titulo: "Auxílios explicados", texto: "Divulgar PAPFE, CRUSP, USP Diversa, auxílio alimentação, Bilhete Único estudante e outros.", busca: "papfe auxilio permanencia bilhete unico alimentacao dinheiro" },
  { area: "apsm", pagina: 13, titulo: "CRUSP perto do CAVC", texto: "Grupo com os cruspianos da FEA, diálogo com a AMORCRUSP e luta por mais PAPFE, reforma e vagas.", busca: "crusp moradia cruspiano amorcrusp" },
  { area: "apsm", pagina: 13, titulo: "Coletivos fortes", texto: "Apoiar os coletivos ativos e incentivar a volta dos que pararam.", busca: "coletivo negro feminista lgbt" },
  { area: "apsm", pagina: 13, titulo: "Disque-denúncia", texto: "Mais divulgação do canal para denunciar preconceito ou injúria. Com permissão da vítima, o caso vai à Ouvidoria.", busca: "denuncia preconceito racismo assedio ouvidoria" },
  { area: "apsm", pagina: 13, titulo: "Eventos temáticos", texto: "Cine debates, Girls Day, oficinas no mês da consciência negra e atividades na Meia-Lua.", busca: "cine debate girls day consciencia negra orgulho mulheres meia-lua" },
  { area: "apsm", pagina: 14, titulo: "Saúde mental em pauta", texto: "Palestras e divulgação de atendimento gratuito ou com desconto dentro e fora da USP.", busca: "saude mental psicologo psiquiatra terapia ansiedade" },
  { area: "apsm", pagina: 14, titulo: "Apoio Psicossocial maior", texto: "Expandir o atendimento psicológico para estudantes de baixa renda, com parcerias com ONGs.", busca: "psicologo terapia baixa renda apoio psicossocial" },
  { area: "apsm", pagina: 14, titulo: "Cão-terapia", texto: "Com o PET FEA e a ONG Cão Carinho, cachorros para desestressar na época de provas.", busca: "cachorro cao pet prova estresse" },

  // EVENTOS
  { area: "eventos", pagina: 15, titulo: "Lotes sociais e trans", texto: "Manter e divulgar melhor os lotes, com gratuidade para quem mora no CRUSP e outras moradias estudantis e para pessoas trans.", busca: "lote social trans ingresso gratuidade festa preco" },
  { area: "eventos", pagina: 15, titulo: "Comissão Anti-Opressão", texto: "CAO identificável nas festas, canais abertos para denúncia e redução de danos para quem passar mal.", busca: "cao assedio seguranca festa reducao danos" },
  { area: "eventos", pagina: 15, titulo: "Feedback depois de cada evento", texto: "Pesquisa aberta aos participantes para saber o que acertou e o que mudar.", busca: "feedback pesquisa evento" },
  { area: "eventos", pagina: 16, titulo: "Um HH por mês", texto: "Pelo menos um happy hour mensal, com a volta do HH Darkroom e do HHalloween, edições de rap e trap e um HH Queer.", busca: "hh happy hour sexta festa queer rap trap darkroom halloween" },
  { area: "eventos", pagina: 16, titulo: "Duas FEAFUNK", texto: "Uma edição por semestre, com lote social.", busca: "feafunk funk festa" },
  { area: "eventos", pagina: 16, titulo: "Calendário de festas", texto: "Cervejada do Imperador, FEA Junina, EletroFEA e Imperatriz para fechar o ano.", busca: "cervejada junina eletrofea imperatriz festa" },
  { area: "eventos", pagina: 16, titulo: "Festas com outras faculdades", texto: "G4, FEAFESP, FEACH e parcerias com SanFran, Poli, Medicina, Geociências e Enfermagem.", busca: "parceria unifesp sanfran poli medicina g4 feafesp feach" },
  { area: "eventos", pagina: 16, titulo: "HH beneficente", texto: "Um HH com temática LGBTQIAPN+ com parte do lucro para uma casa de acolhimento.", busca: "beneficente doacao lgbt solidario" },

  // MOBILIZAÇÃO
  { area: "mobilizacao", pagina: 18, titulo: "Debate no dia a dia", texto: "Ocupar a Vivência, a Meia-Lua e o Novão com debates e conscientização, não só em datas especiais.", busca: "debate politica conscientizacao vivencia" },
  { area: "mobilizacao", pagina: 18, titulo: "Informação confiável", texto: "Acompanhar as decisões da faculdade e produzir materiais para a comunidade saber o que está acontecendo.", busca: "informacao material noticia" },
  { area: "mobilizacao", pagina: 18, titulo: "CAVC de volta ao Movimento Estudantil", texto: "Retomar o protagonismo do CAVC no ME da USP, horizontal e conectado às demandas da base.", busca: "movimento estudantil dce me usp" },
  { area: "mobilizacao", pagina: 19, titulo: "Permanência como luta", texto: "Defender o CRUSP, condições dignas para todos os estudantes e novas formas de ingresso.", busca: "permanencia crusp ingresso cotas" },
  { area: "mobilizacao", pagina: 19, titulo: "Federações e conselhos", texto: "Aproximar a FEA da FENECO, FENEAD, FENECiC, ENECO, ENEAT e dos conselhos regionais e federais.", busca: "feneco fenead corecon cra crc congresso encontro" },

  // COMUNICAÇÃO E VISCONDE
  { area: "comunicacao", pagina: 5, titulo: "Nova Secretaria de Comunicação", texto: "No lugar da antiga Secretaria de Marketing, foco em posts, reels, design e cobertura, aberta aos bixos.", busca: "comunicacao marketing instagram post reels design" },
  { area: "comunicacao", pagina: 5, titulo: "Comunicação mais ágil", texto: "Templates prontos para todas as secretarias e calendário do Canva integrado ao Instagram do CAVC.", busca: "template canva instagram calendario" },
  { area: "comunicacao", pagina: 20, titulo: "Visconde aberto a todos", texto: "Equipe editorial transparente e aberta a quem quiser escrever.", busca: "visconde jornal revista escrever" },
  { area: "comunicacao", pagina: 20, titulo: "Visconde também no digital", texto: "Manter o jornal impresso e usar o digital para mais constância e cobertura da USP.", busca: "visconde jornal digital" },

  // GESTÃO INTERNA
  { area: "gestao", pagina: 4, titulo: "Gestão horizontal", texto: "Acompanhar membros e reuniões para garantir respeito, boa convivência e projetos andando.", busca: "gestao pessoas horizontal membros" },
  { area: "gestao", pagina: 4, titulo: "Formação para quem entra", texto: "Capacitações em marketing, comunicação, planejamento, política e movimento estudantil.", busca: "capacitacao treinamento formacao entrar gestao" }
];

/* Estrutura do CAVC na proposta da Lumiar.
 * area:      liga o item às propostas acima (botão "ver propostas").
 * pendente:  texto ainda não escrito na carta. */
window.LUMIAR_ESTRUTURA = [
  {
    grupo: "Estatutários e Tesouraria",
    itens: [
      { nome: "Estatutários", pendente: true },
      { nome: "Tesouraria", pendente: true }
    ]
  },
  {
    grupo: "Secretarias",
    itens: [
      { nome: "Gestão de Pessoas", area: "gestao", resumo: "Cuida para que a gestão seja um ambiente bom de trabalhar: integração, acompanhamento dos membros e capacitações." },
      { nome: "Comunicação", area: "comunicacao", resumo: "Nova secretaria, no lugar da de Marketing, focada em criar conteúdo, cobrir eventos e manter a identidade do CAVC." },
      { nome: "Finanças", pendente: true },
      { nome: "Entidades", pendente: true },
      { nome: "Representação Discente", pendente: true }
    ]
  },
  {
    grupo: "Áreas",
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
    resposta: "O Centro Acadêmico Visconde de Cairu é a entidade que representa os estudantes da FEA-USP, de Economia, Administração, Contabilidade e Atuária. Organiza eventos, cuida da Vivência, leva as demandas dos alunos à faculdade e participa do Movimento Estudantil.",
    busca: "cavc centro academico visconde cairu o que faz"
  },
  {
    pergunta: "Por que \"Lumiar\"?",
    resposta: "Lumiar é iluminar. Como diz a carta, queremos trazer mais luz e movimento para o dia a dia da FEA. O farol é quem guia e acolhe quem chega.",
    busca: "nome lumiar farol significado"
  },
  {
    pergunta: "O que significa ser continuidade?",
    resposta: "A Lumiar dá sequência ao trabalho das gestões anteriores: mantém o que funciona, como aulões, lote social, Apoio Psicossocial e Visconde, e propõe o próximo passo.",
    busca: "continuidade gestao atual reeleicao anterior"
  },
  {
    pergunta: "Quem pode votar e quando é a eleição?",
    resposta: "",
    busca: "votar eleicao quando onde urna data"
  },
  {
    pergunta: "A carta programa está pronta?",
    resposta: "Ainda estamos fechando a carta. O que está neste site é um resumo da versão atual, e as propostas podem mudar a partir das conversas com vocês.",
    busca: "carta programa proposta pronta pdf"
  },
  {
    pergunta: "Como posso sugerir algo ou ajudar?",
    resposta: "Mande sua ideia pelo formulário aqui no site ou fale com a gente no Instagram. Toda sugestão é lida pela chapa.",
    busca: "sugerir ideia ajudar participar contato"
  }
];
