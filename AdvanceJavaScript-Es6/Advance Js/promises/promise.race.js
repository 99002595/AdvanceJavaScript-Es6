//This method is used to return a resolved Promise based on the first referenced Promise that resolves.
const Promise1 = new Promise((resolve,reject) => {  
    setTimeout(resolve("Promise 1 is first"),1000)  
})  
  
const Promise2= new Promise((resolve,reject) =>{  
    setTimeout(resolve("Promise 2 is first"),2000)  
})  
  
Promise.race([Promise2,Promise1]).then(result => {  
    console.log(result);  
})  