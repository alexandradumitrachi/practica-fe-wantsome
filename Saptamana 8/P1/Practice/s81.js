function calculate(a, b) {
  if (a === b) {
    return a * b;
  }
  return a + b;
}

console.log(calculate(5, 10));
console.log(calculate(10, 10));

//2

function checkThis(prm1, prm2) {
  if ((prm1 && prm2 === 30) || prm1 + prm2 === 30) {
    return true;
  }
  return false;
}

console.log(checkThis(30, 30));
console.log(checkThis(15, 15));
console.log(checkThis(10, 15));

//3

let checkString = (param1) => {
  if (param1.includes("JS")) {
    return param1;
  }
  return `JS ${param1}`;
};

console.log(checkString("smth"));
console.log(checkString("JS me"));

//4

let removeDouble = (theparam) => {
  let host = "";
  for (var i = 0; i < theparam.length; i++) {
    if (host.indexOf(theparam[i]) == -1) {
      host += theparam[i];
    }
  }
  return host;
};
console.log(removeDouble("xxccffeyhhh"));
console.log(removeDouble("00223344"));

//5

let findWord = (str) => {
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

function stars(rows) {
  let result = [];
  for (let i = 0; i <= rows; i++) {
    let star = "*".repeat(i);
    result.push(star);
  }
  return result.join("\n");
}
console.log(stars(5));

//7

function extractNegativeNumbers(numbers) {
  const negativeNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  return negativeNumbers;
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//8

let calculateMath = (param1, param2, param3) => {
  if (param3 === "add") {
    return param1 + param2;
  } else if (param3 === "substract") {
    return param1 - param2;
  } else if (param3 === "multiply") {
    return param1 * param2;
  } else if (param3 === "divide") {
    return param1 / param2;
  } else {
    return "This arithmetic operation cannot be done.";
  }
};

console.log(calculateMath(2, 5, "add"));
console.log(calculateMath(10, 8, "substract"));
console.log(calculateMath(10, 2, "divide"));
console.log(calculateMath(2, 3, "multiply"));

//9

let isDiv = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "BOTH";
  } else if (num % 5 === 0) {
    return "FIVE";
  } else if (num % 3 === 0) {
    return "THREE";
  } else {
    return num;
  }
};

console.log(isDiv(15));
console.log(isDiv(9));
console.log(isDiv(7));

//9 Master

let showDate = (param1) => {
  let today = new Date();
  let Hour =
    "Ora este : " +
    today.getHours() +
    " PM : " +
    today.getMinutes() +
    " : " +
    today.getSeconds();
  let toDay = "Azi este : " + today.getDay();
  if (today.getDay() === 0) {
    return "Astazi este : Duminica " + "\n" + Hour;
  } else if (today.getDay() === 1) {
    return "Astazi este : Luni " + "\n" + Hour;
  } else if (today.getDay() === 2) {
    return "Astazi este : Marti " + "\n" + Hour;
  } else if (today.getDay() === 3) {
    return "Astazi este : Miercuri " + "\n" + Hour;
  } else if (today.getDay() === 4) {
    return "Astazi este : Joi " + "\n" + Hour;
  } else if (today.getDay() === 5) {
    return "Astazi este : Vineri " + "\n" + Hour;
  } else if (today.getDay() === 6) {
    return "Astazi este : Sambata " + "\n" + Hour;
  }
};

console.log(showDate("Apr 03, 2020"));

//10

let validPin = (pin) => {
  return /^([0-9]{4}|[0-9]{6})$/.test(pin);
};

console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));

//method 2

const validatePin = (pin) => {
  if (pin.length === 4 || pin.length === 6) {
    if (isNaN(pin)) {
      return false;
    }
    return true;
  }
  return false;
};

console.log(validatePin("1234"));
console.log(validatePin("12345"));
console.log(validatePin("z23f"));

//11

let removeVowels = (word) => {
  consonants = word.match(/[^aeiou]/gi);
  return consonants.join("");
};

console.log(removeVowels("Hey I am developer"));

//12

let isSquareNumber = (num) => {
  if (num > 0 && Math.sqrt(num) % 1 === 0) {
    return true;
  }
  return false;
};

console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));

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
  )
    return true;
};

console.log(isAnagram("School master", "The class room"));
console.log(isAnagram("silent", "listen"));
