const books = [
  { title: "The Power of Habit", author: "Charles Duhigg", read: true },
  {
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    read: false,
  },
];


// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra

//   const paragraph1 = document.createElement("p");

//   paragraph1.textContent = books[0].title + " by " + books[0].author;

// //   console.log(paragraph1);

//   const paragraph2 = document.createElement("p");

//   paragraph2.textContent = books[1].title + " by " + books[1].author;

// //   console.log(paragraph2);

// const par1 = document.querySelector("body");

// par1.appendChild(paragraph1);

// const par2 = document.querySelector("body");

// par2.appendChild(paragraph2);

const app = document.querySelector("body");

for (i = 0; i < books.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = books[i].title + " by " + books[i].author;
  app.appendChild(paragraph);
}
//BONUS: folositi ul si li pentru a face display la carti

const list = document.querySelector("body");

const ul = document.createElement("ul");
list.appendChild(ul);

for (i = 0; i < books.length; i++) {
  const li = document.createElement("li");
  li.textContent = books[i].title + " by " + books[i].author;
  ul.appendChild(li);

  //BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare
  //(nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)

  books[0].URL =
    "https://timewellness.files.wordpress.com/2012/03/power-of-habit-book-cover.jpg?w=600";
  books[1].URL = "https://images.penguinrandomhouse.com/cover/9780345472328";

  image = document.createElement("img");
  image.setAttribute("src", books[i].URL);
  ul.appendChild(image);

  //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

  if (books[i].read === true) {
    li.style.color = "green";
  } else {
    li.style.color = "red";
  }
};

