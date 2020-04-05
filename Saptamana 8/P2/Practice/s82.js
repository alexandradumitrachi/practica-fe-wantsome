//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

let Sumof = num => {
  let sum = 0;
  for (i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
};

Sumof(7);

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

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

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
let ReverseStr = str => {
  let SplStr = str.split("");
  let RevStr = SplStr.reverse();
  let JoinStr = RevStr.join("");
  console.log(JoinStr);
};

ReverseStr("This is a reversed string.");

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

let ChangeLetter = letters => {
  return letters.replace(/[a-zA-Z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) + 1);
  });
};

console.log(ChangeLetter("abcde"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

let ConvertTime = totalMinutes => {
  let n = totalMinutes;
  let divideH = n / 60;
  let hours = Math.floor(divideH);
  let multiplyM = (divideH - hours) * 60;
  let minutes = Math.round(multiplyM);
  console.log(hours + ":" + minutes);
};

ConvertTime(64);

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

let SortAplhabetical = someString =>{
    let splitstr = someString.split("");
    let sortstr = splitstr.sort();
    console.log(sortstr.join(""));
}

SortAplhabetical("sort this string");
SortAplhabetical("gfedcba");

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca 
    inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

let CheckSign = aString =>{
    let check = aString.charAt(i)
    for(i=0; i< aString.length; i+=2)  
    if(check === "+"){
        return true;
    }else{
        return false;
    }
}

console.log(CheckSign("+ab+c+d"));
console.log(CheckSign("+a+b+c"));


// let CheckSign = aString =>{
//     let check = aString.charAt(i)
//     i=0;
//     while(i< aString.length) 
//     if(check === "+"){
//         return true;
//     }else{
//         return false;
//     }
//     i+=2
// }

// console.log(CheckSign("+a+b+c"));
// console.log(CheckSign("+ab+c+d"));


//imi da niste erori ciudate la ex asta daca il pun pe jsfiddle sau codepen
