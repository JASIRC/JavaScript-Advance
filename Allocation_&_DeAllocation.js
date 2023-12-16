///// EXAMPLE 1 /////

function createObject() {
    const obj = { message: "This is an object" };
    console.log("Object created:", obj);
    return obj;
  }

  function doSomething() {
    const objA = createObject();
    console.log("Inside doSomething:", objA);
    console.log("After doSomething:", objA); // This will be 'undefined'
  }
  doSomething();

///////////////////////////



////// EXAMPLE 2 /////

/// Allocation ///
let a = "jasir"
console.log(a);

/// DeAllocation ///
a=null
console.log(a);  


