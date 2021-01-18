//All JavaScript objects inherit properties and methods from a prototype.
//The prototype object is special type of enumerable object to which additional 
//properties can be attached to it which will be shared across all the instances of it's constructor function.
function Student() {
  this.name = 'Aruna Jyothi';
  this.gender = 'Female';
}

Student.prototype.age = 21;

var studObj1 = new Student();
console.log(studObj1.age); // 21

var studObj2 = new Student();
console.log(studObj2.age); // 21
 