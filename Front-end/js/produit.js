
const produitId = getProduitId()

function getProduitId() {
    return new URL(location.href).searchParams.get("id")
}

fetch(`http://localhost:3000/api/teddies/${produitId}`)
    .then(function (response) {
        return response.json();
    }).then(function (produit) {
        displayProduit(produit)
    }).catch(function (error) {
        console.log("Erreur : " + error);
    })

function displayProduit(produit) {
    const colors = displayColors(produit)

    document.getElementById("main").innerHTML += `
                <div class="produit">
                    <img id="teddy-img" class="teddy-img" src="${produit.imageUrl}" alt="Teddy">                    
                    <div id="teddy-name-description-prix" class="teddy-name-description-prix">
                        <h2 id="teddy-name" class="teddy-name">${produit.name}</h2>
                        <p id="teddy-descritpion" class="teddy-descritpion">${produit.description}</p>  
                        <div id="teddy-couleurs-quantité-prix" class="teddy-couleurs-quantité-prix">
                            <div id="teddy-couleurs-quantité" class="teddy-couleurs-quantité">
                                <div id="teddy-couleurs" class="teddy-couleurs">
                                    <label for="select-color">Choisir une couleur</label>
                                    <select class="selection-couleur" id="selection-couleur">
                                    ${colors}
                                    </select>                         
                                </div>
                                <div id="teddy-quantite" class="teddy-quantite">
                                    <label for="select-quantity">Choisir une quantité</label>
                                    <input type="number" class="selection-quantite" id="selection-quantite" size="5" value="1" required>
                                </div>
                            </div>
                            <p id="teddy-prix" class="teddy-prix">${produit.price * 0.01} €</p> 
                            <button type="submit" class="btn btn-primary btn-panier" id=" btn btn-panier">Ajouter au panier</button>
                        </div>                                      
                    </div>
                </div>`

}

// Affichage choix couleurs
function displayColors(produit) {

    let selectColor = ""
    for (let i = 0; i < produit.colors.length; i++) {
        selectColor += `<option value ="${produit.colors[i]}">${produit.colors[i]}</option>`
    }
    return selectColor
}

/******************* Le Panier ************************/

// Récupération des données sélectionnées par l'utilisateur = quantité + couleur



/******************* Local Storage *********************/

// JSON.parse => convertit les données JSON en objet Javascript
// JSON.stringify => convertit en JSON


/*

document.getElementById('btn-panier').addEventListener("click", function (e) {
    e.preventDefault();
    let couleurId = document.getElementById("teddy-couleur")
    const article = {
        id: produit._id,
        name: produit.name,
        price: produit.price * 0.01,
    } 


let panier = JSON.parse(localStorage.getItem("panier")) ?? [];
panier.push(article);
localStorage.setItem("panier", JSON.stringify(panier));
alert("Article ajouté au panier !!!")

})
*/

  

function envoyerPanier(produit) {

    document.getElementById('btn-panier').addEventListener("click", function (e) {
        e.preventDefault();

        let objet = ["${produit.name}.value", "${produit.price}.value"]

        let panier = JSON.parse(localStorage.getItem("monPanier"));

        if (!panier || !panier.length) {
            panier = [];
        }

        panier.push(objet)

        const onlinePanier = JSON.stringify(panier)

        localStorage.setItem("panier", onlinePanier)

        localStorage.setItem("monPanier", JSON.stringify(panier));

    })
}




