// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car ={
    name: 'Tesla',
    wheels: 4,
  };
  console.log(car);
  
  car.name = 'Mercedes';
  
  console.log(car);
  
  delete car.name;
  
  console.log(car);
  
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  
  var house ={
    gardens: 'One',
    doors: 'Two',
    rooms: 'six',
    floors: 'Two',
  };
  
  console.log(house);
  
  var houseKeys = Object.keys(house);
  
  console.log(houseKeys);
  
  var houseUp1 = houseKeys[0].toUpperCase();
  var houseUp2 = houseKeys[1].toUpperCase();
  var houseUp3 = houseKeys[2].toUpperCase();
  var houseUp4 = houseKeys[3].toUpperCase();
  
  var houseUp = [];
  
  houseUp.push(houseUp1 , houseUp2 , houseUp3 , houseUp4);
  
  console.log(houseUp);
  
  var houseValue = Object.values(house);
  
  console.log(houseValue);
  
  var houseLo1 = houseValue[0].toLowerCase();
  var houseLo2 = houseValue[1].toLowerCase();
  var houseLo3 = houseValue[2].toLowerCase();
  var houseLo4 = houseValue[3].toLowerCase();
  
  var houseLo = houseLo1 + " " + houseLo2 + " " + houseLo3 + " " + houseLo4
  
  console.log(houseLo);
  
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  
  var user = {
    
    name: "Petronel",
    age: 29,
    phrase: function(){
      return "My name is " + this.name + " and I am " + this.age + " years old.";
    }
  };
  
  console.log(user.phrase());
    

  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  };
  
  var myApartament = {
    floor: 3,
    address: "Podu Ros",
    rooms: 2,
    cats: 1,
    
  }
  
  var newApartament = Object.assign({} , myApartament);
  
  console.log(newApartament);
  
  newApartament.windows = 9;
  newApartament.doors = 1;
  
  console.log(newApartament);
  
  var Homes = Object.assign({}, myHouse , newApartament);
  
  console.log(Homes);
  
  //!!!Stiu ca am pus aceeasi propietate "rooms" voiam sa vad ce se intampla, daca le o dubleaza gen sau daca o subscrie
  





  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  var City = {
    
    Streets: 780,
    Buildings: 600,
    Parks: {
          
          benches: 3,
          trees: 30,
          
      },
  };
  
  console.log(City);
  
  var CityKeys = Object.keys(City);
  var ParksKeys = Object.keys(City.Parks);
  
  console.log(ParksKeys);
  
  
  var Park1 = ParksKeys[0];
  var Park2 = ParksKeys[1];
  var Park3 = CityKeys[2];
  
  console.log(Park1);
  console.log(Park2);
  console.log(Park3);
  
  var final = "The proprieties " + Park1 + " and " + Park2 + " belong to the object " + Park3;
  
  console.log(final)
  
  
  
  
  //Ex6
// Avem obiectul : 
myObject = {
    name: "John",
    surname: "Applegate",
    }
    //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
    
    var sor = Object.values(myObject);
    
    console.log(sor);
    
    sor.sort();
    
    console.log(sor);
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
  
  function Car (model, color, year){
    this.model=model.toUpperCase
    
  }
    
  function School (staff, students, teachers) {
    
    this.staff=staff.toUpperCase();
    this.students=students.toUpperCase();
    this.teachers=teachers.toUpperCase();
  }
  
  var mySchool = new School('Twenty', 'HundredandEighty', 'Thirty');
  
  console.log(mySchool);