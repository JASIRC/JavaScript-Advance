
////// EXAMPLE 1 /////

// Spreading elements from an array
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers); // Outputs: [1, 2, 3]

// Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Outputs: [1, 2, 3, 4]



///////////////////////////////////////

////// EXAMPLE 2 /////


const person = { name: "Alice", age: 30 };
const address = { city: "Exampleville", state: "Examplestate" };

const mergedObject = { ...person, ...address };

console.log(mergedObject);
// Outputs: { name: "Alice", age: 30, city: "Exampleville", state: "Examplestate" }



/////////////////////


////// EXAMPLE 3 /////

// Using the rest operator in function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // Outputs: 6
  console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15
  
////////////////////////


////// EXAMPLE 3 /////

  // Using the rest operator in an array
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(rest); // Outputs: [3, 4, 5]


//////////////////////////

////// EXAMPLE 3 /////

const a = [10, 20, 30, 40, 50, 60, 70];
const [, , , ,...rest] = a;

console.log(rest);
