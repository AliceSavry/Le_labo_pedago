let slideIndex = 0; // Index de l'image en cours

function showSlides() {
    const slides = document.querySelectorAll('.carousel-container img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    slideIndex = (slideIndex + 1) % slides.length; // Passe à l'image suivante
}

// Fonction pour initialiser le carousel
function startCarousel() {
    const carousel = document.querySelector('.carousel-container');
    const imagePaths = [
        'image_6.jpg',
        'image_7.jpg',
        'image_8.jpg',
        'image_9.jpg'
    ];

    // Ajouter dynamiquement les images dans le carousel
    imagePaths.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Image ${index + 1}`;
        img.style.display = (index === 0) ? 'block' : 'none'; // Affiche la première image
        carousel.appendChild(img);
    });

    setInterval(showSlides, 4000); // Change d'image toutes les 4 secondes
}

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', startCarousel);
