// Apple-style JavaScript - Minimal and smooth

// Language Switcher
let currentLang = 'it';

const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-it]');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        
        currentLang = lang;
        
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        translatableElements.forEach(el => {
            const text = el.dataset[lang];
            if (text) {
                if (el.tagName === 'A' || el.tagName === 'BUTTON') {
                    el.textContent = text;
                } else {
                    el.textContent = text;
                }
            }
        });
    });
});

// Scroll arrow click
const scrollArrow = document.querySelector('.scroll-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
        const chiSonoSection = document.querySelector('#chi-sono');
        if (chiSonoSection) {
            chiSonoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 48;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for smooth fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
const sections = document.querySelectorAll('.cantina-card, .value-card, .contact-card');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    fadeInObserver.observe(section);
});

// Parallax effect for hero (subtle Apple-style)
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                const opacity = 1 - (scrolled / (window.innerHeight * 0.7));
                const translateY = scrolled * 0.3;
                heroContent.style.opacity = Math.max(opacity, 0);
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// Active nav link on scroll
const navSections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;

    navSections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.opacity = '0.8';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.opacity = '1';
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Subtle hover effect for cards
const cards = document.querySelectorAll('.cantina-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// Log when page is ready
console.log('🍷 Gianni Magi - Sito Apple-style caricato');

// Prevent FOUC (Flash of Unstyled Content)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});