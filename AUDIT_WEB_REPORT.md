# AUDIT WEB REPORT — heiphaistos.org v0.2.0
**Date :** 2026-05-27  
**Build :** ✅ 0 erreur TypeScript | 18 pages statiques générées  
**Déployé sur :** Cloudflare Pages (`site-web-heiphaistos-org`)

---

## 1. RÉPARATIONS APPLIQUÉES

| Fichier | Correction |
|---------|-----------|
| `components/ProjectIcon.tsx` | Ajout `import type { ReactNode } from 'react'` — `React.ReactNode` sans import = potentiel TS error strict |
| `components/ProjectIcon.tsx` | Type `IR` corrigé : `React.ReactNode` → `ReactNode` |

---

## 2. REFACTORING — 7 pages → 1 route dynamique

**Avant :** 7 fichiers quasi-identiques (~25 lignes chacun)
```
app/services/conseil/page.tsx
app/services/diagnostic-reparation/page.tsx
app/services/installation-systeme/page.tsx
app/services/pc-sur-mesure/page.tsx
app/services/recuperation-comptes/page.tsx
app/services/recuperation-donnees/page.tsx
app/services/vibecoding/page.tsx
```

**Après :** 1 route dynamique + 1 fichier de données centralisé
```
lib/serviceData.ts              ← 7 configs centralisées + SERVICE_MAP
app/services/[slug]/page.tsx    ← generateStaticParams() + metadata dynamique
```

**URLs générées (identiques, 0 breaking change) :**
- `/services/conseil/`
- `/services/diagnostic-reparation/`
- `/services/installation-systeme/`
- `/services/pc-sur-mesure/`
- `/services/recuperation-comptes/`
- `/services/recuperation-donnees/`
- `/services/vibecoding/`

**Gain :** -175 lignes de code dupliqué → 1 fichier de 22 lignes

---

## 3. NOUVEAUX PROJETS (+4)

| Projet | Stack | Version | Repo |
|--------|-------|---------|------|
| SecuScan AI | Tauri v2 + Rust + YARA | v1.0.5 | `heiphaistos44-crypto/SecuScan` |
| AllRename | C# 12 + .NET 8 + WPF | v1.2.0 | `heiphaistos44-crypto/AllRename` |
| PureUpdate | C# 12 + .NET 8 + WPF-UI Fluent | v1.3.0 | `heiphaistos44-crypto/PureUpdate-` |
| FileScanner | Tauri v2 + Rust + Vue 3 + ClamAV | v1.1.0 | `heiphaistos44-crypto/FileScanner` |

**Total projets : 13** (9 existants + 4 nouveaux, dont 4 avec progress 100%)

---

## 4. PROJETS MIS À JOUR

| Projet | Avant | Après |
|--------|-------|-------|
| OmniPlayer | 70% — "En développement actif" | 85% — "v1.3.1 — Sous-titres MKV/MP4 intégrés" |
| GhostHandDesk | 75% — "En développement actif" | 85% — "v0.2.0 — Release publiée (ZIP + NSIS + MSI)" |

---

## 5. NOUVELLES ICÔNES SVG

4 icônes ajoutées dans `components/ProjectIcon.tsx` :

| Icône | Palette | Design |
|-------|---------|--------|
| SecuScan AI | violet/rouge (#2d0050 + #f43f5e) | Bouclier + radar + badge alerte |
| AllRename | indigo/bleu (#0f1f4a + #818cf8) | Dossier + flèches rename |
| PureUpdate | cyan/teal (#001e28 + #22d3ee) | Bouclier + checkmark + barre progression |
| FileScanner | émeraude (#021a0c + #34d399) | Document + loupe + lignes de scan |

---

## 6. SEO — METADATA AJOUTÉES

| Fichier | Ajout |
|---------|-------|
| `app/projets/layout.tsx` | `title`, `description`, `openGraph` complets |
| `app/services/layout.tsx` | `title`, `description`, `openGraph` complets |

---

## 7. SÉCURITÉ

- `npm audit fix` appliqué → CVE PostCSS `GHSA-qx2v-qp2m-jg93` connue, build-time only, **non corrigée volontairement** (fix --force casserait la version pinned de Next.js)
- `public/_headers` inchangé (CSP + HSTS + COOP/CORP + Permissions-Policy déjà en place)
- Admin auth : hash SHA-256 côté client — limitation architecturale connue (serverless Edge Function non implémenté)

---

## 8. VERSION

`0.1.0` → `0.2.0` (package.json)

---

## 9. BUILD FINAL

```
✓ Compiled successfully (0 erreur TypeScript)
✓ 18 pages statiques générées
✓ out/ déployable sur Cloudflare Pages
```

Route map complète :
```
/ → Home
/projets → 13 projets (9 ongoing + 2 publiés affichés dynamiquement)
/services → Grille 7 services
/services/[slug] → 7 pages détail (SSG via generateStaticParams)
/projets/nitrite → Page détail Nitrite
/projets/plexit → Page détail Plexit
/legal → Mentions légales
/admin → Login SHA-256
/admin/dashboard → CRUD projets (localStorage)
```
