// Fonction pour récupérer le cours de TotalEnergies
async function fetchStockPrice() {
    try {
        // Utilisation de l'API Yahoo Finance
        const response = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/TTE.PA?region=FR&lang=fr");
        const data = await response.json();

        // Extraction du prix actuel
        const price = data.chart.result[0].meta.regularMarketPrice;

        // Affichage du prix dans le HTML
        document.getElementById("stock-price").innerText = `Prix actuel : ${price} EUR`;
    } catch (error) {
        console.error("Erreur lors de la récupération du cours :", error);
        document.getElementById("stock-price").innerText = "Impossible de récupérer le cours";
    }
}

// Mise à jour du cours toutes les 10 secondes
fetchStockPrice();
setInterval(fetchStockPrice, 10000);
