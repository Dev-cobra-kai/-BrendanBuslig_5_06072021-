
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
    document.getElementById("main").innerHTML += `
                <div class="produit">
                    <img id="teddy-img" class="teddy-img" src="${produit.imageUrl}" alt="Teddy">                    
                    <div id="teddy-name-description-prix" class="teddy-name-description-prix">
                        <h2 id="teddy-name" class="teddy-name">${produit.name}</h2>
                        <p id="teddy-descritpion" class="teddy-descritpion">${produit.description}</p>  
                        <form action="panier.html" id="teddy-couleurs-quantité-prix" class="teddy-couleurs-quantité-prix">
                            <div id="teddy-couleurs-quantité" class="teddy-couleurs-quantité">
                                <div id="teddy-couleurs" class="teddy-couleurs">
                                    <label for="select-color">Choisir une couleur</label>
                                    <select class="select" id="select-color" required>
                                    <option selected>Couleurs</option>
                                    <option value="${produit.colors}"></option>
                                    </select>
                                </div>
                                <div id="teddy-quantité" class="teddy-quantité">
                                    <label for="select-quantity">Choisir une quantité</label>
                                    <input type="number" class="select-quantity" id="select-quantity" size="5" value="1" required>
                                </div>
                            </div>
                                <p id="teddy-prix" class="teddy-prix">${produit.price * 0.01} €</p> 
                                <input type="submit" class="btn btn-primary btn-panier" value="Ajouter au panier">
                        </form>                                          
                    </div>
                </div>`
                
}


