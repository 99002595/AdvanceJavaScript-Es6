/*Destructuring means to break down a complex structure into simpler parts.
With the syntax of destructuring, you can extract smaller fragments from objects and arrays. 
It can be used for assignments and declaration of a variable.
Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. 
When destructuring an array, we use their positions (or index) in an assignment.*/
var fullName = ["Aruna", "Jyothi"]  
// destructuring assignment  
var [firstName, secondName] = fullName;  
  
console.log(firstName); 
console.log(secondName); 