//.catch(): It takes only one functional argument for handling the errors.
const callPromise = num => {  
    return new Promise((resolve,reject) => {  
      if(num > 0){  
        resolve("Success!")  
      }  
      reject("Failure!")  
    })  
  }  
    
  callPromise(20).then(res => {  
    throw new Error();  
    console.log(res + " success!")  
  }).catch(error => {  
    console.log(error + " oh no, it failed!")  
  })  