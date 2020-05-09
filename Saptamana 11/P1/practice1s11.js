//ex1

function capitalizeNames(arr) {
  let upper = arr.map(
    (str) => str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
  );
  return upper;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// ex2

function doubleEachNumber(arr) {
  doubleN = arr.map((item) => {
    if (typeof item !== "number") {
      return item;
    } else {
      return item * 2;
    }
  });
  return doubleN;
}
console.log(doubleEachNumber([2, "5", 100, "100", "blalblala"])); // [4, “5”, 200, “100”, “blalblala”]

//ex3

function getPersonsNames(arr) {
  const names = arr.map((full) => full.name + " " + full.surname);
  return names;
}
console.log(
  getPersonsNames([
    {
      name: "Angelina",
      surname: "Jolie",
      age: 80,
    },
    {
      name: "Eric",
      surname: "Jones",
      age: 27,
    },
  ])
);

//ex4

function computeExamPass(arr) {
  const exam = arr.map((grd) => {
    if (grd.grade > 5) {
      return `${grd.name} ${grd.surname} has passed the exam`;
    } else {
      return `${grd.name} ${grd.surname} has not passed the exam`;
    }
  });
  return exam;
}
console.log(
  computeExamPass([
    {
      name: "Angelina",
      surname: "Jolie",
      grade: 7,
    },
    {
      name: "Eric",
      surname: "Jones",
      grade: 3,
    },
  ])
);

//ex5

function getPersonsDomElements(arr) {
  arr.forEach((person) => {
    let name = document.createElement("h1");
    name.textContent = `${person.name} ${person.surname}`;
    document.querySelector("body").appendChild(name);

    let age = document.createElement("h2");
    age.textContent = person.age;
    document.querySelector("body").appendChild(age);
  });
}
console.log(
  getPersonsDomElements([
    {
      name: "Angelina",
      surname: "Jolie",
      age: 80,
    },
    {
      name: "Eric",
      surname: "Jones",
      age: 27,
    },
  ])
);
