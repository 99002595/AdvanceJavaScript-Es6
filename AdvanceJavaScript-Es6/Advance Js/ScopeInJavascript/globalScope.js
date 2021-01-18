//A variable declared outside a function, becomes GLOBAL.
//A global variable has global scope: All scripts and functions on a web page can access it. 

var scope= "globalVariable";

// code here can use carName

function myFunction() {

  // code here can also use carName 
  console.log("inside function can also access",scope)

}
myFunction();

