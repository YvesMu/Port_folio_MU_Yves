# MU Yves Portfolio - Configuration & Architecture

## 📋 Configuration

### Environnements
- **Development:** `http://localhost:3000` ou `http://localhost:8000`
- **Production:** `https://mu-yves.com`
- **Blog:** `https://blog.mu-yves.com`

### Variables d'Environnement
```env
# Core
NODE_ENV=production
APP_NAME=MU Yves Portfolio

# API & Services
API_URL=https://api.example.com
API_KEY=your_api_key_here

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXX
MIXPANEL_TOKEN=xxxxx

# Social Media
GITHUB_URL=https://github.com/MU-Yves
LINKEDIN_URL=https://linkedin.com/in/mu-yves
TWITTER_HANDLE=@MU_Yves

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SENDGRID_API_KEY=xxxxx
```

---

## 🗂️ Structure de Dossiers

```
portfolio/
├── README.md                 # Portfolio principal
├── PORTFOLIO.md             # Détails professionnels
├── SKILLS.md                # Compétences détaillées
├── PROJECTS.md              # Projets showcase
├── CONTACT.md               # Informations de contact
├── BLOG.md                  # Articles & blog
├── index.html               # Page HTML principale
├── styles.css               # Styles CSS
├── script.js                # JavaScript
├── package.json             # Configuration npm
├── .gitignore               # Fichiers à ignorer
├── LICENSE                  # Licence MIT
├── docs/                    # Documentation
│   ├── API.md              # Documentation API
│   ├── ARCHITECTURE.md     # Architecture système
│   └── CV_MU_Yves.pdf      # CV complet
├── blog/                    # Articles de blog
│   ├── articles/
│   ├── tutorials/
│   └── experiences/
├── projects/                # Détails des projets
│   ├── project-1/
│   ├── project-2/
│   └── project-3/
└── assets/                  # Ressources
    ├── images/
    ├── icons/
    └── fonts/
```

---

## 🚀 Deployment

### GitHub Pages
```bash
# Push au repository
git add .
git commit -m "Initial portfolio"
git push origin main

# Accès: https://MU-Yves.github.io/portfolio
```

### Vercel (Recommandé pour dynamique)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### AWS S3 + CloudFront
```bash
aws s3 sync . s3://mu-yves-portfolio --delete
aws cloudfront create-invalidation --distribution-id XXXX --paths "/*"
```

---

## 📊 Analytics & SEO

### SEO Optimization
- ✅ Meta tags
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Structured data (Schema.org)

### Performance
- Lighthouse Score: 95+/100
- Core Web Vitals: Green
- Page Speed: <2s

---

## 🔐 Security

- ✅ HTTPS only
- ✅ CSP headers
- ✅ XSS protection
- ✅ CORS configuration
- ✅ Rate limiting

---

## 📞 Support & Contribution

Pour des questions sur le portfolio:
- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Issues Page]
- 🤝 Pull Requests: Bienvenue!

---

## 📄 License

Ce projet est sous licence MIT. Voir [LICENSE](./LICENSE) pour plus de détails.

---

*Configuration mise à jour: Février 2026*
