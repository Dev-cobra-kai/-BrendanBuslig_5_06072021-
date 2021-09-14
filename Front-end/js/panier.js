//******************* Le Panier *********************



//******************* Le Formulaire *********************

let form = document.querySelector("#loginForm");

// Ecouter la modification du Nom
form.lastName.addEventListener("change", function () {
    validLastName(this);
});

// Ecouter la modification du Prénom
form.firstName.addEventListener("change", function () {
    validFirstName(this);
});

// Ecouter la modification de l'Adresse
form.address.addEventListener("change", function () {
    validAddress(this);
});

// Ecouter la modification de la Ville
form.city.addEventListener("change", function () {
    validCity(this);
});

// Ecouter la modification de l'e-mail
form.email.addEventListener("change", function () {
    validEmail(this);
});

// Ecouter la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validLastName(form.lastName) && validFirstName(form.firstName) && validAddress(form.address) && validCity(form.city) && validEmail(form.email)) {
        form.submit();
    }
});

//******************* Validation NOM *********************

const validLastName = function (inputLastName) {

    // Création de la reg exp pour la validation du Nom
    let lastNameRegExp = new RegExp(
        "^[a-zA-Z]"
    );

    // Récupération de la balise SMALL
    let small = inputLastName.nextElementSibling;

    // On teste l'expression régulière
    if (lastNameRegExp.test(inputLastName.value)) {
        small.innerHTML = "Nom Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Nom Non Valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};

//******************* Validation PRENOM *********************

const validFirstName = function (inputFirstName) {

    // Création de la reg exp pour la validation du Prénom
    let firstNameRegExp = new RegExp(
        "^[a-zA-Z]"
    );

    // Récupération de la balise SMALL
    let small = inputFirstName.nextElementSibling;

    // On teste l'expression régulière
    if (firstNameRegExp.test(inputFirstName.value)) {
        small.innerHTML = "Prénom Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Prénom Non Valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};
//******************* Validation ADRESSE *********************

const validAddress = function (inputAddress) {

    // Création de la reg exp pour la validation de l'Adresse
    let addressRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]"
    );

    // Récupération de la balise SMALL
    let small = inputAddress.nextElementSibling;

    // On teste l'expression régulière
    if (addressRegExp.test(inputAddress.value)) {
        small.innerHTML = "Adresse Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Adresse Non Valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};

//******************* Validation VILLE *********************

const validCity = function (inputCity) {

    // Création de la reg exp pour la validation de la Ville
    let cityRegExp = new RegExp(
        "^[a-zA-Z]"
    );

    // Récupération de la balise SMALL
    let small = inputCity.nextElementSibling;

    // On teste l'expression régulière
    if (cityRegExp.test(inputCity.value)) {
        small.innerHTML = "Ville Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Ville Non Valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};

//******************* Validation EMAIL *********************

const validEmail = function (inputEmail) {

    // Création de la reg exp pour la validation email
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
    );

    // Récupération de la balise SMALL
    let small = inputEmail.nextElementSibling;

    // On teste l'expression régulière
    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "Adresse Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Adresse Non Valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};


