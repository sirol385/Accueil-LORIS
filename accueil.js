function isVercel() {
    return window.location.hostname.includes('vercel.app');
}
function updateResources() {
    if (isVercel()) {
        const vercelURLs = {
            'revisions': 'https://revisions-loris.vercel.app/',
            'calculatrice': 'https://calculatrice-loris.vercel.app/',
            'password': 'https://password-loris.vercel.app/'
        };
        const resourcesURLs = {
            'revisions': 'https://accueil-loris.vercel.app/revisions.png',
            'calculatrice': 'https://accueil-loris.vercel.app/calculatrice.png',
            'password': 'https://accueil-loris.vercel.app/password.png'
        };
        document.querySelectorAll('.btn').forEach(link => {
            const projectType = link.getAttribute('data-project');
            if (projectType && vercelURLs[projectType]) {
                link.href = vercelURLs[projectType];
            }
        });
        document.querySelectorAll('.project-card img').forEach(img => {
            const altText = img.alt.toLowerCase();
            if (altText.includes('révisions')) {
                img.src = resourcesURLs['revisions'];
            } else if (altText.includes('mot de passe')) {
                img.src = resourcesURLs['password'];
            } else if (altText.includes('calculatrice')) {
                img.src = resourcesURLs['calculatrice'];
            }
        });
        document.querySelector('link[rel="stylesheet"]').href = 'https://accueil-loris.vercel.app/accueil.css';
        document.querySelector('link[rel="icon"]').href = 'https://accueil-loris.vercel.app/accueil.png';
    }
}
document.addEventListener('DOMContentLoaded', updateResources);