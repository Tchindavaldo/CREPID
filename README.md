# 🌍 CREPID - Centre de Recherche et d'Expertise pour le Développement Intégré et Durable

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Caractéristiques principales](#-caractéristiques-principales)
- [Architecture du projet](#-architecture-du-projet)
- [Installation et démarrage](#-installation-et-démarrage)
- [Structure des dossiers](#-structure-des-dossiers)
- [Routes et pages](#-routes-et-pages)
- [Sections CREPID](#-sections-crepid)
- [Composants principaux](#-composants-principaux)
- [Configuration](#-configuration)
- [Scripts disponibles](#-scripts-disponibles)
- [Technologies utilisées](#-technologies-utilisées)
- [Contribution](#-contribution)

---

## 🎯 Vue d'ensemble

**CREPID** est un centre de recherche et d'expertise dédié au **développement intégré et durable**. Ce projet est une plateforme web moderne construite avec **Next.js** et **TypeScript**, présentant les services, formations, réalisations et expertise du centre.

### Mission
- **Former** aux métiers agro-pastoraux et artisanaux
- **Innover** par la recherche et le développement
- **Produire** en suivant le principe du "learning by doing"
- **Lutter** contre la pauvreté et promouvoir le bien-être social
- **Protéger** l'environnement

### Statistiques clés
- **17 ans** d'expérience
- **390+** producteurs formés
- **200+** projets réalisés
- **15+** partenaires stratégiques

---

## ✨ Caractéristiques principales

### 🏠 Landing Page
- Présentation héroïque avec carousel d'images
- Vision et ambitions du centre
- Objectifs stratégiques
- Domaines d'intervention (carousel interactif)
- Réalisations et projets phares
- Bénéficiaires et public cible
- Équipe et ressources
- Perspectives futures
- Références détaillées
- Témoignages et actualités

### 📚 Sections principales
1. **À propos** - Historique, mission et statistiques
2. **Services** - Offres de formations et services
3. **Réalisations** - Portfolio de projets réalisés
4. **Formations** - Programmes de formation détaillés
5. **Contact** - Formulaire de contact et coordonnées

### 🎨 Design
- Interface moderne et responsive
- Utilisation de Material-UI (MUI) v5
- Animations fluides avec Framer Motion
- Support du mode clair/sombre
- Optimisé pour mobile, tablette et desktop

### 🔧 Fonctionnalités techniques
- TypeScript pour la sécurité des types
- SSR (Server-Side Rendering) avec Next.js
- Optimisation des images
- Carousel et lightbox pour les galeries
- Formulaires avec validation (React Hook Form + Yup)
- Navigation responsive avec drawer mobile
- Thème personnalisable

---

## 🏗️ Architecture du projet

Le projet suit une architecture **modulaire et scalable** :

```
crepid-website/
├── src/
│   ├── pages/              # Pages Next.js (routes)
│   ├── sections/           # Sections réutilisables
│   │   └── _crepid/        # Sections spécifiques à CREPID
│   ├── components/         # Composants réutilisables
│   ├── layouts/            # Layouts (Main, Simple, Compact)
│   ├── hooks/              # Hooks personnalisés
│   ├── theme/              # Configuration du thème MUI
│   ├── types/              # Types TypeScript
│   ├── utils/              # Utilitaires et helpers
│   ├── routes/             # Configuration des routes
│   ├── _mock/              # Données mock pour le développement
│   └── assets/             # Ressources statiques
├── public/                 # Fichiers publics
├── package.json            # Dépendances et scripts
├── next.config.js          # Configuration Next.js
├── tsconfig.json           # Configuration TypeScript
└── README.md               # Ce fichier
```

---

## 🚀 Installation et démarrage

### Prérequis
- **Node.js** v16+ ou v18+
- **Yarn** (recommandé) ou **npm**

### Installation avec Yarn (recommandé)

```bash
# Installer les dépendances
yarn install

# Démarrer le serveur de développement
yarn dev

# Accéder à l'application
# http://localhost:8002
```

### Installation avec npm

```bash
# Installer les dépendances
npm install
# ou avec legacy-peer-deps si nécessaire
npm install --legacy-peer-deps

# Démarrer le serveur de développement
npm run dev

# Accéder à l'application
# http://localhost:3000
```

### Build pour production

```bash
# Avec Yarn
yarn build
yarn start

# Avec npm
npm run build
npm start
```

### Build pour Netlify

```bash
yarn build-netlify
```

---

## 📁 Structure des dossiers

### `/src/pages`
Contient les pages Next.js qui correspondent aux routes de l'application. Chaque fichier `.tsx` représente une route.

**Pages principales CREPID :**
- `index.tsx` - Page d'accueil (landing page)
- `about.tsx` - Page À propos
- `services.tsx` - Page Services
- `realisations.tsx` - Page Réalisations
- `formations.tsx` - Page Formations
- `contact.tsx` - Page Contact
- `auth/` - Pages d'authentification
- `e-commerce/` - Pages e-commerce (template)
- `travel/` - Pages voyage (template)
- `career/` - Pages carrière (template)
- `e-learning/` - Pages e-learning (template)

### `/src/sections/_crepid`
Sections spécifiques au projet CREPID, organisées par fonctionnalité :

#### `/landing` - Composants de la landing page
- `CrepidLandingHero.tsx` - Section héros avec carousel
- `CrepidLandingVision.tsx` - Vision et ambitions
- `CrepidLandingObjectives.tsx` - Objectifs stratégiques
- `CrepidLandingDomainesCarousel.tsx` - Domaines d'intervention (carousel)
- `CrepidLandingRealisations.tsx` - Réalisations et projets
- `CrepidLandingBeneficiaires.tsx` - Bénéficiaires et public cible
- `CrepidLandingEquipe.tsx` - Équipe et ressources
- `CrepidLandingPerspectives.tsx` - Projets en perspective
- `CrepidLandingReferences.tsx` - Références détaillées
- `CrepidLandingTestimonials.tsx` - Témoignages
- `CrepidLandingActualites.tsx` - Actualités

#### `/about` - Composants de la page À propos
- Contient les sections détaillées sur l'histoire et la mission

#### `/services` - Composants de la page Services
- `CrepidServicesView.tsx` - Vue principale des services
- `CrepidServicesViewNew.tsx` - Nouvelle version des services
- `CrepidServiceDetailView.tsx` - Détails d'un service

#### `/view` - Vues principales
- `CrepidLandingView.tsx` - Vue complète de la landing page
- `CrepidAboutView.tsx` - Vue complète de la page À propos
- `CrepidServicesView.tsx` - Vue complète des services
- `CrepidRealisationsView.tsx` - Vue complète des réalisations
- `CrepidFormationsView.tsx` - Vue complète des formations
- `CrepidContactView.tsx` - Vue complète du contact

### `/src/components`
Composants réutilisables dans toute l'application :

- `animate/` - Composants d'animation
- `carousel/` - Composants de carousel
- `image/` - Composants d'image optimisée
- `form/` - Composants de formulaire
- `nav-section/` - Navigation
- `logo/` - Logo
- `iconify/` - Icônes
- `lightbox/` - Galerie lightbox
- `player/` - Lecteur vidéo
- `settings/` - Paramètres de thème

### `/src/layouts`
Layouts réutilisables pour les pages :

- `main/` - Layout principal avec header et footer
- `simple/` - Layout simple
- `compact/` - Layout compact

### `/src/theme`
Configuration du thème Material-UI :

- Palette de couleurs
- Typographie
- Composants stylisés
- Support du mode clair/sombre

### `/src/hooks`
Hooks personnalisés React :

- `useResponsive()` - Détection de breakpoints
- Autres hooks utilitaires

### `/src/utils`
Fonctions utilitaires :

- `formatNumber()` - Formatage des nombres
- `cssStyles()` - Styles CSS réutilisables
- `createEmotionCache()` - Cache Emotion

### `/src/types`
Définitions TypeScript :

- Types personnalisés
- Interfaces
- Enums

### `/src/_mock`
Données mock pour le développement :

- `_tours.ts` - Données de tours
- `_members.ts` - Données d'équipe
- `_testimonials.ts` - Témoignages
- `_brands.ts` - Marques/partenaires
- `_blogTravelPosts.ts` - Articles de blog

### `/src/routes`
Configuration des routes :

- `paths.ts` - Définition centralisée de toutes les routes

### `/public`
Fichiers statiques :

- Images (hero, domaines, etc.)
- Icônes
- Autres ressources

---

## 🛣️ Routes et pages

### Routes principales

#### Page d'accueil
- **Route** : `/`
- **Fichier** : `src/pages/index.tsx`
- **Vue** : `CrepidLandingView`
- **Description** : Landing page complète avec présentation du CREPID

#### À propos
- **Route** : `/about`
- **Fichier** : `src/pages/about.tsx`
- **Vue** : `CrepidAboutView`
- **Description** : Historique, mission, statistiques et équipe

#### Services
- **Route** : `/services`
- **Fichier** : `src/pages/services.tsx`
- **Vue** : `CrepidServicesView`
- **Description** : Offres de formations et services

#### Réalisations
- **Route** : `/realisations`
- **Fichier** : `src/pages/realisations.tsx`
- **Vue** : `CrepidRealisationsView`
- **Description** : Portfolio de projets réalisés

#### Formations
- **Route** : `/formations`
- **Fichier** : `src/pages/formations.tsx`
- **Vue** : `CrepidFormationsView`
- **Description** : Programmes de formation détaillés

#### Contact
- **Route** : `/contact`
- **Fichier** : `src/pages/contact.tsx`
- **Vue** : `CrepidContactView`
- **Description** : Formulaire de contact et coordonnées

### Routes d'authentification
- `/auth/login-cover`
- `/auth/login-background`
- `/auth/login-illustration`
- `/auth/register-cover`
- `/auth/register-background`
- `/auth/register-illustration`
- `/auth/reset-password`
- `/auth/verify-code`

### Routes de templates (e-commerce, voyage, etc.)
- `/e-commerce/*` - Pages e-commerce
- `/travel/*` - Pages voyage
- `/career/*` - Pages carrière
- `/e-learning/*` - Pages e-learning
- `/marketing/*` - Pages marketing

### Routes utilitaires
- `/components` - Galerie de composants
- `/pricing-01`, `/pricing-02` - Pages de tarification
- `/payment` - Page de paiement
- `/support` - Page support
- `/maintenance` - Page maintenance
- `/coming-soon` - Page à venir
- `/404` - Page non trouvée
- `/500` - Erreur serveur

---

## 🎨 Sections CREPID

### Structure des sections

Chaque section est un composant React réutilisable qui encapsule une partie de la page. Les sections sont organisées dans `/src/sections/_crepid/`.

### Sections de la landing page

#### 1. **CrepidLandingHero**
- Carousel d'images héros
- Titre principal et sous-titre
- Boutons d'appel à l'action
- Overlay gradient

#### 2. **CrepidLandingVision**
- Présentation de la vision
- Ambitions du centre
- Valeurs fondamentales

#### 3. **CrepidLandingObjectives**
- Objectifs stratégiques
- Domaines de focus
- Résultats attendus

#### 4. **CrepidLandingDomainesCarousel**
- Carousel des domaines d'intervention
- Descriptions détaillées
- Images associées

#### 5. **CrepidLandingRealisations**
- Projets réalisés
- Cas d'études
- Résultats et impact

#### 6. **CrepidLandingBeneficiaires**
- Public cible
- Bénéficiaires directs
- Zones d'intervention

#### 7. **CrepidLandingEquipe**
- Profils de l'équipe
- Rôles et responsabilités
- Expertise

#### 8. **CrepidLandingPerspectives**
- Projets futurs
- Roadmap
- Vision à long terme

#### 9. **CrepidLandingReferences**
- Références détaillées
- Partenaires
- Certifications

#### 10. **CrepidLandingTestimonials**
- Témoignages de bénéficiaires
- Cas de succès
- Retours d'expérience

#### 11. **CrepidLandingActualites**
- Actualités récentes
- Blog posts
- Événements

### Sections de la page À propos

#### **CrepidAboutView**
- Galerie d'images
- Statistiques clés (CountUp)
- Points de mission
- Historique détaillé

### Sections de la page Services

#### **CrepidServicesView** / **CrepidServicesViewNew**
- Catalogue des services
- Descriptions détaillées
- Tarification
- Appels à l'action

#### **CrepidServiceDetailView**
- Détails complets d'un service
- Bénéfices
- Processus
- Témoignages

### Sections de la page Réalisations

#### **CrepidRealisationsView**
- Galerie de réalisations
- Filtrage par catégorie
- Détails de chaque projet
- Résultats et impact

### Sections de la page Formations

#### **CrepidFormationsView**
- Catalogue de formations
- Niveaux et durées
- Objectifs pédagogiques
- Inscription

---

## 🧩 Composants principaux

### Composants de layout

#### **MainLayout**
Layout principal avec :
- Header avec navigation
- Sidebar/Drawer mobile
- Footer
- Contenu principal

### Composants réutilisables

#### **Image**
Composant d'image optimisée avec :
- Lazy loading
- Responsive
- Placeholder
- Support des formats modernes

#### **Carousel / ImageCarousel**
Carousel d'images avec :
- Navigation automatique
- Contrôles manuels
- Responsive
- Support tactile

#### **CountUp**
Compteur animé pour les statistiques :
- Animation fluide
- Formatage des nombres
- Responsive

#### **Iconify**
Système d'icônes :
- Icônes vectorielles
- Personnalisables
- Optimisées

#### **Lightbox**
Galerie lightbox avec :
- Zoom
- Navigation
- Miniatures
- Support tactile

#### **Player**
Lecteur vidéo :
- Support YouTube, Vimeo
- Responsive
- Contrôles personnalisés

### Composants de formulaire

#### **HookForm**
Intégration React Hook Form :
- Validation avec Yup
- Gestion d'état
- Gestion d'erreurs
- Support des champs personnalisés

---

## ⚙️ Configuration

### `config-global.ts`
Configuration globale de l'application :

```typescript
// API
export const GOOGLE_MAP_API = process.env.NEXT_PUBLIC_MAP_API;

// LAYOUT
export const NAV = {
  W_BASE: 260,
  W_DRAWER: 280,
  H_ITEM: 48,
  H_ITEM_SUB: 36,
};

export const ICON = {
  NAV_ITEM: 24,
};

export const HEADER = {
  H_MOBILE: 56,
  H_MAIN_DESKTOP: 88,
};
```

### `next.config.js`
Configuration Next.js :

```javascript
module.exports = {
  trailingSlash: true,
};
```

### `tsconfig.json`
Configuration TypeScript avec support des alias :

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "src/*": ["src/*"]
    }
  }
}
```

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_MAP_API=YOUR_GOOGLE_MAP_API_KEY
```

---

## 📜 Scripts disponibles

### Développement

```bash
# Démarrer le serveur de développement (port 8002)
yarn dev

# Linter le code
yarn lint

# Corriger les erreurs de linting
yarn lint:fix

# Formater le code avec Prettier
yarn prettier
```

### Production

```bash
# Build pour production
yarn build

# Démarrer le serveur de production
yarn start

# Build pour Netlify
yarn build-netlify

# Export statique
yarn export
```

### Maintenance

```bash
# Nettoyer tous les caches et node_modules
yarn clear-all

# Réinstaller et redémarrer
yarn re-start

# Réinstaller et rebuilder
yarn re-build

# SSL proxy (développement local)
yarn proxy
```

---

## 🛠️ Technologies utilisées

### Framework et runtime
- **Next.js** v13.2.4 - Framework React avec SSR
- **React** v18.2.0 - Bibliothèque UI
- **React DOM** v18.2.0 - Rendu DOM
- **TypeScript** v5.0.2 - Langage typé

### UI et styling
- **Material-UI (MUI)** v5.11.15 - Composants UI
- **@emotion/react** v11.10.6 - CSS-in-JS
- **@emotion/styled** v11.10.6 - Styled components
- **Framer Motion** v10.9.2 - Animations

### Formulaires et validation
- **React Hook Form** v7.43.8 - Gestion de formulaires
- **@hookform/resolvers** v3.0.0 - Résolveurs de validation
- **Yup** v1.0.2 - Validation de schéma

### Utilitaires
- **date-fns** v2.29.3 - Manipulation de dates
- **numeral** v2.0.6 - Formatage de nombres
- **lodash.merge** v4.6.2 - Fusion d'objets
- **nprogress** v0.2.0 - Barre de progression

### Médias
- **react-player** v2.12.0 - Lecteur vidéo
- **react-slick** v0.29.0 - Carousel
- **slick-carousel** v1.8.1 - Carousel CSS
- **react-lazy-load-image-component** v1.5.6 - Lazy loading d'images
- **yet-another-react-lightbox** v3.2.0 - Galerie lightbox
- **google-map-react** v2.2.0 - Cartes Google

### Icônes
- **@iconify/react** v4.1.0 - Système d'icônes

### Date picker
- **@mui/x-date-pickers** v6.0.3 - Sélecteur de date MUI
- **@mui/lab** v5.0.0-alpha.124 - Composants lab MUI

### Développement
- **ESLint** v8.37.0 - Linting
- **Prettier** v2.8.7 - Formatage
- **TypeScript ESLint** v5.57.0 - Linting TypeScript
- **Babel** v7.21.3 - Transpileur

---

## 🎯 Actions principales sur CREPID

### Actions utilisateur

1. **Découvrir le centre**
   - Accès à la landing page
   - Consultation de la vision et des objectifs
   - Exploration des domaines d'intervention

2. **Consulter les services**
   - Navigation vers `/services`
   - Sélection d'un service
   - Consultation des détails et tarification

3. **Voir les réalisations**
   - Navigation vers `/realisations`
   - Filtrage par catégorie
   - Consultation des cas d'études

4. **S'inscrire à une formation**
   - Navigation vers `/formations`
   - Sélection d'une formation
   - Remplissage du formulaire d'inscription

5. **Contacter le centre**
   - Navigation vers `/contact`
   - Remplissage du formulaire de contact
   - Envoi du message

### Actions administrateur

1. **Mettre à jour le contenu**
   - Modification des sections dans `/src/sections/_crepid/`
   - Mise à jour des données mock dans `/_mock/`
   - Déploiement des changements

2. **Ajouter une nouvelle page**
   - Créer un fichier dans `/src/pages/`
   - Créer une vue correspondante dans `/src/sections/_crepid/view/`
   - Ajouter la route dans `/src/routes/paths.ts`

3. **Personnaliser le thème**
   - Modifier les couleurs dans `/src/theme/`
   - Ajuster les breakpoints
   - Mettre à jour la typographie

4. **Déployer l'application**
   - Build : `yarn build`
   - Déploiement sur Netlify ou autre plateforme
   - Vérification des performances

---

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints MUI :

- **xs** : 0px - Mobile
- **sm** : 600px - Petit écran
- **md** : 960px - Tablette
- **lg** : 1280px - Desktop
- **xl** : 1920px - Grand écran

Tous les composants s'adaptent automatiquement à la taille de l'écran.

---

## 🎨 Thème et personnalisation

### Couleurs
Le thème utilise une palette de couleurs personnalisée :
- Couleur primaire
- Couleur secondaire
- Couleurs de succès, erreur, avertissement, info

### Mode clair/sombre
L'application supporte le mode clair et sombre, configurable via les paramètres.

### Typographie
Utilise des polices modernes avec des tailles adaptées aux breakpoints.

---

## 🔐 Sécurité

- **TypeScript** pour la sécurité des types
- **Validation des formulaires** avec Yup
- **Variables d'environnement** pour les données sensibles
- **HTTPS** recommandé en production

---

## 📊 Performance

- **Image optimization** avec Next.js Image
- **Lazy loading** des images
- **Code splitting** automatique
- **SSR** pour le SEO
- **Caching** des ressources statiques

---

## 🚀 Déploiement

### Netlify

```bash
# Build pour Netlify
yarn build-netlify

# Déployer via Netlify CLI
netlify deploy --prod
```

### Vercel

```bash
# Déployer directement via Vercel
vercel --prod
```

### Serveur personnalisé

```bash
# Build
yarn build

# Démarrer
yarn start
```

---

## 📝 Contribution

Pour contribuer au projet :

1. Créer une branche feature
2. Faire les modifications
3. Tester localement
4. Soumettre une pull request

### Standards de code

- Utiliser TypeScript
- Suivre les conventions ESLint
- Formater avec Prettier
- Écrire des composants réutilisables
- Documenter le code complexe

---

## 📞 Support

Pour toute question ou problème :

- Consulter la documentation
- Vérifier les issues existantes
- Contacter l'équipe CREPID

---

## 📄 Licence

Ce projet est propriétaire. Tous les droits sont réservés à CREPID.

---

## 🙏 Remerciements

Merci à tous les contributeurs et partenaires du projet CREPID.

---

**Dernière mise à jour** : Novembre 2025
**Version** : 2.0.0
**Auteur** : CREPID Team
