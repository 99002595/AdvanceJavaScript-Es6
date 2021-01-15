/*It takes an array of Promises as an argument. This method returns a resolved Promise that fulfills 
when all of the Promises which are passed as an iterable have been fulfilled.*/
const PromiseA = Promise.resolve('promise1 Executing');  
const PromiseB = 'Promise 2';  
const PromiseC = new Promise(function(resolve, reject) {  
  setTimeout(resolve, 100, 1000);  
});  
  
Promise.all([PromiseA, PromiseB, PromiseC]).then(function(values) {  
  console.log(values);  
});  