//récupération des inputs
var validField = [];
let myForm = document.getElementById("myForm");

//RegEx
let RegExCP = /^[0-9][0-9][0-9][0-9][0-9]+$/; //n'accepte qu'une valeur à 5 chiffres
let RegExMail = /^\S+@\S+\.\S+$/; //n'autorise pas les espaces avant/après le "@" et le "."
let RegExBirthDate = /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$/; // jj/mm/aaaa
let RegExNomPrenomVille = /^[a-zA-Z-\s]+$/; //accepte lettres, tirets, espaces

// début validation

function validInput(input, error) {
    if (input.value == "") {
        error.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        error.style.color = "red";
    } else if (RegExNomPrenomVille.test(input.value) == false) {
        error.innerHTML = "<p>Ce champs doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        error.style.color = "red";
    } else {
        error.innerHTML = "";
        validField.push("1");
    }
}

myForm.addEventListener('submit', function (e) {

    e.preventDefault();
    validField.length = 0;
    //vérification Nom
    let inputNom = document.getElementById("nom");
    let errorNom = document.getElementById("errorNom");
    validInput(inputNom, errorNom);

    //vérification Prénom
    let inputPrenom = document.getElementById("prenom");
    let errorPrenom = document.getElementById("errorPrenom");
    validInput(inputPrenom, errorPrenom);

    // vérification Sexe
    let inputGenreF = document.getElementById("feminin");
    let inputGenreM = document.getElementById("masculin");
    console.log(inputGenreF.checked);
    console.log(inputGenreM.checked);
    if (inputGenreF.checked == false && inputGenreM.checked == false) {
        let errorGenre = document.getElementById("errorGenre");
        errorGenre.innerHTML = "<p>Veuillez sélectionner votre genre.</p>"
        errorGenre.style.color = "red";
    } else {
        let errorGenre = document.getElementById("errorGenre");
        errorGenre.innerHTML = "";
        validField.push("1");
    }

    //vérification Date de naissance
    let inputBirthDate = document.getElementById("birthDate");
    if (inputBirthDate.value == "") {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "<p>La date de naissance doit être renseignée.</p>"
        errorBirthDate.style.color = "red";
    } else if (RegExBirthDate.test(inputBirthDate.value) == false) {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "<p>La date de naissance doit uniquement contenir" +
            " des chiffres, des '\/' et être au format 'jj\/mm\/aa\(aa\)'</p>"
        errorBirthDate.style.color = "red";
    } else {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "";
        validField.push("1");
    }
    //vérification Code postal
    let inputCodePost = document.getElementById("codePostal");
    if (inputCodePost.value == "") {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "<p>Le Code Postal doit être renseigné.</p>"
        errorCodePostal.style.color = "red";
    } else if (RegExCP.test(inputCodePost.value) == false) {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "<p>Le Code Postal doit obligatoirement être " +
            "composé de 5 chiffres</p>"
        errorCodePostal.style.color = "red";
    } else {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "";
        validField.push("1");
    }
    //vérification Ville
    let inputVille = document.getElementById("ville");
    let errorVille = document.getElementById("errorVille");
    validInput(inputVille, errorVille);

    //vérification mail
    let inputMail = document.getElementById("mail");
    if (inputMail.value == "") {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "<p>L'adresse e-mail doit être renseigné.</p>"
        errorMail.style.color = "red";
    } else if (RegExMail.test(inputMail.value) == false) {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "<p>L'adresse e-mail doit obligatoirement contenir" +
            " un '@' et être au format 'xxx@yy.zz'</p>"
        errorMail.style.color = "red";
    } else {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "";
        validField.push("1");
    }

    //vérification sujet
    let inputSujet = document.getElementById("sujet");
    if (inputSujet.value == "") {
        let errorSujet = document.getElementById("errorSujet");
        errorSujet.innerHTML = "<p>Veuillez choisir un sujet.</p>"
        errorSujet.style.color = "red";
    } else {
        let errorSujet = document.getElementById("errorSujet");
        errorSujet.innerHTML = "";
        validField.push("1");
    }

    //vérification question 
    let inputQuestion = document.getElementById("question");
    if (inputQuestion.value == "") {
        let errorQuestion = document.getElementById("errorQuestion");
        errorQuestion.innerHTML = "<p>Veuillez poser une question.</p>"
        errorQuestion.style.color = "red";
    } else {
        let errorQuestion = document.getElementById("errorQuestion");
        errorQuestion.innerHTML = "";
        validField.push("1");
    }
    //vérification consentement
    let checkConsent = document.getElementById("consent");
    if (checkConsent.checked == false) {
        let errorConsent = document.getElementById("errorConsent");
        errorConsent.innerHTML = "<p>Veuillez accepter les conditions.</p>"
        errorConsent.style.color = "red";
    } else {
        let errorConsent = document.getElementById("errorConsent");
        errorConsent.innerHTML = "";
        validField.push("1");
    }

    if (validField.length == 10) {
        document.forms["myForm"].submit();
    }
})