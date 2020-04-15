// Adaugati un tag script la final

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"

// Schimbati fiecare span (name, fav-drink, born-place)
//cu informatiile despre voi

// Iterati prin fiecare "li" si puneti clasa "listitem".
//Adaugati un tag style(in head) care seteaza o regula pentru
//.listitem sa aiba culoarea rosie

// Creati un element img si setati atributul src sa aiba
// o poza cu voi sau ceva random de pe net.
//Puneti acest element(append) la pagina noastra

// var elements = [... nodelist]

// var elements = Array.from(nodelist)

const body = document.querySelector("body");
// console.log(body);

body.style.fontFamily = "sans-serif";

const span = document.querySelectorAll("span");

// span[0].textContent = "Alexandra";
// span[1].textContent = "Coke";
// span[2].textContent = "Iasi";

span[0].innerText = "Alexandra";
span[1].innerText = "Coke";
span[2].innerText = "Iasi";

// console.log(span);

const items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].classList.add("listitem");
}

// console.log(items);

const image = document.createElement("img");
image.setAttribute('src' , 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
const finalImage = document.querySelector("body");
finalImage.appendChild(image);
