
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
    document.getElementById("teddy-name").innerText = produit.name
    document.getElementById("teddy-description").innerText = produit.description
    document.getElementById("selection-couleur").innerText = produit.colors
    // document.getElementById("selection-quantite").innerText = quantity
    document.getElementById("teddy-prix").innerText = `${produit.price * 0.01} €`

    // Affichage du choix des couleurs    
    let selectColor = document.getElementById("selection-couleur");
    for (let i = 0; i < produit.colors.length; i++) {
        let choiceColor = document.createElement("option");
        choiceColor.innerText = produit.colors[i];
        selectColor.appendChild(choiceColor);
    }

    // Affichage de la quantité
    // const selectQuantity = document.getElementById("selection-quantite");
    // for (let i = 0; i < produit.quantities.length; i++) {
    //     let choiceQuantity = document.createElement("option");
    //     choiceQuantity.innerText = produit.quantities[i];
    //     selectQuantity.appendChild(choiceQuantity);
    // }

}

/************************************ LE PANIER ************************************/

// Récupération des données sélectionnées par l'utilisateur = quantité + couleur

const btn_panier = document.getElementById("btn-panier")

btn_panier.addEventListener("click", function (e) {
    e.preventDefault();

    function envoyerPanier(produit) {
        let objet = {
            id: produitId._id,
            nom: produit.name,
            couleur: selectColor,
            quantite: selectQuantite,
            prix: produit.price,
        };
        console.log(envoyerPanier);
    };
    alert("Article ajouté au panier !!!")
    
})

/*

    function envoyerPanier (produit) {

        let idTeddy = produitId
        let nameTeddy = document.getElementById("teddy-name").value;
        let selectColor = document.getElementById("selection-couleur").value;
        let selectQuantite = parseInt(document.getElementById("selection-quantite").value);
        let priceTeddy = document.getElementById("teddy-prix").value;

        let objet = {
            id: produitId,
            nom: nameTeddy,
            couleur: selectColor,
            quantite: selectQuantite,
            prix: priceTeddy,
        };

    };

    console.log(envoyerPanier);
*/
/************************************* LOCAL STORAGE *********************************/

// JSON.parse => convertit les données JSON en objet Javascript
// JSON.stringify => convertit en JSON

/*

    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    monPanier.push(objet)
    const onlinePanier = JSON.stringify(monPanier)
    localStorage.setItem("monPanier", onlinePanier)

    alert("Article ajouté au panier !!!")

})
*/