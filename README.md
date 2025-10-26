# Portfolio Léopold Schwarz

Portfolio professionnel d'artiste multidisciplinaire créé avec Next.js, TypeScript et Tailwind CSS.

## 🎨 À propos

Site portfolio de Léopold Schwarz, artiste multidisciplinaire basé à Paris, spécialisé en peinture, illustration et sculpture.

## 🚀 Technologies

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Player** - Lecteur vidéo
- **Optimisations d'images** - Next/Image pour des performances optimales

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
/app
  /about          - Page à propos
  /portfolio      - Galerie d'œuvres
  /exhibitions    - Expositions et résidences
  /videos         - Vidéos et process
  /cv             - Curriculum vitae
  /contact        - Formulaire de contact
/components
  /layout         - Navigation et Footer
  /ui             - Composants réutilisables (Lightbox, etc.)
/public
  /images         - Images statiques
  /videos         - Vidéos
```

## 🎯 Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Galerie interactive avec lightbox
- ✅ Filtres par catégorie (peinture, illustration, sculpture)
- ✅ Lecteur vidéo intégré
- ✅ CV téléchargeable
- ✅ Formulaire de contact
- ✅ Animations fluides
- ✅ SEO optimisé
- ✅ Performance optimale

## 🌐 Déploiement sur Vercel

Le site est optimisé pour un déploiement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Personnalisation

### Ajouter vos œuvres

Modifiez le fichier `/app/portfolio/page.tsx` pour ajouter vos œuvres dans le tableau `artworks`.

### Ajouter vos vidéos

Modifiez le fichier `/app/videos/page.tsx` pour ajouter vos vidéos dans le tableau `videos`.

### Ajouter vos expositions

Modifiez le fichier `/app/exhibitions/page.tsx` pour ajouter vos expositions dans le tableau `exhibitions`.

### Images

Placez vos images dans `/public/images/` et référencez-les avec `/images/nom-fichier.jpg`.

### CV PDF

Ajoutez votre CV PDF dans `/public/` et mettez à jour le lien dans `/app/cv/page.tsx`.

## 📧 Contact

Pour toute question ou collaboration : contact@leopold-schwarz.fr

## 📄 Licence

© 2024 Léopold Schwarz. Tous droits réservés.
