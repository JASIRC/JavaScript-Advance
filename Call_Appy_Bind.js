/////////////////////// call //////////////////

function greet(name) {
    console.log("Hello",name, "I am" ,this.role);
  }
  const person = { role: "student" };
  greet.call(person, "Alice");





  /////////////////// apply //////////////////////


  function greet(name, location) {
    console.log(`Hello, ${name}! I am ${this.role} in ${location}.`);
  }
  
  const person = { role: "teacher" };
  
  greet.apply(person, ["Bob", "New York"]);
  // Output: Hello, Bob! I am teacher in New York.
  


//   ///////////////// bind /////////////////////


  function greet(name, location) {
    console.log(`Hello, ${name}! I am ${this.role} in ${location}.`);
  }
  
  const person = { role: "doctor" };
  
  const greetDoctor = greet.bind(person, "Carol");
  greetDoctor("San Francisco");
//   // Output: Hello, Carol! I am doctor in San Francisco.
  


///// Example 1 //////

function greet(greeting, punctuation) {
    console.log(greeting,",",this.name);
  }
  
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };
  
  // Using call()
  greet.call(person1, "Hi", "!"); // Output: Hi, Alice!
  greet.call(person2, "Hello", "?"); // Output: Hello, Bob?
  
  // Using apply()
  greet.apply(person1, ["Hey", "."]); // Output: Hey, Alice.
  greet.apply(person2, ["Howdy", "!"]); // Output: Howdy, Bob!
  
  // Using bind()
  const greetAlice = greet.bind(person1, "Hola");
  const greetBob = greet.bind(person2, "Bonjour");
  
  greetAlice("."); // Output: Hola, Alice.
  greetBob("!"); // Output: Bonjour, Bob!
  


  ///// Example 2 //////


function a(name){
    console.log("hello",name);
}
a.call(null,"Alice")




///// Example 3 //////

function a(message){
    console.log(message,this.name);
}
const aa={name:"jasi"}
const bb={name:'jasir'}
a.call(aa,"hello")
a.call(bb,"hai")




///// Example 4 //////

function a(message){
    console.log(message.this.name);
}

const aa=[{name:"jasi"}]
const bb=[{name:"jasir"}]\

a.apply(aa["hello"])




///// Example 5 //////

function calculateSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  // Using apply() to calculate the sum of an array of numbers
  const sum = calculateSum.apply(null, numbers);
  console.log("Sum of numbers:", sum);
  


  ///// Example 6 //////


 function a(message){
    console.log(message,this.name);
 }
 const aa= {name:"jasi"}
 a.apply(aa,["hai"])



 ///// Example 7 //////

function a(message){
    console.log(message,this.name);
}
const aa={name:"jasi"}
const bb= a.bind(aa)
bb("jasir")




///// Example 8 //////

 function a(message){
    console.log(message,this.name);
 }
 const aa= {name:"jasi"}
 const bb = a.bind(aa)
 bb("jasir")



