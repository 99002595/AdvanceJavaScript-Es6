//JavaScript variables can belong to the local or global scope.

//Global variables can be made local (private) with closures.

var outerVariable=3;
var add=function(){
    var inner=2;
    return outerVariable+inner;
};
console.log(add());