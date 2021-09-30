// ------Récupération des données de l'API + Affichage des éléments à récupérer -------------- //

fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        return response.json();
    }).then(function (produits) {
        displayProduits(produits)
    }).catch(function (error) {
        console.log("Erreur : " + error);
    })

    function displayProduits(produits) {
        for (let produit of produits) {
            document.getElementById("main").innerHTML += `
                <div class="produits">
                <a id="teddies-lien" class="teddies-lien" href="html/produit.html?id=${produit._id}">
                    <img id="teddies-img" class="teddies-img" src="${produit.imageUrl}" alt="Teddies">                    
                    <div id="teddies-name-description-prix" class="teddies-name-description-prix">
                        <h2 id="teddies-name" class="teddies-name">${produit.name}</h2>
                        <p id="teddies-descritpion" class="teddies-descritpion">${produit.description}</p>                    
                        <p id="teddies-prix" class="teddies-prix">${produit.price * 0.01} €</p>                                                
                    </div>
                </div>`
        }
    }

    let arr = [1,2,3];
    localStorage.setItem("key", JSON.stringify(arr));