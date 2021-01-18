/*It is similar to array destructuring except that instead of values being pulled out of an array, 
the properties (or keys) and their corresponding values can be pulled out from an object.
When destructuring the objects, we use keys as the name of the variable. The variable name must match the property (or keys) 
name of the object. If it does not match, then it receives an undefined value. This is how JavaScript knows which property of
the object we want to assign.In object destructuring, the values are extracted by the keys instead of position (or index).*/
const employee = {name: 'Aruna', designation: 'Associate Engineer', psno: '40012800'};  
const {name, designation, psno} =  employee;  
console.log(name);  
console.log(designation); 
console.log(psno); 

//We can assign a variable with a different name than the property of the object
const num = {x: 100, y: 200};  
const {x: num1, y: num2} = num;  
   
console.log(num1);  
console.log(num2);

//if the value of the variable is not assigned when you declare it, then you can assign its value during destructuring.
/* the use of parentheses () around the assignment statement is mandatory when using variable destructuring assignment without a declaration.
 Otherwise, the syntax will be invalid.*/
let fname, empDesignation;  
({fname, empDesignation} = {fname: 'Aruna', empDesignation: 'Associate Engineer'});   
console.log(fname);  
console.log(empDesignation); 

//By using the rest operator (…) in object destructuring, we can put all the remaining keys of an object in a new object variable.
let {a, b, ...args} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
console.log(a);   
console.log(b);   
console.log(args);  

