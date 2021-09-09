
fetch("http://localhost:3000/api/teddies/${produit._id}")
    .then(function (response) {
        return response.json();
    }).then(function (produits) {
        for (let produit of produits) {
            document.getElementById("main").innerHTML += `
                <div class="produit">
                    <img id="teddy-img" class="teddy-img" src="${produit.imageUrl}" alt="Teddy">                    
                    <div id="teddy-name-description-prix" class="teddy-name-description-prix">
                        <h2 id="teddy-name" class="teddy-name">${produit.name}</h2>
                        <p id="teddy-descritpion" class="teddy-descritpion">${produit.description}</p> 
                        <p id="teddy-couleurs" class="teddy-couleurs">${produit.colors}</p>                   
                        <p id="teddy-prix" class="teddy-prix">${produit.price * 0.01} €</p>                                                
                    </div>
                </div>`
                
        }
    }).catch(function (error) {
        console.log("Erreur : " + error);
    })

    