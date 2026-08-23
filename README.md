# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Pushing to `main` automatically builds the site and deploys the `build`
directory to GitHub Pages. The workflow can also be started manually from the
repository's **Actions** tab.

Before the first deployment:

1. Open **Settings > Pages** in the GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Set the custom domain to `docs.usthing.xyz`.
4. At the DNS provider, point the `docs` CNAME record to `USThing.github.io`
   (without `/docs`). This replaces the previous `pvs0068.ust.hk` target.
5. Enable **Enforce HTTPS** once GitHub has verified the DNS record.

The deployment configuration lives in `.github/workflows/deploy.yml`.
