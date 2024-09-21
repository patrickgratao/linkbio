# Instalação Tailwind no React

1. Abra o terminal e rode o comando abaixo:

```bash
  # Instala o tailwind
  npm install -D tailwindcss

  # Faz o setup do tailwind
  npx tailwindcss init
```

2. Adicione as diretivas dentro do arquivo de CSS Global

```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

3. Adicione o tailwind a todos os arquivos. 

Nome do arquivo de configuração: `tailwind.config.js`

```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

