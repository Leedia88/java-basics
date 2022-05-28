//Modif  1
function changeTitles(){
    
    let title = document.getElementsByTagName("h1")[0];
    title.innerHTML = "Ce que j'ai appris à THP";
    title.nextElementSibling.innerHTML ="THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles();

//Modif 2
function changeCallToActions(){
    let a = document.querySelectorAll("a.btn-primary")[0];
    a.innerHTML= "OK je veux tester !";
    a["href"] = "http://www.thehackingproject.org";
    let b = document.querySelectorAll("a.btn-secondary")[0];
    b.innerHTML = "Non merci";
    b["href"] = "https://www.pole-emploi.fr/accueil/";
}

changeCallToActions();

//Modif 3
function changeLogoName(){
    c = document.querySelector("a.navbar-brand");
    c.innerHTML = "The THP Experience";
    c.style.fontSize="2em";
}
changeLogoName();

//Modif 4
function populateImages(){
    htmlElements = document.querySelectorAll("img.card-img-top");
    imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    for (let i = 0; i < htmlElements.length; i++) {
        htmlElements[i]["src"]= imagesArray[i];
    }
}
populateImages();

//Modif 5
function deleteLastCards(){
    htmlElements = document.getElementsByClassName("card");
    let i = 0;
    while(i < 3){
        htmlElements[htmlElements.length - 1].remove();
        i++;
    }
}
// htmlElements = document.getElementsByClassName("card");
// console.log("hello");
// console.log(htmlElements[htmlElements.length - 1]);
deleteLastCards();

// Modification n°6
function changeCardsText(){
    let text = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
                "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
                "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

    htmlElements = document.getElementsByClassName("card-text");
    let i = 0;
    while(i<3){
        htmlElements[i].innerHTML = text[i];
    i++;}
}
changeCardsText();

// Modification n°7
function changeViewButtons(){
    htmlElements = document.querySelectorAll("div.btn-group");
    for(let i in htmlElements){
        console.log(i);
        console.log(htmlElements[i].firstElementChild);
        // htmlElements[i].firstElementChild.
        // classList.replace("btn-outline-secondary", "btn-success");
    }
}
// changeViewButtons();

// Modification n°8
let container = document.getElementsByClassName("container");
let elt = document.createElement("div");
elt.className = "row";
container[3].appendChild(elt);
htmlElements = document.getElementsByClassName("card");
elt.appendChild(htmlElements[2]);