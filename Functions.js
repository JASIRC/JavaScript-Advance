////// Normal Function //////

function add(a, b) {
    return a + b;
  }
  const sum = add(3, 4); // sum will be 7
console.log(sum);
  
 
/////////  Function Expression ///////

const multiply = function (a, b) {
    return a * b;
  };
  const product = multiply(5, 6); // product will be 30
console.log(product);  



///////// Array function ////////

const divide = (a, b) => a / b;
const result = divide(10, 2); // result will be 5


////// IIFE //////////

(function () {
    console.log("I am an IIFE!");
  })();


  /////// Generator Function ////////


  function* countToThree() {
    yield 1;
    yield 2;
    yield 3;
  }
  const generator = countToThree();
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3


    ///// Recrusive Function ///////

    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
      }
      factorial()
    
    
    
      //////  Higher Order Function ///////
    
    
      function multiplyBy(factor) {
        return function(x) {
          return x * factor;
        };
      }
      const double = multiplyBy(2);
      console.log(double);
    
    
      
      ///// Anonymous Function //////
    
      const numbers = [1, 2, 3];
    
      numbers.forEach(function(num) {
      console.log(num);
      });