# 📋 Guide de Déploiement GitHub Pages

Votre portfolio est 100% statique et prêt pour GitHub Pages. Voici comment le déployer.

---

## 🚀 Étape 1: Créer un Repository GitHub

### A. Créer le repo
1. Allez sur [GitHub.com](https://github.com/new)
2. Nommez-le: `portfolio` (ou votre nom)
3. Décrivez-le: "Mon portfolio professionnel - Full-Stack Developer"
4. Choisissez **Public**
5. Cliquez **Create repository**

---

## 📤 Étape 2: Pousser Votre Code

### A. Depuis l'invite de commande
```bash
cd c:\Users\CDXTELECOM\Downloads\Port_folio_MU_Yves

# Configurer le remote
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Renommer la branche si nécessaire (skip si "main" existe)
git branch -M main

# Pousser le code
git push -u origin main
```

---

## ⚙️ Étape 3: Configurer GitHub Pages

### A. Dans GitHub.com
1. Allez sur votre repository
2. Cliquez **Settings** (⚙️)
3. Allez à **Pages** (dans la sidebar gauche)
4. Sous "Source", sélectionnez: **Deploy from a branch**
5. Branche: **main**
6. Dossier: **/ (root)**
7. Cliquez **Save**

### B. Attendez le déploiement
- GitHub construit le site (2-5 minutes)
- Actualisez la page Settings > Pages
- Vous verrez 🎉 **Your site is live at:** `https://VOTRE_USERNAME.github.io/portfolio`

---

## 🌐 Étape 4: Accéder à Votre Portfolio

### URLs de Votre Site

| Page | URL |
|------|-----|
| **Accueil** | `https://VOTRE_USERNAME.github.io/portfolio/` |
| **Projets** | `https://VOTRE_USERNAME.github.io/portfolio/PROJECTS.md` |
| **Compétences** | `https://VOTRE_USERNAME.github.io/portfolio/SKILLS.md` |
| **Blog** | `https://VOTRE_USERNAME.github.io/portfolio/BLOG.md` |
| **Contact** | `https://VOTRE_USERNAME.github.io/portfolio/CONTACT.md` |

---

## 🔧 Étape 5: Personnaliser Votre Portfolio

### A. Éditez directement dans GitHub

1. **Ouvrir un fichier:** Cliquez sur le fichier (ex: README.md)
2. **Éditer:** Cliquez le crayon ✏️ (Edit)
3. **Modifier:** Changez le contenu
4. **Commit:** Cliquez "Commit changes"
5. **Déploiement:** GitHub redéploie automatiquement

### B. Ou éditez localement

```bash
# Faire des modifications locales
code README.md

# Commit et push
git add .
git commit -m "Update portfolio content"
git push origin main
```

---

## 📝 Fichiers à Personnaliser (Priorité)

### 🔴 IMPORTANT - Éditez d'abord:

1. **README.md** - Votre profil principal
   - Changez `[votre.email@example.com]` par votre email
   - Ajoutez vos vrais liens LinkedIn/GitHub

2. **PROJECTS.md** - Vos projets
   - Remplacez les 3 projets d'exemple par les vôtres
   - Mettez les vraies URLs GitHub

3. **SKILLS.md** - Vos compétences
   - Ajustez les technologies que vous maîtrisez
   - Retirez celles que vous ne connaissez pas

4. **index.html** - Site web
   - Changez "votre.email@example.com" par votre email
   - Changez les liens LinkedIn/GitHub
   - Mettez vos vrais résultats de projets

### 🟡 IMPORTANT - Ensuite:

5. **PORTFOLIO.md** - Détails professionnels
6. **CONTACT.md** - Informations de contact
7. **BLOG.md** - Vos articles

---

## 🌍 Étape 6: Domaine Personnalisé (Optionnel)

### A. Acheter un domaine
- Sites: [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), [Google Domains](https://google.com/domains)
- Prix: 8-15€/an généralement

### B. Configurer chez GitHub

1. Créez un fichier `CNAME` à la racine:
```
votredomaine.com
```

2. Commitez:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

3. Chez votre registrar, configurez les DNS:
   - Type: **CNAME**
   - Name: **www**
   - Value: **VOTRE_USERNAME.github.io**

4. Attendez (les DNS prennent 24-48h)

5. GitHub Pages configurera automatiquement HTTPS

---

## ✅ Vérification de Déploiement

### A. Site déployé?
- [ ] Accédez à `https://VOTRE_USERNAME.github.io/portfolio/`
- [ ] Vérifiez que le design s'affiche correctement
- [ ] Testez sur mobile (responsive)

### B. Tous les liens marchent?
- [ ] Liens de navigation (#about, #skills, etc.)
- [ ] Liens vers les fichiers markdown
- [ ] Liens externes (LinkedIn, GitHub, Email)

### C. Contenu personnalisé?
- [ ] README.md mis à jour
- [ ] PROJECTS.md avec vos projets
- [ ] Email de contact correct
- [ ] Liens LinkedIn/GitHub actifs

---

## 🔄 Mise à Jour Futur

### Pour mettre à jour votre portfolio:

```bash
# Éditer les fichiers localement
code README.md
# ... faites vos changements ...

# Commit et push
git add .
git commit -m "Update portfolio - add new project"
git push

# GitHub redéploy automatiquement en ~1 minute
```

---

## 🎨 Personnalisation Avancée

### Changer les couleurs

Éditez `styles.css`:
```css
:root {
    --primary-color: #0066ff;      /* Changez cette couleur */
    --secondary-color: #00d4ff;    /* Et celle-ci */
}
```

Redéployez:
```bash
git add styles.css
git commit -m "Change theme colors"
git push
```

---

## 🚨 Troubleshooting

### Le site ne s'affiche pas?

```bash
# Vérifier le status de déploiement
git log --oneline
# Devrait afficher les commits

# Vérifier le fichier .nojekyll existe
ls -la .nojekyll
```

### GitHub Pages affiche une erreur?

1. Allez Settings > Pages
2. Vérifiez "Source" = **main / (root)**
3. Attendez quelques minutes
4. Refresher page

### Les styles ne s'appliquent pas?

1. Ouvrir DevTools (F12)
2. Vérifier problèmes de CORS
3. Vérifier chemins relatifs des fichiers
4. Vider cache: `Ctrl+Shift+Delete`

---

## 📊 Optimisations GitHub Pages

### Fichiers déjà optimisés:

✅ `.nojekyll` - Désactive Jekyll  
✅ `robots.txt` - SEO optimization  
✅ `sitemap.xml` - Indexation Google  
✅ `HTML/CSS/JS` - Complètement statique  
✅ `.gitignore` - Fichiers inutiles ignorés  

### Rien de plus à configurer!

---

## 🎯 Checklist Final

- [ ] Repository créé sur GitHub
- [ ] Code poussé (`git push`)
- [ ] GitHub Pages activé (Settings > Pages)
- [ ] Portfolio accessible à `https://USERNAME.github.io/portfolio/`
- [ ] README.md personnalisé
- [ ] PROJECTS.md édité avec vos projets
- [ ] Email de contact changé
- [ ] Lien LinkedIn/GitHub mis à jour
- [ ] Tous les liens testés
- [ ] Responsive testée sur mobile
- [ ] (Optionnel) Domaine personnalisé configuré

---

## 🎉 Prêt à Partager!

Votre portfolio est maintenant en ligne! 

**Partagez votre URL:**
- 🐦 Twitter: "Découvrez mon portfolio de développeur: ..."
- 💼 LinkedIn: Ajoutez dans votre profil
- 📧 Email: Signature de mails profesionnels
- 📱 CV: Ajoutez le lien

---

## 💡 Conseils Pro

### A. Mettez à jour régulièrement
- Ajoutez vos nouveaux projets
- Écrivez des articles sur le blog
- Mettez à jour vos compétences

### B. Monitorer les stats
- Google Analytics gratuit
- GitHub Insights
- Voir qui visite votre portfolio

### C. Optimisations SEO
- Tous les fichiers markdown sont indexables par Google
- El robots.txt et sitemap.xml aident au SEO
- Les meta tags dans index.html améliorent le partage

---

## 🆘 Besoin d'Aide?

- 📚 GitHub Pages Docs: https://pages.github.com
- 🐛 Problème spécifique? Vérifiez GitHub Pages Status
- 💬 Questions? Email: votre.email@example.com

---

**Félicitations! Votre portfolio GitHub Pages est prêt! 🚀**

*Mis à jour: Février 2026*
