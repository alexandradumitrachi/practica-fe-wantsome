//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function (string) {
  const letter = string
    .split("")
    .map((letter) => String.fromCharCode(letter.charCodeAt(0) + 1))
    .join("");
  return letter;
};

console.log(moveLetters("hello"));
console.log(moveLetters("abcxy"));

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
  const upper = string
    .split(" ")
    .map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase();
      } else {
        return word;
      }
    })
    .join(" ");
  return upper;
};

console.log(changeWordCase("hey ppl, lets learn javascript together"));

// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
  { name: "sasha", sex: "f", age: 7, species: "cat" },
  { name: "john", sex: "m", age: 133, species: "human" },
  { name: "titus", sex: "m", age: 62, species: "human" },
  { name: "kalifa", sex: "f", age: 255, species: "human" },
  { name: "oreo", sex: "m", age: 21, species: "cat" },
];

let allCats = arr.filter((user) => user.species === "cat");
console.log(allCats);

let allHumans = arr.filter((user) => user.species === "human");
console.log(allHumans);

let allFemales = arr.filter((user) => user.sex === "f");
console.log(allFemales);

let totalOfAllAges = arr.reduce((acc, item) => acc + item.age, 0);
console.log(totalOfAllAges);

let averageAgeOfCats = arr
  .filter((user) => user.species === "cat")
  .reduce((acc, item) => (acc + item.age) / allCats.length, 0);
console.log(averageAgeOfCats);

let averageAgeOfHumans = arr
  .filter((user) => user.species === "human")
  .reduce((acc, item) => (acc + item.age) / allHumans.length, 0);
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr
  .reduce((acc, item) => acc + item.name.length / arr.length, 0);
console.log(avgLengthOfNames);

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const square = (no) => no * no;
const double = (no) => no * 2;
const composedValue = (fn1, fn2, value) => fn1(fn2(value));

console.log(composedValue(square, double, 5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double)
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (nmr) => square(double(nmr));

console.log(compose(10));

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (numbr) => numbr.filter((numbr) => numbr % 2 === 1);
const find = (array, fn) => fn(array);

console.log(find([1, 2, 3, 4, 5], isOdd));
