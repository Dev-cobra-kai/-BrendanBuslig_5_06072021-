
const produitId = getProduitId()

function getProduitId() {
    return new URL(location.href).searchParams.get("id")
}

fetch(`http://localhost:3000/api/teddies/${produitId}`)
    .then(function (response) {
        return response.json();
    }).then(function (produit) {
        displayProduit(produit)
        let selectColor = document.getElementById("selection-couleur");
        for (let i = 0; i < produit.colors.length; i++) {
            let choice = document.createElement("option");
            choice.innerText = produit.colors[i];
            selectColor.appendChild(choice);
        }
    }).catch(function (error) {
        console.log("Erreur : " + error);
    })

function displayProduit(produit) {
    document.getElementById("main").innerHTML += `
                <div class="produit">
                    <img id="teddy-img" class="teddy-img" src="${produit.imageUrl}" alt="Teddy">                    
                    <div id="teddy-name-description-prix" class="teddy-name-description-prix">
                        <h2 id="teddy-name" class="teddy-name">${produit.name}</h2>
                        <p id="teddy-descritpion" class="teddy-descritpion">${produit.description}</p>  
                        <form action="" id="teddy-couleurs-quantité-prix" class="teddy-couleurs-quantité-prix">
                            <div id="teddy-couleurs-quantité" class="teddy-couleurs-quantité">
                                <div id="teddy-couleurs" class="teddy-couleurs">
                                    <label for="select-color">Choisir une couleur</label>
                                    <select class="selection-couleur" id="selection-couleur"></select>                         
                                </div>
                                <div id="teddy-quantite" class="teddy-quantite">
                                    <label for="select-quantity">Choisir une quantité</label>
                                    <input type="number" class="selection-quantite" id="selection-quantite" size="5" value="1" required>
                                </div>
                            </div>
                                <p id="teddy-prix" class="teddy-prix">${produit.price * 0.01} €</p> 
                                <input type="submit" class="btn btn-primary btn-panier" id=" btn btn-panier" value="Ajouter au panier">
                        </form>                                          
                    </div>
                </div>`
}

//******************* Le Panier *********************

// Récupération des données sélectionnées par l'utilisateur = quantité + couleur
/*
const selectTeddy = document.getElementById("main")

const btn_panier = document.getElementById("btn-panier");

btn_panier.addEventListener("click", function (event) {
    event.preventDefault();


    let idTeddy = {
        nom: produit.name,
        id: produit._id,
        quantite: 2,
        prix: produit.price * 0.01,
    }

//******************* Local Storage *********************

    // JSON.parse => convertit les données JSON en objet Javascript
    // JSON.stringify => convertit en JSON

    let produitPanier = JSON.parse(localStorage.getItem("produit"));

    if (produitPanier) {

    }

    else {
        produitPanier = [];        
        produitPanier.push(idTeddy)
        localStorage.setItem("produit", JSON.stringify(produitPanier))

        console.log(produitPanier);
    }
})
*/

