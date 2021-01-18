//The JavaScript prototype property also allows you to add new methods to objects constructors:

 function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
  var myFather = new Person("Veeranna", "G", 50, "blue");
console.log("My father is " + myFather.name()); 