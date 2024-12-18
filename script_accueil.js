document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-container img'); // Toutes les images du carousel
    let slideIndex = 0; // Index de départ

    function showSlides() {
        // Masquer toutes les images
        slides.forEach(slide => slide.classList.remove('active'));

        // Afficher l'image courante
        slides[slideIndex].classList.add('active');

        // Passer à l'image suivante
        slideIndex = (slideIndex + 1) % slides.length;
    }

    // Affiche la première image immédiatement
    showSlides();

    // Lancer le carousel toutes les 4 secondes
    setInterval(showSlides, 4000);
});
// Tableau de phrases de motivation
const phrasesMotivation = [
    "Votre succès est ma priorité, travaillons ensemble !",
    "Chaque effort compte pour demain.",
    "Petit pas par petit pas, nous irons loin.",
    "La persévérance est la clé de la réussite.",
    "Ensemble, construisons votre avenir.",
    "Travaillez dur en silence, le succès fera du bruit.",
    "Ne regardez pas l'horloge, faites comme elle : avancez.",
    "Un examen, c'est comme un marathon, chaque pas compte !",
    "Vous êtes plus fort que vous ne le pensez.",
    "Croyez en vous, tout est possible !",
    "Le seul endroit où le succès vient avant le travail, c’est dans le dictionnaire.",
    "Ce qui semble difficile aujourd’hui sera votre fierté demain.",
    "Transformez chaque obstacle en opportunité d’apprendre.",
    "N’abandonnez pas, les plus grandes victoires viennent après les moments difficiles.",
    "La clé de la réussite, c’est la discipline et la détermination.",
    "Les petits progrès chaque jour mènent à de grands résultats.",
    "Vous n’êtes pas seul, avançons ensemble vers votre réussite.",
    "La réussite appartient à ceux qui y croient et qui osent.",
    "Tout semble impossible jusqu’à ce que ce soit fait.",
    "Rêvez grand, travaillez dur, restez concentré et persévérez.",
    "Chaque nouvelle journée est une chance de progresser.",
    "Vos efforts d’aujourd’hui définissent vos réussites de demain.",
    "Le travail acharné bat le talent quand le talent ne travaille pas.",
    "C’est en forgeant qu’on devient forgeron, persévérez !",
    "N’oubliez jamais pourquoi vous avez commencé.",
    "Les grandes choses prennent du temps, ne vous découragez pas.",
    "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
    "Rien n’est impossible, seules les limites de votre esprit le sont.",
    "Chaque erreur vous rapproche un peu plus de la réussite.",
    "Le meilleur moyen de prédire l’avenir, c’est de le créer.",
    "La confiance en soi est la première étape vers le succès.",
    "Il ne faut pas attendre d’avoir envie de travailler pour réussir.",
    "La motivation vous fait démarrer, l’habitude vous fait continuer.",
    "Si vous pouvez le rêver, vous pouvez le faire."
];

// Fonction pour changer la phrase de motivation
function changerPhraseMotivation() {
    const phraseElement = document.querySelector('.motivation-text');
    const index = Math.floor(Date.now() / (1000 * 60 * 30)) % phrasesMotivation.length; // Change toutes les 30 minutes
    phraseElement.textContent = phrasesMotivation[index];
}

// Appelle immédiatement la fonction pour afficher la phrase au chargement
document.addEventListener('DOMContentLoaded', () => {
    changerPhraseMotivation();
    setInterval(changerPhraseMotivation, 1000 * 60 * 30); // Met à jour toutes les 30 minutes
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-container img');
    let slideIndex = 0;

// Fonction pour le carousel
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length; // Passe à l'image suivante
}

// Initialisation du carousel
setInterval(showSlides, 4000);
showSlides();

// Gestion du sous-menu BTS GPME
const btnGPME = document.querySelector('.btn-gpme');
const submenuGPME = document.getElementById('submenu-gpme');

btnGPME.addEventListener('click', () => {
    submenuGPME.classList.toggle('visible'); // Affiche/masque le sous-menu
});

// Fonction "Me Contacter"
window.contact = function() {
    alert("Pour me contacter, envoyez un email à : contact@labopedago.com !");
};
});