// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Set active nav link
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Scroll animation for cards with enhanced effects
    const cards = document.querySelectorAll('.card, .project-card, .skill-card, .tech-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animate stat numbers
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalNumber = parseInt(stat.textContent);
            if (!isNaN(finalNumber) && stat.dataset.animated !== 'true') {
                let currentNumber = 0;
                const increment = finalNumber / 30;
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        stat.textContent = finalNumber + '+';
                        stat.dataset.animated = 'true';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentNumber) + '+';
                    }
                }, 50);
            }
        });
    };

    // Check if stats are in viewport
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.dataset.statsAnimated !== 'true') {
                    entry.target.dataset.statsAnimated = 'true';
                    animateStats();
                }
            });
        });
        statsObserver.observe(statsContainer);
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-developer, .tech-showcase');
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('hero-developer')) {
                const codeAnimations = element.querySelectorAll('.code-animation');
                codeAnimations.forEach(code => {
                    code.style.transform = `translateY(${scrolled * 0.5}px)`;
                });
            }
        });

        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 102, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add glow effect to interactive elements on hover
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message! Je vous répondrai bientôt.');
            contactForm.reset();
        });
    }

    // Add smooth reveal animation to sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.dataset.revealed !== 'true') {
                    entry.target.dataset.revealed = 'true';
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        });
        sectionObserver.observe(section);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mouse tracking effect for tech items
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(1000px)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-8px) rotateX(0) rotateY(0)';
    });
});

// Add fade-in-up animation keyframes dynamically
if (!document.querySelector('style[data-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-animations', 'true');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== PROJECT MODAL ==================== //
const projectsData = {
    1: {
        title: 'Plateforme Emploi Intelligente',
        description: 'Plateforme complète de mise en relation entre entreprises et candidats avec système de matching intelligent basé sur les compétences, préférences et objectifs professionnels.',
        icon: 'fas fa-briefcase',
        gradient: 'linear-gradient(135deg, #0066ff, #00d4ff)',
        technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'Socket.io', 'Stripe', 'AWS'],
        details: [
            'Système de matching algorithme basé sur l\'IA',
            'Chat temps réel entreprise/candidat',
            'Visioconférence intégrée avec WebRTC',
            'Dashboard analytics avancé',
            'Gestion des candidatures et offres',
            'Système de notification en temps réel',
            'Paiement sécurisé intégré'
        ],
        results: [
            { label: '500+', desc: 'Utilisateurs' },
            { label: '95%', desc: 'Taux de match' },
            { label: '2.5s', desc: 'Temps de réponse' }
        ]
    },
    2: {
        title: 'Application Mobile Sport Coach',
        description: 'Application cross-platform révolutionnaire pour suivi des performances sportives, planification d\'entraînement personnalisé et coaching en ligne avec IA.',
        icon: 'fas fa-mobile-alt',
        gradient: 'linear-gradient(135deg, #00d4ff, #0066ff)',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin', 'TensorFlow Lite'],
        details: [
            'Support iOS et Android natif',
            'Tracker GPS et capteurs intégrés',
            'Plans d\'entraînement personnalisés',
            'Coaching vidéo interactif',
            'Analyse de performance avec IA',
            'Communauté et défis sportifs',
            'Intégration with Apple Health & Google Fit'
        ],
        results: [
            { label: '50K+', desc: 'Téléchargements' },
            { label: '4.8★', desc: 'Note moyenne' },
            { label: '30%', desc: 'Croissance/mois' }
        ]
    },
    3: {
        title: 'Jeu Vidéo Éducatif 3D',
        description: 'Jeu interactif immersif développé en Unity avec graphiques 3D avancés, apprentissage gamifié et système de progression personnalisé.',
        icon: 'fas fa-cube',
        gradient: 'linear-gradient(135deg, #6600ff, #00d4ff)',
        technologies: ['Unity', 'C#', 'Blender', 'NVIDIA PhysX', 'Cinemachine', 'Shader Graph'],
        details: [
            'Modélisation 3D avancée sous Blender',
            'Système de physique réaliste',
            ' Levels progressifs et challenges',
            'Localisation 12 langues',
            'Cross-platform (PC, Console, Mobile)',
            'Système de sauvegarde cloud',
            'Leaderboards et achievements'
        ],
        results: [
            { label: '100K+', desc: 'Joueurs actifs' },
            { label: '15h', desc: 'Temps moyen de jeu' },
            { label: '92%', desc: 'Retention' }
        ]
    },
    4: {
        title: 'Refonte Complète Site Web',
        description: 'Modernisation complète du site web CDX Telecom avec UI/UX redesign, optimisation performance, et stratégie SEO technique avancée.',
        icon: 'fas fa-globe',
        gradient: 'linear-gradient(135deg, #00d4ff, #6600ff)',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Vercel', 'Core Web Vitals'],
        details: [
            'Redesign UI/UX moderne et responsive',
            'Optimisation SEO technique complète',
            'Amélioration des Core Web Vitals',
            'Time to First Byte réduit de 70%',
            'Lighthouse score: 98/100',
            'Migration sécurisée des données',
            'A/B testing et conversion optimization'
        ],
        results: [
            { label: '65%', desc: '↓ Bounce rate' },
            { label: '3x', desc: '↑ Conversions' },
            { label: '#1', desc: 'Google rank' }
        ]
    },
    5: {
        title: 'Blog Entreprise & SEO',
        description: 'Création et gestion complète d\'un blog d\'entreprise avec stratégie SEO avancée, contenu optimisé et analytics intégré.',
        icon: 'fas fa-blog',
        gradient: 'linear-gradient(135deg, #ff0066, #00d4ff)',
        technologies: ['WordPress', 'Yoast SEO', 'Google Analytics', 'Semrush', 'Elementor', 'Google Search Console'],
        details: [
            'Architecture SEO optimisée',
            'Plus de 150 articles de blog',
            'Stratégie de contenu long-terme',
            'Schema markup structuré',
            'Intégration analytics complet',
            'Gestion de backlinks',
            'Optimisation des mots-clés'
        ],
        results: [
            { label: '500K+', desc: 'Visiteurs/mois' },
            { label: '15', desc: 'Keywords top 1' },
            { label: '45%', desc: 'Organic traffic' }
        ]
    },
    6: {
        title: 'Automatisation & CMS Odoo',
        description: 'Scripts d\'automatisation avancée pour Odoo, workflows personnalisés, intégration API et administration système complète.',
        icon: 'fas fa-cogs',
        gradient: 'linear-gradient(135deg, #0066ff, #ff0066)',
        technologies: ['Odoo', 'Python', 'PostgreSQL', 'REST API', 'RabbitMQ', 'Docker'],
        details: [
            'Modules Odoo personnalisés développés',
            'Automatisation des processus de facturation',
            'Workflows de gestion documentaire',
            'Intégrations avec systèmes externes',
            'Scripts de migration de données',
            'Rapports personnalisés avancés',
            'Support technique 24/7'
        ],
        results: [
            { label: '80%', desc: '↓ Temps process' },
            { label: '50+', desc: 'Workflows' },
            { label: '99.9%', desc: 'Uptime' }
        ]
    }
};

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    
    // Set modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalIcon').className = project.icon;
    
    // Set icon style
    const iconArea = document.getElementById('modalImageArea');
    iconArea.style.background = project.gradient;
    
    // Set technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => `<span>${tech}</span>`).join('');
    
    // Set details
    const detailsContainer = document.getElementById('modalDetails');
    detailsContainer.innerHTML = project.details.map(detail => `<li>${detail}</li>`).join('');
    
    // Set results
    const resultsContainer = document.getElementById('modalResults');
    resultsContainer.innerHTML = project.results.map(result => 
        `<div class="result-item">
            <strong>${result.label}</strong>
            <p>${result.desc}</p>
        </div>`
    ).join('');
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click listeners to project cards (after DOM is loaded)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (modal && event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
