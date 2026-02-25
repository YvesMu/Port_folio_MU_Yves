# 🚀 Quick Start Guide

Bienvenue dans mon portfolio! Ce guide vous aidera à démarrer rapidement.

---

## 📋 Prérequis

- Git installé
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- (Optionnel) Node.js pour le développement local

---

## ⚡ Démarrage Rapide

### 1️⃣ Cloner le Repository

```bash
git clone https://github.com/MU-Yves/portfolio.git
cd portfolio
```

### 2️⃣ Visualiser Localement

#### Option A: Avec Python (Simple)
```bash
python -m http.server 8000
# Ouvrez http://localhost:8000
```

#### Option B: Avec Node.js
```bash
npm install
npm start
# Ouvrez http://localhost:3000
```

#### Option C: Avec Visual Studio Code
- Installer extension "Live Server"
- Click droit sur `index.html` → "Open with Live Server"

### 3️⃣ Personnaliser avec Vos Infos

Éditez les fichiers suivants:

- **README.md** - Profil principal
- **index.html** - Page d'accueil HTML
- **PORTFOLIO.md** - Informations détaillées
- **PROJECTS.md** - Vos projets
- **SKILLS.md** - Compétences
- **CONTACT.md** - Infos de contact

### 4️⃣ Déployer

#### Déploiement GitHub Pages

```bash
# Configuration initiale
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Commit et push
git add .
git commit -m "Initial portfolio"
git push -u origin main

# Enable GitHub Pages en Settings > Pages > Source: main
# URL: https://VOTRE_USERNAME.github.io/portfolio
```

#### Déploiement Vercel (Recommandé)

```bash
npm install -g vercel
vercel
# Suivez les instructions
```

#### Déploiement Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

---

## 📝 Personnalisation

### Modifier les Couleurs

Éditez `styles.css` - Section "VARIABLES GLOBALES":

```css
:root {
    --primary-color: #0066ff;      /* Changez cette couleur */
    --secondary-color: #00d4ff;    /* Et celle-ci */
    --dark-bg: #0a0e27;
    /* ... */
}
```

### Ajouter une Photo de Profil

1. Placez votre photo dans le dossier `assets/images/`
2. Modifiez `index.html`:
```html
<img src="assets/images/votre-photo.jpg" alt="Ma photo">
```

### Modifier les Liens de Contact

Éditez `index.html` dans la section Contact:
```html
<a href="mailto:votre.email@example.com">
```

---

## 🔗 Structure des URLs

| Page | URL |
|------|-----|
| Accueil | `/` |
| Portfolio Détaillé | `/#about` |
| Compétences | `/#skills` |
| Projets | `/PROJECTS.md` |
| Blog | `/BLOG.md` |
| Contact | `/CONTACT.md` |

---

## 📊 Fichiers Importants

| Fichier | Description |
|---------|------------|
| `README.md` | Page principale du portfolio |
| `index.html` | Site web responsive |
| `styles.css` | Styling moderne |
| `PORTFOLIO.md` | Détails professionnels |
| `SKILLS.md` | Compétences techniques |
| `PROJECTS.md` | Portfolio de projets |

---

## 🎨 Thèmes & Customization

### Ajouter un Mode Clair

Éditez `styles.css`:

```css
body.light-mode {
    --dark-bg: #ffffff;
    --card-bg: #f5f5f5;
    --text-light: #333333;
    --border-color: #dddddd;
}
```

### Changer les Polices

Éditez `styles.css` - `body`:
```css
body {
    font-family: 'Your Font', serif;
}
```

---

## 🌐 Domaine Personnalisé

### Utiliser un Domaine Custom sur GitHub Pages

1. Achetez un domaine (Namecheap, GoDaddy, etc.)
2. Créez un fichier `CNAME` à la racine:
```
votredomaine.com
```
3. Configurez les DNS vers GitHub
4. Commit et push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

---

## 📱 Responsive Testing

Testez la responsivité sur:
- 📱 Smartphone (320px)
- 📱 Tablette (768px)  
- 💻 Desktop (1024px+)

Utilisez DevTools: `F12` → Toggle Device Toolbar

---

## 🔍 SEO Optimization

### Ajouter Meta Tags

Éditez `index.html` `<head>`:
```html
<meta name="description" content="Votre description">
<meta name="keywords" content="vos, keywords">
<meta property="og:title" content="Votre Titre">
<meta property="og:description" content="Votre Description">
```

### Créer Sitemap

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-site.com/</loc>
    <lastmod>2026-02-25</lastmod>
  </url>
</urlset>
```

---

## 📊 Analytics

### Google Analytics

1. Créer compte sur [Google Analytics](https://analytics.google.com)
2. Ajouter à `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

---

## 🚀 Performance

### Optimiser les Images

```bash
# Compresser les images
npm install imagemin-cli -g
imagemin images/* --out-dir=images
```

### Minifier CSS & JS

```bash
npm install --save-dev minify
minify styles.css > styles.min.css
```

### Lighthouse Check

1. Ouvrir DevTools (`F12`)
2. Aller à "Lighthouse"
3. Cliquer "Generate report"
4. Chercher score 90+

---

## 🔧 Dépannage

### Le site ne s'affiche pas?

- ✅ Vérifier `npm start` ou `python -m http.server`
- ✅ Ouvrir `http://localhost:8000` (pas 3000)
- ✅ Vider le cache du navigateur (Ctrl+Shift+Delete)

### Styles ne s'appliquent pas?

- ✅ Vérifier le chemin vers `styles.css`
- ✅ Recharger la page (Ctrl+F5)
- ✅ Vérifier la console pour erreurs

### GitHub Pages ne se met pas à jour?

- ✅ Attendre 5-10 minutes
- ✅ Vider le cache du navigateur
- ✅ Vérifier branche: Settings > Pages > Source: main

---

## 💡 Tips Pro

### Version Control

```bash
# Créer une branche pour nouvelles features
git checkout -b new-feature

# Merger après test
git checkout main
git merge new-feature
git push
```

### Backup Régulier

```bash
# Créer un backup local
cp -r portfolio portfolio-backup-$(date +%Y%m%d)

# Ou sur GitHub avec un tag
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

---

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Dev.to](https://dev.to)
- [Stack Overflow](https://stackoverflow.com)

---

## 🤝 Besoin d'Aide?

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Issues]
- 🐦 Twitter: [@MU_Yves](https://twitter.com/MU_Yves)

---

## ✅ Checklist de Déploiement

- [ ] Personnaliser README.md
- [ ] Ajouter votre photo
- [ ] Modifier les couleurs (optionnel)
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Ajouter Google Analytics
- [ ] Push sur GitHub
- [ ] Setup domaine custom (optionnel)
- [ ] Tester déploiement final
- [ ] Partager sur réseaux sociaux

---

**Prêt à montrer votre portfolio au monde?** 🚀

*Dernière mise à jour: Février 2026*
