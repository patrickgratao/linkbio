<h1 align="center" >
    <br />
      <img alt="big brain" src=".github/bg.jpg" />
    <br /><br />
</h1>

<h1 align="center">
    Boilerplate de Front-end
</h1>
<br/>
<p align="center">
  <a href="#visão-geral">Visão geral</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#organização-de-pastas-e-arquivos">Organização de pastas e arquivos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-instalar?">Como instalar</a>&nbsp;&nbsp;&nbsp;
</p>

# Visão Geral

Este boilerplate é escrito em Vite e serve para iniciar outros projetos de front-end.

O CRA (Create React App) foi descontinuado pela equipe do React por estar desatualizado, baixa performance, muito restrito a novas funcionalidades como SSR e testes. 

Como alternativa dada pela equipe do React temos o Vite.

Escolhemos o [Vite](https://vitejs.dev/) porque é muito semelhante à estrutura que utilizávamos anteriormente, porém possui um build em dev e prod muito rápido e possibilida maior cobertura de testes.

## Tecnologias utilizadas

- ⚛️ React 18
- ⛑ TypeScript
- ⛑ Vite
- 📏 Biome JS - Linter e Formatter
- 🖌 Styled components e [Tailwind](https://tailwindcss.com/)
- 🧪 Vitest e React Testing Library

# Organização de Pastas e Arquivos

## Pasta `public`

Esta pasta contém os arquivos de públicos do app e também logo e favicon.

## Pasta `src`

Esta pasta contém os arquivos que utilizaremos no dia a dia da aplicação.

### Subpasta `src/components`

Nesta subpasta estarão presentes os arquivos de componentes da aplicação.

### Subpasta `src/pages`

Dentro desta pasta estão as páginas da aplicação.

Que deverão ser instanciadas no arquivo Routes.tsx

### Subpasta `src/styles`

Nesta subpasta estarão presentes os arquivos de estilo.

# Como instalar?

## Requisitos Mínimos

1. Necessário ter no mínimo o npm `9.5`
2. Necessário ter no mínimo o node `18.14.x`

## Instalação

1.  Baixe ou clone este repositório
2.  Acesse a pasta baixada e instale as dependências com `npm install` ou `yarn install`
3.  Rode o comando `npm run dev`

Após rodar o comando de `run` será aberto uma janela com a url `localhost:3000`.

## Rodar os Testes

1.  Rode o comando `npm run test`

---

Feito com 💗 pelo [Patrick Gratão](https://www.linkedin.com/in/patrickgratao/)
