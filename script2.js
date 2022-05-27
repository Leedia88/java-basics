
// Exercice 2.1

function factorielle(number){
    let fact = 1;
    for (let count=number; count>0; count--){
        fact = fact * count;
    }
    return fact
}

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(`Le résultat est : ${factorielle(number)}`);

