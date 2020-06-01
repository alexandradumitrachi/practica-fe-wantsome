// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json

const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
.then(response => response.json())
// .then(myJson => myJson.map(user => ({user: user.username, id:user.id})))
.then(myJson => myJson.filter(user => user.id > 5))
// .then(response => console.log(response))
.then(myJson => console.log(myJson.map(user => ({name: user.name, city: user.address.city }))))



//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

document.cookie = "name = Alexandra"
document.cookie = "profession = Care Consultant" 
document.cookie = " age = 26 "

const cookie = document.cookie;


document.cookie = "pet=cat"; expires=  "Thu, 20 Aug 2020 20:00:00";
document.cookie = "gender=female"; expires=  "Thu, 20 Aug 2020 20:00:00";

const cookie2 = document.cookie;

// console.log(cookie2);

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
localStorage.setItem("height", "100px");
localStorage.setItem("background-color","green");
const loc1 = localStorage.getItem("width");
const loc2 = localStorage.getItem("height");
const loc3 = localStorage.getItem("background-color");
const div = document.getElementById("sq");
div.style.background = loc3;
div.style.width = loc2;
div.style.height = loc1;

