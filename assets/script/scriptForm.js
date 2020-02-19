//récupération des inputs
var validField = [];
let myForm = document.getElementById("myForm");

//RegEx
let RegExCP = /^[0-9][0-9][0-9][0-9][0-9]+$/; //n'accepte qu'une valeur à 5 chiffres
let RegExMail = /^\S+@\S+\.\S+$/; //n'autorise pas les espaces avant/après le "@" et le "."
let RegExBirthDate = /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$/; // jj/mm/aaaa
let RegExNomPrenomVille = /^[a-zA-Z-\s]+$/; //accepte lettres, tirets, espaces

// début validation

myForm.addEventListener('submit', function (e) {
    //vérification Nom
    let inputNom = document.getElementById("nom");

    if (inputNom.value == "") {
        let errorNom = document.getElementById("errorNom");
        errorNom.innerHTML = "<p>Le nom doit être renseigné.</p>"
        errorNom.style.color = "red";
        e.preventDefault();
    } else if (RegExNomPrenomVille.test(inputNom.value) == false) {
        let errorNom = document.getElementById("errorNom");
        errorNom.innerHTML = "<p>Le nom doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorNom.style.color = "red";
        e.preventDefault();
    } else {
        let errorNom = document.getElementById("errorNom");
        errorNom.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputNom;
    }

    //vérification Prénom
    let inputPrenom = document.getElementById("prenom");

    if (inputPrenom.value == "") {
        let errorPrenom = document.getElementById("errorPrenom");
        errorPrenom.innerHTML = "<p>Le prénom doit être renseigné.</p>"
        errorPrenom.style.color = "red";
        console.log(inputPrenom.value);
        e.preventDefault();
    } else if (RegExNomPrenomVille.test(inputPrenom.value) == false) {
        let errorPrenom = document.getElementById("errorPrenom");
        errorPrenom.innerHTML = "<p>Le prénom doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorPrenom.style.color = "red";
        e.preventDefault();
    } else {
        let errorPrenom = document.getElementById("errorPrenom");
        errorPrenom.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputPrenom;
    }
    // vérification Sexe
    let inputGenreF = document.getElementById("feminin");
    let inputGenreM = document.getElementById("masculin");
    console.log(inputGenreF.checked);
    console.log(inputGenreM.checked);
    if (inputGenreF.checked == false && inputGenreM.checked == false) {
        let errorGenre = document.getElementById("errorGenre");
        errorGenre.innerHTML = "<p>Veuillez sélectionner votre genre.</p>"
        errorGenre.style.color = "red";
        e.preventDefault();
    } else {
        let errorGenre = document.getElementById("errorGenre");
        errorGenre.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputGenreM, inputGenreF;
    }

    //vérification Date de naissance
    let inputBirthDate = document.getElementById("birthDate");
    if (inputBirthDate.value == "") {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "<p>La date de naissance doit être renseignée.</p>"
        errorBirthDate.style.color = "red";
        e.preventDefault();
    } else if (RegExBirthDate.test(inputBirthDate.value) == false) {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "<p>La date de naissance doit uniquement contenir" +
            " des chiffres, des '\/' et être au format 'jj\/mm\/aa\(aa\)'</p>"
        errorBirthDate.style.color = "red";
        e.preventDefault();
    } else {
        let errorBirthDate = document.getElementById("errorBirthDate");
        errorBirthDate.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputBirthDate
    }
    //vérification Code postal
    let inputCodePost = document.getElementById("codePostal");
    if (inputCodePost.value == "") {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "<p>Le Code Postal doit être renseigné.</p>"
        errorCodePostal.style.color = "red";
        e.preventDefault();
    } else if (RegExCP.test(inputCodePost.value) == false) {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "<p>Le Code Postal doit obligatoirement être " +
            "composé de 5 chiffres</p>"
        errorCodePostal.style.color = "red";
        e.preventDefault();
    } else {
        let errorCodePostal = document.getElementById("errorCodePostal");
        errorCodePostal.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputCodePost;
    }
    //vérification Ville
    let inputVille = document.getElementById("ville");
    if (inputVille.value == "") {
        let errorVille = document.getElementById("errorVille");
        errorVille.innerHTML = "<p>La ville doit être renseigné.</p>"
        errorVille.style.color = "red";
        e.preventDefault();
    } else if (RegExNomPrenomVille.test(inputVille.value) == false) {
        let errorVille = document.getElementById("errorVille");
        errorVille.innerHTML = "<p>La ville doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorVille.style.color = "red";
        e.preventDefault();
    } else {
        let errorVille = document.getElementById("errorVille");
        errorVille.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputVille;
    }
    //vérification mail
    let inputMail = document.getElementById("mail");
    if (inputMail.value == "") {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "<p>L'adresse e-mail doit être renseigné.</p>"
        errorMail.style.color = "red";
        e.preventDefault();
    } else if (RegExMail.test(inputMail.value) == false) {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "<p>L'adresse e-mail doit obligatoirement contenir" +
            " un '@' et être au format 'xxx@yy.zz'</p>"
        errorMail.style.color = "red";
        e.preventDefault();
    } else {
        let errorMail = document.getElementById("errorMail");
        errorMail.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputMail;
    }

    //vérification sujet
    let inputSujet = document.getElementById("sujet");
    if (inputSujet.value == "") {
        let errorSujet = document.getElementById("errorSujet");
        errorSujet.innerHTML = "<p>Veuillez choisir un sujet.</p>"
        errorSujet.style.color = "red";
        e.preventDefault();
    } else {
        let errorSujet = document.getElementById("errorSujet");
        errorSujet.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputSujet;
    }

    //vérification question 
    let inputQuestion = document.getElementById("question");
    if (inputQuestion.value == "") {
        let errorQuestion = document.getElementById("errorQuestion");
        errorQuestion.innerHTML = "<p>Veuillez poser une question.</p>"
        errorQuestion.style.color = "red";
        e.preventDefault();
    } else {
        let errorQuestion = document.getElementById("errorQuestion");
        errorQuestion.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return inputQuestion;
    }
    //vérification consentement
    let checkConsent = document.getElementById("consent");
    if (checkConsent.checked == false) {
        let errorConsent = document.getElementById("errorConsent");
        errorConsent.innerHTML = "<p>Veuillez accepter les conditions.</p>"
        errorConsent.style.color = "red";
        e.preventDefault();
    } else {
        let errorConsent = document.getElementById("errorConsent");
        errorConsent.innerHTML = "";
        e.preventDefault();
        validField.push("1");
        return checkConsent;
    }

    if (validField.length == 10) {
        document.forms["myForm"].submit();
    }
})