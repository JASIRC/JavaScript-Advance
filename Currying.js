
///// Example 1 //////


//A function that adds two numbers
function add(a, b,) {
    return a + b;
  }
  
  // Currying the 'add' function
  function curryAdd(a) {
    return function (b) {

            return  a + b
    
  }
}
  // Using the curried function
  const add5 = curryAdd(5);
  console.log(add5(3)); // Output: 8
  




  ////////////////////////////////

  

    ///// Example 2 //////


  function curry(x) {
    return function (y) {
      return function (z) {
        return x+y+z;
      };
    }
  }
  
  // Using the curried function
  const add = curry(5);
  console.log(add(3)(8)); // Output: 16
  