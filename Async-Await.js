// A simple function that returns a Promise that resolves after a delay.

////// EXAMPLE 1 /////

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncExample() {
    console.log("Start");
  
    // Using await to wait for the Promise to resolve.
    await delay(2000); // Wait for 1 second
  
    console.log("End after waiting for 1 second.");
  }
  
  asyncExample();
  


  ////// EXAMPLE 2 /////


  function a(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
  }

  async function asyncExample(){
    console.log("start");
    await delay(3000)
    console.log("end");
  }
  asyncExample()


////// EXAMPLE 3 /////



function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Sample data from API" });
      }, 2000); // Simulating a 2-second delay
    });
  }

  async function fetchAndProcessData() {
    console.log("Fetching data...");
    try {
      const response = await fetchData();
      console.log("Data received:", response.data);
      console.log("Processing data...");
  
      console.log("Data processed.");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchAndProcessData();



  ////// EXAMPLE 4 /////

function a(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({data:"sample data from api"})
        }, 2000);
    })
}
 async function b(){
    console.log("fetching data...");
try{
    const response = await a()
    console.log("data recieved:",response.data);
    console.log("processing data...");
    console.log("processed....");
} catch(error){
    console.error("error:",error);
}
}
b()



////// EXAMPLE 5 /////




  function a(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({data:"completed"})
        }, 2000);
    })
  }
  async function b(){
    try{
        const jasi=await a()
        console.log("it's",jasi.data);
    }
    catch(error){
        console.error("error",error);
    }
  }
  b()



  ////// EXAMPLE 6 /////



function a(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve({data:"completed"})
        }, 3000);
    })
}
async function b(){
    try{
        const c= await a()
        console.log("It's",c.data);
    }catch(error){
        console.error("error",error);
    }
}
b()




////// EXAMPLE 7 /////


function a(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({data:'completed'})
        }, 2000);
    })
}
async function b(){
    try{
    const c = await a()
        console.log("It's",c.data);

    }catch(error){
        console.error("error",error);

}
}
b()