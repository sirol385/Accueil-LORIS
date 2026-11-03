function updateResources() {
    if (isProd()) {
        const vercelURLs = {
            'revisions': 'https://revisions.lorisg.fr/',
            'calculatrice': 'https://calculatrice.lorisg.fr/',
            'conduite': 'https://conduite.lorisg.fr/',
            'parcoursup': 'https://parcoursup.lorisg.fr/',
            'drone': 'https://drone.lorisg.fr/',
            'tondeuse': 'https://tondeuse.lorisg.fr/',
            'informatique': 'https://informatique.lorisg.fr/' };
        const resourcesURLs = {
            'revisions': 'https://accueil.lorisg.fr/revisions.png',
            'calculatrice': 'https://accueil.lorisg.fr/calculatrice.png',
            'conduite': 'https://accueil.lorisg.fr/conduite.png',
            'parcoursup': 'https://accueil.lorisg.fr/parcoursup.png',
            'drone': 'https://accueil.lorisg.fr/drone.png',
            'tondeuse': 'https://accueil.lorisg.fr/tondeuse.png',
            'informatique': 'https://accueil.lorisg.fr/informatique.png' };
        document.querySelectorAll('.btn').forEach(link => {
            const projectType = link.getAttribute('data-project');
            if (projectType && vercelURLs[projectType]) {
                link.href = vercelURLs[projectType]; }});
        document.querySelectorAll('.project-card img').forEach(img => {
            const altText = img.alt.toLowerCase();
            if (altText.includes('révisions')) {
                img.src = resourcesURLs['revisions'];
            } else if (altText.includes('calculatrice')) {
                img.src = resourcesURLs['calculatrice'];
            } else if (altText.includes('conduite')) {
                img.src = resourcesURLs['conduite'];
            } else if (altText.includes('parcoursup')) {
                img.src = resourcesURLs['parcoursup'];
            } else if (altText.includes('drone')) {
                img.src = resourcesURLs['drone'];
            } else if (altText.includes('tondeuse')) {
                img.src = resourcesURLs['tondeuse'];
            } else if (altText.includes('informatique')) {
                img.src = resourcesURLs['informatique'];
            }
        });
        document.querySelector('link[rel="stylesheet"]').href = 'https://accueil.lorisg.fr/accueil.css';
        document.querySelector('link[rel="icon"]').href = 'https://accueil.lorisg.fr/accueil.png';}}
function isProd() {
    return window.location.hostname.endsWith('lorisg.fr');
}
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('mentionsModal');
    const closeBtn = document.querySelector('.close-btn');
    const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let triggerEl = null;
    let trapHandler = null;
    function lockBackground() {
        document.querySelectorAll('body > *').forEach(el => {
            if (el !== modal && !el.contains(modal)) {
                el.setAttribute('inert', '');
                el.setAttribute('data-was-inert', '');
            }
        });
    }
    function unlockBackground() {
        document.querySelectorAll('[data-was-inert]').forEach(el => {
            el.removeAttribute('inert');
            el.removeAttribute('data-was-inert');
        });
    }
    window.openModal = function() {
        triggerEl = document.activeElement;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => modal.classList.add('show'));
        lockBackground();
        requestAnimationFrame(() => {
            const first = modal.querySelector(FOCUSABLE);
            if (first) first.focus();
        });
        trapHandler = function(e) {
            if (e.key !== 'Tab') return;
            const focusable = Array.from(modal.querySelectorAll(FOCUSABLE));
            if (!focusable.length) { e.preventDefault(); return; }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };
        document.addEventListener('keydown', trapHandler);
    };
    window.closeModal = function() {
        if (trapHandler) { document.removeEventListener('keydown', trapHandler); trapHandler = null; }
        unlockBackground();
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => { modal.style.display = 'none'; }, 100);
        if (triggerEl && typeof triggerEl.focus === 'function') { triggerEl.focus(); triggerEl = null; }
    };
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
document.addEventListener("DOMContentLoaded", () => {
    updateResources();
});