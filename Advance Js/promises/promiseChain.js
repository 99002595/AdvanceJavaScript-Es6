/*Promise chaining allows us to control the flow of JavaScript asynchronous operations. By using Promise chaining, 
we can use the returned value of a Promise as the input to another asynchronous operation.*/
const PromiseA = () =>{  
    return new Promise((resolve,reject)=>{  
        resolve("Hello Promoise A");  
    });  
}  

const PromiseB = () =>{  
    return new Promise((resolve,reject)=>{  
        resolve("Hello Promise B");  
    });  
}  


const PromiseC = () =>{  
    return new Promise((resolve,reject)=>{  
        resolve("Hello Promise C");  
    });  
}  
PromiseA().then((A)=>{  
          console.log(A);  
            return PromiseB();  
        }).then((B)=>{  
            console.log(B);  
            return PromiseC();  
        }).then((C)=>{  
            console.log(C);  
        }); 