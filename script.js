// Mot de passe défini pour accéder au site
const PASSWORD = "votremotdepasse";

// Gestion du clic sur le bouton de connexion
document.getElementById("login-btn").addEventListener("click", () => {
    const inputPassword = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (inputPassword === PASSWORD) {
        // Afficher le contenu et masquer le formulaire de connexion
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        // Afficher un message d'erreur
        errorMsg.textContent = "Mot de passe incorrect. Veuillez réessayer.";
    }
});
