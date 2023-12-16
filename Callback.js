///// Example 1 //////

function a(x,y,callback){
sum=x+y
callback()
}
a(10,25,function b(){
    console.log(sum)
})



///// Example 2 //////

let sum
function a(x,y,callback){
    sum =x+y
    console.log("Result is:")
    callback()
}a(15,25,function b(){
    setTimeout(() => {
        console.log(sum)
    }, 2000);
    
})



///// Example 3 //////

const numbers = [1, 2, 3, 4, 5];

function processArray(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

function squareNumber(num) {
  console.log(num * num);
}

processArray(numbers, squareNumber);



///// Example 4 //////


function greet(name, callback) {
    console.log('Hello',name);
    callback();
  }
  
  function farewell() {
    console.log("Goodbye!");
  }
  
  greet("Alice", farewell);                







  