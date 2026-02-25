# 🎯 SETUP - COMMENCEZ ICI!

> **IMPORTANT:** Ce portfolio est 100% statique (HTML/CSS/JS) - il fonctionne directement sur GitHub Pages. Pas de backend nécessaire!

---

## 📋 Ce Que Vous Avez

✅ **Site web responsive** - index.html + styles.css + script.js  
✅ **Documentation Markdown** - README.md, PORTFOLIO.md, PROJECTS.md, etc.  
✅ **Optimisé GitHub Pages** - .nojekyll, robots.txt, sitemap.xml  
✅ **Clé en main** - Prêt à être poussé sur GitHub  

---

## 🚀 ÉTAPES RAPIDES (5 minutes)

### 1️⃣ PERSONNALISER VOTRE CONTENU

**Éditez ces 4 fichiers en PRIORITÉ:**

```bash
# VSCode - ouvrir tous les fichiers à éditer
code README.md PORTFOLIO.md PROJECTS.md index.html
```

#### À Chercher & Remplacer:

**Email:** `votre.email@example.com` → Votre email réel  
**LinkedIn:** `https://linkedin.com` → Votre profil LinkedIn  
**GitHub:** `https://github.com/MU-Yves` → Votre profil GitHub  
**Nom:** `MU Yves` → Votre nom  

### 2️⃣ CRÉER REPOSITORY GITHUB

```bash
# Option A: Interface GitHub
# 1. Allez sur https://github.com/new
# 2. Nommez le repo: "portfolio"
# 3. Public
# 4. Create repository

# Option B: Depuis la ligne de commande
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
```

### 3️⃣ POUSSER LE CODE

```bash
# Depuis le dossier du portfolio
cd c:\Users\CDXTELECOM\Downloads\Port_folio_MU_Yves

# Vérifier les changements
git status

# Commit les changements
git add .
git commit -m "Personalize portfolio content"

# Pousser
git push -u origin main
```

### 4️⃣ ACTIVER GITHUB PAGES

```
1. Allez sur https://github.com/VOTRE_USERNAME/portfolio
2. Settings (⚙️)
3. Pages (menu gauche)
4. Source: "main" / "(root)"
5. Save
6. Attendez 2-5 minutes 🎉
```

### 5️⃣ ACCÉDEZ À VOTRE PORTFOLIO

```
https://VOTRE_USERNAME.github.io/portfolio/
```

---

## 📝 FICHIERS À ÉDITER (Par Priorité)

### 🔴 CRITIQUE (Éditez d'abord!)

#### `README.md`
```markdown
# Changez ceci en votre nom
# Votre présentation principale

[votre.email@example.com] → email réel
https://linkedin.com → profil LinkedIn
```

#### `index.html`
```html
<!-- Ligne 10: Votre email -->
<a href="mailto:email@example.com">

<!-- Ligne 48: Votre nom -->
<h1>Bienvenue! Je suis Développeur Full-Stack</h1>
```

#### `PROJECTS.md`
```markdown
### Projet 1 - Changez ce titre
### Projet 2 - Mettez vos vrais projets
### Projet 3 - Avec vos vrais URLs
```

#### `SKILLS.md`
```markdown
# Changez les compétences par les vôtres
# Retirez celles que vous ne connaissez pas
```

### 🟡 Important (Ensuite)

- `PORTFOLIO.md` - Vos détails professionnels
- `CONTACT.md` - Vos infos de contact
- `BLOG.md` - Vos articles

### 🟢 Optionnel (Plus tard)

- `styles.css` - Changer les couleurs
- `QUICKSTART.md` - Pas important
- `CONFIG.md` - Référence uniquement

---

## 🎨 CHANGEMENTS SIMPLES

### Changer les couleurs

**Fichier:** `styles.css` (Ligne 4-7)

```css
:root {
    --primary-color: #0066ff;      /* Changez cette couleur */
    --secondary-color: #00d4ff;    /* Et celle-ci */
```

Options:
- **Bleu**: `#0066ff`
- **Rouge**: `#ff0066`
- **Vert**: `#00ff66`
- **Purple**: `#6600ff`

### Ajouter votre photo

1. Créez dossier: `assets/images/`
2. Mettez votre photo: `assets/images/profile.jpg`
3. Dans `index.html` après la hero, ajoutez:
```html
<img src="assets/images/profile.jpg" alt="Ma photo" style="border-radius: 50%; width: 300px;">
```

---

## ✅ VÉRIFICATION AVANT DE POUSSER

- [ ] Votre email est remplacé partout
- [ ] LinkedIn/GitHub URLs sont mises à jour
- [ ] Vos projets sont dans PROJECTS.md
- [ ] Vos compétences sont dans SKILLS.md
- [ ] index.html affiche votre nom
- [ ] Testez sur mobile (F12 > Device Toggle)

---

## 🔄 WORKFLOW FUTUR

Après le déploiement initial:

```bash
# 1. Faire changements localement
vim README.md

# 2. Tester (optionnel)
python -m http.server 8000
# Visitez http://localhost:8000

# 3. Commit et push
git add .
git commit -m "Update portfolio - add new project"
git push

# 4. GitHub redéploie automatiquement ✨
```

---

## 🆘 PROBLÈMES COURANTS

### "Le site ne s'affiche pas après push?"
```bash
# On attend généralement 2-5 minutes
# Vérifiez Settings > Pages > Voir si déploiement est en cours
# Rafraîchissez après 5 min
```

### "Mes changements ne s'affichent pas?"
```bash
# Vider le cache: Ctrl+Shift+Delete
# Ou accès privée: Ctrl+Shift+N (Chrome)
```

### "Où héberger des images?"
```bash
# Option 1: Les mettre dans le repo (assets/images/)
# Option 2: Utiliser GitHub LFS pour gros fichiers
# Option 3: Utiliser un CDN externe (Cloudinary, Imgur)
```

---

## 📚 RESSOURCES

- **Guide complet:** [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
- **Git basics:** [QUICKSTART.md](./QUICKSTART.md)
- **Configuration avancée:** [CONFIG.md](./CONFIG.md)
- **Mon contenu par défaut:** [PORTFOLIO.md](./PORTFOLIO.md)

---

## 🎯 CHECKLIST FINAL

```
PERSONNALISATION:
☐ README.md - Email, LinkedIn, GitHub mis à jour
☐ index.html - Email et liens sociaux changés
☐ PROJECTS.md - Vos projets au lieu des exemples
☐ SKILLS.md - Vos compétences actuelles
☐ PORTFOLIO.md - Vos infos pro
☐ CONTACT.md - Votre email correct

DÉPLOIEMENT:
☐ Repository créé sur GitHub
☐ Code poussé (git push)
☐ GitHub Pages activé (Settings > Pages)
☐ Portfolio accessible à https://USERNAME.github.io/portfolio/
☐ Tous les liens testés
☐ Responsive testé sur mobile
```

---

## 🚀 PRÊT!

**Commande rapide pour tout faire:**

```bash
# 1. Éditer
code README.md index.html PROJECTS.md SKILLS.md

# 2. Commit
git add .
git commit -m "Initial portfolio setup with personalized content"

# 3. Push
git push -u origin main

# 4. GitHub Pages s'active automatiquement!
```

**Votre portfolio sera en ligne en ~5 minutes! 🎉**

---

<div align="center">

**Questions?** Email: votre.email@example.com  
**Besoin d'aide?** Voir [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

*Portfolio Template - Février 2026*

</div>
