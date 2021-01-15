//By using the rest operator (…) in array destructuring, you can put all the remaining elements of an array in a new array.
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);  