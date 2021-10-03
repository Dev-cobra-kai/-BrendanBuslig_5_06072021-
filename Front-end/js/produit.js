
const produitId = getProduitId()

function getProduitId() {
    return new URL(location.href).searchParams.get("id")
}

console.log(produitId);

fetch(`http://localhost:3000/api/teddies/${produitId}`)
    .then(function (response) {
        return response.json();
    }).then(function (produit) {
        displayProduit(produit)

    }).catch(function (error) {
        console.log("Erreur : " + error);
    })

// Affichage du Teddy
function displayProduit(produit) {

    document.getElementById("teddy-img").src = produit.imageUrl
    document.getElementById("teddy-name").textContent = produit.name
    document.getElementById("teddy-description").textContent = produit.description
    document.getElementById("selection-couleur").textContent = produit.colors    
    document.getElementById("teddy-prix").textContent = `${produit.price * 0.01} €`

    // Affichage du choix des couleurs    
    let selectColor = document.getElementById("selection-couleur");
    for (let i = 0; i < produit.colors.length; i++) {
        let choiceColor = document.createElement("option");
        choiceColor.innerText = produit.colors[i];
        selectColor.appendChild(choiceColor);
    }

    // Affichage de la quantité
    // const quantity = document.getElementById("selection-quantite");
    // console.log(quantity);
    // for (let j = 0; j < quantity.length; j++) {
    //     let choiceQuantity = document.createElement("option");
    //     choiceQuantity.innerText = produit.quantity[j];
    //     quantity.appendChild(choiceQuantity);
    // }
}

/************************************ LE PANIER ************************************/

const btn_panier = document.getElementById("btn-panier")

btn_panier.addEventListener("click", function (e) {
    e.preventDefault();

    let objet = {
        id: produitId,
        nom: document.getElementById("teddy-name").textContent,
        couleur: document.getElementById("selection-couleur").value,
        quantite: parseInt(document.getElementById("selection-quantite").value),
        prix: document.getElementById("teddy-prix").textContent,
    }

    /************************************* LOCAL STORAGE *********************************/

    // JSON.parse => convertit les données JSON en objet Javascript
    // JSON.stringify => convertit en JSON

    let monPanier = JSON.parse(localStorage.getItem("panier"));

    console.log(monPanier);

    alert("Article ajouté au panier !!!")

    //     const popupConfirmation = function () {
    //         if (window.confirm(`${produitId} a bien été ajouté au panier
    // Consultez le panier OK ou revenir à l'accueil ANNULER`)) {
    //             window.location.href = "panier.html"
    //         } else {
    //             window.location.href = "../index.html"
    //         }
    //     }

    if (monPanier) {
        monPanier.push(objet)
        const onlinePanier = JSON.stringify(monPanier)
        localStorage.setItem("panier", onlinePanier)
        // alert("Article récupéré")
        // popupConfirmation();

    } else {
        monPanier = [];
        monPanier.push(objet);
        const onlinePanier = JSON.stringify(monPanier)
        localStorage.setItem("panier", onlinePanier)
        // alert("Article non récupéré")
        console.log(monPanier);
        console.log(objet);
        // popupConfirmation();
    }

})

