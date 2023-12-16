// String Manipulation:

// concat(): Combines two or more strings and returns a new string.
// charAt(): Returns the character at the specified index in the string.
// charCodeAt(): Returns the Unicode value of the character at the specified index.
// slice(): Extracts a section of a string and returns it as a new string.
// substring(): Returns a subset of the string between two indices.
// substr(): Returns a substring beginning at a specified index and extending for a specified number of characters.
// replace(): Searches a string for a specified value or regular expression and replaces it with a new string.
// toLowerCase(): Converts the string to lowercase.
// toUpperCase(): Converts the string to uppercase.
// trim(): Removes whitespace from the beginning and end of a string.
// trimStart() / trimLeft(): Removes whitespace from the beginning of a string.
// trimEnd() / trimRight(): Removes whitespace from the end of a string.
// padStart(): Pads the string with a specified character to a certain length from the start.
// padEnd(): Pads the string with a specified character to a certain length from the end.
// Searching and Extracting:
// 15. indexOf(): Returns the first index at which a specified substring is found.

// lastIndexOf(): Returns the last index at which a specified substring is found.
// startsWith(): Checks if a string starts with a specified substring.
// endsWith(): Checks if a string ends with a specified substring.
// includes(): Checks if a string contains a specified substring.
// search(): Searches a string for a specified value or regular expression and returns the position of the match.
// match(): Retrieves the result of matching a string against a regular expression.
// String Conversion and Splitting:
// 22. toString(): Converts a string to a string representation.

// valueOf(): Returns the primitive value of a string.
// split(): Splits a string into an array of substrings based on a specified delimiter.
// String Length and Character Count:
// 25. length: Property that returns the length of the string.

// charCount(): A custom method that can be used to count the number of occurrences of a specific character in a string.
// Encoding and Decoding:
// 27. encodeURI(): Encodes a URI by replacing each character with a valid ASCII representation.

// encodeURIComponent(): Encodes a URI component, including characters that are special within a URI.
// decodeURI(): Decodes a URI encoded with encodeURI.
// decodeURIComponent(): Decodes a URI component encoded with 





///////////////////////////////////////////////////
///////////////////////////////////////////////////



///////////// length ////////////////////

const text = "Hello, world!";
const length = text.length;
console.log(length); // Output: 13



// ///////////// concat ////////////


const str1 = "Hello, ";
const str2 = "world!";
const result = str1.concat(str2);
console.log(result); // Output: "Hello, world!"



// /////////////// substring //////////////



const text = "Hello, world!";
const sub = text.substring(0, 5);
console.log(sub); // Output: "Hello"



// /////////// toUpperCase & toLowerCase //////////////


const text = "Hello, World!";
const uppercase = text.toUpperCase();
const lowercase = text.toLowerCase();
console.log(uppercase); // Output: "HELLO, WORLD!"
console.log(lowercase); // Output: "hello, world!"


// /////////// indexof ////////////////////



const text = "Hello, world!";
const index = text.indexOf("world");
console.log(index); // Output: 7



// /////////// replace ////////////////


const text = "Hello, world!";
const newText = text.replace("world", "there");
console.log(newText); // Output: "Hello, there!"



////////////// split /////////////////


const text = "apple banana cherry";
const fruits = text.split(2,4);
console.log(fruits); // Output: ["apple", "banana", "cherry"]


////////////// charAt ////////////


const text = "Hello, world!";

// // Access characters at specific indices using charAt()
const firstCharacter = text.charAt(0); // Character at index 0 (H)
const fifthCharacter = text.charAt(5); // Character at index 5 (,)
const ninthCharacter = text.charAt(9); // Character at index 9 (r)

console.log("First Character:", firstCharacter);
console.log("Fifth Character:", fifthCharacter);
console.log("Ninth Character:", ninthCharacter);



////////////////  valueOf ///////////////////


const myObject = {
    value: 42,
    toString: function() {
      return `The value is ${this.value}`;
    },
    valueOf: function() {
      return this.value;
    }
  };
  
  console.log(myObject);          // Calls toString method
  console.log(myObject + 10);     // Calls valueOf method and adds 10
  console.log(String(myObject));  // Calls toString method explicitly
  console.log(Number(myObject));  // Calls valueOf method explicitly
  

