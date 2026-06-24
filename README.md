# gavioli.net

Sito personale con blog. Costruito con [Astro](https://astro.build), ospitato su GitHub Pages.

## Stack

- **Framework**: Astro 4
- **Contenuti**: Markdown / MDX
- **Sintassi**: Shiki (github-dark)
- **Deploy**: GitHub Actions → GitHub Pages

## Sviluppo locale

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Build

```bash
npm run build
# Output in ./dist/
```

## Scrivere un post

Crea un file `.md` in `src/content/blog/`:

```markdown
---
title: "Titolo del post"
description: "Una riga che descrive il post."
date: 2025-06-15
category: sysadmin        # sysadmin | viaggi | note | hardware
tags: [linux, networking]
draft: false              # true = non pubblicato
---

Il contenuto del post in Markdown...
```

## Aggiungere categorie

Modifica `src/content/config.ts` e aggiungi il valore al tipo enum di `category`.

## Deploy automatico

Ogni push su `main` triggera la GitHub Action che:
1. Installa le dipendenze
2. Esegue `astro build`
3. Pubblica `./dist/` su GitHub Pages

Assicurati di aver abilitato **GitHub Pages → Source: GitHub Actions** nelle impostazioni del repo.

## Privacy & GDPR

- Nessun tracker di terze parti
- Solo cookie tecnici locali (tema, consenso cookie)
- Privacy policy in `/privacy`
