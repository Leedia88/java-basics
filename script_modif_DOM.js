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
    
}