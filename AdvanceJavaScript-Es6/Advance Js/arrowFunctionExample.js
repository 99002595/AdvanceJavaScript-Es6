const vowels = [
    'a',
    'e',
    'i',
    'o',
    'u'
  ];
  
console.log(vowels.map(vowels =>vowels.length));
/*priniting sum using arrow functions*/

var func=(a,b=10)=>{return (a+b)}

console.log(func(500))     //In ES6, the function allows the initialization of parameters with default values, if there is no value passed to it
console.log(func(20,30))   //it ignores the default value, if both the parameters are passed to the function

//Arrow Function without Parentheses

var show = x => {  
  console.log(x);  
}  
show("arrow function:without Parentheses");   