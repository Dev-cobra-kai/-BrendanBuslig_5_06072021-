// ------Récupération des données de l'API + Affichage des éléments à récupérer -------------- //

fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        return response.json();
    }).then(function (produits) {
        for (let produit of produits) {
            document.getElementById("main").innerHTML += `
                <div class="produits">
                    <a href="produit.html?id=${produit._id}" id="produit" class="produit">
                    <img id="teddies-img" class="teddies-img" src="${produit.imageUrl}" alt="teddies">
                    <h2 id="teddies-name" class="teddies-name">${produit.name}</h2>
                    <p p id="teddies-descritpion" class="teddies-descritpion">${produit.description}</p>
                    <p id="teddies-prix" class="teddies-prix">${produit.price * 0.01}€</p>
                </div>`
        }
    }).catch(function (error) {
        console.log("Erreur : " + error);
    })
