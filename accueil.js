// Fonction pour détecter si nous sommes sur Vercel
function isVercel() {
    return window.location.hostname.includes('vercel.app');
}

// Fonction pour mettre à jour les liens
function updateLinks() {
    if (isVercel()) {
        // Les URLs Vercel pour chaque projet
        const vercelURLs = {
            'revisions': 'https://revisions-loris.vercel.app/',
            'calculatrice': 'https://calculatrice-loris.vercel.app/',
            'password': 'https://password-loris.vercel.app/'
        };

        // Mettre à jour tous les liens
        document.querySelectorAll('.btn').forEach(link => {
            const projectType = link.getAttribute('data-project');
            if (projectType && vercelURLs[projectType]) {
                link.href = vercelURLs[projectType];
            }
        });
    }
}

// Exécuter quand le DOM est chargé
document.addEventListener('DOMContentLoaded', updateLinks);