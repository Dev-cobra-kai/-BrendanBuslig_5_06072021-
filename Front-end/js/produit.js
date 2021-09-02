(async function() {
    const articleId = getArticleId()
    console.log(articleId);
    const article = await getArticle(articleId)
    console.log(article);
    hydrateArticle(article)
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
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

function hydrateArticle(article) {
    cloneElement.getElementById("blog__title").textContent = article.name
    cloneElement.getElementById("blog__body").textContent = article.price
    cloneElement.getElementById("blog__body1").textContent = article.description
    cloneElement.getElementById("blog__body2").textContent = article.colors
}