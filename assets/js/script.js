// =========================================================================
// PORTFOLIO - Interactions & Dynamique
// Ce fichier gère toutes les fonctionnalités interactives du portfolio
// Animations au scroll, menus mobiles, modales, formulaires...
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Au chargement complet de la page, on initialise toutes les fonctionnalités
    initialiserMenuMobile();
    marquerLienActif();
    initialiserAnimationsScroll();
    initialiserEffetParallaxe();
    initialiserModalProjets();
    initialiserFormulaireContact();
    initialiserBoutonssCopie();
});

// Gère l'ouverture/fermeture du menu mobile sur petits écrans
function initialiserMenuMobile() {
    const menuMobile = document.querySelector('.mobile-menu');
    const liensNav = document.querySelector('.nav-links');
    if (!menuMobile) return; // Si pas de menu, on arrête
    
    // Clic sur le bouton des 3 lignes ouvre/ferme le menu
    menuMobile.addEventListener('click', () => liensNav.classList.toggle('active'));
    
    // Clic sur un lien du menu le ferme automatiquement
    document.querySelectorAll('.nav-links a').forEach(lien => {
        lien.addEventListener('click', () => liensNav.classList.remove('active'));
    });
}

// Marque le lien de navigation actuel (page visitée) avec une classe CSS
function marquerLienActif() {
    const urlActuelle = location.href;
    document.querySelectorAll('.nav-links a').forEach(lien => {
        // Si le href du lien correspond à l'URL actuelle, on l'active
        if (lien.href === urlActuelle) lien.classList.add('active');
    });
}

// Animation des éléments au scroll - chaque carte apparaît progressivement quand on scroll dessus
function initialiserAnimationsScroll() {
    const cartes = document.querySelectorAll('.card, .project-card, .skill-card, .tech-item');
    
    // Observateur pour détecter si un élément entre en vue
    const observateur = new IntersectionObserver((entrees) => {
        entrees.forEach((entree, index) => {
            // Quand on voit l'élément, on l'anime avec un décalage progressif
            if (entree.isIntersecting) {
                setTimeout(() => {
                    entree.target.style.opacity = '1';
                    entree.target.style.transform = 'translateY(0)';
                }, index * 50); // Délai décalé pour un effet cascade
            }
        });
    }, { threshold: 0.1 }); // Déclenche quand 10% de l'élément est visible

    // On prépare les cartes avec opacity 0 (invisibles) et on les observe
    cartes.forEach(carte => {
        carte.style.opacity = '0';
        carte.style.transform = 'translateY(20px)'; // Décalée vers le bas au départ
        carte.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observateur.observe(carte);
    });
}

// Effets parallaxe et interactivité au scroll/souris
function initialiserEffetParallaxe() {
    // Scroll lisse pour les liens d'ancrage (#section)
    document.querySelectorAll('a[href^="#"]').forEach(lien => {
        lien.addEventListener('click', (e) => {
            e.preventDefault();
            const cible = document.querySelector(lien.getAttribute('href'));
            if (cible) cible.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ajoute une ombre à la navbar quand on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        const defilement = window.pageYOffset;
        // Plus l'ombre est intense qu'on descend dans la page
        navbar.style.boxShadow = defilement > 50 
            ? '0 0 30px rgba(0, 102, 255, 0.4)' 
            : '0 0 15px rgba(0, 102, 255, 0.1)';
    });

    // Effet 3D sur chaque technologie au survol de la souris
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centreX = rect.width / 2;
            const centreY = rect.height / 2;
            // Calcul de la rotation en fonction de la position souris
            const rotationX = (y - centreY) / 10;
            const rotationY = (centreX - x) / 10;
            item.style.transform = `translateY(-8px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) perspective(1000px)`;
        });
        // Réinitialise la rotation quand on sort
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(-8px) rotateX(0) rotateY(0)';
        });
    });
}

// =========================================================================
// BASE DE DONNÉES DES PROJETS
// Chaque projet contient : titre, description, technologies, détails, résultats
// =========================================================================
const donneeProjets = {
    1: {
        title: 'Plateforme Emploi Intelligente',
        description: 'Plateforme d\'emploi avec système de matching, chat temps réel et visioconférence intégrée.',
        icon: 'fas fa-briefcase',
        gradient: 'linear-gradient(135deg, #0066ff, #00d4ff)',
        technologies: ['React', 'REST API', 'PostgreSQL', 'Kubernetes', 'Tailwind', 'CSS'],
        details: ['Système de matching avancé', 'Chat en temps réel', 'Intégration visioconférence', 'Dashboard analytics', 'Notifications push', 'Déploiement Kubernetes', '500+ utilisateurs actifs'],
        results: [{ label: '500+', desc: 'Utilisateurs actifs' }, { label: '95%', desc: 'Taux de matching' }, { label: '2.5s', desc: 'Temps réponse' }]
    },
    2: {
        title: 'ModyTrainer - Application Mobile',
        description: 'Application mobile développée avec Flutter pour la gestion d\'entraînement et suivi des performances.',
        icon: 'fas fa-mobile-alt',
        gradient: 'linear-gradient(135deg, #00d4ff, #0066ff)',
        technologies: ['Flutter', 'Dart', 'Android Studio', 'Strapi', 'REST API', 'Tailwind'],
        details: ['Application cross-platform', 'Backend Strapi intégré', 'API REST pour communication', 'Interface utilisateur Tailwind', 'Gestion complète des utilisateurs', 'Suivi des performances en temps réel', 'Documentation & formation clientèle'],
        results: [{ label: 'Flutter', desc: 'Framework mobile' }, { label: 'Strapi', desc: 'Backend headless' }, { label: 'Production', desc: 'Prêt à l\'emploi' }]
    },
    3: {
        title: 'Jeu Vidéo Éducatif 3D',
        description: 'Jeu immersif Unity avec réalité augmentée Vuforia et modélisation 3D Blender.',
        icon: 'fas fa-cube',
        gradient: 'linear-gradient(135deg, #ff5733, #00d4ff)',
        technologies: ['Unity', 'C#', 'Blender', 'Vuforia', 'Réalité Augmentée'],
        details: ['Modélisation 3D avec Blender', 'Réalité augmentée Vuforia', 'Niveaux progressifs', 'Multilingue (12 langues)', 'Compatible cross-platform', 'Sauvegarde cloud', 'Système d\'achievements'],
        results: [{ label: '100K+', desc: 'Joueurs actifs' }, { label: '15h', desc: 'Temps moyen de jeu' }, { label: '92%', desc: 'Rétention utilisateurs' }]
    },
    4: {
        title: 'Stratégie SEO et Marketing Digital',
        description: 'Stratégie SEO complète et marketing digital avec Google Suite pour optimiser la visibilité en ligne.',
        icon: 'fas fa-search',
        gradient: 'linear-gradient(135deg, #00d4ff, #6600ff)',
        technologies: ['Google Analytics', 'Google Ads', 'Google Search Console', 'SEO technique', 'Content Marketing'],
        details: ['Audit SEO complet', 'Optimisation Google Ads', 'Configuration Google Search Console', 'Analytics avancée', 'Stratégie mots-clés', 'Monitoring et reporting', 'Amélioration SERP'],
        results: [{ label: 'Google Suite', desc: 'Suite complète' }, { label: 'SEO', desc: 'Optimisé' }, { label: 'Growth', desc: 'Mesurable' }]
    },
    5: {
        title: 'Refonte Site Web CDX Telecom',
        description: 'Refonte complète du site avec WordPress, Elementor et intégration de la Google Suite pour SEO et marketing digital.',
        icon: 'fas fa-globe',
        gradient: 'linear-gradient(135deg, #ff0066, #00d4ff)',
        technologies: ['WordPress', 'Elementor', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Google Suite'],
        details: ['Redesign WordPress avec Elementor', 'Développement JS/PHP/HTML/CSS custom', 'Intégration Google Analytics', 'Configuration Google Ads', 'Optimisation SEO technique', 'Google Search Console', 'Stratégie visibilité digitale'],
        results: [{ label: '65%', desc: 'Baisse bounce rate' }, { label: '3x', desc: 'Hausse conversions' }, { label: '#1', desc: 'Top Google rank' }]
    },
    6: {
        title: 'Gestion CMS Odoo',
        description: 'Administration et configuration complète de la plateforme Odoo pour la gestion métier de l\'entreprise.',
        icon: 'fas fa-cogs',
        gradient: 'linear-gradient(135deg, #ff5733, #0066ff)',
        technologies: ['Odoo', 'Gestion Métier', 'Administration'],
        details: ['Plateforme Odoo', 'Configuration système', 'Gestion des données', 'Administration complète', 'Support technique', 'Maintenance régulière', 'Optimisation processus'],
        results: [{ label: 'Odoo', desc: 'Système principal' }, { label: 'Production', desc: 'Actif' }, { label: '100%', desc: 'Uptime' }]
    }
};

// Ouvre la modal avec les détails d'un projet spécifique
function ouvrirModalProjets(idProjet) {
    const projet = donneeProjets[idProjet];
    if (!projet) return; // Vérification que le projet existe
    
    const modal = document.getElementById('projectModal');
    
    // On remplit la modal avec les données du projet
    document.getElementById('modalTitle').textContent = projet.title;
    document.getElementById('modalDescription').textContent = projet.description;
    document.getElementById('modalIcon').className = projet.icon;
    document.getElementById('modalImageArea').style.background = projet.gradient;
    
    // Technologies en petits badges
    document.getElementById('modalTechnologies').innerHTML = projet.technologies.map(t => `<span>${t}</span>`).join('');
    
    // Détails en liste
    document.getElementById('modalDetails').innerHTML = projet.details.map(d => `<li>${d}</li>`).join('');
    
    // Résultats avec étiquettes et descriptions
    document.getElementById('modalResults').innerHTML = projet.results.map(r => `<div class="result-item"><strong>${r.label}</strong><p>${r.desc}</p></div>`).join('');
    
    // Affiche la modal et empêche le scroll
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Ferme la modal des projets et réactive le scroll
function fermerModalProjets() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Réactive le scroll
}

// Alias pour compatibilité avec les boutons onclick
function closeProjectModal() {
    fermerModalProjets();
}

// Initialise les interactions des cartes projets (clic pour ouvrir modal)
function initialiserModalProjets() {
    // Clic sur une carte projet ouvre les détails
    document.querySelectorAll('.project-card[data-project]').forEach(carte => {
        carte.addEventListener('click', function() {
            ouvrirModalProjets(this.getAttribute('data-project'));
        });
    });
    
    // Clic sur le fond de la modal la ferme (évite les clics accidentels à l'intérieur)
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (modal && e.target === modal) fermerModalProjets();
    });
    
    // Touche Echap pour fermer la modal aussi
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fermerModalProjets();
    });
}

// Gère la soumission du formulaire de contact
function initialiserFormulaireContact() {
    const formulaire = document.getElementById('contactForm');
    if (formulaire) {
        formulaire.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            alert('Message reçu! Je te répondrai prochainement. 🎮');
            formulaire.reset(); // Vide tous les champs
        });
    }
}

function initialiserBoutonssCopie() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const texte = this.getAttribute('data-copy');
            navigator.clipboard.writeText(texte).then(() => {
                const texteOriginal = this.innerHTML;
                this.classList.add('copied');
                this.innerHTML = '<i class="fas fa-check"></i> Copié!';
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = texteOriginal;
                }, 2000);
            }).catch(err => console.error('Erreur copie:', err));
        });
    });
}

