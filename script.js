// Mot de passe défini (modifiez-le ici)
const PASSWORD = "juju";

// Fonction pour vérifier le mot de passe
function checkPassword() {
    const input = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const content = document.getElementById("content");
    const loginForm = document.getElementById("login-form");

    if (input === PASSWORD) {
        loginForm.style.display = "none";
        content.style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
}
