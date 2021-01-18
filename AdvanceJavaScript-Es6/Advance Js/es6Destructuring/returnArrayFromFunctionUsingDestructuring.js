//A function can return an array of values. 
//It is always possible to return an array from a function, but array destructuring makes it more concise to parse the returned array from functions.
function array() {  
    return [100, 200, 300];  
}  
   
var [x, y, z] = array();  
   
console.log(x);  
console.log(y); 
console.log(z); 