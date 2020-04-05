function Calculate(a, b) {
  if (a === b) {
    return a * b;
  }
  {
    return a + b;
  }
}

console.log(Calculate(5, 10));
console.log(Calculate(10, 10));

//2

function CheckThis(prm1, prm2) {
  if ((prm1 && prm2 === 30) || prm1 + prm2 === 30) {
    return true;
  }
  {
    return false;
  }
}

console.log(CheckThis(30, 30));
console.log(CheckThis(15, 15));
console.log(CheckThis(10, 15));

//3

let checkString = param1 => {
  if (param1.includes("JS")) {
    return param1;
  }
  {
    return `JS ${param1}`;
  }
};

console.log(checkString("smth"));
console.log(checkString("JS me"));

//4

let RemoveDouble = theparam => {
  let host = "";
  for (var i = 0; i < theparam.length; i++) {
    if (host.indexOf(theparam[i]) == -1) {
      host += theparam[i];
    }
  }
  return host;
};
console.log(RemoveDouble("xxccffeyhhh"));
console.log(RemoveDouble("00223344"));

//5

let findWord = str => {
  let strSplit = str.split(" ");
  let result = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > strSplit[result].length) {
      result = i;
    }
  }
  return strSplit[result];
};
console.log(findWord("This is the longest word"));

//6

let Stars = rows => {
  for (i = 1; i <= rows; i++) {
    let str = "";
    for (let index = 1; index <= i; index++) {
      str += "*";
    }
    console.log(str);
  }
};

Stars(5);

//7

const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  console.log(negativeNumbers);
}
extractNegativeNumbers([1, 2, -5, 4, -6]);

//8

let calculate = (param1, param2, param3) => {
  if (param3 === "add") {
    console.log(param1 + param2);
  } else if (param3 === "substract") {
    console.log(param1 - param2);
  } else if (param3 === "multiply") {
    console.log(param1 * param2);
  } else if (param3 === "divide") {
    console.log(param1 / param2);
  }
};

calculate(2, 5, "add");
calculate(10, 8, "substract");
calculate(10, 2, "divide");
calculate(2, 3, "multiply");

//9

let isDiv = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("BOTH");
  } else if (num % 5 === 0) {
    console.log("FIVE");
  } else if (num % 3 === 0) {
    console.log("THREE");
  } else {
    console.log(num);
  }
};

isDiv(15);
isDiv(9);
isDiv(7);

//9 Master

let ShowDate = param1 => {
  let today = new Date();
  let toDay = "Azi este : " + today.getDay();
  if (today.getDay() === 0) {
    console.log("Astazi este : Duminica");
  } else if (today.getDay() === 1) {
    console.log("Astazi este : Luni");
  } else if (today.getDay() === 2) {
    console.log("Astazi este : Marti");
  } else if (today.getDay() === 3) {
    console.log("Astazi este : Miercuri");
  } else if (today.getDay() === 4) {
    console.log("Astazi este : Joi");
  } else if (today.getDay() === 5) {
    console.log("Astazi este : Vineri");
  } else if (today.getDay() === 6) {
    console.log("Astazi este : Sambata");
  }
  let Hour =
    "Ora este : " +
    today.getHours() +
    " PM : " +
    today.getMinutes() +
    " : " +
    today.getSeconds();

  console.log(Hour);
};

ShowDate("Apr 03, 2020");

//10

let validPin = pin => {
  console.log(/^([0-9]{4}|[0-9]{6})$/.test(pin));
};

validPin("1234");
validPin("12345");
validPin("z23f");

// for(i=0; i <= pin.length; i++){
//     if(pin.length === 4){
//         console.log(true);
//     }else if(pin[i] !== [0-9] || pin.length < 4){
//         console.log(false);
//     }
// }

//eu facusem asa dar la litere nu stiam ce sa pun ca sa verifice...

//11

let removeVowels = word => {
  consonants = word.match(/[^aeiou]/gi);
  console.log(consonants.join(""));
};

removeVowels("Hey I am developer");

//12

let isSquareNumber = num => {
  if (num > 0 && Math.sqrt(num) % 1 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isSquareNumber(-1);
isSquareNumber(25);
isSquareNumber(3);

//13

let isAnagram = (first, second) => {
  if (
    first
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("") ===
    second
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("")
  ) {
    console.log(true);
  }
};

isAnagram("School master", "The class room");
isAnagram("silent", "listen");
