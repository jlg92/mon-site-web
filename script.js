// Mot de passe à définir
const PASSWORD = "juju"; // Remplacez par votre mot de passe

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-btn");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("error-msg");

    loginButton.addEventListener("click", () => {
        const inputPassword = passwordInput.value;

        // Vérifier si le mot de passe est correct
        if (inputPassword === PASSWORD) {
            // Afficher le contenu protégé
            document.getElementById("login-container").style.display = "none";
            document.getElementById("content").style.display = "block";
        } else {
            // Afficher un message d'erreur
            errorMsg.textContent = "Mot de passe incorrect. Essayez de nouveau.";
            errorMsg.style.color = "red";
        }
    });
});
