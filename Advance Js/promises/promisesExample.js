//A Promise represents something that is eventually fulfilled.
// A Promise can either be rejected or resolved based on the operation outcome.
//The Promise represents the completion of an asynchronous operation.
//Functions running in parallel with other functions are called asynchronous
let newPromise = new Promise((resolve, reject)=>{  
    let a = 3;  
    if(a==3){  
        resolve('Success');  
    }  
    else{  
        reject('Failed');  
    }  
})  
newPromise.then((message)=>{  
    console.log(message)  
}).catch((message)=>{  
console.log(message)  
})