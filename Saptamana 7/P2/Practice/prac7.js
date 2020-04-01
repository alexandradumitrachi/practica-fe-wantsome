//1

function hideEmail(email) {
  var split = email.split("@");
  var emailSplit = split[0];
  var domain = split[1];
  var nameSplit = emailSplit.split(".");
  var firstName = nameSplit[0];

  return firstName + "...@" + domain;
}

console.log(hideEmail("alex.dum@yahoo.com"));

//2

function FirstLetter(phrase) {
  var spl = phrase.split(" ");

  for (i = 0; i < spl.length; i++) {
    spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].slice(1);
  }

  console.log(spl.join(" "));
}

FirstLetter("i am batman");

//3

function smth(ceva) {
  var str = ceva.split("");

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  console.log(str.join(""));
}

smth("alaBALAPorTOcala");

//4

function concat(str, num) {
  var result = "";

  for (i = 0; i < num; i++) {
    result += str;
  }

  console.log(result);
}

concat("Wantsome", 2);

//5

function polindrome(ceva) {
  var reverseCeva = ceva
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (ceva === reverseCeva) {
    return "It is a polindrome";
  }

  return "Is not a polindrome";
}

console.log(polindrome("level"));

console.log(polindrome("polindrome"));

//6

function Array(prm) {
  var highValue = [0, 0, 0];
  for (i = 0; i < prm.length; i++) {
    for (index = 0; index < prm[i].length; index++) {
      if (prm[i][index] > highValue[i]) {
        highValue[i] = prm[i][index];
      }
    }
  }
  console.log(highValue);
}
Array([
  [1, 2, 3, 5],
  [34, 53, 97, 85],
  [61, 456, 276, 398]
]);

//7

function RevStr(str) {
  var SplStr = str.split("");
  var RevStr = SplStr.reverse();
  var JoinStr = RevStr.join("");
  console.log(JoinStr);
}

RevStr("This is a reversed string.");

//8

function Factorial(x) {
  var y = 1;
  for (i = 1; i <= x; i++) {
    y *= i;
  }
  console.log(y);
}

Factorial(7);

//9
function Check(prm1, prm2) {
  if (prm1.endsWith(prm2)) {
    return true;
  } else {
    return false;
  }
}

console.log(Check("overload", "load"));
console.log(Check("sixteen", "ten"));

//10

function testIf(array, fct){
  for (i = 0; i < array.length; i++) {
    fct (array[i]);
  }
}

var theArray = [1, 4, 99, 44, 33, 52, 7, 1, 56, 32]

function testElem(nmr) {
  if (nmr === 7) {
   console.log(nmr);
  }
}

testIf (theArray, testElem);

//11

function Letter(prm0, prm1) {
  for (i = 0; i < prm1.length; i++)
    for (index = 0; index < prm0.length; index++) {
      if (prm1[i] === prm0[i]) {
        return true;
      }
      {
        return false;
      }
    }
}
console.log(Letter("arm", "alarm"));
console.log(Letter("lol", "cevalol"));


//merge numai ptr primele 3
//nu stiu exact care era metoda...
//am uitat sa mentionez exercitiul asta la curs..

//12

function Smth(value, num) {
  for (var elem of value) {
    if (elem === num) {
      break;
    }
    console.log(elem);
  }
}

Smth([1, 2, 3, 4, 5, 6, 7, 8], 6);

//13

var SomeArray = [0, null, undefined, NaN, false, "", 8];

function verifyThis(arrayHere){
	var results = [];
  for (i=0; i< arrayHere.length; i++){
  	results.push(!!arrayHere[i])
  }
  console.log(results)
}

verifyThis(SomeArray);

//14

function repeatString(str, num) {
  var repeatedStr = "";
  while (num > 0) {
    repeatedStr += str;
    num--;
  }
  console.log(repeatedStr);
}
repeatString("How many times? ", 3);

//asta le afiseaza pe toate intr-un string.
// nu am stiut care ar trebui sa fie rezultatul si de asta am pus 2 variante.

function repeatStr(string, num) {
  
  while (num > 0) {
   console.log(string);
    num--;
  }
}
repeatStr("How many times? ", 3);

