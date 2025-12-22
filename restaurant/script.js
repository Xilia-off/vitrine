// Changement de style de la navbar au scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#111';
        nav.style.height = '60px';
    } else {
        nav.style.background = 'rgba(26, 26, 26, 0.95)';
        nav.style.height = '80px';
    }
});

// Animation simple pour l'apparition du menu
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "0.6s ease-out";
    observer.observe(item);
});