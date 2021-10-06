// Récupération de ID de la commande
let numeroCommande = document.getElementById("numero-commande");
let commandeId = JSON.parse(localStorage.getItem("commandeId"));
numeroCommande.innerHTML = commandeId.orderId;

let prixCommande = document.getElementById("prix-commande");
let totalId = JSON.parse(localStorage.getItem("totalId"));
prixCommande.innerHTML = totalId.prixTotal;

localStorage.clear(); 

