//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var firstArray = ["pix" , "caiet" , "stilou" , "penar" , "carte"];
var result = firstArray.length;

console.log(result);



//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result2 = array1.concat(array2);

console.log(result2);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()


var array3 = [1, 2, 3, 4];
var result3 = Array.isArray(array3);

console.log(result3);

var array4 = (1, 2, 3, 4);
var result4 = Array.isArray(array4);console.log(cars);

console.log(result4);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result5 = numbers.join(' and ');

console.log(result5);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos

var cars = ['Tesla', 'Dacia'];
cars.push('Audi' , 'Koenigsegg');

console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop();

console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift('Dodge');

console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();

console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(3,0,'BMW','Toyota');

console.log(cars);


//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a, b){
    return a - b;
});

console.log(arrayNumbers);              


arrayNumbers.sort(function(a, b){
    return b - a;
});

console.log(arrayNumbers);  
                  
                  
//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat

var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"];
fruitsArray.sort();

console.log(fruitsArray);