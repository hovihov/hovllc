// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate Service Cards on Scroll
const serviceCards = document.querySelectorAll('.service-card');

const revealOnScroll = () => {
    serviceCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardPosition < screenHeight - 100) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Run reveal animation on load
document.addEventListener("DOMContentLoaded", revealOnScroll);
