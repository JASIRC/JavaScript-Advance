/////  Arithmetic Operators  /////

let a = 10;
let b = 5;

console.log(a + b);    // Addition
console.log(a * b);    // Multiplication
console.log(a - b);    // Subtraction
console.log(a / b);    // Division
console.log(a % b);    // Reminder (Modulus)
console.log(a++,b++);  // Increment
console.log(a--,b--);  // Decrement
console.log(--a,--b);  // Pre Decrement
console.log(++a,++b);  // Pre Increment


/////  Assignment Operators  /////

console.log(a=20);    // Assignment
console.log(a+=10);   // Addition Assignment
console.log(a-=10);   // Subtraction Assignment
console.log(a*=10);   // Multiplication Assignment
console.log(a/=10);   // Division Assignment
console.log(a%=10);   // Modulus Assignment

a=20
/////  Comparison Operators  /////

console.log(a==b);    // Equal to
console.log(a===b);   // Strict Equality
console.log(a!=b);    // Not Equal
console.log(a!==b);   // Strict not Equal
console.log(a>b);     // Greater than
console.log(a<b);     // Less than
console.log(a>=b);    // Greater than Equal
console.log(a<=b);    // Less than Equal


/////   Logical Operators  /////

console.log(a&&b!=0);     // Logical And
console.log(a||b==0);     // Logical Or
console.log(a!=b);        // Logical Not


/////  Unary Operators  /////


console.log(+a);      // Unary Plus
console.log(-b);      // Unary Minus
console.log(!a);      // Logical Not


/////  Bitwise Operators  /////

console.log(a&b);     // Bitwise And
console.log(a|b);     // Bitwise Or
console.log(a^b);     // Bitwise XOr
// console.log(a~b);  // Bitwise Not
console.log(a<<b);    // Bitwise Left Shift
console.log(a>>b);    // Bitwise Right Shift
console.log(a>>>b);   //Zero-Fill Right Shift