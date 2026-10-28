(function () {
  "use strict";

  var CFG = window.LUMIAR_CONFIG || {};
  var AREAS = window.LUMIAR_AREAS || [];
  var PROPOSTAS = window.LUMIAR_PROPOSTAS || [];
  var ESTRUTURA = window.LUMIAR_ESTRUTURA || [];
  var FAQ = window.LUMIAR_FAQ || [];
  var DESTAQUES = window.LUMIAR_DESTAQUES || [];

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
    (filhos || []).forEach(function (f) { if (f) n.appendChild(f); });
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
    ver.addEventListener("click", function () { filtrarArea(d.area, true); });
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

  /* ---------- Propostas ---------- */
  var estado = { area: "todas", termo: "" };
  var lista = $("#lista-propostas");
  var chips = $("#chips");
  var cartoes = {};

  PROPOSTAS.forEach(function (p) {
    var estrela = el("button", { type: "button", classe: "estrela", "aria-pressed": estrelas[p.id] ? "true" : "false", "aria-label": "Marcar \"" + p.titulo + "\" como importante" });
    estrela.textContent = estrelas[p.id] ? "★" : "☆";
    estrela.addEventListener("click", function () {
      if (estrelas[p.id]) delete estrelas[p.id]; else estrelas[p.id] = 1;
      estrela.textContent = estrelas[p.id] ? "★" : "☆";
      estrela.setAttribute("aria-pressed", estrelas[p.id] ? "true" : "false");
      salvarEstrelas();
      montarChips();
      if (estado.area === "estrelas") aplicarFiltro();
    });

    var url = linkCarta(p.pagina);
    var carta = url ? el("a", { classe: "proposta__carta", href: url, target: "_blank", rel: "noopener", texto: "Ver na carta (p. " + p.pagina + ") →" }) : null;

    var cartao = el("article", { classe: "proposta", id: p.id }, [
      el("span", { classe: "proposta__area", texto: nomeArea(p.area) }),
      el("h3", { texto: p.titulo }),
      el("p", { texto: p.texto }),
      carta,
      estrela
    ]);
    p._busca = normalizar([p.titulo, p.texto, p.busca, nomeArea(p.area)].join(" "));
    cartoes[p.id] = cartao;
    lista.appendChild(cartao);
  });

  function montarChips() {
    chips.innerHTML = "";
    var opcoes = [{ id: "todas", nome: "Todas", n: PROPOSTAS.length }].concat(
      AREAS.map(function (a) {
        return { id: a.id, nome: a.nome, n: PROPOSTAS.filter(function (p) { return p.area === a.id; }).length };
      }),
      [{ id: "estrelas", nome: "★ Minhas", n: Object.keys(estrelas).length }]
    );
    opcoes.forEach(function (o) {
      var b = el("button", { type: "button", role: "tab", classe: "chip" + (o.id === "estrelas" ? " chip--estrela" : ""), "aria-selected": String(estado.area === o.id) });
      b.appendChild(document.createTextNode(o.nome));
      b.appendChild(el("span", { texto: String(o.n) }));
      b.addEventListener("click", function () { filtrarArea(o.id); });
      chips.appendChild(b);
    });
  }

  function aplicarFiltro() {
    var termos = normalizar(estado.termo).split(/\s+/).filter(Boolean);
    var visiveis = 0;
    PROPOSTAS.forEach(function (p) {
      var okArea = estado.area === "todas" || p.area === estado.area || (estado.area === "estrelas" && estrelas[p.id]);
      var okBusca = termos.every(function (t) { return p._busca.indexOf(t) !== -1; });
      var mostra = okArea && okBusca;
      cartoes[p.id].hidden = !mostra;
      if (mostra) visiveis++;
    });
    $("#contagem").textContent = visiveis === 1 ? "1 proposta" : visiveis + " propostas";
    $("#vazio").hidden = visiveis > 0;
    if (estado.area === "estrelas" && visiveis === 0 && !termos.length) {
      $("#vazio").innerHTML = "Você ainda não marcou nenhuma proposta. Clique na ☆ de um cartão.";
    } else {
      $("#vazio").innerHTML = 'Nada encontrado. Tente outra palavra ou <a href="#ideia">mande sua ideia</a>.';
    }
  }

  function filtrarArea(id, rolar) {
    estado.area = id;
    montarChips();
    aplicarFiltro();
    if (rolar) $("#propostas").scrollIntoView();
  }

  $("#busca").addEventListener("input", function (e) {
    estado.termo = e.target.value;
    aplicarFiltro();
  });

  function mostrarProposta(id) {
    estado.area = "todas";
    estado.termo = "";
    $("#busca").value = "";
    montarChips();
    aplicarFiltro();
    var c = cartoes[id];
    c.scrollIntoView({ block: "center" });
    c.classList.remove("destacada");
    void c.offsetWidth;
    c.classList.add("destacada");
  }

  montarChips();
  aplicarFiltro();

  /* ---------- Estrutura ---------- */
  var grade = $("#estrutura-grade");
  var painel = $("#estrutura-painel");
  var itemAberto = null;
  ESTRUTURA.forEach(function (g) {
    var itens = el("div", { classe: "estrutura__itens" });
    g.itens.forEach(function (item) {
      var b = el("button", { type: "button", classe: "estrutura__item" + (item.pendente ? " estrutura__item--pendente" : ""), "aria-expanded": "false", "aria-controls": "estrutura-painel", texto: item.nome });
      b.addEventListener("click", function () {
        if (itemAberto) itemAberto.setAttribute("aria-expanded", "false");
        if (itemAberto === b) { itemAberto = null; painel.hidden = true; return; }
        itemAberto = b;
        b.setAttribute("aria-expanded", "true");
        painel.innerHTML = "";
        painel.appendChild(el("h3", { texto: item.nome }));
        painel.appendChild(el("p", { texto: item.pendente ? "Esta parte da carta ainda está sendo escrita. Em breve aqui." : item.resumo }));
        if (item.area) {
          var ver = el("button", { type: "button", texto: "Ver as propostas →" });
          ver.addEventListener("click", function () { filtrarArea(item.area, true); });
          painel.appendChild(ver);
        }
        painel.hidden = false;
      });
      itens.appendChild(b);
    });
    grade.appendChild(el("div", { classe: "estrutura__grupo" }, [el("h3", { texto: g.grupo }), itens]));
  });

  /* ---------- Chapa ---------- */
  var gradeChapa = $("#chapa-grade");
  if (CFG.chapa && CFG.chapa.length) {
    CFG.chapa.forEach(function (m) {
      var foto = m.foto
        ? el("img", { src: m.foto, alt: "", loading: "lazy" })
        : el("div", { classe: "membro__sem-foto", "aria-hidden": "true", texto: (m.nome || "?").charAt(0) });
      gradeChapa.appendChild(el("div", { classe: "membro" }, [
        foto,
        el("strong", { texto: m.nome }),
        m.cargo ? el("span", { texto: m.cargo }) : null,
        m.curso ? el("span", { texto: m.curso }) : null
      ]));
    });
  } else {
    gradeChapa.appendChild(el("div", { classe: "chapa__breve" }, [
      el("img", { src: "assets/img/farol-cobre.png", alt: "" }),
      el("p", { texto: "Somos estudantes de Economia, Administração, Contabilidade e Atuária que querem uma FEA com mais luz e movimento. A composição completa da chapa sai em breve." })
    ]));
  }

  /* ---------- FAQ ---------- */
  var faqVoto = FAQ.filter(function (f) { return !f.resposta; })[0];
  if (faqVoto) {
    var e = CFG.eleicao || {};
    faqVoto.resposta = "Votam os estudantes de graduação da FEA. " +
      (e.datas ? "A eleição acontece em " + e.datas + (e.locais ? ", com " + e.locais : "") + "." : "As datas e os locais de votação serão divulgados pela comissão eleitoral, e a gente avisa aqui e no Instagram.");
  }
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

  /* ---------- Pergunte à Lumiar ---------- */
  var PARADAS = ("a o e as os de da do das dos em no na nos nas um uma uns umas para pra pro por com sem que se " +
    "como qual quais quando onde vai vao vou ter tem tera sobre isso essa esse esta este ja mais muito eu voce voces " +
    "vcs vc nos lumiar chapa proposta propostas fazer faz fazem sera ser e ou ao aos sim nao algum alguma oque").split(" ");

  function palavras(s) {
    return normalizar(s).replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(function (w) {
      return w.length > 2 && PARADAS.indexOf(w) === -1;
    });
  }
  function raiz(w) { return w.length > 5 ? w.slice(0, 5) : w; }

  // Compara pelo começo das palavras ("social" não deve casar com "psicossocial")
  function inicios(s) { return " " + normalizar(s).replace(/[^a-z0-9]+/g, " "); }

  function pontuar(pergunta, titulo, corpo, extra) {
    var t = inicios(titulo), c = inicios(corpo), x = inicios(extra);
    var pts = 0;
    palavras(pergunta).forEach(function (w) {
      var r = " " + raiz(w);
      if (t.indexOf(r) !== -1) pts += 3;
      if (x.indexOf(r) !== -1) pts += 2;
      if (c.indexOf(r) !== -1) pts += 1;
    });
    return pts;
  }

  function responder(pergunta) {
    var faqs = FAQ.map(function (f) { return { f: f, s: pontuar(pergunta, f.pergunta, f.resposta, f.busca) }; })
      .filter(function (r) { return r.s >= 3; }).sort(function (a, b) { return b.s - a.s; });
    var props = PROPOSTAS.map(function (p) { return { p: p, s: pontuar(pergunta, p.titulo, p.texto, p.busca + " " + nomeArea(p.area)) }; })
      .filter(function (r) { return r.s >= 2; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 3);

    var corpo = [];
    if (faqs.length && (!props.length || faqs[0].s >= props[0].s)) {
      corpo.push(el("p", { texto: faqs[0].f.resposta }));
    }
    if (props.length) {
      corpo.push(el("p", { texto: props.length === 1 ? "Achei isto na carta:" : "Achei estas propostas na carta:" }));
      props.forEach(function (r) {
        var b = el("button", { type: "button", classe: "resposta-item" }, [
          el("strong", { texto: r.p.titulo }),
          el("small", { texto: r.p.texto })
        ]);
        b.addEventListener("click", function () { mostrarProposta(r.p.id); });
        corpo.push(b);
      });
    }
    if (!corpo.length) {
      var link = el("a", { href: "#ideia", texto: "Manda como sugestão" });
      var p = el("p");
      p.appendChild(document.createTextNode("Ainda não temos nada sobre isso na carta. "));
      p.appendChild(link);
      p.appendChild(document.createTextNode(" que a gente lê."));
      corpo.push(p);
    }
    return corpo;
  }

  var caixaMsgs = $("#chat-mensagens");
  function mensagem(quem, filhos) {
    var m = el("div", { classe: "msg msg--" + quem });
    if (quem === "lumiar") {
      var autor = el("div", { classe: "msg__autor" }, [el("img", { src: "assets/img/farol-cobre.png", alt: "" })]);
      autor.appendChild(document.createTextNode("Lumiar"));
      m.appendChild(autor);
    }
    filhos.forEach(function (f) { m.appendChild(f); });
    caixaMsgs.appendChild(m);
    caixaMsgs.scrollTop = caixaMsgs.scrollHeight;
  }

  function perguntar(q) {
    q = q.trim();
    if (!q) return;
    mensagem("voce", [el("p", { texto: q })]);
    mensagem("lumiar", responder(q));
  }

  mensagem("lumiar", [el("p", { texto: "Oi! Pergunta o que quiser sobre as propostas: aulão, festas, CRUSP, estágio, calouros…" })]);

  ["Vai ter aulão?", "Como funciona o lote social?", "O que tem para calouros?", "E a saúde mental?", "O que é o CAVC?"].forEach(function (s) {
    var b = el("button", { type: "button", texto: s });
    b.addEventListener("click", function () { perguntar(s); });
    $("#chat-sugestoes").appendChild(b);
  });

  $("#chat-form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var entrada = $("#chat-entrada");
    perguntar(entrada.value);
    entrada.value = "";
  });
})();
