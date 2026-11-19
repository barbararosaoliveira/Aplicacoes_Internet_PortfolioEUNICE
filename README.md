# EUNICE Portfolio

Site de portfolio das atividades e competências da EUNICE European University (2023-2026).
HTML + CSS + JavaScript, com uma pequena "ilha" React apenas no formulário de sugestão de atividades.

## Começar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
├── index.html            Home (rasto de cor que segue o cursor)
├── activities.html       Arquivo de atividades com filtros (tema, competência, ano)
├── activity.html         Detalhe de uma atividade (?id=<id>)
├── competencies.html     Lista de competências (liga a activities.html?competency=<id>)
├── submit.html           Formulário em React
├── public/images/        Imagens estáticas (uma pasta por atividade)
└── src/
    ├── css/              tokens → base → layout → components → pages (importados em main.css)
    ├── data/             activities.json e competencies.json (fonte única de conteúdo)
    ├── js/
    │   ├── main.js       Arranque comum (CSS + header)
    │   ├── components/   header, cartão de atividade
    │   ├── pages/        um ficheiro por página
    │   └── utils/        dom.js (helper h()) e data.js
    └── react/            main.jsx + SuggestActivityForm.jsx
```

## Como trabalhamos

- **Conteúdo**: para adicionar uma atividade, editar `src/data/activities.json` e colocar as imagens em `public/images/<id>/`. Os dados atuais são exemplos.
- **Design**: ajustar cores, tipografia e espaçamentos em `src/css/tokens.css` com os valores do Figma.
- **Nova página**: criar o `.html`, o `src/js/pages/<nome>.js` e registar o `.html` em `vite.config.js`.
- **React**: só em `src/react/`. Se o formulário crescer, manter a regra de não usar React fora desta pasta.
- **Sem `innerHTML`** com dados do JSON: usar o helper `h()` de `src/js/utils/dom.js`.

## Divisão sugerida (equipa)

| Área | Ficheiros |
| --- | --- |
| Home e animação | `index.html`, `src/js/pages/home.js`, `src/css/pages.css` |
| Activities + filtros | `activities.html`, `src/js/pages/activities.js`, `components/activity-card.js` |
| Detalhe e galeria | `activity.html`, `src/js/pages/activity.js` |
| Competencies | `competencies.html`, `src/js/pages/competencies.js` |
| Formulário React | `submit.html`, `src/react/*` |
| Header, tokens, base | `components/header.js`, `src/css/tokens.css`, `base.css`, `layout.css` |

## Por fazer

- [ ] Logótipo real no header (SVG em `public/`)
- [ ] Imagens reais das atividades
- [ ] Ligar o formulário a um serviço de envio
- [ ] Deploy (GitHub Pages / Netlify / Vercel)
