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
      var url = linkCarta(p.pagina);
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

  /* ---------- Estrutura ---------- */
  var grade = $("#estrutura-grade");
  var painel = $("#estrutura-painel");
  var itemAberto = null;
  ESTRUTURA.forEach(function (g) {
    var caixa = el("div", { classe: "estrutura__itens" });
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
          ver.addEventListener("click", function () { abrirArea(item.area, true); });
          painel.appendChild(ver);
        }
        painel.hidden = false;
      });
      caixa.appendChild(b);
    });
    grade.appendChild(el("div", { classe: "estrutura__grupo" }, [el("h3", { texto: g.grupo }), caixa]));
  });

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
    MAN.abertura.forEach(function (t) { $("#manifesto-abertura").appendChild(paragrafo(t)); });
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
  var estatutarios = (CFG.estatutarios || []).filter(function (m) { return m.nome; });
  if (estatutarios.length) {
    var caixaEst = el("div", { classe: "estatutarios" });
    estatutarios.forEach(function (m) { caixaEst.appendChild(cartaoMembro(m, true)); });
    $("#estatutarios").appendChild(el("h3", { classe: "chapa__titulo", texto: "Cargos estatutários" }));
    $("#estatutarios").appendChild(caixaEst);
  }
  if (CFG.chapa && CFG.chapa.length) {
    $("#chapa-sub").textContent = CFG.chapa.length + " estudantes de Economia, Administração, Contabilidade e Atuária assinam o manifesto.";
    CFG.chapa.forEach(function (m) { gradeChapa.appendChild(cartaoMembro(m, false)); });
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
  if (!listaContato.children.length) $("#contato").hidden = true;

  var rodapeContato = $("#rodape-contato");
  if (CFG.email) rodapeContato.appendChild(el("a", { href: "mailto:" + CFG.email, texto: CFG.email }));
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

  /* ---------- Pergunte à Lumiar ---------- */
  var PARADAS = ("a o e as os de da do das dos em no na nos nas um uma uns umas para pra pro por com sem que se " +
    "como qual quais quando onde vai vao vou ter tem tera sobre isso essa esse esta este ja mais muito eu voce voces " +
    "vcs vc nos lumiar chapa proposta propostas fazer faz fazem sera ser e ou ao aos sim nao algum alguma oque " +
    "quero queria gostaria saber pode podem existe vai vou").split(" ");

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

  function botaoProposta(p, rotulo) {
    var b = el("button", { type: "button", classe: "chat__link", texto: rotulo || p.titulo });
    b.addEventListener("click", function () { mostrarProposta(p.id); });
    return b;
  }

  // Responde em texto corrido, com o conteúdo da proposta mais próxima
  function responder(pergunta) {
    var faqs = FAQ.map(function (f) { return { f: f, s: pontuar(pergunta, f.pergunta, f.resposta, f.busca) }; })
      .filter(function (r) { return r.s >= 3; }).sort(function (a, b) { return b.s - a.s; });
    var props = PROPOSTAS.map(function (p) {
      return { p: p, s: pontuar(pergunta, p.titulo + " " + p.resumo, (p.detalhe || []).join(" "), p.busca + " " + nomeArea(p.area)) };
    }).filter(function (r) { return r.s >= 2; }).sort(function (a, b) { return b.s - a.s; });

    var corpo = [];
    if (faqs.length && (!props.length || faqs[0].s >= props[0].s)) {
      corpo.push(el("p", { texto: faqs[0].f.resposta }));
      if (props.length) {
        corpo.push(el("p", { classe: "chat__relacionadas" }, ["Tem a ver: ", botaoProposta(props[0].p)]));
      }
      return corpo;
    }

    if (props.length) {
      var p = props[0].p;
      corpo.push(el("p", {}, [el("strong", { texto: p.titulo + ". " }), p.resumo]));
      if (p.detalhe && p.detalhe.length) {
        var ul = el("ul");
        p.detalhe.forEach(function (d) { ul.appendChild(el("li", { texto: d })); });
        corpo.push(ul);
      }
      var outras = props.slice(1, 3).filter(function (r) { return r.s >= props[0].s - 3; });
      if (outras.length) {
        var rel = el("p", { classe: "chat__relacionadas" }, ["Também: "]);
        outras.forEach(function (r, i) {
          if (i) rel.appendChild(document.createTextNode(" · "));
          rel.appendChild(botaoProposta(r.p));
        });
        corpo.push(rel);
      }
      corpo.push(el("p", { classe: "chat__relacionadas" }, [botaoProposta(p, "Ver na lista de propostas →")]));
      return corpo;
    }

    corpo.push(el("p", { texto: "Isso ainda não está na nossa carta, mas a gente quer saber. Manda pra gente:" }));
    var contatos = el("p", { classe: "chat__relacionadas" });
    if (CFG.email) contatos.appendChild(el("a", { href: "mailto:" + CFG.email, texto: CFG.email }));
    CONTATOS.forEach(function (c) {
      if (contatos.childNodes.length) contatos.appendChild(document.createTextNode(" · "));
      contatos.appendChild(el("a", { href: linkWhats(c), target: "_blank", rel: "noopener", texto: "WhatsApp " + c.nome }));
    });
    if (!contatos.childNodes.length) contatos.appendChild(el("a", { href: "#ideia", texto: "formulário de ideias" }));
    corpo.push(contatos);
    return corpo;
  }

  var caixaMsgs = $("#chat-mensagens");
  function mensagem(quem, filhos) {
    var m = el("div", { classe: "msg msg--" + quem });
    if (quem === "lumiar") {
      m.appendChild(el("div", { classe: "msg__autor" }, [el("img", { src: "assets/img/farol-cobre.png", alt: "" }), "Lumiar"]));
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

  mensagem("lumiar", [el("p", { texto: "Oi! Pergunta o que quiser sobre as propostas que eu respondo com o que está na carta: aulão, festas, CRUSP, estágio, calouros…" })]);

  ["Vai ter aulão?", "Como funciona o lote social?", "O que tem para calouros?", "E a saúde mental?", "Como falo com a chapa?"].forEach(function (s) {
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
