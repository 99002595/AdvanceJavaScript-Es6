//JavaScript CallBacks
//A callback is a function passed as an argument to another function. 
//This technique allows a function to call another function.
//A callback function can run after another function has finished.
//A callback is a function passed as an argument to another function.
function myAddition(sum) {
  console.log("Addition is");
  console.log(sum);
}
function myMultiplication(product) {
  console.log("Product of Two Number is");
  console.log(product);
}

function myCalculator(num1, num2,myCallbackAddition,myCallbackMultiplication) {
  let sum = num1 + num2;
  let product=num1*num2;
  myCallbackAddition(sum);
  myCallbackMultiplication(product)
}

myCalculator(5, 5, myAddition,myMultiplication);
