//Initialize i to 0.
//Make a condition that compares the value of i to be less than or equal to 20
//Increment i with 1
//if the rest of i is 0 or i is 0 after dividing it by 2 prin i value is even
//else print i is odd

function EvAndOdd() {
  for (i = 0; i <= 20; i++) {
    if (i === 0 || i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

EvAndOdd();

function EvenAndOdd() {
  i = 0;
  while (i <= 20) {
    if (i === 0 || i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
    i++;
  }
}

EvenAndOdd();

//Initialize i to 0;
//Make a condition that iterates through each number until it reaches 10(including 10) by incrementing with 1.
//For each iteration multiply the value with 9 and print the result.

function Multiply() {
  for (i = 0; i <= 10; i++) 
  console.log(9 * i);
}

Multiply();

function Multipl() {
  i = 0;
  while (i <= 10) {
    console.log(i * 9);
    i++;
  }
}

Multipl();

//Initialize i to 0;
//Make a condition theta iterates through each number until it reaches 10(including 10) by incrementing with 1.
//For each interation multiply the value with 1 and print the whole operation.

function Multip() {
   
    for (i = 0; i <= 10; i++){
    var res = i * 9;
    console.log("1 * " + i + " = " + res);
  }
}
  Multip();

//initialize i to 0
//Make a condition that iterates through each number until it reaches 10(including 10) by incrementing with 1.
//if i>= and <=3, initialize grade to E and print Calificatul corespunzator punctajului 1 and 2 este E.
//if i>=3 and <=6, initialize grade to E and print Calificatul corespunzator punctajului 3,4,5 and 6 este D.
//if i>=7 and <=8, Calificatul corespunzator punctajului 7 and 8 este B.
//if i= 9, initialize grade to E and print Calificatul corespunzator punctajului 9 este A.
//if i=10, initialize grade to E and print Calificatul corespunzator punctajului 10 este A+.

function exam(){
    for(i=1; i<=10; i++){
        if(i>=1 && i<3){
        var grade = "E";
        console.log("Calificatul corespunzator punctajului " + i +  " este " + grade + ".");
      }else if(i>=3 && i<=6){
        var grade = "D";
        console.log("Calificatul corespunzator punctajului " + i +  " este " + grade + ".");
      }else if(i>=7 && i<=8){
        var grade = "B";
        console.log("Calificatul corespunzator punctajului " + i +  " este " + grade + ".");
      }else if(i === 9){
        var grade = "A";
        console.log("Calificatul corespunzator punctajului " + i +  " este " + grade + ".");
      }else if(i === 10){
        var grade = "A+";
        console.log("Calificatul corespunzator punctajului " + i +  " este " + grade + "."); 
     }
  }
    }

exam()