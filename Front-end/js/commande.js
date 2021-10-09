// Récupération de ID de la commande
let numeroCommande = document.getElementById("numero-commande");
let commandeId = JSON.parse(localStorage.getItem("commandeId"));
numeroCommande.innerHTML = commandeId;

let prixCommande = document.getElementById("prix-commande");
let totalId = JSON.parse(localStorage.getItem("totalPanier"));
prixCommande.innerHTML = totalId.prixTotal;

localStorage.clear(); 


