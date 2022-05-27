
//Exercice 4.1

function acide(string) {
    switch (string) {
        case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
            return "Sérine";
        case "CCU": case "CCC": case "CCA": case "CCG":
            return "Proline";
        case "UUA": case "UUG":
            return "Leucine";
        case "UUU": case "UUC":
            return "Phénylalanine";
        case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
            return "Arginine";
        case "UAU": case "UAC":
            return "Tyrosine";
    }
}

function arn(string){
    let liste = [];
    for(let i=1; i<string.length; i+=3){
        liste.push(string.substr(i-1, 3));
    }
    for(let i in liste){
        liste[i] = acide(liste[i]);
    };
    return liste.join("-");
}
console.log(arn("CCGUCGUUGCGCUACAGC"))
console.log(arn("CCUCGCCGGUACUUCUCG"))