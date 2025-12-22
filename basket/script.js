// Animation des chiffres des statistiques
const stats = document.querySelectorAll('.stat-item h3');
let started = false;

window.onscroll = function() {
    if (window.scrollY >= document.getElementById('stats').offsetTop - 500) {
        if (!started) {
            stats.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.innerHTML;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// Navbar collante plus compacte au scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.padding = window.scrollY > 50 ? "10px 0" : "20px 0";
    nav.style.background = window.scrollY > 50 ? "rgba(0,0,0,0.95)" : "var(--dark)";
});