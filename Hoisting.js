
////// EXAMPLE 1 /////

console.log(myVar); // Output: undefined
var myVar = 42;
console.log(myVar); // Output: 42




/////////////////////////////////


////// EXAMPLE 2 /////


sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}



//////////////////////////

////// EXAMPLE 3 /////



///// error because of let keyword
console.log(myVar); // Output: ReferenceError: myVar is not defined
let myVar = 42;
