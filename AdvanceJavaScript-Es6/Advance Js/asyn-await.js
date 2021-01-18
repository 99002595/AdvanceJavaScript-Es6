//async makes a function return a Promise

//await makes a function wait for a Promise

const pi = async () => {
	return Math.PI;
}

pi().then(res => console.log(res));

//await
//The await keyword can only be used inside an async function.
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("waiting to resolve!!");
    });
    console.log(await myPromise);
  }
  
  myDisplay();