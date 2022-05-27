
//Exercice 2.2

function stage(number, size){
    let str = "";
    for(let i=1; i<=(size-number); i++){
        str = str + " ";  }
    for(let j=1; j<=number; j++){
        str = str + "#"; }
    return str
}
let numberEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let a = 1;
while(a <= numberEtages) {
    console.log(stage(a,numberEtages));
    a++;
}
