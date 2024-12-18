// Vérifier si l'utilisateur est déjà authentifié
window.onload = function () {
    if (localStorage.getItem("isAuthenticated") === "true") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
};

// Gestion du formulaire de connexion

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Identifiants valides
    const validUsername = "admin";
    const validPassword = "password123";

    // Récupérer les valeurs saisies
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Vérification des identifiants
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isAuthenticated", "true");
        errorMessage.style.display = "none";
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Identifiant ou mot de passe incorrect.";
    }
});
