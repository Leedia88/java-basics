//Question 1
console.log(document.querySelectorAll("p").length);

//Question 2
console.log(document.getElementById("coucou").textContent);;

//Question 3
console.log(document.getElementsByTagName("a")[3]["href"]);

//Question 4
console.log(document.getElementsByClassName("compte-moi").length);

//Question 5
console.log(document.querySelectorAll("li.compte-moi").length);

//Question 6
console.log(document.querySelectorAll("ul > li.compte-moi").length);

//Question 7
console.log(document.querySelector("div").querySelectorAll("ul")[1].childNodes[1].firstChild.textContent);
