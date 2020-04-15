const list = document.querySelector("ul");

const listLi = list.children;

// console.log(listLi[0]);

const previous = listLi[1].previousElementSibling;

const next = listLi[1].nextElementSibling;

// console.log(previous.textContent);

previous.style.color = "red";

next.style.color = "purple";

listLi[1].style.color = "blue";
