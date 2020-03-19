// Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“


function greatestNrBetween(nr1, nr2){
    if(nr1<nr2){
        return "Numarul mai mare dintre " + nr1 + " si " + nr2 + " este " + nr2
    }else{
        return "Numarul mai mare dintre " + nr1 + " si " + nr2 + " este " + nr1 
    }

}

console.log(greatestNrBetween(10, 5));


// Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.

function helloWorldInLang(lang) {
    switch(lang) {
      case "ro":
        console.log("Buna!");
        break;
      case "fr":
        console.log("Bonjour!");
        break;
      case "sp":
        console.log("Hola!");
        break;
      default:
        console.log("Hello world!");
      
    }
  }
  
  helloWorldInLang('de')

// Exemplul 2


var helloWorldInLang = function(param){
    if(param === 'ro'){
      return "Buna!";
      
    }else if(param === 'fr'){
      return "Bonjour!";
      
    }else if(param === 'sp'){
      return "Hola!";
      
    }else {
      return "Hello World!";
    }
  }
  
  console.log(helloWorldInLang('sp'));


// Scrieti o functie numita pluralizeWord care:
// - accepta doua argumente: un substantiv in engleza si un numar
// - returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
// - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 


  function  pluralizeWord(subst, nr){
    if(subst === 'goose'){
      return nr + " " + 'geese';
    }if(subst === 'sheep'){
      return nr + " " + 'sheep';
    }if(nr>1){
      return nr + " " + subst + "s";
    }else{
      return nr + " " + subst;
    }
  }
  
  console.log(pluralizeWord('goose', 4));

//   Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
//   corespunzatoare considerand urmatoarele criterii:
//   - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
//   - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
//   - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
//   Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”


function perYear(income){
    if(income<=30000){
      var tax = 0;
      return "Daca aveti castigul anual mai mic de " + income + " taxa este " + tax + ".";
    }else if(income>=50000 && income<=99999){
      var tax = income * 0.35;
      return "Daca aveti castigul anual mai mic de " + income + " taxa este " + tax + ".";
    }else if(income>100000){
      var tax = income * 0.40;
      return "Daca aveti castigul anual mai mic de " + income + " taxa este " + tax + ".";
    }
  }
  
  console.log(perYear(87654));

  
//   Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
//   afiseaza:
//   - AA if points is greater than 90
//   - AB if points is greater than 80 and less than or equal to 90
//   - BB if points is greater than 70 and less than or equal to 80
//   - BC if points is greater than 60 and less than or equal to 70
//   - CC if points is greater than 50 and less than or equal to 60
//   - CD if points is greater than 40 and less than or equal to 50
//   - DD if points is greater than 30 and less than or equal to 40
//   - FF if points is less than or equal to 30

  function cond(points){
    if(points>90){
      return 'AA'
    }else if(points>80 && points<=90){
      return 'AB'
    }else if(points>70 && points<=80){
      return 'BB'
    }else if(points>60 && points<=70){
      return 'BC'
    }else if(points>50 && points<=60){
      return 'CC'
    }else if(points>40 && points<=50){
      return 'CD'
    }else if(points>30 && points<=40){
      return 'DD'
    }else if(points<=30){
      return 'FF'
    }
  }
  
  console.log(cond(30))



//   Scrieti o functie care testeaza daca o anumita data introdusa este in weekend:
//   Test Data :
//   console.log(is_weekend('Nov 15, 2014'));
//   console.log(is_weekend('Nov 16, 2014'));
//   console.log(is_weekend('Nov 17, 2014'));
//   Output :
//   "weekend"
//   "weekend"
//   undefined


function is_weekend(dat){
  
    var dte = new Date(dat);
    
    if(dte.getDay() === 0 || dte.getDay() === 6){
      return "weekend";
    }
  }
  
  console.log(is_weekend('Nov 15, 2014'));
  console.log(is_weekend('Nov 16, 2014'));
  console.log(is_weekend('Nov 17, 2014'));
