/*
 * CONFIGURAÇÕES DA CHAPA
 * Tudo que está vazio ("") fica escondido no site até ser preenchido.
 */
window.LUMIAR_CONFIG = {
  // Perfil da chapa no Instagram
  instagram: "https://www.instagram.com/lumiarfeausp/",
  instagramUsuario: "@lumiarfeausp",

  // Manifesto em PDF (o botão da seção Manifesto abre este arquivo)
  manifestoPdf: "manifesto/manifesto-lumiar.pdf",

  // E-mail que recebe as ideias enviadas pelo formulário do site
  email: "chapa.cavc.lumiar@gmail.com",

  // Contatos de WhatsApp (whatsapp: só números, com 55 + DDD)
  contatos: [
    { nome: "Camilly Nobre", telefone: "(11) 99016-2590", whatsapp: "5511990162590" },
    { nome: "Guilherme Lima", telefone: "(11) 94885-3170", whatsapp: "5511948853170" }
  ],

  // Alternativa ao e-mail: link de um Google Forms (se preenchido, o botão abre o formulário)
  formularioIdeias: "",

  // Formulário para quem quer ajudar na campanha / entrar na gestão
  formularioParticipe: "",

  // Carta programa em PDF. Quando estiver pronta, coloque o arquivo em /carta/
  // e preencha com "carta/carta-programa.pdf". Os botões "ver na carta" aparecem sozinhos.
  cartaUrl: "",

  // Eleição do CAVC
  eleicao: {
    datas: "",   // ex.: "10, 11 e 12 de novembro"
    locais: ""   // ex.: "urnas no saguão do FEA-1 e no prédio da Vivência"
  },

  // Cargos estatutários. Preencha cargo e nome; aparecem em destaque na seção "A chapa".
  // Ex.: { cargo: "Presidência", nome: "Fulana de Tal", curso: "Economia · 2º ano", foto: "assets/img/chapa/fulana.jpg" }
  estatutarios: [
    // apelidos: como as pessoas chamam (a Lumis reconhece); nota: aparece quando perguntam sobre a pessoa
    { cargo: "Presidente", nome: "Camilly Nobre Santos", curso: "Economia · 2º ano", apelidos: ["camy", "cami", "camilly"],
      nota: "Criou, com a Esther Barletta, o Nivelamento Matemático, que teve mais de 100 inscritos." },
    { cargo: "Vice-presidente", nome: "Guilherme Lima Santos Junior", curso: "Economia · 2º ano", apelidos: ["lima", "guilherme", "gui"] },
    { cargo: "Secretária-geral", nome: "Esther Barletta Efraim", curso: "Economia · 2º ano", apelidos: ["esther"],
      nota: "Criou, com a Camilly Nobre, o Nivelamento Matemático, que teve mais de 100 inscritos." },
    { cargo: "Co-tesoureira", nome: "Yasmim Yukie Oaira Siqueira", curso: "Administração · 2º ano", apelidos: ["yukie", "yasmim"] },
    { cargo: "Co-tesoureira", nome: "Kamila Araújo Cecílio", curso: "Contabilidade · 2º ano", apelidos: ["kamis", "kamila"] }
  ],

  // Quem assina o manifesto (opcional: cargo e foto)
  chapa: [
    { nome: "Anallú Novais Gusmão", curso: "Contabilidade · 1º ano" },
    { nome: "Camilly Nobre Santos", curso: "Economia · 2º ano" },
    { nome: "Carlos Henrique Sudati Marin", curso: "Atuária · 2º ano" },
    { nome: "Eduarda Braga de Aguiar Machado", curso: "Economia · 2º ano" },
    { nome: "Esther Barletta Efraim", curso: "Economia · 2º ano" },
    { nome: "Felipe Francischetti Issa de Souza", curso: "Economia · 2º ano" },
    { nome: "Guilherme Lima Santos Junior", curso: "Economia · 2º ano" },
    { nome: "Isabella Vieira Barbosa", curso: "Economia · 2º ano" },
    { nome: "João Pedro de Godoy", curso: "Contabilidade · 1º ano" },
    { nome: "João Pedro Fonsi Rosa", curso: "Economia · 3º ano" },
    { nome: "Júlia Cursino Penteado", curso: "Economia · 1º ano" },
    { nome: "Kamila Araújo Cecílio", curso: "Contabilidade · 2º ano" },
    { nome: "Larissa de Moura Martinez", curso: "Atuária · 1º ano" },
    { nome: "Luccas Queiroz de Almeida", curso: "Administração · 2º ano" },
    { nome: "Marco Antonio Rinaldi", curso: "Contabilidade · 2º ano" },
    { nome: "Maria Luiza Almeida Monteiro", curso: "Contabilidade · 3º ano" },
    { nome: "Matheus Almeida Lima", curso: "Economia · 1º ano" },
    { nome: "Matheus de Freitas Cordeiro", curso: "Contabilidade · 1º ano" },
    { nome: "Miguel Fava Santos", curso: "Economia · 1º ano" },
    { nome: "Nubia Pereira Francisco", curso: "Contabilidade · 1º ano" },
    { nome: "Olliver Anjos dos Santos Eugênio", curso: "Atuária · 1º ano" },
    { nome: "Pedro Henrique Felix Barbosa", curso: "Atuária · 1º ano" },
    { nome: "Renata Barbosa Alves", curso: "Administração · 3º ano" },
    { nome: "Yasmim Yukie Oaira Siqueira", curso: "Administração · 2º ano" }
  ]
};
