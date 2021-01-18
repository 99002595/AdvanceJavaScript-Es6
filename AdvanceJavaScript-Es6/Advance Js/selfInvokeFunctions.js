(function(num1,num2){
    let sum=num1+num2;
	console.log("Sum of Two numbers is  " +sum);
})(10,5);

//aruguments.length property returns the number of arguments received by the function

(function selfInvokeFunction(a,b){
    console.log(arguments.length);
})(4,2);