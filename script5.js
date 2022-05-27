

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

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let answer = true;
for(let i in books){
    answer = answer && books[i].rented >0;}
console.log(answer)

console.log("Quel est livre le plus emprunté ?")
books.sort((a, b) => {
    return a.rented - b.rented;
});
console.log(books[books.length-1].title);

console.log("Quel est le livre le moins emprunté ?");
console.log(books[0].title);

console.log("Trouve le livre avec l'ID: 873495");
const indexLivre = books.findIndex((book) => book.id == 873495);
console.log(books[indexLivre]);

console.log("Supprime le livre avec l'ID: 133712");
const index = books.findIndex((book) => book.id == 133712);
const booksBis = [];
for(let i in books){
    if (i!= index) {
        booksBis.push(books[i]);
    }
}
console.log(books);
console.log(booksBis);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
booksBis.sort((a,b) => {
    let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(booksBis);

