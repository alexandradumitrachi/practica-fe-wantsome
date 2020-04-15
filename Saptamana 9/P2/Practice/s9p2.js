//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

document.getElementById("test");
let idTest = document.getElementById("test");
idTest.style.backgroundColor = "red";

document.getElementsByClassName("test");
let classTest = document.getElementsByClassName("test");
for (i = 0; i < classTest.length; i++);
{
  classTest[0].style.backgroundColor = "blue";
  classTest[1].style.backgroundColor = "green";
}

document.getElementsByTagName("section");
let sectionDoc = document.getElementsByTagName("section");
for (i = 0; i < sectionDoc.length; i++) {
  sectionDoc[0].style.backgroundColor = "pink";
  sectionDoc[1].style.backgroundColor = "purple";
}

document.querySelector("#test-query");
let query1 = document.querySelector("#test-query");
query1.style.backgroundColor = "magenta";

document.querySelectorAll("test-query-all");
let queryAll = document.querySelectorAll('.test-query-all');
for (i = 0; i < queryAll.length; i++) {
  queryAll[0].style.backgroundColor = "yellow";
  queryAll[1].style.backgroundColor = "orange";
}
