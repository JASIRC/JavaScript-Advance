
////// EXAMPLE 1 /////


const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  // Outputs: 1
console.log(second); // Outputs: 2
console.log(third);  // Outputs: 3



/////// EXAMPLE 2 /////

const numbers1 = [1, 2, 3, 4, 5];
const [, , third1] = numbers1;
console.log(third1); // Outputs: 3




////// EXAMPLE 3 /////


const numbers2 = [1, 2, 3, 4, 5];
const [first1, ...rest] = numbers2;
console.log(first1); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]


