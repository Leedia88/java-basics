//Exercie 4.2
function answer(string){
    switch (true){
        case string[string.length -1] == "?":
            console.log("Ouais, ouais..."); break;
        case string.toUpperCase() == string:
            console.log("Pwa, calme-toi..."); break;
        case string.includes("Fortnite"):
            console.log("on s' fait une partie soum-soum ?"); break;
        case string == "":
            console.log("t'es en PLS?"); break;
        default:
            console.log("balek"); break;
    }
}
let phrase = prompt();
answer(phrase);