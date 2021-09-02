// ------------------------- Récupération des données de l'API ----------------------- //
/*
main()

async function main() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticle(article)
    }
}
*/
  
 
// -------------------------- Appel des données de l'API ------------------------ //
/*
function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (response) {
            return response.json()
        })
        .then(function (articles) {
            return articles
        })
        .catch(function (error) {
            alert(error);
        })
}
*/

let teddies = function () {

    fetch("http://localhost:3000/api/teddies")
        .then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.log("Erreur : " + error);
        })
    document.querySelector("#id").innerHTML = id;
    document.querySelector("#name").innerHTML = name;
    document.querySelector("#price").innerHTML = price;
    document.querySelector("#description").innerHTML = description;
    document.querySelector("#imageUrl").innerHTML = imageUrl;
}

// -------------------------- Affichage les éléments récupérer ----------------------- //

// 1 ere méthode(un peu brouillon) :
/*
function displayArticle() {
    document.getElementById("main").innerHTML += `
    <article class="blog">
        <h2 id="blog__title" class="blog__title">${article.title}</h2>
        <p id="blog__body" class="blog__body">${article.body}</p>
    </article>`
}
*/

/*
// 2 eme méthode :

function displayArticle(article) {
    const templateElement = document.getElementById("templateArticle")
    const cloneElement = document.importNode(templateElement.content, true);

    cloneElement.getElementById("blog__title").textContent = article.name
    cloneElement.getElementById("blog__body").textContent = article.price
    cloneElement.getElementById("blog__body1").textContent = article.description
    cloneElement.getElementById("blog__body2").textContent = article.colors
    cloneElement.getElementById("blog__link").href += "?id=" + article.id

    document.getElementById("main").appendChild(cloneElement)
}
*/

document.querySelector("ours").addEventListener("submit", function (e) {
    e.preventDefault();
    let ours = document.querySelector("#main").value;

    teddies(ours);
});