/*   Exercice 1.1    */

// console.log("Bonjour monde");

//Exercice 1.2

// let prenom = prompt("Quel est ton prénom?");
// console.log(`Bonjour ${prenom}!`);


// Exercice 2.1

// function factorielle(number){
//     let fact = 1;
//     for (let count=number; count>0; count--){
//         fact = fact * count;
//     }
//     return fact
// }
// let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
// console.log(`Le résultat est : ${factorielle(number)}`);


//Exercice 2.2

// function stage(number, size){
//     let str = "";
//     for(let i=1; i<=(size-number); i++){
//         str = str + " ";  }
//     for(let j=1; j<=number; j++){
//         str = str + "#"; }
//     return str
// }
// let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// let a = 1;
// while(a <= number) {
//     console.log(stage(a,number));
//     a++;
// }


//Exercice 3.1
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//   Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
// let entrepreneursSeventies = [];
// for(let i in entrepreneurs){
//     console.log(entrepreneurs[i]);
//     if (entrepreneurs[i].year <1980 && entrepreneurs[i].year >=1970){
//         console.log("je remplis la condition");
//         entrepreneursSeventies.push(entrepreneurs[i]);
//     }
// }
// console.log(entrepreneursSeventies);

//   Sors une array qui contient le prénom et le nom des entrepreneurs ;
// let fullNames = [];
// for(let i in entrepreneurs){
//     fullNames.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
// }
// console.log(fullNames);

//   Quel âge aurait chaque inventeur aujourd'hui ?
// let nom =""; let age = new Date; const CurrentYear = new Date().getFullYear()
// for(let i in entrepreneurs){
//     nom = entrepreneurs[i].first;
//     age = CurrentYear - entrepreneurs[i].year;
//     console.log(`${nom} aurait ${age} ans aujourd'hui`);
// }

//   Trie les entrepreneurs par ordre alphabétique du nom de famille.
// entrepreneurs.sort((a,b) => {
//     let fa = a.last.toLowerCase(),
//         fb = b.last.toLowerCase();

//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// });

// console.log(entrepreneurs);


//Exercice 3.2
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
// let answer = true;
// for(let i in books){
//     answer = answer && books[i].rented >0;
// }
// console.log(answer)

// console.log("Quel est livre le plus emprunté ?")
// books.sort((a, b) => {
//     return a.rented - b.rented;
// });
// console.log(books[books.length-1].title);
// console.log("Quel est le livre le moins emprunté ?");
// console.log(books[0].title);

// console.log("Trouve le livre avec l'ID: 873495");
// const index = books.findIndex((book) => book.id == 873495);
// console.log(books[index]);

// console.log("Supprime le livre avec l'ID: 133712");
// const index = books.findIndex((book) => book.id == 133712);
// const booksBis = [];
// for(let i in books){
//     if (i!= index) {
//         booksBis.push(books[i]);
//     }
// }
// console.log(books);
// console.log(booksBis);

// console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
// booksBis.sort((a,b) => {
//     let fa = a.title.toLowerCase(),
//         fb = b.title.toLowerCase();

//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// });
// console.log(booksBis);


//Exercice 4.1

