function myDisplayer(some) {
    console.log(some);
  }
  
  async function myFunction() {return "Im aync:async makes a function return a Promise";}
  
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  //await
  async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("Im waiting : await makes a function wait for a Promise!!");
    });
    console.log(await myPromise);
  }
  myDisplay()