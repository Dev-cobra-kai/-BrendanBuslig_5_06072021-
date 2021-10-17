// Récupération de ID de la commande
const commandeId = localStorage.getItem("commandeId");
console.log(`commandeId : ${commandeId}`);

const totalPanier = localStorage.getItem("totalPanier");
console.log(`totalPanier : ${totalPanier}`);

let numeroCommande = document.getElementById("numero-commande");
numeroCommande.innerHTML = commandeId;

let prixCommande = document.getElementById("prix-commande");
prixCommande.innerHTML = totalPanier;


// Suppression de la commande
setTimeout(function() {
    localStorage.clear();
    window.location.href = "panier.html";
}, 8000);


