// /////  Mutator Methods  ///////

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from the end of an array.
// unshift(): Adds one or more elements to the beginning of an array.
// shift(): Removes the first element from the beginning of an array.
// splice(): Adds or removes elements from a specified index.

// 2. Accessor Methods:

// concat(): Combines two or more arrays.
// slice(): Returns a copy of a portion of an array.
// join(): Joins all elements of an array into a string.

// 3. Iteration Methods:

// forEach(): Calls a function for each element in the array.
// map(): Creates a new array by applying a function to each element.
// filter(): Creates a new array with elements that pass a test.
// reduce(): Applies a function against an accumulator and each element in the array.
// reduceRight(): Similar to reduce(), but processes the array from right to left.

// 4. Searching and Finding Methods:

// indexOf(): Returns the first index at which a specified element is found.
// lastIndexOf(): Returns the last index at which a specified element is found.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.

// 5. Sorting Methods:

// sort(): Sorts the elements of an array in place.
// reverse(): Reverses the order of elements in an array.

// 6. Check and Test Methods:

// includes(): Checks if an array includes a specific element.
// every(): Checks if all elements in an array pass a test.
// some(): Checks if at least one element in an array passes a test.
// isArray(): Checks if a value is an array.

// 7. Copy and Fill Methods:

// copyWithin(): Copies elements within the array to another position.
// fill(): Fills all elements in an array with a static value.
// from(): Creates a new array from an array-like or iterable object.

// 8. Conversion Methods:

// toString(): Converts an array to a string.
// toLocaleString(): Converts an array to a localized string representation.
// valueOf(): Returns the primitive value of an array.




//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////


/////////// splice //////////////

const fruits = ["apple", "banana", "cherry"];
fruits.splice(2,0, "orange","Grape"); // Replaces "banana" with "orange"
// fruits is now ["apple", "orange", "cherry"]
console.log(fruits)


/////////// slice //////////////////

const fruitss = ["apple", "banana", "cherry"];
const a=fruitss.slice(1,3)
console.log(a);
console.log(fruitss);



///////////// length ///////////////

let b=[10,15,20,12,15,22,5]
console.log(b.length);



let c=["jas","shcj","dshkjn","bhdbch"]
console.log(c.length);


let d='jasir'
console.log(d.length);



////////////// Push - Pop ////////////////


const numbers = [1, 2, 3];

numbers.push(4); // Adds 4 to the end
console.log(numbers); // Outputs: [1, 2, 3, 4]

numbers.pop(); // Removes the last element (4)
console.log(numbers); // Outputs: [1, 2, 3]


    

//////// Unshift - Shift ////////////////


const fruitsss = ['apple', 'banana'];

fruits.unshift('pear'); // Adds 'pear' to the beginning
console.log(fruitsss); // Outputs: ['pear', 'apple', 'banana']

fruits.shift(); // Removes the first element ('pear')
console.log(fruitsss); // Outputs: ['apple', 'banana']


/////// concat ///////////////

const array1 = [1, 2];
const array2 = [3, 4];

const combinedArray = array1.concat(array2);
console.log(combinedArray); // Outputs: [1, 2, 3, 4]





//////// sort ///////////////

const fruit = ['banana', 'apple', 'cherry'];
fruit.sort(); // Sorts the array alphabetically
console.log(fruit);


//////////// find and findindex /////////////////


const students = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }, 
    { name: 'Charlie', age: 28 }
  ];
  const alice = students.find(student => student.name === 'Alice');
  const bobIndex = students.findIndex(student => student.name === 'Charlie');
  
  console.log(alice);
  console.log(bobIndex);
  
  



/////////  reverse /////////////////


const colors = ['red', 'green', 'blue'];
let f= colors.reverse(); // Reverses the array order
console.log(f);



///////////  includes ////////////

const numberss = [1, 2, 3, 4, 5];
const hashTree = numberss.includes(3); // Returns true
console.log(hashTree);




///////// indexof and lastindexof /////////////

const array = [1, 2, 3, 2, 4, 2, 5];

const firstIndex = array.indexOf(2);       // Returns 1
const lastIndex = array.lastIndexOf(2);   // Returns 5
console.log(firstIndex);
console.log(lastIndex);





let m=[1,2,3,4,5,6,7,8,9]
let  l= [1, 2, 3, 2, 4, 2, 5];
// let c=a.toSltring('')





let aa =
   {
    name:"jasi",
    age:20
   }

const bb =Object.entries(aa)

for(const cc of bb){
    console.log("key",cc);
}