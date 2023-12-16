//set immediate


setTimeout(function() {
    console.log("This will run nearly immediately.");
  }, 0);

  

  /////////////////


  ////////set timeout

  setTimeout(function() {
    console.log("This will be logged after 2000 milliseconds (2 seconds).");
  }, 2000);



  /////set interval



  const a=setInterval(function() {
    console.log("This will be logged every 3 seconds.");
  }, 3000);


  setTimeout(() => {
    console.log("stoped interval");
    clearInterval(a)
  },4000);
