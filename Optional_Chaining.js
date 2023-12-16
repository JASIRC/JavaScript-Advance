
////// EXAMPLE 1 /////

const person = {
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Exampleville",
      postalCode: "56789",
    },
  };

  const city =person?.address?.city
  console.log(city);

  const name= person?.name
  console.log(name);

  
////// EXAMPLE 2 /////

  const students = [
    { name: "Alice", courses: ["Math", "History"] },
    { name: "Bob" },
    { name: "Charlie", courses: ["Biology", "Chemistry"] },
    // ...
  ];
  students.forEach((student, index) => {
    const studentName = student?.name;
    const studentCourses = student.courses?.join(' , ') || 'No courses';
    console.log("Student",index + 1, ":" ,studentName,"- Courses:" ,studentCourses);
  });



  ////// EXAMPLE 3 /////

  const a=
  [{
    name:"jasir",
    age:26,
    
    address:{
        place:"valanchery",
        district : "malappuram"
    }
  }
]

  console.log(a?.address?.place);

  a.forEach((c,index)=>{
    const e = c.name
    const age = c.age
    const address = c.address
    console.log(index + 1,"- name:",e,", age:",age,", address:",address);
  })



  ////// EXAMPLE 4 /////

  const m={
    name:"jasir",
    age:26,
    
    address:{
        place:"valanchery",
        district : "malappuram"
    }
}


const f=m?.address?.place
console.log(f);