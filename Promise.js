
////// EXAMPLE 1 /////


const myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let number = Math.random()
        if(number<0.2){
            resolve(number)
        }else{
            reject("wrong")
        }
    }, 3000);
})
myPromise
.then((result)=>{
    console.log("Number is:",result);
})
.catch((error)=>{
console.error("it's",error);
})




/////  -----------------------------------------------------------------  ///////


////// EXAMPLE 2 /////


const promise = new Promise ((resolve,reject)=>{
    setInterval(() => {
        for(let i =0;i<100;i++){
        const randomNumber=Math.random()
        if(randomNumber<0.2){
            resolve(randomNumber)
        }else{
            reject("Wrong")
        }
    

    }, 1000);
}
})
promise
.then((result)=>{
    console.log("Result is:",result);
})
.catch((error)=>{
    console.error("It's",error);
})



////// EXAMPLE 3 /////
    
for(let j=0;j<100;j++){
    setTimeout(() => {
    
const promise = new Promise((resolve,reject)=>{

    setTimeout(() => {
            const a =Math.random()
            if(a<0.2){
                resolve(a)
            }else{
                reject("Wrong")
            }
    }, 2000);

})


promise
.then((result)=>{
    console.log("Result is:",result);
})
.catch((error)=>{
    console.error("It's",error);
})
}, 3000);
}



////// EXAMPLE 4 /////


const myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const random = Math.random()
        if(random>0.3){
            resolve(random)
        }else{
            reject("wrong")
        }

    }, 2000);
})
myPromise
.then((result)=>{
    console.log("Random Number is:",result);
})
.catch((error)=>{
    console.error("It's",error);
})
























