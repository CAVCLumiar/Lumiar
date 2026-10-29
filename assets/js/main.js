(function () {
  "use strict";

  var CFG = window.LUMIAR_CONFIG || {};
  var AREAS = window.LUMIAR_AREAS || [];
  var PROPOSTAS = window.LUMIAR_PROPOSTAS || [];
  var ESTRUTURA = window.LUMIAR_ESTRUTURA || [];
  var FAQ = window.LUMIAR_FAQ || [];
  var DESTAQUES = window.LUMIAR_DESTAQUES || [];
  var CONTATOS = CFG.contatos || [];

  var CHAVE_ESTRELAS = "lumiar:estrelas";

  PROPOSTAS.forEach(function (p, i) { p.id = "p" + (i + 1); });

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function el(tag, attrs, filhos) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "texto") n.textContent = attrs[k];
      else if (k === "classe") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (filhos || []).forEach(function (f) {
      if (f == null) return;
      n.appendChild(typeof f === "string" ? document.createTextNode(f) : f);
    });
    return n;
  }
  function nomeArea(id) {
    var a = AREAS.filter(function (x) { return x.id === id; })[0];
    return a ? a.nome : "";
  }
  function normalizar(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function linkCarta(pagina) {
    if (!CFG.cartaUrl) return null;
    return CFG.cartaUrl + (pagina ? "#page=" + pagina : "");
  }
  function linkWhats(c) { return "https://wa.me/" + c.whatsapp; }

  /* ---------- Links vindos da configuração ---------- */
  document.querySelectorAll("[data-config-href]").forEach(function (a) {
    var url = CFG[a.getAttribute("data-config-href")];
    if (url) a.href = url; else a.hidden = true;
  });

  /* ---------- Menu mobile ---------- */
  var botaoMenu = $(".topo__menu");
  var nav = $("#nav");
  botaoMenu.addEventListener("click", function () {
    var aberto = nav.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("aberto"); botaoMenu.setAttribute("aria-expanded", "false"); }
  });

  /* ---------- Destaques ---------- */
  var caixaDestaques = $("#destaques");
  DESTAQUES.forEach(function (d, i) {
    var ver = el("button", { type: "button", texto: "Ver as propostas →" });
    ver.addEventListener("click", function () { abrirArea(d.area, true); });
    caixaDestaques.appendChild(el("article", { classe: "destaque" }, [
      el("div", { classe: "destaque__num", texto: String(i + 1).padStart(2, "0") }),
      el("h3", { texto: d.titulo }),
      el("p", { texto: d.texto }),
      ver
    ]));
  });

  /* ---------- Estrelas (salvas só neste navegador) ---------- */
  var estrelas = {};
  try { estrelas = JSON.parse(localStorage.getItem(CHAVE_ESTRELAS)) || {}; } catch (e) { estrelas = {}; }
  function salvarEstrelas() {
    try { localStorage.setItem(CHAVE_ESTRELAS, JSON.stringify(estrelas)); } catch (e) { /* navegador sem armazenamento */ }
  }

  /* ---------- Propostas em sanfona: área > proposta ---------- */
  var lista = $("#lista-propostas");
  var blocosArea = {};   // id da área -> { raiz, botao, corpo, contador }
  var itens = {};        // id da proposta -> { raiz, botao, corpo }
  var estado = { termo: "", soEstrelas: false };

  function alternar(botao, corpo, abrir) {
    var aberto = typeof abrir === "boolean" ? abrir : botao.getAttribute("aria-expanded") !== "true";
    botao.setAttribute("aria-expanded", String(aberto));
    corpo.hidden = !aberto;
    return aberto;
  }

  AREAS.forEach(function (a, ia) {
    var propostas = PROPOSTAS.filter(function (p) { return p.area === a.id; });
    if (!propostas.length) return;

    var contador = el("span", { classe: "area__n", texto: String(propostas.length) });
    var botao = el("button", { type: "button", classe: "area__cabeca", "aria-expanded": "false", "aria-controls": "area-" + a.id }, [
      el("span", { classe: "area__num", texto: String(ia + 1).padStart(2, "0") }),
      el("span", { classe: "area__nome", texto: a.nome }),
      contador,
      el("span", { classe: "area__seta", "aria-hidden": "true" })
    ]);
    var corpo = el("div", { classe: "area__corpo", id: "area-" + a.id, hidden: "" });
    if (a.intro) corpo.appendChild(el("p", { classe: "area__intro", texto: a.intro }));
    var ul = el("ul", { classe: "props" });
    corpo.appendChild(ul);

    propostas.forEach(function (p) {
      var estrela = el("button", { type: "button", classe: "estrela", "aria-pressed": estrelas[p.id] ? "true" : "false", "aria-label": "Marcar \"" + p.titulo + "\"", texto: estrelas[p.id] ? "★" : "☆" });
      estrela.addEventListener("click", function () {
        if (estrelas[p.id]) delete estrelas[p.id]; else estrelas[p.id] = 1;
        estrela.textContent = estrelas[p.id] ? "★" : "☆";
        estrela.setAttribute("aria-pressed", estrelas[p.id] ? "true" : "false");
        salvarEstrelas();
        atualizarEstrelas();
        if (estado.soEstrelas) aplicarFiltro();
      });

      var pb = el("button", { type: "button", classe: "prop__cabeca", "aria-expanded": "false", "aria-controls": p.id + "-corpo" }, [
        el("strong", { texto: p.titulo }),
        el("span", { texto: p.resumo })
      ]);
      var detalhe = el("ul", { classe: "prop__detalhe" });
      (p.detalhe || []).forEach(function (d) { detalhe.appendChild(el("li", { texto: d })); });
      var url = p.pagina ? linkCarta(p.pagina) : null;
      var pc = el("div", { classe: "prop__corpo", id: p.id + "-corpo", hidden: "" }, [
        detalhe,
        url ? el("a", { classe: "prop__carta", href: url, target: "_blank", rel: "noopener", texto: "Ler na carta (p. " + p.pagina + ") →" }) : null
      ]);
      pb.addEventListener("click", function () { alternar(pb, pc); });

      var li = el("li", { classe: "prop", id: p.id }, [el("div", { classe: "prop__linha" }, [pb, estrela]), pc]);
      ul.appendChild(li);
      itens[p.id] = { raiz: li, botao: pb, corpo: pc };
      p._busca = normalizar([p.titulo, p.resumo, (p.detalhe || []).join(" "), p.busca, a.nome].join(" "));
    });

    botao.addEventListener("click", function () { alternar(botao, corpo); });
    var raiz = el("section", { classe: "area", "data-area": a.id }, [el("h3", { classe: "area__titulo" }, [botao]), corpo]);
    lista.appendChild(raiz);
    blocosArea[a.id] = { raiz: raiz, botao: botao, corpo: corpo, contador: contador, total: propostas.length };
  });

  function atualizarEstrelas() {
    $("#n-estrelas").textContent = Object.keys(estrelas).length;
  }

  function aplicarFiltro() {
    var termos = normalizar(estado.termo).split(/\s+/).filter(Boolean);
    var filtrando = termos.length > 0 || estado.soEstrelas;
    var total = 0;
    var porArea = {};
    PROPOSTAS.forEach(function (p) {
      var ok = termos.every(function (t) { return p._busca.indexOf(t) !== -1; }) && (!estado.soEstrelas || estrelas[p.id]);
      itens[p.id].raiz.hidden = !ok;
      if (ok) { total++; porArea[p.area] = (porArea[p.area] || 0) + 1; }
    });
    Object.keys(blocosArea).forEach(function (id) {
      var b = blocosArea[id];
      var n = porArea[id] || 0;
      b.raiz.hidden = filtrando && n === 0;
      b.contador.textContent = filtrando ? n + " de " + b.total : String(b.total);
      if (filtrando && n) alternar(b.botao, b.corpo, true);
    });

    $("#contagem").textContent = filtrando
      ? (total === 1 ? "1 proposta encontrada" : total + " propostas encontradas")
      : PROPOSTAS.length + " propostas em " + Object.keys(blocosArea).length + " áreas";
    var vazio = $("#vazio");
    vazio.hidden = total > 0;
    vazio.innerHTML = estado.soEstrelas && !termos.length
      ? "Você ainda não marcou nenhuma proposta. Clique na ☆ ao lado de uma delas."
      : 'Nada encontrado. Tente outra palavra ou <a href="#ideia">mande sua ideia</a>.';
  }

  function todas(abrir) {
    Object.keys(blocosArea).forEach(function (id) { alternar(blocosArea[id].botao, blocosArea[id].corpo, abrir); });
  }

  function limparFiltros() {
    estado.termo = "";
    estado.soEstrelas = false;
    $("#busca").value = "";
    $("#so-estrelas").setAttribute("aria-pressed", "false");
    aplicarFiltro();
  }

  function abrirArea(id, rolar) {
    limparFiltros();
    todas(false);
    var b = blocosArea[id];
    if (!b) return;
    alternar(b.botao, b.corpo, true);
    if (rolar) b.raiz.scrollIntoView({ block: "start" });
  }

  function mostrarProposta(id) {
    var p = PROPOSTAS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    abrirArea(p.area);
    var it = itens[id];
    alternar(it.botao, it.corpo, true);
    it.raiz.scrollIntoView({ block: "center" });
    it.raiz.classList.remove("destacada");
    void it.raiz.offsetWidth;
    it.raiz.classList.add("destacada");
  }

  $("#busca").addEventListener("input", function (e) {
    estado.termo = e.target.value;
    if (!e.target.value) todas(false);
    aplicarFiltro();
  });
  $("#abrir-todas").addEventListener("click", function () { todas(true); });
  $("#fechar-todas").addEventListener("click", function () {
    todas(false);
    Object.keys(itens).forEach(function (id) { alternar(itens[id].botao, itens[id].corpo, false); });
  });
  $("#so-estrelas").addEventListener("click", function () {
    estado.soEstrelas = !estado.soEstrelas;
    this.setAttribute("aria-pressed", String(estado.soEstrelas));
    if (!estado.soEstrelas && !estado.termo) todas(false);
    aplicarFiltro();
  });

  atualizarEstrelas();
  aplicarFiltro();

  /* ---------- Estrutura (organograma) ---------- */
  var org = $("#org");
  var estatutarios = (CFG.estatutarios || []).filter(function (m) { return m.nome; });

  // Junta quem divide o mesmo cargo (ex.: as duas co-tesoureiras)
  var cargos = [];
  estatutarios.forEach(function (m) {
    var c = cargos.filter(function (x) { return x.cargo === m.cargo; })[0];
    if (c) c.nomes.push(m.nome); else cargos.push({ cargo: m.cargo, nomes: [m.nome] });
  });
  function nomeCurto(n) { var p = n.split(" "); return p.length > 2 ? p[0] + " " + p[1] : n; }

  if (cargos.length) {
    var diretoria = el("div", { classe: "org__diretoria" });
    cargos.forEach(function (c) {
      diretoria.appendChild(el("div", { classe: "org__cargo" }, [
        el("span", { classe: "org__cargo-nome", texto: c.nomes.length > 1 ? c.cargo + "s" : c.cargo }),
        el("strong", { texto: c.nomes.map(nomeCurto).join(" e ") })
      ]));
    });
    org.appendChild(el("div", { classe: "org__topo" }, [
      el("h3", { classe: "org__rotulo", texto: "Diretoria estatutária" }),
      diretoria,
      el("p", { classe: "org__nota", texto: "Pensada para a FEA pós-cotas: o funcionamento da gestão se adapta para que quem trabalha ou estagia também possa assumir um cargo estatutário." })
    ]));
    org.appendChild(el("div", { classe: "org__tronco", "aria-hidden": "true" }));
  }

  var ramos = el("div", { classe: "org__ramos" });
  ESTRUTURA.forEach(function (g) {
    var cards = el("div", { classe: "org__cards" });
    g.itens.forEach(function (item) {
      var n = item.area ? PROPOSTAS.filter(function (p) { return p.area === item.area; }).length : 0;
      var filhos = [
        el("strong", { classe: "org__frente-nome", texto: item.nome }),
        el("p", { texto: item.pendente ? "Texto da carta em construção." : item.resumo })
      ];
      var card;
      if (item.area) {
        filhos.push(el("span", { classe: "org__frente-link", texto: n + (n === 1 ? " proposta →" : " propostas →") }));
        card = el("button", { type: "button", classe: "org__frente" }, filhos);
        card.addEventListener("click", function () { abrirArea(item.area, true); });
      } else {
        card = el("div", { classe: "org__frente org__frente--pendente" }, filhos);
      }
      cards.appendChild(card);
    });
    ramos.appendChild(el("div", { classe: "org__ramo" }, [
      el("div", { classe: "org__ramo-cabeca" }, [el("h3", { texto: g.grupo }), el("p", { texto: g.descricao || "" })]),
      cards
    ]));
  });
  org.appendChild(ramos);

  /* ---------- Conjuntura ---------- */
  var CONJ = window.LUMIAR_CONJUNTURA;
  if (CONJ) {
    CONJ.partes.forEach(function (parte, i) {
      var b = el("button", { type: "button", classe: "parte__cabeca", "aria-expanded": "false", "aria-controls": "conj-" + i }, [
        el("span", { classe: "parte__num", texto: String(i + 1) }),
        el("span", { texto: parte.titulo })
      ]);
      var corpo = el("div", { classe: "parte__corpo", id: "conj-" + i, hidden: "" }, [el("p", { texto: parte.texto })]);
      b.addEventListener("click", function () { alternar(b, corpo); });
      $("#conjuntura-partes").appendChild(el("div", { classe: "parte" }, [b, corpo]));
    });
    CONJ.desafios.forEach(function (d) { $("#conjuntura-desafios").appendChild(el("li", { texto: d })); });
    $("#conjuntura-autocritica").textContent = CONJ.autocritica;
    if (CFG.cartaUrl) {
      var lk = $("#conjuntura-link");
      lk.href = CFG.cartaUrl + "#page=" + CONJ.pagina;
      lk.hidden = false;
    }
  }

  /* ---------- O que a continuidade já fez ---------- */
  (window.LUMIAR_CONQUISTAS || []).forEach(function (c) {
    $("#conquistas-lista").appendChild(el("div", { classe: "conquista" }, [
      el("span", { classe: "conquista__marca", texto: c.marca }),
      el("strong", { texto: c.titulo }),
      el("p", { texto: c.texto })
    ]));
  });

  /* ---------- Números do herói ---------- */
  var cursos = {};
  (CFG.chapa || []).forEach(function (m) { if (m.curso) cursos[m.curso.split(" ·")[0]] = 1; });
  [
    [PROPOSTAS.length, "propostas"],
    [AREAS.length, "áreas"],
    [(CFG.chapa || []).length, "estudantes"],
    [Object.keys(cursos).length, "cursos da FEA"]
  ].forEach(function (x) {
    if (!x[0]) return;
    $("#numeros").appendChild(el("div", { classe: "numeros__item" }, [el("strong", { texto: String(x[0]) }), el("span", { texto: x[1] })]));
  });
  if (CFG.instagram) $("#heroi-insta").textContent = "Siga " + (CFG.instagramUsuario || "a Lumiar") + " no Instagram →";

  /* ---------- Menu: destaca a seção visível ---------- */
  if ("IntersectionObserver" in window) {
    var linksNav = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) { linksNav[a.getAttribute("href").slice(1)] = a; });
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        // Seções fora do menu (início, chapa…) apagam o destaque
        Object.keys(linksNav).forEach(function (k) { linksNav[k].classList.remove("ativo"); });
        var a = linksNav[e.target.id];
        if (a) a.classList.add("ativo");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section").forEach(function (s) { observador.observe(s); });
  }

  /* ---------- Manifesto ---------- */
  // Parágrafo com trechos em **negrito**
  function paragrafo(texto) {
    var p = el("p");
    texto.split(/\*\*(.+?)\*\*/).forEach(function (parte, i) {
      p.appendChild(i % 2 ? el("strong", { texto: parte }) : document.createTextNode(parte));
    });
    return p;
  }
  var MAN = window.LUMIAR_MANIFESTO;
  if (MAN) {
    $("#manifesto-titulo").textContent = MAN.titulo;
    // Mostra o começo e guarda o resto atrás do "Continuar lendo"
    var VISIVEIS = 4;
    MAN.abertura.forEach(function (t, i) {
      $(i < VISIVEIS ? "#manifesto-abertura" : "#manifesto-mais").appendChild(paragrafo(t));
    });
    var botaoMais = $("#manifesto-mais-botao");
    if (MAN.abertura.length <= VISIVEIS) botaoMais.hidden = true;
    botaoMais.addEventListener("click", function () {
      var aberto = alternar(botaoMais, $("#manifesto-mais"));
      botaoMais.textContent = aberto ? "Mostrar menos" : "Continuar lendo";
    });
    $("#manifesto-assinatura").textContent = MAN.assinatura;
    $("#carta-titulo").textContent = MAN.cartaTitulo;
    MAN.carta.forEach(function (parte, i) {
      var b = el("button", { type: "button", classe: "parte__cabeca", "aria-expanded": "false", "aria-controls": "parte-" + i }, [
        el("span", { classe: "parte__num", texto: String(i + 1) }),
        el("span", { texto: parte.titulo })
      ]);
      var corpo = el("div", { classe: "parte__corpo", id: "parte-" + i, hidden: "" });
      parte.paragrafos.forEach(function (t) { corpo.appendChild(paragrafo(t)); });
      b.addEventListener("click", function () { alternar(b, corpo); });
      $("#carta-partes").appendChild(el("div", { classe: "parte" }, [b, corpo]));
    });
  }

  /* ---------- Chapa ---------- */
  function cartaoMembro(m, destaque) {
    var foto = m.foto
      ? el("img", { src: m.foto, alt: "", loading: "lazy" })
      : el("div", { classe: "membro__sem-foto", "aria-hidden": "true", texto: (m.nome || "?").charAt(0) });
    return el("div", { classe: "membro" + (destaque ? " membro--estatutario" : "") }, [
      foto,
      el("div", {}, [
        destaque && m.cargo ? el("span", { classe: "membro__cargo", texto: m.cargo }) : null,
        el("strong", { texto: m.nome }),
        !destaque && m.cargo ? el("span", { classe: "membro__cargo", texto: m.cargo }) : null,
        m.curso ? el("span", { texto: m.curso }) : null
      ])
    ]);
  }
  var gradeChapa = $("#chapa-grade");
  if (estatutarios.length) {
    var caixaEst = el("div", { classe: "estatutarios" });
    estatutarios.forEach(function (m) { caixaEst.appendChild(cartaoMembro(m, true)); });
    $("#estatutarios").appendChild(el("h3", { classe: "chapa__titulo", texto: "Cargos estatutários" }));
    $("#estatutarios").appendChild(caixaEst);
  }
  if (CFG.chapa && CFG.chapa.length) {
    // Quem já aparece nos cargos estatutários não se repete na lista
    var nomesEst = estatutarios.map(function (m) { return m.nome; });
    var demais = CFG.chapa.filter(function (m) { return nomesEst.indexOf(m.nome) === -1; });
    $("#chapa-sub").textContent = estatutarios.length
      ? "Também assinam a carta programa, ao todo " + CFG.chapa.length + " estudantes de Economia, Administração, Contabilidade e Atuária:"
      : CFG.chapa.length + " estudantes de Economia, Administração, Contabilidade e Atuária assinam a carta programa.";
    demais.forEach(function (m) { gradeChapa.appendChild(cartaoMembro(m, false)); });
  } else {
    gradeChapa.appendChild(el("div", { classe: "chapa__breve" }, [
      el("img", { src: "assets/img/farol-cobre.png", alt: "" }),
      el("p", { texto: "Somos estudantes de Economia, Administração, Contabilidade e Atuária que querem uma FEA com mais luz e movimento. A composição completa da chapa sai em breve." })
    ]));
  }

  /* ---------- Contatos ---------- */
  function textoContatos() {
    var partes = [];
    if (CFG.email) partes.push("e-mail " + CFG.email);
    CONTATOS.forEach(function (c) { partes.push(c.nome + " no WhatsApp " + c.telefone); });
    if (CFG.instagram) partes.push("ou " + (CFG.instagramUsuario || "nosso perfil") + " no Instagram");
    return partes.join(", ");
  }
  var listaContato = $("#contato-lista");
  if (CFG.email) {
    listaContato.appendChild(el("a", { classe: "contato__item", href: "mailto:" + CFG.email }, [
      el("span", { classe: "contato__tipo", texto: "E-mail" }),
      el("strong", { texto: CFG.email })
    ]));
  }
  CONTATOS.forEach(function (c) {
    listaContato.appendChild(el("a", { classe: "contato__item", href: linkWhats(c), target: "_blank", rel: "noopener" }, [
      el("span", { classe: "contato__tipo", texto: "WhatsApp" }),
      el("strong", { texto: c.nome }),
      el("span", { texto: c.telefone })
    ]));
  });
  if (CFG.instagram) {
    listaContato.appendChild(el("a", { classe: "contato__item", href: CFG.instagram, target: "_blank", rel: "noopener" }, [
      el("span", { classe: "contato__tipo", texto: "Instagram" }),
      el("strong", { texto: CFG.instagramUsuario || "Instagram" })
    ]));
  }
  if (!listaContato.children.length) $("#contato").hidden = true;

  var rodapeContato = $("#rodape-contato");
  if (CFG.instagram) rodapeContato.appendChild(el("a", { href: CFG.instagram, target: "_blank", rel: "noopener", texto: CFG.instagramUsuario || "Instagram" }));
  if (CFG.email) {
    if (rodapeContato.childNodes.length) rodapeContato.appendChild(document.createTextNode(" · "));
    rodapeContato.appendChild(el("a", { href: "mailto:" + CFG.email, texto: CFG.email }));
  }
  CONTATOS.forEach(function (c) {
    if (rodapeContato.childNodes.length) rodapeContato.appendChild(document.createTextNode(" · "));
    rodapeContato.appendChild(el("a", { href: linkWhats(c), target: "_blank", rel: "noopener", texto: c.nome + " " + c.telefone }));
  });

  /* ---------- FAQ ---------- */
  FAQ.forEach(function (f) {
    if (f.resposta) return;
    if (/votar/.test(f.pergunta)) {
      var e = CFG.eleicao || {};
      f.resposta = "Votam os estudantes de graduação da FEA. " +
        (e.datas ? "A eleição acontece em " + e.datas + (e.locais ? ", com " + e.locais : "") + "." : "As datas e os locais de votação serão divulgados pela comissão eleitoral, e a gente avisa aqui e no Instagram.");
    } else if (/fal[oa]/.test(f.pergunta)) {
      f.resposta = "Manda sua ideia pelo formulário aqui do site ou fala direto com a gente: " + textoContatos() + ".";
    } else if (/particip/.test(f.pergunta)) {
      f.resposta = "Não existe participação pequena: dá para ajudar na campanha, levar a conversa para a sua turma ou só mandar uma ideia. Fala com a gente: " + textoContatos() + ".";
    }
  });
  var listaFaq = $("#faq-lista");
  FAQ.forEach(function (f) {
    listaFaq.appendChild(el("details", {}, [el("summary", { texto: f.pergunta }), el("p", { texto: f.resposta })]));
  });

  /* ---------- Formulário de ideias ---------- */
  var selArea = $("#ideia-area");
  selArea.appendChild(el("option", { value: "Qualquer área", texto: "Qualquer área" }));
  AREAS.forEach(function (a) { selArea.appendChild(el("option", { value: a.nome, texto: a.nome })); });
  var texto = $("#ideia-texto");
  var restante = $("#ideia-restante");
  texto.addEventListener("input", function () {
    restante.textContent = (texto.maxLength - texto.value.length) + " caracteres restantes";
  });
  var nota = $("#ideia-nota");
  if (CFG.formularioIdeias) {
    nota.textContent = "Ao enviar, abrimos nosso formulário com a sua ideia.";
  } else if (CFG.email) {
    nota.textContent = "Ao enviar, seu aplicativo de e-mail abre com a mensagem pronta. Se preferir, escreva para " + CFG.email + ".";
  } else {
    nota.textContent = "Enquanto o canal de ideias não abre, mande sua sugestão por mensagem no Instagram da chapa.";
  }
  $("#ideia-form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var msg = "Área: " + selArea.value + "\n\n" + texto.value.trim();
    if (CFG.formularioIdeias) {
      window.open(CFG.formularioIdeias, "_blank", "noopener");
    } else if (CFG.email) {
      window.location.href = "mailto:" + CFG.email + "?subject=" + encodeURIComponent("Ideia para a Lumiar") + "&body=" + encodeURIComponent(msg);
    } else if (CFG.instagram) {
      window.open(CFG.instagram, "_blank", "noopener");
    } else {
      nota.textContent = "O canal de ideias ainda não está configurado. Volte em breve!";
    }
  });

  /* ---------- Lumis: o chat que responde sobre a Lumiar ---------- */
  var PARADAS = ("a o e as os de da do das dos em no na nos nas um uma uns umas para pra pro por com sem que se " +
    "como qual quais quando onde vai vao vou ter tem tera sobre isso essa esse esta este ja mais muito eu voce voces " +
    "vcs vc nos lumiar chapa proposta propostas fazer faz fazem sera ser e ou ao aos sim nao algum alguma oque " +
    "quero queria gostaria saber pode podem existe me fala conta explica sobre ai la tipo coisa coisas gente vou " +
    "sao sera seriam estao estava foi era tinha teve vao").split(" ");

  // Começo da palavra digitada -> palavras que aparecem no conteúdo
  var SINONIMOS = {
    bixo: "calouro ingressante recepcao", bixe: "calouro ingressante recepcao", calou: "calouro ingressante recepcao",
    ingre: "calouro ingressante", primeiro: "calouro",
    festa: "festa evento hh", role: "festa evento", balad: "festa evento", open: "festa evento",
    grana: "auxilio bolsa permanencia", dinhe: "auxilio bolsa permanencia", bolsa: "bolsa auxilio",
    psico: "saude mental psicologo", terap: "saude mental terapia", ansie: "saude mental", depre: "saude mental",
    burno: "saude mental", exame: "prova aulao", provas: "prova aulao",
    empreg: "estagio trabalha", traba: "trabalha estagio", estag: "estagio",
    vaga: "vaga estagio", curri: "curriculo", cv: "curriculo", linke: "linkedin", entrev: "entrevista", turno: "turno",
    notur: "noturno turno", certi: "certificacao", cpa: "certificacao cpa", cea: "certificacao cea", gupy: "vaga gupy",
    comid: "vivencia lanchonete", lanch: "vivencia lanchonete", cafe: "vivencia", canti: "vivencia",
    morad: "crusp moradia", morar: "crusp moradia", moro: "crusp moradia", mora: "crusp moradia", repub: "crusp moradia",
    gay: "lgbt", queer: "lgbt queer", lgbt: "lgbt", trans: "trans lgbt",
    racis: "racismo negro denuncia", negro: "negro", negra: "negro", preto: "negro", preta: "negro",
    mulhe: "mulher", femin: "mulher", menin: "mulher",
    cadei: "acessibilidade pcd", defic: "pcd acessibilidade", acess: "acessibilidade",
    voto: "votar eleicao", votar: "votar eleicao", eleic: "eleicao votar", urna: "votar eleicao",
    ingle: "ingles intercambio idioma", inter: "intercambio", exter: "intercambio",
    mater: "disciplina materia", disci: "disciplina",
    calcu: "matematica nivelamento calculo", estati: "estatistica nivelamento", matem: "matematica nivelamento",
    insta: "instagram contato", whats: "whatsapp contato", zap: "whatsapp contato", email: "email contato",
    telef: "contato whatsapp", conta: "contato", falar: "contato",
    conqu: "conquista", fizer: "conquista feito", feito: "conquista feito",
    entid: "entidade", grade: "grade curricular", curri: "grade curricular",
    cota: "cotas", cotas: "cotas",
    finan: "financas contas", orcam: "orcamento", transp: "transparencia contas", balan: "contas balanco", gasto: "contas gasto", patro: "parceria patrocinio"
  };

  // Palavras que puxam cada área (para "o que vocês propõem para festas?")
  var PALAVRAS_AREA = {
    espacos: ["espac", "vivenc", "infra", "sala", "predi", "novao"],
    acolhimento: ["calou", "bixo", "bixe", "recep", "acolh", "ingre"],
    academica: ["acade", "aula", "ensin", "pesqu", "nivel"],
    rd: ["repre", "coleg", "rd", "rds"],
    entidades: ["entid"],
    financas: ["finan", "orcam", "verba", "contas", "caixa", "transpar"],
    apsm: ["perma", "saude", "apsm", "auxil", "diver", "crusp"],
    eventos: ["event", "festa", "hh", "role"],
    mobilizacao: ["mobil", "polit", "movim"],
    comunicacao: ["comun", "visco", "jorna", "ouvid"],
    gestao: ["gesta", "intern"]
  };

  var PESSOAS = (function () {
    var lista = [];
    (CFG.estatutarios || []).forEach(function (m) { lista.push(m); });
    (CFG.chapa || []).forEach(function (m) {
      if (!lista.some(function (x) { return x.nome === m.nome; })) lista.push(m);
    });
    lista.forEach(function (m) {
      var chaves = (m.apelidos || []).map(normalizar);
      var primeiro = normalizar(m.nome.split(" ")[0]);
      if (primeiro.length >= 4 && chaves.indexOf(primeiro) === -1) chaves.push(primeiro);
      m._chaves = chaves;
    });
    return lista;
  })();

  function palavras(s) {
    return normalizar(s).replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(function (w) {
      return w.length > 2 && PARADAS.indexOf(w) === -1;
    });
  }
  function todasPalavras(s) { return normalizar(s).replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean); }
  function comSinonimos(lista) {
    var out = lista.slice();
    lista.forEach(function (w) {
      Object.keys(SINONIMOS).forEach(function (k) {
        if (w.indexOf(k) === 0) SINONIMOS[k].split(" ").forEach(function (x) { if (out.indexOf(x) === -1) out.push(x); });
      });
    });
    return out;
  }
  function raiz(w) { return w.length > 5 ? w.slice(0, 5) : w; }
  // Compara pelo começo das palavras ("social" não deve casar com "psicossocial")
  function inicios(s) { return " " + normalizar(s).replace(/[^a-z0-9]+/g, " ") + " "; }
  function tem(lista, prefixos) {
    return lista.some(function (w) { return prefixos.some(function (p) { return w.indexOf(p) === 0; }); });
  }

  function pontuar(lista, titulo, corpo, extra) {
    var t = inicios(titulo), c = inicios(corpo), x = inicios(extra);
    var pts = 0;
    lista.forEach(function (w) {
      // palavras curtas ("cavc", "hh") valem só inteiras: "cavc" não puxa "cavcebo"
      var r = " " + raiz(w) + (w.length <= 4 ? " " : "");
      if (t.indexOf(r) !== -1) pts += 3;
      if (x.indexOf(r) !== -1) pts += 2;
      if (c.indexOf(r) !== -1) pts += 1;
    });
    return pts;
  }

  function botao(rotulo, acao) {
    var b = el("button", { type: "button", classe: "chat__link", texto: rotulo });
    b.addEventListener("click", acao);
    return b;
  }
  function botaoProposta(p, rotulo) { return botao(rotulo || p.titulo, function () { mostrarProposta(p.id); }); }
  function botaoArea(id, rotulo) { return botao(rotulo || nomeArea(id), function () { abrirArea(id, true); }); }
  function irPara(id, rotulo) { return botao(rotulo, function () { document.getElementById(id).scrollIntoView(); }); }
  function linha(filhos, classe) { return el("p", { classe: classe || "chat__relacionadas" }, filhos); }
  function listaBotoes(prefixo, botoes) {
    var p = linha([prefixo]);
    botoes.forEach(function (b, i) { if (i) p.appendChild(document.createTextNode(" · ")); p.appendChild(b); });
    return p;
  }
  function blocoContatos() {
    var p = linha([]);
    function add(a) { if (p.childNodes.length) p.appendChild(document.createTextNode(" · ")); p.appendChild(a); }
    if (CFG.email) add(el("a", { href: "mailto:" + CFG.email, texto: CFG.email }));
    CONTATOS.forEach(function (c) { add(el("a", { href: linkWhats(c), target: "_blank", rel: "noopener", texto: "WhatsApp " + c.nome })); });
    if (CFG.instagram) add(el("a", { href: CFG.instagram, target: "_blank", rel: "noopener", texto: CFG.instagramUsuario || "Instagram" }));
    if (!p.childNodes.length) add(el("a", { href: "#ideia", texto: "formulário de ideias" }));
    return p;
  }

  /* Cada função devolve a resposta (lista de elementos) ou null para passar adiante */
  var INTENCOES = [
    // Oi / tudo bem?
    function (q, todas) {
      var SAUDA = "oi oie ola eai e ai opa salve bom boa dia tarde noite tudo bem bom lumis hey hello td blz beleza".split(" ");
      if (!todas.length || !todas.every(function (w) { return SAUDA.indexOf(w) !== -1; })) return null;
      return [el("p", { texto: "Oi! Eu sou a Lumis, da chapa Lumiar. Posso te contar das propostas, de quem está na chapa, do que a gente já fez e de como votar. Pergunta aí!" })];
    },
    // Obrigado
    function (q, todas) {
      if (!tem(todas, ["obrigad", "brigad", "valeu", "vlw", "agradec"])) return null;
      return [el("p", { texto: "De nada! Se quiser conversar com alguém da chapa, chama a gente:" }), blocoContatos()];
    },
    // Quem é você?
    function (q, todas) {
      if (!(tem(todas, ["lumis"]) || (tem(todas, ["quem"]) && tem(todas, ["voce", "vc"])))) return null;
      return [el("p", { texto: "Eu sou a Lumis, a assistente do site da Lumiar. Respondo com o que está na nossa carta programa e no manifesto. Não sou uma pessoa: para falar com a chapa, use os contatos abaixo." }), blocoContatos()];
    },
    // Instagram, WhatsApp, e-mail
    function (q, todas) {
      if (!tem(todas, ["insta", "whats", "zap", "email", "e-mail", "telefo", "contat", "numero", "celular"])) return null;
      var t = "Fala com a gente por aqui:";
      if (tem(todas, ["insta"]) && CFG.instagram) t = "Nosso Instagram é " + (CFG.instagramUsuario || CFG.instagram) + ". E também dá para falar com a gente por:";
      return [el("p", { texto: t }), blocoContatos()];
    },
    // Dinheiro do próprio CAVC (e não auxílio para o estudante)
    function (q, todas) {
      if (!(tem(todas, ["dinhe", "grana", "verba", "caixa", "contas", "orcam", "finan", "gasto", "receit"]) &&
            tem(todas, ["cavc", "centro", "gestao", "voces", "vcs", "lumiar", "onde", "mostr", "divulg", "transpar"]))) return null;
      if (tem(todas, ["auxil", "bolsa", "papfe"])) return null;
      var base = palavras(q).filter(function (w) { return !/^(dinhe|grana|verba|caixa)/.test(w); });
      return buscarConteudo(q, base.concat(["contas"]));
    },
    // Quem trabalha pode fazer parte?
    function (q, todas) {
      if (!(tem(todas, ["trabalh", "emprego", "estagi"]) && tem(todas, ["particip", "parte", "estatut", "cargo", "gestao", "pode", "posso", "entrar"]))) return null;
      var f = FAQ.filter(function (x) { return /trabalha/.test(normalizar(x.pergunta)); })[0];
      var g = PROPOSTAS.filter(function (p) { return /rotina de quem trabalha/.test(p.titulo); })[0];
      var out = [el("p", { texto: f ? f.resposta : "Pode! A Lumiar quer uma gestão que caiba na rotina de quem trabalha." })];
      if (g) out.push(linha(["Tem a ver: ", botaoProposta(g)]));
      return out;
    },
    // Alguém da chapa pelo nome ou apelido
    function (q, todas) {
      // "marco" também é o mês (março): só conta como nome se a pergunta tiver "quem"
      var AMBIGUOS = ["marco"];
      var achadas = PESSOAS.filter(function (m) {
        return m._chaves.some(function (k) { return todas.indexOf(k) !== -1 && (AMBIGUOS.indexOf(k) === -1 || todas.indexOf("quem") !== -1); });
      });
      if (!achadas.length) return null;
      var out = [];
      achadas.slice(0, 3).forEach(function (m) {
        var t = m.nome + " estuda " + (m.curso || "na FEA").replace(" · ", ", ") + ". ";
        t += m.cargo ? "Concorre a " + m.cargo.toLowerCase() + " pela Lumiar." : "Assina o manifesto da Lumiar.";
        if (m.nota) t += " " + m.nota;
        out.push(el("p", { texto: t }));
      });
      out.push(linha([irPara("chapa", "Ver a chapa toda →")]));
      return out;
    },
    // Presidente, vice, tesouraria…
    function (q, todas) {
      var CARGOS = { presid: "presidente", vice: "vice-presidente", secre: "secretária-geral", tesou: "co-tesoureira" };
      var est = (CFG.estatutarios || []).filter(function (m) { return m.nome; });
      if (!est.length) return null;
      // "secretaria" sozinha é das secretarias do CAVC; só vira cargo com "geral"
      var pedido = Object.keys(CARGOS).filter(function (k) { return tem(todas, [k]) && (k !== "secre" || tem(todas, ["geral"])); });
      var geral = tem(todas, ["estatut", "diretor", "candidat", "cargo", "cabeca"]);
      if (!pedido.length && !geral) return null;
      if (tem(todas, ["porque", "motivo"]) || /por que/.test(normalizar(q))) return null;
      var alvo = pedido.length && !geral
        ? est.filter(function (m) { return pedido.some(function (k) { return normalizar(m.cargo).indexOf(CARGOS[k].slice(0, 5)) === 0; }); })
        : est;
      if (!alvo.length) alvo = est;
      var out = [];
      if (alvo.length === 1) {
        var m1 = alvo[0];
        out.push(el("p", { texto: "Quem concorre a " + m1.cargo.toLowerCase() + " pela Lumiar é " + m1.nome + ", de " + (m1.curso || "").replace(" · ", ", ") + "." + (m1.nota ? " " + m1.nota : "") }));
      } else {
        out.push(el("p", { texto: alvo.length === est.length ? "A diretoria estatutária da Lumiar:" : "Quem concorre:" }));
        var ul = el("ul");
        alvo.forEach(function (m) {
          ul.appendChild(el("li", { texto: m.cargo + ": " + m.nome + " (" + (m.curso || "").replace(" · ", ", ") + ")" + (m.nota ? ". " + m.nota : "") }));
        });
        out.push(ul);
      }
      out.push(linha([irPara("chapa", "Ver a chapa toda →")]));
      return out;
    },
    // Quem está na chapa?
    function (q, todas) {
      if (!(tem(todas, ["quem", "quant"]) && tem(todas, ["chapa", "integr", "membr", "pessoa", "parte", "compo", "lumiar", "estud"]))) return null;
      if (tem(todas, ["pode", "posso", "trabalh", "como", "vota"])) return null;
      var chapa = CFG.chapa || [];
      var cursos = {};
      chapa.forEach(function (m) { var c = (m.curso || "").split(" ·")[0]; if (c) cursos[c] = (cursos[c] || 0) + 1; });
      var est = (CFG.estatutarios || []).filter(function (m) { return m.nome; });
      var out = [el("p", { texto: "A Lumiar tem " + chapa.length + " estudantes: " + Object.keys(cursos).map(function (c) { return cursos[c] + " de " + c; }).join(", ") + "." })];
      if (est.length) out.push(el("p", { texto: "Na diretoria: " + est.map(function (m) { return m.nome.split(" ").slice(0, 2).join(" ") + " (" + m.cargo.toLowerCase() + ")"; }).join(", ") + "." }));
      out.push(linha([irPara("chapa", "Ver todo mundo →")]));
      return out;
    },
    // Conjuntura
    function (q, todas, lista) {
      var CONJ = window.LUMIAR_CONJUNTURA;
      if (!CONJ) return null;
      var CHAVES = ["conjunt", "lula", "trump", "tarcis", "haddad", "icms", "venezu", "palest", "bolson", "congres",
        "soberan", "extrema", "fapesp", "brasil", "mundo", "governo", "reitor", "desafi"];
      if (!tem(todas, CHAVES)) return null;
      if (tem(todas, ["desafi"]) && !tem(todas, ["lula", "trump", "tarcis"])) {
        var ul = el("ul");
        CONJ.desafios.forEach(function (d) { ul.appendChild(el("li", { texto: d })); });
        return [el("p", { texto: "Os desafios que a Lumiar enxerga para 2027:" }), ul, linha([irPara("conjuntura", "Ver a conjuntura →")])];
      }
      var melhor = CONJ.partes.map(function (p) { return { p: p, s: pontuar(lista, p.titulo, p.texto, "") }; })
        .sort(function (a, b) { return b.s - a.s; })[0];
      var out = [];
      if (melhor && melhor.s >= 2) {
        out.push(el("p", {}, [el("strong", { texto: melhor.p.titulo + ". " }), melhor.p.texto]));
      } else {
        out.push(el("p", { texto: "A carta lê 2026 como um ano de ameaça imperialista no mundo, de vitória popular com a reeleição de Lula no Brasil, de cortes e falta de financiamento das universidades em São Paulo e de greve na USP, em que a FEA conquistou o reajuste anual do PAPFE." }));
      }
      var bts = [irPara("conjuntura", "Ver a conjuntura →")];
      if (CFG.cartaUrl) bts.push(el("a", { href: CFG.cartaUrl + "#page=" + CONJ.pagina, target: "_blank", rel: "noopener", texto: "Ler na carta" }));
      out.push(listaBotoes("", bts));
      return out;
    },
    // Manifesto
    function (q, todas) {
      if (!tem(todas, ["manifest"])) return null;
      var out = [el("p", { texto: "O manifesto diz por que somos Lumiar: iluminar o presente e construir o futuro, com uma FEA mais plural, inclusiva e acolhedora, e um CAVC perto dos estudantes. Ele também traz a Carta aos estudantes, sobre política no coletivo, permanência, entidades, representação e continuidade crítica." })];
      var bts = [irPara("manifesto", "Ler aqui no site →")];
      if (CFG.manifestoPdf) bts.push(el("a", { href: CFG.manifestoPdf, target: "_blank", rel: "noopener", texto: "Abrir o PDF" }));
      out.push(listaBotoes("", bts));
      return out;
    },
    // Visão geral: "quais são as propostas?"
    function (q, todas, lista) {
      var geral = tem(todas, ["propost", "plano", "program", "ideias"]) || (tem(todas, ["fazer", "faz"]) && tem(todas, ["voces", "vcs", "lumiar", "chapa"]));
      if (!geral) return null;
      var areaPedida = Object.keys(PALAVRAS_AREA).filter(function (id) { return tem(todas, PALAVRAS_AREA[id]); });
      if (areaPedida.length) return null; // fica com a resposta por área
      if (lista.filter(function (w) { return !/^(propost|plano|program|ideia|quais|todas|tudo|lista|principa|fazer|faz|\d+$)/.test(w); }).length > 0) return null;
      var out = [el("p", { texto: "São " + PROPOSTAS.length + " propostas em " + AREAS.length + " áreas. Clica numa área para ver:" })];
      out.push(listaBotoes("", AREAS.map(function (a) { return botaoArea(a.id, a.nome + " (" + PROPOSTAS.filter(function (p) { return p.area === a.id; }).length + ")"); })));
      return out;
    },
    // Uma área inteira: "o que tem de eventos?"
    function (q, todas) {
      if (!/(o que (tem|voces|vcs|a lumiar|e |eh )|quais|propost|tudo|todas|lista)/.test(normalizar(q) + " ")) return null;
      var areas = Object.keys(PALAVRAS_AREA).filter(function (id) { return tem(todas, PALAVRAS_AREA[id]); });
      if (areas.length !== 1) return null;
      var a = AREAS.filter(function (x) { return x.id === areas[0]; })[0];
      var props = PROPOSTAS.filter(function (p) { return p.area === a.id; });
      var out = [el("p", {}, [el("strong", { texto: a.nome + ". " }), a.intro || ""])];
      out.push(listaBotoes("Propostas: ", props.map(function (p) { return botaoProposta(p); })));
      return out;
    }
  ];

  // Busca geral: FAQ, propostas e manifesto
  function buscarConteudo(q, lista) {
    var faqs = FAQ.map(function (f) { return { f: f, s: pontuar(lista, f.pergunta, f.resposta, f.busca) }; })
      .filter(function (r) { return r.s >= 3; }).sort(function (a, b) { return b.s - a.s; });
    var props = PROPOSTAS.map(function (p) {
      return { p: p, s: pontuar(lista, p.titulo + " " + p.resumo, (p.detalhe || []).join(" "), p.busca + " " + nomeArea(p.area)) };
    }).filter(function (r) { return r.s >= 2; }).sort(function (a, b) { return b.s - a.s; });
    var trechos = [];
    if (window.LUMIAR_MANIFESTO) {
      window.LUMIAR_MANIFESTO.carta.forEach(function (parte) {
        parte.paragrafos.forEach(function (t) { trechos.push({ parte: parte.titulo, t: t.replace(/\*\*/g, ""), s: pontuar(lista, parte.titulo, t, "") }); });
      });
      trechos = trechos.filter(function (r) { return r.s >= 4; }).sort(function (a, b) { return b.s - a.s; });
    }

    var melhorFaq = faqs.length ? faqs[0].s : 0;
    var melhorProp = props.length ? props[0].s : 0;
    var out = [];

    if (melhorFaq && melhorFaq >= melhorProp) {
      out.push(el("p", { texto: faqs[0].f.resposta }));
      if (props.length) out.push(linha(["Tem a ver: ", botaoProposta(props[0].p)]));
      return out;
    }
    if (props.length) {
      var p = props[0].p;
      var afirmativa = /^(vai|vao|tem|tera|terao|havera|existe|rola|vai ter|voces vao)/.test(normalizar(q).trim());
      out.push(el("p", {}, [afirmativa ? "Sim! " : "", el("strong", { texto: p.titulo + ". " }), p.resumo]));
      if (p.detalhe && p.detalhe.length) {
        var ul = el("ul");
        p.detalhe.forEach(function (d) { ul.appendChild(el("li", { texto: d })); });
        out.push(ul);
      }
      var outras = props.slice(1, 3).filter(function (r) { return r.s >= props[0].s - 3; });
      if (outras.length) out.push(listaBotoes("Também: ", outras.map(function (r) { return botaoProposta(r.p); })));
      out.push(linha([botaoProposta(p, "Ver na lista de propostas →")]));
      return out;
    }
    if (trechos.length) {
      out.push(el("p", { texto: "No manifesto, em \"" + trechos[0].parte + "\", a gente diz:" }));
      out.push(el("p", { classe: "msg__citacao", texto: trechos[0].t }));
      out.push(linha([irPara("manifesto", "Ler o manifesto →")]));
      return out;
    }
    return null;
  }

  // Siglas curtas que o filtro de palavras jogaria fora
  var SIGLAS = { rd: "representacao discente colegiado", rds: "representacao discente colegiado", rc: "representante classe",
    rcs: "representante classe", ca: "cavc", ic: "iniciacao cientifica pesquisa", hh: "hh festa", cao: "comissao anti-opressao" };

  function responder(q) {
    var todas = todasPalavras(q);
    var base = palavras(q);
    todas.forEach(function (w) { if (SIGLAS[w]) SIGLAS[w].split(" ").forEach(function (x) { base.push(x); }); });
    var lista = comSinonimos(base);
    for (var i = 0; i < INTENCOES.length; i++) {
      var r = INTENCOES[i](q, todas, lista);
      if (r) return r;
    }
    var r2 = buscarConteudo(q, lista);
    if (r2) return r2;
    return [
      el("p", { texto: "Hmm, isso eu ainda não sei responder, e pode não estar na carta. Manda pra gente que alguém da chapa te responde:" }),
      blocoContatos(),
      listaBotoes("Ou tenta: ", ["Quais são as propostas?", "Quem é a presidente?", "O que vocês já fizeram?"].map(function (s) {
        return botao(s, function () { perguntar(s); });
      }))
    ];
  }

  var caixaMsgs = $("#chat-mensagens");
  function mensagem(quem, filhos) {
    var m = el("div", { classe: "msg msg--" + quem });
    if (quem === "lumiar") {
      m.appendChild(el("div", { classe: "msg__autor" }, [el("img", { src: "assets/img/farol-cobre.png", alt: "" }), "Lumis"]));
    }
    filhos.forEach(function (f) { m.appendChild(f); });
    caixaMsgs.appendChild(m);
    caixaMsgs.scrollTop = caixaMsgs.scrollHeight;
    return m;
  }

  function perguntar(q) {
    q = q.trim();
    if (!q) return;
    mensagem("voce", [el("p", { texto: q })]);
    var digitando = mensagem("lumiar", [el("p", { classe: "msg__digitando", "aria-label": "digitando", texto: "• • •" })]);
    setTimeout(function () {
      digitando.remove();
      mensagem("lumiar", responder(q));
    }, 450);
  }

  mensagem("lumiar", [el("p", { texto: "Oi! Eu sou a Lumis. Pergunta o que quiser: propostas, quem está na chapa, o que já fizemos, como votar, o que é o CAVC…" })]);

  ["Quais são as propostas?", "Quem é a presidente?", "Vai ter aulão?", "O que vocês já fizeram?", "Como funciona o lote social?", "Quem trabalha pode participar?"].forEach(function (s) {
    var b = el("button", { type: "button", texto: s });
    b.addEventListener("click", function () { perguntar(s); });
    $("#chat-sugestoes").appendChild(b);
  });

  /* ---------- Voltar ao topo ---------- */
  var voltar = $(".topo-voltar");
  window.addEventListener("scroll", function () { voltar.hidden = window.scrollY < 900; }, { passive: true });

  /* ---------- Cartões aparecem ao rolar ---------- */
  var reduzir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduzir) {
    var revelaveis = document.querySelectorAll(".destaque, .conquista, .area, .org__topo, .org__ramo, .membro, .lema__parte, .conjuntura__desafios, .chat, .contato__item");
    var respondeu = false;
    var revelar = new IntersectionObserver(function (entradas) {
      respondeu = true;
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visivel"); revelar.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    revelaveis.forEach(function (n, i) {
      n.classList.add("revelar");
      n.style.transitionDelay = (i % 4) * 60 + "ms";
      revelar.observe(n);
    });
    // Garantia: se o navegador não avisar nada (aba em segundo plano, por exemplo), mostra tudo
    setTimeout(function () {
      if (!respondeu) revelaveis.forEach(function (n) { n.classList.add("visivel"); });
    }, 2500);
  }

  $("#chat-form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var entrada = $("#chat-entrada");
    perguntar(entrada.value);
    entrada.value = "";
  });
})();
