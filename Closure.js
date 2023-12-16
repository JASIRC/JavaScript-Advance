///// Example 1 //////

function outerFunction(){
    let a=10
    function innerFunction(){
        let b=20
        const c=(a,b)=>{
            return a+b
        // console.log((c(a,b)));
        }
        return c(a,b)
    }
    const result =innerFunction()
    console.log(result);
}
outerFunction()




////////////////////////////////



///// Example 2 //////


function a(){
    let x=10
    function b(){
        let y=20
        function c(){
        let z=30
            d()
            function d(){
                console.log(x+y+z);
             }
        }
        c()
    
    }
            
    b()
}
a()


////////////////////////////////////////


///// Example 3 //////

function createCounter() {
    let count = 0;
    
    return {
    increment : () => {
        count++;
        console.log(count);
      },
      decrement: () => {
        count--;
        console.log(count);
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // Output: 1
  counter.increment(); // Output: 2
  counter.decrement(); // Output: 1
  



//////////////////////////////



///// Example 4  //////

function a(){
    let x=10
    function b(){
        let y=20
        function c(){
            let z=40
            const d=(x,y,z)=>x+y+z
            console.log(d(x,y,z))
        }
        c()
    }
    b()
}
a()





///// Example 5 //////

function outerFunction() {
    let outerVariable = 10;
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction; 
}
  
  const closureExample = outerFunction(); 
  
  closureExample(); 




  ///// Example 6 //////

function a(){
    let aa=10
    function b(){
        console.log(aa);
    }
    return b
}
const c=a()

c()



 a()

 function a(){
    let a=20
    console.log(a);
 }



