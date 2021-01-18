//Promise.then() takes two arguments, a callback for success and another for failure.
let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        resolve('Çleaned The Room');
    });
};
let removeGarbage=function(message){
    return new Promise(function(resolve,reject){
        resolve(message+ ' remove Garbage');
    });
};
let winIceCream=function(message){
    return new Promise(function(resolve,reject){
        resolve(message + 'won Icecream');
    });
};
Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log('one of them is finished');
})