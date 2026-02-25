// Smooth scrolling and navigation interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll on navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add scroll animation to cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .highlight-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Counter animation for stats (if added)
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
});

// Light/Dark mode toggle (optional)
const toggleDarkMode = () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('light-mode'));
};

// Check for saved dark mode preference or default to dark
if (localStorage.getItem('darkMode') === 'false') {
    document.body.classList.add('light-mode');
}
