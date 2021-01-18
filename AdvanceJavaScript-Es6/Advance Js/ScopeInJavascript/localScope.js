//Scope determines the accessibility (visibility) of these variables.
//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables have Function scope: They can only be accessed from within the function.

// code here can NOT use carName
//console.log(scope);  //Error
function myFunction() {
    var scope= "local";
    console.log(scope);
  
    // code here CAN use carName
  
  }
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
//Local variables are created when a function starts, and deleted when the function is completed.
myFunction();