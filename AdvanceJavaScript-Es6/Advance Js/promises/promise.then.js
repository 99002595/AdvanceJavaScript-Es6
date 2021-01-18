/*.then(): This method invokes when a Promise is either fulfilled or rejected. 
This method can be chained for handling the rejection or fulfillment of the Promise. 
It takes two functional arguments for resolved and rejected. The first one gets invoked 
when the Promise is fulfilled, and the second one (which is optional) gets invoked when the Promise is rejected.*/
function success(a) {
    console.log(a + " it worked!")
}  
    
  let error = (a) => {  
    console.log(a + " it failed!")  
  }  
    
  const callPromise = num => {  
    return new Promise((resolve,reject) => {  
      if((num%2)==0){  
        resolve("Success!")  
      }  
      reject("Failure!")  
    })  
  }  
    
  callPromise(100).then(success, error)   
  callPromise(21).then(success,error)  