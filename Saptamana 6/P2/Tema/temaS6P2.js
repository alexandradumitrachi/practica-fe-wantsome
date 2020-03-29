// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".


function Sex(CNP){
    var cnpString  = CNP.toString();
      if(cnpString[0] === '1'){
        return "Persoana verificata este de sexul Masculin."; 
      }else if(cnpString[0] === '2'){
        return "Persoana verificata este de sexul Feminin.";     
      }else{
        return "CNP-ul este incorect."
      }
    }
    
   console.log(Sex(1940817226723));
   console.log(Sex(2940817226723));
   console.log(Sex(5940817226723));
  
  // result>>> "Persoana verificata este de sexul Masculin."
  //           "Persoana verificata este de sexul Feminin."
  //           "CNP-ul este incorect."
  


//   2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".



var exam = function(points){
    if(points>=1 && points<3){
        var grade = "E";
        return "Calificatul corespunzator punctajului " + points +  " este " + grade + ".";
      }else if(points>=3 && points<=6){
        var grade = "D";
        return "Calificatul corespunzator punctajului " + points +  " este " + grade + "."; 
      }else if(points>=7 && points<=8){
        var grade = "B";
        return "Calificatul corespunzator punctajului " + points +  " este " + grade + "."; 
      }else if(points === 9){
        var grade = "A";
        return "Calificatul corespunzator punctajului " + points +  " este " + grade + ".";
      }else if(points === 10){
        var grade = "A+";
        return "Calificatul corespunzator punctajului " + points +  " este " + grade + ".";   
     }
  }
  
  console.log(exam(10));


// result>>"Calificatul corespunzator punctajului 1 este E."
//         "Calificatul corespunzator punctajului 2 este E."
//         "Calificatul corespunzator punctajului 3 este D."
//         "Calificatul corespunzator punctajului 4 este D."
//         "Calificatul corespunzator punctajului 5 este D."
//         "Calificatul corespunzator punctajului 6 este D."
//         "Calificatul corespunzator punctajului 7 este B."
//         "Calificatul corespunzator punctajului 8 este B."
//         "Calificatul corespunzator punctajului 9 este A."
//         "Calificatul corespunzator punctajului 10 este A+."



// // 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un 
// text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul 
// in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 
// variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
// Una dintre implementari trebuie sa fie bazata pe Object Literals 
// ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )


                                        // Example A


var car = function(brand){
    if(brand === "Audi"){
     var country = "Germania";
     return "Marca "+ brand + " se produce in " + country + ".";
    }else if(brand === "Toyota"){
     var country = "Japonia";
     return "Marca "+ brand + " se produce in " + country + "."; 
    }else if(brand === "Hyundai"){
     var country = "Coreea de Sud";
     return "Marca "+ brand + " se produce in " + country + "."; 
    }else if(brand === "Ford"){
     var country = "S.U.A.";
     return "Marca "+ brand + " se produce in " + country + ".";  
    }else if(brand === "Fiat"){
     var country = "Italia";
     return "Marca "+ brand + " se produce in " + country + ".";   
    }else if(brand === "Bugatti"){
     var country = "Franta";
     return "Marca "+ brand + " se produce in " + country + ".";   
    }else if(brand === "Rolls-Royce"){
     var country = "Anglia";
     return "Marca "+ brand + " se produce in " + country + ".";
    }else{
     return "Marca "+ brand + " este necunoscuta.";
   }
    
}

console.log(car("Hyundai"));

// return>>>"Marca Hyundai se produce in Coreea de Sud."

                                        // Example B
                                        

function car(brand){
  switch(brand){
    case "Audi":
      var country = "Germania";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;    
    case "Toyota":
      var country = "Japonia";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    case "Hyundai":
      var country = "Coreea de Sud";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    case "Ford":
      var country = "S.U.A.";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    case "Fiat":
      var country = "Italia";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    case "Bugatti":
      var country = "Franta";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    case "Rolls-Royce":
      var country = "Anglia";
      return "Marca "+ brand + " se produce in " + country + ".";
      break;
    default:
      return "Marca " + brand + " este necunoscuta.";
    
  }
  
}

console.log(car("Rolls-Royce"));

// return>>>>>> "Marca Rolls-Royce se produce in Anglia."

                                        // Example C
                                        

function Findcar(brand) { 
    var car = {
        "Audi": "Germania",
        "Toyota": "Japonia",
        "Hyundai": "Coreea de Sud",
        "Rolls-Royce": "Anglia",
        "Fiat": "Italia",
        "Bugatti":"Franta",
        "Ford":"S.U.A."  
    };
    if(car[brand]){     
        return "Marca " + brand + " se produce in " + car[brand] + ".";      
    }else{    
        return  "Marca " + brand + " este necunoscuta.";
    }
    
    }
    
    console.log(Findcar("Audi"));
    

//return >>>> "Marca Dacia este necunoscuta."


// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   {name: "Danny", salary: 30500 },
//   {name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat


    (function (){
        var cars = [
         {name: "John",  salary: 20000 },
         {name: "Danny", salary: 30500 },
         {name: "Bekker", salary: 15000}
       ];
         var sort = cars.sort(function(a, b) {     
           return a.salary - b.salary;
       });
         
         console.log(cars);
         })();

//return >>>> 
// [{…}, {…}, {…}]
// 0: {name: "Bekker", salary: 15000}
// 1: {name: "John", salary: 20000}
// 2: {name: "Danny", salary: 30500}
// length: 3
// __proto__: Array(0)

