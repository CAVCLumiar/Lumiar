# Lumiar · Chapa ao CAVC

Site da chapa Lumiar para as eleições do Centro Acadêmico Visconde de Cairu (FEA-USP).

> Se unir para mudar, mobilizar para conquistar.

Site estático (HTML, CSS e JavaScript puro), sem build: dá para publicar direto no GitHub Pages.

## Estrutura

```
index.html              página única com todas as seções
assets/css/style.css    visual (cores, fontes, layout)
assets/js/config.js     links e dados da campanha  ← editar aqui
assets/js/conteudo.js   propostas, áreas, estrutura e FAQ  ← editar aqui
assets/js/main.js       monta as seções, filtros, estrelas, chat e formulário
assets/img/             logos (versões transparentes), favicons e imagem de compartilhamento
assets/img/chapa/       fotos dos integrantes
carta/                  PDF final da carta programa
```

## Seções

1. **Início**: farol com o feixe varrendo e o lema girando, como no selo.
2. **Manifesto**: texto da vivência universitária e o lema dividido em "Se unir para mudar" / "Mobilizar para conquistar".
3. **O que muda para você**: quatro destaques.
4. **Propostas**: resumo da carta em uma linha cada, com busca, filtro por área e estrela ☆ para marcar (fica salvo no navegador de quem marcou).
5. **Estrutura**: estatutários, secretarias e áreas; clicar abre a descrição e leva às propostas.
6. **A chapa**: integrantes (lidos de `config.js`).
7. **Pergunte à Lumiar**: chat que busca nas propostas e no FAQ. Não usa IA nem servidor: só procura palavras no conteúdo de `conteudo.js`.
8. **Tem uma ideia?**: formulário que abre o e-mail (ou um Google Forms) com a sugestão.
9. **Dúvidas** e **Participe**.

## Como editar

- **Mudar ou adicionar proposta**: edite `assets/js/conteudo.js`, lista `LUMIAR_PROPOSTAS`. Cada item tem `area`, `titulo`, `texto`, `pagina` (página da carta) e `busca` (palavras extras para o chat achar).
- **Links da campanha** (Instagram, e-mail, formulários, datas da eleição): `assets/js/config.js`. O que estiver vazio fica escondido.
- **Carta final**: salve como `carta/carta-programa.pdf` e preencha `cartaUrl: "carta/carta-programa.pdf"`. Confira os números de página das propostas, que hoje seguem o rascunho.
- **Integrantes**: fotos em `assets/img/chapa/` e a lista em `chapa` no `config.js`.

## Pendências de conteúdo

- Seções da carta ainda sem texto: Conjuntura, Noções de CAVC, Continuidade, Estatutários, Tesouraria, Finanças, Entidades, Representação Discente.
- Perfil do Instagram, e-mail/formulário de ideias, formulário de "Quero ajudar", datas e locais da eleição.
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
