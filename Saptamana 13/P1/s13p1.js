// 1.Creati o functie care primeste un numar ca si argument si returneaza
// un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject /
//resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then
//si catch pentru a trata ambele cazuri.

const promiseForNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve(number);
    } else {
      reject(number);
    }
  });
};

promiseForNumber(7)
  .then((result) => {
    console.log(`The result is number ${result} and is less than 10`);
  })
  .catch((result) => {
    console.log(`The result is number ${result} and is greater or equal to 10`);
  });

promiseForNumber(10)
  .then((result) => {
    console.log(`The result is number ${result} and is less than 10`);
  })
  .catch((result) => {
    console.log(`The result is number ${result} and is greater or equal to 10`);
  });

// 2.Creati o functie care primeste un string ca si argument si
//returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in
//functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a
//trata ambele cazuri.

const theString = "I promise this to you!";
const theWord = "promise";

const containString = (str) => {
  return new Promise((resolve, reject) => {
    if (str.includes(theWord) === true) {
      resolve(`The word promise is there!`);
    } else {
      reject(`The string doesn't contain the word promise.`);
    }
  });
};

containString(theString)
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

//  4.Creati doua functii care folosesc Promises pentru a putea face o
//   inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte
// si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul
// primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element
// cu o valoare diferita de tipul string, se va face reject.



const arra = ["this", "is", "an", "array", 8];

const capitalizeWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.every((str) => typeof str === "string")) {
      resolve(arr.map((str) => str.toUpperCase()));
    } else {
      reject("The result is not a string. This is an error!");
    }
  });
};

const sortWords = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
};

  capitalizeWords(arra)
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((result) => console.log(result));



// 5
// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (
// cel putin 3 )

//promise get data si in el new promise.....si in el se face XML request...in caz de 200 reload....
//https://api.exchangeratesapi.io/latest?base=EUR


const API = url => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      };
    };
    request.onerror = () => {
      reject(Error("Network Error"));
    };
    request.send();
  });
};

API('https://api.exchangeratesapi.io/latest?base=EUR')
  .then(result => console.log('Succes!', result))
  .catch(error => console.log('Fail!', error));

API("https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D")
.then(result => console.log('Succes!', result))
.catch(error => console.log('Fail!', error));

API("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/")
.then(result => console.log('Succes!', result))
.catch(error => console.log('Fail!', error));

API("https://love-calculator.p.rapidapi.com/getPercentage")
.then(result => console.log('Succes!', result))
.catch(error => console.log('Fail!', error));

// Api-urile sunt luate de pe https://rapidapi.com/, in consola imi da Error: Unauthorized 
//pentru ultimele 3, cele de pe rapidapi si nu stiu de ce, daca ai putea sa imi lasi un comm te rog