////// EXAMPLE 1 /////

const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Outputs: "Alice"
console.log(age);  // Outputs: 30


///////////////////////////////////

////// EXAMPLE 2 /////



const person2 = { name: "Alice", age: 30 };
const { name: personName, age: personAge, age:personsAge } = person2;
console.log(personName); // Outputs: "Alice"
console.log(personAge);  // Outputs: 30
console.log(person2.name);
console.log(personsAge);


// // ////////////////////////////

// ////// EXAMPLE 3 /////


const person3 = { name1: "Alice" };
const { name1, age1 = 25 } = person3;
console.log(name1); // Outputs: "Alice"
console.log(age1);  // Outputs: 25 (default value)