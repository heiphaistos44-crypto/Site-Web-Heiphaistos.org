# Heiphaistos.org — Site Vitrine

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Stack](https://img.shields.io/badge/stack-Next.js%2016%20%2B%20Tailwind%20v4%20%2B%20Framer%20Motion-orange)
![Deploy](https://img.shields.io/badge/deploy-Cloudflare%20Pages-F38020?logo=cloudflare)

Site vitrine de **heiphaistos44-crypto** — portfolio de projets open-source spécialisés dans la maintenance Windows, les outils de développement et les applications de bureau.

**URL :** https://heiphaistos.org

---

## Fonctionnalités

- **Cartes projets animées** — icônes SVG uniques par projet avec animations Framer Motion
- **GitHub live stats** — étoiles et date du dernier push en temps réel via l'API GitHub
- **ContributorBadge** — badges contributeurs avec avatars GitHub
- **ProjectIcon** — composant d'icônes avec fallback intelligent (logo réel → initiales)
- **Logos forge** — animations spécifiques pour les projets phares (NiTriTe, GhostHandDesk, etc.)
- **Design responsive** — optimisé mobile, tablette, desktop
- **Performance** — Next.js App Router, rendu statique (SSG), images optimisées

---

## Stack

| Composant | Technologie |
|-----------|-------------|
| Framework | Next.js 16 (App Router) |
| Style | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icônes | Lucide React |
| Déploiement | Cloudflare Pages |

---

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

## Déploiement

Push sur `main` → déploiement automatique via Cloudflare Pages CI.

Projet CF Pages : `site-web-heiphaistos-org`
