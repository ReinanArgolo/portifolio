# Reinan Lopes Argolo Portfolio

Portfólio em React, Vite, Tailwind CSS, Framer Motion e lucide-react.

## Rodar localmente

Instale Node.js 22 ou superior e execute:

```bash
npm install
npm run dev
```

## Gerar build estático

```bash
npm run build
```

O site final fica em `dist/`.

## Publicar no GitHub Pages

1. Suba este projeto para um repositório no GitHub.
2. Garanta que a branch principal se chame `main`.
3. Em `Settings > Pages`, selecione `GitHub Actions` como fonte.
4. Faça push para `main`.

O workflow em `.github/workflows/deploy.yml` instala as dependências, roda o build e publica `dist/` no GitHub Pages.
