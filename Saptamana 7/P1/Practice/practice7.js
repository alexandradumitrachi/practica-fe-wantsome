//1a

var numbers = function(count) {
  for (i = 0; i < count; i++) {
    console.log("Suntem la iteratia numarul " + i);
  }
};
numbers(3);

//1b

var numbers2 = function(count) {
  var i = 0;
  while (i < count) {
    console.log("Suntem la iteratia numarul " + i);
    i++;
  }
};

numbers2(5);


//2a
var animals = ["cat", "dog", "camel", "tiger", "leo"];

function myAnimals(animals) {
  for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}

myAnimals(animals);

//2b

animals2 = ["unicorn", "cow", "horse"];

function myAnimal(animals2) {
  var i = 0;
  while (i < animals2.length) {
    console.log(animals2[i]);
    i++;
  }
}

myAnimal(animals2);

//3

var gigi = {
  firstName: "Gigel",
  secondName: "Frone"
};

function thisUser(user) {
  for (var key in user) {
    console.log(user[key]);
  }
}

thisUser(gigi);

// 4a

for (i=0; i<= 1000; i+=100){
  
  console.log(i)
}

for (i=1; i <= 128; i*=2){

  console.log(i)
}

for(i=0; i<=10; i+=2){

  console.log(i)
}

for(i=3; i<=15; i+=3){

  console.log(i)
}

for(i=9; i>=0; i--){

  console.log(i)
}


  for(i=1; i<=4; i++){
  for(index=1; index<=3; index++){
    console.log(i)
  }

}

for(i=0; i<3; i++){
  for(index=0; index<=4; index++){
    console.log(index)
  }
}



//5a
conditionalFn = function() { return false; };
actionFn = function() { console.log("Vreau sa ies la tabla!"); };

function stream(conditionalFn, actionFn){
    while(conditionalFn()){
      actionFn();
    }
}
stream(conditionalFn, actionFn);


//5b

counter=10;
conditionalFn=function(){
  counter--;
  return counter>=0;
};

actionFn=function(){ console.log('Vreau sa ies la tabla')}


function stream(conditionalFn, actionFn){
    while(conditionalFn()){
       actionFn();
    }

}

stream(conditionalFn, actionFn);

function computeSumOfArrayElements(arr){
  var x =0;
  var sum =0;
  while(x<arr.length){
    sum+=arr[x];
    x++;
  }
  return sum;
}

console.log (computeSumOfArrayElements([]));
console.log (computeSumOfArrayElements([1,2,3,4]));