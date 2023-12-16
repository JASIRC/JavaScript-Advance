///// MAP ///////


///// Example 1 /////

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


///// Example 2 /////


let a=[1,2,3,5,6,5,6]

let b=a.map((sum)=> sum*3)
console.log(b); 


///// Example 3 /////


let c=[15,25,35,45,15,15,5,15,25,85]
let d=c.map((devide)=> devide/5)
d.forEach((aa)=>{
    console.log(aa);
})


///////////////////////////////////////////




///// Reduce //////


///// Example 1 /////

 const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 15


///// Example 2 /////



const num =[1,2,3,4,5]
const a = num.reduce((aa,bb)=>{
    return aa*bb
})
console.log(a);

///// Example 3  /////

const a =[12,165,31,31,61,48,51,210]
const b=a.reduce((max,current)=>{
    return current >max? current:max
})       
console.log(b);


///// Example 4  /////


const a=[1,8,2,3,4,5]
const b=a.reduce((aa,bb)=>{
    return aa>bb? aa:bb
})
console.log(b);





/////////////////////////////////////////////////




////// Foreach //////


///// Example 1 /////

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});


///// Example 2 /////


const a=[1,2,3,4,5,6]
a.forEach((aa)=>{
    console.log(aa);
})


///// Example 3 /////

const cc=[15,12,54,25,44,55]
cc.forEach((dd)=>{
    console.log(dd);
})

/////////////////////////////////////////////////



////// Filter //////

///// Example 1 /////

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]


///// Example 2 /////

const a= [10,11,12,13,14,15,15]
const even = a.filter((num)=>num%2 ===0)
console.log(even);

///// Example 3 /////

const b=[12,14,15,21,51,51,51,51,55]
const bb=b.filter((num)=> num >50 )
console.log(bb);