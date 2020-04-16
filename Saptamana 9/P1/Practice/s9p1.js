// 1a

const func1 = () => {
  setTimeout(() => console.log("1"), 4000);
};

const func2 = () => {
  setTimeout(() => console.log("2"), 3000);
};

const func3 = () => {
  setTimeout(() => console.log("3"), 1000);
};

const func4 = () => {
  setTimeout(() => console.log("4"), 5000);
};

const func5 = () => {
  setTimeout(() => console.log("5"), 2000);
};

func1();
func2();
func3();
func4();
func5();

//1b

function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
  return value + 1;
};

const double = (value) => {
  return value * 2;
};

const square = (value) => {
  return value * value;
};
console.log(customMap(randomArray, increment)); // Implement the function named print so that thos console.log
// would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(customMap(randomArray, double)); // Implement the function named double so that thos console.log
//would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(customMap(randomArray, square)); // Implement the function named square so that thos console.log
//would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
//var filter = function(____, ____) {
//var filteredArray = [];
// for (var ____ = ____; ____ < ____.____; ____++) {
// var ____ = ____[____];
//  if (____(____)) {
//    filteredArray.push(____);
//  }
// }
// return filteredArray;
//};
//Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    var result = array[i];
    if (callback(array[i])) {
      filteredArray.push(result);
    }
  }
  return filteredArray;
};

let anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = (value) => {
  return value % 2 === 1;
};

let even = (value) => {
  return value % 2 === 0;
};

let ifThree = (value) => {
  return value % 3 === 0;
};

let ifFive = (value) => {
  return value % 5 === 0;
};

let moreThan = (value) => {
  return value > 5;
};

console.log(filter(anArray, odd));
console.log(filter(anArray, even));
console.log(filter(anArray, ifThree));
console.log(filter(anArray, ifFive));
console.log(filter(anArray, moreThan));

// 3

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

// let multipleCallbacks = (obj, callback1, callback2) => {
//   for (let value of Object.values(obj)) {
//     if (value === "success") {
//       return callback1(obj);
//     } else if (value === "error") {
//       return callback2(obj);
//     }
//     return Object.keys(obj) + " wasn't graded yet!";
//   }
// };

// let student1 = { Miranda: "success" };
// let student2 = { Jack: "error" };
// let student3 = {Joe: ""}

// let printSuccess = (name) => {
//   return Object.keys(name) + " has passed!";
// };

// let printError = (name) => {
//   return Object.keys(name) + " has failed!";
// };

// console.log(multipleCallbacks(student1, printSuccess, printError));
// console.log(multipleCallbacks(student2, printSuccess, printError));
// console.log(multipleCallbacks(student3, printSuccess, printError));

//scnd

let theObject = { status: ["success", "error"] };

let success = () => {
  return "The status is : success";
};

let error = () => {
  return "The status is : error";
};

const multipleCallbacks = (obj, callback1, callback2) => {
  if (obj.status[0] === "success") {
    return callback1();
  } else {
    return callback2();
  }
};

console.log(multipleCallbacks(theObject, success, error));
