# Lumiar · Chapa ao CAVC

Site da chapa Lumiar para as eleições do Centro Acadêmico Visconde de Cairu (FEA-USP).

> Se unir para mudar, mobilizar para conquistar.

Site estático (HTML, CSS e JavaScript puro), sem build: dá para publicar direto no GitHub Pages.

## Estrutura

```
index.html              página única com todas as seções
assets/css/style.css    visual (cores, fontes, layout)
assets/js/config.js     e-mail, WhatsApp, links, cargos estatutários e integrantes  ← editar aqui
assets/js/conteudo.js   propostas (resumo + detalhe), áreas, estrutura e FAQ  ← editar aqui
assets/js/manifesto.js  manifesto e "Carta aos estudantes"  ← editar aqui
assets/js/main.js       monta as seções, filtros, estrelas, chat e formulário
assets/img/             logos (versões transparentes), favicons e imagem de compartilhamento
assets/img/chapa/       fotos dos integrantes
carta/                  PDF final da carta programa
```

## Seções

1. **Início**: farol com o feixe varrendo e o lema girando, como no selo.
2. **Manifesto**: abertura do manifesto e a "Carta aos estudantes" em partes que abrem e fecham.
3. **O que a continuidade já fez** (`LUMIAR_CONQUISTAS` em `conteudo.js`) e **O que muda para você**: quatro destaques.
4. **Propostas**: sanfona por área; cada proposta mostra uma linha e abre o detalhe. Busca, "abrir/fechar todas" e estrela ☆ para marcar (fica salvo no navegador de quem marcou).
5. **Estrutura**: organograma com a diretoria estatutária no topo e secretarias e áreas abaixo; cada frente leva às suas propostas.
6. **A chapa**: cargos estatutários em destaque e quem assina o manifesto (lidos de `config.js`).
7. **Converse com a Lumis**: chat que responde sobre propostas, áreas, pessoas e cargos da chapa (reconhece apelidos), conquistas, manifesto, contatos e votação. Não usa IA nem servidor: procura palavras em `conteudo.js`, `config.js` e `manifesto.js`. Apelidos ficam em `estatutarios` no `config.js`; sinônimos e siglas no começo da seção Lumis em `main.js`.
8. **Tem uma ideia?**: formulário que abre o e-mail (ou um Google Forms) com a sugestão.
9. **Dúvidas** e **Participe**.

## Como editar

- **Mudar ou adicionar proposta**: edite `assets/js/conteudo.js`, lista `LUMIAR_PROPOSTAS`. Cada item tem `area`, `titulo`, `resumo` (uma linha), `detalhe` (lista de pontos), `pagina` (página da carta) e `busca` (palavras extras para o chat achar).
- **Links da campanha** (Instagram, e-mail, WhatsApp, formulários, datas da eleição, cargos): `assets/js/config.js`. O que estiver vazio fica escondido.
- **Manifesto em PDF**: `manifesto/manifesto-lumiar.pdf` (para trocar, substitua o arquivo mantendo o nome).
- **Carta final**: salve como `carta/carta-programa.pdf` e preencha `cartaUrl: "carta/carta-programa.pdf"`. Confira os números de página das propostas, que hoje seguem o rascunho.
- **Integrantes**: fotos em `assets/img/chapa/` e a lista em `chapa` no `config.js`.

## Pendências de conteúdo

- Seções da carta ainda sem texto: Conjuntura (texto incompleto), Noções de CAVC, Estatutários, Tesouraria, Finanças.
- Formulário de "Quero ajudar", datas e locais da eleição.
- Conferir a regra de quem vota no regimento eleitoral (a FAQ diz "estudantes de graduação da FEA").

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `chapalumiar/site`).
2. Nesta pasta:
   ```bash
   git remote add origin https://github.com/USUARIO/REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. O site fica em `https://USUARIO.github.io/REPOSITORIO/`.

## Ver no computador

Qualquer servidor estático serve, por exemplo:

```bash
python -m http.server 8000
```

e abra `http://localhost:8000`.
